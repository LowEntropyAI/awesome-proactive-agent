# StreamOV: Streaming Omni-Video Understanding via Evidence-Guided Memory and Response Triggering

[Paper](https://arxiv.org/abs/2605.25621)

## Why It Matters

Combines bounded audio-visual memory with an explicit response-timing mechanism.

## Proactivity Signal

A hidden-state trigger responds when queried evidence appears and remains silent when it is absent.

## Evaluation Setup

SOVBench-O evaluates multi-turn omni-video comprehension; SOVBench-T evaluates positive/negative triggering with precision, recall, and F1. The method uses evidence-guided long/short-term memory.

## Key Limitations

Standing-query triggers do not establish arbitrary need discovery. This curation verified the paper but did not identify a canonical public code/checkpoint release.

## Use For

Bounded streaming memory, hidden-state response gates, and absent-evidence silence testing.
