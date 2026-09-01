# Research Map

This map organizes core papers by the research questions they help answer. It is intentionally selective: the goal is to route readers to the right cluster, not to duplicate the full bibliography.

## When To Intervene

The key question is not whether proactive help is useful in principle, but whether the agent can choose moments that improve the task without damaging flow, control, or trust.

| Paper | Contribution | Use It For |
|---|---|---|
| **Need Help?** | Shows proactive IDE assistance can help but depends heavily on timing and user control. | Grounding intervention timing in human programming studies. |
| **Assistance or Disruption?** | Frames proactive AI programming support as a tradeoff between efficiency and workflow disruption. | Arguing that interruption cost must be a first-class metric. |
| **Developer Interaction Patterns with Proactive AI** | Uses real IDE field data to show suggestions at workflow boundaries are more likely to be accepted. | Designing timing policies for deployed coding assistants. |
| **ProactiveVA** | Studies help-seeking behavior in visual analytics logs and turns it into proactive UI-agent design requirements. | Proactive assistance timing and intervention design in complex analytical tools. |
| **Do Proactive Agents Really Need an LLM?** | Recasts wake-up triggering and anchor selection as lightweight temporal-graph prediction instead of always-on LLM calls. | Efficient on-device triggers and grounded context routing for proactive assistants. |
| **When not to help** | Plans assistance over latent user engagement so repeated help does not cause alert fatigue. | Long-term help-or-silence policies and counterfactual need estimation. |
| **AI Assistants Overassist / Int-Bench** | Shows LLM tutors intervene earlier and more often than humans, often trading learning opportunity for immediate correctness. | Measuring over-assistance, timing, content directness, and transfer. |
| **Pare** | Simulates active users in multi-app environments and evaluates timing-sensitive intervention. | Testing policies that must decide help / execute / stay silent. |
| **ProactiveBench (MLLM)** | Tests whether MLLMs ask for help under visual uncertainty. | Studying intervention as uncertainty-aware help-seeking. |
| **YETI** | Proactive AR interventions require recognizing task state and choosing unobtrusive timing. | Multimodal timing in physical or wearable workflows. |
| **Why2Speak** | Makes speak-versus-silence an explicit action policy and shows that exposed reasoning can change the policy being audited. | Intervention timing, abstention, and faithful-policy evaluation. |
| **InsightToast** | Pushes source-grounded text and charts into a peripheral meeting channel when discourse reveals an information need. | Low-friction meeting interventions and side-channel UI design. |
| **Cognitive Process-Aware Writing Support** | Infers the writer's cognitive process to select one of 14 proactive support types. | Separating what-to-suggest from when-to-intervene. |

## What To Proactively Infer

This cluster asks what the agent should infer before the user says it explicitly: goals, bottlenecks, missing constraints, future needs, or useful services.

| Paper | Contribution | Use It For |
|---|---|---|
| **Proactive Agent** | Predicts likely next tasks from desktop activity event streams. | Baseline framing for task anticipation. |
| **Ask-before-Plan** | Infers missing constraints and asks before generating a plan. | Clarification-before-execution policies. |
| **ProMISe** | Turns information-seeking intent resolution into a proactive multi-turn task. | Dialogue-focused missing-intent inference. |
| **PIRA-Bench** | Reframes GUI agents as proactive intent recommenders from continuous screenshots. | GUI latent-intent recommendation. |
| **GUIDE** | Evaluates whether models can understand GUI workflow state, infer user intent, and predict helpful assistance. | Open-ended GUI user-understanding and help-prediction evaluation. |
| **ProactiveMobile** | Infers mobile latent intent and maps it to API execution sequences. | Mobile-context intent-to-action evaluation. |
| **Beyond Reactivity / PROBE** | Requires agents to discover hidden bottlenecks in personal data. | Proactive problem finding rather than task following. |
| **Anticipate and Learn / ProAct** | Uses idle time to anticipate future needs and prepare evidence. | Future-need prediction with persistent memory. |
| **ProactBench** | Scores grounded unstated-need inference at emergent, critical, and post-completion recovery triggers. | Separating conversational proactivity from generic helpfulness. |
| **Value of Information** | Weighs expected utility from clarification against user effort and decision stakes. | Cost-sensitive ask-versus-act policies. |
| **PASSING** | Actively probes query-specific user expertise before tailoring the final answer. | Expertise elicitation and personalization-before-response. |
| **Severity-Aware Medical Dialogue** | Selects questions by expected reduction in consequence-weighted diagnostic risk. | Risk-sensitive clarification under unequal error costs. |
| **DEDUCE** | Detects and corrects misleading factual premises instead of complying with them. | Proactive misconception correction and verification-before-answering. |

