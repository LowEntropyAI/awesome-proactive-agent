# Check Yourself Before You Wreck Yourself: Selectively Quitting Improves LLM Agent Safety

## Why It Matters

The paper makes non-action a first-class agent behavior. It shows that an autonomous tool user can improve safety by recognizing when compounded uncertainty makes continued execution inappropriate.

## Proactivity Signal

The agent must choose between continuing a multi-step tool trajectory and quitting before unsafe side effects occur. This is a safety-oriented form of proactive abstention: the useful behavior is to stop without waiting for a failure or an explicit human correction.

## Evaluation Setup

Across 12 models in ToolEmu, explicit quitting instructions improve safety by 0.39 points on average on a 0–3 scale, with a 0.64-point gain for proprietary models, while average helpfulness decreases by only 0.03 points.

## Key Limitations

Quitting is installed through prompting and evaluated in a simulated tool environment. The method does not by itself decide how to recover, ask for authorization, or resume safely after quitting, and results may depend on the risk distribution in ToolEmu.

## Use For

Use this for abstention-aware tool agents, safety checkpoints, uncertainty-sensitive stopping, and benchmarks that should not score blind continuation as success.
