import { navigationResources } from './resources.mjs';
import { paperPath, roleBadge, definitionPath } from './paper-detail.mjs';
import { gallerySection } from './gallery.mjs';
import { feedIntro, homeHero } from './discovery.mjs';
import { definition, homeLatest, homeCategories, homeDefinition, homeLandscape, homePicks, homeContribute, picksGrid, projectMarkFile } from './atlas.mjs';
export const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const base = '/awesome-proactive-agent/';
export const repo = 'https://github.com/LowEntropyAI/awesome-proactive-agent';
export const url = path => base + path;
export const bi = (en, zh, tag = 'span') => `<${tag} data-en="${esc(en)}" data-zh="${esc(zh)}">${esc(en)}</${tag}>`;
export const arrow = '<span aria-hidden="true">↗</span>';
export const eyebrow = (en, zh) => `<div class="eyebrow">${bi(en, zh)}</div>`;
export const heading = (en, zh, subEn = '', subZh = '') => `<div class="page-heading">${bi(en, zh, 'h1')}${subEn ? bi(subEn, subZh, 'p') : ''}</div>`;
const brand = `<a class="brand" href="${base}"><span class="brand-icon"><img src="${url('assets/lowentropyai.png')}" width="28" height="28" alt="" aria-hidden="true"></span><strong>Proactive <span>Atlas</span></strong><span class="brand-by">by LowEntropyAI</span></a>`;
const directoryRoutes = ['library/', 'projects/', 'benchmarks/', 'applications/', 'personal/', 'streaming/', 'infrastructure/', 'map/', 'papers/'];
export function layout(title, content, path, stats = {}, description = 'Proactive Atlas is a field guide to AI that acts before you ask: what proactive means, what is new, and what to read first. Curated by LowEntropyAI.', extra = '') {
  const nav = [['#discover', 'Latest', '最新', ['recent/']], [definitionPath, 'What is Proactive?', '什么是主动式？', [definitionPath]], ['picks/', 'Picks', '精选', ['picks/']], ['library/', 'Directory', '目录', directoryRoutes]];
  return `<!doctype html><html lang="en" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="https://lowentropyai.github.io${url(path)}"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="website"><meta property="og:url" content="https://lowentropyai.github.io${url(path)}"><meta property="og:image" content="https://lowentropyai.github.io${url('assets/social.svg')}"><meta name="theme-color" content="#ffffff"><link rel="icon" href="${url('assets/lowentropyai.png')}" type="image/png"><link rel="stylesheet" href="${url('assets/style.css')}"><link rel="stylesheet" href="${url('assets/experience.css')}"><link rel="stylesheet" href="${url('assets/gallery.css')}"><script type="module" src="${url('assets/gallery-client.js')}"></script><link rel="stylesheet" href="${url('assets/discovery.css')}"><script type="module" src="${url('assets/paper-detail-client.js')}"></script>${extra}<script type="module" src="${url('assets/experience.js')}"></script><script src="${url('assets/theme.js')}"></script><script type="module" src="${url('assets/app.js')}"></script></head><body data-base="${base}" data-page="${path}"><a class="skip" href="#main">Skip to content</a><header class="site-header"><div class="header-inner">${brand}<nav aria-label="Main navigation">${nav.map(([p, en, zh, routes]) => `<a href="${!path && p === '#discover' ? p : url(p)}"${routes.some(r => path.startsWith(r)) ? ' aria-current="page"' : ''}>${bi(en, zh)}</a>`).join('')}<a class="nav-utility github-link" href="${repo}">GitHub ${arrow}</a></nav><div class="header-actions"><button id="language" aria-label="Switch language">中文</button><button id="theme" aria-label="Switch color theme">◐</button></div></div></header><main id="main">${content}</main><footer><div><span>Proactive Atlas</span><span class="footer-separator">/</span>${bi('Curated by LowEntropyAI. Research credit belongs to the original authors.', '由 LowEntropyAI 整理，研究成果归原作者所有。')}</div><div class="footer-links"><a href="${repo}/blob/main/CONTRIBUTING.md">${bi('Add a paper', '添加论文')} ${arrow}</a><a href="${repo}">GitHub ${arrow}</a></div></footer></body></html>`;
}
export function resourceLinks(p) {
  return navigationResources(p).map(r => {
    const label = r.label;
    return `<a class="resource-link${label === 'Repo' ? ' repo-link' : ''}" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ${arrow}</a>`;
  }).join('');
}
function paperTags(p) {
  return `<div class="tags">${(p.tags || []).map(t => `<a href="${url('library/')}?tag=${encodeURIComponent(t)}">${esc(t)}</a>`).join('')}</div>`;
}
const productNames = {
  'openai-dot':['OpenAI','dot','Background research','后台研究'],
  'meta-muse':['Meta','Muse','Ongoing goals','持续跟进目标'],
  'manus-cue':['Manus','Cue','Group delegation','群聊任务委派'],
  'grok-bot':['xAI','Grok Bot','Scheduled routines','定时与事件触发']
};
function projectMasthead(p) {
  const [publisher,name,en,zh]=productNames[p.id] || ['Project',p.title,p.groupLabel,p.groupZh];
  const asset=projectMarkFile(p.id);
  const mark=asset ? `<img class="product-mark" src="${url('assets/brands/'+asset)}" width="42" height="42" alt="" decoding="async">` : '';
  return `<a class="directory-cover type-cover" data-brand="${esc(p.id)}" href="${esc(p.primary)}"><small>${esc(publisher)}</small><h3>${esc(name)}</h3><span>${bi(en,zh)}</span>${mark}</a>`;
}
export function cardCover(p,href) {
  const t=p.thumbnail;
  if(!t) return '';
  return `<a class="directory-cover" href="${esc(href)}"><img src="${esc(t.src)}" alt="${esc(t.alt)}" width="600" height="360" loading="lazy" decoding="async"></a><a class="directory-credit" href="${esc(t.source)}">${esc(t.caption)} ↗</a>`;
}
export function paperCard(p, { compact = false } = {}) {
  return `<article class="paper-card${compact ? ' compact' : ''}">${cardCover(p,p.primary)}<div class="paper-main"><div class="paper-meta"><span>${esc(p.date)}</span><span>${esc(p.venue)}</span>${roleBadge(p)}</div><h3><a href="${paperPath(p)}">${esc(p.title)}</a></h3>${paperTags(p)}</div><div class="resource-links">${resourceLinks(p)}</div></article>`;
}
export function selectedCard(p) {
  const thumbnail = p.thumbnail;
  const src = thumbnail?.src?.startsWith('http') || thumbnail?.src?.startsWith('/') ? thumbnail.src : url(thumbnail?.src || '');
  return `<article class="selected-card">${thumbnail ? `<a class="selected-image" href="${url(`papers/${p.id}/`)}" data-preview-paper="${esc(p.id)}"><img src="${esc(src)}" alt="${esc(thumbnail.alt || `${p.title} overview`)}" loading="lazy"><span class="figure-link">${bi('Overview', '概览图')} →</span></a>` : ''}<div class="selected-body">${thumbnail?.source ? `<a class="image-credit" href="${esc(thumbnail.source)}" target="_blank" rel="noopener noreferrer">${esc(thumbnail.caption || 'Original figure source')} ${arrow}</a>` : ''}<div class="paper-meta"><span>${esc(p.date)}</span><span>${esc(p.venue)}</span>${roleBadge(p)}</div><h3><a href="${url(`papers/${p.id}/`)}" data-preview-paper="${esc(p.id)}">${esc(p.displayTitle || p.title)}</a></h3>${p.description ? `<p class="selected-description">${esc(p.description)}</p>` : ''}${paperTags(p)}<div class="resource-links">${resourceLinks(p)}</div></div></article>`;
}
function directoryNav(active = '') {
  const link = ([path, en, zh, key]) => `<a href="${url(path)}"${active === key ? ' aria-current="page"' : ''}>${bi(en, zh)}</a>`;
  const main = [['library/', 'Papers', '论文', 'all'], ['projects/', 'Projects', '项目', 'projects'], ['benchmarks/', 'Benchmarks', '评测', 'benchmarks']];
  const guides = [['applications/', 'Applications', '应用', 'applications'], ['personal/', 'Personal agents', '个人智能体', 'personal'], ['streaming/', 'Streaming', '流式', 'streaming'], ['infrastructure/', 'Infrastructure', '基础设施', 'infrastructure'], ['map/', 'Research map', '研究地图', 'map']];
  return `<nav class="directory-nav" aria-label="Directory"><div class="directory-tabs">${main.map(link).join('')}</div><div class="directory-guides"><span>${bi('Guides', '专题')}</span>${guides.map(link).join('')}</div></nav>`;
}
function searchBox({ home = false } = {}) {
  return `<form id="${home ? 'home-search' : 'search-form'}" class="search-form" role="search" ${home ? `action="${url('library/')}" method="get"` : ''}><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.7"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.7"/></svg><input id="search" name="q" type="search" aria-label="Search papers and resources" placeholder="Search papers, models, topics…" data-placeholder-en="Search papers, models, topics…" data-placeholder-zh="搜索论文、模型、研究主题…"><kbd>/</kbd><button type="submit">${bi('Search', '搜索')} <span aria-hidden="true">→</span></button></form>`;
}
export function library(catalog, streaming = false) {
  const list = streaming ? catalog.papers.filter(p => p.streaming) : catalog.papers;
  return `<div class="directory-layout library-directory">${directoryNav(streaming ? 'streaming' : 'all')}<div class="directory-content">${heading(streaming ? 'Streaming models' : 'Paper directory', streaming ? '流式模型' : '论文导航', streaming ? 'Continuous video, audio, memory, and real-time interaction.' : 'Find original papers, repositories, and project pages.', streaming ? '连续视频、音频、记忆与实时交互。' : '查找原始论文、代码仓库与项目主页。')}<div id="catalog" data-streaming="${streaming}">${searchBox()}<div class="filter-bar"><div class="filter-selects"><label class="sr-only" for="category">Research area</label><select id="category"><option value="" data-en="All areas" data-zh="全部方向">All areas</option>${catalog.categories.map(c => `<option value="${c.key}" data-en="${esc(c.short)}" data-zh="${esc(c.zh)}">${esc(c.short)}</option>`).join('')}</select><label class="sr-only" for="tag">Topic</label><select id="tag"><option value="" data-en="All topics" data-zh="全部主题">All topics</option>${[...new Set(list.flatMap(p => p.tags))].sort().map(t => `<option>${esc(t)}</option>`).join('')}</select><label class="sr-only" for="year">Year</label><select id="year"><option value="" data-en="Year" data-zh="年份">Year</option>${[...new Set(list.map(p => p.date.slice(0, 4)))].sort().reverse().map(y => `<option>${y}</option>`).join('')}</select><label class="sr-only" for="venue">Venue</label><select id="venue"><option value="" data-en="Venue" data-zh="发表来源">Venue</option>${[...new Set(list.map(p => p.venue.startsWith('arXiv') ? 'arXiv' : p.venue))].sort().map(v => `<option>${esc(v)}</option>`).join('')}</select></div><div class="filter-checks"><label class="check"><input type="checkbox" id="code">${bi('With code', '含代码')}</label><label class="check"><input type="checkbox" id="selected">${bi('Editor’s picks', '编辑精选')}</label><label class="check"><input type="checkbox" id="featured">${bi('Must Read', '入门必读')}</label><button id="clear-filters">${bi('Reset', '重置')}</button></div></div><div class="results-toolbar"><span id="result-count" role="status" aria-live="polite">${list.length} ${bi('papers', '篇论文')}</span><label for="sort" class="sr-only">Sort papers</label><select id="sort"><option value="newest" data-en="Newest first" data-zh="最新优先">Newest first</option><option value="oldest" data-en="Oldest first" data-zh="最早优先">Oldest first</option><option value="title" data-en="Title A–Z" data-zh="标题 A–Z">Title A–Z</option><option value="relevance" data-en="Relevance" data-zh="相关性">Relevance</option></select></div><div id="active-filters" class="active-filters"></div><div id="paper-results" class="paper-grid">${list.slice(0, 20).map(p => paperCard(p)).join('')}</div><div id="pagination" class="pagination"></div><noscript><p>Enable JavaScript for search and filtering.</p><ul>${list.map(p => `<li><a href="${esc(p.primary)}">${esc(p.title)}</a></li>`).join('')}</ul></noscript></div></div></div>`;
}
function simpleDirectorySearch(count, en, zh) {
  return `<div class="search-form"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.7"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.7"/></svg><input id="directory-search" type="search" aria-label="Search resources" placeholder="Search resources…" data-placeholder-en="Search resources…" data-placeholder-zh="搜索资源…"><kbd>/</kbd></div><div class="results-toolbar"><span id="directory-count" role="status" aria-live="polite" data-noun-en="${en}" data-noun-zh="${zh}">${count} ${bi(en, zh)}</span></div>`;
}
export function projectPage(catalog) {
 const {projects,projectGroups}=catalog;
 const descriptions={
 runtime:['Keep agents running and activate them on events or schedules.','持续运行，并由事件或计划唤起。'],
 assistant:['Context-aware assistance built around a person’s ongoing work and life.','围绕个人持续的工作与生活情境提供帮助。'],
 research:['Implementations of specific research ideas, not necessarily ready-made products.','具体研究想法的实现，不等于可直接使用的产品。'],
 product:['Commercial references; capabilities follow the linked vendor sources.','商业产品参考，能力以所链接的官方说明为准。'],
 component:['Memory, perception and gating tools—not complete proactive assistants.','记忆、感知与门控组件，不等于完整的主动助手。']
 };
 return `<div class="directory-layout">${directoryNav('projects')}<div class="directory-content">${heading('Projects & Code','项目与代码','Find the right building block—or a complete assistant.','寻找适合的组件，或完整的助手。')}${simpleDirectorySearch(projects.length,'projects','个项目')}<div class="project-filters" role="group" aria-label="Project categories"><button data-project-group="all" aria-pressed="true">${bi('All','全部')} <small data-group-count>${projects.length}</small></button>${projectGroups.map(g=>`<button data-project-group="${g.key}" aria-pressed="false">${bi(g.label,g.zh)} <small data-group-count>${projects.filter(p=>p.group===g.key).length}</small></button>`).join('')}</div><div id="directory-results" class="project-sections">${projectGroups.map(g=>`<section class="project-section" data-project-section="${g.key}"><header><h2>${bi(g.label,g.zh)}</h2><p>${bi(...descriptions[g.key])}</p></header><div class="projects-grid">${projects.filter(p=>p.group===g.key).map(p=>`<article class="project-card" data-group="${g.key}" data-search="${esc([p.title,p.description,p.groupLabel,p.groupZh,...p.resources.map(r=>r.url)].join(' '))}">${projectMasthead(p)}<div class="project-card-body"><p>${esc(p.description)}</p><div class="resource-links">${resourceLinks(p)}</div></div></article>`).join('')}</div></section>`).join('')}</div><p id="directory-empty" hidden>${bi('No matching projects. Try another category or search.','没有匹配项目，请尝试其他分类或关键词。')}</p><button id="directory-reset" class="button">${bi('Reset filters','重置筛选')}</button></div></div>`;
}

