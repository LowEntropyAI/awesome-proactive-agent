# Reasoning While Asking: Transforming Reasoning Large Language Models from Passive Solvers to Proactive Inquirers

## Why It Matters

This work makes user interaction part of the reasoning policy itself: a model should stop blind internal reasoning when a premise or intent is missing and ask for the information that changes the solution.

## Proactivity Signal

Proactive Interactive Reasoning interleaves chain-of-thought with clarification questions, choosing when to query the user instead of forcing an answer from ambiguous or incomplete conditions.

## Evaluation Setup

The method combines uncertainty-aware supervised fine-tuning with user-simulator-based policy optimization. Experiments on mathematics, code generation, and document editing report gains of up to 32.70% in accuracy, 22.90 points in pass rate, and 41.36 BLEU while reducing unnecessary turns and reasoning compute.

## Key Limitations

The interaction policy is optimized largely against simulated users and constructed missing-information tasks. Strong benchmark gains do not guarantee that questions will feel necessary, well-timed, or low-effort to real users.

## Use For

Use this for clarification-aware reasoning, ask-or-solve policies, training interactive reasoning models, and evaluating the tradeoff between user effort and internal computation.
