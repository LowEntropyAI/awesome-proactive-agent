import { recentPapers, galleryGroups, facetCounts } from './gallery.js';
import { facetGroups, normalizeFilters } from './facets.mjs';
const root = document.querySelector('#paper-gallery');
if (root) {
  const results = root.querySelector('#gallery-results'), input = root.querySelector('#gallery-search');
  const more = root.querySelector('#gallery-more'), count = root.querySelector('#gallery-count');
  const controls = [...root.querySelectorAll('[data-facet]')];
  const pageSize = Number(root.dataset.pageSize);
  let filters, shown = pageSize, papers;
  const readURL = () => {
    const params = new URLSearchParams(location.search);
    filters = normalizeFilters(Object.fromEntries(params));
    input.value = params.get('q') ?? '';
    if (facetGroups.slice(1).some(g => filters[g.key] !== 'all')) root.querySelector('.gallery-extra')?.setAttribute('open','');
  };
  readURL();
  const translate = () => root.querySelectorAll('[data-en]').forEach(el => { el.textContent = el.dataset[document.documentElement.lang === 'zh' ? 'zh' : 'en']; });
  const syncURL = () => {
    if (!document.body.dataset.page.startsWith('recent/')) return;
    const next = new URLSearchParams(location.search);
    next.delete('lens');
    for (const g of facetGroups) { next.delete(g.key); if (filters[g.key] !== 'all') next.set(g.key,filters[g.key]); }
    next.delete('q');
    if (input.value.trim()) next.set('q', input.value.trim());
    history.replaceState(null, '', location.pathname + (next.size ? '?' + next : '') + location.hash);
  };
  const reset = () => { filters = normalizeFilters(); input.value = ''; shown = pageSize; render(); syncURL(); };
  const render = () => {
    if (!papers) return;
    const found = recentPapers(papers, { ...filters, q: input.value });
    const counts = facetCounts(papers,{...filters,q:input.value});
    count.innerHTML = `${found.length} <span data-en="papers" data-zh="篇论文">papers</span>`;
    results.innerHTML = found.length ? galleryGroups(found.slice(0, shown)) : '<div class="gallery-empty"><h3 data-en="No matching papers" data-zh="暂无匹配论文">No matching papers</h3><button id="gallery-reset" data-en="Reset filters" data-zh="重置筛选">Reset filters</button></div>';
    root.querySelector('#gallery-reset')?.addEventListener('click', reset);
    more.hidden = found.length <= shown;
    controls.forEach(b => {
      b.setAttribute('aria-pressed', b.dataset.value === filters[b.dataset.facet]);
      b.querySelector('[data-facet-count]').textContent = counts[b.dataset.facet][b.dataset.value];
    });
    translate();
  };
  controls.forEach(b => b.addEventListener('click', () => { filters[b.dataset.facet] = b.dataset.value; shown = pageSize; render(); syncURL(); }));
  root.querySelector('#gallery-clear').addEventListener('click', reset);
  input.addEventListener('input', () => { shown = pageSize; render(); syncURL(); });
  more.addEventListener('click', () => { shown += pageSize; render(); });
  document.addEventListener('atlas:language', translate);
  window.addEventListener('popstate', () => { readURL(); shown = pageSize; render(); });
  try { const response = await fetch(document.body.dataset.base + 'catalog.json'); if (!response.ok) throw new Error('Catalog unavailable'); papers = (await response.json()).papers; render(); }
  catch {
    count.innerHTML = '<span data-en="Filters unavailable. Static previews and paper links still work." data-zh="筛选暂不可用，静态概览和论文链接仍可访问。">Filters unavailable. Static previews and paper links still work.</span>';
    controls.forEach(b => b.disabled = true); input.disabled = true; more.hidden = true; translate();
  }
}
