import test from 'node:test';
import assert from 'node:assert/strict';
import { read, loadCatalog } from '../data.mjs';
import { home, picksPage, projectPage, paperCard, benchmarkPage, layout, base } from '../views.mjs';
import { definitionPage, definition } from '../atlas.mjs';
import { recentPapers } from '../gallery.mjs';
import { facetGroups } from '../facets.mjs';
import { renderCover } from '../covers.mjs';
import { paperDetail, paperPath } from '../paper-detail.mjs';
import { galleryCard } from '../gallery.mjs';
import { concepts, categoryWorks } from '../discovery.mjs';
const catalog=loadCatalog();
test('product mastheads pair their name and purpose with a decorative transparent mark',()=>{
 const page=projectPage(catalog);
 for(const p of catalog.projects.filter(p=>p.group==='product')){
  const masthead=page.match(new RegExp('<a class="directory-cover type-cover" data-brand="'+p.id+'"[^>]+>(.*?)</a>'))?.[1];
  assert.ok(masthead,p.id);assert.match(masthead,/<small>.+?<\/small><h3>.+?<\/h3>/);assert.match(masthead,/data-zh=/);
  assert.ok(masthead.includes('/brands/'+p.id+(p.id==='manus-cue'?'.png':'.clear.png')+'"'));assert.match(masthead,/<img class="product-mark"[^>]* alt=""/);
 }
});
test('WakeGate opens with its linked title, without a placeholder or figure credit',()=>{
 const card=projectPage(catalog).match(/<article class="project-card"[^>]*data-search="WakeGate[^>]*>(.*?)<\/article>/)?.[1];
 assert.ok(card);assert.match(card,/<a class="directory-cover type-cover"[^>]+>.*?<h3>WakeGate/);assert.doesNotMatch(card,/directory-credit|<img/);assert.match(card,/Wake request/);
});
test('arXiv-hosted artwork and its credit cannot point at a different arXiv paper',()=>{
 const id=url=>url?.match(/^https?:\/\/arxiv\.org\/(?:abs|html|pdf)\/(\d{4}\.\d+)/)?.[1];
 for(const paper of catalog.papers) {
   const paperId=id(paper.primary);if(!paperId)continue;
   for(const u of [paper.thumbnail.source,paper.thumbnail.original]) if(id(u))assert.equal(id(u),paperId,paper.id);
 }
});
test('CoWriter uses the platform diagram on the card and in the brief, not the appendix UI',()=>{
 const p=catalog.papers.find(x=>x.id==='cowriter-proactive-coauthoring');
 assert.match(p.thumbnail.source,/2610\.31277v1#S0\.F1$/);
 assert.match(p.thumbnail.original,/cowriter-v2\.svg$/);
 for(const view of [galleryCard(p),paperCard(p),paperDetail(p)])assert.ok(view.includes(p.thumbnail.src)&&!view.includes('ui-screenshot'));
});
test('paper figures take precedence across every paper view and keep their source',()=>{
 const figures=JSON.parse(read('website/content/paper-figures.json'));
 assert.ok(Object.keys(figures).length>0);
 for(const [id,t] of Object.entries(figures)) {
  const p=catalog.papers.find(p=>p.id===id);
  assert.deepEqual(p.thumbnail,t);
  assert.match(t.caption,/^Paper Figure \d+/);assert.match(t.source,/^https:\/\//);
  assert.ok(paperCard(p).includes(t.src));
  if(p.publishedAt) assert.ok(galleryCard(p).includes(t.src));
  if(p.selected) assert.ok(picksPage(catalog).includes(t.src));
 }
});
test('Latest navigation lands below the cover without leaving the homepage',()=>{
 const html=layout('Home',home(catalog),'');
 for(const name of ['Latest']) {
  const links=[...html.matchAll(/<a href="([^"]+)"[^>]*>((?:(?!<\/a>)[\s\S])*?)<\/a>/g)].filter(m=>m[2].includes('data-en="'+name+'"'));
  assert.ok(links.length);assert.ok(links.every(m=>m[1]==='#discover'));
 }
 const other=layout('Projects',projectPage(catalog),'projects/');
 assert.ok(other.includes('href="'+base+'#discover"'));
});
test('verified project marks remain local and credit their original sources',()=>{
 const marks=JSON.parse(read('website/content/project-marks.json'));
 for(const [id,[source,caption]] of Object.entries(marks)) {
  const p=catalog.projects.find(p=>p.id===id);
  assert.ok(p.thumbnail.brand && !p.thumbnail.editorial);
  assert.equal(p.thumbnail.original,source);assert.equal(p.thumbnail.caption,caption);
 }
});
test('home states the definition, then the latest work, the test, categories, the landscape and picks',()=>{
 const html=home(catalog);
 const order=['atlas-hero','id="discover"','test-cards','concept-grid','class="landscape"','picks-columns','atlas-contribute'].map(x=>html.indexOf(x));
 assert.ok(order.every(i=>i>=0));assert.deepEqual(order,[...order].sort((a,b)=>a-b));
 const hero=html.slice(0,html.indexOf('id="discover"'));
 assert.ok(hero.includes(definition.en));assert.match(hero,/href="#discover"/);
 assert.ok(hero.includes('class="initiative-scene"'));
 for (const label of ['Flight delayed','Nobody asked','Not now']) assert.ok(hero.includes('data-en="'+label+'"'));
 for (const element of ['timepiece','brief-sheet','schedule-slip']) assert.ok(hero.includes('class="'+element+'"'));
 assert.doesNotMatch(hero,/<svg\b|<img\b|<canvas\b|<picture\b/);
 assert.doesNotMatch(html,/browse-dock|directory-sidebar|reading-paths/);
 for(const path of ['recent/','what-is-proactive-ai/','picks/','projects/'])assert.ok(html.includes(path));
 for(const c of concepts)assert.ok(catalog.papers.some(p=>p.id===c[3]),c[3]);
});
test('the latest feed gives every card a cover, filters by category and leads with core work',()=>{
 const section=home(catalog).match(/<section id="discover".*?<\/section>\s*<section class="atlas-section atlas-tinted"/s)[0];
 const cards=section.match(/<article class="gallery-card"/g)||[];
 assert.equal(cards.length,6);assert.equal((section.match(/gallery-preview/g)||[]).length,6);
 assert.equal((section.match(/<img /g)||[]).length,6);
 for(const [value] of facetGroups[0].options)assert.ok(section.includes('data-facet="question" data-value="'+value+'"'),value);
 assert.doesNotMatch(section,/Week of|This week/);
 assert.equal(recentPapers(catalog.papers)[0].id,'halo-human-grounded-proactivity');
});
test('every category shows a cover, three works and the shared filter label',()=>{
 const html=home(catalog);
 for(const [filter,,,lead] of concepts){
  const {count,works}=categoryWorks(catalog,filter,lead);
  assert.ok(count>=3,filter);assert.equal(works.length,3);assert.equal(works[0].id,lead);
  assert.ok(html.includes('recent/?question='+filter));
  const label=facetGroups[0].options.find(o=>o[0]===filter)[1];
  assert.ok(html.match(new RegExp('<article class="concept-card">.*?'+label.replace('&','&amp;'),'s')),label);
 }
 assert.equal((html.match(/class="concept-cover"/g)||[]).length,concepts.length);
});
test('definition page carries the test, comparison and role boundaries',()=>{
 const html=definitionPage(catalog);
 assert.ok(html.includes(definition.en));
 for(const text of ['test-cards','action-ladder','compare-proactive','id="roles"','concept-grid'])assert.ok(html.includes(text),text);
 for(const role of ['core','adjacent','supporting'])assert.ok(html.includes('data-role="'+role+'"'),role);
 assert.ok(html.includes(catalog.papers.filter(p=>p.role).length+' recent and selected papers'));
});
test('every recent and selected paper has a role; clarification-first work is not presented as core',()=>{
 for(const p of catalog.papers.filter(p=>p.publishedAt||p.selected))assert.ok(['core','adjacent','supporting'].includes(p.role),p.id);
 for(const id of ['evolife-active-navigation-clarification','askstream-streaming-clarification'])assert.equal(catalog.papers.find(p=>p.id===id).role,'adjacent');
 assert.ok(paperCard(catalog.papers.find(p=>p.id==='halo-human-grounded-proactivity')).includes('data-role="core"'));
});
test('the navigation offers four jobs and marks directory pages as Directory',()=>{
 const html=layout('Projects',projectPage(catalog),'projects/');
 const nav=html.match(/<nav aria-label="Main navigation">.*?<\/nav>/s)[0];
 for(const name of ['Latest','What is Proactive?','Picks','Directory'])assert.ok(nav.includes('data-en="'+name+'"'),name);
 assert.match(nav,/aria-current="page"[^>]*>\s*<span data-en="Directory"/);
 assert.equal((nav.match(/aria-current/g)||[]).length,1);
 assert.match(html,/class="directory-nav"/);assert.doesNotMatch(html,/Add a paper[^<]*<\/span>[^<]*<span aria-hidden="true">↗<\/span><\/a><\/nav>/);
});
test('the AttriFy figure is not hidden behind its unfilled root mask',()=>{
 assert.doesNotMatch(read('website/assets/overviews/attrify.svg'),/<g mask="url\(#mask_0\)">/);
});
test('all paper, benchmark and project cards have sourced or explicitly editorial covers',()=>{
 for(const p of [...catalog.papers,...catalog.projects,...catalog.benchmarks]){
  assert.ok(p.thumbnail?.src,p.title||p.name);
  assert.ok(p.thumbnail.source&&p.thumbnail.alt&&p.thumbnail.caption);
  if(p.thumbnail.editorial){const svg=renderCover(p.thumbnail);assert.match(svg,/NOT AN AUTHOR FIGURE/);assert.doesNotMatch(svg,/<script|<foreignObject/);}
 }
 assert.match(paperCard(catalog.papers[0]),/<img/);
 assert.equal((benchmarkPage(catalog).match(/class="directory-cover"/g)||[]).length,catalog.benchmarks.length);
});
test('projects have five distinct groups, each entry rendered exactly once',()=>{
 const html=projectPage(catalog);
 assert.equal((html.match(/data-project-section=/g)||[]).length,5);
 assert.equal((html.match(/class="project-card"/g)||[]).length,catalog.projects.length);
 assert.equal((html.match(/class="directory-cover type-cover"/g)||[]).length,catalog.projects.length);
 assert.match(html,/\/memu\.clear\.png/);assert.doesNotMatch(html,/class="directory-credit"|\/project-wakegate\.svg|\/memu\.png/);
 for(const g of catalog.projectGroups)assert.match(html,new RegExp('data-project-group="'+g.key+'"'));
 assert.match(html,/directory-reset/);assert.match(html,/directory-empty/);
 assert.equal(catalog.projects.find(p=>p.title.includes('WakeGate')).group,'component');
});
test('recent and selected cards have shareable progressive-enhancement brief pages',()=>{
 for(const p of catalog.papers.filter(p=>p.publishedAt||p.selected)) {
  const detail=paperDetail(p);
  assert.ok(detail.includes(paperPath(p)));
  assert.match(detail,/not the author abstract/);
  assert.ok(detail.includes(p.primary));
  if(p.publishedAt)assert.ok(galleryCard(p).includes('data-preview-paper="'+p.id+'"'));
 }
 assert.doesNotMatch(paperDetail({...catalog.papers[0],title:'<script>bad()</script>',gallerySummary:'<img onerror=bad()>'}),/<script>|<img onerror=/);
});
test('requested covers retain source attribution and descriptive captions',()=>{
 for(const id of ['ask-less-attention-budgets','attrify-soft-attribute-clarification','duplexact-content-grounded-interruption']){
  const p=catalog.papers.find(p=>p.id===id);
  assert.match(p.thumbnail.description,/Editorial caption:/);
  assert.match(paperDetail(p),/<figcaption>/);
  const svg=read('website'+p.thumbnail.src.replace('/awesome-proactive-agent',''));
  assert.doesNotMatch(svg,/<script|<foreignObject|(?:href|src)=["']https?:/);
 }
});
