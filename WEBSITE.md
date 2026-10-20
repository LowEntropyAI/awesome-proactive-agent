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
- `README.md` Must Read: rendered with its tier hierarchy and non-paper resources at `/start/`; balanced agent/model/benchmark selections remain a separate homepage feature.
- `RESEARCH_MAP.md`: question-oriented guide rendered at `/map/`.
- `BENCHMARKS.md`: structured nine-column evaluation source, searchable resource directory, and selection guide.
- `STREAMING.md`: model/framework mechanisms, release status, capability routes, and evidence boundaries.
- `PROJECTS.md`: assistants, implementations, products, and supporting components.
- `website/content/selected.json`: nine representative homepage picks across agents, models, and benchmarks. Selected is independent of README Must Read and uses `library/?selected=1`.
- `website/content/recent.json`: source-verified first-posted dates, short gallery summaries, original preview sources, explicitly audited recent-edition streaming membership, and six dated partial/full/planned release checks. Bibliographic identity and resource URLs still come from README.

Homepage selections use three explicit groups: Proactive Agents, Models, and Benchmarks. Desktop columns share card-row heights so differing tag counts and resource links do not shift later entries out of alignment. PASK adds a latent-need/personal-memory system; PIRA-Bench / PIRF adds GUI intent recommendation and its reference framework. Official overview images retain their source links; a missing image does not exclude a representative work. SVG icons and the clickable collection map provide visual navigation. Applications, Papers, Projects, and Benchmarks share the main header navigation; GitHub and Add a paper appear there once. The common sidebar contains Must Read, Personal agents, Supporting infrastructure, Research map, and research-area filters, with icons and current-page markers. On mobile, its guide links use a compact grid below the header. Homepage and footer shortcuts do not repeat repository or contribution links. Paper, project, and benchmark tags use small outlined boxes. Streaming uses the same outlined tag and `library/?tag=Streaming` filter as every topic. It has no separate metadata badge, top-level navigation item, sidebar item, or exclusive accent color. The existing `/streaming/` guide remains reachable from documentation links for compatibility. Proactive remains the primary visual emphasis. The Observe → Decide → Assist / wait diagram is an editorial concept, not a reconstructed paper figure.

The design adapts the MIT-licensed **Minted Directory Astro** directory template to this repository's static generator. See [website/TEMPLATE.md](website/TEMPLATE.md) for the upstream source, adapted components, and retained license. The website focuses on direct Paper / Repo / Project / Model / Dataset navigation, category browsing, and selected overview figures.

`website/data.mjs` normalizes the bibliography, merges repeated primary-source URLs while preserving categories, validates linked notes, and counts unique papers. Retained notes outside the bibliography are reported as `archivedNotes` in `catalog.json`. They do not inflate collection counts.

The streaming, projects, and benchmarks directories also render their source guides below the browse view, preserving mechanism details and section anchors. The [restructuring plan](docs/RESTRUCTURE_PLAN.md) records the navigation design and a future optional structured-facet migration.

The streaming filter is an editorial lens derived from title, tags, and note text. It includes streaming understanding, timing, duplex interaction, and memory papers. It is not a certification of autonomous need discovery. Use `STREAMING.md`'s capability routes to distinguish those mechanisms.

The language switch translates navigation, filters, and interface copy. Original paper names and technical metadata remain in English. Search covers titles, tags, venues, selected descriptions, and resource URLs, and supports basic Chinese topic aliases such as `记忆`, `流式`, `安全`, and `澄清`.

## Recent gallery and selection upkeep

The homepage has a six-card recent preview; `/recent/` provides the full visual feed. Cards are ordered by the actual first arXiv posting (not the arXiv ID month, local file timestamp, or commit date), grouped by month with an exact date/source on each card. The current edition covers 29 records, including an October-ID paper first posted on September 25. There are no fabricated votes or popularity rankings. “Recent” means recently collected research, not an exhaustive daily arXiv feed.

The gallery shares static/server and client rendering in `website/gallery.mjs`. It supports streaming/clarification/benchmark lenses, text search, URL state on the full page, progressive loading, empty-state reset, bilingual controls and themes. Initial cards render without JavaScript. Original figures use contain sizing, author/source credit and links to full originals; no-figure cards are labeled text briefs. Six expandable release checks distinguish code, weights and data, and preserve the difference between a promised release, a website-only repository, evaluation scripts, training code and a checkpoint. These checks are dated snapshots, not automatic live monitoring.

Selected Research retains three agents (Proactive Agent, PASK, ProPerAgent), three models (JoyAI-VL-Interaction, OneStreamer, EgoVoice) and three benchmarks (π-Bench, PIRA-Bench / PIRF, P3IBench). Picks balance mechanisms and application/evaluation settings rather than replacing everything with the newest batch. Changing a selection never removes its previous paper from the bibliography. The [2026-10-21 rationale and release audit](docs/updates/2026-10-21-streaming-gallery.md) records the boundaries.

When ingesting a new current-month paper, also record its source-verified `publishedAt` in `recent.json`, assign streaming membership based on the actual mechanism, and add an editorial summary/preview when appropriate. Tests reject current-month papers without a gallery date and prevent clarification-only studies from entering the audited streaming facet through incidental note keywords. Extend the edition to later months rather than creating a separate bibliography. Browser QA should also cover gallery filtering + search, more/reset controls, expanded release evidence, direct selected URLs, mobile single-column layout and image loading.

## Publish

The tracked `.github/workflows/pages.yml` validates pull requests and builds/deploys pushes to `main`. In repository **Settings → Pages → Source**, select **GitHub Actions** once. No deployment secrets or paid services are required.

Static HTML routes work directly on GitHub Pages without SPA rewrites. The catalog, overview previews, styles, and scripts are hosted in this repository. Overview figures retain upstream attribution and links to their originals. There is no analytics, sign-in, server-side search, or database. Theme/language preferences are optional browser-local storage.

Deployment is complete only when the Actions deployment succeeds and the live home page, catalog, streaming directory, and overview assets return successfully. Do not infer deployment from a commit or an uploaded artifact alone.
