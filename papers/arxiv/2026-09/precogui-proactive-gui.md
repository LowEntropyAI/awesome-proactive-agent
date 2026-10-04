# PrecogUI: Proactive GUI Agents via Pre-cognitive Simulation and Experience Retrieval

## Why It Matters

PrecogUI applies proactivity inside GUI execution: it predicts the consequence of candidate actions and retrieves recurring disturbance patterns before an anomaly causes a cascading failure.

## Proactivity Signal

Before acting, the controller simulates the next symbolic UI layout, ranks actions by predicted reliability, retrieves relevant success or anomaly experiences, and prioritizes handling foreseen problems.

## Evaluation Setup

The architecture combines a dual-memory Proactive Experience Pool, a next-layout simulation executor, and a closed-loop execution controller. AutoTraj generates InterfereBench for long-horizon disturbed tasks; the paper reports gains over compared methods there while remaining competitive on public GUI benchmarks.

## Key Limitations

The proactivity is primarily internal failure anticipation rather than user-facing need inference or consent management. Symbolic next-layout prediction may be brittle on interfaces and disturbances outside the generated benchmark.

## Use For

Use this for proactive GUI planning, action consequence simulation, anomaly avoidance, experience retrieval, and disturbance-aware long-horizon execution.
