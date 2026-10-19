# Stop Training Against Soft Users: Mentalized Adversarial Self-Play for Proactive Dialogue

[Primary source](https://arxiv.org/abs/2610.21156) · Checked 2026-10-19 · EMNLP 2026 Main (per arXiv record). Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

Goal-directed proactive dialogue can appear effective merely because its simulated users are overly compliant.

## Proactivity Signal

MASP alternates system/user self-play using a BDI-based latent user state and separate teacher/student mentalization, training dialogue planning against rational resistance.

## Evaluation Setup

The abstract reports improved success, rationality-constrained success, and turn efficiency on proactive-dialogue benchmarks compared with SFT and planner-only approaches.

## Key Limitations

Benchmark goal completion is not permission to override user refusal. This is proactive dialogue planning, not a query-free streaming assistant or a real-user benefit study.

## Use For

Use for robust proactive-dialogue training and auditing soft-user evaluation bias.
