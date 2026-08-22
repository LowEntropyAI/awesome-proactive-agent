# Benchmark Matrix

This page compares benchmarks by what they actually test. The goal is to make benchmark selection faster than scanning individual paper summaries.

## Quick Takeaways

- **Best long-horizon personal assistant benchmarks**: VibeLifeBench, π-Bench, VitaBench 2.0, ChronosBench.
- **Best computer-use benchmarks**: Act2Intention Bench, ProAgentBench, PIRA-Bench, GUIDE, KnowU-Bench, Pare-Bench, ProCodeBench.
- **Best dialogue benchmarks**: ProactiveEval, ProMISe, Ψ-Bench.
- **Best memory-oriented benchmarks**: CogEval-Bench, MemEye, VitaBench 2.0.
- **Best human-factor / timing benchmarks**: JarvisBench, RealHumanEval, Pare-Bench, ProAgentBench, ProactiveBench (MLLM).
- **Best streaming multimodal benchmarks**: StreamArena, IPIBench, EgoServe, StreamSoccer.

## Benchmark Matrix

| Benchmark | Paper | Domain | Input Stream | Proactive Target | User Model | Data Type | Main Metrics / Signals | Code / Data |
|---|---|---|---|---|---|---|---|---|
| **ProMISe** | ProMISe | Information-seeking dialogue | Multi-turn dialogue context | Ask proactive clarification questions | Simulated or annotated intent ambiguity | Dataset | Intent resolution, clarification quality | [ACL](https://aclanthology.org/2024.findings-eacl.124/) |
| **RealHumanEval** | Need Help? | Programming | IDE task state and code context | Offer proactive programming help | Human participants | Human study | Completion, acceptance, disruption, preference | [arXiv](https://arxiv.org/abs/2410.04596) |
| **ProactiveBench** | Proactive Agent | Desktop activity | Event streams and desktop context | Predict useful next tasks | Simulated user feedback / reward model | Synthetic + event-derived | Task prediction usefulness, acceptance proxy | [GitHub](https://github.com/thunlp/ProactiveAgent) |
| **ContextAgentBench** | ContextAgent | Wearable / open-world | Video, audio, notifications, persona context | Predict proactive services and tool calls | Persona-conditioned users | Benchmark | Service prediction, tool-call success | [GitHub](https://github.com/openaiotlab/ContextAgent) |
| **FingerTip 20K** | FingerTip 20K | Mobile | Android trajectories and user history | Suggest tasks and execute them personally | Long-term mobile users | Real trajectories | Task suggestion, personalized execution | [GitHub](https://github.com/tsinghua-fib-lab/FingerTip-20K) |
| **ProactiveEval** | ProactiveEval | Proactive dialogue | Generated environments and targets | Plan targets and guide dialogue | Simulated users | Synthetic benchmark | Target planning, dialogue guidance, target density | [GitHub](https://github.com/liutj9/ProactiveEval) |
| **PROBE** | Beyond Reactivity | Web / personal datastore | User priorities and personal documents | Discover and resolve bottlenecks | Priority profile | Synthetic personal datastore | Bottleneck discovery, action success | [GitHub](https://github.com/fastino-ai/PROBE_benchmark) |
| **UserVille** | Training Proactive and Personalized LLM Agents | SWE and research tasks | Vague task prompts and user simulators | Ask useful questions and adapt to preferences | Preference-aware LLM users | Simulated environment | Productivity, proactivity, personalization | [GitHub](https://github.com/sunnweiwei/PPP-Agent) |
| **ChronosBench** | Long-term Task-oriented Agent | Long-term task dialogue | Dynamic environment events and history | Maintain intent and follow up on triggers | User intent state over time | Synthetic benchmark | Intent-conditioned monitoring, event-triggered follow-up | [arXiv](https://arxiv.org/abs/2601.09382) |
| **ProAgentBench** | ProAgentBench | Real workflows | Workflow logs and long-term history | Decide when and how to assist | Real workflow users | Real data | Timing, content quality, long-history usefulness | [arXiv](https://arxiv.org/abs/2602.04482) |
| **ProactiveMobile** | ProactiveMobile | Mobile | Phone context, state, and API list | Infer latent intent and plan API sequence | Mobile context user | Synthetic / offline benchmark | API sequence success, proactive intelligence | [arXiv](https://arxiv.org/abs/2602.21858) |
| **ProEvent** | ProEvent | Event tracking | Future events and reminders | Maintain future-event obligations | Event-driven user needs | Benchmark | Event tracking, reminder correctness | [OpenReview](https://openreview.net/forum?id=wypdOy0HrM) |
| **PIRA-Bench** | PIRA-Bench | GUI | Continuous GUI screenshots | Recommend proactive intents | GUI user state | Benchmark | Intent recommendation accuracy, timing | [Dataset](https://huggingface.co/datasets/Yuxiang007/PIRA-Bench-data) |
| **GUIDE** | GUIDE | GUI / desktop workflows | Screen recordings with think-aloud narration | Detect behavior state, infer intent, and predict helpful assistance | Novice GUI users | Video benchmark | Behavior state detection, intent prediction, help prediction | [Website](https://guide-bench.github.io/) · [Dataset](https://huggingface.co/datasets/saelyne/GuideBench) |
| **ProactiveBench (MLLM)** | ProactiveBench / Trento | Multimodal perception | Images with occlusion, poor quality, or ambiguity | Ask for help when visual evidence is insufficient | Visual collaborator | Repurposed visual datasets | Help-seeking, false positive rate, RL generalization | [Dataset](https://huggingface.co/datasets/tdemin16/ProactiveBench) |
| **Pare-Bench** | Pare | Multi-app digital environment | FSM app states and active user simulation | Intervene, execute, or stay silent | Active simulated users | Simulator | Intervention timing, task success, user disruption | [GitHub](https://github.com/deepakn97/pare) |
| **KnowU-Bench** | KnowU-Bench | Android personal agents | Behavior logs, app states, preferences | Clarify, act, personalize, and respect consent | Personalized Android users | Emulator benchmark | Task success, consent handling, rejection response | [GitHub](https://github.com/ZJU-REAL/KnowU-Bench) |
| **CogEval-Bench** | CogniFold | Proactive memory | Streaming events and concept graph | Surface emergent intents from memory structure | Implicit user memory graph | Benchmark | Concept emergence, cognitive structure, proactive surface | [Dataset](https://huggingface.co/datasets/OpenNorve/CogEval-Bench) |
| **MemEye** | MemEye | Multimodal memory | Visual episodes and temporal state | Retrieve visual evidence and track changing state | Memory-dependent visual user | Diagnostic benchmark | Visual memory granularity, temporal reasoning | [arXiv](https://arxiv.org/abs/2605.15128) |
| **ProCodeBench** | Proactive Coding Assistants | IDE / coding | Real VS Code traces | Predict coding intent and assistant value | Real developers | Real traces | Sim-to-real gap, intent prediction, assistance quality | [arXiv](https://arxiv.org/abs/2605.05700) |
| **π-Bench** | π-Bench | Personal assistant workflows | Persistent workspaces, files, profiles, tasks | Resolve hidden intents in long-horizon workflows | Persona and workspace state | Benchmark | Proc, Comp, hidden-intent resolution | [GitHub](https://github.com/Simplified-Reasoning/Pi-Bench) · [Dataset](https://huggingface.co/datasets/zzzhr97/Pi-Bench) |
| **ProActEval** | Anticipate and Learn | Proactive assistant | Dialogue history, persistent memory, idle-time context | Anticipate future needs and gather evidence | User profile and future need chain | Benchmark | User effort, hallucination reduction, proactive utility | [GitHub](https://github.com/AgentACE-AI/ProAct) |
| **VitaBench 2.0** | VitaBench 2.0 | Long-term personalized interaction | Multi-session user interaction sequence | Extract, update, and use preferences; acquire missing info | Long-term user profile | Benchmark | Preference extraction, memory use, proactive acquisition | [GitHub](https://github.com/meituan-longcat/VitaBench-2.0) |
| **Ψ-Bench** | Ψ-Bench | Persuasive dialogue | User profiles and simulated client dialogues | Tailor influence strategies to personas | Profile-conditioned simulated clients | Benchmark | Persuasion quality, profile use, dialogue quality | [GitHub](https://github.com/Hanpx20/Psi-Bench) |
| **VibeLifeBench** | VibeLifeBench | Long-horizon life assistance | Multi-week timelines, 22 mock services, silent world mutations | Decide when to act, ask, or stay silent while preserving a coherent plan | Persona, implicit constraints, authorization boundaries | Scripted living-world benchmark | Weighted stage checks, avg@3, max@3, interaction cost | [arXiv](https://arxiv.org/abs/2608.10875) |
| **JarvisBench** | JarvisBench | Human-agent attention coordination | Ongoing single-agent trajectories and coupled multi-agent workstreams | Recognize user-owned decisions, request judgment, and inject scoped guidance | Concise benchmark user decisions | Adapted public agent tasks | Task outcome gain, request count, attention efficiency, response quality, latency | [Website](https://cchen1436.github.io/jarvis/) · [GitHub](https://github.com/cchen1436/JarvisBench) |
| **Act2Intention Bench** | Act2Intention | Mobile GUI | Continuous personalized intention-action trajectories | Predict and suggest the next intention, then execute after confirmation | 90 real users plus generated personas | Real + synthetic trajectories | Understanding accuracy, prediction accuracy, execution success rate | [GitHub](https://github.com/npuNancy/Act2Intention) |
| **StreamSoccer** | StreamSoccer | Streaming soccer commentary | Causal match video, active event state, recent events, historical records | Select current, recent, or historical commentary, or remain silent | Broadcast audience rather than an individualized user | SoccerNet + MatchTime derived dataset | BLEU-4, CIDEr, BERTScore-F1, output coverage, real-time factor | [arXiv](https://arxiv.org/abs/2608.19723) |

## Selection Guide

| Research Question | Start With | Why |
|---|---|---|
| When should a proactive agent interrupt? | JarvisBench, RealHumanEval, Pare-Bench, ProAgentBench | They expose attention needs, acceptance, disruption, or timing rather than only final task success. |
| How do we evaluate hidden intent inference? | Act2Intention Bench, π-Bench, GUIDE, PIRA-Bench, ProactiveMobile, ProactiveBench | They require agents to infer goals that are not fully specified. |
| How do we evaluate long-term intent maintenance? | VibeLifeBench, ChronosBench, VitaBench 2.0, π-Bench | They require persistent state across time or sessions; VibeLifeBench also advances the world while the agent is not being prompted. |
| How do we evaluate personalization? | KnowU-Bench, FingerTip 20K, VitaBench 2.0, UserVille, Ψ-Bench | They include profiles, preferences, or user-specific trajectories. |
| How do we evaluate memory as a proactive substrate? | CogEval-Bench, MemEye, VitaBench 2.0, ProActEval | They test memory formation, retrieval, evidence preparation, or intent emergence. |
| How do we evaluate computer-use agents? | Act2Intention Bench, ProAgentBench, GUIDE, PIRA-Bench, KnowU-Bench, Pare-Bench, ProCodeBench | They connect proactive behavior to GUI, mobile, IDE, or workflow contexts. |
| How do we evaluate proactive streaming video? | StreamArena, IPIBench, EgoServe, StreamSoccer | They require causal processing of an ongoing stream and timely outputs rather than offline clip answering. |
