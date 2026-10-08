# From Uncertainty to Action: Learning to Steer LLM Agents

[Primary source](https://arxiv.org/abs/2610.09115) · Checked 2026-10-08 · arXiv preprint. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

Predicting that an agent will fail is different from knowing which intervention will actually improve its trajectory.

## Proactivity Signal

Value of Steering learns intervention value from counterfactual continuations, chooses where to steer, and uses a harm-budgeted trigger to limit disruption of successful trajectories.

## Evaluation Setup

A stepwise outcome table contains about 82,000 continuations from 1,864 trajectories, three benchmarks, and two agents. The abstract reports average gains of 7.8 points over unmodified execution across 12 settings.

## Key Limitations

This is intervention on agent execution, not necessarily proactive help offered to a human. Offline outcome coverage, intervention mechanisms, and the harm budget bound transfer.

## Use For

Use for outcome-grounded triggers, causal intervention value, and measuring harm to otherwise successful runs.

