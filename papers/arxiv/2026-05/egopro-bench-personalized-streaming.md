# EgoPro-Bench: Benchmarking Personalized Proactive Interaction in Egocentric Video Streams

## Why It Matters

EgoPro-Bench combines streaming intervention timing with user memory. It makes over-response visible by evaluating whether an assistant should speak for this user at this moment, not merely whether it understands the scene.

## Proactivity Signal

At each frame or intent interval, the model emits `Attention` or `Silence`; if it triggers, it must generate a response consistent with the simulated user's preferences and history. Event-driven and intent-driven triggers are evaluated separately.

## Evaluation Setup

The benchmark provides more than 12,000 training videos and 2,400 evaluation videos across 12 domains. Metrics cover precision, recall, F1, temporal mIoU, ground-truth hit accuracy, memory consistency, and response quality; baseline models show high recall but poor precision from violating silence constraints.

## Key Limitations

Personalization relies on simulated profiles and generated intentions rather than longitudinal wearable users. LLM judging is used for response quality, and privacy, social acceptability, and real-time hardware constraints remain outside the benchmark.

## Use For

Use this for personalized egocentric assistants, frame-level attention-or-silence training, false-trigger analysis, intent-timing metrics, and memory-conditioned intervention content.