## How To Maintain Long-Term Intent

Long-horizon proactivity depends on remembering what matters, monitoring changing conditions, and resuming tasks at the right time.

| Paper | Contribution | Use It For |
|---|---|---|
| **Long-term Task-oriented Agent / ChronosBench** | Formalizes intent-conditioned monitoring and event-triggered follow-up. | Dynamic environments where user goals unfold over time. |
| **π-Bench** | Evaluates hidden-intent resolution in persistent personal workspaces. | Personal assistant tasks spanning files, history, and workflow state. |
| **VitaBench 2.0** | Tests preference extraction, use, update, and proactive information acquisition over long interactions. | Long-term personalization and memory evaluation. |
| **CogniFold** | Models always-on memory where concepts and intents emerge from event streams. | Memory architectures that surface proactive opportunities. |
| **MemEye** | Diagnoses visual long-term memory and changing state tracking. | Multimodal memory as a prerequisite for long-horizon agents. |
| **ProEvent** | Focuses on event-centric proactive maintenance and reminders. | Future events and reminder-style proactivity. |
| **PASK / LatentNeeds-Bench** | Combines streaming demand detection with hierarchical memory and explicit silent, fast, or full assistance actions. | Always-on intent maintenance under latency constraints. |
| **Claw-Anything** | Simulates months of cross-service activity and multi-device state for personal-assistant tasks. | Broad-context long-horizon proactivity amid irrelevant events. |

## How To Personalize

Personalization moves proactivity from generic helpfulness to user-specific timing, content, and action choice.

| Paper | Contribution | Use It For |
|---|---|---|
| **FingerTip 20K** | Uses long-term Android trajectories for proactive task suggestion and personalized execution. | Mobile personalization with real user traces. |
| **KnowU-Bench** | Combines mobile GUI execution, preference inference, consent, and rejection handling. | Interactive personalized mobile-agent evaluation. |
| **Training Proactive and Personalized LLM Agents / UserVille** | Trains agents with productivity, proactivity, and personalization objectives. | Multi-objective RL for user-centered interaction. |
| **ProPerSim** | Simulates proactive personalized assistants through user-assistant interaction. | Persona-based proactive adaptation. |
| **Ψ-Bench** | Evaluates persona-sensitive influence in persuasive dialogue. | Profile-aware dialogue strategy selection. |
| **Tunable LLM-based Proactive Recommendation Agent** | Tunes proactive recommendation behavior to latent user interests. | Recommendation-focused proactive personalization. |
| **EgoPro-Bench** | Conditions attention-or-silence decisions on egocentric video and user memory. | Personalized intervention timing in continuous streams. |
| **PASSING** | Acquires query-specific expertise through targeted What-to-Ask and How-to-Ask probes. | Interactive personalization when a static user profile is insufficient. |

## How To Evaluate Proactivity

Evaluation remains fragmented. Useful benchmarks isolate proactive dimensions instead of reducing them to final task success.

