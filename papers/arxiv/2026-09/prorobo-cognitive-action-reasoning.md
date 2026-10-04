# Cognitive Action Reasoning for Proactive Robots from Human-Centered Multimodal Observations

## Why It Matters

This paper makes unprompted high-level action selection a distinct embodied-agent task. Rather than conditioning a robot on an explicit instruction, ProRobo asks it to infer useful actions from human state, environmental context, urgency, feasibility, and risk.

## Proactivity Signal

The robot receives visual, audio, and text observations but no action instruction. It must infer whether the situation calls for assistance and select a cognitively grounded high-level action from the observed cues.

## Evaluation Setup

The ProAction dataset contains 10,000 real-world multimodal samples spanning 12 daily-life scenarios in five scenes. The paper benchmarks representative MLLMs and trains MMC2Act, evaluating modality combinations, subject-disjoint generalization, cross-dataset transfer, and human judgments.

## Key Limitations

The benchmark evaluates high-level action reasoning rather than closed-loop physical execution, interruption cost, or recovery from an unwanted action. Its scenario and action ontology may also constrain open-world generalization.

## Use For

Use this for embodied proactive-agent training, multimodal need inference, unprompted action selection, human-state reasoning, and evaluation beyond instruction following.
