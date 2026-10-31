# Beyond Reactive Assistance: PV-Care Using Low-Density EEG and AI to Provide Proactive, Context-Aware Help for MCI

[Paper](https://arxiv.org/abs/2609.22024) · [Code](https://github.com/Simon-0523/PV_Care_Assistant-LLM-Agent) · First posted 2026-09-18 · Checked 2026-11-01. Review: primary method/protocol and linked artifacts; no rerun.

## Why It Matters

Uses a physiological signal rather than a request or screen event to decide when to offer help, in a care setting where a user may not be able to ask.

## Proactivity Signal

SFR-Net classifies Resting, Learning and Memory Recall from 4-channel EEG in 4-second windows. Learning and Memory Recall trigger voice help; Resting triggers none, to avoid disturbance. Without a reply, the system retries up to three times, then waits for the next trigger.

## Evaluation Setup

SFR-Net reaches 0.804 accuracy under 5-fold cross-validation on a 30-subject dataset. Twenty participants with MoCA scores of 18-25 rated the prototype on two simulated tasks. Ten healthy participants rated 50 generated conversations from a beverage scenario.

## Key Limitations

EEG validation used healthy participants, not MCI patients. Scenarios were simulated with no field trial, and objective usability measures such as task completion were not evaluated. Ratings are subjective. The paper reports the MoCA mean inconsistently (22 and 23).

## Use For

A reference for sensor-triggered intervention with an explicit silent state. It does not establish clinical benefit. Repository listings were checked on 2026-11-01; nothing was run.