| Paper | Contribution | Use It For |
|---|---|---|
| **ProactiveEval** | Splits proactive dialogue into target planning and dialogue guidance. | Dialogue benchmark design and LLM-as-judge protocols. |
| **ProAgentBench** | Uses real workflow logs to evaluate when-to-assist and how-to-assist. | Measuring sim-to-real gaps in proactive assistance. |
| **PIRA-Bench** | Measures proactive GUI intent recommendation from continuous screenshots. | GUI-specific proactive evaluation. |
| **GUIDE** | Adds video-based behavior state, intent, and help-prediction tasks for open-ended GUI workflows. | Evaluating whether GUI agents can understand users before assisting them. |
| **Pare** | Provides active-user simulation and finite-state apps for proactive assistant evaluation. | Closed-loop environment-level evaluation. |
| **π-Bench** | Separates proactive hidden-intent resolution from final checklist completion. | Evaluating proactivity independently from task completion. |
| **VitaBench 2.0** | Evaluates long-term personalization and proactive missing-information acquisition. | Long-term user-interaction benchmark design. |
| **CogEval-Bench** | Evaluates proactive memory emergence and cognitive structure formation. | Memory-centric proactive evaluation. |
| **ClarifyBench** | Evaluates which tool argument to clarify and when further questions are not worth their cost. | Dynamic tool-calling disambiguation and interaction efficiency. |
| **OmniPro** | Requires models to initiate multiple responses in continuous audio-visual streams and penalizes over-triggering. | True online when-and-what-to-speak evaluation. |
| **ProactBench** | Uses phase-specific trigger rubrics for emergent, critical, and recovery proactivity. | Grounded multi-turn conversational proactivity. |
| **OmniAssistBench** | Evaluates continuous visual guidance, visual prompts, interaction history, and delayed responses. | Assistant-style omni-modal interaction rather than offline video QA. |
| **Interactive Visual Grounding** | Requires LVLMs to ask for missing visual-reference information under controlled dialogue protocols. | Multimodal ask-versus-guess evaluation and confidence calibration. |
| **MMPCBench** | Measures autonomous detection, diagnosis, and repair of flawed multimodal inputs. | Proactive critique and reasoning-to-response consistency. |

## How To Avoid Disruption / Privacy Risk

Proactive agents need boundaries. The most important failure mode is not only being wrong, but being wrong at the wrong time, with too much autonomy.

| Paper | Contribution | Use It For |
|---|---|---|
| **Towards Human-centered Proactive Conversational Agents** | Introduces intelligence, adaptivity, and civility as human-centered dimensions. | Conceptual boundary for respectful proactive agents. |
| **Assistance or Disruption?** | Shows proactive programming support can become workflow disruption. | Designing opt-out, frequency control, and explanation mechanisms. |
| **When AI-Based Agents Are Proactive** | Connects proactive help to perceived competence and satisfaction. | Avoiding competence-undermining assistance. |
| **Privacy Management Design Space** | Explores autonomy and privacy boundaries for agents managing personal data. | Consent, reversibility, and permission-tier design. |
| **VeriOS** | Uses proactive querying to calibrate trust and avoid unsafe OS actions. | Human-in-the-loop confirmation for GUI/OS agents. |
| **KnowU-Bench** | Tests consent, rejection handling, and personalized mobile execution. | Evaluating restraint in personal assistant workflows. |
| **Selectively Quitting** | Treats withdrawal under compounded uncertainty as a useful agent action. | First-line stopping policies for tool agents. |
| **Abstention Competence** | Distinguishes specification, verification, and authority gaps and scores safe pause against useful execution. | Auditable abstention, authorization, and recovery routing. |
| **AI Watchdog** | Proactively warns users about conversational dark patterns and separates awareness from behavioral resistance. | Safety-sidecar timing and manipulation-defense interfaces. |
| **MMPCBench** | Tests whether MLLMs surface faulty premises instead of suppressing detected errors to remain compliant. | Compliance-bias and proactive-correction evaluation. |

## High-Leverage Open Problems

| Problem | Current Gap | Representative Starting Points |
|---|---|---|
| Timing under uncertainty | Most systems still lack calibrated interruption-cost models and real-user estimates of when silence is better. | When not to help, Int-Bench, Pare, ProAgentBench, Value of Information |
| Long-term task threads | Agents remember facts but rarely model task lifecycle: start, pause, resume, cancel. | ChronosBench, π-Bench, VitaBench 2.0, PASK, Claw-Anything |
| Consent-aware execution | Proactive execution needs preview, confirmation, undo, permission tiers, and auditable abstention. | VeriOS, KnowU-Bench, Abstention Competence, Selectively Quitting |
| Real-data calibration | Synthetic user traces often overestimate proactive-agent performance. | ProAgentBench, ProCodeBench, FingerTip 20K |
| Memory-to-action bridge | Memory systems are improving, but deciding when memory should trigger action remains weak. | CogniFold, MemEye, ProAct, VitaBench 2.0 |
| Evaluation comparability | Benchmarks measure different meanings of proactivity. | ProactiveEval, ProactBench, OmniPro, Int-Bench, π-Bench, BENCHMARKS.md |
