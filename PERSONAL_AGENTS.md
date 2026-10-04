# Proactive Personal Agents

[README](README.md) · [Agents & Applications](APPLICATIONS.md) · [Projects & Products](PROJECTS.md) · [Streaming Proactivity](STREAMING.md) · [Benchmark Matrix](BENCHMARKS.md)

This branch covers assistants that use a person's goals, preferences, routines, or ongoing context to decide **whether, when, and how to help**. Personal refers to the relationship with the user, not the device. Desktop, mobile, wearable, and embodied interfaces can all participate.

The collection's umbrella remains **proactive agents**. A personal chatbot, persistent memory store, or generic multimodal model is included in this branch only when a documented proactive decision or a clearly labeled supporting role connects it to that scope.

## Start with Four Questions

| Question | Representative entry | What to read for |
|---|---|---|
| What need can be inferred before a complete command? | [Proactive Agent](https://arxiv.org/abs/2410.12361), [PersonalAlign / HIM-Agent](https://aclanthology.org/2026.acl-long.1669/) | Task anticipation and the distinction between filling omitted preferences and suggesting an unrequested routine. |
| What keeps an assistant active between conversations? | [OpenClaw, Proactivity SDK, dot](PROJECTS.md) | Heartbeats, persistent goals, events, schedules, and user controls. |
| What changes when the assistant sees the physical world? | [Satori](https://arxiv.org/abs/2410.16668), [ProMemAssist](papers/conference/UIST2025/promemassist-working-memory-wearable.md), [Vinci2 / EgoMemo](papers/arxiv/2026-07/vinci2-egoserve-proactive-video-assistance.md) | User-state inference, memory, and decisions to intervene or remain silent. |
| How do we know the help is appropriate for this person? | [π-Bench](papers/arxiv/2026-05/pi-bench-long-horizon-workflows.md), [KnowU-Bench](papers/arxiv/2026-04/knowu-bench.md), [EgoPro-Bench](papers/arxiv/2026-05/egopro-bench-personalized-streaming.md) | Hidden intents, consent/rejection, personalized content, timing, and false interventions. |

## Implemented Assistants and Runtimes

| Route | Projects or products | Role and boundary |
|---|---|---|
| Ambient desktop context | [MineContext](https://github.com/volcengine/MineContext) | Context processing and proactive summaries/tips; desktop is this project's interface, not a restriction on the whole branch. |
| Connected everyday services | [GAIA](https://github.com/theexperiencecompany/gaia), [OpenAI dot](https://help.openai.com/en/articles/20001530-getting-started-with-your-dot) | Service context, background work, briefings, and suggestions. Project/product documentation establishes advertised behavior, not comparative research performance. |
| Persistent personal-agent execution | [OpenClaw](https://github.com/openclaw/openclaw), [Hermes Agent](https://github.com/NousResearch/hermes-agent), [memUBot](https://github.com/NevaMind-AI/memUBot) | Runtime activation and recurring workflows; inspect the configured policy that decides whether to notify or act. |
| Reusable activation mechanisms | [Proactivity SDK](https://github.com/refixai/proactivity-sdk), [Letta Code](https://github.com/letta-ai/letta-code) | Durable goals, memory, and schedules can support a personal assistant, but are not a complete personalization evaluation. |

The canonical release, licensing, and checked-date entries live in [PROJECTS.md](PROJECTS.md). Memory and sensing components are routed through [INFRASTRUCTURE.md](INFRASTRUCTURE.md).

## Research across Devices

| Interface / setting | Methods and systems | Matching evaluation or human evidence |
|---|---|---|
| Desktop and cross-app workflows | [Proactive Agent](papers/conference/ICLR2025/proactive-agent-shifting-llm.md), [ContextAgent](papers/conference/NeurIPS2025/context-agent.md) | [ProAgentBench](papers/arxiv/2026-02/proagentbench.md), [π-Bench](papers/arxiv/2026-05/pi-bench-long-horizon-workflows.md), [VibeLifeBench](papers/arxiv/2026-08/vibelifebench-living-world.md). These are complementary protocols, not necessarily each method's reported benchmark. |
| Mobile | [PersonalAlign / HIM-Agent](papers/conference/ACL2026/personalalign-long-term-gui-intent.md) | AndroidIntent in PersonalAlign; [FingerTip 20K](papers/conference/ICLR2026/fingertip-20k.md) and [KnowU-Bench](papers/arxiv/2026-04/knowu-bench.md) cover additional suggestion, execution, and interaction questions. |
| AR glasses and wearables | [Satori](papers/conference/CHI2025/satori-proactive-ar-bdi.md), [ProMemAssist](papers/conference/UIST2025/promemassist-working-memory-wearable.md), [WatchGuardian](papers/arxiv/2025-02/watchguardian-personalized-jiti.md) | Task-specific user studies; a watch's user-defined behavior trigger differs from a learned multimodal dialogue policy. |
| Continuous egocentric video | [Vinci2 / EgoMemo](papers/arxiv/2026-07/vinci2-egoserve-proactive-video-assistance.md) | EgoServe and [EgoPro-Bench](papers/arxiv/2026-05/egopro-bench-personalized-streaming.md); recorded video or simulated profiles do not establish longitudinal wearable deployment. |
| Continual embodied collaboration | [PACT](https://arxiv.org/abs/2605.24350) | Cross-day ask/act adaptation in controlled embodied scenarios. Also belongs in the [robot assistance route](APPLICATIONS.md#embodied-and-robot-assistance). |

## Models for Personal Interaction

These are candidate interaction components. Classifying a model here does not assert that it maintains a long-term personal profile or runs on the end device.

| Needed capability | Candidate model / framework | Integration question |
|---|---|---|
| Notice visual events and decide whether to speak | [JoyAI-VL-Interaction, MOSS-VL-Realtime](STREAMING.md#scene-triggered-interaction) | How are the person's mandate, preferences, and silence conditions supplied? |
| Preserve useful evidence and answer at the right time | [OneStreamer, StreamReady, StreamOV, Response-G1, EyeWO](STREAMING.md#evidence-memory-and-response-timing) | Is the behavior internal recording, waiting on a standing query, or initiating new assistance? |
| Continue perceiving while speaking or delegating work | [MiniCPM-o 4.5, Gander](STREAMING.md#full-duplex-interaction-and-agent-delegation) | How does the interaction model coordinate with memory, tools, authorization, and background results? |

Keep model architecture, resources, and availability in [STREAMING.md](STREAMING.md). Keep personal-workflow evidence here. The same model can also support meetings, gaming, or embodied assistance.

## Evaluation Checklist

Report the user's standing mandate; what context and history the assistant can see; who selects the next action; positive interventions and silence negatives; usefulness and timing; clarification/notification burden; consent and rejection handling; and the actual device/inference setup. A successful scheduled reminder is evidence of working automation; stronger claims about discovering an unstated need require a corresponding task and evaluation.
