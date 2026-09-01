# MMPCBench: Benchmarking Multimodal Large Language Models on Proactive Critique of Flawed Inputs

## Why It Matters

MMPCBench evaluates whether an MLLM validates the user's multimodal premise instead of treating instruction following as unconditional compliance. Its consistency-gap finding is especially relevant to agents whose internal reasoning notices a problem but whose final response suppresses the correction.

## Proactivity Signal

Without an additional checking prompt, the model must autonomously detect a flawed input, diagnose the error, and propose a repair or corrected answer.

## Evaluation Setup

The benchmark defines four primary error types and 12 subcategories, including cross-modal contradictions and missing visual premises. Fourteen mainstream MLLMs are scored hierarchically on detection, diagnosis, resolution, and alignment between reasoning and final response.

## Key Limitations

The benchmark targets curated flawed inputs rather than continuous user activity, so it measures proactive critique but not when to interrupt a workflow. Reasoning–answer alignment also depends on access to model traces that may be unavailable or behaviorally unfaithful.

## Use For

Use this for proactive multimodal correction, compliance-bias evaluation, reasoning-to-response consistency, and assistants that should challenge faulty visual or textual premises.
