# When Users Change Their Minds: Measuring and Repairing Intent Drift in LLM Agents

## Why It Matters

The paper identifies intent drift as a distinct failure mode: agents continue following superseded or withdrawn requirements even when the user's final intent is recoverable from the conversation.

## Proactivity Signal

The agent must continually maintain the active request, recognize that earlier instructions no longer apply, and adapt its final answer or tool action before execution.

## Evaluation Setup

IntentFlux converts verifiable tasks into dialogues with controlled intent changes and original executable graders. In a 627-case calibration, mean score falls from 0.476 to 0.384 as superseded information increases; StateForge explicitly tracks active requirements and improves the reported General-Test mean from 0.367 to 0.467.

## Key Limitations

The benchmark controls intent changes and preserves existing graders, which may not capture ambiguous reversals, negotiation, or partial commitment in real conversations. Ground-truth final state still does not recover single-turn performance, so state tracking is only a partial solution.

## Use For

Use this for evolving-intent benchmarks, active-requirement memory, cancellation and supersession handling, and pre-execution checks against stale instructions.
