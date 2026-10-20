import { recentPapers, galleryGroups } from './gallery.js';
const root = document.querySelector('#paper-gallery');
if (root) {
  const results = root.querySelector('#gallery-results'), input = root.querySelector('#gallery-search');
  const more = root.querySelector('#gallery-more'), count = root.querySelector('#gallery-count');
  const pageSize = Number(root.dataset.pageSize);
  const params = new URLSearchParams(location.search);
  let lens = ['all', 'streaming', 'clarification', 'benchmark'].includes(params.get('lens')) ? params.get('lens') : 'all';
  input.value = params.get('q') ?? '';
  let shown = pageSize, papers;
  const translate = () => root.querySelectorAll('[data-en]').forEach(el => { el.textContent = el.dataset[document.documentElement.lang === 'zh' ? 'zh' : 'en']; });
  const render = () => {
    if (!papers) return;
    const found = recentPapers(papers, { lens, q: input.value });
    count.innerHTML = `${found.length} <span data-en="papers" data-zh="篇论文">papers</span>`;
    results.innerHTML = found.length ? galleryGroups(found.slice(0, shown)) : '<div class="gallery-empty"><h3 data-en="No matching papers" data-zh="暂无匹配论文">No matching papers</h3><button id="gallery-reset" data-en="Reset filters" data-zh="重置筛选">Reset filters</button></div>';
    root.querySelector('#gallery-reset')?.addEventListener('click', () => { lens = 'all'; input.value = ''; shown = pageSize; render(); syncURL(); });
    more.hidden = found.length <= shown;
    root.querySelectorAll('[data-lens]').forEach(b => b.setAttribute('aria-pressed', b.dataset.lens === lens));
    translate();
  };
  const syncURL = () => {
    if (!document.body.dataset.page.startsWith('recent/')) return;
    const next = new URLSearchParams();
    if (lens !== 'all') next.set('lens', lens);
    if (input.value.trim()) next.set('q', input.value.trim());
    history.replaceState(null, '', location.pathname + (next.size ? '?' + next : ''));
  };
  root.querySelectorAll('[data-lens]').forEach(button => button.addEventListener('click', () => { lens = button.dataset.lens; shown = pageSize; render(); syncURL(); }));
  input.addEventListener('input', () => { shown = pageSize; render(); syncURL(); });
  more.addEventListener('click', () => { shown += pageSize; render(); });
  document.addEventListener('atlas:language', translate);
  window.addEventListener('popstate', () => { const p = new URLSearchParams(location.search); lens = p.get('lens') || 'all'; input.value = p.get('q') || ''; shown = pageSize; render(); });
  try { const response = await fetch(document.body.dataset.base + 'catalog.json'); if (!response.ok) throw new Error('Catalog unavailable'); papers = (await response.json()).papers; render(); }
  catch { count.innerHTML = '<span data-en="Filters unavailable. Static previews and paper links still work." data-zh="筛选暂不可用，静态概览和论文链接仍可访问。">Filters unavailable. Static previews and paper links still work.</span>'; more.hidden = true; translate(); }
}
