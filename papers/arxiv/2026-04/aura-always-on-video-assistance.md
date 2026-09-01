# AURA: Always-On Understanding and Real-Time Assistance via Video Streams

## Why It Matters

AURA is an important missed bridge between streaming video understanding and an end-to-end always-on assistant. It unifies continuous observation, reactive question answering, proactive responses, context management, and real-time deployment in one VideoLLM framework.

## Proactivity Signal

The model continuously processes live video and may emit assistance when an event warrants it or produce a dedicated silent action when no response is needed, while remaining available for user-initiated questions.

## Evaluation Setup

The paper combines streaming data construction, training objectives, long-context management, and inference optimization. It reports 73.1 on StreamingBench, 65.3 on OVO-Bench, and 25.4 on OmniMMI, and demonstrates a 2 FPS ASR/TTS system on two 80 GB accelerators with released model and inference code.

## Key Limitations

The real-time demo requires substantial hardware, and benchmark scores do not establish user-level helpfulness, interruption cost, privacy, or long-horizon robustness in everyday deployments. The exact proactive trigger distribution is inherited from constructed training and benchmark data.

## Use For

Use this for end-to-end streaming assistants, explicit silence tokens, joint reactive/proactive video interaction, real-time system design, and baselines that avoid a fully decoupled trigger–response pipeline.