export function benchmarkPage(catalog) {
  const benchmarks = catalog.benchmarks || [];
  return `<div class="directory-layout">${directoryNav('benchmarks')}<div class="directory-content">${heading('Benchmarks', '评测基准', 'Datasets and evaluation suites for proactive agents.', '主动式智能体的数据集与评测套件。')}${simpleDirectorySearch(benchmarks.length, 'benchmarks', '个基准')}<div id="directory-results" class="paper-grid">${benchmarks.map(b => `<article class="paper-card" data-search="${esc([b.name, b.paper, b.domain, b.target, ...(b.resources || []).map(r => r.url)].filter(Boolean).join(' '))}">${cardCover(b,b.primary)}<div class="paper-main"><div class="paper-meta">${b.date ? `<span>${esc(b.date)}</span>` : ''}</div><h3><a href="${esc(b.primary || b.resources?.[0]?.url || repo)}" target="_blank" rel="noopener noreferrer">${esc(b.name)} ${arrow}</a></h3>${b.paper && b.paper !== b.name ? `<div class="benchmark-paper">${esc(b.paper)}</div>` : ''}<div class="tags"><span>${esc(b.domain)}</span></div></div><div class="resource-links">${resourceLinks(b)}</div></article>`).join('')}</div></div></div>`;
}

