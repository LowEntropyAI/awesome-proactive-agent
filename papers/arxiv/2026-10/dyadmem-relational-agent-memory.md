# DyadMem: A Long-Term Memory Benchmark of How Agents Work with Users

[Primary source](https://arxiv.org/abs/2610.03020) · Checked 2026-10-08 · arXiv preprint. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

Remembering a user's facts is insufficient if the agent forgets how this particular relationship should operate.

## Proactivity Signal

DyadMem defines user-conditioned relational agent memory alongside user-side memory, supervising capture, update, recall, and answering rather than only final QA.

## Evaluation Setup

The abstract describes 3,065 episodes, 50,961 sessions, 61,210 QA instances, six memory categories, and evaluation of 16 open-weight and four proprietary models under Gold-Memory and Full-Pipeline settings.

## Key Limitations

The gold-memory versus pipeline gap diagnoses memory stages but does not itself demonstrate better unsolicited assistance. Unsafe deletion and incomplete capture need separate reporting.

## Use For

Use for relationship-specific memory, update correctness, and component-level evaluation of a proactive agent's substrate.

