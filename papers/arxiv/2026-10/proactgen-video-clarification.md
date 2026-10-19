# ProactGen: Learning Proactive Clarification for Video Generation

[Primary source](https://arxiv.org/abs/2610.22608) · Checked 2026-10-19 · arXiv 2610. Review depth: abstract and arXiv metadata; no experiments rerun.

## Why It Matters

Adjacent active clarification: automatic prompt rewriting cannot recover preferences absent from the user's description.

## Proactivity Signal

An RL-trained VLM observes a prompt and inexpensive video draft, then asks questions rewarded by alignment of the final generation with a target reference.

## Evaluation Setup

The abstract reports stronger target alignment than direct generation and iterative-refinement baselines, using low-denoising-step drafts to reduce interaction overhead.

## Key Limitations

Reference-video alignment is a limited intent proxy. The work does not establish real-user utility, always-on initiative, or streaming video assistance.

## Use For

Use for draft-grounded question policies and clarification cost in generative workflows.
