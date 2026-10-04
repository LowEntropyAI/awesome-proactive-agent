import test from 'node:test';
import assert from 'node:assert/strict';
import { markdown } from '../guides.mjs';
import { read, loadCatalog } from '../data.mjs';
import { base, home } from '../views.mjs';

test('homepage selections balance agents, models and benchmarks without requiring images', () => {
  const catalog = loadCatalog();
  const selected = catalog.papers.filter(p => p.selected);
  for (const [group, count] of [['agent', 3], ['model', 3], ['benchmark', 3]]) {
    assert.equal(selected.filter(p => p.selectionGroup === group).length, count, group);
  }
  const html = home(catalog);
  for (const p of selected) assert.ok(html.includes(p.displayTitle));
  const withoutFigures = { ...catalog, papers: catalog.papers.map(p => ({ ...p, thumbnail: undefined })) };
  const textOnly = home(withoutFigures);
  for (const p of selected) assert.ok(textOnly.includes(p.displayTitle));
  assert.ok(html.includes('data-selection-group="benchmark"'));
});

test('Must Read preserves tiers and non-paper resources in the website', () => {
  const source = read('README.md').split('## Must Read\n')[1].split('\n## ')[0];
  const html = markdown(source);
  assert.equal((html.match(/colspan="3"/g) || []).length, 3);
  for (const name of ['OpenAI dot', 'OpenClaw', 'PersonalAlign', 'Satori', 'PACT', 'OneStreamer', 'EgoPro-Bench']) assert.ok(html.includes(name), name);
  assert.ok(html.includes('https://help.openai.com/'));
  assert.ok(html.includes(`${base}personal/`));
});

test('guide links resolve to site routes while evidence cards stay on GitHub', () => {
  const html = markdown('[App](APPLICATIONS.md#personal-assistance) [Read](README.md#must-read) [Papers](README.md#papers) [Card](papers/arxiv/example.md)');
  assert.ok(html.includes(`${base}applications/#personal-assistance`));
  assert.ok(html.includes(`${base}start/`));
  assert.ok(html.includes(`${base}library/`));
  assert.ok(html.includes('https://github.com/LowEntropyAI/awesome-proactive-agent/blob/main/papers/arxiv/example.md'));
});

test('guide rendering strips executable content while retaining table headings', () => {
  const html = markdown('<script>alert(1)</script><a href="javascript:alert(1)">bad</a><table><tr><th colspan="3" onclick="bad()">Tier</th></tr></table>');
  assert.doesNotMatch(html, /<script|javascript:|onclick/);
  assert.match(html, /<th colspan="3">Tier<\/th>/);
});
