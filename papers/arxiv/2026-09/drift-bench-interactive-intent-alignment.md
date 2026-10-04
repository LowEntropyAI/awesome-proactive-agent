# Beyond Oracle Communication: Benchmarking Interactive Intent Alignment Under Miscommunication and Evolving User Intent

## Why It Matters

Drift-Bench++ removes the common assumption that users perfectly communicate one fixed goal. It tests whether an agent can recover and continually track the current intent under miscommunication, goal changes, and limited patience.

## Proactivity Signal

The agent must notice that communication is insufficient or stale, ask useful questions within a finite interaction budget, and adapt when intent shifts silently as a consequence of the dialogue.

## Evaluation Setup

The benchmark construction pipeline creates verified executable tasks with controlled misalignment and intent shifts. Its protocol includes diverse simulated users, finite patience, and silent interaction-conditioned shifts; GRIP evaluates task grounding, user realism, inquiry effectiveness, and adaptation, with an additional validation on deployed ProdAgent sessions.

## Key Limitations

Controlled simulated-user behavior and executable graders cannot capture every social reason that a real user changes direction. The deployed-session validation demonstrates relevance but does not by itself establish benchmark-to-production ranking fidelity.

## Use For

Use this for interactive intent alignment, evolving-goal benchmarks, finite-patience clarification, inquiry evaluation, and robustness to imperfect user communication.
