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
| **StreamReady** | Learns an answer-readiness gate for continuous video and penalizes both early guesses and late answers. | Evidence-conditioned wait-versus-answer policies in streaming multimodal agents. |
| **ProActor** | Replaces point triggers with opportunity windows and trains pending, ready-to-trigger, and triggered action states. | Timing-aware RL for conversational task scheduling. |
| **Designing Proactive Thought Partners for Writing** | Lets writers configure partner roles and timing conditions for system-initiated ideation, reflection, and revision support. | User-steerable intervention policies and low-disruption writing assistance. |
| **Proactive Service Agents** | Unifies silent, ask, assist, and act decisions with timing, delivery, authorization, and intervention cost. | Operational definitions and end-to-end proactive-service policy design. |
| **Speak for Me** | Tracks meeting state and conversational floor to decide whether, when, and what to contribute for an absent participant. | Meeting delegation and speak-versus-silence controllers. |
| **CC-Mediation** | Separates conflict-intervention timing from mediation strategy and scores persistent post-intervention stance change. | Social intervention timing with downstream outcome evidence. |
| **Time-Aware Assistive Navigation / TIMELI** | Couples instruction content with a safety-aware speak-or-silence gate in continuous urban navigation. | Closed-loop timing policies where excessive speech can itself create risk. |
| **Ambient @ EgoProactive** | Recasts imbalanced interrupt-versus-silent generation as a calibrated one-token decision. | Lightweight wearable triggers and cross-domain supervision for rare interventions. |
| **Em-Garde** | Compiles a standing query into visual proposals and uses lightweight streaming matching to trigger the expensive responder. | Efficient fast/slow event gates for continuous video. |
| **Gander** | Predicts listen or speak at the chunk level while an asynchronous reasoning component can return proactive progress or questions. | Full-duplex turn control and proactive updates during long-running agent work. |
| **Realtime-Venus** | Couples a live full-duplex conversational loop with asynchronous reasoning and tool delegation. | Maintaining responsive speech while background tasks finish and re-enter the conversation. |
| **Full-Duplex Speech Models Take the Floor** | Separates the opportunity to speak from content-grounded reasons such as false facts or hazards. | Diagnosing whether always-on models intervene because help is needed rather than because silence opens the floor. |
| **PACE** | Estimates human action completion from motion and schedules robot assistance to reduce idle time. | Progress-conditioned intervention timing in collaborative physical tasks. |
| **WatchGuardian** | Lets users define behavior triggers and delivers personalized just-in-time interventions from smartwatch sensing. | User-authorized wearable triggers, personalization, and false-alert analysis. |
| **Oops, Not Now / PEARL** | Shows that proactive delivery can drive frustration and tool abandonment even when responses are grounded. | Treating disengagement and unwanted timing as first-class intervention outcomes. |
| **Governed Proactive Agency** | Frames activation as a policy over act, ask, monitor, defer, or refrain under a revocable mandate. | Connecting intervention timing to authorization, accountability, and traceable silence. |

## What To Proactively Infer

This cluster asks what the agent should infer before the user says it explicitly: goals, bottlenecks, missing constraints, future needs, or useful services.

