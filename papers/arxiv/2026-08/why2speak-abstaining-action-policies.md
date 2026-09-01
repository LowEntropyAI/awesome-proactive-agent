# Why2Speak: Faithful Reasoning for Abstaining Action Policies

## Why It Matters

Why2Speak makes the speak-versus-silence decision itself the object of study. It is especially useful because it does not assume that adding a visible chain of thought merely explains an unchanged policy: the paper shows that reasoning mode can alter intervention behavior.

## Proactivity Signal

In an ongoing multi-party conversation, the assistant repeatedly decides whether to intervene or remain silent. The positive class is a useful speaking opportunity; false interventions and missed opportunities have asymmetric costs.

## Evaluation Setup

The study uses Qwen3-8B and compares direct decision policies, reasoning policies, supervised fine-tuning, and reinforcement learning. Its synthetic corpus contains about 16,000 conversations and 173,000 token-level action decisions, with interventions making up roughly 13% of the labels; evaluation combines action-quality, probability, activation-probe, and reasoning-ablation analyses.

## Key Limitations

The conversations are synthetic and the experiments center on one model family. The work diagnoses the capability–auditability trade-off but does not provide a policy that simultaneously improves intervention quality and faithful, inspectable reasoning.

## Use For

Use this for act-versus-abstain policies, intervention timing in group dialogue, class-imbalanced proactive evaluation, and audits of whether an agent's stated rationale reflects the mechanism that triggered an intervention.
