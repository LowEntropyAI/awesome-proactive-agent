import { navigationResources } from './resources.js';
import { paperPath, roleBadge } from './paper-detail.mjs';
import { searchPapers } from './search.js';
const $ = selector => document.querySelector(selector);
let lang = document.documentElement.lang === 'zh' ? 'zh' : 'en';
const tr = (en, zh) => lang === 'zh' ? zh : en;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const base = document.body.dataset.base;
function translate() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en]').forEach(el => { el.textContent = el.dataset[lang]; });
  document.querySelectorAll('[data-placeholder-en]').forEach(el => { el.placeholder = el.dataset[lang === 'zh' ? 'placeholderZh' : 'placeholderEn']; });
  $('#language').textContent = lang === 'zh' ? 'EN' : '中文';
  $('#language').setAttribute('aria-label', tr('Switch to Chinese', '切换为英文'));
  $('#theme').setAttribute('aria-label', tr('Switch color theme', '切换颜色主题'));
  document.dispatchEvent(new Event('atlas:language'));
}
function save(key, value) { try { localStorage.setItem(key, value); } catch { /* Works without storage. */ } }
$('#language').addEventListener('click', () => { lang = lang === 'en' ? 'zh' : 'en'; save('atlas-language', lang); translate(); if (render) render(false); if (renderDirectory) renderDirectory(); });
$('#theme').addEventListener('click', () => { const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'; document.documentElement.dataset.theme = theme; save('atlas-theme', theme); });
translate();
document.addEventListener('keydown', event => { if (event.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName) && !event.metaKey && !event.ctrlKey) { const input = $('#search') ?? $('#directory-search'); if (input) { event.preventDefault(); input.focus(); } } });
let render = null, renderDirectory = null;
function card(p) {
  const resources = navigationResources(p);
  return `<article class="paper-card">${p.thumbnail ? `<a class="directory-cover" href="${esc(p.primary)}"><img src="${esc(p.thumbnail.src)}" alt="${esc(p.thumbnail.alt)}" width="600" height="360" loading="lazy" decoding="async"></a><a class="directory-credit" href="${esc(p.thumbnail.source)}">${esc(p.thumbnail.caption)} ↗</a>` : ''}<div class="paper-main"><div class="paper-meta"><span>${esc(p.date)}</span><span>${esc(p.venue)}</span>${roleBadge(p)}</div><h3><a href="${paperPath(p)}">${esc(p.title)}</a></h3><div class="tags">${p.tags.map(t => `<a href="${base}library/?tag=${encodeURIComponent(t)}">${esc(t)}</a>`).join('')}</div></div><div class="resource-links">${resources.map(r => `<a class="resource-link" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.label)} <span aria-hidden="true">↗</span></a>`).join('')}</div></article>`;
}
if ($('#catalog')) {
  const controls = ['category', 'tag', 'year', 'venue', 'code', 'featured', 'selected', 'sort'];
  const streaming = $('#catalog').dataset.streaming === 'true';
  const pageSize = 20;
  let catalog, page = 1;
  function readURL() {
    const params = new URLSearchParams(location.search);
    $('#search').value = params.get('q') || '';
    for (const name of controls) { const el = $('#' + name); if (el.type === 'checkbox') el.checked = params.get(name) === '1'; else el.value = params.get(name) || (name === 'sort' ? 'newest' : ''); }
    page = Math.max(1, Number(params.get('page')) || 1);
  }
  function filters() { return Object.fromEntries([['q', $('#search').value.trim()], ...controls.map(n => [n, $('#' + n).type === 'checkbox' ? $('#' + n).checked : $('#' + n).value])]); }
  function syncURL(f) {
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(f)) if (value && !(key === 'sort' && value === 'newest')) params.set(key, value === true ? '1' : value);
    if (page > 1) params.set('page', page);
    const next = location.pathname + (params.size ? '?' + params : '');
    if (next !== location.pathname + location.search) history.replaceState(null, '', next);
  }
  readURL();
  render = (sync = true) => {
    if (!catalog) return;
    const f = filters();
    const results = searchPapers(catalog.papers, f, streaming);
    const pages = Math.max(1, Math.ceil(results.length / pageSize)); page = Math.min(page, pages);
    $('#result-count').textContent = `${results.length} ${tr('papers', '篇论文')}`;
    $('#paper-results').innerHTML = results.length ? results.slice((page - 1) * pageSize, page * pageSize).map(card).join('') : `<div class="empty-results"><span>⌕</span><h2>${tr('No papers in this view.', '没有匹配的论文。')}</h2><p>${tr('Try fewer filters or a broader search term.', '请减少筛选条件或尝试更宽泛的关键词。')}</p><button class="button primary" id="empty-reset">${tr('Reset filters', '重置筛选')} →</button></div>`;
    $('#empty-reset')?.addEventListener('click', reset);
    const chips = Object.entries(f).filter(([key, value]) => value && key !== 'sort').map(([key, value]) => {
      const label = value === true ? ({ code: tr('Code / data', '代码 / 数据'), featured: tr('Essential reads', '入门必读'), selected: tr('Editor’s picks', '编辑精选') })[key] : key === 'category' ? catalog.categories.find(c => c.key === value)?.[lang === 'zh' ? 'zh' : 'short'] : value;
      return `<button data-remove="${key}" aria-label="${esc(tr('Remove filter', '移除筛选'))}: ${esc(label)}">${esc(label)} <span aria-hidden="true">×</span></button>`;
    });
    $('#active-filters').innerHTML = chips.join('');
    $('#active-filters').querySelectorAll('button').forEach(button => button.addEventListener('click', () => { const name = button.dataset.remove; const el = name === 'q' ? $('#search') : $('#' + name); if (el.type === 'checkbox') el.checked = false; else el.value = ''; page = 1; render(); }));
    $('#pagination').innerHTML = results.length ? `<button id="prev-page" ${page === 1 ? 'disabled' : ''}>← ${tr('Previous', '上一页')}</button><span>${tr('Page', '第')} ${page} ${tr('of', '/')} ${pages}${tr('', ' 页')}</span><button id="next-page" ${page === pages ? 'disabled' : ''}>${tr('Next', '下一页')} →</button>` : '';
    for (const [id, step] of [['prev-page', -1], ['next-page', 1]]) $('#' + id)?.addEventListener('click', () => { page += step; render(); $('#catalog').scrollIntoView({ block: 'start', behavior: 'auto' }); });
    if (sync) syncURL(f);
  };
  function reset() { $('#search-form').reset(); controls.forEach(n => { const el = $('#' + n); if (el.type === 'checkbox') el.checked = false; else el.value = n === 'sort' ? 'newest' : ''; }); page = 1; render(); }
  $('#clear-filters').addEventListener('click', reset);
  controls.forEach(n => $('#' + n).addEventListener('change', () => { page = 1; render(); }));
  let timer;
  $('#search').addEventListener('input', () => { clearTimeout(timer); timer = setTimeout(() => { page = 1; render(); }, 140); });
  $('#search-form').addEventListener('submit', event => { event.preventDefault(); clearTimeout(timer); page = 1; render(); });
  window.addEventListener('popstate', () => { readURL(); render(false); });
  try { const response = await fetch(base + 'catalog.json'); if (!response.ok) throw new Error('Catalog unavailable'); catalog = await response.json(); render(); }
  catch { $('#result-count').textContent = tr('Search unavailable. Reload to try again; resource links still work.', '检索暂不可用，请刷新重试；已有论文链接仍可阅读。'); }
}
if ($('#directory-results')) {
  const input = $('#directory-search'), count = $('#directory-count');
  const rows = [...$('#directory-results').querySelectorAll('[data-search]')];
  const buttons=[...document.querySelectorAll('[data-project-group]')],groups=[...document.querySelectorAll('[data-project-section]')];
  let group='all';
  function readDirectoryURL(){const params=new URLSearchParams(location.search);input.value=params.get('q')||'';group=buttons.some(b=>b.dataset.projectGroup===params.get('group'))?params.get('group'):'all';}
  readDirectoryURL();
  renderDirectory = (sync = true) => {
    const terms = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
    let visible = 0;
    const matches=row=>terms.every(term=>row.dataset.search.toLowerCase().includes(term));
    rows.forEach(row => { row.hidden = !matches(row)||(group!=='all'&&row.dataset.group!==group); if (!row.hidden) visible++; });
    groups.forEach(section=>{section.hidden=![...section.querySelectorAll('[data-search]')].some(row=>!row.hidden);});
    buttons.forEach(button=>{const key=button.dataset.projectGroup;button.setAttribute('aria-pressed',String(group===key));button.querySelector('[data-group-count]').textContent=rows.filter(row=>matches(row)&&(key==='all'||row.dataset.group===key)).length;});
    if($('#directory-empty'))$('#directory-empty').hidden=visible>0;
    count.textContent = `${visible} ${count.dataset[lang === 'zh' ? 'nounZh' : 'nounEn']}`;
    if (sync) { const params = new URLSearchParams(); if (input.value.trim()) params.set('q', input.value.trim()); if(group!=='all')params.set('group',group); history.replaceState(null, '', location.pathname + (params.size ? '?' + params : '')); }
  };
  input.addEventListener('input', () => renderDirectory());
  buttons.forEach(button=>button.addEventListener('click',()=>{group=button.dataset.projectGroup;renderDirectory();}));
  $('#directory-reset')?.addEventListener('click',()=>{group='all';input.value='';renderDirectory();});
  window.addEventListener('popstate', () => { readDirectoryURL(); renderDirectory(false); });
  renderDirectory(false);
}
