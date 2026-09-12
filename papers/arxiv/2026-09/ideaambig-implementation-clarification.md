# IdeaAMBIG: Benchmarking Implementation-Critical Gaps in Research-Idea Specifications

## Why It Matters

IdeaAMBIG isolates whether a coding or research agent can recognize that a plausible method description is still not implementable. It separates gap detection from the easier task of wording a clarification once the defect is already known.

## Proactivity Signal

The agent should refuse to fill implementation-critical gaps with unsupported assumptions, localize the missing specification, and generate a concrete clarification action before coding.

## Evaluation Setup

The benchmark contains 660 evidence-grounded instances: 163 real gaps from reproducibility reports and issue threads plus 497 controlled synthetic gaps. It evaluates codification-readiness assessment, defect localization, and clarification generation across 13 LLMs; the best reported real-world Macro Defect Recovery Rate is 9.6%, while clarification succeeds much more often when the defect is supplied.

## Key Limitations

Clarification generation receives the annotated defect, so it does not demonstrate end-to-end ask-versus-implement behavior from a raw specification. The synthetic portion uses injected gaps, and the benchmark does not run a multi-turn user interaction to verify that clarification resolves implementation.

## Use For

Use this for coding-agent clarification, specification-readiness gates, defect localization, evaluation of silent assumptions, and separating when-to-ask from how-to-ask.
