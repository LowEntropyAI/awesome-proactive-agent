import test from 'node:test';
import assert from 'node:assert/strict';
import { loadCatalog, read } from '../data.mjs';
import { facetGroups, normalizeFilters, validateFacets } from '../facets.mjs';
import { recentPapers, facetCounts, gallerySection } from '../gallery.mjs';
const {papers} = loadCatalog();
test('all recent records have curated question/context/mechanism/evidence axes', () => {
  const records = JSON.parse(read('website/content/recent-facets.json'));
  const recent = JSON.parse(read('website/content/recent.json'));
  assert.equal(Object.keys(records).length, recentPapers(papers).length);
  assert.doesNotThrow(() => validateFacets(records,recent.papers,recent.streamingPapers));
  const missing = structuredClone(records); delete missing[Object.keys(records)[0]];
  assert.throws(() => validateFacets(missing,recent.papers,recent.streamingPapers), /Missing/);
  const invalid = structuredClone(records); invalid['properagent-memory-driven-proactivity'].mechanism.push('jev');
  assert.throws(() => validateFacets(invalid,recent.papers,recent.streamingPapers), /Invalid/);
});
test('axes intersect without collapsing personalization, memory and streaming', () => {
  const ids = filters => recentPapers(papers,filters).map(p=>p.id);
  assert.ok(ids({question:'personalization',mechanism:'memory',context:'personal'}).includes('properagent-memory-driven-proactivity'));
  assert.ok(ids({question:'timing',context:'dialogue'}).includes('pitch-multiparty-intervention-timing'));
  assert.ok(!ids({context:'streaming'}).includes('pitch-multiparty-intervention-timing'));
  assert.ok(ids({question:'safety',evidence:'benchmark'}).includes('overact-proactive-over-authorization'));
  assert.ok(!ids({context:'streaming',q:'ProactMem'}).length);
  assert.ok(ids({mechanism:'memory',q:'个性化'}).includes('properagent-memory-driven-proactivity'));
  assert.deepEqual(ids({lens:'streaming'}),ids({context:'streaming'}));
  assert.equal(normalizeFilters({question:'unknown'}).question,'all');
});
test('counts reflect other filters and filters stay semantic and accessible', () => {
  const counts = facetCounts(papers,{context:'personal',mechanism:'memory'});
  assert.equal(counts.question.timing,recentPapers(papers,{context:'personal',mechanism:'memory',question:'timing'}).length);
  assert.equal(counts.mechanism.all,recentPapers(papers,{context:'personal'}).length);
  const html = gallerySection({papers});
  for (const g of facetGroups) assert.match(html,new RegExp(`data-facet="${g.key}"`));
  assert.equal((html.match(/<fieldset/g)||[]).length,4);
  assert.match(html,/not an exhaustive taxonomy/);
  assert.match(gallerySection({papers},true),/<details class="gallery-extra">/);
});
test('README hero is local SVG with accessible desktop and mobile variants', () => {
  const header = read('README.md').split('## Companion Guides')[0];
  assert.doesNotMatch(header,/capsule-render|pro-agent\.png/);
  assert.match(header,/<picture>/);
  for (const file of ['assets/proactive-hero.svg','assets/proactive-hero-mobile.svg']) {
    const svg = read(file);
    assert.match(header,new RegExp(file));
    assert.match(svg,/<title/); assert.match(svg,/<desc/);
    for (const label of ['Understand you','Intervene','Stay quiet','Agent systems','Mobile','Wearables','Home','Robots']) assert.ok(svg.includes(label),label);
    assert.doesNotMatch(svg,/system\s*1/i);
    assert.doesNotMatch(svg,/<script|<foreignObject|<image|<animate|https?:\/\/[^w]/);
  }
});
