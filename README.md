<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=220&color=0:0EA5E9,55:14B8A6,100:F8FAFC&text=Awesome%20Proactive%20Agents&fontAlign=50&fontAlignY=40&fontColor=0F172A&fontSize=42&desc=Anticipatory,%20context-aware,%20and%20consent-aware%20AI%20assistants&descAlign=50&descAlignY=62&descSize=16" alt="Awesome Proactive Agents dynamic banner">
</p>

<h1 align="center">Awesome Proactive Agents</h1>

<p align="center">
  <img src="assets/pro-agent.png" alt="Proactive Agent banner">
</p>

<p align="center">
  <a href="https://awesome.re"><img src="https://awesome.re/badge.svg" alt="Awesome"></a>
  <a href="https://github.com/LowEntropyAI/Proactive-Agent-Project/pulls"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome"></a>
  <img src="https://img.shields.io/badge/Focus-Proactive%20Agents-0ea5e9" alt="Focus">
  <img src="https://img.shields.io/badge/Scope-Dialogue%20%7C%20GUI%20%7C%20Mobile%20%7C%20IDE%20%7C%20Embodied-14b8a6" alt="Scope">
</p>

> A curated research map for **proactive agents**: AI systems that infer latent user needs, decide when to intervene, ask for missing context or consent, and initiate useful assistance before a complete explicit command.

> If this list is useful, a ⭐ helps others find it.

## Companion Guides

- [Research Map](RESEARCH_MAP.md): question-driven clusters for quickly locating papers by intervention timing, inference, long-term intent, personalization, evaluation, and safety.
- [Benchmark Matrix](BENCHMARKS.md): side-by-side benchmark comparison by domain, input stream, proactive target, user model, data type, and metrics.

---

## Contents

