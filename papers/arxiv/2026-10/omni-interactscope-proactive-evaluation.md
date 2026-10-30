# Omni-InteractScope: Benchmarking Proactive and Agentic Interaction in Continuous Omnimodal Streams

[Paper](https://arxiv.org/abs/2610.35439) · [Code](https://github.com/YinsongYan/Omni-InteractScope) · [Dataset](https://huggingface.co/datasets/Darden7/Omni-InteractScope) · [Project](https://yinsongyan.github.io/Omni-InteractScope/) · First posted 2026-10-26 · Checked 2026-10-31. Review: primary method/protocol and linked artifacts; no rerun.

## Why It Matters

Connects audiovisual evidence to timely action and sustained assistance, rather than isolated streaming answers.

## Proactivity Signal

Eight task groups include event-timed tool invocation, reminders under general user needs, warnings, state tracking and guidance. Report query-free assistance separately from explicit-question and broader interaction tasks.

## Evaluation Setup

1,479 human-annotated interactions with 1,790 temporal targets, evaluated across 12 models. Joint timing/tool accuracy, timely target recall and full-sequence coverage expose failures hidden by per-step accuracy.

## Key Limitations

Tool invocation scores need controls for whether the event actually caused the action. Reminder coverage depends on response history and frequency; explicit-question and query-free target sets differ. Small guidance subsets and recorded streams limit deployment conclusions.

## Use For

Timing-aware tool use and end-to-end guidance evaluation. Official source contains evaluation configurations and code; the ungated dataset lists annotations, media and caches. Resource presence was checked, not successful inference or paper-score reproduction.
