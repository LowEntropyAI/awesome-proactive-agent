# InteractionBench: A Real-Time Interaction Benchmark for Streaming Video Systems

[Primary source](https://arxiv.org/abs/2610.05775) · Checked 2026-10-08 · arXiv preprint. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

A streaming system can look good on positive trigger accuracy while speaking unnecessarily throughout negative or near-miss streams.

## Proactivity Signal

InteractionBench jointly evaluates content, clock-based timing, and silence, with negative streams and near-miss cases designed to challenge premature intervention.

## Evaluation Setup

The abstract describes 1,060 interactions from 812 videos, 69 negative streams, and 53 near-miss suites. Comparisons expose different timing-versus-silence failure modes in polling and native real-time systems.

## Key Limitations

Timing, silence, and near-miss results should be reported separately under the benchmark's execution protocol. These cases do not cover every long-running real-world workload.

## Use For

Use for causal streaming evaluation, false-alert diagnostics, and positive/negative intervention trade-offs.

