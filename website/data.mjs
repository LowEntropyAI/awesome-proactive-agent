import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, relative } from 'node:path';
import { createHash } from 'node:crypto';

export const root = resolve(import.meta.dirname, '..');
export const read = file => readFileSync(resolve(root, file), 'utf8');
export const plain = value => value.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1').replace(/[*`#]/g, '').trim();
export const slug = value => value.normalize('NFKD').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const cells = line => line.trim().replace(/^\||\|$/g, '').split(/(?<!\\)\|/).map(c => c.trim().replace(/\\\|/g, '|'));
export function resources(value) {
  const result = [];
  const badge = /\[!\[([^\]]*)\]\([^)]*\)\]\(([^)]+)\)/g;
  for (const [, label, url] of value.matchAll(badge)) result.push({ label: label === 'Star' ? 'Code' : label, url });
  const withoutBadges = value.replace(badge, '');
  for (const [, label, url] of withoutBadges.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)) result.push({ label, url });
  return result;
}
export const sections = {
  'Foundations, Surveys and Human Factors': { key: 'foundations', short: 'Foundations', zh: '基础与人因', description: 'Definitions, surveys, and the human cost of interruption.' },
  'Proactive Interaction and Planning': { key: 'interaction', short: 'Interaction & planning', zh: '交互与规划', description: 'Clarification, intent inference, and mixed-initiative collaboration.' },
  'GUI, Mobile, OS and Coding Agents': { key: 'computer-use', short: 'Computer use', zh: '计算机与移动端', description: 'Proactive assistance across desktops, phones, browsers, and IDEs.' },
  'Multimodal, Wearable and Embodied Agents': { key: 'multimodal', short: 'Multimodal & embodied', zh: '多模态与具身', description: 'Video, audio, wearables, and embodied environments.' },
  'Benchmarks, Personalization and Optimization': { key: 'evaluation', short: 'Evaluation & memory', zh: '评测与记忆', description: 'Benchmarks, personalization, long-term memory, and learning.' }
};
export function loadCatalog() {
  const source = read('README.md');
  const records = new Map();
  const featured = [];
  const mustReadBlock = source.split('## Must Read\n')[1]?.split('\n## ')[0] ?? '';
  for (const [, , resourceCell, reason] of mustReadBlock.matchAll(/<tr><td>([\s\S]*?)<\/td><td>([\s\S]*?)<\/td><td>([\s\S]*?)<\/td><\/tr>/g)) {
    const links = [...resourceCell.matchAll(/<a href="([^"]+)">([\s\S]*?)<\/a>/g)].map(([, url, label]) => ({ url, label: label.replace(/<[^>]+>/g, '') }));
    featured.push({ resources: links, reason: reason.replace(/<[^>]+>/g, '').trim() });
  }
  let heading = '', section = '';
  for (const line of source.split('\n')) {
    if (line.startsWith('## ')) heading = line.slice(3).trim();
    if (line.startsWith('### ')) section = line.slice(4).trim();
    if (!/^\| \d{4}-\d{2} \|/.test(line)) continue;
    const row = cells(line);
    if (heading === 'Must Read') { featured.push({ title: plain(row[1]), reason: plain(row[2]), resources: resources(row[3]) }); continue; }
    if (heading !== 'Papers') continue;
    if (row.length !== 5 || !sections[section]) throw new Error(`Invalid paper row: ${line.slice(0, 120)}`);
    const links = resources(row[4]);
    if (!links.length) throw new Error(`No resources: ${row[1]}`);
    const note = links.find(r => r.label === 'Notes')?.url;
    if (note && (!note.startsWith('papers/') || !existsSync(resolve(root, note)))) throw new Error(`Missing note: ${note}`);
    const primary = links.find(r => ['arXiv', 'ACL', 'CVF', 'DOI', 'OpenReview', 'Paper', 'ACM', 'Springer'].includes(r.label)) ?? links[0];
    const title = plain(row[1]);
    const identity = primary.url.replace(/\/$/, '');
    const noteText = note ? read(note) : '';
    const tags = [...row[3].matchAll(/`([^`]+)`/g)].map(m => m[1]);
    // Streaming is an explicit editorial lens, derived from title/tags and note evidence.
    const streaming = /streaming|streamarena|streamready|onestreamer|full.duplex|duplexact|omnimmi|omni.pro|egopro|egoserve|moss.vl|realtime.venus|hithink|gander|vinci|live assistant/i.test(title + ' ' + tags.join(' ') + ' ' + noteText);
    const summaryMatch = noteText.match(/## Why It Matters\s+([\s\S]*?)(?=\n## |$)/);
    const summary = summaryMatch ? plain(summaryMatch[1]).replace(/\s+/g, ' ') : '';
    if (records.has(identity)) {
      const previous = records.get(identity);
      previous.categories = [...new Set([...previous.categories, sections[section].key])];
      previous.tags = [...new Set([...previous.tags, ...tags])];
      if (previous.title !== title) throw new Error(`Conflicting titles for ${identity}`);
      continue;
    }
    const id = note ? slug(note.split('/').at(-1).replace(/\.md$/, '')) : `${slug(title).slice(0, 85)}-${createHash('sha256').update(identity).digest('hex').slice(0, 7)}`;
    records.set(identity, { id, title, date: row[0], venue: plain(row[2]), tags, categories: [sections[section].key], resources: links.filter(r => r.label !== 'Notes'), note: note ?? null, noteText, summary, streaming, primary: primary.url });
  }
  const papers = [...records.values()].sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
  const selected = JSON.parse(read('website/content/selected.json')).papers;
  const ids = new Set();
  for (const paper of papers) {
    if (ids.has(paper.id)) throw new Error(`Duplicate slug: ${paper.id}`);
    ids.add(paper.id);
    const pick = featured.find(f => f.resources.some(r => paper.resources.some(p => p.url === r.url)));
    paper.featured = Boolean(pick); paper.reason = pick?.reason ?? '';
    paper.featureOrder = pick ? featured.indexOf(pick) : 999;
    if (selected[paper.id]) Object.assign(paper, selected[paper.id], { selected: true, selectedOrder: Object.keys(selected).indexOf(paper.id) });
  }
  for (const id of Object.keys(selected)) if (!ids.has(id)) throw new Error(`Selected paper missing from catalog: ${id}`);
  const notes = [];
  function walk(dir) { for (const entry of readdirSync(dir, { withFileTypes: true })) { const path = resolve(dir, entry.name); if (entry.isDirectory()) walk(path); else if (entry.name.endsWith('.md')) notes.push(relative(root, path)); } }
  walk(resolve(root, 'papers'));
  const linked = new Set(papers.map(p => p.note).filter(Boolean));
  const unlinked = notes.filter(n => !linked.has(n));
  const benchmarks = read('BENCHMARKS.md').split('\n').filter(l => /^\| /.test(l) && !/^\| Benchmark \|/.test(l)).map(cells).filter(r => r.length === 9).map(r => ({ name: plain(r[0]), paper: plain(r[1]), domain: plain(r[2]), stream: plain(r[3]), target: plain(r[4]), user: plain(r[5]), data: plain(r[6]), metrics: plain(r[7]), resourcesMarkdown: r[8] }));
  for (const benchmark of benchmarks) {
    const links = resources(benchmark.resourcesMarkdown);
    const matches = papers.filter(p => links.some(r => p.resources.some(pr => pr.url === r.url)));
    const paper = matches.length === 1 ? matches[0] : undefined;
    const merged = [...links, ...(paper?.resources ?? [])];
    benchmark.resources = merged.filter((r, i) => !/notes?/i.test(r.label) && merged.findIndex(other => other.url === r.url) === i);
    benchmark.primary = paper?.primary ?? benchmark.resources[0]?.url;
    benchmark.date = paper?.date;
    benchmark.venue = paper?.venue;
    if (!benchmark.primary) throw new Error(`Benchmark has no navigation destination: ${benchmark.name}`);
  }
  const projects = [];
  let projectGroup = '';
  const projectGroups = {
    'Persistent Runtimes and Activation SDKs': { key: 'runtime', label: 'Runtimes & SDKs', zh: '运行时与 SDK' },
    'Ambient and Personal Assistants': { key: 'assistant', label: 'Personal assistants', zh: '个人助手' },
    'Research Implementations': { key: 'research', label: 'Research implementations', zh: '研究实现' },
    'Product Reference': { key: 'product', label: 'Products', zh: '产品' },
    'Supporting Components': { key: 'component', label: 'Supporting components', zh: '配套组件' }
  };
  if (existsSync(resolve(root, 'PROJECTS.md'))) for (const line of read('PROJECTS.md').split('\n')) {
    if (line.startsWith('## ')) projectGroup = line.slice(3).trim();
    if (!/^\| \*\*/.test(line) || !projectGroups[projectGroup]) continue;
    const row = cells(line), name = plain(row[0]), group = projectGroups[projectGroup];
    const links = resources(row.at(-1)).filter(r => r.label !== 'Notes');
    const paper = papers.find(p => links.some(r => r.url === p.primary));
    projects.push({ id: slug(name), title: name, description: plain(row[1]), group: group.key, groupLabel: group.label, groupZh: group.zh, resources: links.map(r => ({ ...r, label: r.label === 'Repository' ? 'Repo' : r.label })), primary: links.find(r => r.label === 'Repository')?.url ?? links[0]?.url, ...(paper?.thumbnail ? { thumbnail: paper.thumbnail, selected: true } : {}) });
  }
  return { papers, projects, projectGroups: Object.values(projectGroups), benchmarks, categories: Object.values(sections), archivedNotes: unlinked, stats: { papers: papers.length, notes: linked.size, streaming: papers.filter(p => p.streaming).length, benchmarks: benchmarks.length, projects: projects.length, latest: papers[0]?.date } };
}
