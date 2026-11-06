# Prospective Memory for Proactive LLM Agents

[Paper](https://arxiv.org/abs/2611.05731) · First posted 2026-11-03 · Checked 2026-11-06. Primary paper and available artifact listings reviewed; no rerun.

## Why It Matters

Retrieval tells an agent what it knows, not when a pending intention should turn into an action.

## Proactivity Signal

Pending intentions carry activation conditions and linked evidence. At each new observation the agent decides to act, wait, keep observing, or mark the intention satisfied or invalidated, then chooses which proposed contributions to issue.

## Evaluation Setup

Evaluated on PM-Bench (seven simulated days, 80 decision steps) and ProactiveBench (233 events across six coding and six writing streams) with five backbones and seven memory baselines. With Claude Haiku 4.5, ProactiveBench F1 rises from 0.38 for the strongest baseline (RWM) to 0.66, and Pro-Memory ranks first in 9 of 10 backbone–benchmark settings. ProactiveBench is scored by a LLaMA-3.1-8B reward model.

## Key Limitations

Text-only offline benchmarks and a reward-model judge; no user study. Some intentions come from explicit instructions, so not every activation answers an unrequested need. No code was released.

## Use For

Separating what a text agent intends to do later from when that intention becomes actionable.
