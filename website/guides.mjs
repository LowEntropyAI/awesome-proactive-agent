import { marked } from 'marked';
import sanitize from 'sanitize-html';
import { slug } from './data.mjs';
import { repo, url } from './views.mjs';

const routes = {
  'README.md': '', 'APPLICATIONS.md': 'applications/',
  'PERSONAL_AGENTS.md': 'personal/', 'INFRASTRUCTURE.md': 'infrastructure/',
  'STREAMING.md': 'streaming/', 'PROJECTS.md': 'projects/',
  'BENCHMARKS.md': 'benchmarks/', 'RESEARCH_MAP.md': 'map/'
};
const renderer = new marked.Renderer();
renderer.heading = function ({ tokens, depth }) {
  const text = this.parser.parseInline(tokens);
  return `<h${depth} id="${slug(text.replace(/<[^>]+>/g, ''))}">${text}</h${depth}>`;
};

export function markdown(text) {
  const html = sanitize(marked.parse(text, { renderer }), {
    allowedTags: [...sanitize.defaults.allowedTags, 'img'],
    allowedAttributes: {
      ...sanitize.defaults.allowedAttributes, '*': ['id'],
      a: ['href', 'title'], img: ['src', 'alt'], th: ['colspan', 'scope'], td: ['colspan']
    },
    transformTags: { a: (tagName, attrs) => {
      const [file, hash] = (attrs.href ?? '').split('#');
      if (file === 'README.md' && hash) {
        attrs.href = hash === 'must-read' ? url('start/') : hash === 'papers' ? url('library/') : `${repo}/blob/main/README.md#${hash}`;
      } else if (file in routes) {
        attrs.href = url(routes[file]) + (hash ? '#' + hash : '');
      } else if (/^(papers|docs)\//.test(file)) {
        attrs.href = `${repo}/blob/main/${attrs.href}`;
      }
      return { tagName, attribs: attrs };
    } }
  });
  return html.replaceAll('<table>', '<div class="markdown-table" tabindex="0" role="region" aria-label="Research comparison table"><table>')
    .replaceAll('</table>', '</table></div>');
}
