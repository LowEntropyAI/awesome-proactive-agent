# Turns Matter: Advancing Streaming Video RL via Turn-Level Credit

[Paper](https://arxiv.org/abs/2611.06728) · First posted 2026-11-04 · Checked 2026-11-06. Primary paper and available artifact listings reviewed; no rerun.

## Why It Matters

Each respond-or-wait choice in a stream deserves its own credit; one trajectory-level reward can reinforce redundant replies after an early success.

## Proactivity Signal

At every turn the policy either replies or emits an explicit NO REPLY. Training credits each decision with the reward still available after it.

## Evaluation Setup

Qwen2.5-VL-3B and Qwen3-VL-4B are fine-tuned on about 100,874 examples, then trained with RL on 3,983 streaming instances, and evaluated on ProactiveVQA, OVO-Bench timing and StreamingBench. The 3B model scores 43.56 on ProactiveVQA against 39.60 for MMDuet2; the 4B model reaches 38.40 StreamingBench proactive accuracy against 35.60 for the strongest baseline.

## Key Limitations

LLM judges supply both the training reward and the ProactiveVQA score. Small backbones, ablations only at 3B, offline benchmarks and no user study; the paper has no limitations section.

## Use For

Credit assignment for respond-versus-wait decisions in streaming RL.
