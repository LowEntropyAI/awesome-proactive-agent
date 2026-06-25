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
| **Pare** | Simulates active users in multi-app environments and evaluates timing-sensitive intervention. | Testing policies that must decide help / execute / stay silent. |
| **ProactiveBench (MLLM)** | Tests whether MLLMs ask for help under visual uncertainty. | Studying intervention as uncertainty-aware help-seeking. |
| **YETI** | Proactive AR interventions require recognizing task state and choosing unobtrusive timing. | Multimodal timing in physical or wearable workflows. |

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

## High-Leverage Open Problems

| Problem | Current Gap | Representative Starting Points |
|---|---|---|
| Timing under uncertainty | Most systems still lack explicit interruption-cost models. | Need Help?, Assistance or Disruption?, Pare, ProAgentBench |
| Long-term task threads | Agents remember facts but rarely model task lifecycle: start, pause, resume, cancel. | ChronosBench, π-Bench, VitaBench 2.0 |
| Consent-aware execution | Proactive execution needs preview, confirmation, undo, and permission tiers. | VeriOS, KnowU-Bench, Privacy Management Design Space |
| Real-data calibration | Synthetic user traces often overestimate proactive-agent performance. | ProAgentBench, ProCodeBench, FingerTip 20K |
| Memory-to-action bridge | Memory systems are improving, but deciding when memory should trigger action remains weak. | CogniFold, MemEye, ProAct, VitaBench 2.0 |
| Evaluation comparability | Benchmarks measure different meanings of proactivity. | ProactiveEval, PIRA-Bench, π-Bench, BENCHMARKS.md |
