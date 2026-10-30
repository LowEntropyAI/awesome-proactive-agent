# StreamVibe: Proactive Video Agents for Evolving User Intent

[Paper](https://arxiv.org/abs/2610.34662) · [Project](https://stream-vibe.github.io/) · First posted 2026-10-26 · Checked 2026-10-31. Review: primary method/protocol and linked artifacts; no rerun.

## Why It Matters

Moves beyond a fixed event trigger toward assistance that tracks a user's changing goals.

## Proactivity Signal

StreamVibe-VL learns silence/response decisions with adaptive streaming SFT and localized trajectory GRPO. Its harness maintains intent lifecycles, task state and past replies, retrieving hierarchical memory without replacing the response policy.

## Evaluation Setup

StreamVibe-Bench has 4,100 evaluation samples and 20,546 help points across physical and digital tasks. Separate pointwise and full-trajectory protocols distinguish local decisions from accumulated interaction errors. The 85K training set contains 70K SFT samples and 15K RL tasks; 768K general streaming samples are an additional mixture.

## Key Limitations

Implicit assistance still starts from a high-level user goal. Recorded, annotated trajectories and model-judged content are not proof of live user benefit or open-ended computer-use autonomy. Do not compare pointwise and trajectory scores interchangeably.

## Use For

Intent-state tracking and proactive video training. The official page says code and Hugging Face releases await internal approval. Code, trained weights and data remain announced, not verified available as of this check.
