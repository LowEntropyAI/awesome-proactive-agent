# Jarvis: A Proactive Speech Agent for Multi-Party Conversations

[Primary source](https://arxiv.org/abs/2610.07506) · Checked 2026-10-08 · arXiv preprint. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

A meeting assistant should contribute missing evidence without interrupting a group that is already correcting itself.

## Proactivity Signal

Jarvis grounds contributions in shared documents, monitors omissions or misstatements, waits for possible self-correction over subsequent turns, and uses deterministic checks and source citations.

## Evaluation Setup

CHI-180-proactive contains synthetic gaps, errors, and self-corrections. The abstract reports silence in 97% of self-resolved cases and a live study with 23 participants.

## Key Limitations

The benchmark name does not imply CHI acceptance. Synthetic opportunities and a small live study do not establish performance across arbitrary meetings, speakers, or document collections.

## Use For

Use for group-level intervention timing, self-correction negatives, grounding, and usefulness-versus-disruption evaluation.

