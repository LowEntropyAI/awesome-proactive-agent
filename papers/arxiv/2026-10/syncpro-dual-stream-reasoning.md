# SyncPro: Synchronous Reasoning and Responding for Proactive Streaming Video Understanding

[Paper](https://arxiv.org/abs/2610.32132) · [Code](https://github.com/Eureka-Maggie/SyncPro) · [Model](https://huggingface.co/EurekaTian/SyncPro-RL) · [Dataset](https://huggingface.co/datasets/EurekaTian/SyncPro-189k) · [Project](https://eureka-maggie.github.io/SyncPro/) · First posted 2026-10-23 · Checked 2026-10-31. Review: primary method/protocol and linked artifacts; no rerun.

## Why It Matters

Separates maintaining evidence from speaking to a user, addressing latency and unnecessary reasoning updates.

## Proactivity Signal

Inner and Response branches share causal history but activate independently and can decode concurrently. Qwen3.5-4B is trained with dual-stream SFT and trajectory-level RL.

## Evaluation Setup

189,403 SFT trajectories; reported proactive comparisons cover StreamingBench-PO, OVO-FAR and ProactiveVideoQA. Timing-only, joint content/timing and window-integrated scores measure different outcomes. Controlled SyncPro runs use 1 FPS.

## Key Limitations

The user supplies a response condition: this is evidence-conditioned timing, not unrestricted discovery of personal needs. Some external baselines use different frame rates/protocols; the paper also reports modest general-video regressions versus its base model.

## Use For

Dual-path streaming implementation. Public source includes training/inference/evaluation files; ungated SFT and RL repositories contain weight shards. Data release is SFT annotations only, excluding source media and RL annotations. Artifact access was checked, not installation or reproduction.
