# Do Proactive Agents Really Need an LLM to Decide When to Wake and What to Anchor?

## Why It Matters

This paper targets the always-on cost of proactive agents: calling an LLM on every user event is expensive, slow, and hard to deploy near privacy-sensitive activity streams.

## Proactivity Signal

The system separates the proactive wake-up decision from downstream language generation. A small temporal graph model predicts whether to wake the agent and which entities should anchor the intervention.

## Evaluation Setup

The paper represents user activity as a heterogeneous temporal event-entity graph, trains shared trigger and routing heads, and evaluates the design on the ProactiveAgent benchmark across multiple language-agent backbones and trigger architectures.

## Key Limitations

It improves the always-on trigger and grounding path, but it does not introduce a new benchmark or fully solve user-facing interruption policy, consent, or recovery after a bad proactive suggestion.

## Use For

Use this for efficient proactive-agent architecture, on-device trigger design, temporal-graph modeling of activity streams, and grounded context routing before LLM generation.
