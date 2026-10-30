# HALO: Human-Grounded Granular Evaluation of Proactive Agents

[Paper](https://arxiv.org/abs/2610.39086) · [Code](https://github.com/CedricPei/HALO/) · [Dataset](https://huggingface.co/datasets/CedPei/HALO-8K) · First posted 2026-10-29 · Checked 2026-10-31. Review: primary method/protocol and linked artifacts; no rerun.

## Why It Matters

Tests whether assistance is warranted and proportionate, rather than rewarding every action as useful initiative.

## Proactivity Signal

Agents inspect personal app evidence and choose an action level without a per-checkpoint explicit request. Dependency, blockage, risk and opportunity form four need types.

## Evaluation Setup

HALO-Arena provides 400 scenarios in 50 personal environments across ten domains. HALO-8K contains 8,000 responses from ten models, annotated by 20 experts for action level, acceptability and rejection reasons. Timing/intensity diagnose over-proactivity; reasoning tokens and retrieval rounds track effort.

## Key Limitations

Checkpoints use independent simulated environments, not sustained user interaction. Constructed need prevalence and annotator preferences cannot establish population-wide failure rates or universal acceptability.

## Use For

Human-grounded intervention evaluation and restraint analysis. Public source includes simulated apps, evaluation and annotation tooling; HALO-8K JSONL and annotation files are ungated. No new model weights are claimed and no benchmark run was reproduced.
