export const normalized = value => String(value).normalize('NFKC').toLowerCase();
const aliases = { '流式': 'streaming', '视频': 'video', '记忆': 'memory', '时机': 'timing', '主动': 'proactive', '澄清': 'clarification', '个性化': 'personalization', '安全': 'safety', '评测': 'benchmark', '移动': 'mobile', '机器人': 'robot', '对话': 'dialogue' };
export function queryTerms(query) {
  return normalized(query).trim().split(/\s+/).filter(Boolean).map(term => aliases[term] ?? term);
}
export function hasCode(p) { return p.resources.some(r => ['Code', 'Dataset', 'GitHub', 'HF Dataset'].includes(r.label) || /github\.com|huggingface\.co\/datasets/.test(r.url)); }
export function searchPapers(papers, filters = {}, streaming = false) {
  const terms = queryTerms(filters.q ?? '');
  const results = [];
  for (const p of papers) {
    if (streaming && !p.streaming) continue;
    if (filters.category && !p.categories.includes(filters.category)) continue;
    if (filters.tag && !p.tags.includes(filters.tag)) continue;
    if (filters.year && !p.date.startsWith(filters.year)) continue;
    if (filters.venue && !(filters.venue === 'arXiv' ? p.venue.startsWith('arXiv') : p.venue === filters.venue)) continue;
    if (filters.notes && !p.note && !p.hasNotes) continue;
    if (filters.code && !hasCode(p)) continue;
    if (filters.featured && !p.featured) continue;
    const title = normalized(p.title), tags = normalized(p.tags.join(' '));
    const haystack = normalized([p.title, p.displayTitle, p.tags.join(' '), p.venue, p.description, p.resources.map(r => r.label + ' ' + r.url).join(' ')].join(' '));
    if (!terms.every(t => haystack.includes(t))) continue;
    const score = terms.reduce((score, term) => score + (title.includes(term) ? 10 : 0) + (tags.includes(term) ? 4 : 0) + 1, 0);
    results.push({ paper: p, score });
  }
  const sort = filters.sort || 'newest';
  return results.sort((a, b) => sort === 'title' ? a.paper.title.localeCompare(b.paper.title) : sort === 'oldest' ? a.paper.date.localeCompare(b.paper.date) || a.paper.title.localeCompare(b.paper.title) : sort === 'relevance' ? b.score - a.score || b.paper.date.localeCompare(a.paper.date) : b.paper.date.localeCompare(a.paper.date) || a.paper.title.localeCompare(b.paper.title)).map(r => r.paper);
}
