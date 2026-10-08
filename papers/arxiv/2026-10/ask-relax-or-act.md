# Ask, Relax, or Act? Evaluating Actionable Indeterminacy in LLM Preference Reasoning

[Primary source](https://arxiv.org/abs/2610.03102) · Checked 2026-10-08 · arXiv preprint. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

Uncertainty alone does not justify asking another question: several admissible preference interpretations may still support the same action.

## Proactivity Signal

A solver-grounded policy distinguishes acting on a shared acceptable action, clarifying when feasible interpretations disagree, and finding a minimum-cost permitted constraint repair when the problem is infeasible.

## Evaluation Setup

Matched cases span object allocation, scheduling, apartment selection, and stable matching. Evaluation separates decision correctness, reliability across paired cases, and the usability of complete responses.

## Key Limitations

These are formalized preference problems with declared constraints and repair permissions, not general permission to relax a user's requirements. Correct action labels do not guarantee an executable response.

## Use For

Use for ask-versus-act baselines, stopping criteria, and distinguishing missing preferences from inconsistent constraints.

