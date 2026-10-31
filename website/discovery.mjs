// Reading paths, not a mutually exclusive taxonomy of the field.
import { facetGroups } from './facets.mjs';
import { paperPath, roleBadge } from './paper-detail.mjs';
const base = '/awesome-proactive-agent/';
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const bi = (en, zh) => `<span data-en="${en}" data-zh="${zh}">${en}</span>`;
function initiativeScene() {
  return `<figure class="initiative-scene">
    <div class="timepiece" aria-hidden="true"><div class="dial-ticks"></div>
      <span class="dial-number n12">12</span><span class="dial-number n3">3</span><span class="dial-number n6">6</span><span class="dial-number n9">9</span>
      <i class="time-sector"></i><i class="hand previous"></i><i class="hand hour"></i><i class="hand minute"></i><i class="dial-pin"></i>
    </div>
    <div class="schedule-slip"><small>${bi('Flight delayed','航班延误')}</small><div><del>18:40</del> <span aria-hidden="true">→</span> <strong>19:25</strong></div></div>
    <div class="brief-leaf" aria-hidden="true"></div>
    <div class="brief-sheet"><small><i aria-hidden="true">✦</i> ${bi('Nobody asked','没人开口')}</small>
      <strong>${bi('You’ll miss your connection.','你会赶不上转机。')}</strong>
      <p class="brief-offer">${bi('The 21:10 is ready to book.','21:10 的航班已备好，可直接预订。')}</p>
      <div class="brief-choices"><span>${bi('Book it','预订')}</span><span>${bi('Not now','先不用')}</span></div>
    </div>
    <figcaption><span aria-hidden="true">01 /</span> ${bi('It noticed the risk, prepared a fix and left the choice to you.','它发现了风险，备好方案，把选择留给你。')}</figcaption></figure>`;
}
export function feedIntro() {
  return `<header class="feed-masthead"><div><p class="feed-kicker">${bi('Latest research', '最新研究')}</p><h1>${bi('All recent papers', '全部近期论文')}</h1></div></header>`;
}
export function homeHero(catalog, definition) {
  return `<section class="atlas-hero" aria-labelledby="hero-title"><div class="atlas-hero-copy"><p class="hero-eyebrow">${bi('Proactive Atlas · A field guide','Proactive Atlas · 领域指南')}</p><h1 id="hero-title">${bi('Proactive AI.','主动式 AI。')}<br><em>${bi('Before you ask.','在你开口之前。')}</em></h1><p class="hero-description">${bi(definition.en,definition.zh)}</p><div class="hero-actions"><a class="button primary" href="#discover">${bi('Explore the latest papers','浏览最新论文')} ↓</a><a href="${base}what-is-proactive-ai/">${bi('What counts as proactive?','什么算主动？')} →</a></div><p class="hero-count">${catalog.papers.length} ${bi('papers','篇论文')} · ${catalog.projects.length} ${bi('projects','个项目')} · ${catalog.benchmarks.length} ${bi('benchmarks','个评测')}</p></div>${initiativeScene()}</section>`;
}
// Labels come from the gallery's filter vocabulary, so a category reads the same everywhere.
export const concepts = [
  ['need','What might help before someone asks?','在用户开口前，什么可能有帮助？','pask-intent-aware-proactive-agent'],
  ['planning','Plan ahead and take useful, authorized steps.','提前规划，在授权范围内推进任务。','proactive-agent-shifting-llm'],
  ['clarification','Decide when a question is worth someone’s attention.','判断一个问题是否值得占用对方的注意力。','attrify-soft-attribute-clarification'],
  ['timing','Speak, suggest, wait—or remain silent.','表达、建议、等待，或保持安静。','gander-omni-interaction-agent'],
  ['personalization','Adapt to goals, preferences and evolving context.','适应目标、偏好与不断变化的情境。','properagent-memory-driven-proactivity'],
  ['safety','Balance initiative with safety, control and consent.','让主动性与安全、控制权和同意相容。','safe-pro-cross-modal-inquiry']
];
export function categoryWorks(catalog, filter, leadId) {
  const inCategory = catalog.papers.filter(p => p.facets?.question?.includes(filter));
  const newest = (a, b) => (b.publishedAt ?? '').localeCompare(a.publishedAt ?? '');
  const lead = catalog.papers.find(p => p.id === leadId);
  const works = [lead, ...inCategory.filter(p => p.selected).sort(newest), ...inCategory.filter(p => p.role === 'core').sort(newest), ...inCategory.sort(newest)];
  return { count: inCategory.length, works: [...new Set(works)].slice(0, 3) };
}
export function conceptGrid(catalog) {
  const options = facetGroups[0].options;
  return `<div class="concept-grid">${concepts.map(([filter,desc,descZh,leadId],i) => {
    const [, en, zh] = options.find(o => o[0] === filter);
    const { count, works } = categoryWorks(catalog, filter, leadId), t = works[0].thumbnail;
    return `<article class="concept-card"><a class="concept-cover" href="${paperPath(works[0])}" data-preview-paper="${esc(works[0].id)}"><img src="${esc(t.src)}" alt="${esc(t.alt)}" width="600" height="360" loading="lazy" decoding="async"></a><div class="concept-body"><span class="concept-number">0${i+1}</span><h3>${bi(esc(en),esc(zh))}</h3><p>${bi(desc,descZh)}</p><ul>${works.map(p => `<li><a href="${paperPath(p)}" data-preview-paper="${esc(p.id)}">${esc(p.displayTitle ?? p.title.split(':')[0])}</a>${roleBadge(p)}</li>`).join('')}</ul><a class="concept-all" href="${base}recent/?question=${filter}">${bi(`All ${count} recent papers`,`全部 ${count} 篇近期论文`)} →</a></div></article>`;
  }).join('')}</div>`;
}
