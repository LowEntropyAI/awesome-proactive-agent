# ARCS: Towards Precise Text-to-SQL via Structured Disambiguation

[Primary source](https://arxiv.org/abs/2610.09396) · Checked 2026-10-08 · arXiv preprint. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

Text-to-SQL should resolve naturally occurring ambiguity rather than silently convert one plausible reading into a database operation.

## Proactivity Signal

ARCS structures disambiguation interactions and connects competing valid interpretations to corresponding SQL annotations.

## Evaluation Setup

The abstract describes real-database ambiguity cases and end-to-end evaluation, reporting 51% for GPT-6-sol and below 27% for evaluated open models.

## Key Limitations

These are paper-reported scores, not models rerun in this curation. Database ambiguity resolution does not cover all forms of user intent, consent, or operational risk.

## Use For

Use for clarification quality, interpretation recovery, and downstream executable-task evaluation.

