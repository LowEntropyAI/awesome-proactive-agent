# Active-SWE: Benchmarking Coding Agents for Proactive Bug Fixing without Issue Reports

## Why It Matters

Active-SWE removes the detailed issue report that normally tells a coding agent what to fix. It shifts evaluation from reactive patch generation to discovering objectives, locating bugs, and repairing them without human-provided fault descriptions.

## Proactivity Signal

Given a repository snapshot and review scope rather than a bug report, the agent must inspect the code, identify one or more recorded or previously unreported bugs, and produce fixes. The proactive action is autonomous problem discovery followed by tool-using repair.

## Evaluation Setup

The benchmark contains 1,663 tasks spanning six bug categories and eight programming languages, with simple and multi-bug hard instances. Its dual-track evaluation checks both repair of recorded bugs and discovery of valid potential bugs; tested coding agents remain weak at localization, multi-bug repair, and novel bug discovery.

## Key Limitations

Tasks are reconstructed from repository snapshots and pull-request history, so they do not fully model continuous monitoring of a live development process. Constraining the review scope also gives agents more guidance than open-ended repository maintenance would.

## Use For

Use this for proactive coding-agent evaluation, autonomous repository inspection, objective discovery without issue reports, multi-bug repair, and tests of whether agents can act before failures are reported.
