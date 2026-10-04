# PASTABench: Proactive Assessment of Sequential Trajectories for Agent Safety

## Why It Matters

PASTABench shifts agent safety from post-hoc trajectory grading to timely intervention while a risky workflow is still unfolding. It distinguishes noticing a hazard, choosing whether to interrupt, and intervening inside the useful window.

## Proactivity Signal

A safety monitor observes a multi-step agent trajectory and must decide whether and when to intervene, then identify the accumulating risk before harmful execution progresses too far.

## Evaluation Setup

The benchmark contains 1,139 trajectories across five risk categories and 13 subcategories. Its Optimal Intervention Window is bounded by annotated earliest-signal and trigger turns; across 16 LLMs, the best model achieves only 40.74% optimal-timing interventions, with performance dropping when explicit hazard vocabulary is neutralized.

## Key Limitations

The benchmark evaluates monitoring judgments rather than the complete recovery process after an interruption. Annotated risk windows may not capture user-specific tolerance, uncertainty about real-world state, or the operational cost of false stops.

## Use For

Use this for proactive safety monitors, trajectory-level risk accumulation, intervention-window metrics, over-trigger controls, and testing lexical shortcuts in safety judgments.
