# When Should AI Chime In? Benchmarking Timely Contribution of Proactive Agents in Multi-Party Chat

[Paper](https://arxiv.org/abs/2610.25896) · First posted 2026-10-19 · Checked 2026-10-24 against v2. Review: task, human protocol and limitations; no rerun.

## Why It Matters

PITCH tests whether a relevant contribution is also timely, using judgments from the people who actually participated in the conversation.

## Proactivity Signal

Given a fixed candidate message, choose when to intervene or withhold it. Turn-by-turn replay prevents the model from choosing a placement using future conversation.

## Evaluation Setup

89 participants produced 35 conversations, 384 candidate contributions and 1,091 judgments. Labels preserve ideal turns, acceptable windows and rejection. Fifteen models across 28 configurations are compared; live placement is substantially harder than full-transcript placement.

## Key Limitations

Candidate content is supplied, so this does not jointly evaluate discovering what to contribute. It concerns multiparty text chat, not native streaming speech or video. Legitimate timing preferences can disagree.

## Use For

Human-grounded intervention timing, premature contributions and abstention. Public code or dataset files were not verified from the inspected paper links.
