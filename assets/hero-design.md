# README hero

Format: README/outreach infographic; pure SVG generation, not a model architecture or an empirical result.

## Visual contract

The user-centered anchor is understanding goals, preferences, routines and boundaries. Context spans work, mobile, wearables, home and robots. Observation informs personal context; decisions branch into intervention or silence with equal visual weight. Benefit, timing and consent govern that choice. The scope spans research, models, agent systems, applications and evaluation without privileging a particular architecture or recent trend. Memory and feedback support personalization; no always-on surveillance or automatic learning claim is implied. The concept inventory is grounded in README Scope, RESEARCH_MAP.md and the companion guides, not a single model family.

Desktop reading path: everyday context → person → decision → intervene / stay quiet. Mobile uses the same inventory in a vertical arrangement. The dark green background, pale green person and warm intervention branch encode roles; direct labels and topology preserve meaning without color. Live text, native paths and named groups remain editable. No animation, remote font, embedded bitmap, script or external SVG dependency.

## References and assets

- [Awesome AI Agents 2026](https://github.com/caramaschiHG/awesome-ai-agents-2026): local SVG header and a compact entry-point row. Borrowed hierarchy, not artwork or exact composition.
- [E2B Awesome AI Agents](https://github.com/e2b-dev/awesome-ai-agents): direct web-directory entry near the top.
- [Sindre Sorhus Awesome](https://github.com/sindresorhus/awesome): scalable local identity asset. No logo copied.
- Icons: [Lucide](https://github.com/lucide-icons/lucide/tree/main/icons), `user-round`, `smartphone`, `watch`, `house`, `bot`, `monitor`, `message-circle`, `bell-off`. Paths retained with translation, uniform stroke and recoloring; licenses in [LUCIDE-LICENSE.txt](LUCIDE-LICENSE.txt). All are vector-editable.
- Layout, connectors and user-context geometry: original native primitives.

Rebuild both SVGs with `node scripts/build-readme-hero.mjs`. Keep generated SVGs committed for GitHub image rendering. The mobile source is selected through README `<picture>`; the desktop SVG is the fallback. The old `pro-agent.png` remains available for historical links but is no longer used in the header.

## Render QA

Inspected the actual rendered header in a GitHub-like local preview: desktop at 850 px content width and mobile at 390 px viewport / 358 px image width. The mobile source is selected correctly; labels and branch connections are unclipped. The fixed dark canvas works against both light and dark page backgrounds. Text and icons remain vectors, and alt text carries the full conceptual relationship. No specific recent model architecture is used as the collection's identity.
