# See, Infer, Intervene: Proactive World Modeling for Goal-Oriented Social Intelligence

## Why It Matters

The paper makes proactive retail assistance a five-way action-selection problem rather than a binary alert. Its strongest result also exposes how badly a policy can degrade when it must infer customer state from video instead of receiving an oracle state.

## Proactivity Signal

Before the customer asks for help, PIWM chooses `GREET`, `ELICIT`, `INFORM`, `RECOMMEND`, or `HOLD`. The explicit `HOLD` action lets the system avoid unnecessary engagement while modeling how each intervention may change customer intent.

## Evaluation Setup

GuidanceSalesBench combines state manifests, pre-interaction videos, candidate responses, action-conditioned outcomes, and best-action labels. PIWM reaches 0.641 macro F1 with oracle state on 30 target videos, but video-only selection falls to 0.295; a 20-video staged real-store pilot reaches 0.579.

## Key Limitations

The main test set and pilot are very small, customer behaviors are scripted, and the strongest result assumes oracle customer state. The five retail actions and AIDA-BDI representation may not generalize to less structured social settings.

## Use For

Use this for wait-versus-intervene policies, proactive retail agents, action-conditioned intent models, multimodal social intelligence, and diagnosing perception-to-policy bottlenecks.
