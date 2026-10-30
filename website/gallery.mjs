// Shared by the static generator and browser. No network, clock or locale-dependent order.
import { paperPath } from './paper-detail.mjs';
import { facetGroups, matchesFacets, normalizeFilters } from './facets.mjs';
const base = '/awesome-proactive-agent/';
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const bi = (en, zh) => `<span data-en="${esc(en)}" data-zh="${esc(zh)}">${esc(en)}</span>`;
export function recentPapers(papers, { q = '', ...filters } = {}) {
  const terms = q.normalize('NFKC').toLowerCase().trim().split(/\s+/).filter(Boolean);
  return papers.filter(p => p.publishedAt &&
    matchesFacets(p, filters) &&
    terms.every(t => [p.title, p.displayTitle, p.gallerySummary, ...p.tags, ...facetGroups.flatMap(g => g.options.filter(o => p.facets?.[g.key]?.includes(o[0])).flat())].join(' ').normalize('NFKC').toLowerCase().includes(t)))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.title.localeCompare(b.title));
}
export function facetCounts(papers, input = {}) {
  const filters = normalizeFilters(input);
  return Object.fromEntries(facetGroups.map(g => {
    const subset = recentPapers(papers, {...filters, [g.key]: 'all', q: input.q ?? ''});
    return [g.key, Object.fromEntries([['all', subset.length], ...g.options.map(([v]) => [v, subset.filter(p => p.facets?.[g.key]?.includes(v)).length])])];
  }));
}
function filterControls(papers, compact) {
  const counts = facetCounts(papers);
  const rows = facetGroups.map(g => `<fieldset class="gallery-facet"><legend>${bi(g.en,g.zh)}</legend><div class="gallery-lenses">${[['all','All','不限'],...g.options].map(([v,en,zh]) => `<button type="button" data-facet="${g.key}" data-value="${v}"${v === 'streaming' ? ' data-lens="streaming"' : ''} aria-pressed="${v === 'all'}">${bi(en,zh)} <small data-facet-count>${counts[g.key][v]}</small></button>`).join('')}</div></fieldset>`);
  return `<details class="gallery-extra gallery-filter-panel"><summary>${bi('Explore by question, context, mechanism or evidence','按问题、场景、机制或贡献筛选')} <span id="filter-badge"></span></summary><div class="gallery-facets">${rows.join('')}</div><p class="gallery-filter-help">${bi('One choice per row; rows combine. Overlapping editorial lenses, not a complete taxonomy.','每行选一项，跨行取交集；这些是可重叠的编辑视角，而非完整分类。')}</p></details>`;
}
const statusZh = { 'Available': '已开放', 'Available (harness)': '推理 / 评测框架已开放', 'Not applicable': '不适用', 'Partial': '部分开放', 'Announced': '宣布待开放', 'Not verified': '未核实开放', 'Planned Nov 2026': '计划 2026 年 11 月', 'Website / tools only': '仅网页 / 辅助工具' };
function releaseInfo(p) {
  const r = p.release;
  if (!r) return '';
  return `<details class="release-info"><summary>${bi('Release check', '开放状态')} · ${esc(r.checkedAt)}</summary><dl>${[['code', 'Code', '代码'], ['model', 'Weights', '权重'], ['data', 'Data', '数据']].map(([k, en, zh]) => `<div><dt>${bi(en, zh)}</dt><dd data-status="${esc(r[k])}">${bi(r[k], statusZh[r[k]] ?? r[k])}</dd></div>`).join('')}</dl><p>${esc(r.detail)}</p><div class="release-sources">${r.sources.map((s, i) => `<a href="${esc(s)}" target="_blank" rel="noopener noreferrer">${bi('Source', '来源')} ${i + 1} ↗</a>`).join('')}</div></details>`;
}
export function galleryCard(p) {
  const t = p.thumbnail;
  const preview = t ? `<a class="gallery-preview" href="${paperPath(p)}" data-preview-paper="${esc(p.id)}"><img src="${esc(t.src)}" alt="${esc(t.alt)}" loading="lazy" decoding="async" width="600" height="360"></a><a class="gallery-credit" href="${esc(t.source)}" target="_blank" rel="noopener noreferrer">${esc(t.caption)} ↗</a>` : `<a class="gallery-preview gallery-placeholder" href="${paperPath(p)}" data-preview-paper="${esc(p.id)}"><span class="brief-mark" aria-hidden="true">↗</span><strong>${esc(p.displayTitle ?? p.title.split(':')[0])}</strong><small>${bi('Research brief · no preview figure', '研究简报 · 暂无概览图')}</small></a>`;
  const links = [{ label: 'Paper', url: p.primary }, ...p.resources.filter(r => /github\.com|huggingface\.co|Project|Website|Model|Dataset/.test(r.url + r.label))].filter((r, i, a) => a.findIndex(v => v.url === r.url) === i);
  const brief = p.gallerySummary || p.description || p.summary || p.tags.join(' · ');
  return `<article class="gallery-card" data-paper-id="${esc(p.id)}">${preview}<div class="gallery-body"><div class="gallery-meta"><a href="${esc(p.dateSource ?? p.primary)}" title="First arXiv posting"><time datetime="${esc(p.publishedAt)}">${esc(p.publishedAt)}</time></a><span>${esc(p.venue)}</span>${p.selected ? `<a href="${base}library/?selected=1" class="editor-pick">${bi('Editor’s pick', '编辑精选')}</a>` : ''}</div><h3><a href="${paperPath(p)}" data-preview-paper="${esc(p.id)}">${esc(p.displayTitle ?? p.title)}</a></h3>${p.displayTitle && p.displayTitle !== p.title ? `<p class="gallery-full-title">${esc(p.title)}</p>` : ''}<p class="gallery-brief">${esc(brief)}</p><div class="gallery-tags">${p.tags.slice(0, 3).map(tag => `<a href="${base}library/?tag=${encodeURIComponent(tag)}">${esc(tag)}</a>`).join('')}</div><div class="gallery-resources"><a class="quick-read" href="${paperPath(p)}" data-preview-paper="${esc(p.id)}">${bi('Quick read','快速阅读')} →</a>${links.map(r => `<a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.label)} ↗</a>`).join('')}${p.evidenceUrl ? `<a href="${esc(p.evidenceUrl)}" class="evidence-link">${bi('Evidence card', '证据卡片')} ↗</a>` : ''}</div>${releaseInfo(p)}</div></article>`;
}
export function galleryGroups(papers) {
  const days = new Map();
  for (const p of papers) { const month = p.publishedAt.slice(0, 7); if (!days.has(month)) days.set(month, []); days.get(month).push(p); }
  return [...days].map(([date, group]) => `<section class="gallery-day"><div class="gallery-day-heading"><h3><time datetime="${esc(date)}">${esc(date)}</time></h3><span>${bi('Newest first · first-posted dates', '最新优先 · 首发日期')} · ${group.length} ${bi('papers shown', '篇展示')}</span></div><div class="research-gallery">${group.map(galleryCard).join('')}</div></section>`).join('');
}
export function gallerySection(catalog, compact = false) {
  const papers = recentPapers(catalog.papers), initial = papers.slice(0, compact ? 6 : 9);
  return `<div id="paper-gallery" class="gallery-shell" data-page-size="${compact ? 6 : 9}">
    <p class="gallery-intro">${bi('New papers across proactive AI. Curated for relevance, ordered by first posting—not popularity.', '跨方向浏览主动式 AI 新工作。按相关性筛选、首发日期排序，而非热度。')}</p>
    <div class="gallery-toolbar"><label class="gallery-search"><span class="sr-only">${bi('Search recent papers','搜索近期论文')}</span><input id="gallery-search" type="search" placeholder="Find a paper or direction…" data-placeholder-en="Find a paper or direction…" data-placeholder-zh="搜索论文或研究方向…"></label><button type="button" class="gallery-clear" id="gallery-clear">${bi('Reset filters','重置筛选')}</button></div>
    ${filterControls(papers,compact)}
    <div id="gallery-active" class="gallery-active" aria-label="Active filters"></div>
    <div class="gallery-status"><span id="gallery-count" role="status" aria-live="polite">${papers.length} ${bi('papers', '篇论文')}</span><span>${bi('Source dates', '日期来源')} · <a href="${esc(papers[0]?.dateSource ?? 'https://arxiv.org/')}">arXiv ↗</a></span></div><div id="gallery-results">${galleryGroups(initial)}</div><div class="gallery-more"><button id="gallery-more" type="button"${papers.length <= initial.length ? ' hidden' : ''}>${bi('Show more papers', '展示更多论文')} ↓</button><a href="${base}${compact ? 'recent/' : 'library/'}">${compact ? bi('Open the full gallery', '打开完整论文画廊') : bi('Explore the full library', '查看全部文献')} →</a></div><noscript><p>Enable JavaScript to filter or show more. All papers remain accessible in <a href="${base}library/">the library</a>.</p></noscript></div>`;
}
