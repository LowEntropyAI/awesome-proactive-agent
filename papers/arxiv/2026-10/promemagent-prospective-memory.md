# ProMemAgent: Long-Horizon Proactive Assistance with Context-Aware Prospective Memory from Sensory Perceptions

[Paper](https://arxiv.org/abs/2610.27400) · First posted 2026-10-19 · Checked 2026-10-24. Review: method, evaluation and limitations; no rerun.

## Why It Matters

Direct proactive assistance for delayed intentions: an earlier event can create a need that becomes actionable hours or days later.

## Proactivity Signal

Video/audio are converted into textual sensory contexts. Event- and time-based prospective cues link past events to later developments; cue-triggered retrieval supports a decision to help or abstain in the current context.

## Evaluation Setup

CPMBench contains 1,000 instances across eight everyday categories. Comparisons with 19 baselines examine memory retrieval and long-horizon assistance; an omni variant associates events with sensory clips.

## Key Limitations

Evaluation uses sequences of discrete contexts, not an end-to-end continuous wearable stream. Event segmentation and continuous in-the-wild operation remain untested; textual conversion can lose multimodal details.

## Use For

Prospective-memory retrieval and delayed-need reasoning. Do not label it a newly trained native streaming model. Public implementation, model weights and benchmark downloads were not verified in the inspected primary source.
