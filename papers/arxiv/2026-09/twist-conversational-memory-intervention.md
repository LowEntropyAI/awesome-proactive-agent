# TWIST: A Proposed Benchmark for Intervention Quality in Conversational Memory, with a Human-Validated Draft-Alignment

## Why It Matters

TWIST asks whether conversational memory knows when remembered information should change an action. It evaluates intervention quality at belief-change points rather than rewarding recall alone.

## Proactivity Signal

The memory system must detect unprompted tension, block or flag drafts that contradict the record, respect belief supersession, and avoid surfacing sensitive memories when intervention is unwarranted.

## Evaluation Setup

Four proposed tracks pair every detection or blocking case with surface-matched hard negatives. The human-validated Track B v1.0 contains 161 post-adjudication items with kappa 0.85; baseline systems show a sharp trade-off between contradiction recall, specificity, and attribution.

## Key Limitations

Only one track currently has the reported human-validated key, and the paper presents a proposed suite rather than a mature, broadly replicated benchmark. Results depend on the selected memory back ends and draft-verification setting.

## Use For

Use this for memory-triggered intervention, belief revision, contradiction detection, hard-negative controls, sensitive recall governance, and testing when memory should remain silent.
