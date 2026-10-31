import { recentPapers, galleryGroups, facetCounts } from './gallery.js';
import { facetGroups, normalizeFilters } from './facets.mjs';
import { fetchCatalog } from './catalog-client.js';
const root = document.querySelector('#paper-gallery');
if (root) {
  const results = root.querySelector('#gallery-results'), input = root.querySelector('#gallery-search');
  const more = root.querySelector('#gallery-more'), count = root.querySelector('#gallery-count');
  const controls = [...root.querySelectorAll('[data-facet]')];
  const pageSize = Number(root.dataset.pageSize);
  let filters, shown = pageSize, papers, found = [];
  const readURL = () => {
    const params = new URLSearchParams(location.search);
    filters = normalizeFilters(Object.fromEntries(params));
    input.value = params.get('q') ?? '';
    if (facetGroups.slice(1).some(g => filters[g.key] !== 'all')) root.querySelector('.gallery-extra')?.setAttribute('open','');
  };
  readURL();
  const translate = (scope=root) => scope.querySelectorAll('[data-en]').forEach(el => { el.textContent = el.dataset[document.documentElement.lang === 'zh' ? 'zh' : 'en']; });
  const syncURL = () => {
    if (!document.body.dataset.page.startsWith('recent/')) return;
    const next = new URLSearchParams(location.search);
    next.delete('lens');
    for (const g of facetGroups) { next.delete(g.key); if (filters[g.key] !== 'all') next.set(g.key,filters[g.key]); }
    next.delete('q');
    if (input.value.trim()) next.set('q', input.value.trim());
    history.replaceState(null, '', location.pathname + (next.size ? '?' + next : '') + location.hash);
  };
  const reset = () => { filters = normalizeFilters(); input.value = ''; render(); syncURL(); };
  const render = () => {
    if (!papers) return;
    shown = pageSize;
    found = recentPapers(papers, { ...filters, q: input.value });
    const counts = facetCounts(papers,{...filters,q:input.value});
    count.innerHTML = `${found.length} <span data-en="papers" data-zh="篇论文">papers</span>`;
    results.innerHTML = found.length ? galleryGroups(found.slice(0, shown)) : '<div class="gallery-empty"><h3 data-en="No matching papers" data-zh="暂无匹配论文">No matching papers</h3><button id="gallery-reset" data-en="Reset filters" data-zh="重置筛选">Reset filters</button></div>';
    root.querySelector('#gallery-reset')?.addEventListener('click', reset);
    more.hidden = found.length <= shown;
    controls.forEach(b => {
      b.setAttribute('aria-pressed', b.dataset.value === filters[b.dataset.facet]);
      b.querySelector('[data-facet-count]').textContent = counts[b.dataset.facet][b.dataset.value];
    });
    const active=facetGroups.filter(g=>filters[g.key]!=='all');
    root.querySelector('#filter-badge').textContent=active.length ? ` · ${active.length}` : '';
    const activeRoot=root.querySelector('#gallery-active');
    activeRoot.replaceChildren();
    for(const g of active){
      const choice=g.options.find(o=>o[0]===filters[g.key]);
      const button=document.createElement('button');
      const label=document.createElement('span');
      label.dataset.en=choice[1];label.dataset.zh=choice[2];label.textContent=choice[1];
      button.type='button';button.append(label,' ×');
      button.addEventListener('click',()=>{filters[g.key]='all';render();syncURL();root.querySelector('.gallery-extra summary').focus();});
      activeRoot.append(button);
    }
    translate();
  };
  controls.forEach(b => b.addEventListener('click', () => { filters[b.dataset.facet] = b.dataset.value; render(); syncURL(); }));
  root.querySelector('#gallery-clear').addEventListener('click', reset);
  input.addEventListener('input', () => { render(); syncURL(); });
  function appendBatch(moveFocus=false) {
    if (shown >= found.length) return;
    const batch = found.slice(shown, shown + pageSize);
    const fragment = document.createElement('template');
    fragment.innerHTML = galleryGroups(batch);
    translate(fragment.content);
    const first = fragment.content.firstElementChild, last = results.lastElementChild;
    const firstLink = first.querySelector('.gallery-card a');
    // A batch may start in the previous month. Keep that section and its open cards intact.
    if (last?.querySelector('time')?.dateTime === first.querySelector('time').dateTime) {
      const grid = last.querySelector('.research-gallery');
      grid.append(...first.querySelector('.research-gallery').children);
      last.querySelector('[data-shown-count]').textContent = grid.childElementCount;
      first.remove();
    }
    results.append(fragment.content);
    shown += batch.length;
    if (moveFocus) firstLink.focus({preventScroll:true});
    more.hidden = shown >= found.length;
  }
  more.addEventListener('click', () => appendBatch(true));
  if (document.body.dataset.page === 'recent/' && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) appendBatch();
    }, {rootMargin:'0px 0px 320px 0px'});
    observer.observe(more);
  }
  document.addEventListener('atlas:language', () => translate());
  // Native cover/feed fragment travel must not reset an in-progress reading session.
  if (document.body.dataset.page === 'recent/') window.addEventListener('popstate', () => { readURL(); render(); });
  try { papers = (await fetchCatalog()).papers; render(); }
  catch {
    count.innerHTML = '<span data-en="Filters unavailable. Static previews and paper links still work." data-zh="筛选暂不可用，静态概览和论文链接仍可访问。">Filters unavailable. Static previews and paper links still work.</span>';
    controls.forEach(b => b.disabled = true); input.disabled = true; more.hidden = true; translate();
  }
}
