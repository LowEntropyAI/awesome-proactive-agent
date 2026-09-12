# Ambient @ EgoProactive 2026: Proactive Egocentric Assistance with Visually Grounded Supervision

## Why It Matters

Ambient is a competition-tested recipe for imbalanced intervention timing in wearable video. It shows that a one-token decision interface and visually grounded synthetic supervision can outperform free-form interrupt-or-silent generation.

## Proactivity Signal

After every roughly eight-second egocentric-video segment, the assistant chooses whether to intervene or remain silent. The decision is taken from renormalized yes/no token probabilities, creating a tunable operating point without a decoding loop.

## Evaluation Setup

The system won the large-model division and placed second in the at-most-2B division of the ECCV 2026 EgoProactive track. The report evaluates macro-F1 and per-class geometric mean, uses a 700-video released set with a held-out split plus 140 cross-domain HoloAssist videos, and reports a 0.249 macro-F1 gain over free-form generation.

## Key Limitations

The official task scores only the binary timing choice, so generated assistance content is templated rather than evaluated. Limited labels, competition-specific eight-second chunks, and sensitivity to boundary placement constrain conclusions about open-world wearable deployment.

## Use For

Use this for class-imbalanced interrupt-versus-silence training, calibrated trigger thresholds, visual-data annotation pipelines, small-model deployment, and EgoProactive baselines.
