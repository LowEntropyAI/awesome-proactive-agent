# Proactive Atlas · LowEntropyAI

The repository's research website is published at **https://lowentropyai.github.io/awesome-proactive-agent/**.

## Develop and verify

Requires Node.js 22 or newer; CI uses Node.js 24.

```sh
npm ci
npm run dev
```

Open `http://localhost:4173/awesome-proactive-agent/`. The preview uses the same project base path as the deployed site. Rebuild and reload after editing.

```sh
npm run check
```

This validates bibliography coverage, source deduplication, the repository's five note sections, search/filter behavior, benchmark structure, selected overview assets, generated pages, internal links, and accidental private paths. Browser QA should cover resource links, search, combined filters, pagination, no-results recovery, benchmarks, language/theme controls, and mobile layout.

## Content architecture

- `README.md`: bibliographic source, five research areas, tags, essential-reading recommendations, and resource URLs.
- `papers/**/*.md`: original English evidence cards retained in the repository. The website does not render their sections as articles.
- `RESEARCH_MAP.md`: question-oriented guide.
- `BENCHMARKS.md`: structured nine-column evaluation source, searchable resource directory, and selection guide.
- `STREAMING.md`: model/framework mechanisms, release status, capability routes, and evidence boundaries.
- `PROJECTS.md`: assistants, implementations, products, and supporting components.
- `website/content/selected.json`: selected visual entries, short navigation descriptions, original figure URLs, source attribution, and alternate text.

The design adapts the MIT-licensed **Minted Directory Astro** directory template to this repository's static generator. See [website/TEMPLATE.md](website/TEMPLATE.md) for the upstream source, adapted components, and retained license. The website focuses on direct Paper / Repo / Project / Model / Dataset navigation, category browsing, and selected overview figures.

`website/data.mjs` normalizes the bibliography, merges repeated primary-source URLs while preserving categories, validates linked notes, and counts unique papers. Retained notes outside the bibliography are reported as `archivedNotes` in `catalog.json`. They do not inflate collection counts.

The streaming filter is an editorial lens derived from title, tags, and note text. It includes streaming understanding, timing, duplex interaction, and memory papers. It is not a certification of autonomous need discovery. Use `STREAMING.md`'s capability routes to distinguish those mechanisms.

The language switch translates navigation, filters, and interface copy. Original paper names and technical metadata remain in English. Search covers titles, tags, venues, selected descriptions, and resource URLs, and supports basic Chinese topic aliases such as `记忆`, `流式`, `安全`, and `澄清`.

## Publish

The tracked `.github/workflows/pages.yml` validates pull requests and builds/deploys pushes to `main`. In repository **Settings → Pages → Source**, select **GitHub Actions** once. No deployment secrets or paid services are required.

Static HTML routes work directly on GitHub Pages without SPA rewrites. The catalog, overview previews, styles, and scripts are hosted in this repository. Overview figures retain upstream attribution and links to their originals. There is no analytics, sign-in, server-side search, or database. Theme/language preferences are optional browser-local storage.

Deployment is complete only when the Actions deployment succeeds and the live home page, catalog, streaming directory, and overview assets return successfully. Do not infer deployment from a commit or an uploaded artifact alone.
