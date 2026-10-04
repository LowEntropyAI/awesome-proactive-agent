# HiThink Turn: An Intent-Aware Turn-Taking Control Module for Full-Duplex Dialogue

## Why It Matters

HiThink Turn argues that end-of-turn detection alone cannot decide whether a voice agent should interrupt, wait, or resume: a complete utterance may need no answer, while an unfinished request may already reveal response intent.

## Proactivity Signal

The module separates response intent from semantic completeness and conditions its streaming decision on whether the system is currently speaking, enabling selective interruption and playback resumption.

## Evaluation Setup

The model is trained with minimal intent-sufficient prefixes and audio truncated at chunk boundaries, then runs on 240-ms chunks. It reports the best compared Easy Turn macro accuracy, a 0.933 average interaction-rate score on Full-Duplex-Bench, a 0.735 non-target-speech resume rate, and raises interruption success from 89% to 98% while reducing mean stop latency by 60.9%.

## Key Limitations

The work targets turn control rather than deciding whether unsolicited content would help the user. Its evaluation emphasizes benchmark interaction signals rather than long-term disruption, personalization, or task outcomes.

## Use For

Use this for full-duplex voice control, intent-aware interruption, active listening, low-latency turn-taking, and separating conversational floor state from response need.
