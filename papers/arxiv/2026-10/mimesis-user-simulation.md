# MIMESIS: Learning User Simulators as Training Environments for Interactive Agents

[Primary source](https://arxiv.org/abs/2610.09484) · Checked 2026-10-08 · arXiv preprint. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

Interactive agents need realistic training partners; a simulator that makes clarification unusually easy can overstate assistance quality.

## Proactivity Signal

MIMESIS trains a purpose-built 9B user simulator from human conversations covering 13 interaction patterns and uses it as an RL environment. A coach supplies private reasoning and feedback.

## Evaluation Setup

The abstract evaluates fidelity on SOUL and trains agents across eight environments, testing generalization to nine unseen user simulators.

## Key Limitations

Simulator fidelity, success with held-out simulators, and benefit to real users are distinct evidence levels. This is supporting infrastructure, not a standalone proactive intervention policy.

## Use For

Use for interactive-agent training, user-simulation fidelity checks, and detecting simulator-specific optimization.

