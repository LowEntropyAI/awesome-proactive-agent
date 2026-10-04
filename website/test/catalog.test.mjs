import test from 'node:test';
import assert from 'node:assert/strict';
import { loadCatalog, read, resources, cells } from '../data.mjs';
import { searchPapers, queryTerms } from '../search.mjs';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { root } from '../data.mjs';
const catalog = loadCatalog();
test('every paper has a unique route, primary source, category and valid date', () => {
  assert.ok(catalog.papers.length > 100);
  assert.equal(new Set(catalog.papers.map(p => p.id)).size, catalog.papers.length);
  assert.equal(new Set(catalog.papers.map(p => p.primary)).size, catalog.papers.length);
  for (const p of catalog.papers) { assert.match(p.date, /^\d{4}-\d{2}$/); assert.match(p.primary, /^https:\/\//); assert.ok(p.categories.length); }
});
test('catalog preserves every bibliography row through deduplication', () => {
  const block = read('README.md').split('## Papers\n')[1].split('\n## Benchmarks')[0];
  for (const row of block.split('\n').filter(l => /^\| \d{4}-\d{2} \|/.test(l))) {
    const r = resources(cells(row)[4]);
    assert.ok(catalog.papers.some(p => r.some(link => p.resources.some(l => l.url === link.url))), row);
  }
});
test('curated notes retain all five evidence sections', () => {
  for (const p of catalog.papers.filter(p => p.note)) for (const h of ['Why It Matters', 'Proactivity Signal', 'Evaluation Setup', 'Key Limitations', 'Use For']) assert.ok(p.noteText.includes(`## ${h}`), `${p.note}: ${h}`);
});
test('resource search finds repository names absent from paper titles', () => {
  const found = searchPapers(catalog.papers, { q: 'thunlp' });
  assert.ok(found.some(p => p.id === 'proactive-agent-shifting-llm'));
});
test('combined facets, streaming and essential flags constrain results', () => {
  const filtered = searchPapers(catalog.papers, { tag: 'Intervention Timing', year: '2026', notes: true }, true);
  assert.ok(filtered.length);
  assert.ok(filtered.every(p => p.streaming && p.date.startsWith('2026') && p.note && p.tags.includes('Intervention Timing')));
  const essentials = searchPapers(catalog.papers, { featured: true });
  assert.ok(essentials.length >= 8);
  assert.ok(essentials.every(p => p.featured));
  assert.deepEqual(searchPapers(catalog.papers, { q: 'no-such-paper-qzxyz' }), []);
});
test('search handles Chinese topic aliases and chronological ordering', () => {
  assert.deepEqual(queryTerms('记忆 流式'), ['memory', 'streaming']);
  const sorted = searchPapers(catalog.papers, { sort: 'oldest' });
  assert.ok(sorted.every((p, i) => !i || sorted[i - 1].date <= p.date));
});
test('benchmark extraction keeps the source nine-column schema', () => {
  assert.ok(catalog.benchmarks.length > 40);
  assert.equal(new Set(catalog.benchmarks.map(b => b.name)).size, catalog.benchmarks.length);
  for (const b of catalog.benchmarks) { assert.ok(b.name && b.domain && b.target && b.metrics); assert.match(b.primary, /^https:\/\//); assert.ok(b.resources.length); for (const link of resources(b.resourcesMarkdown)) assert.ok(b.resources.some(r => r.url === link.url)); };
});
test('selected figures and project navigation retain original source URLs', () => {
  const selected = catalog.papers.filter(p => p.selected);
  assert.equal(selected.length, 6);
  for (const p of selected) {
    const imagePath = resolve(root, 'website', p.thumbnail.src.replace('/awesome-proactive-agent/', ''));
    assert.ok(existsSync(imagePath));
    assert.match(p.thumbnail.source, /^https:\/\/github.com\//);
    assert.match(p.thumbnail.original, /^https:\/\//);
    assert.ok(p.thumbnail.alt && p.thumbnail.caption);
  }
  assert.ok(catalog.projects.length >= 10);
  for (const p of catalog.projects) { assert.match(p.primary, /^https:\/\//); assert.ok(p.resources.length); assert.ok(!p.resources.some(r => r.label === 'Notes')); }
});
