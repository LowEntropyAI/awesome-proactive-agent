# Streaming Proactivity

[README](README.md#must-read) · [Applications](APPLICATIONS.md) · [Personal Agents](PERSONAL_AGENTS.md) · [Projects & Products](PROJECTS.md) · [Research Map](RESEARCH_MAP.md) · [Benchmark Matrix](BENCHMARKS.md)

Streaming proactivity is a dedicated cross-cutting module: it connects **models, inference frameworks, memory, training data, and evaluation**. Paper entries remain in the bibliography. This guide asks who chooses the next output and what evidence can cause that choice.

**Latest literature scan: 2026-10-08** (arXiv submission window October 2–8 UTC; newest returned submissions dated October 7). New entries were screened from abstracts and primary metadata; the earlier resource-availability snapshot remains October 4 unless stated otherwise. Models were not run as part of this curation, and scores from different protocols are not ranked together.

## Capability Routes

These routes can overlap. They describe a behavior, not an increasing capability ranking.

| Route | Decision being made | Representative resources | Evidence boundary |
|---|---|---|---|
| **Scene-triggered intervention** | Does an unfolding event merit speech, an alert, guidance, or continued silence? | JoyAI-VL-Interaction, MOSS-VL-Realtime, Proact-VL | Check the standing instruction, scene trigger, and negative/silent cases. |
| **Evidence-conditioned response timing** | Has enough evidence arrived to answer a standing question? | StreamReady, Eyes Wide Open, StreamOV, Response-G1; OneStreamer's QA branch | This establishes wait/respond behavior; discovering a new user need requires additional evidence. |
| **Proactive evidence recording** | What should be recorded before a future query is known? | OneStreamer's caption-memory branch | Internal memory generation and user-visible intervention are different outputs. |
| **Full-duplex interaction and delegation** | When should the agent listen, speak, interrupt, or return from background work while perception continues? | MiniCPM-o 4.5, Gander; JoyAI's delegation branch | Full-duplex execution needs content-grounded initiative, not only the ability to overlap input and output. |

## Models and Frameworks

### Scene-Triggered Interaction

| Work / source | Mechanism and proactive signal | Resources / release snapshot | Scope boundary |
|---|---|---|---|
| **JoyAI-VL-Interaction** · arXiv 2606 | 8B vision-first model chooses **silent / respond / delegate** each second. AdaCodec compresses predictable frames; ASR/TTS, memory, and background reasoning are pluggable. | [Paper](https://arxiv.org/abs/2606.14777) · [Code](https://github.com/jd-opensource/JoyAI-VL-Interaction) · [Model](https://huggingface.co/jdopensource/JoyAI-VL-Interaction) · [Data](https://huggingface.co/datasets/jdopensource/JoyAI-VL-Interaction) · [Notes](papers/arxiv/2026-06/joyai-vl-interaction.md). Public model/data/system links. | Demonstrated scenarios and human preferences do not establish general computer-use autonomy or broad superiority. |
| **MOSS-VL-Realtime** · arXiv 2608 | Continuous video perception and generation with model-controlled speaking/silence. Cross-attention supports incrementally arriving visual context. | [Paper](https://arxiv.org/abs/2608.15045) · [Code](https://github.com/OpenMOSS/MOSS-VL) · [Model](https://huggingface.co/OpenMOSS-Team/MOSS-VL-Realtime) · [Notes](papers/arxiv/2026-08/moss-vl-realtime-proactive-video.md). Realtime inference, serving/demo, and SFT resources are available; full training engine remains a roadmap item. | Select the **Realtime** variant; offline Instruct and Base variants have different intended interfaces. |
| **Proact-VL** · ICML 2026 per arXiv record | Streaming companion framework learns when to respond in solo commentary, co-commentary, and user guidance. | [Paper](https://arxiv.org/abs/2603.03447) · [Code / model zoo / data](https://github.com/microsoft/AnthropomorphicIntelligence/tree/main/Proact-VL) · [Notes](papers/arxiv/2026-03/proact-vl-realtime-companions.md). Concrete checkpoint/data/evaluation links appear below an outdated TODO block. | Gaming commentary/guidance is a useful intervention setting, with distinct task instructions and speech expectations. |
| **ProactiveCoach** · arXiv 2610 | Hierarchical phase/step/action understanding selects guidance or silence; a router adapts the level to expertise. | [Paper](https://arxiv.org/abs/2610.06505) · [Project](https://jinsuby.github.io/ProactiveCoach/) · [Notes](papers/arxiv/2026-10/proactivecoach-hierarchical-procedures.md). Project link supplied by the paper; release contents not audited in this scan. | Procedural assistance and benchmark expertise transitions, not a general user model. |

### Evidence, Memory, and Response Timing

| Work / source | Mechanism and proactive signal | Resources / release snapshot | Scope boundary |
|---|---|---|---|
| **OneStreamer** · arXiv 2610.01762 | **PHCM** records query-independent detail/event captions; **PSTL** learns state transitions. QA states include `Silence`, `Standby`, and `Response`. | [Paper](https://arxiv.org/abs/2610.01762) · [Code](https://github.com/MCG-NJU/OneStreamer) · [Model card](https://huggingface.co/MCG-NJU/OneStreamer-4B) · [Data](https://huggingface.co/datasets/MCG-NJU/OneStreamer-1M) · [Notes](papers/arxiv/2026-10/onestreamer-streaming-video.md). Hugging Face publicly lists ungated weight files; the repository availability table still says pending (conflicting snapshot). | Distinguish internal caption generation from externally useful initiative. The paper evaluates perception, memory, and proactive-response benchmarks. |
| **StreamReady** · CVPR 2026 | Answer-readiness supervision learns when enough streaming evidence has arrived; premature and delayed answers receive asymmetric penalties. | [Paper](https://arxiv.org/abs/2603.08620) · [Project](https://sacrcv.github.io/StreamReady-website/) · [Notes](papers/arxiv/2026-03/streamready-long-streaming-videos.md). Resource entry is the project page. | A query-conditioned readiness policy, evaluated with ProReady-QA; do not equate it with independent need discovery. |
| **StreamOV** · arXiv 2605 | Evidence-guided long/short-term multimodal memory under a fixed budget; hidden-state trigger chooses when to respond without generating explicit silence tokens. | [Paper](https://arxiv.org/abs/2605.25621) · [Notes](papers/arxiv/2026-05/streamov-omni-memory-trigger.md). This curation verified the paper, not a canonical public implementation/checkpoint. | SOVBench-T tests queried evidence appearing versus never appearing; SOVBench-O also tests multi-turn contextual inference. |
| **Response-G1** · arXiv 2605; repository reports ACL 2026 | Fine-tuning-free, query-guided scene graphs → historical graph retrieval → **silence / response** trigger prompting. | [Paper](https://arxiv.org/abs/2605.07575) · [Code](https://github.com/PolyX-Research/Response-G1) · [Notes](papers/arxiv/2026-05/response-g1-scene-graph-trigger.md). Official evaluation scripts are available; uses existing Video-LLM backbones. | An inference framework with explicit evidence, rather than a newly trained interaction foundation model. |
| **Eyes Wide Open (EyeWO)** · NeurIPS 2025 per arXiv record | Egocentric streaming answers at opportune moments, using a data engine, multi-stage training, and proactive dynamic compression. | [Paper](https://arxiv.org/abs/2510.14560) · [Code](https://github.com/SooLab/EyeWO) · [Notes](papers/arxiv/2025-10/eyes-wide-open-streaming.md). Training/evaluation code and ModelScope resource identifiers are documented. | ESTP-Bench emphasizes coherent, timely answers to evolving questions; repository setup contains placeholders that need inspection. |

### Full-Duplex Interaction and Agent Delegation

| Work / source | Mechanism and proactive signal | Resources / release snapshot | Scope boundary |
|---|---|---|---|
| **MiniCPM-o 4.5** · arXiv 2604 | 9B omni-modal model; **Omni-Flow** aligns simultaneous audio/video input and speech/text output. Supports scene-conditioned reminders/comments. | [Paper](https://arxiv.org/abs/2604.27393) · [Code](https://github.com/OpenBMB/MiniCPM-o) · [Model](https://huggingface.co/openbmb/MiniCPM-o-4_5) · [Notes](papers/arxiv/2026-04/minicpm-o-45-full-duplex.md). Model and live-interaction resources are public. | Select **MiniCPM-o 4.5**, not a newer vision-only MiniCPM-V release. Overlapping I/O and intervention quality need separate evaluation. |
| **Gander / Omni Interaction Agent** · arXiv 2609 | Learned **listen / speak** control connects a streaming Thinker/Talker to an asynchronous reasoning/tool-use Brain. | [Paper](https://arxiv.org/abs/2609.08977) · [Code](https://github.com/Omni-Interaction-Gander/Omni-Interaction-Agent) · [Models](https://huggingface.co/Gander-Omni/Gander) · [Notes](papers/arxiv/2026-09/gander-omni-interaction-agent.md). Runtime/models linked; README says dataset release is pending. | Separate interaction model, speech generation, background agent, and long-session context policy when comparing systems. |
| **Jarvis** · arXiv 2610 | Shared-document grounding and a self-correction wait determine whether a group needs a spoken contribution. | [Paper](https://arxiv.org/abs/2610.07506) · [Notes](papers/arxiv/2026-10/jarvis-multiparty-proactive-speech.md). | Multi-party intervention with synthetic diagnostics and 23 live participants; the benchmark name does not imply CHI acceptance. |

## Evaluation Routes

Select a benchmark by the decision it measures, not simply whether its inputs are video. Mixed benchmarks require reporting the relevant proactive subset.

| Evaluation target | Representative benchmark | What it can establish | Primary entry |
|---|---|---|---|
| Egocentric response coherence and timing | **ESTP-Bench / Eyes Wide Open** | Timely responses to evolving questions; ESTP-F1 combines the task's proactive criteria. | [Paper](https://arxiv.org/abs/2510.14560) · [Code](https://github.com/SooLab/EyeWO) |
| Gaze-conditioned intention and alerting | **StreamGaze** | Past/present temporal reasoning and two proactive tasks, using egocentric video plus gaze. A benchmark, not a new model. | [Paper](https://arxiv.org/abs/2512.01707) · [Code](https://github.com/daeunni/StreamGaze) · [Notes](papers/arxiv/2025-12/streamgaze-gaze-proactivity.md) |
| Answer readiness | **ProReady-QA / StreamReady** | Correctness relative to annotated evidence windows and early/late answer cost. | [Project](https://sacrcv.github.io/StreamReady-website/) |
| Multi-turn omni-video and absent-evidence silence | **SOVBench-O / SOVBench-T** | Multi-turn QA plus positive/negative response-trigger decisions, including precision, recall, and F1. | [Paper / protocol](https://arxiv.org/html/2605.25621v1) |
| Live commentary and guidance | **Live Gaming Benchmark / Proact-VL** | Solo/co-commentary and user guidance; content quality, timing, and response frequency metrics. | [Code / protocol](https://github.com/microsoft/AnthropomorphicIntelligence/tree/main/Proact-VL) · [Data](https://huggingface.co/datasets/oaaoaa/LiveGamingBenchmark) |
| Multimodal interaction and scene alerts | **OmniMMI**, **OmniPro** | Proactive alert/output tasks alongside other streaming interaction tasks. | [OmniMMI](https://omnimmi.github.io/) · [OmniPro](https://ruixiangzhao.github.io/OmniPro/) |
| Personalized egocentric assistance | **EgoPro-Bench**, **EgoServe** | User-conditioned triggers, silence, and continuous assistance. | [EgoPro-Bench](https://arxiv.org/abs/2605.07299) · [EgoServe](https://sitonggong.github.io/EgoServe-page/) |
| Duplex initiative and content-grounded floor control | **DuplexAct-Bench**, **Full-Duplex Floor Selection** | Proactive initiation and active silence; whether an opportunity to speak is also a reason to intervene. | See source records in the [Benchmark Matrix](BENCHMARKS.md). |
| Streaming execution validity | **TRACE** | Audits how an evaluation actually supplies input and runs inference. | See its source/protocol entry in the [Benchmark Matrix](BENCHMARKS.md). |
| Timing, content, and silence under near misses | **InteractionBench** | Positive interactions, continuous negative streams, and near-miss suites reveal false alerts concealed by positive-only timing scores. | [Paper](https://arxiv.org/abs/2610.05775) · [Code](https://github.com/Espere-1119-Song/InteractionBench) · [Dataset](https://huggingface.co/datasets/InteractionBench/InteractionBench) |
| Expertise-aware procedural coaching | **ProactiveCoach-Bench** | Guidance granularity, silence, and adaptation across expertise-level transitions. | [Paper](https://arxiv.org/abs/2610.06505) · [Project](https://jinsuby.github.io/ProactiveCoach/) |

For new experiments, report **causal input exposure, standing instructions, intervention positives and silence negatives, timing error, false alerts, content utility, and the latency boundary**. If historical frames or future evidence are visible, disclose that protocol rather than calling the result a live intervention test. Separate caption-memory construction cost from answer-generation cost.

## Adjacent Infrastructure and Discovery Lists

- [Live VLM WebUI](https://github.com/NVIDIA-AI-IOT/live-vlm-webui): camera/serving interface; proactive policy depends on the connected backend.
- [Awesome VLM Streaming Video](https://github.com/ydyhello/Awesome-VLM-Streaming-Video): discovery by streaming interaction, memory, models, and evaluation.
- [Awesome Streaming Video Understanding](https://github.com/sotayang/Awesome-Streaming-Video-Understanding): model/paper/dataset/benchmark discovery.
- [Awesome Streaming Agents](https://github.com/lg-li/awesome-streaming-agents): continuous-input and active-activation perspective.

Discovery lists help find candidates. Individual mechanism and release claims in this guide are checked against primary sources; unresolved resources are identified in the matrix above.
