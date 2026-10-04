# Robots That Take Initiative: A Framework for Building and Evaluating Proactive Robots

## Why It Matters

This work formalizes proactive robot assistance as deciding what needs to be done without waiting for an instruction. It also demonstrates why static offline evaluation can exaggerate benefit when robot actions alter both the environment and the user's behavior.

## Proactivity Signal

At the highest proposed level of proactivity, the robot learns from passive observation, anticipates a user's goal, and initiates assistance without a direct request while accounting for how the user adapts.

## Evaluation Setup

The paper defines three levels of proactive robot assistance, introduces a closed-loop evaluator with an adaptive human model, and instantiates the framework with GAP. Under closed-loop evaluation, prior methods can add more work than they save, while GAP remains robust and outperforms them.

## Key Limitations

The evidence depends on a modeled human rather than broad real-user deployment. The formalism does not by itself solve consent, legibility, interruption cost, or recovery from incorrect goal anticipation.

## Use For

Use this for proactive-robot definitions, closed-loop evaluation, adaptive human models, unprompted goal assistance, and diagnosing optimism in static benchmarks.
