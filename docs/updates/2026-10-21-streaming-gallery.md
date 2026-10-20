# Recent streaming work, release audit, and research gallery

## Literature Monitoring Report: competitor-tracking — recent proactive streaming work

**As of:** 2026-10-21. **Time range:** resource changes from 2026-10-19 to 2026-10-21; the six papers were first posted October 8–15. **Sources scanned:** primary arXiv HTML, official project pages, linked GitHub main-branch trees/READMEs, Hugging Face dataset/model metadata. **Papers scanned:** six targeted works, not a new broad literature search. **High-relevance papers:** five streaming works plus one related embodied framework. **Overall signal:** FOLLOW-UP on missing release artifacts, not a novelty-threat judgment.

| Work / primary source | Relevance / overlap type | Core mechanism and evidence boundary | Code / weights / data as checked | Action |
|---|---|---|---|---|
| [ProPerAgent / ProPerMem](https://arxiv.org/html/2610.22671v1) | High · problem, method, benchmark | Query-free memory graph retrieval → evidence gate → reminder or silence. Windowed and persistent streaming implementations differ; headline scores must not be transferred across them. Memories are synthesized, not a longitudinal wearable deployment. | Code + evaluation set promised upon publication; trained weights not verified. | FOLLOW-UP |
| [P3I-Assistant-4B / P3IBench](https://arxiv.org/html/2610.21568v1) | High · method, benchmark | Qwen3-VL-4B SFT + RL learns response/silence. Perception, hazard prediction and intervention use content-and-timing scores with redundancy penalties. Standing instructions and scripted intervention errors are supplied. | [Inference/evaluation code](https://github.com/Cuibing-fundemental/P3IBench) public; training pipeline and assistant weights not verified. [Benchmark JSON/videos](https://huggingface.co/datasets/AstroCuibing/P3IBench) public and ungated. Full training-data release not verified. | FOLLOW-UP |
| [SurgStreamer](https://arxiv.org/html/2610.21895v1) | High · method, evidence | 1-FPS procedure-specific perception produces tool/action/phase state; a rule/pointer controller tests formal standing conditions using event memory. Request-driven event alerts, not autonomous clinical need discovery. Main tests use gold conditions. | New code, definitions, splits and protocol history announced upon publication; controller weights not verified. Public source videos are not a release of this new package. | FOLLOW-UP |
| [StreamingJev / ProAgent](https://arxiv.org/html/2610.16967v1) | High · method | Qwen3.5-4B timing gate and asynchronous Response Model both ingest causal observations. The gate enables speech via external TTS or typed device calls; timing, response quality and execution are distinct evaluations. | No linked public implementation, StreamingJev weights or new training-data release verified. Existing public evaluation sets are separate. | FOLLOW-UP |
| [EgoVoice](https://arxiv.org/html/2610.12248v1) | High · method, data | MiniCPM-o 4.5 chooses Listen/Speak per second from egocentric audio/video; HoloAssist-derived SFT and DPO refine timing and restraint. A task recipe is supplied. | [Official page](https://egocentricvoice.github.io/) schedules code, models and dataset for November 2026; not a verified current release. | FOLLOW-UP |
| [PAM](https://arxiv.org/html/2610.21211v1) | Related · embodied agent framework | VLM + finite-state routine memory selects a task or NO_ACT; VLA executes; daily reflection edits memory without weight updates. Not a newly trained streaming foundation model. | [Repository](https://github.com/DAVIAN-Robotics/PAM) now reachable (404 on October 19), but inspected main branch contains project assets, demos, example FSM and helper tools, not the full robot system. Checkpoints and evaluation dataset not verified. | FOLLOW-UP |

No models were executed and no reported scores were reproduced. “Not verified” means no public artifact was established from the inspected official links; it is not proof that no artifact exists anywhere. Public availability does not by itself establish an unrestricted open-source license.

**Actionable flags:** distinguish trained model, agent harness, evaluation suite and standing-request monitor. Never infer need discovery from full-duplex or streaming input alone. Revisit the missing artifact releases, particularly EgoVoice's November schedule and P3I-Assistant checkpoints.

**Handoff signals:** literature-searcher: optional deeper artifact retrieval; integrity-auditor: preserve windowed/streaming score boundaries and partial-release labels. No idea-scoring, novelty or manuscript handoff is needed for this repository update.

**Output self-check:** explicit date range and six-work scope; primary sources; no unsupported release, clinical utility or novelty claim.

## Selected Research: representative mechanisms, not a recency leaderboard

Keep nine papers, three per group:

| Group | Selection | Why it is represented |
|---|---|---|
| Agents | Proactive Agent; PASK; ProPerAgent / ProPerMem | Task anticipation; latent needs and personal memory; memory-justified interruption. |
| Models | JoyAI-VL-Interaction; OneStreamer; EgoVoice | Silent/respond/delegate control; streaming perception and memory; egocentric spoken intervention. |
| Benchmarks | π-Bench; PIRA-Bench / PIRF; P3IBench | Long-horizon personal workflows; GUI intent recommendation; streaming perception/prediction/intervention. |

ContextAgent, Gander and KnowU-Bench leave only the homepage selection, not the bibliography or evidence cards. The dedicated selected filter is distinct from README Must Read; the previous homepage browse link incorrectly targeted Must Read.

## Recent Papers gallery

- Homepage preview and `/recent/` full gallery, inspired by Daily Papers' visual card layout without copying votes, rankings or popularity signals.
- 29 recently collected papers have first-posted dates checked against their primary arXiv abstract pages. Exact dates appear on each card; month groups keep a continuous three-column desktop grid rather than mostly empty single-paper day rows. Mobile becomes one column.
- Ten source-attributed official figures added. No generated scientific figures; absent figures get an explicitly labeled text brief.
- Streaming, clarification and benchmark lenses; text search; progressive loading; bilingual controls; light/dark themes; static initial cards if JavaScript fails.
- Six dated expandable code/weights/data release checks, with evidence links rather than optimistic “open-source” labels.
- Recent-edition streaming membership is explicitly audited. ProactGen (video-generation clarification), MASP (dialogue self-play) and the uncertainty/alignment perspective are not streaming-model entries merely because their notes mention streaming work.
- `website/content/recent.json` is editorial metadata, not a second bibliography. New papers must first enter README and receive evidence cards as usual. Current-month records require a verified first-posted date; tests prevent silently missing the gallery.
- README's removed update announcement remains absent. This change adds no new bibliography papers.
