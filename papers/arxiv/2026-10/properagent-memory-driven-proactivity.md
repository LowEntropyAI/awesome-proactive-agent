# MemoProAgent: Toward Memory-Driven Proactive Assistance

[Paper v2](https://arxiv.org/abs/2610.22671v2) · [Code](https://github.com/facebookresearch/Memo-Pro-Agent) · [Evaluation histories](https://huggingface.co/datasets/facebook/MemProBench) · Checked 2026-10-31. Review: method, evaluation and released artifacts; no experiments rerun.

Renamed from **ProPerAgent / ProPerMem** to **MemoProAgent / MemoProBench** in the October 21 revision. The stable note path is retained to avoid breaking existing links. The dataset repository identifier is spelled `facebook/MemProBench`.

## Why It Matters

Direct query-free assistance: long-term memory supplies the reason to interrupt, not merely the content of a requested answer.

## Proactivity Signal

A graph-memory retriever and intervention gate surface actionable evidence; generator post-training discourages premature and repeated reminders. Windowed and persistent streaming implementations are distinguished.

## Evaluation Setup

MemoProBench pairs video with controlled year-long memories averaging about 618K tokens. Strict content-and-timing accuracy reaches 37.5% without training and 42.4% after RL on the reported open-model setup.

## Key Limitations

Memories are synthesized and trigger windows curated. These scores are not longitudinal wearable deployment or interchangeable across execution paradigms. Running the public base-model harness does not reproduce the post-trained paper results.

## Use For

Use for memory-conditioned intervention, justified silence, and separating retrieval failures from timing failures.

Release recheck 2026-10-31: [source snapshot](https://github.com/facebookresearch/Memo-Pro-Agent/tree/8563e58d3106c8e0b3108bff64c04d00e1c8f095) provides inference, retrieval and evaluation code, plus an RL launcher/reward plugin. Code is **CC-BY-NC-4.0 (noncommercial)**, not an OSI-approved open-source license. The 800 evaluation histories are ungated in the Hugging Face API; a sample file HEAD request returned HTTP 200, despite stale private-access language in the upstream README. Ego4D source videos require separate authorized access and are not redistributed. Post-trained checkpoints and a complete paper-results reproduction recipe remain unverified. The latest arXiv version is still October 21 v2; this is an existing-record recheck, not a new paper.
