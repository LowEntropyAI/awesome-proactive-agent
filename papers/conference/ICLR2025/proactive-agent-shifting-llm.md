# Proactive Agent: Shifting LLM Agents from Reactive Responses to Active Assistance

## Why It Matters

This is a canonical paper for the reactive-to-proactive shift in LLM agents. It treats proactivity as a learnable capability: given user activity traces, the agent should predict useful next tasks instead of waiting for explicit instructions.

## Proactivity Signal

The agent observes desktop activity context and predicts what task the user may want help with next. The key signal is task anticipation from recent behavior, screen state, and activity history.

## Evaluation Setup

The work introduces a data-driven proactive-agent pipeline, including an environment gym, user-agent simulation, reward-model-based evaluation, ProactiveBench, and supervised fine-tuning for proactive task prediction.

## Key Limitations

The evaluation depends heavily on simulated users and reward-model judgments. It demonstrates that proactive behavior can be trained, but it does not fully solve real deployment issues such as consent, interruption policy, or long-term drift in user intent.

## Use For

Use this paper as a baseline reference for task anticipation, proactive-agent training, reward-model evaluation, and the first major benchmark framing for desktop proactive agents.
