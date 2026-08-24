# AgentFold: Long-Horizon Web Agents with Proactive Context Folding

## Why It Matters

AgentFold frames context as an actively managed cognitive workspace instead of an ever-growing interaction log. It addresses the trade-off between retaining raw history until context saturation and repeatedly summarizing it until important details are lost.

## Proactivity Signal

At each step, the agent can proactively fold its trajectory at multiple scales: granular folds retain important detail, while deep folds consolidate completed multi-step subtasks. This lets the agent reshape context before accumulated noise compromises the next decision.

## Evaluation Setup

With supervised fine-tuning and no continual pre-training or RL, AgentFold-30B-A3B is evaluated on long-horizon web information-seeking benchmarks. It reports 36.2% on BrowseComp and 47.3% on BrowseComp-ZH.

## Key Limitations

The work focuses on context management for web-agent task performance, not user-facing intervention timing or consent. Learned folding policies can still discard evidence that later becomes relevant, and the evaluation is limited to the selected search benchmarks.

## Use For

Use this for proactive context compression, long-horizon web agents, multi-scale trajectory consolidation, and alternatives to fixed full-history summarization.
