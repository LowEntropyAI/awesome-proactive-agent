# Foresight: planning future perception in streaming VLMs without retraining

[Primary source](https://arxiv.org/abs/2610.03123) · Checked 2026-10-08 · arXiv preprint. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

Streaming assistants must allocate perception and reasoning before the next useful event, not only answer accurately after observing it.

## Proactivity Signal

FORESIGHT runs a second planning stream alongside a streaming VLM, sharing weights, encoders, and KV state. It anticipates when to reason, what to inspect, and how densely to sample.

## Evaluation Setup

The abstract reports evaluation with a frozen Qwen3-VL-8B on OmniPro-Online, StreamingBench, and OVO-Bench, including a joint F1 of 23.0 on OmniPro-Online.

## Key Limitations

This is anticipatory inference scheduling, not by itself independent discovery of user needs. The abstract promises a future code release; this entry does not establish an available implementation or cross-backbone robustness.

## Use For

Use for compute scheduling and active perception as supporting infrastructure; compare user-visible triggers separately.

