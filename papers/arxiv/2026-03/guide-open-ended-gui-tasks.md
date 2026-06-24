# GUIDE: A Benchmark for Understanding and Assisting Users in Open-Ended GUI Tasks

## Why It Matters

GUIDE shifts GUI-agent evaluation from command execution toward understanding what users are doing, why they are doing it, and whether assistance would be useful.

## Proactivity Signal

The benchmark includes help prediction: models must decide whether the current GUI workflow state calls for assistance before the user issues a direct request.

## Evaluation Setup

GUIDE uses open-ended GUI workflow videos with think-aloud narration across multiple software applications, and evaluates behavior state detection, intent prediction, and help prediction.

## Key Limitations

It is an offline video benchmark rather than a closed-loop assistant environment, so it does not directly test interruption recovery, user consent, or downstream task completion after an intervention.

## Use For

Use this for GUI user-understanding benchmarks, multimodal intent inference, and assistance-timing evaluation in complex desktop software workflows.
