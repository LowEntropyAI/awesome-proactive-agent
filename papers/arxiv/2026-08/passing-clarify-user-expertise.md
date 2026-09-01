# Clarify User Expertise: Towards Proactive Conversational Agents Tailoring Responses to User Proficiency

## Why It Matters

This paper extends clarification beyond ambiguous task intent: the missing variable is the user's query-specific expertise. PASSING shows how a conversational agent can actively acquire that information before choosing the depth and language of its answer.

## Proactivity Signal

Rather than infer proficiency from the initial query alone, PASSING initiates targeted What-to-Ask and How-to-Ask probes, updates a slot-based expertise state from the replies, and stops when the slots or turn budget are exhausted before producing a tailored response.

## Evaluation Setup

The probing strategies are induced through offline LLM self-play and then applied in a training-free pipeline across multiple backbones and datasets. The paper reports an average 288% relative improvement in query-level expertise-estimation accuracy over the strongest baseline, with about 1.2 inquiry turns on average.

## Key Limitations

The user is simulated, the stop rule is largely budget- or slot-driven, and the pipeline depends on zero-shot LLM judgments. It therefore does not establish whether real users welcome the extra questions or whether the resulting answer improves long-term comprehension.

## Use For

Use this for proactive expertise elicitation, personalization-before-answering, clarification strategy induction, and systems that must decide what user attribute to ask about rather than silently assume.
