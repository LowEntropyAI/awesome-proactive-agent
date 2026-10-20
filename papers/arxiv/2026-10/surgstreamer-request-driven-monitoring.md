# SurgStreamer: proactive, request-driven monitoring of surgical video streams with structured state and a reusable reasoning layer

[Primary source](https://arxiv.org/abs/2610.21895) · Checked 2026-10-19 · arXiv 2610. Review depth: abstract and selected method, evaluation, and limitations sections; no experiments rerun.

## Why It Matters

Standing-request monitoring: an assistant watches for a specified surgical event and alerts without another prompt.

## Proactivity Signal

A procedure-specific perception model maps 1-FPS video to structured state. Exact rules or a small pointer-based controller evaluate monitoring conditions with event memory.

## Evaluation Setup

A sealed 12-procedure test reports macro event-F1 0.598; matched 75-second windows yield 0.677. Distribution-shift and controller-transfer tests expose perception limits.

## Key Limitations

Main tests use gold conditions, not fully validated free-text requests. No prospective clinical evaluation or surgeon-rated utility is established. Code and protocols are promised upon publication.

## Use For

Use for causal event alerts and separating perception, condition compilation, and response control; not independent clinical need discovery.

Release recheck 2026-10-21: the [availability section](https://arxiv.org/html/2610.21895v1) still promises code, benchmark definitions, splits and protocol documents upon publication. Source datasets (Cholec80, CholecT50, HeiChole and PitVis) being public does not establish release of the new pipeline, controller weights or evaluation package.
