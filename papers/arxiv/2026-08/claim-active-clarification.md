# CLAIM: Leading Open-domain Active Clarification of Large Language Models with Uncertainty Measurement

## Why It Matters

CLAIM treats clarification as an explicit policy decision rather than a side effect of answer generation. It provides a scalable route to training models that recognize when a request is underspecified and choose the most informative missing dimension without manual preference labels.

## Proactivity Signal

For each request, the model decides whether to answer directly or initiate a clarifying question; when clarification is needed, it selects which ambiguous or missing dimension to ask about. This gives the agent an explicit ask-versus-answer action boundary instead of always reacting with a best-effort answer.

## Evaluation Setup

CLAIM estimates uncertainty from answer disagreement across heterogeneous models, builds synthetic clarification data, and trains a Meta-Llama-3.1-8B model with supervised fine-tuning followed by GRPO. Evaluation spans ClariLM-test, real-world vague instructions from IN3, and the open-domain CLAMBER benchmark, measuring clarification necessity, clarification-dimension accuracy, and question similarity against general, reasoning, fine-tuned, and agent baselines.

## Key Limitations

The evaluation is offline and single-turn, so it does not test whether clarification improves final task outcomes across a multi-turn interaction or whether real users accept the questions. Data construction depends on multiple-model disagreement and reasoning-based synthetic labels, while part of question quality is measured with an LLM judge or reference similarity; the linked code repository is not currently accessible.

## Use For

Use this for ask-versus-answer policies, ambiguity detection, open-domain clarification, uncertainty-driven synthetic data, and training agents to request the most useful missing constraint before acting.
