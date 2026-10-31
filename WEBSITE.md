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
- `APPLICATIONS.md`, `PERSONAL_AGENTS.md`, `INFRASTRUCTURE.md`: shared editorial routes, rendered at `/applications/`, `/personal/`, and `/infrastructure/`.
- `README.md` Must Read: rendered with its tier hierarchy and non-paper resources at `/picks/#reading-path`, below the editorial picks.
- `RESEARCH_MAP.md`: question-oriented guide rendered at `/map/`.
- `BENCHMARKS.md`: structured nine-column evaluation source, searchable resource directory, and selection guide.
- `STREAMING.md`: model/framework mechanisms, release status, capability routes, and evidence boundaries.
- `PROJECTS.md`: assistants, implementations, products, and supporting components.
- `website/content/selected.json`: representative paper picks at `/picks/`, separate from README Must Read. Also filterable through `library/?selected=1`.
- `website/content/recent.json`: source-verified first-posted dates, short gallery summaries, original preview sources, explicitly audited recent-edition streaming membership, and six dated partial/full/planned release checks. Bibliographic identity and resource URLs still come from README.

The site has one job per navigation item: **Latest** (`#discover` on the homepage, full list at `/recent/`), **What is Proactive?** (`/what-is-proactive-ai/`), **Picks** (`/picks/`) and **Directory** (`/library/`, `/projects/`, `/benchmarks/`, plus the Applications, Personal, Streaming, Infrastructure and Research Map guides). Directory pages share one sub-navigation; there is no sidebar or floating menu. Use `↗` only for links that leave the site. The public name is **Proactive Atlas**, curated by LowEntropyAI.

The homepage runs hero with definition → latest papers → three-question test and action ladder → six categories with their work → landscape → picks → contribute. `/understand/`, `/selected/` and `/start/` are noindex redirects kept for existing links. The Observe → Decide → Assist / wait diagram is an editorial concept, not a reconstructed paper figure.

`website/content/atlas.json` holds the editable picks with their one-line reasons and the landscape placements. `website/content/paper-roles.json` labels papers **Core**, **Adjacent** or **Supporting**, as defined on the definition page. Each label is an editorial judgment grounded in the paper's evidence note. Every recent or selected paper must have one or the build fails; older papers stay unlabelled until reviewed.

The design adapts the MIT-licensed **Minted Directory Astro** directory template to this repository's static generator. See [website/TEMPLATE.md](website/TEMPLATE.md) for the upstream source, adapted components, and retained license. The website focuses on direct Paper / Repo / Project / Model / Dataset navigation, category browsing, and selected overview figures.

`website/data.mjs` normalizes the bibliography, merges repeated primary-source URLs while preserving categories, validates linked notes, and counts unique papers. Retained notes outside the bibliography are reported as `archivedNotes` in `catalog.json`. They do not inflate collection counts.

The streaming, projects, and benchmarks directories also render their source guides below the browse view, preserving mechanism details and section anchors. The [restructuring plan](docs/RESTRUCTURE_PLAN.md) records the navigation design and a future optional structured-facet migration.

The streaming filter is an editorial lens derived from title, tags, and note text. It includes streaming understanding, timing, duplex interaction, and memory papers. It is not a certification of autonomous need discovery. Use `STREAMING.md`'s capability routes to distinguish those mechanisms.

The language switch translates navigation, filters, and interface copy. Original paper names and technical metadata remain in English. Search covers titles, tags, venues, selected descriptions, and resource URLs, and supports basic Chinese topic aliases such as `记忆`, `流式`, `安全`, and `澄清`.

## Recent gallery and selection upkeep

The homepage shows the six newest papers with their figures and a visible category filter, with no promised update frequency; on the same date, picks and core work come first. `/recent/` provides the full gallery grouped by month. `/what-is-proactive-ai/` and the homepage connect six research questions to actual works, using the gallery's question labels; `/picks/` offers papers, products, projects and the layered reading path. Cards are ordered by actual first arXiv posting, not ID month or commit date. The current gallery covers 51 records, including an October-ID paper first posted on September 25. No votes, popularity or exhaustive daily coverage are implied.

The gallery shares static/server and client rendering in `website/gallery.mjs`. Four composable axes (question, context, mechanism, evidence) live in a collapsed disclosure, with active removable filters, counts, search, URL state on `/recent/`, and progressive loading. Initial cards render without JavaScript. Previews use contain sizing, original attribution and no-figure fallbacks. Dated release snapshots distinguish code, weights and data; they are not live monitoring.

Click a title, preview or Quick Read to open a keyboard-accessible native dialog. Escape, backdrop click and Close restore focus to the trigger. Briefs label editorial summaries separately from author abstracts; original abstracts remain one link away. Original figures have descriptive captions and full-resolution links. Every recent/selected paper also has a static `/papers/<id>/` page for sharing and no-JavaScript fallback. No PDF viewer, third-party script or new service is loaded. The existing local catalog is reused; images remain lazy in the feed.

Selected Research retains three agents (Proactive Agent, PASK, MemoProAgent), three models (JoyAI-VL-Interaction, Gander, EgoVoice) and three benchmarks (π-Bench, PIRA-Bench / PIRF, P3IBench). Picks balance mechanisms and application/evaluation settings rather than replacing everything with the newest batch. Changing a selection never removes the previous paper from the bibliography.

When ingesting a new current-month paper, also add its role to `paper-roles.json`, record its source-verified `publishedAt` in `recent.json`, assign streaming membership based on the actual mechanism, and add an editorial summary/preview when appropriate. Tests reject current-month papers without a gallery date and prevent clarification-only studies from entering the audited streaming facet through incidental note keywords. Extend the edition to later months rather than creating a separate bibliography. Browser QA should also cover gallery filtering + search, more/reset controls, expanded release evidence, direct selected URLs, mobile single-column layout and image loading.

## Publish

The tracked `.github/workflows/pages.yml` validates pull requests and builds/deploys pushes to `main`. In repository **Settings → Pages → Source**, select **GitHub Actions** once. No deployment secrets or paid services are required.

Static HTML routes work directly on GitHub Pages without SPA rewrites. The catalog, overview previews, styles, and scripts are hosted in this repository. Overview figures retain upstream attribution and links to their originals. There is no analytics, sign-in, server-side search, or database. Theme/language preferences are optional browser-local storage.

Deployment is complete only when the Actions deployment succeeds and the live home page, catalog, streaming directory, and overview assets return successfully. Do not infer deployment from a commit or an uploaded artifact alone.

## Discovery edition QA

The 2026-10-31 interaction refresh passed 28 automated tests and validation of 71 HTML files / 1,978 internal links. Browser checks covered desktop and 390 px mobile layout, both themes and languages, combined search/facets, URL filters, empty-result reset, progressive loading, quick-read Escape/focus return, original SVG cover loading and static detail pages. The visual refresh does not change bibliography membership or imply a new literature scan.
