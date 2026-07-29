# PersonalAlign: Hierarchical Implicit Intent Alignment for Personalized GUI Agent with Long-Term User-Centric Records

## Why It Matters

PersonalAlign connects long-term user history to two distinct proactive capabilities: filling omitted preferences in vague instructions and anticipating recurring routines before the user issues a command.

## Proactivity Signal

HIM-Agent maintains hierarchical preference and routine memories, uses them to resolve underspecified requests, and decides whether the current user state warrants an instruction-free routine suggestion.

## Evaluation Setup

AndroidIntent contains roughly 20,000 long-term records, 775 annotated preferences, and 215 routines. Across multiple GUI-agent backbones, HIM-Agent improves execution and proactive performance by 15.7% and 7.3%, respectively.

## Key Limitations

The reported false-alarm rate remains high, and the approach depends on persistent access to sensitive behavioral records. The benchmark does not resolve privacy, consent, or deletion policies for long-term personalization.

## Use For

Use this for personalized GUI agents, preference-versus-routine memory design, vague-intent resolution, and evaluation of proactive suggestions grounded in longitudinal user traces.
