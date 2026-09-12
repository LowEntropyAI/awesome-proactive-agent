# Em-Garde: A Propose-Match Framework for Proactive Streaming Video Understanding

## Why It Matters

Em-Garde moves expensive semantic reasoning out of the high-frequency streaming loop. It turns a standing user query into visual proposals once, then uses lightweight matching to monitor the live stream efficiently.

## Proactivity Signal

The agent continuously compares recent video against instruction-grounded proposals and triggers a response only when a relevant event appears. Between matches it keeps monitoring without answering.

## Evaluation Setup

The ECCV 2026 paper evaluates proactive response accuracy and efficiency on StreamingBench and OVO-Bench. Its proposal parser is initialized from Qwen2.5-VL-7B, while a 2B multimodal embedding model processes short video windows and activates the responder when similarity crosses a threshold.

## Key Limitations

The trigger set is derived from a standing query rather than an open-ended model of user needs. Threshold calibration, ambiguous events, and user-specific interruption cost remain outside the reported evaluation.

## Use For

Use this for efficient event-gated video assistants, semantic-query compilation, decoupled fast and slow perception, and comparing learned speak heads with retrieval-style triggers.
