# Perceive Before Reasoning: A Pre-Reasoning Perception Framework for Efficient and Reliable Proactive Mobile Agents

## Why It Matters

PRPF decouples the *when-to-intervene* decision from the *how-to-assist* decision in proactive mobile agents, addressing a core architectural flaw in unified MLLM pipelines that conflate these two goals and incur unnecessary inference cost.

## Proactivity Signal

The agent must decide whether to intervene at all (intervention gating) before generating assistance. A lightweight Multimodal Proactive Perceptor (MPP) gates and compresses context; the heavier Proactive Agent Reasoner (PAR) is only activated when intervention is warranted.

## Evaluation Setup

Evaluated on the ProactiveMobile benchmark. Key metrics are false trigger rate (FTR), success rate (SR), and inference efficiency. PRPF substantially reduces FTR while improving SR and inference throughput over the ProactiveMobile baseline.

## Key Limitations

Evaluation is confined to ProactiveMobile; generalization to other mobile benchmarks (e.g., KnowU-Bench, FingerTip 20K) is not demonstrated. The gating model introduces an additional training stage.

## Use For

Use for efficient proactive mobile agent design, two-stage intervention-gating architectures, and inference-cost reduction in mobile MLLM agents.
