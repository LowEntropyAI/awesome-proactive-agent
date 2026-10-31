import test from 'node:test';
import assert from 'node:assert/strict';
import { read, loadCatalog } from '../data.mjs';
import { home, selectedPage, understandPage, projectPage, paperCard, benchmarkPage, layout, base } from '../views.mjs';
import { renderCover } from '../covers.mjs';
import { paperDetail, paperPath } from '../paper-detail.mjs';
import { galleryCard } from '../gallery.mjs';
import { concepts } from '../discovery.mjs';
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
 assert.ok(card);assert.match(card,/<h3><a[^>]*>WakeGate/);assert.doesNotMatch(card,/directory-cover|directory-credit|<img/);assert.match(card,/Wake request/);
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
  if(p.selected) assert.ok(selectedPage(catalog).includes(t.src));
 }
});
test('Latest navigation lands below the cover without leaving the homepage',()=>{
 const html=layout('Home',home(catalog),'');
 for(const name of ['Latest','Latest Research']) {
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
test('home opens with an editorial hero before the research feed',()=>{
 const html=home(catalog);
 assert.match(html,/gallery-results/);
 assert.doesNotMatch(html,/class="cover"|selected-route-grid/);
 for(const path of ['recent/','understand/','selected/','projects/'])assert.ok(html.includes(path));
 assert.ok(html.indexOf('gallery-results')<html.indexOf('feed-next'));
 assert.ok(html.indexOf('atlas-hero')<html.indexOf('directory-sidebar'));
 assert.match(html,/href="#discover"/);
 const hero=html.slice(0,html.indexOf('id="discover"'));
 assert.ok(hero.includes('class="initiative-scene"'));
 for (const label of ['Meeting moved','Prepared for you','Ready to review']) assert.ok(hero.includes('data-en="'+label+'"'));
 for (const element of ['timepiece','brief-sheet','schedule-slip']) assert.ok(hero.includes('class="'+element+'"'));
 assert.doesNotMatch(hero,/transit-map|step-free detour/);
 assert.doesNotMatch(hero,/<svg\b|<img\b|<canvas\b|<picture\b/);
 assert.match(html,/<details class="browse-dock"><summary>/);
 assert.doesNotMatch(html,/Latest paper in this collection|Last updated|当前收录的最新首发|最后更新/);
 assert.match(selectedPage(catalog),/not a popularity ranking/);
 assert.match(understandPage(catalog),/not its definition/);
 for(const c of concepts)assert.ok(catalog.papers.some(p=>p.id===c[6]),c[6]);
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
