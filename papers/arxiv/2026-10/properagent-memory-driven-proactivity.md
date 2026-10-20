# ProPerAgent: Toward Memory-Driven Proactive Assistance

[Primary source](https://arxiv.org/abs/2610.22671) · Checked 2026-10-19 · arXiv 2610. Review depth: abstract and selected method, evaluation, and limitations sections; no experiments rerun.

## Why It Matters

Direct query-free assistance: long-term memory supplies the reason to interrupt, not merely the content of a requested answer.

## Proactivity Signal

A graph-memory retriever and intervention gate surface actionable evidence; generator post-training discourages premature and repeated reminders. Windowed and persistent streaming implementations are distinguished.

## Evaluation Setup

ProPerMem pairs video with controlled year-long memories averaging about 618K tokens. Strict content-and-timing accuracy reaches 37.5% without training and 42.4% after RL on the reported open-model setup.

## Key Limitations

Memories are synthesized and trigger windows curated. These scores are not longitudinal wearable deployment or interchangeable across execution paradigms. Code and evaluation-set release are promised upon publication.

## Use For

Use for memory-conditioned intervention, justified silence, and separating retrieval failures from timing failures.

Release recheck 2026-10-21: the [paper](https://arxiv.org/html/2610.22671v1) still promises ProPerAgent code and the ProPerMem evaluation set upon publication. No linked public code, trained checkpoint or evaluation-set release was verified. An open base model does not establish release of this work's trained policy.
