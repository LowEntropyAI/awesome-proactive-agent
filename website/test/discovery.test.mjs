import test from 'node:test';
import assert from 'node:assert/strict';
import { read, loadCatalog } from '../data.mjs';
import { home, selectedPage, understandPage } from '../views.mjs';
import { paperDetail, paperPath } from '../paper-detail.mjs';
import { galleryCard } from '../gallery.mjs';
import { concepts } from '../discovery.mjs';
const catalog=loadCatalog();
test('home opens on the research feed with all three reading paths',()=>{
 const html=home(catalog);
 assert.match(html,/gallery-results/);
 assert.doesNotMatch(html,/class="cover"|selected-route-grid/);
 for(const path of ['recent/','understand/','selected/','projects/'])assert.ok(html.includes(path));
 assert.ok(html.indexOf('gallery-results')<html.indexOf('feed-next'));
 assert.match(selectedPage(catalog),/not a popularity ranking/);
 assert.match(understandPage(catalog),/not its definition/);
 for(const c of concepts)assert.ok(catalog.papers.some(p=>p.id===c[6]),c[6]);
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
