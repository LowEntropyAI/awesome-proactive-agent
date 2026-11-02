# P-ContextBench: From Personal Fact Recall to Personalized Agent Behavior

[Paper](https://arxiv.org/abs/2610.40959) · [Code](https://github.com/TruePersona/P-ContextBench) · First posted 2026-10-29 · Checked 2026-11-02. Primary paper and available artifact listings reviewed; no rerun.

## Why It Matters

A personalized assistant needs more than fact recall to recognize that fulfilling the current request unchanged may conflict with a user constraint.

## Proactivity Signal

Its constraint-conflict tasks test when personal evidence warrants a warning or clarification instead of straightforward compliance.

## Evaluation Setup

The benchmark comprises 100 personas and 4,810 verified test cases, spanning retrieval, temporal tracking, pattern inference and conflict handling.

## Key Limitations

The traces are synthetic. Only part of the benchmark tests the decision to warn or clarify; it does not test when to initiate unprompted contact.

## Use For

Evaluate evidence grounding for a personalized intervention policy.
