# Rational Clarification by Assistive Agents via Value-of-Information Reasoning

## Why It Matters

REVOIR replaces uncertainty-threshold clarification with a downstream decision question: will the answer improve task reward enough to justify the cost of asking instead of acting now?

## Proactivity Signal

The assistant compares acting immediately with asking a candidate question, accounting for expected task improvement, question cost, and whether cheap post-action correction is available.

## Evaluation Setup

The inference-time method is tested on CondAmbigQA and preference-aligned household planning in ADAPT. It reports higher success with fewer questions than prompting, chain-of-thought, fine-tuning, and information-gain baselines; on ADAPT it improves preference satisfaction by 13--15% over a fine-tuned clarification policy while asking five times fewer questions.

## Key Limitations

The value calculation depends on estimated task rewards, answer distributions, and interaction costs, which are difficult to calibrate for real users. The work is under review and evaluates two assistive task settings rather than long-horizon deployments.

## Use For

Use this for cost-sensitive clarification, value-of-information policies, ask-versus-act decisions, post-action correction trade-offs, and reducing unnecessary questions.
