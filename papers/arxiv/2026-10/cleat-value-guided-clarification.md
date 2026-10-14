# CLEAT: Learning Value-Guided Clarification for Interactive Agents

[Primary source](https://arxiv.org/abs/2610.12655) · Checked 2026-10-14 · arXiv 2610. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

Scope: active clarification within an existing request. Whether asking helps depends on the task policy's current ability to use the answer.

## Proactivity Signal

A clarification-value controller and task policy co-train from paired ask/proceed rollouts. Updated outcomes refresh the controller's residual query-value labels.

## Evaluation Setup

Qwen3-4B is evaluated in ten settings across four benchmarks; reported gains include 13.2 percentage points on UserGym Travel versus the strongest baseline.

## Key Limitations

Interactive training and benchmark users do not establish unsolicited need discovery or benefit to live human users.

## Use For

Use for ask-versus-act controllers whose value estimates adapt as the execution policy changes.
