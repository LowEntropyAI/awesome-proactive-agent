import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';
import { base, esc } from './views.mjs';
const root = resolve('dist');
let pages = 0, links = 0;
function walk(dir) { for (const entry of readdirSync(dir, { withFileTypes: true })) { const path = resolve(dir, entry.name); if (entry.isDirectory()) walk(path); else if (entry.name.endsWith('.html')) check(path); } }
function check(path) {
  const html = readFileSync(path, 'utf8'); pages++;
  assert.match(html, /<title>.+<\/title>/); assert.match(html, /<main id="main">/);
  assert.doesNotMatch(html, /<h[1-6][^>]*>(?:Why It Matters|Proactivity Signal|Evaluation Setup|Key Limitations|Use For)<\//, `${path}: repository note sections should not be website articles`);
  for (const [, href] of html.matchAll(/(?:href|src)="([^"#]+)(?:#[^"]*)?"/g)) {
    if (!href.startsWith(base)) continue;
    let route = decodeURI(href.slice(base.length).split(/[?#]/)[0]);
    if (!route || route.endsWith('/')) route += 'index.html';
    assert.ok(existsSync(resolve(root, route)), `${path}: broken link ${href}`); links++;
  }
  assert.doesNotMatch(html, /(?:\/Users\/|\/home\/|file:\/\/)/, `${path}: private path`);
}
walk(root);
const catalog=JSON.parse(readFileSync(resolve(root,'catalog.json'),'utf8'));
const sitemap = readFileSync(resolve(root, 'sitemap.xml'), 'utf8');
const snippets = new Set();
for (const paper of catalog.papers) {
  const route = 'papers/' + paper.id + '/';
  const html = readFileSync(resolve(root, route, 'index.html'), 'utf8');
  const snippet = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  assert.ok(html.includes('<title>' + esc(paper.title) + '</title>'), route);
  assert.ok(snippet && !snippets.has(snippet), 'Missing or repeated description: ' + route);
  assert.ok(html.includes('property="og:description" content="' + snippet + '"'), route);
  assert.ok(sitemap.includes(base + route + '</loc>'), route);
  snippets.add(snippet);
}
for(const item of [...catalog.papers,...catalog.projects,...catalog.benchmarks]){
  assert.ok(item.thumbnail?.src,`Missing cover: ${item.title||item.name}`);
  assert.ok(existsSync(resolve(root,item.thumbnail.src.slice(base.length))),`Missing cover asset: ${item.thumbnail.src}`);
}
console.log(`Validated ${pages} HTML files and ${links} internal links.`);
