# ProactEgoMem: Benchmarking Proactive Memory in Streaming Egocentric Video

[Paper](https://arxiv.org/abs/2610.30089) · [Project](https://proactegomem.github.io/) · [Code](https://github.com/mayhugotong/ProactEgoMem) · [Data](https://huggingface.co/datasets/Meikel/ProactEgoMem) · First posted 2026-10-21 · Checked 2026-10-24.

## Why It Matters

Evaluates query-free ambient assistance: noticing information worth preserving, tracking object states and remembering locations.

## Proactivity Signal

Notification mode chooses a useful message or silence; intervention mode starts and stops memory-maintenance tools. A task-level standing policy is supplied, but no per-event question tells the model when to act.

## Evaluation Setup

Daily/science tracks contain 300/100 clips and 1,000/500 downstream memory questions. The protocol simulates streaming with one request per second, the latest ten frames and bounded structured history. Timing, semantic matching and memory QA are distinct measures.

## Key Limitations

This is a benchmark, not a new streaming backbone. Repeated windowed calls differ from persistent native streaming. The release's 50 annotated dev clips overlap the 400-clip test set; tuning on them risks leakage.

## Use For

Evaluating notification versus sustained intervention. Code, clip metadata and partial annotations are public; test labels are withheld, and source videos require separate upstream access. No new model weights are claimed.
