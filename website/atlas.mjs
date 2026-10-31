// The field-guide narrative: one definition, the latest work, one set of picks.
import { paperPath, roleBadge, definitionPath } from './paper-detail.mjs';
import { recentPapers, gallerySection } from './gallery.mjs';
import { conceptGrid } from './discovery.mjs';
const base = '/awesome-proactive-agent/';
const repo = 'https://github.com/LowEntropyAI/awesome-proactive-agent';
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const bi = (en, zh) => `<span data-en="${esc(en)}" data-zh="${esc(zh)}">${esc(en)}</span>`;
const external = 'target="_blank" rel="noopener noreferrer"';
// Only artwork suitable for a small transparent mark belongs in this directory.
const clearMarks = new Set(['openai-dot','grok-bot','meta-muse','openclaw','hermes-agent','letta-code','minecontext','gaia','memu','memubot','screenpipe']);
const nativeMarks = new Set(['manus-cue','live-vlm-webui','proactivity-sdk']);
export const projectMarkFile = id => clearMarks.has(id) ? id + '.clear.png' : nativeMarks.has(id) ? id + '.png' : '';
// A wide wordmark is unreadable at chip size, so it stays on the project card only.
const inlineMark = id => id === 'proactivity-sdk' ? '' : projectMarkFile(id);

export const definition = {
  en: 'A proactive agent decides whether, when and how to help—without waiting to be asked. Staying silent is one of its decisions.',
  zh: '主动式智能体无需等待请求，自行判断是否帮助、何时帮助、如何帮助——保持沉默也是它的一种决定。'
};
const questions = [
  ['Did anyone ask for this?', '有人提出这个请求了吗？', 'The action is not a reply to a request for this help.', '这次行动不是对相应请求的回复。'],
  ['Did the system judge the moment?', '系统判断了时机吗？', 'It decided whether and when to step in, rather than following a fixed trigger alone.', '它自己判断是否介入、何时介入，而不只是执行固定触发。'],
  ['Could it have stayed quiet?', '它能选择不打扰吗？', 'Not interrupting was a real option, and sometimes the right one.', '不打扰是真实的选项，有时也是正确的选择。']
];
const ladder = [
  ['Stay silent', '保持沉默', 'Nothing is worth an interruption.', '没有值得打扰的事。'],
  ['Observe', '观察', 'Keep watching and gathering evidence.', '继续观察并收集证据。'],
  ['Ask', '询问', 'Check before assuming.', '先确认，不贸然假设。'],
  ['Suggest', '建议', 'Offer a next step.', '提出下一步建议。'],
  ['Prepare', '准备', 'Have the work ready for review.', '备好工作，等你过目。'],
  ['Act', '行动', 'Do it within agreed boundaries.', '在约定边界内执行。']
];
const comparison = [
  ['Chatbot', '聊天助手', 'You', '你', 'You', '你', 'A question-answering assistant', '问答助手'],
  ['Scheduled or rule-based automation', '定时或规则自动化', 'A rule you set', '你设定的规则', 'The rule', '规则', 'Cron jobs, reminders', '定时任务、提醒'],
  ['Autonomous agent', '自主智能体', 'You set the goal', '你设定目标', 'The agent, during the run', '运行中由智能体决定', 'Coding agents working on a task', '执行任务的编码智能体'],
  ['Clarification', '澄清提问', 'You make a request first', '你先提出请求', 'The agent, on whether to ask', '智能体决定是否追问', 'Adjacent: asks about a request already made', '相邻方向：针对已有请求提问']
];
const proactiveRow = ['Proactive agent', '主动式智能体', 'The agent', '智能体', 'The agent', '智能体', 'Offers help nobody requested, or stays silent', '提供无人请求的帮助，或保持沉默'];
const roles = [
  ['core', 'Core', '核心', 'The main contribution is a decision to help, stay silent, or evaluate that decision, without a per-event request.', '主要贡献是决定是否帮助、保持沉默，或评测这一决定，且不依赖逐次请求。', ['pask-intent-aware-proactive-agent', 'halo-human-grounded-proactivity']],
  ['adjacent', 'Adjacent', '相邻', 'Closely related but not unprompted: clarifying a supplied request, timing an answer to a standing question, or governing authorization.', '密切相关，但并非主动发起：澄清已有请求、为长期问题选择回答时机，或治理授权。', ['askstream-streaming-clarification', 'lexpilot-proactive-legal-clarification']],
  ['supporting', 'Supporting', '支撑', 'A component a proactive system can build on, such as memory recall, that does not choose user-facing help by itself.', '主动式系统可依赖的组件（如记忆召回），本身不决定面向用户的帮助。', ['price-of-scale-proactive-recall', 'prov-mem-streaming-response']]
];

