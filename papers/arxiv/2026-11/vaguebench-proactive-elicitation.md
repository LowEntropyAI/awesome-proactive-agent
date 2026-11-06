# Don't Guess, Ask Wisely: Benchmarking and Training Proactive Elicitation in Open-Domain LLM Conversations

[Paper](https://arxiv.org/abs/2611.01878) · First posted 2026-11-01 · Checked 2026-11-06. Primary paper and available artifact listings reviewed; no rerun.

## Why It Matters

Real assistant traffic shows models rarely ask before answering an incomplete request. The paper pairs a benchmark for when and what to ask with training that targets both.

## Proactivity Signal

Given a user query, the model decides each turn whether to ask a targeted question or answer, and should not ask when the query is already complete.

## Evaluation Setup

VagueBench derives 4,930 seed queries from real assistant traffic; its test set has 250 complete queries plus intent-vague and fully-vague variants (750 items). A GLM-5.1 simulated user reveals hidden details only to matching questions. Frontier models ask on at most 8.8% of intent-vague queries. DialogGRPO on Qwen3.5-27B asks on 88.4% and 91.2% of the two vague variants while asking on 5.2% of complete queries.

## Key Limitations

English traffic from a single commercial assistant. The simulated user cooperates, so the authors call the gains an upper bound. Vagueness is introduced by LLM degradation, annotation and judging rely on LLMs, and there is no real-user evaluation.

## Use For

Evaluating ask-or-answer decisions with a known set of missing details.
