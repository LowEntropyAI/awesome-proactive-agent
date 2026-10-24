# PACE: Plan, Attend, Check, and Emit for Training-Free Response Timing in Streaming Video Understanding

[Paper](https://arxiv.org/abs/2610.28323) · First posted 2026-10-20; v2 2026-10-22 · Checked 2026-10-24. Review: method and evaluation; no rerun.

## Why It Matters

Explicitly distinguishes an answer being stable, supported by current observations, and final because the queried event has finished.

## Proactivity Signal

A standing question induces a revisable watch plan. Perception-gated scheduling selects observations; stability, grounding and completion checks control emission. An event ledger preserves verified evidence.

## Evaluation Setup

Training-free experiments use existing video-language backbones on ProactiveVideoQA and OVO-Bench Forward. Reported improvements concern response timing and answer accuracy under those protocols.

## Key Limitations

This is query-conditioned wait/respond control, not independent discovery of a new user need. End-of-stream fallback and multiple verification calls must be accounted for when assessing latency and computation.

## Use For

Evidence-conditioned streaming response and premature-answer diagnostics. No new trained model is required; public implementation files were not verified from the paper's linked resources.
