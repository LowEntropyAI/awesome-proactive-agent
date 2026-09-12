# ProMediConv: Benchmarking Proactive Conversational Agents in Legal Dispute Mediation

## Why It Matters

ProMediConv models mediation as a sustained, strategy-driven intervention rather than a one-shot response. It evaluates how an agent's choices change party behavior throughout a multi-party legal dispute.

## Proactivity Signal

The mediator actively selects among 11 mediation strategies as the dialogue evolves, steering parties through multiple stages instead of waiting for a direct question. Its policy conditions on four party behavior-pattern states and adapts interventions turn by turn.

## Evaluation Setup

The Findings of EMNLP 2026 paper reconstructs a benchmark from 972 complete real-world cases with utterance-level strategy and behavior-state annotations. It compares general and legal LLMs plus ProMediAgent using average turns, success measures, strategy choice, and Mean Attribute Difference to track within-dialogue behavior shifts.

## Key Limitations

Privacy constraints require automated reconstruction from case records rather than direct release of authentic mediation transcripts. The simulated parties and model-based state annotations cannot establish safety or effectiveness in live high-stakes legal mediation.

## Use For

Use this for proactive multi-party dialogue, strategy-aware mediation agents, trajectory-level social-outcome metrics, party-state tracking, and comparisons with CC-Mediation and ProMediate.
