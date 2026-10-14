# EgoVoice: Proactive Spoken Assistance from Egocentric Multimodal Streams

[Primary source](https://arxiv.org/abs/2610.12248) · Checked 2026-10-14 · EMNLP 2026 Main (per arXiv record). Review depth: abstract, method, evaluation, and limitations; no experiments rerun.

## Why It Matters

Direct proactive assistance: first-person video/audio determines whether to offer spoken procedural guidance without a fresh question.

## Proactivity Signal

MiniCPM-o 4.5 emits Listen/Speak decisions per second. LoRA SFT trains guidance and speech; DPO refines intervention timing.

## Evaluation Setup

HoloAssist-derived supervision provides 1,249 training and 170 held-out sessions. Delivered-speech onset F1 rises from 0.113 for the backbone to 0.324 for EgoVoice-DPO.

## Key Limitations

The model receives task/recipe context. Audio is separated/resynthesized; recorded sessions are not longitudinal AR deployment. Better onset timing does not eliminate long or late-ending speech.

## Use For

Use for end-to-end spoken initiative and speech-duration-aware evaluation. The official project schedules code, models, and data for November 2026; they are not verified released.
