# Agents & Applications

[README](README.md) · [Personal Agents](PERSONAL_AGENTS.md) · [Projects & Products](PROJECTS.md) · [Streaming Proactivity](STREAMING.md) · [Benchmark Matrix](BENCHMARKS.md)

Browse by **who receives assistance and what the assistant helps with**. A personal assistant may run on a phone, watch, glasses, desktop, or connected service. Streaming describes an interaction capability; it can support any of these applications. These routes overlap and do not assign each work to a single exclusive category.

## Personal Assistance

Persistent goals, routines, preferences, and everyday context make assistance useful to a particular person. Start with the [Personal Agents guide](PERSONAL_AGENTS.md), which connects research methods, implemented assistants, streaming models, and evaluation across devices.

| Setting | Starting resources | Proactive decision to inspect |
|---|---|---|
| Everyday digital workflows | [Proactive Agent](papers/conference/ICLR2025/proactive-agent-shifting-llm.md); [dot, GAIA, MineContext](PROJECTS.md) | Which unstated task, contextual suggestion, or background update is worth surfacing? |
| Latent needs and GUI intent recommendation | [PASK](papers/arxiv/2026-04/pask-intent-aware-proactive-agent.md); [PIRA-Bench / PIRF](papers/arxiv/2026-03/pira-bench.md) | When should ongoing conversation or passive screen context produce assistance, an intent recommendation, or silence? |
| Mobile preferences and routines | [PersonalAlign](papers/conference/ACL2026/personalalign-long-term-gui-intent.md); [FingerTip 20K](papers/conference/ICLR2026/fingertip-20k.md); [KnowU-Bench](papers/arxiv/2026-04/knowu-bench.md) | When does history justify a suggestion, and when should the assistant ask or respect rejection? |
| Wearable and physical-world assistance | [Satori](papers/conference/CHI2025/satori-proactive-ar-bdi.md); [ProMemAssist](papers/conference/UIST2025/promemassist-working-memory-wearable.md); [WatchGuardian](papers/arxiv/2025-02/watchguardian-personalized-jiti.md) | Does the user's inferred task, cognitive state, or user-defined behavior warrant an intervention? |

## Coding and Knowledge Work

| Starting resources | Proactive decision | Evaluation route |
|---|---|---|
| [Need Help?](papers/conference/CHI2025/need-help-proactive-programming.md), [CodingGenie](papers/arxiv/2025-03/codinggenie-proactive-programming-assistant.md) | Offer programming help at useful moments while preserving user control. | Human studies, interruption cost, acceptance, and task outcomes. |
| [Ask or Assume?](papers/conference/EMNLP2026/ask-or-assume-coding-agents.md), [HiSentinel](papers/arxiv/2026-09/hisentinel-coding-agent-intervention.md) | Ask about missing requirements, redirect a risky action, or continue execution. | Clarification burden and downstream success; distinguish intervention on another agent from assistance initiated for a human. |
| [ProAgentBench](papers/arxiv/2026-02/proagentbench.md), [ProCodeBench](papers/arxiv/2026-05/procodebench-proactive-coding-assistants.md) | Assess assistance opportunities in desktop or coding workflows. | See protocol and data columns in the [Benchmark Matrix](BENCHMARKS.md). |

## Meetings and Collaboration

| Starting resources | Proactive decision | Evaluation route |
|---|---|---|
| [InsightToast](papers/arxiv/2026-08/insighttoast-meeting-side-channel.md) | Retrieve and surface missing context in a peripheral meeting channel. | Information utility and disruption during collaboration. |
| [Speak for Me](papers/arxiv/2026-09/speak-for-me-meeting-delegation.md) | Decide whether, when, and what to contribute on a participant's behalf. | Situational awareness, floor control, and delegation boundaries. |
| [DocuTeam](papers/arxiv/2026-09/docuteam-evolving-documents.md) | Use document changes to initiate or redirect collaboration. | Relevance of contributions to the evolving artifact. |
| [Jarvis](papers/arxiv/2026-10/jarvis-multiparty-proactive-speech.md) | Speak from shared sources only when a group misses evidence or fails to self-correct. | CHI-180-proactive silence negatives and a 23-participant live study; not a conference-acceptance claim. |

## Embodied and Robot Assistance

| Starting resources | Proactive decision | Evaluation route |
|---|---|---|
| [PACE](papers/conference/ICRA2025/pace-action-completion-assistance.md) | Use estimated human action completion to time physical assistance. | Idle time and fluency in structured collaboration. |
| [PACT](papers/arxiv/2026-05/pact-continual-robot-assistance.md) | Ask for missing context or act using cross-day interaction history. | Assistance accuracy versus clarification cost. |
| [ProRobo](papers/arxiv/2026-09/prorobo-cognitive-action-reasoning.md) | Anticipate needs in embodied interaction. | Consult the evidence card for task and deployment limits. |
| [Event-Driven Proactive Robot Assistance](papers/arxiv/2026-10/event-driven-proactive-robot.md), [ARISE](papers/arxiv/2026-10/arise-social-robot-interaction.md) | Translate environmental events or social context into whether and how to assist. | Three tabletop scenarios for the event-driven system; real-robot social interaction for ARISE, with no numerical effects specified in its abstract. |

Personalization can overlap with this route, but a collaborative robot is not automatically a personal assistant. Household assistance is an intended application to track; controlled assembly or simulated multi-day routines do not establish an open-ended home deployment.

## Domain-Specific Assistance

| Starting resources | Why it belongs here | Evidence boundary |
|---|---|---|
| [See, Infer, Intervene](papers/arxiv/2026-06/see-infer-intervene-retail.md) | Retail assistance explicitly selects engagement actions or `HOLD`. | Scripted and small-scale settings; inspect the perception-to-policy gap. |
| [AI Assistants Overassist](papers/arxiv/2026-07/ai-assistants-overassist.md) | Tutoring tests whether intervention arrives too early or supplies too much. | Learning outcomes and user independence matter alongside immediate correctness. |
| [Oops, Not Now / PEARL](papers/arxiv/2026-09/pearl-proactive-gameplay-support.md); [Proact-VL](papers/arxiv/2026-03/proact-vl-realtime-companions.md) | Gameplay assistance and commentary expose timing and unwanted-interruption trade-offs. | Commentary, requested guidance, and spontaneous assistance have different participation expectations. |

## How These Routes Connect

Use [Projects & Products](PROJECTS.md) for implementation/access evidence, [Streaming Proactivity](STREAMING.md) for model mechanisms, [Supporting Infrastructure](INFRASTRUCTURE.md) for sensing/memory/runtime roles, and the [Research Map](RESEARCH_MAP.md) for scientific questions. The [full bibliography](README.md#papers) remains the source of publication metadata; these routes select representative entries rather than duplicate that catalog.
