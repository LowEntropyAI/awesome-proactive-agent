# Ask or Assume? Uncertainty-Aware Clarification-Seeking in Coding Agents

## Why It Matters

This paper studies clarification inside a realistic repository-level coding loop rather than in isolated question answering. Its strongest systems separate underspecification detection from code execution, showing that an agent can recover missing issue information without asking indiscriminately.

## Proactivity Signal

An intent agent repeatedly monitors the interaction history and can interrupt the coding agent to request missing information before further navigation, editing, or testing. The policy asks more often on difficult tasks while conserving queries on tasks that are already actionable.

## Evaluation Setup

The evaluation uses an underspecified variant of SWE-bench Verified with interactive access to withheld issue details. The uncertainty-aware multi-agent scaffold reaches a 69.40% resolve rate, compared with 61.20% for the single-agent uncertainty-aware setup, and approaches agents given fully specified instructions.

## Key Limitations

The user is simulated from known hidden information, and the scaffold adds another frontier-model call at each decision point. Results therefore do not yet establish usability, latency, or calibration with real developers who may answer incompletely.

## Use For

Use this for proactive coding agents, uncertainty monitors, ask-before-edit policies, multi-agent separation of intent and execution, and interactive SWE-bench evaluation.
