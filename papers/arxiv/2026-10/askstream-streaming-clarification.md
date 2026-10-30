# AskStream: When and What to Ask Proactively under Uncertainty in Streaming Video Understanding

[Paper](https://arxiv.org/abs/2610.38678) · [Code](https://github.com/wanglu-cs/AskStream) · [Dataset](https://huggingface.co/datasets/wanglucs/AskStream) · [Project](https://askstream.top/) · First posted 2026-10-28 · Checked 2026-10-31. Review: primary method/protocol and linked artifacts; no rerun.

## Why It Matters

Extends response timing to information seeking: an assistant can request missing evidence instead of waiting indefinitely or guessing.

## Proactivity Signal

At one decision per second, choose WAIT, ASK or ANSWER. Eight subtasks span missing visual evidence, personalized concepts, ambiguous premises and user preferences.

## Evaluation Setup

438 videos, 1,401 questions and 2,714 temporal annotations. Ask-F1 combines timing-weighted asking and answering scores; it is not conventional precision/recall F1. StreamHarness supplies hierarchical memory to offline models.

## Key Limitations

Each event begins with an explicit query and permits at most one ASK and one ANSWER. Only shared video memory persists between turns. This is controlled clarification, not query-free need discovery or unrestricted repeated dialogue.

## Use For

Streaming clarification and causal evaluation. Public evaluation/annotation code and ungated JSON/video data were verified; a sample JSON and MP4 returned HTTP 200. Native streaming adapters must be supplied by users. No new model checkpoint is claimed; no evaluation was rerun.
