# When to Assist and What to Suggest: Joint Gating and Memory-Grounded Hint Generation in One Compact Decoder

[Paper](https://arxiv.org/abs/2610.40611) · First posted 2026-10-29 · Checked 2026-10-31. Review: primary method/protocol and linked artifacts; no rerun.

## Why It Matters

Measures the full path from deciding to intervene to producing a useful hint.

## Proactivity Signal

One 1B decoder shares weights between an intermediate-layer gate and memory-conditioned generation. Silence decisions can exit early; positive decisions continue into hint generation.

## Evaluation Setup

28,058 text decision points compare separate gate/generator pipelines with the shared decoder. Human assessment has 1,144 ratings over 32 dialogues. Report end-to-end quality, false alarms and wall-clock cost separately from oracle-gate generation scores.

## Key Limitations

Semi-synthetic transcript evaluation does not establish live speech or video performance. Exact match is a restrictive content metric; humans rate the compact system below the 8B generator despite favorable automatic scores. Gate thresholds require recalibration.

## Use For

Joint intervention/content modeling and evaluation-cost accounting. Code and result artifacts are promised upon publication, with no release link verified. The derived corpus will not be redistributed because upstream licenses differ.
