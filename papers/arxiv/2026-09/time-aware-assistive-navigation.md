# Time-Aware Assistive Navigation

## Why It Matters

This ICRA 2026 paper grounds response timing in a safety-critical assistive setting: guiding blind users through dynamic outdoor environments. It makes silence, concision, and correctly timed instructions part of navigation quality rather than treating them as interface details.

## Proactivity Signal

TIMELI repeatedly decides whether to issue a navigation instruction or remain silent. A dedicated timing head can early-exit when no instruction is needed, while supervised reason labels distinguish hazards, turns, junction entry and exit, and safe silence.

## Evaluation Setup

TIMELI contains 67,000 navigation videos, with 79.1% silent steps and 20.9% spoken instructions. Models are evaluated in open-loop video, closed-loop CARLA, and sim-to-real settings using timing F1/AUC, BLEU-4, ROUGE-L, conciseness, task success, route completion, collisions, instruction rate, and a composite Navigation Quality Score.

## Key Limitations

Most training data are generated in simulation, and the paper reports a transfer gap on real videos. Current video MLLMs still struggle with long inputs, spatial relations, distance, safety-critical objects, and the combined timing-content decision.

## Use For

Use this for accessibility-aware proactive agents, safety-sensitive speak-versus-silence policies, closed-loop evaluation, reason-supervised timing heads, and instruction-frequency calibration.
