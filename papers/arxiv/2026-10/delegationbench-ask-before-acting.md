# DelegationBench: Measuring When AI Agents Should Ask Before Acting

[Primary source](https://arxiv.org/abs/2610.05532) · Checked 2026-10-08 · arXiv preprint. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

Scope: **autonomy and consent governance**, not a new proactive-assistance method. Included because matched cases directly test requested versus unrequested action and whether the agent must ask first.

Agreement with a static permission label can hide brittle or inconsistent decisions about whether an agent should act autonomously.

## Proactivity Signal

Four responses distinguish act, ask permission, ask for missing information, and refuse. Matched pairs vary request status, stakes, reversibility, or audience.

## Evaluation Setup

The benchmark has 156 scenarios and evaluates ten models from five families. It compares matched-pair sensitivity, equivalent prompt formulations, and judging an action versus carrying it out with tools.

## Key Limitations

A keyword baseline was written after seeing the benchmark and is a diagnostic, not a held-out learned result. Annotation agreement should not be collapsed with invariance, pair sensitivity, or execution behavior.

## Use For

Use for consent evaluation and measuring the gap between what agents say they should do and what they actually execute.
