# RPCBench: A Benchmark for Proactive Premise Critique in LLM-based Recommendation

## Why It Matters

RPCBench tests whether a recommender assistant challenges an infeasible or unsupported request instead of fabricating a plausible item. It grounds critique in visible user and candidate evidence rather than generic factual-error detection.

## Proactivity Signal

Without an explicit instruction to verify the request, the model must detect a faulty recommendation premise, localize its cause, and choose an appropriate response such as correction, guidance, clarification, refusal, or a revised recommendation strategy.

## Evaluation Setup

The benchmark contains 4,623 evidence-grounded instances across five recommendation domains and ten premise-failure types. Eleven LLMs are evaluated on proactive detection, error localization, post-detection handling, and evidence faithfulness; the study identifies proactive detection and underspecified premises as the main bottlenecks and finds that excessive reasoning can reduce critique quality.

## Key Limitations

RPCBench uses controlled corrupted requests and visible evidence rather than longitudinal user interactions. It measures whether a model critiques a premise, not whether interrupting the user is socially appropriate, and benchmark handling labels may not cover every acceptable conversational repair.

## Use For

Use this for proactive recommendation critique, evidence-bounded clarification, unsupported-attribute detection, correction-versus-refusal policies, and benchmarking assistants that should not satisfy a request by inventing missing facts.
