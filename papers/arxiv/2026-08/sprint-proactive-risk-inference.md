# From Sports to Safety: Benchmarking Proactive Risk Inference in MLLMs

## Why It Matters

SPRINT tests whether an MLLM can warn about a physical hazard before it materializes, rather than merely recognize an accident afterward. Safe-control videos make false alarms a first-class part of proactive safety evaluation.

## Proactivity Signal

From a partial video stream and without an explicit danger-detection instruction, the model is expected to issue an early warning and identify the emerging cause. It must distinguish intervention-worthy trajectories from safe activity instead of warning indiscriminately.

## Evaluation Setup

SPRINT contains 2,888 real sports videos: 2,440 accident clips and 448 verified safe controls across 14 sports and three environments. It evaluates hazard detection, factor coverage, cause identification, early-warning timing, prompt sensitivity, and false alarms; leading models show high hazard sensitivity but below-50% cause identification.

## Key Limitations

The clips average only several seconds and are restricted to sports, so results do not establish reliable monitoring in longer, noisier daily environments. The benchmark evaluates warning inference rather than an end-to-end agent with calibrated delivery, escalation, or user-response policies.

## Use For

Use this for proactive visual safety, early-warning benchmarks, false-trigger analysis, cause-grounded alerts, and evaluating whether multimodal models act before rather than after a hazard.
