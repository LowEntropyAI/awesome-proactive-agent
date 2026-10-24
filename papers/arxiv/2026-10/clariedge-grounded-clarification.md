# A Small Model Asks Better: Fine-Tuning Query Clarification for Retrieval-Augmented Generation

[Paper](https://arxiv.org/abs/2610.28686) · [Announced dataset](https://huggingface.co/datasets/ibm-research/ClariEdge) · First posted 2026-10-19 · Checked 2026-10-24.

## Why It Matters

Adjacent active clarification: retrieved evidence can reveal multiple plausible interpretations even when a query initially looks well formed.

## Proactivity Signal

A lightweight LoRA learns whether clarification is necessary and generates one targeted question. Hard negatives teach it not to ask when conversational context already resolves the ambiguity.

## Evaluation Setup

ClariEdge contains approximately 3,900 examples, spanning pre- and post-retrieval settings. The paper reports 96.6% classification accuracy and assesses clarification quality against prompted baselines.

## Key Limitations

English-only, single-question evaluation does not establish iterative clarification or autonomous task initiation. Generation quality on detected positives should be distinguished from overall pipeline performance.

## Use For

Selective clarification in RAG. The announced Hugging Face dataset API returned HTTP 401 without credentials; public file availability was not verified. Neither trained LoRA weights nor a complete code release was verified.
