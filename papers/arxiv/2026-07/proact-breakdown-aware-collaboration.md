# ProACT: Towards Breakdown-Aware Proactive Agent in Multi-User Collaboration

## Why It Matters

ProACT moves proactive assistance from one-to-one conversations into group work, where an agent must recognize collaboration breakdowns without becoming another source of interruption.

## Proactivity Signal

The agent monitors speaker-attributed discussion, detects disagreements, forgotten constraints, underspecified plans, loops, and participation imbalance, then explicitly chooses between staying silent and routing an intervention to a targeted collaboration skill.

## Evaluation Setup

The paper introduces a 3,244-example turn-level benchmark spanning six collaboration domains and evaluates five LLM backbones. ProACT improves judged appropriateness, non-interruptiveness, conciseness, and intervention quality over direct chat.

## Key Limitations

The evaluation is offline and partly synthetic, with model-based judgments standing in for live teams. It does not yet establish whether repeated interventions improve long-term group outcomes or preserve human agency over time.

## Use For

Use this for multi-party intervention timing, collaboration-breakdown taxonomies, silence-aware policies, and proactive agents that participate in team discussions.
