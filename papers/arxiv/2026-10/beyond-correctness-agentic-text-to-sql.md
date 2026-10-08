# Beyond Correctness: Resolving Underspecification in Agentic Text-to-SQL

[Primary source](https://arxiv.org/abs/2610.02739) · Checked 2026-10-08 · arXiv preprint. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

Scope: **active clarification and stopping**, not unsolicited need discovery. Included because the agent maintains and resolves its own clarification obligations before committing to SQL.

Correct SQL can still implement an unintended interpretation. This work treats unresolved ambiguity as a planning obligation rather than silently picking a default.

## Proactivity Signal

PlanPool maintains an external, mutable pool of clarification questions. Every planned question must be asked or explicitly dropped, and newly discovered ambiguities can enter the pool.

## Evaluation Setup

Evaluation uses three benchmarks derived from BIRD-Interact and Spider. The abstract reports better ambiguity coverage and fewer silent failures while retaining competitive execution accuracy.

## Key Limitations

Results concern structured database tasks and benchmark user interaction. Coverage of the question pool is not proof that every real user's intent was discovered.

## Use For

Use for explicit clarification state, ambiguity coverage, and auditing assumptions in tool-using agents.