- [Scope](#scope)
- [Must Read](#must-read)
- [Papers](#papers)
  - [Foundations, Surveys and Human Factors](#foundations-surveys-and-human-factors)
  - [Proactive Interaction and Planning](#proactive-interaction-and-planning)
  - [GUI, Mobile, OS and Coding Agents](#gui-mobile-os-and-coding-agents)
  - [Multimodal, Wearable and Embodied Agents](#multimodal-wearable-and-embodied-agents)
  - [Benchmarks, Personalization and Optimization](#benchmarks-personalization-and-optimization)
- [Benchmarks](#benchmarks)
- [Research Map](RESEARCH_MAP.md)
- [Benchmark Matrix](BENCHMARKS.md)
- [Tag Vocabulary](#tag-vocabulary)
- [Contributing](#contributing)

---

## Scope

This list prioritizes papers where **proactivity is a central research target**. The list is broader than computer-use agents: it includes proactive dialogue, planning, recommendation, wearable assistance, GUI/mobile/OS agents, programming assistants, personalization, memory, benchmarks, optimization, and human factors.

Typical inclusion signals:

- The agent predicts latent intent or missing context before a complete user instruction.
- The agent decides when to ask, suggest, remind, intervene, execute, or stay silent.
- The paper evaluates proactive behavior, intervention timing, user control, consent, interruption cost, or personalization.
- The benchmark or dataset makes proactivity the primary task rather than a side effect of general tool use.

Resource labels:

- **Paper**: arXiv, ACL Anthology, DOI, OpenReview, ACM, Springer, or official proceedings page.
- **Website**: project page, conference page, lab page, or documentation.
- **Code / Dataset**: GitHub, released code, released benchmark, or released dataset.
- **Notes**: short English decision card with why the paper matters, proactivity signal, evaluation setup, limitations, and use cases.

---

## Must Read

Selected starting points for understanding the field.

| Date | Paper | Why read it first | Resources |
|---|---|---|---|
| 2024-04 | **Towards Human-centered Proactive Conversational Agents** | Establishes the human-centered dimensions of proactive agents: intelligence, adaptivity, and civility. | [![arXiv](https://img.shields.io/badge/arXiv-2404.12670-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.12670) [![DOI](https://img.shields.io/badge/DOI-10.1145%2F3626772.3657843-blue.svg)](https://doi.org/10.1145/3626772.3657843) |
| 2024-10 | **Proactive Agent** | Canonical shift from reactive LLM agents to active assistance over event streams; introduces ProactiveBench. | [![arXiv](https://img.shields.io/badge/arXiv-2410.12361-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.12361) [![OpenReview](https://img.shields.io/badge/OpenReview-Page-8c1b13.svg)](https://openreview.net/forum?id=sRIU6k2TcU) [![Star](https://img.shields.io/github/stars/thunlp/ProactiveAgent.svg?style=social&label=Star)](https://github.com/thunlp/ProactiveAgent) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/ICLR2025/proactive-agent-shifting-llm.md) |
| 2024-10 | **Need Help?** | Strong user-study reference for proactive IDE assistance and intervention timing. | [![arXiv](https://img.shields.io/badge/arXiv-2410.04596-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.04596) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/CHI2025/need-help-proactive-programming.md) |
| 2025-05 | **ContextAgent** | Extends proactive agents to open-world sensory contexts and tool calling. | [![arXiv](https://img.shields.io/badge/arXiv-2505.14668-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.14668) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://neurips.cc/virtual/2025/poster/115593) [![Star](https://img.shields.io/github/stars/openaiotlab/ContextAgent.svg?style=social&label=Star)](https://github.com/openaiotlab/ContextAgent) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/NeurIPS2025/context-agent.md) |
| 2026-02 | **ProAgentBench** | Real workflow logs reveal why synthetic proactive data can overestimate performance. | [![arXiv](https://img.shields.io/badge/arXiv-2602.04482-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.04482) [![Code](https://img.shields.io/badge/Code-Repo-181717.svg?logo=github&logoColor=white)](https://anonymous.4open.science/r/ProAgentBench-6BC0) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-02/proagentbench.md) |
| 2026-04 | **KnowU-Bench** | Closest benchmark to proactive, personalized, consent-aware mobile assistants. | [![arXiv](https://img.shields.io/badge/arXiv-2604.08455-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.08455) [![HF Paper](https://img.shields.io/badge/HF-Paper-ffcc00.svg?logo=huggingface&logoColor=black)](https://huggingface.co/papers/2604.08455) [![Star](https://img.shields.io/github/stars/ZJU-REAL/KnowU-Bench.svg?style=social&label=Star)](https://github.com/ZJU-REAL/KnowU-Bench) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-04/knowu-bench.md) |
| 2026-05 | **π-Bench** | Sharp long-horizon benchmark for hidden-intent resolution in personal assistant workflows. | [![arXiv](https://img.shields.io/badge/arXiv-2605.14678-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.14678) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://simplified-reasoning.github.io/Pi-Bench/) [![Star](https://img.shields.io/github/stars/Simplified-Reasoning/Pi-Bench.svg?style=social&label=Star)](https://github.com/Simplified-Reasoning/Pi-Bench) [![Dataset](https://img.shields.io/badge/HF-Dataset-ffcc00.svg?logo=huggingface&logoColor=black)](https://huggingface.co/datasets/zzzhr97/Pi-Bench) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-05/pi-bench-long-horizon-workflows.md) |

---

## Papers

### Foundations, Surveys and Human Factors

| Date | Title | Venue / Source | Tags | Resources |
|---|---|---|---|---|
| 2024-04 | **Towards Human-centered Proactive Conversational Agents** | SIGIR 2024 | `Definition` · `Human Factors` · `Dialogue` | [![arXiv](https://img.shields.io/badge/arXiv-2404.12670-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2404.12670) [![DOI](https://img.shields.io/badge/DOI-10.1145%2F3626772.3657843-blue.svg)](https://doi.org/10.1145/3626772.3657843) |
| 2024-10 | **Redefining Proactivity for Information Seeking Dialogue** | SICON 2024 | `Definition` · `Dialogue` · `Intent Inference` | [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2024.sicon-1.5/) |
| 2025-01 | **When AI-Based Agents Are Proactive: Implications for Competence and System Satisfaction in Human-AI Collaboration** | BISE 2026 | `Human Factors` · `Intervention Timing` · `Trust` | [![DOI](https://img.shields.io/badge/DOI-10.1007%2Fs12599--024--00918--y-blue.svg)](https://doi.org/10.1007/s12599-024-00918-y) |
| 2025-02 | **Assistance or Disruption? Exploring and Evaluating the Design and Trade-offs of Proactive AI Programming Support** | CHI 2025 | `Human Factors` · `Intervention Timing` · `IDE` | [![arXiv](https://img.shields.io/badge/arXiv-2502.18658-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.18658) [![DOI](https://img.shields.io/badge/DOI-10.1145%2F3706598.3713357-blue.svg)](https://doi.org/10.1145/3706598.3713357) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/CHI2025/assistance-or-disruption-proactive-programming.md) |
| 2025-03 | **Proactive Conversational AI: A Comprehensive Survey of Advancements and Opportunities** | ACM TOIS 2025 | `Survey` · `Definition` · `Dialogue` | [![DOI](https://img.shields.io/badge/DOI-10.1145%2F3715097-blue.svg)](https://doi.org/10.1145/3715097) |
| 2026-01 | **Developer Interaction Patterns with Proactive AI: A Five-Day Field Study** | arXiv 2601 | `Human Factors` · `Real-world Data` · `IDE` | [![arXiv](https://img.shields.io/badge/arXiv-2601.10253-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.10253) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-01/developer-interaction-patterns-proactive-ai.md) |
| 2026-02 | **From Fragmentation to Integration: Exploring the Design Space of AI Agents for Human-as-the-Unit Privacy Management** | arXiv 2602 | `Safety & Consent` · `Privacy` · `Human Factors` | [![arXiv](https://img.shields.io/badge/arXiv-2602.05016-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.05016) |
| 2026-02 | **Exploring The Impact of Proactive Generative AI Agent Roles in Time-Sensitive Collaborative Problem-Solving Tasks** | arXiv 2602 | `Human Factors` · `Collaboration` · `Intervention Timing` | [![arXiv](https://img.shields.io/badge/arXiv-2602.17864-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.17864) |

### Proactive Interaction and Planning

| Date | Title | Venue / Source | Tags | Resources |
|---|---|---|---|---|
| 2024-03 | **ProMISe: A Proactive Multi-turn Dialogue Dataset for Information-seeking Intent Resolution** | Findings of EACL 2024 | `Clarification` · `Dialogue` · `Benchmark` | [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2024.findings-eacl.124/) |
| 2024-06 | **Ask-before-Plan: Proactive Language Agents for Real-World Planning** | Findings of EMNLP 2024 | `Clarification` · `Planning` · `Intent Inference` | [![arXiv](https://img.shields.io/badge/arXiv-2406.12639-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2406.12639) |
| 2024-10 | **Proactive Agent: Shifting LLM Agents from Reactive Responses to Active Assistance** | ICLR 2025 | `Intent Inference` · `Benchmark` · `Desktop` | [![arXiv](https://img.shields.io/badge/arXiv-2410.12361-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.12361) [![OpenReview](https://img.shields.io/badge/OpenReview-Page-8c1b13.svg)](https://openreview.net/forum?id=sRIU6k2TcU) [![Star](https://img.shields.io/github/stars/thunlp/ProactiveAgent.svg?style=social&label=Star)](https://github.com/thunlp/ProactiveAgent) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/ICLR2025/proactive-agent-shifting-llm.md) |
| 2025-01 | **Proactive Conversational Agents with Inner Thoughts** | CHI 2025 | `Dialogue` · `Intent Inference` · `Intervention Timing` | [![arXiv](https://img.shields.io/badge/arXiv-2501.00383-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.00383) [![Star](https://img.shields.io/github/stars/xybruceliu/thoughtful-agents.svg?style=social&label=Star)](https://github.com/xybruceliu/thoughtful-agents) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2025-01/proactive-conversational-inner-thoughts.md) |
| 2025-01 | **ProTOD: Proactive Task-oriented Dialogue System Based on LLMs** | COLING 2025 | `Dialogue` · `Planning` · `Tool Use` | [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2025.coling-main.614/) |
| 2025-07 | **Tunable LLM-based Proactive Recommendation Agent** | ACL 2025 | `Recommendation` · `Personalization` · `Intent Inference` | [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2025.acl-long.944/) |
| 2025-09 | **PRINCIPLES: Synthetic Strategy Memory for Proactive Dialogue Agents** | Findings of EMNLP 2025 | `Dialogue` · `Memory` · `Simulation` | [![arXiv](https://img.shields.io/badge/arXiv-2509.17459-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.17459) |
| 2025-10 | **ProMediate: A Socio-cognitive Framework for Evaluating Proactive Agents in Multi-party Negotiation** | arXiv 2510 | `Dialogue` · `Collaboration` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2510.25224-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.25224) |
| 2026-01 | **Proactivity-driven Personalized Agents for Advancing Human Learning through Engagement, Reflection, and Self-Efficacy** | ACM CHIIR 2026 Workshop | `Personalization` · `Intent Inference` · `Education` | [![arXiv](https://img.shields.io/badge/arXiv-2601.09926-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.09926) |
| 2026-01 | **Long-term Task-oriented Agent: Proactive Long-term Intent Maintenance in Dynamic Environments** | arXiv 2601 | `Long-horizon` · `Intent Inference` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2601.09382-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.09382) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-01/long-term-task-oriented-agent.md) |
| 2026-05 | **Anticipate and Learn: Unleashing Idle-Time Compute in Proactive Agents** | arXiv 2605 | `Intent Inference` · `Memory` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2605.25971-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.25971) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://agentace-ai.github.io/proact-showcase/) [![Star](https://img.shields.io/github/stars/AgentACE-AI/ProAct.svg?style=social&label=Star)](https://github.com/AgentACE-AI/ProAct) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-05/proact-idle-time-compute.md) |
| 2026-07 | **PROPER Agents: Proactivity Driven Personalized Agents for Advancing Knowledge Gap Navigation** | Findings of ACL 2026 | `Personalization` · `Intent Inference` · `Dialogue` | [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2026.findings-acl.2082/) [![Star](https://img.shields.io/github/stars/i-kiran/ProPer-Agent.svg?style=social&label=Star)](https://github.com/i-kiran/ProPer-Agent) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/ACL2026/proper-agents-knowledge-gap-navigation.md) |
| 2026-07 | **ProACT: Towards Breakdown-Aware Proactive Agent in Multi-User Collaboration** | arXiv 2607 | `Collaboration` · `Intervention Timing` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2607.03730-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.03730) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-07/proact-breakdown-aware-collaboration.md) |
| 2026-07 | **Reasoning While Asking: Transforming Reasoning Large Language Models from Passive Solvers to Proactive Inquirers** | ACL 2026 | `Clarification` · `Dialogue` · `Optimization` | [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2026.acl-long.1619/) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/ACL2026/reasoning-while-asking-proactive-inquirers.md) |
| 2026-07 | **ProMed: Shapley Information Gain Guided Reinforcement Learning for Proactive Medical LLMs** | ACL 2026 | `Clarification` · `Dialogue` · `Optimization` | [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2026.acl-long.1500/) [![Star](https://img.shields.io/github/stars/hxxding/ProMed.svg?style=social&label=Star)](https://github.com/hxxding/ProMed) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/ACL2026/promed-proactive-medical-llms.md) |
| 2026-07 | **"Excuse me, may I say something..." CoLabScience, A Proactive AI Assistant for Biomedical Discovery and LLM-Expert Collaborations** | ACL 2026 | `Collaboration` · `Intervention Timing` · `Benchmark` | [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2026.acl-long.1671/) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/ACL2026/colabscience-proactive-scientific-collaboration.md) |
| 2026-07 | **Let LLM Tutors Ask First: Proactive LLM-Based Tutoring at Scale in a 1,500-Student Online Classroom** | ACL 2026 Industry Track | `Education` · `Intent Inference` · `Real-world Data` | [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2026.acl-industry.107/) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/ACL2026/scala-proactive-tutoring.md) |

### GUI, Mobile, OS and Coding Agents

| Date | Title | Venue / Source | Tags | Resources |
|---|---|---|---|---|
| 2024-10 | **Need Help? Designing Proactive AI Assistants for Programming** | CHI 2025 | `IDE` · `Intervention Timing` · `Human Factors` | [![arXiv](https://img.shields.io/badge/arXiv-2410.04596-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.04596) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/CHI2025/need-help-proactive-programming.md) |
| 2025-03 | **CodingGenie: A Proactive LLM-Powered Programming Assistant** | arXiv 2503 | `IDE` · `Intent Inference` · `Tool Use` | [![arXiv](https://img.shields.io/badge/arXiv-2503.14724-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2503.14724) [![Star](https://img.shields.io/github/stars/sebzhao/CodingGenie.svg?style=social&label=Star)](https://github.com/sebzhao/CodingGenie) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2025-03/codinggenie-proactive-programming-assistant.md) |
| 2025-07 | **FingerTip 20K: A Benchmark for Proactive and Personalized Mobile LLM Agents** | ICLR 2026 | `Mobile` · `Personalization` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2507.21071-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.21071) [![Star](https://img.shields.io/github/stars/tsinghua-fib-lab/FingerTip-20K.svg?style=social&label=Star)](https://github.com/tsinghua-fib-lab/FingerTip-20K) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/ICLR2026/fingertip-20k.md) |
| 2025-07 | **ProactiveVA: Proactive Visual Analytics with LLM-Based UI Agent** | arXiv 2507 | `GUI` · `Intervention Timing` · `Human Factors` | [![arXiv](https://img.shields.io/badge/arXiv-2507.18165-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.18165) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2025-07/proactiveva-visual-analytics-ui-agent.md) |
| 2025-08 | **AppAgent-Pro: A Proactive GUI Agent System for Multidomain Information Integration and User Assistance** | CIKM 2025 | `GUI` · `Intent Inference` · `Tool Use` | [![arXiv](https://img.shields.io/badge/arXiv-2508.18689-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.18689) [![Star](https://img.shields.io/github/stars/LaoKuiZe/AppAgent-Pro.svg?style=social&label=Star)](https://github.com/LaoKuiZe/AppAgent-Pro) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/CIKM2025/appagent-pro.md) |
| 2025-09 | **VeriOS: Query-Driven Proactive Human-Agent-GUI Interaction for Trustworthy OS Agents** | arXiv 2509 | `OS` · `Safety & Consent` · `Clarification` | [![arXiv](https://img.shields.io/badge/arXiv-2509.07553-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.07553) [![Star](https://img.shields.io/github/stars/Wuzheng02/VeriOS.svg?style=social&label=Star)](https://github.com/Wuzheng02/VeriOS) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2025-09/verios-query-driven-os-agent.md) |
| 2026-02 | **ProAgentBench: Evaluating LLM Agents for Proactive Assistance with Real-World Data** | arXiv 2602 | `Real-world Data` · `Intervention Timing` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2602.04482-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.04482) [![Code](https://img.shields.io/badge/Code-Repo-181717.svg?logo=github&logoColor=white)](https://anonymous.4open.science/r/ProAgentBench-6BC0) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-02/proagentbench.md) |
| 2026-02 | **ProactiveMobile: A Comprehensive Benchmark for Boosting Proactive Intelligence on Mobile Devices** | arXiv 2602 | `Mobile` · `Intent Inference` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2602.21858-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.21858) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-02/proactivemobile.md) |
| 2026-03 | **PIRA-Bench: A Transition from Reactive GUI Agents to GUI-based Proactive Intent Recommendation Agents** | arXiv 2603 | `GUI` · `Intent Inference` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2603.08013-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.08013) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://www.pira-bench.top) [![Dataset](https://img.shields.io/badge/HF-Dataset-ffcc00.svg?logo=huggingface&logoColor=black)](https://huggingface.co/datasets/Yuxiang007/PIRA-Bench-data) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-03/pira-bench.md) |
| 2026-03 | **GUIDE: A Benchmark for Understanding and Assisting Users in Open-Ended GUI Tasks** | CVPR 2026 | `GUI` · `Intent Inference` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2603.25864-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.25864) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://guide-bench.github.io/) [![Dataset](https://img.shields.io/badge/HF-Dataset-ffcc00.svg?logo=huggingface&logoColor=black)](https://huggingface.co/datasets/saelyne/GuideBench) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-03/guide-open-ended-gui-tasks.md) |
| 2026-04 | **Help Without Being Asked: A Deployed Proactive Agent System for On-Call Support with Continuous Self-Improvement** | arXiv 2604 | `Real-world Data` · `Intervention Timing` · `Skill Learning` | [![arXiv](https://img.shields.io/badge/arXiv-2604.09579-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.09579) [![Star](https://img.shields.io/github/stars/volcengine/veaiops.svg?style=social&label=Star)](https://github.com/volcengine/veaiops) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-04/vigil-deployed-proactive-oncall.md) |
| 2026-04 | **Proactive Agent Research Environment: Simulating Active Users to Evaluate Proactive Assistants** | arXiv 2604 | `Simulation` · `Intervention Timing` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2604.00842-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.00842) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://dnathani.net/pare/) [![Star](https://img.shields.io/github/stars/deepakn97/pare.svg?style=social&label=Star)](https://github.com/deepakn97/pare) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-04/pare-proactive-agent-research-environment.md) |
| 2026-04 | **KnowU-Bench: Towards Interactive, Proactive, and Personalized Mobile Agent Evaluation** | arXiv 2604 | `Mobile` · `Personalization` · `Safety & Consent` | [![arXiv](https://img.shields.io/badge/arXiv-2604.08455-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.08455) [![HF Paper](https://img.shields.io/badge/HF-Paper-ffcc00.svg?logo=huggingface&logoColor=black)](https://huggingface.co/papers/2604.08455) [![Star](https://img.shields.io/github/stars/ZJU-REAL/KnowU-Bench.svg?style=social&label=Star)](https://github.com/ZJU-REAL/KnowU-Bench) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-04/knowu-bench.md) |
| 2026-05 | **An Empirical Study of Proactive Coding Assistants in Real-World Software Development** | arXiv 2605 | `IDE` · `Real-world Data` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2605.05700-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.05700) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-05/procodebench-proactive-coding-assistants.md) |
| 2026-05 | **ToolCUA: Towards Optimal GUI-Tool Path Orchestration for Computer Use Agents** | arXiv 2605 | `GUI` · `Tool Use` · `Optimization` | [![arXiv](https://img.shields.io/badge/arXiv-2605.12481-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.12481) [![Star](https://img.shields.io/github/stars/X-PLUG/ToolCUA.svg?style=social&label=Star)](https://github.com/X-PLUG/ToolCUA) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-05/toolcua-gui-tool-orchestration.md) |
| 2026-04 | **From Reactive to Proactive: Assessing the Proactivity of Voice Agents via ProVoice-Bench** | Interspeech 2026 | `Multimodal / Wearable` · `Intervention Timing` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2604.15037-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.15037) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-04/provoice-bench-proactive-voice-agents.md) |
| 2026-06 | **Perceive Before Reasoning: A Pre-Reasoning Perception Framework for Efficient and Reliable Proactive Mobile Agents** | arXiv 2606 | `Mobile` · `Intervention Timing` · `Tool Use` | [![arXiv](https://img.shields.io/badge/arXiv-2606.03236-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.03236) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-06/prpf-perceive-before-reasoning-mobile.md) |
| 2026-07 | **InquireMobile: Teaching VLM-based Mobile Agent to Request Human Assistance via Reinforcement Fine-Tuning** | ACL 2026 | `Mobile` · `Safety & Consent` · `Clarification` | [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2026.acl-long.1487/) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://bit-aqh.github.io/InquireMobile/homepage/) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/ACL2026/inquiremobile-proactive-human-assistance.md) |
| 2026-07 | **PersonalAlign: Hierarchical Implicit Intent Alignment for Personalized GUI Agent with Long-Term User-Centric Records** | ACL 2026 | `GUI` · `Personalization` · `Intent Inference` | [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2026.acl-long.1669/) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/ACL2026/personalalign-long-term-gui-intent.md) |

### Multimodal, Wearable and Embodied Agents

| Date | Title | Venue / Source | Tags | Resources |
|---|---|---|---|---|
| 2024-09 | **AssistantX: An LLM-Powered Proactive Assistant in Collaborative Human-Populated Environments** | IROS 2025 | `Embodied` · `Collaboration` · `Planning` | [![arXiv](https://img.shields.io/badge/arXiv-2409.17655-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2409.17655) |
| 2025-01 | **YETI: Proactive Interventions by Multimodal AI Agents in Augmented Reality Tasks** | arXiv 2501 | `Multimodal / Wearable` · `Intervention Timing` · `Human Factors` | [![arXiv](https://img.shields.io/badge/arXiv-2501.09355-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.09355) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://research.google/pubs/yeti-yet-to-intervene-proactive-interventions-by-multimodal-ai-agents-in-augmented-reality-tasks/) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2025-01/yeti-proactive-ar-intervention.md) |
| 2025-01 | **AiGet: Transforming Everyday Moments into Hidden Knowledge Discovery with AI Assistance on Smart Glasses** | CHI 2025 | `Multimodal / Wearable` · `Intent Inference` · `Personalization` | [![arXiv](https://img.shields.io/badge/arXiv-2501.16240-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2501.16240) [![DOI](https://img.shields.io/badge/DOI-10.1145%2F3706598.3713953-blue.svg)](https://doi.org/10.1145/3706598.3713953) |
| 2025-02 | **Mirai: A Wearable Proactive AI Inner-Voice for Contextual Nudging** | CHI EA 2025 | `Multimodal / Wearable` · `Intervention Timing` · `Human Factors` | [![arXiv](https://img.shields.io/badge/arXiv-2502.02370-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2502.02370) [![DOI](https://img.shields.io/badge/DOI-10.1145%2F3706599.3719881-blue.svg)](https://doi.org/10.1145/3706599.3719881) |
| 2025-05 | **ContextAgent: Context-Aware Proactive LLM Agents with Open-World Sensory Perceptions** | NeurIPS 2025 | `Multimodal / Wearable` · `Personalization` · `Tool Use` | [![arXiv](https://img.shields.io/badge/arXiv-2505.14668-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.14668) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://neurips.cc/virtual/2025/poster/115593) [![Star](https://img.shields.io/github/stars/openaiotlab/ContextAgent.svg?style=social&label=Star)](https://github.com/openaiotlab/ContextAgent) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/NeurIPS2025/context-agent.md) |
| 2025-06 | **Proactive Assistant Dialogue Generation from Streaming Egocentric Videos** | EMNLP 2025 | `Multimodal / Wearable` · `Dialogue` · `Intervention Timing` | [![arXiv](https://img.shields.io/badge/arXiv-2506.05904-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2506.05904) |
| 2025-07 | **ProMemAssist: Exploring Timely Proactive Assistance Through Working Memory Modeling in Multi-Modal Wearable Devices** | UIST 2025 | `Multimodal / Wearable` · `Intervention Timing` · `Human Factors` | [![arXiv](https://img.shields.io/badge/arXiv-2507.21378-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.21378) [![DOI](https://img.shields.io/badge/DOI-10.1145%2F3746059.3747770-blue.svg)](https://doi.org/10.1145/3746059.3747770) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/UIST2025/promemassist-working-memory-wearable.md) |
| 2025-12 | **ProAgent: Harnessing On-Demand Sensory Contexts for Proactive LLM Agent Systems** | arXiv 2512 | `Multimodal / Wearable` · `Sensing` · `Intervention Timing` | [![arXiv](https://img.shields.io/badge/arXiv-2512.06721-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2512.06721) [![Video](https://img.shields.io/badge/Video-YouTube-red.svg?logo=youtube&logoColor=white)](https://youtu.be/pRXZuzvrcVs) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2024-10-12/proagent-on-demand-sensing.md) |
| 2026-03 | **ProactiveBench: Benchmarking Proactiveness in Multimodal Large Language Models** | ICLR 2026 | `Multimodal / Wearable` · `Intervention Timing` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2603.19466-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.19466) [![Star](https://img.shields.io/github/stars/tdemin16/proactivebench.svg?style=social&label=Star)](https://github.com/tdemin16/proactivebench) [![Dataset](https://img.shields.io/badge/HF-Dataset-ffcc00.svg?logo=huggingface&logoColor=black)](https://huggingface.co/datasets/tdemin16/ProactiveBench) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/ICLR2026/proactivebench-mllm.md) |
| 2026-05 | **IPIBench: Evaluating Interactive Proactive Intelligence of MLLMs under Continuous Streams** | arXiv 2605 | `Multimodal / Wearable` · `Intervention Timing` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2605.27074-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.27074) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-05/ipibench-interactive-proactive-intelligence.md) |
| 2026-05 | **MemEye: A Visual-Centric Evaluation Framework for Multimodal Agent Memory** | arXiv 2605 | `Memory` · `Multimodal / Wearable` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2605.15128-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.15128) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-05/memeye-visual-centric-memory.md) |

### Benchmarks, Personalization and Optimization

| Date | Title | Venue / Source | Tags | Resources |
|---|---|---|---|---|
| 2025-08 | **ProactiveEval: A Unified Evaluation Framework for Proactive Dialogue Agents** | ACL 2026 | `Benchmark` · `Dialogue` · `Intent Inference` | [![arXiv](https://img.shields.io/badge/arXiv-2508.20973-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.20973) [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2026.acl-long.1906/) [![Star](https://img.shields.io/github/stars/liutj9/ProactiveEval.svg?style=social&label=Star)](https://github.com/liutj9/ProactiveEval) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2025-08/proactiveeval-unified-evaluation-framework.md) |
| 2025-09 | **ProPerSim: Developing Proactive and Personalized AI Assistants through User-Assistant Simulation** | ICLR 2026 | `Personalization` · `Simulation` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2509.21730-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2509.21730) |
| 2025-10 | **Beyond Reactivity: Measuring Proactive Problem Solving in LLM Agents** | arXiv 2510 | `Benchmark` · `Intent Inference` · `Tool Use` | [![arXiv](https://img.shields.io/badge/arXiv-2510.19771-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.19771) [![Star](https://img.shields.io/github/stars/fastino-ai/PROBE_benchmark.svg?style=social&label=Star)](https://github.com/fastino-ai/PROBE_benchmark) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2024-10-12/measuring-proactive-problem-solving.md) |
| 2025-10 | **AgentFold: Long-Horizon Web Agents with Proactive Context Management** | arXiv 2510 | `Long-horizon` · `Memory` · `Tool Use` | [![arXiv](https://img.shields.io/badge/arXiv-2510.24699-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.24699) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2025-10/agentfold-proactive-context-management.md) |
| 2025-11 | **Training Proactive and Personalized LLM Agents** | arXiv 2511 | `Personalization` · `Optimization` · `Simulation` | [![arXiv](https://img.shields.io/badge/arXiv-2511.02208-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.02208) [![Star](https://img.shields.io/github/stars/sunnweiwei/PPP-Agent.svg?style=social&label=Star)](https://github.com/sunnweiwei/PPP-Agent) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2025-11/training-proactive-personalized-llm-agents.md) |
| 2026-02 | **Pushing Forward Pareto Frontiers of Proactive Agents with Behavioral Agentic Optimization** | arXiv 2602 | `Optimization` · `Human Factors` · `Safety & Consent` | [![arXiv](https://img.shields.io/badge/arXiv-2602.11351-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.11351) |
| 2026-03 | **ProEvent: An Event-centric Benchmark for Proactive Agents** | OpenReview / ACL ARR 2026 | `Benchmark` · `Long-horizon` · `Intervention Timing` | [![OpenReview](https://img.shields.io/badge/OpenReview-Page-8c1b13.svg)](https://openreview.net/forum?id=wypdOy0HrM) |
| 2026-04 | **SKILL0: In-Context Agentic Reinforcement Learning for Skill Internalization** | arXiv 2604 | `Optimization` · `Skill Learning` · `Memory` | [![arXiv](https://img.shields.io/badge/arXiv-2604.02268-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.02268) [![Star](https://img.shields.io/github/stars/ZJU-REAL/SkillZero.svg?style=social&label=Star)](https://github.com/ZJU-REAL/SkillZero) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-04/skill0-skill-internalization.md) |
| 2026-05 | **CogniFold: Always-On Proactive Memory via Cognitive Folding** | arXiv 2605 | `Memory` · `Intent Inference` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2605.13438-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.13438) [![HF Paper](https://img.shields.io/badge/HF-Paper-ffcc00.svg?logo=huggingface&logoColor=black)](https://huggingface.co/papers/2605.13438) [![Star](https://img.shields.io/github/stars/OpenNorve/CogniFold.svg?style=social&label=Star)](https://github.com/OpenNorve/CogniFold) [![Dataset](https://img.shields.io/badge/HF-Dataset-ffcc00.svg?logo=huggingface&logoColor=black)](https://huggingface.co/datasets/OpenNorve/CogEval-Bench) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-05/cognifold-always-on-proactive-memory.md) |
| 2026-05 | **MUSE-Autoskill: Self-Evolving Agents via Skill Creation, Memory, Management, and Evaluation** | arXiv 2605 | `Optimization` · `Skill Learning` · `Memory` | [![arXiv](https://img.shields.io/badge/arXiv-2605.27366-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.27366) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-05/muse-autoskill.md) |
| 2026-05 | **Do Proactive Agents Really Need an LLM to Decide When to Wake and What to Anchor?** | arXiv 2605 | `Intervention Timing` · `Optimization` · `Tool Use` | [![arXiv](https://img.shields.io/badge/arXiv-2605.30152-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.30152) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-05/do-proactive-agents-need-llm-wake-anchor.md) |
| 2026-05 | **π-Bench: Evaluating Proactive Personal Assistant Agents in Long-Horizon Workflows** | arXiv 2605 | `Long-horizon` · `Intent Inference` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2605.14678-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.14678) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://simplified-reasoning.github.io/Pi-Bench/) [![Star](https://img.shields.io/github/stars/Simplified-Reasoning/Pi-Bench.svg?style=social&label=Star)](https://github.com/Simplified-Reasoning/Pi-Bench) [![Dataset](https://img.shields.io/badge/HF-Dataset-ffcc00.svg?logo=huggingface&logoColor=black)](https://huggingface.co/datasets/zzzhr97/Pi-Bench) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-05/pi-bench-long-horizon-workflows.md) |
| 2026-05 | **VitaBench 2.0: Evaluating Personalized and Proactive Agents in Long-Term User Interactions** | arXiv 2605 | `Long-horizon` · `Personalization` · `Memory` | [![arXiv](https://img.shields.io/badge/arXiv-2605.27141-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.27141) [![HF Paper](https://img.shields.io/badge/HF-Paper-ffcc00.svg?logo=huggingface&logoColor=black)](https://huggingface.co/papers/2605.27141) [![Star](https://img.shields.io/github/stars/meituan-longcat/VitaBench-2.0.svg?style=social&label=Star)](https://github.com/meituan-longcat/VitaBench-2.0) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-05/vitabench-2-personalized-proactive-agents.md) |
| 2026-06 | **Ψ-Bench: Evaluating Persona-Sensitive Influencing in Persuasive Dialogues** | arXiv 2606 | `Dialogue` · `Personalization` · `Benchmark` | [![arXiv](https://img.shields.io/badge/arXiv-2606.02754-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.02754) [![Star](https://img.shields.io/github/stars/Hanpx20/Psi-Bench.svg?style=social&label=Star)](https://github.com/Hanpx20/Psi-Bench) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-06/psi-bench-persona-sensitive-influencing.md) |
| 2026-06 | **Communication Policy Evolution for Proactive LLM Agents** | arXiv 2606 | `Dialogue` · `Intervention Timing` · `Optimization` | [![arXiv](https://img.shields.io/badge/arXiv-2606.14314-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.14314) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-06/cpe-communication-policy-evolution.md) |
| 2026-07 | **Remember When It Matters: Proactive Memory Agent for Long-Horizon Agents** | arXiv 2607 | `Long-horizon` · `Memory` · `Intervention Timing` | [![arXiv](https://img.shields.io/badge/arXiv-2607.08716-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.08716) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-07/remember-when-it-matters-proactive-memory-agent.md) |
| 2026-07 | **ENPMR-Bench: Benchmarking Proactive Memory Retrieval for Emotional Support Agents** | Findings of ACL 2026 | `Memory` · `Dialogue` · `Benchmark` | [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2026.findings-acl.2080/) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/conference/ACL2026/enpmr-bench-emotional-memory-retrieval.md) |

---

## Benchmarks

For detailed comparison, see [BENCHMARKS.md](BENCHMARKS.md).

| Date | Benchmark | Paper | Environment | What it tests | Resources |
|---|---|---|---|---|---|
| 2024-03 | **ProMISe** | ProMISe | information-seeking dialogue | proactive clarification for intent resolution | [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2024.findings-eacl.124/) |
| 2024-10 | **RealHumanEval** | Need Help? | programming tasks | proactive IDE assistance with human users | [![arXiv](https://img.shields.io/badge/arXiv-2410.04596-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.04596) |
| 2024-10 | **ProactiveBench** | Proactive Agent | desktop activity events | proactive task prediction and acceptance | [![arXiv](https://img.shields.io/badge/arXiv-2410.12361-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2410.12361) [![Star](https://img.shields.io/github/stars/thunlp/ProactiveAgent.svg?style=social&label=Star)](https://github.com/thunlp/ProactiveAgent) |
| 2025-05 | **ContextAgentBench** | ContextAgent | wearable sensory contexts | proactive service prediction and tool calling | [![arXiv](https://img.shields.io/badge/arXiv-2505.14668-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2505.14668) [![Star](https://img.shields.io/github/stars/openaiotlab/ContextAgent.svg?style=social&label=Star)](https://github.com/openaiotlab/ContextAgent) |
| 2025-07 | **FingerTip 20K** | FingerTip 20K | Android trajectories | proactive task suggestion and personalized execution | [![arXiv](https://img.shields.io/badge/arXiv-2507.21071-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2507.21071) [![Star](https://img.shields.io/github/stars/tsinghua-fib-lab/FingerTip-20K.svg?style=social&label=Star)](https://github.com/tsinghua-fib-lab/FingerTip-20K) |
| 2025-08 | **ProactiveEval** | ProactiveEval | proactive dialogue | target planning and dialogue guidance across six domains | [![arXiv](https://img.shields.io/badge/arXiv-2508.20973-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2508.20973) [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2026.acl-long.1906/) [![Star](https://img.shields.io/github/stars/liutj9/ProactiveEval.svg?style=social&label=Star)](https://github.com/liutj9/ProactiveEval) |
| 2025-10 | **PROBE** | Beyond Reactivity | web problem-solving tasks | bottleneck discovery and autonomous resolution | [![arXiv](https://img.shields.io/badge/arXiv-2510.19771-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2510.19771) [![Star](https://img.shields.io/github/stars/fastino-ai/PROBE_benchmark.svg?style=social&label=Star)](https://github.com/fastino-ai/PROBE_benchmark) |
| 2025-11 | **UserVille** | Training Proactive and Personalized LLM Agents | SWE and deep-research user simulation | productivity, proactivity and personalization under vague prompts | [![arXiv](https://img.shields.io/badge/arXiv-2511.02208-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2511.02208) [![Star](https://img.shields.io/github/stars/sunnweiwei/PPP-Agent.svg?style=social&label=Star)](https://github.com/sunnweiwei/PPP-Agent) |
| 2026-01 | **ChronosBench** | Long-term Task-oriented Agent | dynamic task environments | proactive long-term intent maintenance | [![arXiv](https://img.shields.io/badge/arXiv-2601.09382-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2601.09382) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-01/long-term-task-oriented-agent.md) |
| 2026-02 | **ProAgentBench** | ProAgentBench | real workflow logs | when-to-assist and how-to-assist | [![arXiv](https://img.shields.io/badge/arXiv-2602.04482-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.04482) [![Code](https://img.shields.io/badge/Code-Repo-181717.svg?logo=github&logoColor=white)](https://anonymous.4open.science/r/ProAgentBench-6BC0) |
| 2026-02 | **ProactiveMobile** | ProactiveMobile | mobile device context | latent intent to executable API sequence | [![arXiv](https://img.shields.io/badge/arXiv-2602.21858-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2602.21858) |
| 2026-03 | **ProEvent** | ProEvent | future event tracking | proactive event maintenance and reminders | [![OpenReview](https://img.shields.io/badge/OpenReview-Page-8c1b13.svg)](https://openreview.net/forum?id=wypdOy0HrM) |
| 2026-03 | **PIRA-Bench** | PIRA-Bench | continuous GUI screenshots | proactive GUI intent recommendation | [![arXiv](https://img.shields.io/badge/arXiv-2603.08013-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.08013) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://www.pira-bench.top) [![Dataset](https://img.shields.io/badge/HF-Dataset-ffcc00.svg?logo=huggingface&logoColor=black)](https://huggingface.co/datasets/Yuxiang007/PIRA-Bench-data) |
| 2026-03 | **GUIDE** | GUIDE | open-ended GUI workflow videos | behavior state, intent, and help prediction | [![arXiv](https://img.shields.io/badge/arXiv-2603.25864-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.25864) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://guide-bench.github.io/) [![Dataset](https://img.shields.io/badge/HF-Dataset-ffcc00.svg?logo=huggingface&logoColor=black)](https://huggingface.co/datasets/saelyne/GuideBench) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-03/guide-open-ended-gui-tasks.md) |
| 2026-03 | **ProactiveBench (MLLM)** | ProactiveBench / Trento | visual difficulty scenarios | MLLM proactive help-seeking from visual context | [![arXiv](https://img.shields.io/badge/arXiv-2603.19466-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2603.19466) [![Dataset](https://img.shields.io/badge/HF-Dataset-ffcc00.svg?logo=huggingface&logoColor=black)](https://huggingface.co/datasets/tdemin16/ProactiveBench) |
| 2026-05 | **IPIBench** | IPIBench | streaming video, multi-turn | interactive proactive monitoring, task management, reactive-proactive coordination | [![arXiv](https://img.shields.io/badge/arXiv-2605.27074-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.27074) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-05/ipibench-interactive-proactive-intelligence.md) |
| 2026-04 | **ProVoice-Bench** | ProVoice-Bench | voice interaction streams | proactive voice intervention timing, over-triggering, monitoring | [![arXiv](https://img.shields.io/badge/arXiv-2604.15037-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.15037) [![Notes](https://img.shields.io/badge/Notes-local-64748b.svg)](papers/arxiv/2026-04/provoice-bench-proactive-voice-agents.md) |
| 2026-04 | **Pare-Bench** | Pare | multi-app FSM environment | active user simulation, intervention timing, multi-app execution | [![arXiv](https://img.shields.io/badge/arXiv-2604.00842-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.00842) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://dnathani.net/pare/) [![Star](https://img.shields.io/github/stars/deepakn97/pare.svg?style=social&label=Star)](https://github.com/deepakn97/pare) |
| 2026-04 | **KnowU-Bench** | KnowU-Bench | Android emulator | personalization, proactive tasks, consent and rejection handling | [![arXiv](https://img.shields.io/badge/arXiv-2604.08455-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2604.08455) [![Star](https://img.shields.io/github/stars/ZJU-REAL/KnowU-Bench.svg?style=social&label=Star)](https://github.com/ZJU-REAL/KnowU-Bench) |
| 2026-05 | **CogEval-Bench** | CogniFold | streaming event memory | proactive concept emergence and cognitive-structure formation | [![arXiv](https://img.shields.io/badge/arXiv-2605.13438-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.13438) [![Dataset](https://img.shields.io/badge/HF-Dataset-ffcc00.svg?logo=huggingface&logoColor=black)](https://huggingface.co/datasets/OpenNorve/CogEval-Bench) [![Star](https://img.shields.io/github/stars/OpenNorve/CogniFold.svg?style=social&label=Star)](https://github.com/OpenNorve/CogniFold) |
| 2026-05 | **MemEye** | MemEye | multimodal long-term memory | visual evidence granularity and temporal state reasoning | [![arXiv](https://img.shields.io/badge/arXiv-2605.15128-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.15128) |
| 2026-05 | **ProCodeBench** | Proactive Coding Assistants | real IDE traces | proactive coding intent prediction and sim-to-real evaluation | [![arXiv](https://img.shields.io/badge/arXiv-2605.05700-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.05700) |
| 2026-05 | **π-Bench** | π-Bench | persistent personal workspaces | proactive hidden-intent resolution and checklist completion in long-horizon workflows | [![arXiv](https://img.shields.io/badge/arXiv-2605.14678-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.14678) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://simplified-reasoning.github.io/Pi-Bench/) [![Star](https://img.shields.io/github/stars/Simplified-Reasoning/Pi-Bench.svg?style=social&label=Star)](https://github.com/Simplified-Reasoning/Pi-Bench) [![Dataset](https://img.shields.io/badge/HF-Dataset-ffcc00.svg?logo=huggingface&logoColor=black)](https://huggingface.co/datasets/zzzhr97/Pi-Bench) |
| 2026-05 | **ProActEval** | Anticipate and Learn | proactive assistant scenarios | idle-time anticipation, evidence acquisition, user effort and hallucination reduction | [![arXiv](https://img.shields.io/badge/arXiv-2605.25971-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.25971) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://agentace-ai.github.io/proact-showcase/) [![Star](https://img.shields.io/github/stars/AgentACE-AI/ProAct.svg?style=social&label=Star)](https://github.com/AgentACE-AI/ProAct) |
| 2026-05 | **VitaBench 2.0** | VitaBench 2.0 | long-term user interaction sequences | preference extraction, memory use, updates, and proactive missing-information acquisition | [![arXiv](https://img.shields.io/badge/arXiv-2605.27141-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2605.27141) [![HF Paper](https://img.shields.io/badge/HF-Paper-ffcc00.svg?logo=huggingface&logoColor=black)](https://huggingface.co/papers/2605.27141) [![Star](https://img.shields.io/github/stars/meituan-longcat/VitaBench-2.0.svg?style=social&label=Star)](https://github.com/meituan-longcat/VitaBench-2.0) |
| 2026-06 | **Ψ-Bench** | Ψ-Bench | persuasive dialogue | persona-sensitive influencing with simulated clients and user profiles | [![arXiv](https://img.shields.io/badge/arXiv-2606.02754-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2606.02754) [![Star](https://img.shields.io/github/stars/Hanpx20/Psi-Bench.svg?style=social&label=Star)](https://github.com/Hanpx20/Psi-Bench) |
| 2026-07 | **ProACT Collaboration Bench** | ProACT | multi-user collaboration | breakdown detection, intervention timing, and non-interruptiveness | [![arXiv](https://img.shields.io/badge/arXiv-2607.03730-b31b1b.svg?logo=arxiv&logoColor=white)](https://arxiv.org/abs/2607.03730) |
| 2026-07 | **InquireBench** | InquireMobile | mobile GUI | proactive confirmation before risky or uncertain actions | [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2026.acl-long.1487/) [![Website](https://img.shields.io/badge/Website-9cf.svg)](https://bit-aqh.github.io/InquireMobile/homepage/) |
| 2026-07 | **AndroidIntent** | PersonalAlign | long-term Android records | vague-intent resolution and instruction-free routine suggestions | [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2026.acl-long.1669/) |
| 2026-07 | **BSDD** | CoLabScience | streaming biomedical discussions | when and how to contribute without disrupting collaborators | [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2026.acl-long.1671/) |
| 2026-07 | **ENPMR-Bench** | ENPMR-Bench | emotional-support dialogue | latent emotional-need inference and proactive supportive-memory retrieval | [![ACL](https://img.shields.io/badge/ACL-Anthology-1f6feb.svg)](https://aclanthology.org/2026.findings-acl.2080/) |

---

## Tag Vocabulary

Tags are intentionally compact and reusable. They describe the paper's main contribution, not every detail.

| Tag | Meaning |
|---|---|
| `Definition` | Defines or reframes proactive agents, proactive dialogue, or design-space boundaries. |
| `Survey` | Synthesizes a broad proactive-agent subfield or taxonomy. |
| `Human Factors` | Studies interruption, control, satisfaction, workload, adoption, or developer experience. |
| `Trust` | Focuses on competence perception, calibrated reliance, or trustworthy interaction. |
| `Safety & Consent` | Covers confirmation, autonomy boundaries, reversibility, rejection, or risk control. |
| `Privacy` | Centers privacy management, data minimization, or personal-context governance. |
| `Intervention Timing` | Focuses on when an agent should act, ask, suggest, or remain silent. |
| `Intent Inference` | Infers latent goals, hidden constraints, future tasks, or missing information. |
| `Clarification` | Proactively asks questions before planning, execution, or recommendation. |
| `Dialogue` | Proactive behavior in conversational, persuasive, or task-oriented interaction. |
| `Planning` | Proactive decomposition, task planning, scheduling, or future-state reasoning. |
| `Tool Use` | Tool calling, API execution, GUI operation, or action orchestration. |
| `Recommendation` | Proactive recommendation or suggestion ranking. |
| `Collaboration` | Multi-party or human-agent collaborative problem solving. |
| `Education` | Learning, tutoring, reflection, or student engagement contexts. |
| `Long-horizon` | Multi-session, dynamic, future-event, or long-running task maintenance. |
| `Personalization` | User preferences, personas, profiles, long-term user history, or user-specific adaptation. |
| `Memory` | Persistent memory, episodic memory, visual memory, skill memory, or cognitive memory structures. |
| `Simulation` | User simulation, environment simulation, synthetic users, or synthetic workflows. |
| `Optimization` | RL, reward modeling, multi-objective optimization, self-evolution, or behavior tuning. |
| `Skill Learning` | Skill creation, skill internalization, skill memory, or reusable procedure learning. |
| `Benchmark` | Introduces a dataset, evaluation suite, benchmark, simulator, or diagnostic protocol. |
| `Real-world Data` | Uses real user traces, field-study data, or deployment-like logs. |
| `Desktop` | Desktop activity streams, workstation context, or event logs. |
| `GUI` | Graphical interface agents, browser/app screens, or visual UI interaction. |
| `Mobile` | Mobile GUI, Android/iOS workflows, phone sensors, or mobile user context. |
| `OS` | Operating-system agents, cross-app workflows, or OS-level verification. |
| `IDE` | Programming assistants, code editors, or developer tooling. |
| `Multimodal / Wearable` | Video, audio, AR, smart glasses, egocentric streams, or open-world sensory context. |
| `Sensing` | Active context acquisition, sensor selection, or on-demand sensory capture. |
| `Embodied` | Robots, physical environments, or human-populated embodied settings. |

---

## Contributing

Pull requests are welcome.

Before adding a paper, check that it satisfies at least one of:

- It predicts latent user intent before a complete explicit instruction.
- It decides when to intervene, ask, suggest, execute, remind, or stay silent.
- It evaluates proactive assistance, interruption cost, user control, consent, or personalization.
- It contributes a benchmark or dataset where proactivity is the primary task.

Suggested note template:

```markdown
# Paper Title

## Why It Matters

...

## Proactivity Signal

...

## Evaluation Setup

...

## Key Limitations

...

## Use For

...
```

---

<p align="center">
  Maintained by <a href="https://github.com/LowEntropyAI">Low Entropy AI</a>.
</p>
