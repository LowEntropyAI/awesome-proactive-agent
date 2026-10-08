# PERSIST: Who-What-When Memory Across Sessions for Full-Duplex Spoken Dialogue

[Primary source](https://arxiv.org/abs/2610.07725) · Checked 2026-10-08 · arXiv preprint. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

A shared voice assistant must distinguish who said something and whether it remains current, without adding a long retrieval delay.

## Proactivity Signal

PERSIST stores readable cross-session events and jointly scores semantic content, acoustic speaker identity, and temporal state. It reuses dialogue-backbone representations instead of re-encoding query audio.

## Evaluation Setup

SpokenTrace factorizes memory tasks and speaker-query types. The abstract reports 85.08% end-to-end accuracy and a retrieval-latency change from 578.42 ms to 7.03 ms in its setup.

## Key Limitations

Retrieval latency is not end-to-end speech latency. Accurate recalled answers are supporting capability, not evidence of deciding when to speak first or interrupt.

## Use For

Use for speaker-aware temporal memory, stale-state diagnostics, and low-latency full-duplex memory interfaces.

