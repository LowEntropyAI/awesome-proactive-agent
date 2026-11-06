# When to Ask, When to Answer: Strategic Clarification for Ambiguous Reference Resolution in Dialogue

[Paper](https://arxiv.org/abs/2611.05517) · First posted 2026-11-03 · Checked 2026-11-06. Primary paper and available artifact listings reviewed; no rerun.

## Why It Matters

LLMs tend to answer ambiguous references too early. A controlled reference game isolates the decision to stop asking.

## Proactivity Signal

Each turn the policy either asks about one attribute at a small cost or answers with an object. It should ask only while a question can still narrow the candidates.

## Evaluation Setup

An environment built from SIMMC 2.1 shopping dialogues (2,483 devtest episodes) with a scripted user who always answers exactly. Untrained Qwen2.5-7B asks on 51.9% of episodes that need no question and skips 73.9% of ambiguous ones. BACE reaches 0.940 reward against 0.938 for SFT and 0.881 for GRPO; on episodes needing three questions it succeeds 0.562 of the time against 0.250 for GRPO.

## Key Limitations

Text-only, one dataset, a candidate list handed to the policy and a scripted user. Over 99% of learned decisions follow one rule (ask while more than one candidate remains), and SFT comes within 0.002 reward.

## Use For

A controlled testbed for when to stop asking.
