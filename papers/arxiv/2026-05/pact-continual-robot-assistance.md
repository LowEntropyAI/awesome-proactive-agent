# PACT: Proactive Asking for Continual Task Assistance in Human-Robot Collaboration

## Why It Matters

PACT extends clarification from one-off ambiguity to cross-day embodied assistance. It treats user routines as partially observed and asks whether accumulated history is sufficient before the robot acts.

## Proactivity Signal

At each assistance opportunity, the framework chooses between asking for clarification and executing an assistive action. The learned policy uses current observations and interaction history to trade assistance accuracy against question frequency.

## Evaluation Setup

The primary implementation uses reinforcement learning and is compared with alternative ask-or-act instantiations in multi-day embodied collaboration scenarios. A clarification-utility metric jointly scores correct assistance and the cost of clarification requests.

## Key Limitations

The experiments use controlled embodied scenarios rather than open-ended households, and clarification cost is represented by a fixed evaluation trade-off. Real users may provide noisy answers or change routines in ways the simulated setting does not capture.

## Use For

Use this for ask-versus-act policies, continual embodied assistance, cross-day user adaptation, history-aware clarification, and joint accuracy-interaction metrics.
