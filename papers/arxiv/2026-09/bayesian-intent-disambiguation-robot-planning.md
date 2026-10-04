# Bayesian Active Learning for Intent Disambiguation in Interactive Robot Planning

## Why It Matters

This work grounds robot clarification in formal task specifications instead of letting a language model freely steer the entire conversation. It connects question selection to verifiable downstream planning.

## Proactivity Signal

The robot maintains uncertainty over candidate user intents and proactively asks the contrastive question with the highest expected information gain before committing to a trajectory.

## Evaluation Setup

An LLM initializes candidate Signal Temporal Logic specifications and verbalizes clarification questions, while Bayesian optimization updates intent uncertainty and selects queries. Across four simulated and real-world task domains, the method generally reports higher task satisfaction with fewer clarification rounds than LLM baselines.

## Key Limitations

The approach depends on candidate formal specifications and a grounded planner, so omitted hypotheses can still produce confident misalignment. The abstract does not quantify real-user burden or conversational naturalness.

## Use For

Use this for embodied clarification, active intent learning, formal-language grounding, information-gain questions, and verifiable ask-before-plan robot systems.
