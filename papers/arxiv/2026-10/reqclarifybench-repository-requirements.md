# Don't Guess, Just Ask: Evaluating Interactive Requirement Clarification for Repository-Level Software Development

[Primary source](https://arxiv.org/abs/2610.13022) · Checked 2026-10-14 · arXiv 2610. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

Scope: active clarification before coding, not an always-on proactive assistant. Incomplete requirements can propagate into repository-wide rework.

## Proactivity Signal

Agents ask persona-conditioned users about vague intent before producing an implementation-ready requirement document.

## Evaluation Setup

ReqClarifyBench contains 341 game, miniapp, and web tasks with human-validated requirements and code-evaluation artifacts; six LLMs are compared.

## Key Limitations

Users are LLM simulators. Stronger clarification scores do not necessarily mean better documents, and harnesses do not automatically improve requirement quality.

## Use For

Use for question utility, persona sensitivity, and measuring whether elicitation improves downstream software specification.
