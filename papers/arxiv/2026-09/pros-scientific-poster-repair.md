# Beyond Instruction-Driven Editing: Source-Grounded Problem Discovery with User-Governed Repair for Scientific Posters

## Why It Matters

PROS separates epistemic initiative from behavioral authority. The system can discover problems that the user has not yet formulated as edit instructions, but only the user can promote a diagnosis into a repair goal and approve the resulting artifact change.

## Proactivity Signal

In the diagnosis path, PROS surfaces localized, source-linked structural, scientific, and spatial issues without receiving a concrete edit request. Accepted issues trigger native-object PPTX repair, reversible preview, validation, and an explicit commit decision.

## Evaluation Setup

PROS-Bench links 120 papers to 320 editable PPTX posters, with a 120-poster matched primary core and a separate conference-poster representation challenge. On the primary core, PROS reports 67.2/100 mean VLM-rated stage-balanced diagnosis quality and 87.6% operator-verified target resolution among accepted diagnoses; temporally blinded scoring shows a 22.7-point accepted-target uplift, while 14.8% of assessable accepted targets still decline.

## Key Limitations

Diagnosis is explicitly user-invoked, so the system is proactive about problem discovery but not an ambient unsolicited interrupter. Much of the evaluation uses automated visual-model scoring, and the non-trivial rate of degraded accepted targets shows that local repair success does not guarantee a better final poster.

## Use For

Use this for proactive GUI problem discovery, source-grounded critique, mixed-initiative artifact editing, reversible user-approved execution, and evaluations that separate diagnosis, target resolution, and realized outcome.
