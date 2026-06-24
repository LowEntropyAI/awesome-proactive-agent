# IPIBench: Evaluating Interactive Proactive Intelligence of MLLMs under Continuous Streams

## Why It Matters

IPIBench is the first benchmark to evaluate proactive intelligence under *dynamic multi-turn* streaming scenarios, where users can add, modify, or cancel proactive requests alongside interleaved reactive queries. Prior benchmarks treat proactive and reactive interactions in isolation; IPIBench forces models to coordinate both simultaneously.

## Proactivity Signal

The agent must proactively monitor a continuous video stream, manage ongoing proactive tasks, and handle interleaved reactive queries — all without explicit per-step user instructions. The key challenge is unstable triggering and weak reactive-proactive coordination.

## Evaluation Setup

Benchmark covers three tracks: proactive monitoring, proactive task management, and interleaved reactive-proactive requests. Evaluated on representative MLLMs. Also introduces IPI-Agent, a training-free framework with an interaction-control policy and temporal-gating mechanism that consistently improves all tested MLLMs across all settings.

## Key Limitations

Streaming video setting means evaluation cost is high. IPI-Agent is training-free and may hit a ceiling compared to fine-tuned approaches. The benchmark is currently focused on visual streams; audio and other modalities are not covered.

## Use For

Use for streaming proactive MLLM evaluation, multi-turn reactive-proactive coordination, temporal gating design, and training-free proactive agent frameworks.
