# Value of Information: A Framework for Human–Agent Communication

## Why It Matters

This paper turns clarification into an explicit cost-sensitive decision. Instead of asking whenever confidence is low, the agent estimates whether the expected utility of the answer is worth the user's cognitive effort.

## Proactivity Signal

For an underspecified request, the policy chooses whether to act immediately or ask a question. It balances ambiguity, decision stakes, expected information gain, and communication cost without a task-specific confidence threshold.

## Evaluation Setup

The inference-time method is tested in 20 Questions, medical diagnosis, flight booking, and e-commerce. It matches or exceeds the best manually tuned baselines in 18 of 20 cost conditions and reports gains of up to 1.36 utility points in high-cost settings.

## Key Limitations

The framework depends on LLM-estimated beliefs and utilities, assumes communication cost can be quantified, and is evaluated in bounded task environments rather than longitudinal use. Privacy costs from eliciting sensitive information are discussed but not fully modeled.

## Use For

Use this for ask-versus-act policies, user-effort-aware clarification, risk-sensitive agents, and decision-theoretic communication controllers.
