# APM-Bench: Benchmarking Cross-session Persistent Memory for Egocentric Streaming Video Assistants

[Primary source](https://arxiv.org/abs/2609.37559v2) · Checked 2026-10-14. October 12 v2 retains the abstract's 549 sessions, 104 trajectories, and 2,719 candidates; no venue acceptance is newly stated. This is a revision of an existing benchmark, not a new streaming model.

## Why It Matters

APM-Bench extends streaming assistance across interrupted sessions, where useful evidence may have appeared earlier and persistent memory must decide what to retain, when to inject it, and when to admit that evidence is missing.

## Proactivity Signal

The assistant uses cross-session memory to provide timely responses in a live stream while recognizing when finite storage has discarded the evidence needed to help reliably.

## Evaluation Setup

The benchmark contains 549 sessions, 104 multi-session trajectories, and 2,719 candidates spanning objective and open-ended questions. General video models and specialized streaming-memory systems are compared under multiple memory protocols, revealing a utility-latency-storage trade-off.

## Key Limitations

The benchmark centers memory availability and response support more than autonomous need discovery. Its scale and constructed trajectories may not capture months-long personal histories, privacy constraints, or user-specific relevance.

## Use For

Use this for cross-session video memory, persistent assistant state, memory injection timing, missing-evidence awareness, and utility-latency-storage analysis.
