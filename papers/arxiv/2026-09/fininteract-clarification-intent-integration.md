# FinInteract: Benchmarking Clarification and Intent Integration in Ambiguous Financial Question Answering

## Why It Matters

FinInteract exposes the single-gold illusion in financial QA: an agent can appear correct by choosing the default interpretation even when the user intended another equally verifiable reading. It evaluates both eliciting the missing distinction and using the answer correctly.

## Proactivity Signal

The agent must recognize an underspecified financial question, initiate a targeted clarification instead of guessing, and integrate the user's reply before answering from regulatory filings.

## Evaluation Setup

The bilingual English-Chinese benchmark contains 173 instances across five ambiguity categories, each paired with default and intended interpretations. Models exceed 90% when the intended interpretation is supplied but reach at most 28.9% when they must elicit it; regrading the same GPT-4o outputs against the default interpretation inflates accuracy by 3.1 times.

## Key Limitations

The benchmark is small and domain-specific, with stronger coverage for entity scope and metric definition than for some other ambiguity types. It does not measure repeated clarification, user effort over long sessions, or downstream financial decision quality.

## Use For

Use this for ask-versus-answer evaluation, bilingual clarification, intent integration, financial-agent reliability, and diagnosing benchmarks that reward plausible guessing.
