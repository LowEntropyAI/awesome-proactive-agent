# DuplexAct: How Interactive Are Frontier Full-Duplex Spoken Language Models?

[Primary source](https://arxiv.org/abs/2610.17738) · Checked 2026-10-14 · arXiv 2610 · Under review. Review depth: abstract, method, evaluation, and limitations; no experiments rerun.

## Why It Matters

Included specifically for the Help/Safety Interrupt conditions, where the model must take the floor because intervention is warranted.

## Proactivity Signal

Evaluation distinguishes executing a spoken action from fulfilling its purpose afterward. Hazard cues can require unsolicited warnings while the user continues speaking.

## Evaluation Setup

The broader benchmark has 4,691 instances, eight actions, 24 conditions, and 14 evaluated models. Interrupt measures onset and subsequent assistance or safety content.

## Key Limitations

Not all benchmark instances test proactivity. The relevant interruption cases use controlled synthesis and simulator replay; follow-through is scored conditional on successful execution. Distinct from DuplexAct-Bench, arXiv 2609.39446.

## Use For

Use for content-grounded interruption and reporting proactive subsets separately from ordinary turn-taking.
