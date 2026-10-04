import { mkdirSync, rmSync, writeFileSync, copyFileSync, cpSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { loadCatalog, root, read } from './data.mjs';
import { markdown } from './guides.mjs';
import { layout, home, library, benchmarkPage, projectPage, guidePage, base, url, esc, bi } from './views.mjs';
const catalog = loadCatalog();
const out = resolve(root, 'dist');
rmSync(out, { recursive: true, force: true });
function write(path, content) { const file = resolve(out, path); mkdirSync(dirname(file), { recursive: true }); writeFileSync(file, content); }
const supplement = file => `<section class="prose guide-content">${markdown(read(file).replace(/^# /, '## '))}</section>`;
const mustRead = read('README.md').split('## Must Read\n')[1]?.split('\n## ')[0];
if (!mustRead) throw new Error('Missing Must Read source');
const pages = [
  ['', 'Proactive agents & streaming models', home(catalog)],
  ['library/', 'Research library', library(catalog)],
  ['streaming/', 'Streaming proactive models', library(catalog, true) + supplement('STREAMING.md')],
  ['benchmarks/', 'Benchmark comparison', benchmarkPage(catalog) + supplement('BENCHMARKS.md')],
  ['start/', 'Must Read: layered reading routes', guidePage(catalog, markdown('# Must Read\n' + mustRead))],
  ['map/', 'Research map', guidePage(catalog, markdown(read('RESEARCH_MAP.md')))],
  ['projects/', 'Projects & implementations', projectPage(catalog) + supplement('PROJECTS.md')],
  ['applications/', 'Agents & applications', guidePage(catalog, markdown(read('APPLICATIONS.md')))],
  ['personal/', 'Proactive personal agents', guidePage(catalog, markdown(read('PERSONAL_AGENTS.md')))],
  ['infrastructure/', 'Supporting infrastructure', guidePage(catalog, markdown(read('INFRASTRUCTURE.md')))]
];
for (const [path, title, content] of pages) write(path + 'index.html', layout(title, content, path, catalog.stats));
write('404.html', layout('Page not found', `<div class="page-shell page-heading"><div class="eyebrow">404 / OFF THE MAP</div>${bi('Let’s find your way back.', '回到研究地图。', 'h1')}<p>The page may have moved. Browse the library to find the paper.</p><a class="button primary" href="${url('library/')}">Explore the library →</a></div>`, '404.html', catalog.stats));
write('catalog.json', JSON.stringify({ ...catalog, selectionGuide: undefined, papers: catalog.papers.map(({ noteText, summary, reason, note, ...p }) => ({ ...p, hasNotes: Boolean(note) })) }));
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(p => p[0]).map(path => `<url><loc>https://lowentropyai.github.io${base}${esc(path)}</loc></url>`).join('')}</urlset>`);
write('robots.txt', 'User-agent: *\nAllow: /\nSitemap: https://lowentropyai.github.io/awesome-proactive-agent/sitemap.xml\n');
write('.nojekyll', '');
for (const name of ['style.css', 'app.js', 'theme.js', 'search.mjs', 'resources.mjs', 'favicon.svg', 'social.svg']) { mkdirSync(resolve(out, 'assets'), { recursive: true }); copyFileSync(resolve(root, 'website', name), resolve(out, 'assets', name.endsWith('.mjs') ? name.replace('.mjs', '.js') : name)); }
copyFileSync(resolve(root, 'website/assets/lowentropyai.png'), resolve(out, 'assets/lowentropyai.png'));
cpSync(resolve(root, 'website/assets/overviews'), resolve(out, 'assets/overviews'), { recursive: true });
console.log(`Built ${pages.length} directory pages: ${JSON.stringify(catalog.stats)}`);
