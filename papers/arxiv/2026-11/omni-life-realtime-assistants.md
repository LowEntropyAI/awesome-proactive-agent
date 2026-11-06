# Omni-Life: Benchmarking Omnimodal Real-Time AI Assistants in People's Daily Lives

[Paper](https://arxiv.org/abs/2611.02835) · First posted 2026-11-02 · Checked 2026-11-06. Primary paper and available artifact listings reviewed; no rerun.

## Why It Matters

Understanding audio and video is not the same as helping at the right moment. This benchmark scores whether real-time assistants step in, when, and when they should stay quiet.

## Proactivity Signal

Models receive live video and audio with no per-event request and must warn, inform, give feedback, answer or wait. 110 of the videos require silence throughout.

## Evaluation Setup

400 videos (277 generated, 123 annotated real-world) contain 555 intervention points and 685 silence intervals, streamed at 1 FPS with 16 kHz audio to 12 model configurations. At most 4.48% of videos that need assistance are handled completely correctly. Gemini reaches 78.25% content accuracy in turn-based QA but 3.42% streaming intervention recall. Four human annotators reach 53.10% full correctness. Task reminders raise recall by 17.12 points but add about 4.6 unwanted responses per silent minute.

## Key Limitations

Most clips are generated and may favor explicit events. Content is judged by an LLM against references, onset is measured at the client, and the human baseline has four annotators. Recorded replay, not live use.

## Use For

Measuring intervention recall against unwanted output on everyday omnimodal streams.
