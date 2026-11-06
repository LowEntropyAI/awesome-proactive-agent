import test from 'node:test';
import assert from 'node:assert/strict';
import { loadCatalog, read } from '../data.mjs';
import { recentPapers } from '../gallery.mjs';
import { marked } from 'marked';

const catalog = loadCatalog();
test('README streaming representatives are all linked to public resources', () => {
  const block = read('README.md').split('\n## Streaming Proactivity\n')[1].split('\n## ')[0];
  const table = marked.lexer(block).find(t => t.type === 'table');
  assert.ok(table.rows.length >= 4);
  for (const row of table.rows) {
    const representatives = row[1];
    const links = representatives.tokens.filter(t => t.type === 'link');
    assert.ok(links.length, representatives.text);
    for (const link of links) assert.match(link.href, /^https:\/\//);
    assert.equal(representatives.text.replace(/\[[^\]]+\]\(https:\/\/[^)]+\)/g, '').replace(/[\s,;·]/g, ''), '', representatives.text);
  }
});
test('October 31 additions retain modality and release boundaries', () => {
  const stream = recentPapers(catalog.papers, { lens: 'streaming' }).map(p => p.id);
  for (const id of ['askstream-streaming-clarification', 'streamvibe-evolving-user-intent', 'syncpro-dual-stream-reasoning', 'live-opsd-streaming-self-distillation', 'omni-interactscope-proactive-evaluation']) assert.ok(stream.includes(id), id);
  for (const id of ['proactmem-event-driven-memory', 'price-of-scale-proactive-recall', 'joint-gating-memory-hints', 'halo-human-grounded-proactivity', 'iprefbench-infer-or-ask', 'evolife-active-navigation-clarification']) assert.ok(!stream.includes(id), id);
  const get = id => catalog.papers.find(p => p.id === id);
  assert.equal(get('syncpro-dual-stream-reasoning').release.model, 'Available');
  assert.equal(get('syncpro-dual-stream-reasoning').release.data, 'Partial');
  assert.equal(get('streamvibe-evolving-user-intent').release.model, 'Announced');
  assert.equal(get('askstream-streaming-clarification').release.model, 'Not applicable');
  assert.equal(get('live-opsd-streaming-self-distillation').release.model, 'Not verified');
  assert.equal(get('properagent-memory-driven-proactivity').release.checkedAt, '2026-10-31');
  assert.equal(get('pam-proactive-robot-assistance').release.checkedAt, '2026-10-24');
  assert.equal(get('response-g1-scene-graph-trigger').venue, 'ACL 2026');
  assert.equal(get('response-g1-scene-graph-trigger').primary, 'https://arxiv.org/abs/2605.07575');
});

test('WakeGate is a supporting gate; commercial products are not paper implementations', () => {
  const wake = catalog.projects.find(p => p.title.startsWith('WakeGate'));
  assert.equal(wake.group, 'component');
  assert.match(wake.description, /not a complete runtime/);
  for (const title of ['Meta Muse', 'Manus Cue', 'Grok Bot']) {
    assert.equal(catalog.projects.find(p => p.title === title)?.group, 'product', title);
  }
  assert.match(read('PROJECTS.md'), /do \*\*not\*\* prevent the HTTP request/);
  assert.doesNotMatch(read('PROJECTS.md'), /Exceptions \(argument, promise, forced\) override every limit/);
});
test('November 1 backfill keeps first-posted dates, roles and evidence boundaries', () => {
  const get = id => catalog.papers.find(p => p.id === id);
  const added = { 'roboteq-video-social-proactive': ['2026-09-18', 'core'], 'pv-care-eeg-proactive-mci': ['2026-09-18', 'core'], 'visual-proactivity-handover': ['2026-09-18', 'core'], 'talk2escape-navigation-dialogue': ['2026-09-23', 'adjacent'], 'risk-adaptive-programming-feedback': ['2026-09-24', 'core'] };
  for (const [id, [date, role]] of Object.entries(added)) {
    const p = get(id);
    assert.equal(p.publishedAt, date, id);
    assert.equal(p.role, role, id);
    assert.equal(p.release.checkedAt, '2026-11-01', id);
    assert.ok(p.note && p.thumbnail.src.includes('/overviews/'), id);
    assert.equal(p.streaming, false, id);
  }
  assert.ok(catalog.benchmarks.some(b => b.name === 'RobotEQ-Video'));
  assert.doesNotMatch(read('website/assets/overviews/risk-adaptive-feedback.svg'), /<script|<foreignObject|(?:href|src)=["']https?:/);
});
test('November 1 products keep their access and evidence boundaries', () => {
  for (const id of ['claude-duet', 'mistlabs-ambi']) {
    const p = catalog.projects.find(p => p.id === id);
    assert.equal(p?.group, 'product', id);
    assert.ok(p.thumbnail.brand, id);
  }
  const source = read('PROJECTS.md');
  const row = name => source.split('\n').find(line => line.startsWith('| **' + name + '**'));
  assert.match(row('Claude Duet'), /research preview by waitlist/);
  assert.match(row('Claude Duet'), /no open implementation or independent proactive benchmark/);
  assert.match(row('Mistlabs Ambi'), /planned, not shipped/);
  assert.match(row('Mistlabs Ambi'), /no decision mechanism, measured evaluation or independent privacy audit/);
});
test('November 6 additions keep roles, streaming membership and release boundaries', () => {
  const recent = recentPapers(catalog.papers);
  const get = id => recent.find(p => p.id === id);
  const roles = { 'surgstream-workflow-anchored': 'core', 'pro-memory-prospective-intentions': 'core', 'omni-life-realtime-assistants': 'core', 'turnwise-streaming-turn-credit': 'core', 'cognitive-symbionts-ahi': 'core', 'streamclarify-streaming-clarification': 'adjacent', 'vaguebench-proactive-elicitation': 'adjacent', 'bace-strategic-clarification': 'adjacent', 'referclaw-egocentric-intent': 'adjacent', 'clarifying-questions-reliance': 'adjacent', 'interactionbench-voice-timing': 'supporting', 'proactive-dialogue-backdoors': 'supporting' };
  for (const [id, role] of Object.entries(roles)) assert.equal(get(id)?.role, role, id);
  const stream = recentPapers(catalog.papers, { lens: 'streaming' }).map(p => p.id);
  for (const id of ['surgstream-workflow-anchored', 'omni-life-realtime-assistants', 'turnwise-streaming-turn-credit', 'interactionbench-voice-timing']) assert.ok(stream.includes(id), id);
  for (const id of ['pro-memory-prospective-intentions', 'vaguebench-proactive-elicitation', 'cognitive-symbionts-ahi']) assert.ok(!stream.includes(id), id);
  assert.equal(get('referclaw-egocentric-intent').release.code, 'Announced');
  assert.equal(get('omni-life-realtime-assistants').release.data, 'Partial');
  assert.equal(get('turnwise-streaming-turn-credit').release.model, 'Available');
  assert.equal(get('streamclarify-streaming-clarification').publishedAt, '2026-10-31');
  assert.match(read('papers/arxiv/2026-11/cognitive-symbionts-ahi.md'), /no algorithm, prototype or measured results/);
  const names = read('BENCHMARKS.md').split('\n').filter(l => l.startsWith('| **InteractionBench')).map(l => l.split(' | ')[0]);
  assert.deepEqual(names, ['| **InteractionBench**', '| **InteractionBench (voice)**']);
});
