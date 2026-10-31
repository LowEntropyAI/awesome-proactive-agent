import { navigationResources } from './resources.mjs';
import { routeIcon } from './visuals.mjs';
import { gallerySection } from './gallery.mjs';
import { readingPaths, feedIntro, conceptGuide, homeHero } from './discovery.mjs';
export const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
export const base = '/awesome-proactive-agent/';
export const repo = 'https://github.com/LowEntropyAI/awesome-proactive-agent';
export const url = path => base + path;
export const bi = (en, zh, tag = 'span') => `<${tag} data-en="${esc(en)}" data-zh="${esc(zh)}">${esc(en)}</${tag}>`;
export const arrow = '<span aria-hidden="true">↗</span>';
export const eyebrow = (en, zh) => `<div class="eyebrow">${bi(en, zh)}</div>`;
export const heading = (en, zh, subEn = '', subZh = '') => `<div class="page-heading">${bi(en, zh, 'h1')}${subEn ? bi(subEn, subZh, 'p') : ''}</div>`;
const brand = `<a class="brand" href="${base}"><span class="brand-icon"><img src="${url('assets/lowentropyai.png')}" width="28" height="28" alt="" aria-hidden="true"></span><strong>LowEntropy<span>AI</span></strong><span class="brand-divider">/</span><span class="brand-project"><strong class="brand-proactive">Proactive</strong> agents</span></a>`;
export function layout(title, content, path, stats = {}, description = 'A research-oriented collection of proactive AI papers, agents, models, projects, and benchmarks. Curated by LowEntropyAI, with credit to the original authors.', extra = '') {
  const nav = [['#discover', 'Latest', '最新'], ['selected/', 'Essentials', '代表作'], ['applications/', 'Applications', '应用'], ['library/', 'Papers', '论文'], ['projects/', 'Projects', '项目'], ['benchmarks/', 'Benchmarks', '基准']];
  return `<!doctype html><html lang="en" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} · LowEntropyAI</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="https://lowentropyai.github.io${url(path)}"><meta property="og:title" content="${esc(title)} · LowEntropyAI"><meta property="og:description" content="${esc(description)}"><meta property="og:type" content="website"><meta property="og:url" content="https://lowentropyai.github.io${url(path)}"><meta property="og:image" content="https://lowentropyai.github.io${url('assets/social.svg')}"><meta name="theme-color" content="#ffffff"><link rel="icon" href="${url('assets/lowentropyai.png')}" type="image/png"><link rel="stylesheet" href="${url('assets/style.css')}"><link rel="stylesheet" href="${url('assets/experience.css')}"><link rel="stylesheet" href="${url('assets/gallery.css')}"><script type="module" src="${url('assets/gallery-client.js')}"></script><link rel="stylesheet" href="${url('assets/discovery.css')}"><script type="module" src="${url('assets/paper-detail-client.js')}"></script>${extra}<script type="module" src="${url('assets/experience.js')}"></script><script src="${url('assets/theme.js')}"></script><script type="module" src="${url('assets/app.js')}"></script></head><body data-base="${base}" data-page="${path}"><a class="skip" href="#main">Skip to content</a><header class="site-header"><div class="header-inner">${brand}<nav aria-label="Main navigation">${nav.map(([p, en, zh]) => `<a href="${!path && p === '#discover' ? p : url(p)}" ${path.startsWith(p) ? 'aria-current="page"' : ''}>${bi(en, zh)}</a>`).join('')}<a class="nav-utility github-link" href="${repo}">GitHub ${arrow}</a><a class="nav-utility add-paper-link" href="${repo}/blob/main/CONTRIBUTING.md">${bi('Add a paper', '添加论文')} ${arrow}</a></nav><div class="header-actions"><button id="language" aria-label="Switch language">中文</button><button id="theme" aria-label="Switch color theme">◐</button></div></div></header><main id="main">${content}</main><footer><div><span>LowEntropyAI</span><span class="footer-separator">/</span>${bi('Awesome Proactive Agent', '主动式智能体资源库')}</div></footer></body></html>`;
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
const productNames = {'openai-dot':['OpenAI','dot'],'meta-muse':['Meta','Muse'],'manus-cue':['Manus','Cue'],'grok-bot':['xAI','Grok Bot']};
export function cardCover(p,href) {
  const t=p.thumbnail;
  if(!t) return '';
  const names=p.group==='product' && productNames[p.id];
  const cover=names && t.brand ? `<a class="directory-cover product-signature" data-brand="${esc(p.id)}" href="${esc(href)}" aria-label="${esc(p.title)}"><span class="product-signature-lockup"><img src="${esc(t.src)}" width="52" height="52" alt="" loading="lazy"><span><small>${esc(names[0])}</small><strong>${esc(names[1])}</strong></span></span></a>` : `<a class="directory-cover${t.brand ? ' brand-cover' : ''}" href="${esc(href)}"><img src="${esc(t.src)}" alt="${esc(t.alt)}" width="600" height="360" loading="lazy" decoding="async"></a>`;
  return cover+`<a class="directory-credit" href="${esc(t.source)}">${esc(t.caption)} ↗</a>`;
}
export function paperCard(p, { compact = false } = {}) {
  return `<article class="paper-card${compact ? ' compact' : ''}">${cardCover(p,p.primary)}<div class="paper-main"><div class="paper-meta"><span>${esc(p.date)}</span><span>${esc(p.venue)}</span></div><h3><a href="${esc(p.primary || p.resources?.[0]?.url || repo)}" target="_blank" rel="noopener noreferrer">${esc(p.title)} ${arrow}</a></h3>${paperTags(p)}</div><div class="resource-links">${resourceLinks(p)}</div></article>`;
}
export function selectedCard(p) {
  const thumbnail = p.thumbnail;
  const src = thumbnail?.src?.startsWith('http') || thumbnail?.src?.startsWith('/') ? thumbnail.src : url(thumbnail?.src || '');
  return `<article class="selected-card">${thumbnail ? `<a class="selected-image" href="${url(`papers/${p.id}/`)}" data-preview-paper="${esc(p.id)}"><img src="${esc(src)}" alt="${esc(thumbnail.alt || `${p.title} overview`)}" loading="lazy"><span class="figure-link">${bi('Overview', '概览图')} ${arrow}</span></a>` : ''}<div class="selected-body">${thumbnail?.source ? `<a class="image-credit" href="${esc(thumbnail.source)}" target="_blank" rel="noopener noreferrer">${esc(thumbnail.caption || 'Original figure source')} ${arrow}</a>` : ''}<div class="paper-meta"><span>${esc(p.date)}</span><span>${esc(p.venue)}</span></div><h3><a href="${url(`papers/${p.id}/`)}" data-preview-paper="${esc(p.id)}">${esc(p.displayTitle || p.title)}</a></h3>${p.description ? `<p class="selected-description">${esc(p.description)}</p>` : ''}${paperTags(p)}<div class="resource-links">${resourceLinks(p)}</div></div></article>`;
}
function directoryNav(catalog, active = '', onHome = false) {
  const item = (path, en, zh, icon, key = '', count = null) => `<a href="${onHome && path === '#discover' ? path : url(path)}"${key && active === key ? ' class="current" aria-current="page"' : ''}><span class="nav-item-label"><span class="sidebar-icon">${routeIcon(icon)}</span>${bi(en, zh)}</span>${count === null ? '' : `<span class="count">${count}</span>`}</a>`;
  const browse = [
    ['#discover', 'Latest Research', '最新研究', 'book', 'recent'],
    ['understand/', 'What Is Proactivity?', '什么是主动性？', 'interaction', 'understand'],
    ['selected/', 'Essential Reading', '代表性工作', 'grid', 'selected'],
    ['projects/', 'Projects & Code', '项目与代码', 'layers', 'projects'],
    ['start/', 'Must Read', '分层必读', 'book', 'start'],
    ['personal/', 'Personal agents', '个人智能体', 'agent', 'personal'],
    ['infrastructure/', 'Supporting infrastructure', '基础设施', 'layers', 'infrastructure'],
    ['map/', 'Research map', '研究地图', 'grid', 'map']
  ];
  const icons = { foundations: 'book', interaction: 'interaction', 'computer-use': 'monitor', multimodal: 'vision', evaluation: 'benchmark' };
  return `<details class="browse-dock"><summary><span aria-hidden="true">☰</span> ${bi('Browse','浏览')}</summary><aside class="directory-sidebar" aria-label="Resource navigation"><div class="sidebar-group"><span class="sidebar-label">${bi('Browse', '浏览')}</span>${browse.map(row => item(...row)).join('')}</div><div class="sidebar-group"><span class="sidebar-label">${bi('Research areas', '研究方向')}</span>${catalog.categories.map(c => item(`library/?category=${c.key}`, c.short, c.zh, icons[c.key], '', catalog.papers.filter(p => p.categories.includes(c.key)).length)).join('')}</div></aside></details>`;
}
function searchBox({ home = false } = {}) {
  return `<form id="${home ? 'home-search' : 'search-form'}" class="search-form" role="search" ${home ? `action="${url('library/')}" method="get"` : ''}><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.7"/><path d="m16 16 4 4" stroke="currentColor" stroke-width="1.7"/></svg><input id="search" name="q" type="search" aria-label="Search papers and resources" placeholder="Search papers, models, topics…" data-placeholder-en="Search papers, models, topics…" data-placeholder-zh="搜索论文、模型、研究主题…"><kbd>/</kbd><button type="submit">${bi('Search', '搜索')} <span aria-hidden="true">→</span></button></form>`;
}
export function library(catalog, streaming = false) {
  const list = streaming ? catalog.papers.filter(p => p.streaming) : catalog.papers;
  return `<div class="directory-layout library-directory">${directoryNav(catalog, streaming ? 'streaming' : 'all')}<div class="directory-content">${heading(streaming ? 'Streaming models' : 'Paper directory', streaming ? '流式模型' : '论文导航', streaming ? 'Continuous video, audio, memory, and real-time interaction.' : 'Find original papers, repositories, and project pages.', streaming ? '连续视频、音频、记忆与实时交互。' : '查找原始论文、代码仓库与项目主页。')}<div id="catalog" data-streaming="${streaming}">${searchBox()}<div class="filter-bar"><div class="filter-selects"><label class="sr-only" for="category">Research area</label><select id="category"><option value="" data-en="All areas" data-zh="全部方向">All areas</option>${catalog.categories.map(c => `<option value="${c.key}" data-en="${esc(c.short)}" data-zh="${esc(c.zh)}">${esc(c.short)}</option>`).join('')}</select><label class="sr-only" for="tag">Topic</label><select id="tag"><option value="" data-en="All topics" data-zh="全部主题">All topics</option>${[...new Set(list.flatMap(p => p.tags))].sort().map(t => `<option>${esc(t)}</option>`).join('')}</select><label class="sr-only" for="year">Year</label><select id="year"><option value="" data-en="Year" data-zh="年份">Year</option>${[...new Set(list.map(p => p.date.slice(0, 4)))].sort().reverse().map(y => `<option>${y}</option>`).join('')}</select><label class="sr-only" for="venue">Venue</label><select id="venue"><option value="" data-en="Venue" data-zh="发表来源">Venue</option>${[...new Set(list.map(p => p.venue.startsWith('arXiv') ? 'arXiv' : p.venue))].sort().map(v => `<option>${esc(v)}</option>`).join('')}</select></div><div class="filter-checks"><label class="check"><input type="checkbox" id="code">${bi('With code', '含代码')}</label><label class="check"><input type="checkbox" id="selected">${bi('Editor’s picks', '编辑精选')}</label><label class="check"><input type="checkbox" id="featured">${bi('Must Read', '入门必读')}</label><button id="clear-filters">${bi('Reset', '重置')}</button></div></div><div class="results-toolbar"><span id="result-count" role="status" aria-live="polite">${list.length} ${bi('papers', '篇论文')}</span><label for="sort" class="sr-only">Sort papers</label><select id="sort"><option value="newest" data-en="Newest first" data-zh="最新优先">Newest first</option><option value="oldest" data-en="Oldest first" data-zh="最早优先">Oldest first</option><option value="title" data-en="Title A–Z" data-zh="标题 A–Z">Title A–Z</option><option value="relevance" data-en="Relevance" data-zh="相关性">Relevance</option></select></div><div id="active-filters" class="active-filters"></div><div id="paper-results" class="paper-grid">${list.slice(0, 20).map(p => paperCard(p)).join('')}</div><div id="pagination" class="pagination"></div><noscript><p>Enable JavaScript for search and filtering.</p><ul>${list.map(p => `<li><a href="${esc(p.primary)}">${esc(p.title)}</a></li>`).join('')}</ul></noscript></div></div></div>`;
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
 return `<div class="directory-layout">${directoryNav(catalog,'projects')}<div class="directory-content">${heading('Projects & Code','项目与代码','Find the right building block—or a complete assistant.','寻找适合的组件，或完整的助手。')}${simpleDirectorySearch(projects.length,'projects','个项目')}<div class="project-filters" role="group" aria-label="Project categories"><button data-project-group="all" aria-pressed="true">${bi('All','全部')} <small data-group-count>${projects.length}</small></button>${projectGroups.map(g=>`<button data-project-group="${g.key}" aria-pressed="false">${bi(g.label,g.zh)} <small data-group-count>${projects.filter(p=>p.group===g.key).length}</small></button>`).join('')}</div><div id="directory-results" class="project-sections">${projectGroups.map(g=>`<section class="project-section" data-project-section="${g.key}"><header><h2>${bi(g.label,g.zh)}</h2><p>${bi(...descriptions[g.key])}</p></header><div class="projects-grid">${projects.filter(p=>p.group===g.key).map(p=>`<article class="project-card" data-group="${g.key}" data-search="${esc([p.title,p.description,p.groupLabel,p.groupZh,...p.resources.map(r=>r.url)].join(' '))}">${cardCover(p,p.primary)}<div class="project-card-body"><h3><a href="${esc(p.primary)}" target="_blank" rel="noopener noreferrer">${esc(p.title)} ${arrow}</a></h3><p>${esc(p.description)}</p><div class="resource-links">${resourceLinks(p)}</div></div></article>`).join('')}</div></section>`).join('')}</div><p id="directory-empty" hidden>${bi('No matching projects. Try another category or search.','没有匹配项目，请尝试其他分类或关键词。')}</p><button id="directory-reset" class="button">${bi('Reset filters','重置筛选')}</button></div></div>`;
}

export function benchmarkPage(catalog) {
  const benchmarks = catalog.benchmarks || [];
  return `<div class="directory-layout">${directoryNav(catalog, 'benchmarks')}<div class="directory-content">${heading('Benchmarks', '评测基准', 'Datasets and evaluation suites for proactive agents.', '主动式智能体的数据集与评测套件。')}${simpleDirectorySearch(benchmarks.length, 'benchmarks', '个基准')}<div id="directory-results" class="paper-grid">${benchmarks.map(b => `<article class="paper-card" data-search="${esc([b.name, b.paper, b.domain, b.target, ...(b.resources || []).map(r => r.url)].filter(Boolean).join(' '))}">${cardCover(b,b.primary)}<div class="paper-main"><div class="paper-meta">${b.date ? `<span>${esc(b.date)}</span>` : ''}</div><h3><a href="${esc(b.primary || b.resources?.[0]?.url || repo)}" target="_blank" rel="noopener noreferrer">${esc(b.name)} ${arrow}</a></h3>${b.paper && b.paper !== b.name ? `<div class="benchmark-paper">${esc(b.paper)}</div>` : ''}<div class="tags"><span>${esc(b.domain)}</span></div></div><div class="resource-links">${resourceLinks(b)}</div></article>`).join('')}</div></div></div>`;
}

export function guidePage(catalog, html, active = '') {
  return `<div class="directory-layout">${directoryNav(catalog, active)}<article class="directory-content prose">${html}</article></div>`;
}

export function recentPage(catalog) {
  return `<div class="directory-layout">${directoryNav(catalog, "recent")}<div class="directory-content">${feedIntro(catalog)}${readingPaths()}${gallerySection(catalog)}</div></div>`;
}

export function home(catalog) {
  return `${homeHero()}<div id="discover" class="directory-layout feed-layout home-directory" tabindex="-1">${directoryNav(catalog,'recent',true)}<div class="directory-content"><div class="home-feed-heading"><p class="feed-kicker">${bi('The research feed','研究信息流')}</p><h2>${bi('New ideas. Worth your attention.','值得关注的新想法。')}</h2></div>${readingPaths('latest',true)}${gallerySection(catalog,true)}<section class="feed-next"><h2>${bi('Find your way into the field.','找到你的阅读路径。')}</h2><a href="${url('understand/')}">${bi('What makes an agent proactive?','什么让智能体具有主动性？')} →</a><a href="${url('selected/')}">${bi('Start with representative research','从代表性工作开始')} →</a><a href="${url('projects/')}">${bi('Explore projects and implementations','探索项目与实现')} →</a></section></div></div>`;
}
export function understandPage(catalog) {
  return `<div class="directory-layout">${directoryNav(catalog,'understand')}<div class="directory-content">${readingPaths('understand')}${conceptGuide(catalog)}</div></div>`;
}
export function selectedPage(catalog) {
  const picks=catalog.papers.filter(p=>p.selected).sort((a,b)=>a.selectedOrder-b.selectedOrder);
  return `<div class="directory-layout">${directoryNav(catalog,'selected')}<div class="directory-content">${readingPaths('selected')}${heading('A few good places to start.','从这些代表作开始。','Editorial picks for distinctive mechanisms and evaluation—not a popularity ranking.','按机制与评测代表性选择，而非热度排行。')}<p class="selection-intro">${bi('Explore complementary roles: agents that take initiative, models that control interaction, and benchmarks that test whether help is useful. These examples are an entry point, not an exhaustive canon.','从主动采取行动的智能体、控制交互的模型，到检验帮助是否有效的基准。这些工作是阅读入口，并非穷尽性的经典榜单。')}</p>${[['model','Interaction Models','交互模型'],['agent','Agents & Systems','智能体与系统'],['interaction','Questions, Preferences & Boundaries','提问、偏好与边界'],['benchmark','Evaluation','评测']].map(([key,en,zh])=>`<section class="essential-section"><h2>${bi(en,zh)}</h2><div class="essential-grid">${picks.filter(p=>p.selectionGroup===key).map(selectedCard).join('')}</div></section>`).join('')}<a class="button" href="${url('start/')}">${bi('More layered reading routes','更多分层阅读路线')} →</a></div></div>`;
}
