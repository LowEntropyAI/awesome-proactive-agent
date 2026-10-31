import { mkdirSync, rmSync, writeFileSync, copyFileSync, cpSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { loadCatalog, root, read } from './data.mjs';
import { markdown } from './guides.mjs';
import { layout, home, library, benchmarkPage, projectPage, guidePage, recentPage, understandPage, selectedPage, base, url, esc, bi } from './views.mjs';
import { paperDetail } from './paper-detail.mjs';
import { renderCover } from './covers.mjs';
const catalog = loadCatalog();
const out = resolve(root, 'dist');
rmSync(out, { recursive: true, force: true });
const discoveryVersion = createHash('sha256').update(read('website/discovery.css')).digest('hex').slice(0,12);
function write(path, content) {
  const file = resolve(out, path);
  mkdirSync(dirname(file), { recursive: true });
  if (path.endsWith('.html')) content = content.replace('assets/discovery.css"', 'assets/discovery.css?v='+discoveryVersion+'"');
  writeFileSync(file, content);
}
const supplement = file => `<section class="prose guide-content">${markdown(read(file).replace(/^# /, '## '))}</section>`;
const mustRead = read('README.md').split('## Must Read\n')[1]?.split('\n## ')[0];
if (!mustRead) throw new Error('Missing Must Read source');
const pages = [
  ['', 'Proactive AI Agents: Papers, Projects & Benchmarks', home(catalog), 'When should an AI agent offer help before you ask? Explore the latest papers, start with essential readings, and find open-source projects and benchmarks.'],
  ['understand/', 'Understand proactivity', understandPage(catalog)],
  ['selected/', 'Proactive AI Agents: Essential Papers to Read First', selectedPage(catalog), 'New to proactive AI? Start with selected papers on when agents should act, ask or wait. Read why each paper matters and follow the links to the original work.'],
  ['recent/', 'Latest Proactive AI Agent Papers', recentPage(catalog), 'Catch up on new proactive AI research in order of first publication. Filter papers by research question, context or mechanism, then open a brief or the original paper.'],
  ['library/', 'Research library', library(catalog)],
  ['streaming/', 'Streaming proactive models', library(catalog, true) + supplement('STREAMING.md')],
  ['benchmarks/', 'Benchmark comparison', benchmarkPage(catalog) + supplement('BENCHMARKS.md')],
  ['start/', 'Must Read: layered reading routes', guidePage(catalog, markdown('# Must Read\n' + mustRead), 'start')],
  ['map/', 'Research map', guidePage(catalog, markdown(read('RESEARCH_MAP.md')), 'map')],
  ['projects/', 'Proactive AI Agent Projects, Tools & Code', projectPage(catalog) + `<details class="project-source-notes"><summary>Source guide / 完整来源说明</summary>${supplement('PROJECTS.md')}</details>`, 'Find proactive assistants, agent frameworks and research implementations. Browse by project type and go directly to a code repository or the official product page.'],
  ['applications/', 'Agents & applications', guidePage(catalog, markdown(read('APPLICATIONS.md')), 'applications')],
  ['personal/', 'Proactive personal agents', guidePage(catalog, markdown(read('PERSONAL_AGENTS.md')), 'personal')],
  ['infrastructure/', 'Supporting infrastructure', guidePage(catalog, markdown(read('INFRASTRUCTURE.md')), 'infrastructure')]
];
for (const p of catalog.papers) {
  const summary = (p.gallerySummary || p.description || p.summary || '').trim();
  if (!summary) throw new Error('Missing paper description: ' + p.id);
  // Prefer a complete opening sentence over a snippet cut off mid-thought.
  const description = summary.length > 200 ? summary.match(/^.+?[.!?](?=\s|$)/u)?.[0] || summary : summary;
  pages.push([`papers/${p.id}/`, p.title, `<div class="standalone-brief"><a class="back-to-feed" href="${url('recent/')}">← ${bi('Back to research', '返回研究信息流')}</a>${paperDetail(p)}</div>`, description]);
}
for (const [path, title, content, description] of pages) {
  write(path + 'index.html', layout(description ? title : title + ' · LowEntropyAI', content, path, catalog.stats, description));
}
write('404.html', layout('Page not found', `<div class="page-shell page-heading"><div class="eyebrow">404 / OFF THE MAP</div>${bi('Let’s find your way back.', '回到研究地图。', 'h1')}<p>The page may have moved. Browse the library to find the paper.</p><a class="button primary" href="${url('library/')}">Explore the library →</a></div>`, '404.html', catalog.stats));
write('catalog.json', JSON.stringify({ ...catalog, selectionGuide: undefined, papers: catalog.papers.map(({ noteText, summary, reason, note, ...p }) => ({ ...p, hasNotes: Boolean(note) })) }));
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(p => p[0]).map(path => `<url><loc>https://lowentropyai.github.io${base}${esc(path)}</loc></url>`).join('')}</urlset>`);
write('robots.txt', 'User-agent: *\nAllow: /\nSitemap: https://lowentropyai.github.io/awesome-proactive-agent/sitemap.xml\n');
write('.nojekyll', '');
for (const name of ['discovery.css', 'catalog-client.js', 'paper-detail-client.js', 'style.css', 'experience.css', 'experience.js', 'gallery.css', 'gallery.mjs', 'gallery-client.js', 'app.js', 'theme.js', 'search.mjs', 'resources.mjs', 'favicon.svg', 'social.svg']) { mkdirSync(resolve(out, 'assets'), { recursive: true }); copyFileSync(resolve(root, 'website', name), resolve(out, 'assets', name.endsWith('.mjs') ? name.replace('.mjs', '.js') : name)); }
copyFileSync(resolve(root, 'website/assets/lowentropyai.png'), resolve(out, 'assets/lowentropyai.png'));
for (const name of ['proactive-hero.svg', 'proactive-hero-mobile.svg', 'proactive-field.svg']) copyFileSync(resolve(root, 'assets', name), resolve(out, 'assets', name));
for(const item of [...catalog.papers,...catalog.projects,...catalog.benchmarks]) if(item.thumbnail?.editorial) write(item.thumbnail.src.replace(base,''),renderCover(item.thumbnail));
copyFileSync(resolve(root, 'website/paper-detail.mjs'), resolve(out, 'assets/paper-detail.mjs'));
copyFileSync(resolve(root, 'website/facets.mjs'), resolve(out, 'assets/facets.mjs'));
cpSync(resolve(root, 'website/assets/cover'), resolve(out, 'assets/cover'), { recursive: true });
cpSync(resolve(root, 'website/assets/overviews'), resolve(out, 'assets/overviews'), { recursive: true });
cpSync(resolve(root, 'website/assets/brands'), resolve(out, 'assets/brands'), { recursive: true });
cpSync(resolve(root, 'website/assets/figures'), resolve(out, 'assets/figures'), { recursive: true });
console.log(`Built ${pages.length} directory pages: ${JSON.stringify(catalog.stats)}`);
