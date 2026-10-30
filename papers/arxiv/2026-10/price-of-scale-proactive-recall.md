# The Price of Scale in Proactive Memory Recall

[Paper](https://arxiv.org/abs/2610.34507) · [Code](https://github.com/RiverChenStillCompiling/price-of-scale) · First posted 2026-10-25 · Checked 2026-10-31. Review: primary method/protocol and linked artifacts; no rerun.

## Why It Matters

Shows why a memory retrieval score is not automatically a safe interruption threshold.

## Proactivity Signal

A best-of-many similarity gate becomes easier to trigger as the store grows. A cue-swap conformal gate compares the current cue with background cues on the same store to control false alarms under exchangeability.

## Evaluation Setup

Streaming-style text replays use LongMemEval, LoCoMo and prospective-memory diagnostics. Compare hit rate at matched false-alarm budgets, including chronological replay and CPU decision cost.

## Key Limitations

Question-derived and model-generated cues are proxies for real messages; held-out questions do not imply held-out users. The guarantee is marginal and depends on exchangeability, which can fail across scenarios. Not a native video or speech model.

## Use For

Memory-size-aware intervention calibration. Public source contains scoring/gating experiments, generated cues, annotation items and results. Upstream corpora retain separate access terms; no new trained backbone is claimed.
