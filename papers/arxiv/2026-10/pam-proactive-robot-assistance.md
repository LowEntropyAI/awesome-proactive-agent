# An Agentic Framework for Proactive Robots with Procedural Assistance Memory

[Primary source](https://arxiv.org/abs/2610.21211) · Checked 2026-10-19 · CoRL 2026 (per arXiv record). Review depth: abstract and selected method, evaluation, and limitations sections; no experiments rerun.

## Why It Matters

Direct proactive assistance: repeated routines help a robot distinguish useful help from an unwanted action before a request arrives.

## Proactivity Signal

A VLM reads current observations and finite-state Procedural Assistance Memory to select a task or NO_ACT; a VLA executes it. End-of-day reflection revises memory.

## Evaluation Setup

A five-day desk-assistance study reports first-fire delay decreasing from about five seconds to one, alongside task and silence metrics and routine-shift tests.

## Key Limitations

Structured routines and a small task set limit generalization. Greater initiative can reduce NO_ACT recall. Release recheck on 2026-10-21: the [linked repository](https://github.com/DAVIAN-Robotics/PAM) is now reachable, but its main branch contains the project page, figures/demos, an example FSM and helper tools—not the complete robot implementation. Public trained checkpoints and an evaluation dataset were not verified. The earlier October 19 check returned 404.

## Use For

Use for routine-conditioned triggers, cross-day memory reflection, and help-versus-silence evaluation.
