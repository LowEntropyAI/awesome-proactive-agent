import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { loadCatalog, root, read } from '../data.mjs';
import { recentPapers, galleryCard, galleryGroups, gallerySection } from '../gallery.mjs';
import { recentPage, layout } from '../views.mjs';
import { searchPapers } from '../search.mjs';
const catalog = loadCatalog(), recent = recentPapers(catalog.papers);
test('recent edition uses verified first-posted dates, not monthly alphabetical order', () => {
  assert.equal(recent.length, 29);
  for (const p of catalog.papers.filter(p => p.date === catalog.stats.latest)) assert.ok(p.publishedAt && p.dateSource === p.primary, p.id);
  assert.equal(recent[0].id, 'lexpilot-proactive-legal-clarification');
  assert.ok(recent.every((p, i) => !i || recent[i - 1].publishedAt >= p.publishedAt));
  assert.equal(recent.at(-1).publishedAt, '2026-09-25'); // October arXiv ID, September first posting.
});
test('gallery lenses and text search compose without adding unlisted papers', () => {
  const stream = recentPapers(catalog.papers, { lens: 'streaming' });
  assert.ok(stream.length > 5 && stream.every(p => p.streaming));
  for (const id of ['proactgen-video-clarification', 'masp-proactive-dialogue-self-play', 'uncertainty-proactive-assistant-alignment']) assert.ok(!stream.some(p => p.id === id), id);
  assert.deepEqual(recentPapers(catalog.papers, { lens: 'streaming', q: 'ProPerAgent' }).map(p => p.id), ['properagent-memory-driven-proactivity']);
  assert.equal(recentPapers(catalog.papers, { lens: 'streaming', q: 'LexPilot' }).length, 0);
  assert.ok(recentPapers(catalog.papers, { lens: 'clarification' }).every(p => p.tags.includes('Clarification')));
  assert.ok(recentPapers(catalog.papers, { lens: 'benchmark' }).every(p => p.tags.includes('Benchmark')));
  assert.equal(recentPapers(catalog.papers, { q: 'qzxy-no-paper' }).length, 0);
});
test('original previews, evidence links and release checks are traceable', () => {
  for (const p of recent) {
    assert.ok(p.evidenceUrl?.endsWith(p.note));
    if (p.thumbnail) {
      assert.ok(existsSync(resolve(root, 'website', p.thumbnail.src.replace('/awesome-proactive-agent/', ''))));
      assert.match(p.thumbnail.original, /^https:\/\//);
      assert.ok(p.thumbnail.alt && p.thumbnail.caption && p.thumbnail.source);
    }
    if (p.release) {
      assert.equal(p.release.checkedAt, '2026-10-21');
      assert.ok(p.release.code && p.release.model && p.release.data && p.release.sources.length);
    }
  }
  const p3i = recent.find(p => p.id === 'p3i-proactive-video-assistants');
  assert.equal(p3i.release.code, 'Partial');
  assert.equal(p3i.release.model, 'Not verified');
  assert.equal(p3i.release.data, 'Available');
  const pam = recent.find(p => p.id === 'pam-proactive-robot-assistance');
  assert.equal(pam.release.code, 'Website / tools only');
});
test('gallery has static cards, genuine dates, filters, progressive loading and honest fallbacks', () => {
  assert.equal((gallerySection(catalog, true).match(/class="gallery-card"/g) || []).length, 6);
  const page = layout('Recent papers', recentPage(catalog), 'recent/');
  assert.equal((page.match(/class="gallery-card"/g) || []).length, 9);
  for (const marker of ['gallery-client.js', 'gallery.css', 'gallery-search', 'gallery-more', 'datetime="2026-10-16"', 'data-lens="streaming"']) assert.ok(page.includes(marker), marker);
  assert.ok(galleryGroups(recent.slice(0, 3)).includes('datetime="2026-10"'));
  const fallback = galleryCard({ ...recent[0], thumbnail: undefined });
  assert.match(fallback, /no preview figure/);
  assert.ok(!fallback.includes('<img'));
  const malicious = galleryCard({ ...recent[0], title: '<script>bad()</script>', displayTitle: '<b>bad</b>', gallerySummary: '<img src=x onerror=bad()>' });
  assert.doesNotMatch(malicious, /<script>|<b>bad|<img src=x/);
});
test('editor picks and README must-reads are separate filters', () => {
  const selected = searchPapers(catalog.papers, { selected: true });
  assert.equal(selected.length, 9);
  assert.ok(selected.some(p => p.id === 'properagent-memory-driven-proactivity'));
  assert.ok(selected.some(p => p.id === 'egovoice-proactive-spoken-assistance'));
  assert.ok(selected.some(p => p.id === 'p3i-proactive-video-assistants'));
  assert.ok(!searchPapers(catalog.papers, { featured: true }).some(p => p.id === 'properagent-memory-driven-proactivity'));
  assert.doesNotMatch(read('README.md'), /^## (?:Last|Latest) [Uu]pdate/m);
});