export function guidePage(catalog, html, active = '') {
  return `<div class="directory-layout">${directoryNav(active)}<article class="directory-content prose">${html}</article></div>`;
}

export function recentPage(catalog) {
  return `<div class="directory-layout"><div class="directory-content">${feedIntro()}${gallerySection(catalog)}</div></div>`;
}

export function home(catalog) {
  return `${homeHero(catalog, definition)}${homeLatest(catalog)}${homeDefinition()}${homeCategories(catalog)}${homeLandscape(catalog)}${homePicks(catalog)}${homeContribute()}`;
}
export function picksPage(catalog, readingPath = '') {
  const picks=catalog.papers.filter(p=>p.selected).sort((a,b)=>a.selectedOrder-b.selectedOrder);
  return `<div class="directory-layout"><div class="directory-content">${heading('Picks','精选','What we would read and try first, and why.','我们会优先阅读和尝试什么，以及原因。')}<section class="picks-lead">${picksGrid(catalog)}</section><h2 class="picks-heading">${bi('More papers worth your time','更多值得阅读的论文')}</h2>${[['model','Interaction Models','交互模型'],['agent','Agents & Systems','智能体与系统'],['interaction','Questions, Preferences & Boundaries','提问、偏好与边界'],['benchmark','Evaluation','评测']].map(([key,en,zh])=>`<section class="essential-section"><h3>${bi(en,zh)}</h3><div class="essential-grid">${picks.filter(p=>p.selectionGroup===key).map(selectedCard).join('')}</div></section>`).join('')}<section id="reading-path" class="prose reading-path">${readingPath}</section></div></div>`;
}
