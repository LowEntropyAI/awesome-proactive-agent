# SurgStream: A Workflow-Anchored Proactive Streaming Framework and Benchmark for Real-Time Surgical Video Understanding

[Paper](https://arxiv.org/abs/2611.01982) · First posted 2026-11-01 · Checked 2026-11-06. Primary paper and available artifact listings reviewed; no rerun.

## Why It Matters

Intraoperative help is only useful before the clinical moment passes, so the model has to decide when to speak as well as what to say.

## Proactivity Signal

At each step the model chooses silence, standby, a response, an observation record or a phase summary. It raises phase-transition alerts and preparation reminders inside a window before the next phase.

## Evaluation Setup

SurgStream-Bench converts Cholec80 and CholecT50 expert annotations into 11,667 streaming interactions over 85 cholecystectomy procedures, 1,893 of them forward answers or proactive alerts. Scoring uses exact vocabulary matching rather than an LLM judge. Built on OneStreamer-4B (Qwen3-VL-4B with LoRA), SurgStream averages 42.64% across temporal modes against 36.64% for fine-tuned OneStreamer; every zero-shot model scores below 3% on forward answers and alerts.

## Key Limitations

One procedure type from two related datasets, replayed offline. Interactions are derived from labels, and no clinician judged the alerts. Alert scores stay low in absolute terms, and forward answers time a question asked earlier. This is a separate paper from SurgStreamer (October).

## Use For

Deadline-windowed timing supervision and memory for procedure-anchored alerts.
