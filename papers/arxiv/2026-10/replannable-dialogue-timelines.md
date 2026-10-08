# Proactive AI: From Turns to Replannable Dialogue Timelines

[Primary source](https://arxiv.org/abs/2610.05159) · Checked 2026-10-08 · arXiv preprint. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

Proactive dialogue includes waiting, revising an intended message, and cancelling a follow-up before delivery; turn-based chat obscures these decisions.

## Proactivity Signal

User events, pacemaker events, and scheduled events update a replannable temporal message queue. The agent can choose silence, immediate output, or future actions, then revise or withdraw queued messages.

## Evaluation Setup

The paper presents a formal and executable dialogue-timeline formulation rather than an empirical demonstration of superior assistance outcomes.

## Key Limitations

A scheduler and executable formulation establish temporal control, not that notifications are useful, authorized, or minimally disruptive. A user study and calibrated utility comparison remain separate needs.

## Use For

Use for event-driven runtime design, cancellable reminders, and separating wake-up, planning, and final delivery.

