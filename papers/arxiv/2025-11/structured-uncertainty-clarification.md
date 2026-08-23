# Structured Uncertainty guided Clarification for LLM Agents

## Why It Matters

This work grounds clarification in the actual argument space of a tool call. It separates missing user specification from model uncertainty and asks only about parameters whose resolution is expected to improve the outcome.

## Proactivity Signal

SAGE-Agent repeatedly chooses which argument to clarify or whether to stop asking and execute. Expected Value of Perfect Information is balanced against aspect-specific question costs to avoid redundant interruptions.

## Evaluation Setup

On ClarifyBench, structured uncertainty raises coverage on ambiguous tasks by 7–39% while using 1.5–2.7 times fewer questions than prompting and uncertainty baselines. Uncertainty-weighted GRPO improves When2Call accuracy from 36.5% to 65.2% for a 3B model and from 36.7% to 62.9% for a 7B model.

## Key Limitations

ClarifyBench relies on realistic but simulated users and predefined tool schemas. EVPI quality depends on calibrated parameter distributions and cost estimates, and the experiments do not establish behavior with real users or irreversible high-stakes actions.

## Use For

Use this for tool-argument disambiguation, question selection, ask-versus-call policies, efficient clarification, and training small tool agents to recognize when interaction is necessary.
