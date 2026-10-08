# Research Map

This map organizes papers and implementation resources by the research questions they help answer. It is intentionally selective: the goal is to route readers to the right cluster, not to duplicate the full bibliography.

For application settings, use [Agents & Applications](APPLICATIONS.md) and [Personal Agents](PERSONAL_AGENTS.md). For component roles, use [Supporting Infrastructure](INFRASTRUCTURE.md).

## Where Proactivity Lives

| Layer | Core question | Starting resources |
|---|---|---|
| Agent/runtime | What wakes the agent, and what goals persist between wakes? | [Projects & Products](PROJECTS.md): Proactive Agent, ContextAgent, OpenClaw, Letta Code, Proactivity SDK. |
| Streaming model/framework | Does observed evidence trigger speech, continued waiting, memory formation, or delegation? | [Streaming Proactivity](STREAMING.md): JoyAI, MOSS-VL-Realtime, OneStreamer, StreamOV, Response-G1, MiniCPM-o 4.5, Gander. |
| Product/workflow | How is initiative delivered under user controls? | [Projects & Products](PROJECTS.md#product-reference): OpenAI dot; ambient/project routes include MineContext and GAIA. |
| Evaluation/human factors | Is initiative timely, useful, grounded, and appropriately silent? | [Benchmark Matrix](BENCHMARKS.md) and [layered Must Read](README.md#must-read). |

## When To Intervene

The key question is not whether proactive help is useful in principle, but whether the agent can choose moments that improve the task without damaging flow, control, or trust.

| Paper | Contribution | Use It For |
|---|---|---|
| **Need Help?** | Shows proactive IDE assistance can help but depends heavily on timing and user control. | Grounding intervention timing in human programming studies. |
| **Assistance or Disruption?** | Frames proactive AI programming support as a tradeoff between efficiency and workflow disruption. | Arguing that interruption cost must be a first-class metric. |
| **Developer Interaction Patterns with Proactive AI** | Uses real IDE field data to show suggestions at workflow boundaries are more likely to be accepted. | Designing timing policies for deployed coding assistants. |
| **ProactiveVA** | Studies help-seeking behavior in visual analytics logs and turns it into proactive UI-agent design requirements. | Proactive assistance timing and intervention design in complex analytical tools. |
| **Do Proactive Agents Need an LLM to Decide When to Act?** | Recasts wake-up triggering and anchor selection as lightweight temporal-graph prediction instead of always-on LLM calls. | Efficient on-device triggers and grounded context routing for proactive assistants. |
| **When not to help** | Plans assistance over latent user engagement so repeated help does not cause alert fatigue. | Long-term help-or-silence policies and counterfactual need estimation. |
| **AI Assistants Overassist / Int-Bench** | Shows LLM tutors intervene earlier and more often than humans, often trading learning opportunity for immediate correctness. | Measuring over-assistance, timing, content directness, and transfer. |
| **Pare** | Simulates active users in multi-app environments and evaluates timing-sensitive intervention. | Testing policies that must decide help / execute / stay silent. |
| **ProactiveBench (MLLM)** | Tests whether MLLMs ask for help under visual uncertainty. | Studying intervention as uncertainty-aware help-seeking. |
| **YETI** | Proactive AR interventions require recognizing task state and choosing unobtrusive timing. | Multimodal timing in physical or wearable workflows. |
| **Why2Speak** | Makes speak-versus-silence an explicit action policy and shows that exposed reasoning can change the policy being audited. | Intervention timing, abstention, and faithful-policy evaluation. |
| **InsightToast** | Pushes source-grounded text and charts into a peripheral meeting channel when discourse reveals an information need. | Low-friction meeting interventions and side-channel UI design. |
| **Cognitive Process-Aware Writing Support** | Infers the writer's cognitive process to select one of 14 proactive support types. | Separating what-to-suggest from when-to-intervene. |
| **StreamReady** | Learns an answer-readiness gate for continuous video and penalizes both early guesses and late answers. | Evidence-conditioned wait-versus-answer policies in streaming multimodal agents. |
| **JoyAI-VL-Interaction / MOSS-VL-Realtime** | Model-controlled speaking and silence during continuous visual input; JoyAI also selects delegation. | Scene-triggered interaction and response-policy interfaces; see [streaming matrix](STREAMING.md). |
| **StreamOV / Response-G1** | Use hidden-state triggering or explicit retrieved scene graphs to decide when queried evidence supports a response. | Comparing learned triggers with inference-time structured evidence. |
| **MiniCPM-o 4.5** | Aligns perception and output through Omni-Flow, with live-scene reminders/comments. | Full-duplex interfaces; assess content-grounded initiative separately. |
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
| **Live Assistant** | Jointly chooses silence, private memory, or a message, then selects the recipient and task in a real livestream. | Role-conditioned intervention policies in long-running social streams. |
| **DocuTeam** | Uses document changes to trigger or redirect multi-agent discussion without requiring the user to orchestrate every turn. | Event-triggered collaboration and proactive critique around evolving artifacts. |
| **PACE** | Estimates human action completion from motion and schedules robot assistance to reduce idle time. | Progress-conditioned intervention timing in collaborative physical tasks. |
| **WatchGuardian** | Lets users define behavior triggers and delivers personalized just-in-time interventions from smartwatch sensing. | User-authorized wearable triggers, personalization, and false-alert analysis. |
| **Oops, Not Now / PEARL** | Shows that proactive delivery can drive frustration and tool abandonment even when responses are grounded. | Treating disengagement and unwanted timing as first-class intervention outcomes. |
| **Governed Proactive Agency** | Frames activation as a policy over act, ask, monitor, defer, or refrain under a revocable mandate. | Connecting intervention timing to authorization, accountability, and traceable silence. |
| **TRACE** | Audits evidence validity, response events, delay, false alarms, missed windows, and processing workload under one streaming protocol. | Separating when-to-answer performance from offline QA accuracy and hidden system conditions. |
| **HiThink Turn** | Separates response intent from semantic completeness and conditions interruption on system playback state. | Low-latency voice interruption, yielding, and playback-resume control. |
| **DuplexAct-Bench** | Evaluates proactive initiation and active silence alongside interruption, yielding, and backchanneling in bilingual streams. | Testing when, whether, and how full-duplex agents participate. |
| **Rational Clarification / REVOIR** | Asks only when expected downstream reward improvement exceeds question cost and immediate-action alternatives. | Cost-sensitive ask-versus-act policies with optional post-action correction. |
| **HiSentinel** | Distills outcome-aware pre-execution intervention into lightweight allow, redirect, or human-escalation decisions. | Preventing coding-agent error propagation without blocking every imperfect action. |
| **Foundations / PROACTIVITY-GYM** | Couples useful work, temporal compute allocation, and evolving trust across multi-day scenarios. | Scheduling proactive work around user focus and measuring trust damage from misalignment. |
| **[Jarvis](papers/arxiv/2026-10/jarvis-multiparty-proactive-speech.md)** | Waits for group self-correction before offering source-grounded speech. | Multi-party silence negatives and the cost of unnecessary contributions. |
| **[InteractionBench](papers/arxiv/2026-10/interactionbench-streaming-video.md)** | Jointly diagnoses content, timing, negative streams, and near misses. | Exposing false alerts hidden by positive-only streaming scores. |

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
| **CIGAsk** | Trains when and how to clarify with counterfactual information gain and an asymmetric ambiguity reward. | Joint ask-versus-answer and question-quality learning without a separate critic. |
| **FinInteract** | Separates plausible default answers from the user's intended financial interpretation. | Bilingual clarification and intent-integration evaluation under multiple verifiable readings. |
| **ProRobo / ProAction** | Infers high-level robot actions from human-centered multimodal cues without an action instruction. | Unprompted embodied need inference and cognitively grounded action supervision. |
| **PROUR** | Routes uncertainty among act, clarify the user, and verify the world instead of treating every information gap alike. | Source-aligned information acquisition for tool-using agents. |
| **IntentFlux** | Tests whether agents discard superseded or withdrawn requirements and maintain only the active request. | Evolving-intent state estimation and stale-instruction prevention. |
| **Horizontal and Vertical Proactivity** | Scores which unstated information an agent pursues and how deeply it follows dependency chains. | Content-aware question selection and stopping rather than trigger-only proactivity. |
| **Bayesian Intent Disambiguation** | Selects information-gain questions over grounded formal robot-task hypotheses before planning. | Verifiable embodied clarification and active intent learning. |
| **Knowing When to Yield / GAVA** | Arbitrates user corrections by accepting, rejecting, inspecting, or asking under declared costs. | Mixed-initiative systems where human feedback may itself be wrong. |
| **[Ask, Relax, or Act?](papers/arxiv/2026-10/ask-relax-or-act.md)** | Separates preference uncertainty from action-relevant ambiguity and infeasibility. | Acting without needless questions and keeping constraint-repair permission explicit. |
| **[Learning to Clarify](papers/arxiv/2026-10/learning-to-clarify-limited-interaction.md)** | Trains limited-budget clarification and validates reference-image recovery with humans. | Value of information versus interaction burden. |
| **[PlanPool](papers/arxiv/2026-10/beyond-correctness-agentic-text-to-sql.md)** | Keeps identified clarification obligations in an explicit question pool until asked or deliberately dropped. | Active clarification coverage and stopping; not unsolicited need discovery. |

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
| **APM-Bench** | Extends egocentric streaming memory across interrupted sessions and tests missing-evidence awareness. | Cross-session assistance under storage, latency, and recall constraints. |
| **Drift-Bench++** | Introduces miscommunication, finite patience, and silent interaction-conditioned intent shifts into executable tasks. | Continual intent alignment when the user's goal changes during interaction. |
| **OneStreamer** | Builds query-independent caption memory and learns wait-to-response state transitions jointly. | Connecting online perception, reusable memory, and timely answers. |

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
| **Experience Activation / ExpActivator** | Activates historical GUI experience only when the present screen, time, and scenario make it applicable. | Personalized routine suggestions that abstain when retrieved history is merely relevant. |
| **RobotEQ 3.0** | Links user profiles to individual preferences over socially proactive robot actions. | Evaluating personalized embodied behavior instead of population-average appropriateness. |

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
| **FinInteract** | Pairs default and intended interpretations to expose agents that guess rather than clarify. | Measuring clarification elicitation separately from downstream answer competence. |
| **Live Assistant** | Evaluates silence, private memory, recipient selection, and grounded assistance over 13,812 streaming decisions. | Selective participation in multi-party audiovisual environments. |
| **ProAction** | Tests unprompted high-level robot action reasoning across modalities, people, and scenes. | Embodied proactive reasoning before low-level control. |
| **PASTABench** | Annotates earliest-signal, trigger, and optimal intervention windows in risky agent trajectories. | Timely safety monitoring rather than post-hoc trajectory grading. |
| **TWIST** | Pairs memory-triggered detection or blocking cases with surface-matched hard negatives. | Evaluating when conversational memory should intervene and when it should remain silent. |
| **TRACE** | Reports answer validity, delay, false alarms, missed windows, completion, reliability, and processing workload under audited evidence timing. | Condition-aware comparison of streaming-video systems. |
| **IntentFlux** | Preserves executable graders while injecting controlled supersession and withdrawal into dialogues. | Measuring whether an agent recovers the current intent rather than obeying stale context. |
| **PROACTIVITY-GYM** | Evaluates task capability, temporal allocation, and trust across model-harness configurations and multi-day simulations. | Avoiding benchmarks that collapse useful work and acceptable intervention into one score. |
| **APM-Bench** | Tests persistent memory across 549 interrupted video sessions and asks systems to recognize unavailable evidence. | Evaluating cross-session memory utility, latency, and storage together. |
| **Drift-Bench++** | Adds finite patience, miscommunication, and silent intent shifts to verified executable tasks. | Evaluating inquiry quality and adaptation under non-oracle users. |
| **DuplexAct-Bench** | Covers six full-duplex behaviors across English and Chinese streaming conditions with separate timing and content scores. | Auditing proactive initiation, active silence, interruption, yielding, and backchannels. |
| **SWE-Intervene** | Labels pre-execution coding actions as allow, redirect, or pause for human help with recovery feedback. | Action-level evaluation of selective intervention in autonomous coding. |
| **OverAct** | Deterministically measures tool and data access beyond the user's request across privacy-sensitive domains. | Least-privilege evaluation without an LLM judge. |

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
| **Safety Nudges** | Delivers lightweight real-time warnings when chatbot behavior presents risks that users may miss. | Calibrating proactive safety sidecars and separating awareness from behavior change. |
| **PASTABench** | Measures whether a safety monitor intervenes inside a useful window before risk becomes explicit or irreversible. | Trajectory-level risk detection, false-stop analysis, and lexical-robustness testing. |
| **TWIST** | Tests contradiction blocking and sensitive-memory governance against matched do-not-intervene controls. | Preventing memory systems from either missing conflicts or flagging everything. |
| **Agentic Teammates** | Documents how a persistent proactive workplace agent changes tacit workflows, relational boundaries, trust, and agency. | Organizational governance for multi-user agents that become continuing team actors. |
| **OverAct** | Shows that tool agents can exceed the request's authorization boundary even while completing the task. | Request-grounded least privilege, call justification, and pre-execution filtering. |
| **HiSentinel** | Pauses or redirects risky coding actions before execution and can route unresolved decisions to a person. | Separating autonomous recovery from cases that genuinely require human authority. |
| **Referential Uncertainty** | Demonstrates that poorly targeted uncertainty communication can increase rather than reduce decision errors. | Designing clarification and hedging signals that human collaborators can act on. |
| **Knowing When to Yield / GAVA** | Refuses to treat user corrections as automatically authoritative and gathers grounded evidence selectively. | Handling incorrect feedback without either blind compliance or blanket rejection. |

## High-Leverage Open Problems

| Problem | Current Gap | Representative Starting Points |
|---|---|---|
| Timing under uncertainty | Most systems still lack calibrated interruption-cost models and real-user estimates of when silence is better. | When not to help, REVOIR, Int-Bench, Pare, ProAgentBench, StreamReady, TRACE, ProActor, TIMELI, Ambient, Speak for Me, CC-Mediation, DuplexAct-Bench, Full-Duplex Floor Selection, Live Assistant, PASTABench, PEARL |
| Long-term task threads | Agents remember facts but rarely model task lifecycle: start, pause, resume, revise, or cancel. | ChronosBench, IntentFlux, Drift-Bench++, APM-Bench, π-Bench, VitaBench 2.0, PASK, Claw-Anything |
| Consent-aware execution | Proactive execution needs preview, confirmation, undo, permission tiers, least privilege, and auditable abstention. | Governed Proactive Agency, OverAct, HiSentinel, VeriOS, KnowU-Bench, CONFLICTGUARD, Abstention Competence, Selectively Quitting, Breaking Up is Hard to Do, WatchGuardian, Safety Nudges, Agentic Teammates |
| Real-data calibration | Synthetic user traces often overestimate proactive-agent performance. | ProAgentBench, ProCodeBench, FingerTip 20K |
| Memory-to-action bridge | Memory systems are improving, but deciding when memory should trigger action remains weak. | CogniFold, MemEye, OneStreamer, APM-Bench, ExpActivator, ProAct, TWIST, VitaBench 2.0 |
| Evaluation comparability | Benchmarks measure different meanings of proactivity. | PROACTIVITY-GYM, TRACE, Drift-Bench++, IntentFlux, DuplexAct-Bench, OverAct, ProactiveEval, ProactBench, OmniPro, ProReady-QA, TIMELI, FinInteract, PASTABench, TWIST, IdeaAMBIG, Physical Experiment Selection, RPCBench, OR-Clarify, CC-Mediation, ProMediConv, Int-Bench, π-Bench, BENCHMARKS.md |