const paperName = p => p.displayTitle ?? p.title.split(':')[0];
const paperLink = (p, label = paperName(p)) => `<a href="${paperPath(p)}" data-preview-paper="${esc(p.id)}">${esc(label)}</a>`;
const findRef = (catalog, { type, id }) => {
  const item = (type === 'paper' ? catalog.papers : catalog.projects).find(x => x.id === id);
  if (!item) throw new Error(`Unknown atlas ${type}: ${id}`);
  return item;
};
function refChip(catalog, ref) {
  const item = findRef(catalog, ref);
  if (ref.type === 'paper') return `<a class="atlas-chip" href="${paperPath(item)}" data-preview-paper="${esc(item.id)}">${esc(paperName(item))}</a>`;
  const mark = inlineMark(item.id);
  return `<a class="atlas-chip" href="${esc(item.primary)}" ${external}>${mark ? `<img src="${base}assets/brands/${mark}" width="18" height="18" alt="" loading="lazy" decoding="async">` : ''}${esc(item.title)}<span aria-hidden="true">↗</span></a>`;
}

export function homeLatest(catalog) {
  return `<section id="discover" class="atlas-section home-latest" tabindex="-1" aria-labelledby="latest-title"><header class="atlas-section-head"><div><p class="feed-kicker">${bi('Latest research','最新研究')}</p><h2 id="latest-title">${bi('What’s new in','主动式 AI 的')} <em>${bi('proactive AI','新进展')}</em></h2></div><p class="week-count"><strong>${recentPapers(catalog.papers).length}</strong> ${bi('recent papers, newest first','篇近期论文，最新优先')}</p></header>${gallerySection(catalog, true)}</section>`;
}
export function homeCategories(catalog) {
  return `<section class="atlas-section" aria-labelledby="categories-title"><header class="atlas-section-head"><div><p class="feed-kicker">${bi('The field, by question','按问题看领域')}</p><h2 id="categories-title">${bi('Six questions,','六个问题，')} <em>${bi('and the work behind them','以及背后的工作')}</em></h2></div><p class="atlas-section-note">${bi('A paper can contribute to several at once.','同一篇工作可以同时回答多个问题。')}</p></header>${conceptGrid(catalog)}</section>`;
}
function questionCards() {
  return `<ol class="test-cards">${questions.map(([en, zh, d, dz], i) => `<li><span>${i + 1}</span><h3>${bi(en, zh)}</h3><p>${bi(d, dz)}</p></li>`).join('')}</ol>`;
}
function ladderStrip() {
  return `<ol class="action-ladder">${ladder.map(([en, zh, d, dz]) => `<li><strong>${bi(en, zh)}</strong><small>${bi(d, dz)}</small></li>`).join('')}</ol>`;
}
export function homeDefinition() {
  return `<section class="atlas-section atlas-tinted" aria-labelledby="test-title"><header class="atlas-section-head"><div><p class="feed-kicker">${bi('The definition','定义')}</p><h2 id="test-title">${bi('Three questions make an agent','三个问题，判断智能体是否')} <em>${bi('proactive','主动')}</em></h2></div></header>${questionCards()}<h3 class="ladder-title">${bi('Initiative is a range of choices','主动性是一组选择')}</h3>${ladderStrip()}<a class="atlas-more" href="${base}${definitionPath}">${bi('Read the full definition','阅读完整定义')} →</a></section>`;
}
export function homeLandscape(catalog) {
  const { columns, rows } = catalog.atlas.landscape;
  return `<section class="atlas-section" aria-labelledby="map-title"><header class="atlas-section-head"><div><p class="feed-kicker">${bi('The landscape','领域地图')}</p><h2 id="map-title">${bi('Who is','谁在')} <em>${bi('doing what','做什么')}</em></h2></div><p class="atlas-section-note">${bi('Read across for how far the agent goes. Read down for where the initiative comes from.','横向看智能体走多远，纵向看主动性从哪里来。')}</p></header><div class="landscape" role="table" aria-label="Proactive agents by source of initiative and depth of action"><div class="landscape-row landscape-head" role="row"><div role="columnheader">${bi('What starts it','由什么触发')}</div>${columns.map(c => `<div role="columnheader">${bi(c.en, c.zh)}</div>`).join('')}</div>${rows.map(r => `<div class="landscape-row" role="row"><div class="landscape-source" role="rowheader"><strong>${bi(r.en, r.zh)}</strong><small>${bi(r.note, r.noteZh)}</small></div>${columns.map(c => `<div class="landscape-cell" role="cell"><span class="landscape-cell-label">${bi(c.en, c.zh)}</span>${r.cells[c.key].length ? r.cells[c.key].map(x => refChip(catalog, x)).join('') : '<span class="landscape-empty" aria-label="None listed">—</span>'}</div>`).join('')}</div>`).join('')}</div><p class="landscape-source-note">${bi('Editorial placement based on each work’s own documentation, using its deepest documented action. Product capabilities are vendor-described, not independently tested.','编辑根据各工作自身文档归类，按其文档记载的最深行动放置。产品能力来自厂商说明，未经独立测试。')} <a href="${base}projects/">${bi('All projects','全部项目')} →</a></p></section>`;
}
export function picksGrid(catalog) {
  return `<div class="picks-columns">${catalog.atlas.picks.map(g => `<section class="picks-column"><h3>${bi(g.en, g.zh)}</h3><ul>${g.items.map(ref => { const item = findRef(catalog, ref); const paper = ref.type === 'paper'; const mark = paper ? '' : inlineMark(item.id); return `<li>${mark ? `<img src="${base}assets/brands/${mark}" width="26" height="26" alt="" loading="lazy" decoding="async">` : ''}${paper && item.thumbnail ? `<a class="pick-cover" href="${paperPath(item)}" data-preview-paper="${esc(item.id)}" tabindex="-1" aria-hidden="true"><img src="${esc(item.thumbnail.src)}" alt="" width="84" height="60" loading="lazy" decoding="async"></a>` : ''}<div><h4>${paper ? paperLink(item) : `<a href="${esc(item.primary)}" ${external}>${esc(item.title)} ↗</a>`}</h4><p>${bi(ref.why, ref.whyZh)}</p></div></li>`; }).join('')}</ul></section>`).join('')}</div>`;
}
export function homePicks(catalog) {
  return `<section class="atlas-section atlas-tinted" aria-labelledby="picks-title"><header class="atlas-section-head"><div><p class="feed-kicker">${bi('Editor’s picks','编辑精选')}</p><h2 id="picks-title">${bi('Nine places','从这九项')} <em>${bi('to start','开始')}</em></h2></div></header>${picksGrid(catalog)}<a class="atlas-more" href="${base}picks/">${bi('All picks and the reading path','全部精选与阅读路线')} →</a></section>`;
}
export function homeContribute() {
  return `<section class="atlas-section atlas-contribute" aria-labelledby="contribute-title"><h2 id="contribute-title">${bi('Missing something?','有遗漏吗？')}</h2><p>${bi('The Atlas is maintained in the open. Add a paper or product, or challenge the definition.','Atlas 公开维护。欢迎补充论文或产品，也欢迎质疑这份定义。')}</p><div><a class="button primary" href="${repo}/blob/main/CONTRIBUTING.md">${bi('Add a paper','添加论文')} ↗</a><a href="${repo}">${bi('Watch on GitHub','在 GitHub 上关注')} ↗</a></div></section>`;
}
export function definitionPage(catalog) {
  const labelled = catalog.papers.filter(p => p.role).length;
  const row = ([n, nz, s, sz, w, wz, e, ez], own = false) => `<tr${own ? ' class="compare-proactive"' : ''}><th scope="row">${bi(n, nz)}</th><td>${bi(s, sz)}</td><td>${bi(w, wz)}</td><td>${bi(e, ez)}</td></tr>`;
  return `<article class="definition-page"><header class="definition-hero"><p class="feed-kicker">${bi('Working definition','工作定义')}</p><h1>${bi('What is','什么是')} <em>${bi('proactive AI?','主动式 AI？')}</em></h1><p class="definition-statement">${bi(definition.en, definition.zh)}</p></header><section><h2>${bi('The three-question test','三问判定')}</h2><p class="definition-lead">${bi('If the answer to the first is no and the other two are yes, the behavior is proactive.','第一问的答案为“否”、后两问的答案为“是”，这一行为就是主动的。')}</p>${questionCards()}</section><section><h2>${bi('The action ladder','行动阶梯')}</h2><p class="definition-lead">${bi('Proactive does not mean acting more. These are the choices an agent weighs, and staying silent is often correct.','主动不等于行动更多。这些是智能体要权衡的选择，而保持沉默常常是对的。')}</p>${ladderStrip()}</section><section><h2>${bi('How it differs','与相邻概念的区别')}</h2><div class="markdown-table compare-table" tabindex="0" role="region" aria-label="Proactive agents compared with adjacent concepts"><table><thead><tr><th scope="col">${bi('Type','类型')}</th><th scope="col">${bi('Who starts it','谁发起')}</th><th scope="col">${bi('Who judges the moment','谁判断时机')}</th><th scope="col">${bi('Example','例子')}</th></tr></thead><tbody>${comparison.map(r => row(r)).join('')}${row(proactiveRow, true)}</tbody></table></div><p class="definition-note">${bi('A schedule alone is not proactivity: a recurring job you defined does not show that the system discovered an unstated need. Products built on configured triggers still appear in the Atlas, marked by where their initiative comes from.','仅有日程不等于主动：你定义的定时任务并不能说明系统发现了未表达的需求。基于配置触发的产品仍收录在 Atlas 中，并标明主动性的来源。')}</p></section><section id="roles"><h2>${bi('How the Atlas labels work','Atlas 如何标注')}</h2><div class="role-cards">${roles.map(([key, en, zh, d, dz, ids]) => `<div class="role-card"><span class="role-badge" data-role="${key}">${bi(en, zh)}</span><p>${bi(d, dz)}</p><small>${bi('For example','例如')}: ${ids.map(id => paperLink(catalog.papers.find(p => p.id === id))).join(' · ')}</small></div>`).join('')}</div><p class="definition-note">${bi(`Labels currently cover ${labelled} recent and selected papers. Older entries are unlabelled until reviewed against their evidence notes.`,`目前已标注 ${labelled} 篇近期与精选论文。较早的条目需对照证据笔记审阅后再标注。`)}</p></section><section><h2>${bi('Six questions the field is working on','领域正在回答的六个问题')}</h2><p class="definition-lead">${bi('A paper can contribute to several at once. Asking counts as proactive when the agent raises something on its own; clarifying a request you already made is adjacent.','同一篇工作可以同时回答多个问题。智能体自己提出问题属于主动；澄清你已提出的请求属于相邻方向。')}</p>${conceptGrid(catalog)}</section><footer class="definition-footer"><p>${bi('This is a working definition. Disagree with it?','这是一份工作定义。有不同意见？')} <a href="${repo}/issues">${bi('Open an issue','提交 issue')} ↗</a></p><a href="${base}map/">${bi('Full research map','完整研究地图')} →</a></footer></article>`;
}
