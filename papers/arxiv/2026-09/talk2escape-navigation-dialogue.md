# Talk2Escape: Conversational Grounding for Vision-and-Language Navigation

[Paper](https://arxiv.org/abs/2609.28296) · [Project](https://zeruili22.github.io/talk2escape/) · First posted 2026-09-23 · Checked 2026-11-01. Review: primary method/protocol and linked artifacts; no rerun.

## Why It Matters

Treats when to ask as a runtime decision driven by observed failure signals, and shows that the choice of trigger changes outcomes.

## Proactivity Signal

A kinematic monitor fires when a spot is revisited at least 3 times or when the moving average of distance-to-goal rises. A translator then writes a grounded query from the current views, and an oracle or human supplies a hint for re-planning.

## Evaluation Setup

Sampled R2R-CE (100 episodes) and RxR-CE (260 episodes) plus VLNVerse, using NE, OSR, SR, SPL and nDTW. Repeat, Deviation, Hybrid, Periodic and human-polled triggers are compared by success and intervention rate. A Unitree Go2 run reports 62% against 40% success for the base agent.

## Key Limitations

The oracle and deviation trigger use goal information that a real deployment may lack. Query cost is reported only as intervention counts. The abstract cites 66.0% on R2R-CE while Table I lists 72.0%. Real-robot trial counts are not reported, and recovery detours lower efficiency on RxR-CE.

## Use For

Adjacent reference for agent-initiated help-seeking under failure. It does not offer help to a person. The venue comes from the arXiv comment and nothing was reproduced.
