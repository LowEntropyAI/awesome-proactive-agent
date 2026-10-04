# Live Assistant: Learning Whether, When, and Whom to Assist in Real-World Live Social Streams

## Why It Matters

Live Assistant treats a livestream as a shared social environment rather than a sequence of isolated questions. It jointly models whether to participate, when to do so, which person to address, and what grounded assistance to provide.

## Proactivity Signal

Every ten seconds, the policy selects OBS to remain silent, MEM to store a private update, or ANS to address a chosen recipient with a task-specific message. Assistance is triggered by the evolving stream rather than an explicit query.

## Evaluation Setup

The trajectory engine reconstructs more than 320 hours of real livestream activity. Training combines marker-aware multiturn supervised fine-tuning with streaming multiturn GSPO, while the human-reviewed benchmark contains 275 clips and 13,812 decision intervals; reported held-out state, recipient, and task accuracies are 71.14, 72.67, and 58.41.

## Key Limitations

The task is tied to livestream platform signals and ten-second decision intervals. Accuracy metrics do not fully capture social disruption, recipient consent, or the downstream effect of an intervention on the group.

## Use For

Use this for selective participation, multimodal streaming agents, recipient-aware intervention, explicit silence and memory actions, and reinforcement learning over sparse proactive decisions.
