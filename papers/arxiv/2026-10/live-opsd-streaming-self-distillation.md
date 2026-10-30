# Live-OPSD: On-Policy Self-Distillation for Proactive Streaming Large Video Models

[Paper](https://arxiv.org/abs/2610.36959) · First posted 2026-10-27 · Checked 2026-10-31. Review: primary method/protocol and linked artifacts; no rerun.

## Why It Matters

Trains when and how to respond on the policy's own continuations rather than reference answers alone.

## Proactivity Signal

The student generates without privileged hints. The same model scores that continuation with an evidence hint, supplying distributional supervision; decision-aware selection balances response and silence cases.

## Evaluation Setup

Instantiated on Qwen2.5-Omni-7B and Qwen3-Omni-30B-A3B. LiveProBench evaluates proactive interaction; OVO-Bench checks broader video ability. Comparisons include continued SFT and silence-balancing objectives, with source-video-level data splits.

## Key Limitations

On-policy continuations are sampled from recorded histories, not complete student-generated interaction trajectories. Hints come from an external annotator and are training-only; the study does not establish online autonomous self-training. Standing instructions remain part of the task.

## Use For

Post-training methodology and decision-distribution ablations. No public method code, trained checkpoint or new dataset release was verified from the inspected paper links. Base-model availability is not a Live-OPSD release.
