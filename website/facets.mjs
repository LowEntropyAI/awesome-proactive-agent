// Shared vocabulary, not mutually exclusive paper categories. IDs are stable URL values.
export const facetGroups = [
  { key: 'question', en: 'Proactive decision', zh: '主动决策', options: [
    ['need', 'Need & intent', '需求与意图'], ['clarification', 'Ask & clarify', '提问与澄清'],
    ['timing', 'Timing & silence', '时机与静默'], ['planning', 'Anticipate & plan', '预判与规划'],
    ['personalization', 'Adapt to the person', '个性化适应'], ['safety', 'Boundaries & trust', '边界与信任']
  ] },
  { key: 'context', en: 'Interaction context', zh: '交互场景', options: [
    ['streaming', 'Streaming', '流式交互'], ['personal', 'Personal assistance', '个人助理'],
    ['dialogue', 'Dialogue & collaboration', '对话与协作'], ['digital', 'Digital work & mobile', '数字工作与移动端'],
    ['embodied', 'Embodied & robotics', '具身与机器人'], ['multimodal', 'Multimodal & wearable', '多模态与穿戴']
  ] },
  { key: 'mechanism', en: 'Mechanism', zh: '技术机制', options: [
    ['memory', 'Memory', '记忆'], ['reasoning', 'Reasoning & planning', '推理与规划'],
    ['learning', 'Policy learning', '策略学习'], ['runtime', 'Runtime & activation', '运行时与唤醒']
  ] },
  { key: 'evidence', en: 'Research contribution', zh: '研究贡献', options: [
    ['benchmark', 'Benchmarks', '基准评测'], ['human', 'Human studies & judgments', '用户研究与判断'],
    ['conceptual', 'Concepts & frameworks', '概念与框架']
  ] }
];
export function normalizeFilters(input = {}) {
  const result = Object.fromEntries(facetGroups.map(g => [g.key, g.options.some(o => o[0] === input[g.key]) ? input[g.key] : 'all']));
  // Preserve previously shared gallery links.
  const old = { streaming: ['context','streaming'], clarification: ['question','clarification'], benchmark: ['evidence','benchmark'] }[input.lens];
  if (old && result[old[0]] === 'all') result[old[0]] = old[1];
  return result;
}
export function matchesFacets(paper, input = {}) {
  const filters = normalizeFilters(input);
  return facetGroups.every(({key}) => filters[key] === 'all' || paper.facets?.[key]?.includes(filters[key]));
}
export function validateFacets(records, recent, streaming) {
  for (const id of Object.keys(records)) if (!recent[id]) throw Error(`Orphan recent facets: ${id}`);
  for (const id of Object.keys(recent)) {
    const f = records[id];
    if (!f?.question?.length) throw Error(`Missing proactive decision facets: ${id}`);
    for (const {key,options} of facetGroups) {
      if (!Array.isArray(f[key]) || new Set(f[key]).size !== f[key].length || f[key].some(v => !options.some(o => o[0] === v))) throw Error(`Invalid ${key} facet: ${id}`);
    }
    if (f.context.includes('streaming') !== streaming.includes(id)) throw Error(`Conflicting streaming annotation: ${id}`);
  }
}
