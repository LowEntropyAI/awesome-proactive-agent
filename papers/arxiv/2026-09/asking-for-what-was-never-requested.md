# Asking for What Was Never Requested: Horizontal and Vertical Proactivity in Agents

## Why It Matters

This paper studies what an agent pursues that was never requested, rather than whether or when it acts, in two forms: horizontal proactivity, a need the current state already names, and vertical proactivity, a need that only newly found evidence names.

## Proactivity Signal

A questioner asks one search query at a time over the task's own evidence, or stops; a frozen drafter folds the evidence into a draft. Both forms of proactivity are measured against need graphs recovered from multi-hop QA decompositions, scored from the transcript with no LLM judge, and agents are compared at equal retrieval spend.

## Evaluation Setup

Q&D trains a Qwen3-8B questioner by imitation of good decisions, then DPO on preferences between forked continuations (the question whose continuation retrieves more of the required evidence wins), then DPO with stop contrasts, with no reward model or judge. It is trained on the training splits of MuSiQue, StrategyQA and 2WikiMultiHopQA, evaluated on their test splits and on FRAMES, and transferred without further training to τ²-bench customer service with a simulated customer. On MuSiQue at equal retrieval spend it retrieves 90% of the required evidence, against 78% for the same model prompted; it outperforms GPT-OSS-120B, a prompted model 15x larger, in the same role on 2 of 3 benchmarks; in τ²-bench retail it more than doubles task success over the same model prompted.

## Key Limitations

Training teaches what to ask more readily than when to stop, and the extra evidence does not yet improve final answers. The customer in the τ²-bench transfer is simulated.

## Use For

Use this for separating what an agent pursues unasked from whether and when it acts, judge-free measurement of proactive information seeking against need graphs, equal-spend comparisons of questioners, and preference training from forked continuations.
