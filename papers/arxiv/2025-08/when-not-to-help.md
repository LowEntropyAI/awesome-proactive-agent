# When not to help: planning for lasting human-AI collaboration

## Why It Matters

This paper treats proactive assistance as a long-term relationship problem rather than a one-shot accuracy boost. It formalizes how repeated, redundant advice can create alert fatigue and eventually make a user disengage from the assistant.

## Proactivity Signal

At each step, a POMDP policy chooses whether to offer assistance or remain silent. The policy infers latent user engagement and counterfactually weighs the immediate benefit of help against the longer-term risk that another intervention will reduce receptiveness.

## Evaluation Setup

Simulation experiments compare the adaptive policy with always-help and never-help baselines. The reported results show that planning over both task performance and future engagement produces better long-term collaboration than either fixed extreme.

## Key Limitations

The evidence is simulation-based, and the latent engagement dynamics are imposed by the cognitive model rather than learned from longitudinal human-assistant use. Real users may disengage for reasons not captured by the POMDP.

## Use For

Use this for alert-fatigue modeling, assistance-or-silence policies, long-term human-AI interaction objectives, and counterfactual estimates of whether a user actually needs help.
