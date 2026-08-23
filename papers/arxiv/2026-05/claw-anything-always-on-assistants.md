# Claw-Anything: Benchmarking Always-On Personal Assistants with Broader Access to User's Digital World

## Why It Matters

Claw-Anything tests proactive assistance inside a broad digital world rather than a single app. Months of activity, cross-service dependencies, multiple devices, and irrelevant events create the contextual noise an always-on personal agent must handle.

## Proactivity Signal

Proactive tasks require the agent to infer a need from accumulated events and deliver a timely recommendation or action without a new explicit request. The benchmark contrasts these tasks with reactive counterparts.

## Evaluation Setup

The evaluation set contains 200 tasks across nine categories, including 150 CLI-only and 50 combined CLI/GUI tasks. GPT-5.5 reaches 34.5% pass@1, and a 2,000-task generation pipeline yields 1,500 successful training trajectories that improve the base open model by 23.7 points.

## Key Limitations

Backend services are controllable mocks, the task set covers only part of a real user's digital world, and proactive behavior is scored mainly by task verifiers rather than detailed interruption or consent metrics. Broad access also raises privacy and authorization risks not solved by the benchmark.

## Use For

Use this for always-on personal agents, long-horizon cross-service context, proactive task construction, multi-device execution, noise robustness, and context-scaling studies.
