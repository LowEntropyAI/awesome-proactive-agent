# Clarify the User or Verify the World? Uncertainty Routing for Proactive Agents

## Why It Matters

This work separates two sources of uncertainty that proactive agents often conflate: ambiguity about what the user wants and missing evidence about the world. The distinction changes whom or what the agent should query.

## Proactivity Signal

The policy routes each decision among ACT, CLARIFY, and VERIFY. Disagreement across plausible goals triggers a user question, while uncertainty within a goal interpretation triggers an environment check.

## Evaluation Setup

PROUR decomposes action uncertainty and trains mode-conditioned query generation with information-gain rewards. On retail and airline tasks from tau-bench, it reports a 28.17% average success rate, 4.57 points above the strongest reported prior method, while using 2.17 fewer interaction steps; the policy is also tested without retraining on stronger agents and tau3-bench domains.

## Key Limitations

The decomposition assumes that sampled goal interpretations and within-goal entropy faithfully represent the two uncertainty sources. Results come from benchmark environments rather than real users who may answer inconsistently or incur different interruption costs.

## Use For

Use this for ask-versus-check routing, source-aligned uncertainty resolution, tool-agent clarification, and policies that must distinguish user ambiguity from missing world state.
