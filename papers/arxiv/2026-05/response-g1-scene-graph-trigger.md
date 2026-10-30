# Response-G1: Explicit Scene Graph Modeling for Proactive Streaming Video Understanding

[Paper](https://arxiv.org/abs/2605.07575) · [ACL 2026 long paper](https://aclanthology.org/2026.acl-long.2042/) · [Code](https://github.com/PolyX-Research/Response-G1). Venue verified against ACL Anthology on 2026-10-31; original arXiv identity retained.

## Why It Matters

Makes the evidence supporting response timing explicit through scene graphs.

## Proactivity Signal

Query-guided graph generation, historical graph retrieval, and trigger prompting produce per-frame silence/response decisions.

## Evaluation Setup

The fine-tuning-free framework is evaluated on proactive and reactive streaming tasks. Official scripts cover StreamingBench and OVO-Bench.

## Key Limitations

This is an inference framework using existing backbones. Graph extraction/retrieval costs belong in latency accounting; query-conditioned response timing does not establish unsolicited assistance.

## Use For

Structured streaming evidence, interpretable triggers, and graph-memory ablations.
