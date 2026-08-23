# OmniMMI: A Comprehensive Multi-modal Interaction Benchmark in Streaming Video Contexts

## Why It Matters

OmniMMI is an early benchmark that evaluates proactive reasoning alongside reactive streaming QA. It helped establish continuous multimodal interaction as a distinct target rather than offline video question answering.

## Proactivity Signal

Its proactive tasks require an omni-modal model to monitor a stream and initiate an alert or manage turn-taking when a condition occurs. The companion M4 framework can continue seeing and listening while generating.

## Evaluation Setup

OmniMMI contains more than 1,121 videos and 2,290 questions across six subtasks. Evaluations report large gaps on proactive and multi-turn tasks, while the lightweight M4 streaming framework improves real-time proactive interaction over the compared baselines.

## Key Limitations

Only part of the suite requires genuine autonomous initiation, and later work notes that proactive alerting is largely single-trigger and that some tasks still rely on query points. The data does not model individualized interruption costs or long-term user relationships.

## Use For

Use this for omni-modal streaming evaluation, proactive alerts, turn-taking, concurrent perception and generation, and tracing the evolution from polled video QA to self-triggered assistants.
