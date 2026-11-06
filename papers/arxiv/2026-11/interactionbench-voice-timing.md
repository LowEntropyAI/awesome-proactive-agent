# InteractionBench: Measuring Timing, Task Accuracy, Whisper and Volume, and Grounding in Real-Time Voice Systems

[Paper](https://arxiv.org/abs/2611.02430) · First posted 2026-11-02 · Checked 2026-11-06. Primary paper and available artifact listings reviewed; no rerun.

## Why It Matters

A proactive spoken assistant depends on holding, yielding and staying quiet in time. This benchmark measures that floor control on the same audio across systems.

## Proactivity Signal

Timing scenarios score turn-taking, pauses, backchannels, interruptions and staying quiet while a user thinks aloud. A small grammar-correction scenario asks the system to step in without a request.

## Evaluation Setup

221 items in thirteen scenarios are played as synthesized user audio to seven systems (GPT-Live, GPT-Realtime, Gemini Live, Moshi, PersonaPlex, Freeze-Omni and a cascade) for 1,519 graded runs. No system corrected a user’s grammar within the required window. Hosted systems pass 67–88% of groundedness probes against 14–35% for open full-duplex models.

## Key Limitations

TTS users, 10–30 items per scenario, and protocol settings that differ across systems without correction. The judge shares a model family with one evaluated system. Mostly reactive floor control. Not the InteractionBench for streaming video (arXiv 2610.05775).

## Use For

Checking floor-control prerequisites before testing spoken initiative.
