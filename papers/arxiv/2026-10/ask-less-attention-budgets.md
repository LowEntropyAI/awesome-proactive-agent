# Ask Less, Ask Better: Allocating User Attention in Proactive LLM Agents with Interruption Budgets

[Paper](https://arxiv.org/abs/2610.24411) · First posted 2026-10-17 · Checked 2026-10-24. Review: protocol, review mechanism and limitations; no rerun.

## Why It Matters

Adjacent clarification governance: two agents can ask equally often while imposing very different effort on the user.

## Proactivity Signal

A hard interruption budget limits questions. Memory-guided review checks proposed questions against earlier answers and their usefulness before permitting another interruption.

## Evaluation Setup

Eight LLMs are tested on customer-service tasks with simulated users. A human-validated judge estimates attention cost beyond question count; equal-count conversation comparisons agree with human effort judgments 75% of the time.

## Key Limitations

Judge-estimated effort is not directly measured live burden. Fixed budgets, simulated users and domain-specific rewards limit transfer to open-ended collaboration; lower question count alone is not better alignment.

## Use For

Ask-versus-act cost controls, repeated-question prevention and cost-matched evaluation. Existing source benchmarks are public, but this work's complete implementation and new annotations were not verified as released.
