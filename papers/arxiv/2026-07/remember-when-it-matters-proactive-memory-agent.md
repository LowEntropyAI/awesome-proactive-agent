# Remember When It Matters: Proactive Memory Agent for Long-Horizon Agents

## Why It Matters

This work treats memory as an active intervention policy rather than a passive retrieval store. A dedicated memory agent keeps task-critical state from decaying as an action agent's trajectory expands.

## Proactivity Signal

Running alongside an unmodified action agent, the memory agent updates a structured memory bank and decides whether to inject a memory-grounded reminder or remain silent. Selective reminders target the moment when relevant state would otherwise be missed.

## Evaluation Setup

The module is evaluated with frontier action agents and existing harnesses on Terminal-Bench 2.0 and \(\tau^2\)-Bench. It improves pass@1 by up to 8.3 percentage points on Terminal-Bench and 6.8 points on \(\tau^2\)-Bench; ablations compare it with passive exposure, always-on injection, advisor-only guidance, and general retrieval.

## Key Limitations

The reminder policy is assessed in benchmarked agent trajectories rather than deployed user interactions. Better task completion does not resolve user-facing consent, interruption cost, or the consequences of an incorrect reminder.

## Use For

Use this for plug-in proactive memory, long-horizon state maintenance, selective reminder policies, and architectures that decouple memory management from action execution.
