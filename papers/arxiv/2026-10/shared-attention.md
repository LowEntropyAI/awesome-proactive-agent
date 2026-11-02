# When Should AI Agents Ask? Clarification Requests Under Limited Human Attention

[Paper](https://arxiv.org/abs/2610.41129) · First posted 2026-10-30 · Checked 2026-11-02. Primary paper and available artifact listings reviewed; no rerun.

## Why It Matters

Several agents can each have a good reason to ask, yet still compete for the same person at the wrong time.

## Proactivity Signal

An agent can ask now, search for the missing fact itself, or work on something else while another agent has the user’s attention.

## Evaluation Setup

The authors compare a pairwise coordination policy with optimal schedules and simpler rules in 864 synthetic cases and an LLM case study. The mean synthetic cost gap to optimum was 0.07%.

## Key Limitations

The objective is modeled coordination cost, not a measurement of annoyance in a live multi-agent workplace. All tasks are delegated.

## Use For

Compare ask timing when several agents share one constrained human resource.
