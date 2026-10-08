# ProactiveVLA: Augmenting Embodied Memory through Proactive Environment Exploration

[Primary source](https://arxiv.org/abs/2610.06999) · Checked 2026-10-08 · arXiv preprint. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

An embodied agent can use spare exploration budget to acquire useful experience before a later task is requested.

## Proactivity Signal

After an initial task, ProactiveVLA proposes exploration goals from affordances, states, and compositions, verifies the experience, and stores it for a frozen VLA.

## Evaluation Setup

Evaluation uses LIBERO-Pro and RoboCasa365. The abstract reports 48% versus 19% in its Goal-T single-primitive evaluation.

## Key Limitations

This is self-directed evidence and experience acquisition within a supplied environment and budget. It is not evidence that a robot can infer when unsolicited physical intervention is welcome.

## Use For

Use for proactive memory construction, budgeted exploration, and separating internal initiative from human-facing assistance.