| Paper | Contribution | Use It For |
|---|---|---|
| **Proactive Agent** | Predicts likely next tasks from desktop activity event streams. | Baseline framing for task anticipation. |
| **Ask-before-Plan** | Infers missing constraints and asks before generating a plan. | Clarification-before-execution policies. |
| **Clarify or Answer / ContextClarify** | Detects external context missing from an image-question pair and chooses one focused clarification before answering. | Multimodal ask-versus-answer learning and ambiguity contrast sets. |
| **Ask or Assume?** | Separates coding-task execution from a monitor that detects underspecified requirements throughout the trajectory. | Repeated ask-before-edit decisions in repository-level agents. |
| **Ambig-SWE** | Decomposes interactive software engineering into ambiguity detection, targeted asking, and answer use. | End-to-end evaluation of clarification under tool execution. |
| **PACT** | Uses current observation and cross-day history to decide whether a robot has enough context to act. | Continual ask-versus-act policies in embodied assistance. |
| **PsyProbe** | Tracks structured psychological state and information gaps to choose the next exploratory question. | Interpretable user-state-driven dialogue planning in sensitive domains. |
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
| **Beyond Instruction-Driven Editing / PROS** | Discovers localized structural, scientific, and spatial poster problems before the user formulates an edit instruction. | Source-grounded problem finding with user-governed repair. |
| **RPCBench** | Requires recommenders to detect and localize corrupted premises rather than fabricate a matching item. | Evidence-grounded proactive critique and correction strategy selection. |
| **Ask Before You Optimize / OR-Clarify** | Identifies formulation-critical gaps before converting an incomplete request into an optimization model. | Ask-versus-stop clarification and silent-assumption control. |
| **Propose to Learn, Learn to Propose / ProSE** | Uses proactive proposals both to improve a design and to learn latent preferences and evaluation constraints. | Evaluability-aware preference inference under bounded rationality. |
| **IdeaAMBIG** | Separates specification-readiness assessment, missing-method localization, and clarification-action generation. | Detecting when a coding agent lacks enough information to implement faithfully. |
| **New Evidence, Same Choice** | Requires a model to answer when evidence is sufficient or choose the cheapest experiment that resolves the question. | Active evidence acquisition and value-of-information decisions beyond dialogue. |

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
| **Satori** | Uses a BDI model of user state plus multimodal environmental context to select proactive AR guidance. | Interpretable personalization for physical-task assistance. |
| **WatchGuardian** | Learns a user's custom intervention target from a handful of smartwatch examples. | User-defined proactive sensing rather than globally fixed nudges. |
| **PASSING** | Acquires query-specific expertise through targeted What-to-Ask and How-to-Ask probes. | Interactive personalization when a static user profile is insufficient. |
| **Propose to Learn, Learn to Propose / ProSE** | Plans proposals from beliefs about both user value and the user's ability to evaluate a change. | Personalized proposal sequencing and probe-versus-help trade-offs. |

## How To Evaluate Proactivity

Evaluation remains fragmented. Useful benchmarks isolate proactive dimensions instead of reducing them to final task success.

