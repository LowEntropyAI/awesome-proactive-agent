# StreamClarify: Proactive Clarification for Grounded Streaming Video Question Answering

[Paper](https://arxiv.org/abs/2611.01263) · First posted 2026-10-31 · Checked 2026-11-06. Primary paper and available artifact listings reviewed; no rerun.

## Why It Matters

Streaming video models answer ambiguous or unanswerable questions confidently. A cheap uncertainty check can decide when asking is better than answering.

## Proactivity Signal

For a question the user has already asked, the entropy of a yes/no pre-answer judgment decides whether to answer or request clarification. A pyramid KV cache and a retrieval archive bring back older frames for the second attempt.

## Evaluation Setup

Training-free on three backbones. StreamClarify-QA has 1,837 QA pairs over 355 videos from StreamBench and OVO-Bench, including 302 referential-ambiguity and 540 unanswerable items rewritten by an LLM and reviewed by people. Macro accuracy improves by up to 8.2 points over backbone-matched baselines. With generated questions and a scripted “I mean …” reply, accuracy on ambiguous items rises from 22.5% to 30.8%, while time to first token goes from 0.24 to 1.02 seconds.

## Key Limitations

No real user replies: clarification uses oracle guidance or a fixed simulated answer. The threshold is tuned on the evaluation data for about a 30% trigger rate, and entropy does not say why the model is uncertain. Variants are LLM-built and answers LLM-judged.

## Use For

A low-cost ask-or-answer gate for streaming video QA.
