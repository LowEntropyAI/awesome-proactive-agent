# OneStreamer: Unifying Perception, Memory, and Proactive Response in Streaming Video Interaction

[Paper](https://arxiv.org/abs/2610.01762) · [Code](https://github.com/MCG-NJU/OneStreamer) · [Model card](https://huggingface.co/MCG-NJU/OneStreamer-4B) · [Dataset](https://huggingface.co/datasets/MCG-NJU/OneStreamer-1M)

Release check (2026-10-04): the [Hugging Face file index](https://huggingface.co/MCG-NJU/OneStreamer-4B/tree/main) publicly lists ungated weight files. The upstream README still says public access pending, so its availability marker appears stale. Inference was not tested here.

## Why It Matters

OneStreamer unifies online perception, query-independent memory formation, and timely response instead of treating past-video storage and answering as separate systems.

## Proactivity Signal

The model continuously records reusable, time-grounded captions and changes output state from waiting to responding when sufficient evidence becomes available.

## Evaluation Setup

Proactive Hierarchical Caption Memory stores local details and completed-event summaries, while Proactive State Transition Learning preserves supervision around state changes using 27.5% of annotated state tokens. Training combines OneStreamer-1M with cleaned open-source data; the 4B model reports the best compared results across eight streaming-video benchmarks.

## Key Limitations

The reported benchmarks emphasize streaming understanding and answer timing rather than personalized interruption cost or independent need discovery. Generated caption memory can preserve mistakes and remains bounded by the synthesis pipeline's coverage.

## Use For

Use this for streaming-video assistants, proactive response timing, caption-based long-term memory, efficient wait-state supervision, and joint perception-memory-response training.
