# ProActor: Timing-Aware Reinforcement Learning for Proactive Task Scheduling Agents

## Why It Matters

ProActor replaces rigid point labels for proactive actions with opportunity windows and optimizes timing together with action consistency. This better reflects conversational settings in which several nearby intervention moments may all be valid.

## Proactivity Signal

The agent monitors an ongoing conversation, anticipates an actionable user need, and moves an action through pending, ready-to-trigger, and triggered states. It must decide when to surface or execute the action instead of waiting for an explicit task request.

## Evaluation Setup

The framework auto-annotates proactive action candidates and opportunity windows, defines timing and reference-action metrics, and trains a 4-bit Qwen2.5-14B policy with GRPO and stage-aware composite rewards. Experiments on the ABCD+ and Home Loan datasets report improved proactive timing while maintaining competitive action consistency; the ART-F training system provides 4–8× speedups on four H200 or eight H100 GPUs.

## Key Limitations

Reference actions come from an oracle LLM rather than direct user labels, and the two conversational domains do not establish generalization to open-world personal assistance. The system identifies consent as necessary for irreversible actions, but the main evaluation does not test real deployments or user authorization behavior.

## Use For

Use this for timing-aware proactive RL, opportunity-window annotation, conversational task scheduling, propose-and-confirm state machines, and separating action readiness from final execution.