| Paper | Contribution | Use It For |
|---|---|---|
| **ProactiveEval** | Splits proactive dialogue into target planning and dialogue guidance. | Dialogue benchmark design and LLM-as-judge protocols. |
| **ContextClarify** | Pairs ambiguous VQA cases with non-ambiguous contrasts and scores both asking and final answering. | Testing whether multimodal agents ask selectively rather than universally. |
| **Ambig-SWE** | Separates detection, question generation, and post-clarification coding success. | Locating which stage fails in interactive coding agents. |
| **Full-Duplex Floor Selection** | Holds conversational context constant while varying whether content warrants intervention. | Measuring proactive speech initiation independently from ordinary turn taking. |
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
| **ProReady-QA / StreamReady** | Annotates answer-evidence windows and jointly measures correctness and readiness under asymmetric early/late penalties. | Evaluating when a streaming-video assistant has enough evidence to answer. |
| **PROS-Bench** | Separates issue discovery, user acceptance, native-object repair, validation, and realized outcome. | Evaluating epistemic initiative without conflating it with execution authority. |
| **RPCBench** | Tests detection, localization, handling, and evidence faithfulness across recommendation-premise failures. | Evaluating proactive critique beyond generic factual-error detection. |
| **OR-Clarify** | Measures hidden-slot recovery, premature or excessive stopping, silent assumptions, and question cost before optimization. | Evaluating selective clarification readiness rather than question generation alone. |
| **CC-Mediation** | Measures persistent stance change after an intervention and diagnoses timing versus strategy failure. | Outcome-sensitive evaluation of proactive social mediation. |
| **CONFLICTGUI** | Contrasts feasible GUI tasks with instruction-internal and instruction-GUI conflicts. | Evaluating whether capable GUI agents can refrain from inappropriate execution. |
| **TIMELI** | Evaluates speak-versus-silence timing and instruction quality in open-loop, closed-loop, and sim-to-real assistive navigation. | Safety-critical multimodal timing with collision and instruction-frequency costs. |
| **IdeaAMBIG** | Tests readiness classification, gap localization, and clarification generation on real and controlled specification defects. | Measuring silent-assumption risk before coding or research implementation. |
| **Physical Experiment Selection** | Uses matched physical worlds and known experiment costs to test stop-versus-measure choices. | Evaluating whether action changes when evidence requirements change. |
| **ProMediConv** | Tracks mediation-strategy selection and party behavior shifts over reconstructed multi-party legal cases. | Strategy-aware proactive dialogue and trajectory-level social effects. |

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
| **Breaking Up is Hard to Do** | Documents companion agents proactively escalating relationships and resisting disengagement for product-aligned incentives. | Manipulation, consent, and relationship-boundary requirements for proactive systems. |
| **Oops, Not Now / PEARL** | Finds that proactive educational support can increase frustration and cause users to minimize or abandon the assistant. | Negative-result evidence for user invocation, timing controls, and abandonment metrics. |
| **MMPCBench** | Tests whether MLLMs surface faulty premises instead of suppressing detected errors to remain compliant. | Compliance-bias and proactive-correction evaluation. |
| **Beyond Instruction-Driven Editing / PROS** | Gives users issue-level acceptance, reversible previews, and an explicit final commit decision. | Separating proactive diagnosis from authority to alter user artifacts. |
| **Do GUI Agents Know When Not to Act? / CONFLICTGUARD** | Verifies instruction logic and GUI evidence before shifting from execution to termination. | Conflict-aware restraint and overcompliance reduction in GUI agents. |
| **Time-Aware Assistive Navigation / TIMELI** | Treats silence at hazardous moments, concise instructions, and collision outcomes as coupled safety requirements. | Designing assistance where an ill-timed correct message can still harm the user. |
| **Governed Proactive Agency** | Requires standing authorization to remain revocable and distinguishes deliberate restraint from mere inactivity. | Auditing mandate boundaries, accountability, and safe activation. |

## High-Leverage Open Problems

| Problem | Current Gap | Representative Starting Points |
|---|---|---|
| Timing under uncertainty | Most systems still lack calibrated interruption-cost models and real-user estimates of when silence is better. | When not to help, Int-Bench, Pare, ProAgentBench, StreamReady, ProActor, TIMELI, Ambient, Speak for Me, CC-Mediation, Value of Information, Full-Duplex Floor Selection, PEARL |
| Long-term task threads | Agents remember facts but rarely model task lifecycle: start, pause, resume, cancel. | ChronosBench, π-Bench, VitaBench 2.0, PASK, Claw-Anything |
| Consent-aware execution | Proactive execution needs preview, confirmation, undo, permission tiers, and auditable abstention. | Governed Proactive Agency, VeriOS, KnowU-Bench, CONFLICTGUARD, Abstention Competence, Selectively Quitting, Breaking Up is Hard to Do, WatchGuardian |
| Real-data calibration | Synthetic user traces often overestimate proactive-agent performance. | ProAgentBench, ProCodeBench, FingerTip 20K |
| Memory-to-action bridge | Memory systems are improving, but deciding when memory should trigger action remains weak. | CogniFold, MemEye, ProAct, VitaBench 2.0 |
| Evaluation comparability | Benchmarks measure different meanings of proactivity. | ProactiveEval, ProactBench, OmniPro, ProReady-QA, TIMELI, IdeaAMBIG, Physical Experiment Selection, RPCBench, OR-Clarify, CC-Mediation, ProMediConv, Int-Bench, π-Bench, BENCHMARKS.md |
