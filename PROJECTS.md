# Projects & Products

[README](README.md#must-read) · [Applications](APPLICATIONS.md) · [Personal Agents](PERSONAL_AGENTS.md) · [Streaming Proactivity](STREAMING.md) · [Research Map](RESEARCH_MAP.md) · [Benchmark Matrix](BENCHMARKS.md)

This guide covers implemented resources alongside research papers. Entries are grouped by **activation mechanism and role**, so a scheduler, a trained intervention policy, a product, and a memory library can be compared without conflating their evidence.

**Last checked: 2026-10-04.** Sources are official repositories, READMEs, and documentation. This is a documentation-based curation, not an installation test or an independent performance comparison. Release and access statements describe the checked snapshot.

## Persistent Runtimes and Activation SDKs

| Project | Role and activation mechanism | Available resources | Boundary / what to inspect | Official sources |
|---|---|---|---|---|
| **OpenClaw** | Personal-agent runtime. Heartbeat monitors check for meaningful changes; automations and incoming events can activate work. | Runtime source and operational docs. | Monitor activation and notification suppression are runtime mechanisms; downstream helpfulness depends on the configured agent and standing instructions. | [Repository](https://github.com/openclaw/openclaw) · [Heartbeat](https://docs.openclaw.ai/gateway/heartbeat) · [Automation](https://github.com/openclaw/docs/blob/main/docs/automation/index.md) |
| **Hermes Agent** | Agent harness with memory/skills and scheduled tasks delivered through messaging channels. | Source, CLI/gateway, and cron documentation. | Include as scheduled activation: a user-defined recurring job does not by itself demonstrate discovery of an unstated need. | [Repository](https://github.com/NousResearch/hermes-agent) · [Scheduled tasks](https://hermes-agent.nousresearch.com/docs/user-guide/features/cron) |
| **Letta Code** | Stateful agent harness supporting always-on operation, persistent memory, and self-managed schedules. | Source, CLI, and scheduling/permissions docs. | Memory persistence and scheduled execution are distinct from calibrated intervention timing. | [Repository](https://github.com/letta-ai/letta-code) · [Schedules](https://docs.letta.com/configuration/schedules) |
| **Proactivity SDK** | Framework adapter layer with durable goals, cross-wake state, model-selected cadence, and event-driven waking. | TypeScript SDK, adapters, examples, and governance primitives. | Inspect cadence, goal continuity, idempotency, and action caps. These controls describe orchestration, not a trained streaming model or benchmark result. | [Repository](https://github.com/refixai/proactivity-sdk) |

## Ambient and Personal Assistants

| Project | Observed context → proactive behavior | Available resources | Boundary / what to inspect | Official sources |
|---|---|---|---|---|
| **MineContext** | Screenshots and desktop context → background summaries, tips, todos, and resurfaced information. | Desktop application, context-processing source, configuration, and releases. | Ambient information delivery is the relevant behavior. Broader multi-source inputs described as future support should remain separate from current capabilities. | [Repository](https://github.com/volcengine/MineContext) |
| **GAIA** | Connected services → automatic inbox triage, meeting briefings, and schedule/event-driven workflows. | Application source and self-hosting instructions. | A concrete personal-workflow reference; source is under **PolyForm Noncommercial**, so record it as source-available. Proactive utility is described by the project, not independently measured here. | [Repository](https://github.com/theexperiencecompany/gaia) · [License](https://github.com/theexperiencecompany/gaia/blob/main/LICENSE.md) |
| **memUBot** | Persistent user/team context → recurring automations and message, keyword, or platform-event-triggered skills. | Assistant source built around memU. | Treat the assistant and its memory layer separately. Enterprise-readiness and cost-reduction claims in the README are not validated by this list. | [Repository](https://github.com/NevaMind-AI/memUBot) |

## Research Implementations

| Project | Proactive mechanism | What to reuse | Evidence boundary | Official sources |
|---|---|---|---|---|
| **Proactive Agent** | Predicts tasks and assistance opportunities from activity/event streams. | Event collection, data generation, agent/reward checkpoints, and evaluation pipeline. | ICLR 2025 method + ProactiveBench; distinguish generated training scenarios from real-user deployment outcomes. | [Paper](https://arxiv.org/abs/2410.12361) · [Repository](https://github.com/thunlp/ProactiveAgent) · [Notes](papers/conference/ICLR2025/proactive-agent-shifting-llm.md) |
| **ContextAgent** | Uses open-world sensory context to decide on assistance and tool use. | Inference, SFT, tools, prompts, and sensory-context data layout. | NeurIPS 2025 research system; inspect sensing assumptions and the context-to-assistance policy. | [Paper](https://arxiv.org/abs/2505.14668) · [Repository](https://github.com/openaiotlab/ContextAgent) · [Notes](papers/conference/NeurIPS2025/context-agent.md) |

Streaming research implementations have a dedicated [model and framework matrix](STREAMING.md#models-and-frameworks), including JoyAI-VL-Interaction, MOSS-VL-Realtime, OneStreamer, Proact-VL, Response-G1, Eyes Wide Open, MiniCPM-o 4.5, and Gander.

## Product Reference

| Product | Documented initiative | Evidence and access boundary | Official source |
|---|---|---|---|
| **OpenAI dot** | Always-on ongoing responsibility; background research, proactive connected-app review and memory formation, suggestions, and scheduled checks between conversations. | Official product documentation. User-defined rules and pause controls govern activity. No open implementation or independent proactive benchmark is established by this documentation; plan/region rollout can change. | [Getting started with your dot](https://help.openai.com/en/articles/20001530-getting-started-with-your-dot) |

## Supporting Components

| Component | Role in a proactive system | What it does not establish by itself | Official sources |
|---|---|---|---|
| **memU** | Shared personal memory across sessions, agents, and devices; scheduled background memorization and later retrieval. | Memory formation is not an intervention policy. The current README emphasizes a shared wiki and host adapters; use **memUBot** for the assistant layer. | [Repository](https://github.com/NevaMind-AI/memU) |
| **Screenpipe** | Desktop screen/audio history, workflow mapping, and context for agents/automations. | Capture and workflow discovery require an integrated agent to choose whether and when to help. **Source-available**, with separate licensing terms. | [Repository](https://github.com/screenpipe/screenpipe) · [License](https://github.com/screenpipe/screenpipe/blob/main/LICENSE.md) |
| **Live VLM WebUI** | WebRTC camera interface for connecting and comparing VLM inference backends. | A live interface does not make a conventional model natively streaming or give it a learned speak/silence gate. | [Repository](https://github.com/NVIDIA-AI-IOT/live-vlm-webui) |

## How to Add a Project

Record the **resource type, activation source, context input, observable behavior, release/access status, source, and checked date**. Link a concrete heartbeat/scheduler, event hook, intervention gate, or documented product workflow. Keep a component in its supporting role unless its own implementation selects user-facing interventions.

Prefer canonical upstream repositories over mirrors and forks. A paper implementation belongs here when it offers reusable code; retain its bibliographic record and decision card in the paper collection.
