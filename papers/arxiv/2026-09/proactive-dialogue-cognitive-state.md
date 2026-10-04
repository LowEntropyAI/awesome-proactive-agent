# Proactive Dialogue Policy Optimization via Cognitive-State Transition

## Why It Matters

This paper treats proactive dialogue as sequential policy adaptation to a user's evolving cognitive and affective state, rather than imitation of static strategy labels.

## Proactivity Signal

The agent selects a high-level dialogue strategy and its concrete utterance while tracking how prior interventions changed the simulated user's state and feedback.

## Evaluation Setup

Cog-Sim constrains multi-turn cognitive-state transitions, and CSTPO separately optimizes strategy- and utterance-level advantages through sparse complete-branch sampling. Across three tasks, the simulator shows monotonic dose-response behavior and is preferred over prompt-based simulators for naturalness; Qwen3-14B reaches performance reported as comparable to GPT-5.5-based planning methods.

## Key Limitations

Policy learning relies on a designed simulator, so improvements may inherit its assumptions about cognition and affect. The abstract does not establish transfer to real users or whether task-directed strategies remain respectful under persuasion or sensitive dialogue.

## Use For

Use this for proactive dialogue optimization, stateful user simulation, hierarchical strategy-and-utterance policies, and studying how interventions alter future user responses.
