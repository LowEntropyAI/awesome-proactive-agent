# Projects & Products

[README](README.md#must-read) · [Applications](APPLICATIONS.md) · [Personal Agents](PERSONAL_AGENTS.md) · [Streaming Proactivity](STREAMING.md) · [Research Map](RESEARCH_MAP.md) · [Benchmark Matrix](BENCHMARKS.md)

This guide covers implemented resources alongside research papers. Entries are grouped by **activation mechanism and role**, so a scheduler, a trained intervention policy, a product, and a memory library can be compared without conflating their evidence.

**Check dates:** baseline entries were reviewed on 2026-10-04; WakeGate, Meta Muse, Manus Cue, and Grok Bot were checked on **2026-10-31**. Sources are official repositories and documentation. Product capabilities are vendor-described, not independently benchmarked; source inspection is not an installation test. An older entry's date is not refreshed by this targeted update.

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
| **PASK** | IntentFlow detects latent needs and chooses silence, fast intervention, or deeper assistance with hierarchical user/workspace/global memory. | Official repository, project page, system descriptions, and client download links. | Technical report and preliminary user evidence. Public client/documentation links do not establish that every training component or model weight is released; no installation or evaluation was repeated here. | [Paper](https://arxiv.org/abs/2604.08000) · [Repository](https://github.com/xzf-thu/Pask) · [Project](https://xzf-thu.github.io/Pask/) · [Notes](papers/arxiv/2026-04/pask-intent-aware-proactive-agent.md) |

Streaming research implementations have a dedicated [model and framework matrix](STREAMING.md#models-and-frameworks), including JoyAI-VL-Interaction, MOSS-VL-Realtime, OneStreamer, Proact-VL, Response-G1, Eyes Wide Open, MiniCPM-o 4.5, and Gander.

## Product Reference

| Product | Documented initiative | Evidence and access boundary | Official source |
|---|---|---|---|
| **OpenAI dot** | Always-on ongoing responsibility; background research, proactive connected-app review and memory formation, suggestions, and scheduled checks between conversations. | Official product documentation. User-defined rules and pause controls govern activity. No open implementation or independent proactive benchmark is established by this documentation; plan/region rollout can change. | [Getting started with your dot](https://help.openai.com/en/articles/20001530-getting-started-with-your-dot) |
| **Meta Muse** | Personal-agent product: a standing goal drives background work, progress tracking and suggestions; it returns when conditions change or approval is needed. Distinct from the Muse Spark model. | Checked 2026-10-31: official product/app information describes a persistent Secure VM, connected services and user-controlled access. Availability varies; no open agent implementation or independent proactivity result is established here. | [Product](https://ai.meta.com/muse/) · [Official introduction](https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/) |
| **Manus Cue** | Personal-agent product with persistent identities, computers and group-chat delegation. Included as a persistent personal-agent reference; task delegation alone does not establish autonomous need detection. | Checked 2026-10-31: Manus documents Cue as a standalone phone/desktop app with agent email, phone and budgeted wallet. The same announcement describes Manus Automations, but does not establish identical trigger support inside Cue. No open implementation or independent proactive evaluation verified. | [Product](https://cue.im/) · [Manus 2.0 / Cue announcement](https://www.manus.im/blog/introducing-manus-2-0) |
| **Grok Bot** | Persistent cloud-agent product with named Bots, cross-session context and scheduled/event-triggered routines. Background work and escalation to the user are the relevant initiative mechanisms; not the generic Grok chatbot. | Checked 2026-10-31: official documentation describes app/webhook triggers, cloud execution, user approvals and shared account-level computer access. Configured workflows are not proof of unsolicited need discovery; no open full runtime or independent proactive benchmark verified. | [Product documentation](https://docs.x.ai/grok-bot/overview) · [Skills and routines](https://docs.x.ai/grok-bot/skills-routines-and-automations) · [Approval boundaries](https://docs.x.ai/grok-bot/approvals-security-and-privacy) |

## Supporting Components

| Component | Role in a proactive system | What it does not establish by itself | Official sources |
|---|---|---|---|
| **WakeGate (苏醒之门)** | Condition-based wake-up gate for an existing agent, not a complete runtime. An external timer runs a model-free local judge; a state snapshot and HTTP request ask the host to resume a session. The resumed agent, not this gate, decides whether to speak or act. | Checked 2026-10-31: public Python integration skeleton; context collection and host wake endpoint must be supplied. Missing conversation time can request a wake. Cooldown/retries exist, but several documented controls are not implemented; see the source audit below. | [Repository](https://github.com/MIAOMIAO-owo/wake-gate) · [Judge](https://github.com/MIAOMIAO-owo/wake-gate/blob/main/judge.py) · [Wake request](https://github.com/MIAOMIAO-owo/wake-gate/blob/main/knock.py) |
| **memU** | Shared personal memory across sessions, agents, and devices; scheduled background memorization and later retrieval. | Memory formation is not an intervention policy. The current README emphasizes a shared wiki and host adapters; use **memUBot** for the assistant layer. | [Repository](https://github.com/NevaMind-AI/memU) |
| **Screenpipe** | Desktop screen/audio history, workflow mapping, and context for agents/automations. | Capture and workflow discovery require an integrated agent to choose whether and when to help. **Source-available**, with separate licensing terms. | [Repository](https://github.com/screenpipe/screenpipe) · [License](https://github.com/screenpipe/screenpipe/blob/main/LICENSE.md) |
| **Live VLM WebUI** | WebRTC camera interface for connecting and comparing VLM inference backends. | A live interface does not make a conventional model natively streaming or give it a learned speak/silence gate. | [Repository](https://github.com/NVIDIA-AI-IOT/live-vlm-webui) |

### WakeGate: implemented mechanism versus integration design

The public code separates **external scheduling → local wake eligibility → host session activation → agent decision**. This makes it a reusable activation component, not a standalone personal assistant or trained intervention policy. Its author's L0–L4 labels are not adopted as a field-wide standard.

`judge.py` checks an argument/crisis flag, sleep flag, quiet hours, silence duration and optional presence. `gather()` returns unknown placeholders until integrated. `knock.py` applies cooldown and HTTP retries; sending a request does not independently verify resumed inference or delivery of useful assistance.

The earlier description that exceptions override *every* limit was inaccurate: the argument flag bypasses judge checks, but `knock.py` still enforces cooldown. Promise/forced-wake options, event listeners, hourly/daily caps and ignored-message backoff are configuration/design entries, not wired behavior in the inspected scripts. `action` and `dry_run` are copied into state but do **not** prevent the HTTP request. Do not rely on them as implemented no-send controls. The reported two-month Windows use concerns the author's private precursor, not an independently tested public release.

## How to Add a Project

Record the **resource type, activation source, context input, observable behavior, release/access status, source, and checked date**. Link a concrete heartbeat/scheduler, event hook, intervention gate, or documented product workflow. Keep a component in its supporting role unless its own implementation selects user-facing interventions.

Prefer canonical upstream repositories over mirrors and forks. A paper implementation belongs here when it offers reusable code; retain its bibliographic record and decision card in the paper collection.
