# Supporting Infrastructure

[README](README.md) · [Agents & Applications](APPLICATIONS.md) · [Personal Agents](PERSONAL_AGENTS.md) · [Projects & Products](PROJECTS.md) · [Streaming Proactivity](STREAMING.md)

Use this guide to identify the component that supplies context, preserves state, wakes an agent, or serves an interaction model. A working component establishes that capability; intervention quality belongs to the system and policy using it.

| Layer | Representative resources | Role in the system | Inspect next |
|---|---|---|---|
| Observation and context capture | [Screenpipe](https://github.com/screenpipe/screenpipe) | Screen/audio history and context for downstream agents. | Input scope, timestamps, retention, and how context reaches the intervention policy. |
| Persistent memory | [memU](https://github.com/NevaMind-AI/memU) | Background memory formation and retrieval across sessions. | Which memories affect a decision, how they are updated, and who decides to surface them. |
| Activation and goal continuity | [OpenClaw](https://github.com/openclaw/openclaw), [Proactivity SDK](https://github.com/refixai/proactivity-sdk), [Hermes Agent](https://github.com/NousResearch/hermes-agent), [Letta Code](https://github.com/letta-ai/letta-code) | Heartbeats, event/schedule activation, persistent state, and goal-driven work. | Separate wake-up from the later decision to notify, ask, act, or remain silent. |
| Camera and inference interface | [Live VLM WebUI](https://github.com/NVIDIA-AI-IOT/live-vlm-webui) | Connect live camera input to inference backends. | Native streaming state, causal input exposure, and perception during generation depend on the backend. |
| Anticipatory perception scheduling | [FORESIGHT](papers/arxiv/2026-10/foresight-streaming-perception.md) | A concurrent planner allocates future inspection, sampling, and reasoning. | Compute decisions versus user-visible interventions; code release is not established by this scan. |
| State validation before execution | [StateWise](papers/arxiv/2026-10/statewise-operational-state-repair.md) | Identify and ground decision-critical operational records before tool actions. | Read-only world checks, intent authority, typed repair lineage, and independent action checks. |
| Interactive training partners | [MIMESIS](papers/arxiv/2026-10/mimesis-user-simulation.md) | Learned user simulators provide interactive RL environments. | Human-conversation fidelity, held-out simulator transfer, and actual human utility are separate evidence levels. |
| Relational and spoken memory evaluation | [DyadMem](papers/arxiv/2026-10/dyadmem-relational-agent-memory.md), [PERSIST / SpokenTrace](papers/arxiv/2026-10/persist-spoken-dialogue-memory.md) | Evaluate relationship-specific memory and speaker/temporal retrieval. | Capture/update errors and retrieval latency do not directly measure appropriate initiative. |

Canonical project descriptions, access/licensing boundaries, and checked dates are maintained in [PROJECTS.md](PROJECTS.md#supporting-components), with activation runtimes in its [runtime section](PROJECTS.md#persistent-runtimes-and-activation-sdks). This page provides an architectural route without duplicating the release registry.

For model-owned memory and response gates, use [STREAMING.md](STREAMING.md). For learning when memory should cause assistance, start with [Remember When It Matters](papers/arxiv/2026-07/remember-when-it-matters-proactive-memory-agent.md) and [Cognifold](papers/arxiv/2026-05/cognifold-always-on-proactive-memory.md). Read their evidence cards before treating a memory improvement as an improvement in user-facing initiative.
