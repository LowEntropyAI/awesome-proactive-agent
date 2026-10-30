# Proactive outreach hero

## Visual contract

- **Destination:** README/outreach infographic, not a paper architecture figure or empirical result.
- **Format:** Pure editable SVG, desktop 1120 × 620 and mobile 600 × 960.
- **Core idea:** Proactivity includes anticipatory initiative and appropriate assistance, not only personalized interruption timing.
- **Source:** README Scope, RESEARCH_MAP.md, PERSONAL_AGENTS.md and the curated catalog.
- **Composition:** Six complementary capabilities with no arrows or compulsory sequence: Understand Context; Anticipate Needs; Prepare & Plan; Communicate & Collaborate; Act With Permission; Adapt & Exercise Restraint.
- **Personal understanding:** Goals, people and environments; Memory + Feedback. Important capabilities without defining the whole field.
- **Boundary:** Editorial orientation, neither an exhaustive taxonomy nor a claim that each project implements every capability.
- **Palette:** Low-saturation blue, lilac and mint radial washes, dark slate typography and translucent neutral panels. Color is decorative rather than evidence encoding.
- **Typography:** Title Case for short labels; sentence case for explanatory sentences.
- **Assets:** Native SVG shapes and live text; no raster, remote fonts, animation or scripts. The prior Lucide license is retained for historical assets.
- **Rebuild:** Run `node scripts/build-readme-hero.mjs`. Generated SVGs remain committed for GitHub rendering.

## Render QA

Inspect both variants at their actual presentation sizes, checking text bounds, contrast and gradient subtlety. The mobile layout uses two columns and explicit title wrapping. Alt text describes complementary capabilities rather than the previous observation-to-interruption workflow.

Verified in-browser: desktop at native 1120 × 620; mobile at 358 px image width. The six capability labels fit, the muted color washes remain behind neutral panels, and Memory + Feedback uses the requested capitalization. The mobile site was also inspected in light and dark themes at a 390 px content viewport with no horizontal overflow.
