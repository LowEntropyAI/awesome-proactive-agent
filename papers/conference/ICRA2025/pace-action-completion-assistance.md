# PACE: Proactive Assistance in Human-Robot Collaboration Through Action-Completion Estimation

## Why It Matters

PACE grounds proactive robot assistance in a measurable estimate of human task progress. Instead of responding after a person finishes or issuing help on a fixed schedule, it synchronizes robot actions with the unfolding human workflow.

## Proactivity Signal

The system monitors hand motion, estimates action-completion percentage, and uses a reinforcement-learning policy to initiate the next assistive robot action before idle time accumulates.

## Evaluation Setup

PACE combines online dynamic time warping with correlation analysis and trains its policy from a limited set of demonstrations. An ICRA 2025 user study with 12 participants evaluates collaborative assembly, reporting reduced waiting and improved interaction fluency relative to conventional timing policies.

## Key Limitations

The method assumes repeatable motion patterns and a structured assembly sequence. It has not yet demonstrated open-world intent inference, conversational consent, or recovery when progress estimates are wrong.

## Use For

Use this for embodied proactive assistance, action-completion estimation, human-robot synchronization, timing-aware policies, and objective idle-time metrics.
