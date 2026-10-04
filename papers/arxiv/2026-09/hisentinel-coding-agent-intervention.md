# Learning When and How to Intervene: A Hindsight-Distilled Sentinel for Coding Agents

## Why It Matters

HiSentinel treats pre-execution intervention as a selective control problem: block or redirect only actions whose intervention is likely to improve eventual repository-task completion.

## Proactivity Signal

Before a coding-agent action executes, a lightweight sentinel chooses among allowing it, autonomously redirecting it, or pausing for human help, then provides feedback intended to support recovery.

## Evaluation Setup

A privileged teacher labels intervention decisions using recorded outcomes, then distills them into 0.6B and 1.7B causal students that see only pre-action context. SWE-Intervene supplies action-level labels and feedback; on SWE-bench Verified Mini and Ask or Assume, the method reports gains of up to 14% and 10% across sentinel scales and coding-agent families.

## Key Limitations

Hindsight labels come from recorded trajectories and may not cover alternative recoveries after intervention. The evaluation is limited to software-engineering agents and does not directly measure human interruption burden or authorization preferences.

## Use For

Use this for coding-agent guardrails, pre-tool intervention, allow-redirect-escalate policies, hindsight distillation, and action-level safety datasets.
