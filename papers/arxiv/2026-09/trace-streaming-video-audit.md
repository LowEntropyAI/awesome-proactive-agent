# TRACE: Temporal Audit and Condition-aware Evaluation of Streaming Video Understanding

## Why It Matters

TRACE shows that similar streaming-video QA scores can hide very different completion rates, response validity, latency, false alarms, and processing costs. It makes the execution conditions behind proactive performance explicit.

## Proactivity Signal

A streaming system must decide whether a valid answer window has opened and emit a response without firing before sufficient evidence or missing the window entirely.

## Evaluation Setup

TRACE contains 1,240 records from 517 videos with audited evidence timing and instruction-dependent triggers. Eight models or systems are tested in eight configurations using a causal Core--Adapter protocol that records history processing, response events, answer quality, delay, false alarms, missed windows, workload, completion, and reliability.

## Key Limitations

The benchmark audits system behavior under defined video tasks rather than measuring personalized usefulness or interruption cost with live users. Its trigger annotations also depend on the chosen instruction and evidence-validity protocol.

## Use For

Use this for streaming-video evaluation, trigger-window auditing, response-selection metrics, workload-aware comparisons, and separating proactive timing from ordinary QA accuracy.
