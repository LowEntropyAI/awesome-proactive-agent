// Shared by the static generator and browser. No network, clock or locale-dependent order.
const base = '/awesome-proactive-agent/';
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const bi = (en, zh) => `<span data-en="${esc(en)}" data-zh="${esc(zh)}">${esc(en)}</span>`;
export function recentPapers(papers, { q = '', lens = 'all' } = {}) {
  const terms = q.normalize('NFKC').toLowerCase().trim().split(/\s+/).filter(Boolean);
  return papers.filter(p => p.publishedAt &&
    (lens !== 'streaming' || p.streaming) &&
    (lens !== 'clarification' || p.tags.includes('Clarification')) &&
    (lens !== 'benchmark' || p.tags.includes('Benchmark')) &&
    terms.every(t => [p.title, p.displayTitle, p.gallerySummary, ...p.tags].join(' ').normalize('NFKC').toLowerCase().includes(t)))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.title.localeCompare(b.title));
}
const statusZh = { 'Available': '已开放', 'Available (harness)': '推理 / 评测框架已开放', 'Not applicable': '不适用', 'Partial': '部分开放', 'Announced': '宣布待开放', 'Not verified': '未核实开放', 'Planned Nov 2026': '计划 2026 年 11 月', 'Website / tools only': '仅网页 / 辅助工具' };
function releaseInfo(p) {
  const r = p.release;
  if (!r) return '';
  return `<details class="release-info"><summary>${bi('Release check', '开放状态')} · ${esc(r.checkedAt)}</summary><dl>${[['code', 'Code', '代码'], ['model', 'Weights', '权重'], ['data', 'Data', '数据']].map(([k, en, zh]) => `<div><dt>${bi(en, zh)}</dt><dd data-status="${esc(r[k])}">${bi(r[k], statusZh[r[k]] ?? r[k])}</dd></div>`).join('')}</dl><p>${esc(r.detail)}</p><div class="release-sources">${r.sources.map((s, i) => `<a href="${esc(s)}" target="_blank" rel="noopener noreferrer">${bi('Source', '来源')} ${i + 1} ↗</a>`).join('')}</div></details>`;
}
export function galleryCard(p) {
  const t = p.thumbnail;
  const preview = t ? `<a class="gallery-preview" href="${esc(t.original)}" target="_blank" rel="noopener noreferrer"><img src="${esc(t.src)}" alt="${esc(t.alt)}" loading="lazy" decoding="async" width="600" height="360"></a><a class="gallery-credit" href="${esc(t.source)}" target="_blank" rel="noopener noreferrer">${esc(t.caption)} ↗</a>` : `<a class="gallery-preview gallery-placeholder" href="${esc(p.primary)}" target="_blank" rel="noopener noreferrer"><span class="brief-mark" aria-hidden="true">↗</span><strong>${esc(p.displayTitle ?? p.title.split(':')[0])}</strong><small>${bi('Research brief · no preview figure', '研究简报 · 暂无概览图')}</small></a>`;
  const links = [{ label: 'Paper', url: p.primary }, ...p.resources.filter(r => /github\.com|huggingface\.co|Project|Website|Model|Dataset/.test(r.url + r.label))].filter((r, i, a) => a.findIndex(v => v.url === r.url) === i);
  const brief = p.gallerySummary || p.description || p.summary || p.tags.join(' · ');
  return `<article class="gallery-card" data-paper-id="${esc(p.id)}">${preview}<div class="gallery-body"><div class="gallery-meta"><a href="${esc(p.dateSource ?? p.primary)}" title="First arXiv posting"><time datetime="${esc(p.publishedAt)}">${esc(p.publishedAt)}</time></a><span>${esc(p.venue)}</span>${p.selected ? `<a href="${base}library/?selected=1" class="editor-pick">${bi('Editor’s pick', '编辑精选')}</a>` : ''}</div><h3><a href="${esc(p.primary)}" target="_blank" rel="noopener noreferrer">${esc(p.displayTitle ?? p.title)} ↗</a></h3>${p.displayTitle && p.displayTitle !== p.title ? `<p class="gallery-full-title">${esc(p.title)}</p>` : ''}<p class="gallery-brief">${esc(brief)}</p><div class="gallery-tags">${p.tags.slice(0, 3).map(tag => `<a href="${base}library/?tag=${encodeURIComponent(tag)}">${esc(tag)}</a>`).join('')}</div><div class="gallery-resources">${links.map(r => `<a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.label)} ↗</a>`).join('')}${p.evidenceUrl ? `<a href="${esc(p.evidenceUrl)}" class="evidence-link">${bi('Evidence card', '证据卡片')} ↗</a>` : ''}</div>${releaseInfo(p)}</div></article>`;
}
export function galleryGroups(papers) {
  const days = new Map();
  for (const p of papers) { const month = p.publishedAt.slice(0, 7); if (!days.has(month)) days.set(month, []); days.get(month).push(p); }
  return [...days].map(([date, group]) => `<section class="gallery-day"><div class="gallery-day-heading"><h3><time datetime="${esc(date)}">${esc(date)}</time></h3><span>${bi('Newest first · first-posted dates', '最新优先 · 首发日期')} · ${group.length} ${bi('papers shown', '篇展示')}</span></div><div class="research-gallery">${group.map(galleryCard).join('')}</div></section>`).join('');
}
export function gallerySection(catalog, compact = false) {
  const papers = recentPapers(catalog.papers), initial = papers.slice(0, compact ? 6 : 9);
  return `<div id="paper-gallery" class="gallery-shell" data-page-size="${compact ? 6 : 9}"><p class="gallery-intro">${bi('A visual feed of recently collected research. Ordered by first arXiv posting, not popularity or repository update time.', '近期收录研究的可视化信息流。按 arXiv 首发日期排序，不是热度榜，也不是仓库更新时间。')}</p><div class="gallery-toolbar"><div class="gallery-lenses" role="group" aria-label="Research filters">${[['all', 'All research', '全部研究'], ['streaming', 'Streaming', '流式'], ['clarification', 'Clarification', '主动澄清'], ['benchmark', 'Benchmarks', '评测']].map(([v, en, zh]) => `<button type="button" data-lens="${v}" aria-pressed="${v === 'all'}">${bi(en, zh)}</button>`).join('')}</div><label class="gallery-search"><span class="sr-only">Search recent papers</span><input id="gallery-search" type="search" placeholder="Find a recent paper…" data-placeholder-en="Find a recent paper…" data-placeholder-zh="搜索近期论文…"></label></div><div class="gallery-status"><span id="gallery-count" role="status" aria-live="polite">${papers.length} ${bi('papers', '篇论文')}</span><span>${bi('Source dates', '日期来源')} · <a href="${esc(papers[0]?.dateSource ?? 'https://arxiv.org/')}">arXiv ↗</a></span></div><div id="gallery-results">${galleryGroups(initial)}</div><div class="gallery-more"><button id="gallery-more" type="button"${papers.length <= initial.length ? ' hidden' : ''}>${bi('Show more papers', '展示更多论文')} ↓</button><a href="${base}${compact ? 'recent/' : 'library/'}">${compact ? bi('Open the full gallery', '打开完整论文画廊') : bi('Explore the full library', '查看全部文献')} →</a></div><noscript><p>Enable JavaScript to filter or show more. All papers remain accessible in <a href="${base}library/">the library</a>.</p></noscript></div>`;
}
