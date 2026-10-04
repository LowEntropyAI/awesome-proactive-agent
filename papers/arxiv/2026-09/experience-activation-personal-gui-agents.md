# Relevance Does Not Imply Applicability: Experience Activation for Personal GUI Agents

## Why It Matters

This paper shows that retrieving task-relevant history is insufficient for personalized GUI agents: past experience may help at the opening step but be inapplicable to the current screen or an ill-timed basis for a proactive suggestion.

## Proactivity Signal

Before execution, ExpActivator activates a recurring intent only when the present time and scenario support it; otherwise it abstains. During execution, it supplies only past actions matched to the current screen state.

## Evaluation Setup

Across four GUI backbones, the training-free method reports a 28% average improvement in within-trajectory step success, uses about one-fifth as many history tokens, and reaches roughly 2.3 times the Matthews correlation coefficient of the strongest proactive baseline.

## Key Limitations

Applicability is estimated through frozen-backbone latent similarity plus time and scenario support. The abstract does not establish how well the activation rule transfers to open-world interfaces, novel routines, or users with changing preferences.

## Use For

Use this for memory-to-action gating, personalized GUI agents, recurring-intent activation, context-sensitive retrieval, and abstention when historical relevance is not enough.
