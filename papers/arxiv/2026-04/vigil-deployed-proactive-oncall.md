# Help Without Being Asked: A Deployed Proactive Agent System for On-Call Support with Continuous Self-Improvement

## Why It Matters

Vigil is a rare example of a proactive agent deployed at production scale (ByteDance Volcano Engine, 10+ months). It covers the full on-call lifecycle — including the post-escalation phase that reactive agents abandon — and continuously learns from human-resolved cases, making it a strong reference for real-world proactive system design.

## Proactivity Signal

Vigil integrates into human–customer dialogues and proactively offers assistance without explicit invocation. It monitors ongoing cases, identifies resolution gaps, and surfaces relevant knowledge before the analyst asks.

## Evaluation Setup

Evaluated on real deployment data from Volcano Engine. Metrics cover assistance quality, analyst workload reduction, and self-improvement efficacy over the 10-month deployment window.

## Key Limitations

Evaluation is on a single internal cloud platform; generalization to other domains is not measured. The continuous self-improvement pipeline depends on the quality of human-resolved case logs.

## Use For

Use for real-world proactive agent deployment, on-call/IT-support automation, continuous self-improvement mechanisms, and deployment-scale evaluation studies.
