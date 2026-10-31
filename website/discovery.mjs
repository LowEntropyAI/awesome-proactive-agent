// Reading paths, not a mutually exclusive taxonomy of the field.
const base = '/awesome-proactive-agent/';
const bi = (en, zh) => `<span data-en="${en}" data-zh="${zh}">${en}</span>`;
function initiativeScene() {
  return `<figure class="initiative-scene">
    <figcaption><small>${bi('A thought experiment','一个思想实验')}</small>
    <strong>${bi('Who makes the first move?','谁先迈出第一步？')}</strong></figcaption>
    <div class="initiative-event"><span aria-hidden="true">↳</span> ${bi('09:10 · Your meeting now starts an hour earlier.','09:10 · 你的会议提前了一小时。')}</div>
    <div class="initiative-plot">
      <div class="plot-axis" aria-hidden="true"><time>09:10</time><time>09:25</time></div>
      <div class="initiative-lane waiting"><small>${bi('Reactive','被动响应')}</small><div class="lane-line"><b>${bi('You ask','你先问')}</b></div>
      <p>${bi('You ask for a briefing. The assistant starts writing.','你开口要简报，助手才开始准备。')}</p></div>
      <div class="initiative-lane leading"><small>${bi('Proactive','主动协助')}</small><div class="lane-line"><b>${bi('AI offers','助手先提议')}</b></div>
      <p>${bi('“I pulled the changes into your usual one-page brief. Want a look?”','「我把变动整理成了你惯用的一页简报，要看看吗？」')}</p></div>
    </div>
    <div class="initiative-note">${bi('No prompt needed. Only you decide whether to share the brief.','不用先提问。是否把简报发给参会者，由你决定。')}</div></figure>`;
}
export function readingPaths(active = 'latest', onHome = false) {
  return `<nav class="reading-paths" aria-label="Reading paths">${[['latest','#discover','Latest','最新工作'],['understand','understand/','Understand Proactivity','理解主动性'],['selected','selected/','Essential Reading','代表性工作']].map(([id,path,en,zh]) => `<a href="${onHome && id === 'latest' ? path : base + path}"${id === active ? ' aria-current="page"' : ''}>${bi(en,zh)}<span aria-hidden="true">${id === active ? '●' : '↗'}</span></a>`).join('')}</nav>`;
}
export function feedIntro() {
  return `<header class="feed-masthead"><div><p class="feed-kicker">${bi('A field in motion', '持续演进的研究领域')}</p><h1>${bi('Discover what’s next', '发现新进展')}<br>${bi('in proactive AI.', '探索主动式 AI。')}</h1><p>${bi('Research that anticipates needs, takes initiative, and knows its boundaries.', '预判需求、主动提供帮助，也懂得边界。')}</p></div></header>`;
}
export function homeHero() {
  return `<section class="atlas-hero" aria-labelledby="hero-title"><div class="atlas-hero-copy"><p class="hero-eyebrow">${bi('A Research Atlas','研究图谱')}</p><h1 id="hero-title">${bi('Proactive AI.','主动式 AI。')}<br><em>${bi('Before you ask.','在你开口之前。')}</em></h1><p class="hero-description">${bi('Explore agents that anticipate needs and offer help on your terms.','探索如何预判需求、准备帮助，并把选择留给用户。')}</p><div class="hero-actions"><a class="button primary" href="#discover">${bi('Explore the latest research','浏览最新研究')} ↓</a><a href="${base}understand/">${bi('What is proactive AI?','什么是主动式 AI？')} ↗</a></div></div>${initiativeScene()}<div class="hero-bottom"><span>${bi('Research · Models · Agents · Evaluation','研究 · 模型 · 智能体 · 评测')}</span><a href="#discover">${bi('Scroll to explore','向下探索')} ↓</a></div></section>`;

}
export const concepts = [
  ['need','Anticipate Needs','预判需求','What might help before someone asks?','在用户开口前，什么可能有帮助？','PASK','pask-intent-aware-proactive-agent'],
  ['planning','Prepare & Act','准备与行动','Plan ahead and take useful, authorized steps.','提前规划，在授权范围内推进任务。','Proactive Agent','proactive-agent-shifting-llm'],
  ['clarification','Ask & Collaborate','提问与协作','Resolve uncertainty without wasting attention.','通过沟通减少不确定性，同时珍惜注意力。','AttriFy','attrify-soft-attribute-clarification'],
  ['timing','Choose the Moment','选择时机','Speak, suggest, wait—or remain silent.','表达、建议、等待，或保持安静。','Gander','gander-omni-interaction-agent'],
  ['personalization','Learn What Matters','理解所需','Adapt to goals, preferences and evolving context.','适应目标、偏好与不断变化的情境。','MemoProAgent','properagent-memory-driven-proactivity'],
  ['safety','Respect Boundaries','尊重边界','Balance initiative with safety, control and consent.','让主动性与安全、控制权和同意相容。','SAFE-PRO','safe-pro-cross-modal-inquiry']
];
export function conceptGuide(catalog) {
  return `<div class="concept-intro"><p class="feed-kicker">${bi('A starting point, not a rigid taxonomy', '理解起点，而非封闭分类')}</p><h1>${bi('More than answering. Knowing how to help.', '不止于回答， 更在于如何主动帮助。')}</h1><p>${bi('Proactive AI takes initiative toward a goal: anticipating needs, offering help, preparing next steps or acting within agreed boundaries. It may ask first, wait, or stay silent. Streaming and memory are parts of this landscape—not its definition.', '主动式 AI 围绕目标采取主动：预判需求、提出帮助、提前准备，或在约定的边界内行动。它也可能先询问、等待或保持沉默。流式交互与记忆是其中的一部分，而不是主动性的定义。')}</p></div><div class="concept-grid">${concepts.map(([filter,en,zh,desc,descZh,name,id],i) => {const p=catalog.papers.find(p=>p.id===id) ?? catalog.papers.find(p=>p.displayTitle===name); return `<section class="concept-card"><span class="concept-number">0${i+1}</span><h2>${bi(en,zh)}</h2><p>${bi(desc,descZh)}</p><div><a href="${base}recent/?question=${filter}">${bi('Explore this question','探索这个问题')} →</a>${p ? `<a href="${p.primary}" target="_blank" rel="noopener noreferrer">${name} ↗</a>` : ''}</div></section>`;}).join('')}</div><div class="concept-footnote">${bi('Across conversation, digital work, personal assistance and embodied environments. A paper can contribute to several questions at once.', '覆盖对话、数字工作、个人辅助与具身环境；同一篇工作可以同时回答多个问题。')} <a href="${base}map/">${bi('Full research map','完整研究地图')} →</a></div>`;
}
