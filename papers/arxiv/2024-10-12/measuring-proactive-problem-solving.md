# Measuring Proactive Problem Solving in LLM Agents

## Why It Matters

This paper moves proactive-agent evaluation from "can the agent complete a specified task?" to "can the agent discover the task-relevant problem before being told what it is?" It is useful because it treats problem finding as a first-class capability.

## Proactivity Signal

The agent must inspect a personal datastore, infer bottlenecks from user priorities, and decide what action to take without receiving an explicit problem statement.

## Evaluation Setup

The benchmark provides user priorities plus a document/database environment. Models are evaluated on search quality, bottleneck identification, and downstream action success.

## Key Limitations

The setup still depends on curated personal datastores and benchmark-defined bottlenecks. It does not fully model live interruption, consent, or user feedback during action.

## Use For

Use this as a reference for proactive problem discovery, autonomous bottleneck detection, and evaluation beyond reactive task completion.
