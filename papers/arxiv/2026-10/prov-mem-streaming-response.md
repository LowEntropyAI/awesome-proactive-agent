# ProV-Mem: Proactive Memory for Streaming Video Question Answering

[Paper](https://arxiv.org/abs/2610.23998) · First posted 2026-10-15 · Backfilled 2026-10-24. Review: method, prompts and evaluation; no rerun.

## Why It Matters

Explicitly controls whether and when a streaming system emits a response, rather than treating every generated description as a useful intervention.

## Proactivity Signal

Three memory tiers separate temporal triggering, fixed instructional guidance and duplicate suppression around a frozen VLM. A silence-recovery mechanism avoids indefinitely missing events.

## Evaluation Setup

Four ProactiveVideoQA scenarios are evaluated using PAUC and a proposed cost-aware CAUC that penalizes redundant, frequent or lengthy emissions. This is a training-free framework, not a new backbone checkpoint.

## Key Limitations

Benchmark response/emission control does not establish autonomous personal-need discovery. The theoretical approximation relies on conditional-sufficiency assumptions; per-response inference latency is not end-to-end intervention delay.

## Use For

Trigger scheduling, response redundancy and communication-cost evaluation. A public implementation or new dataset release was not verified from the paper's links. Not to be confused with MemoProAgent or ProMemAgent.
