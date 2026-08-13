# ITO: Real-time Browser Tab Orchestration Through Intent Detection

## Why It Matters

ITO shows how a mixed-initiative system can maintain evolving user intents instead of waiting for manual tab grouping. Its persistent Flows connect moment-to-moment organization with later hibernation and proactive resumption while keeping corrections visible to the user.

## Proactivity Signal

ITO continuously infers browsing intent and autonomously creates, restructures, hibernates, and awakens dynamic tab collections called Flows. It can also surface a wake-up banner when current activity becomes relevant to a hibernated Flow, while users retain control through proposals and corrections.

## Evaluation Setup

The system is evaluated in a controlled three-condition lab study with 12 participants and a two-week field study with 11 participants. Reported results favor ITO for mental-model alignment, task switching, navigation, and management burden, while perceived control and predictability do not differ significantly from the baselines.

## Key Limitations

The studies use small cohorts, structured tasks, custom survey items, and a two-week observation window; routing accuracy is not evaluated independently. The prototype sends page titles, URLs, and Flow information to an external model API on every navigation, creating privacy, latency, and cost constraints, and it is limited to a browser side panel.

## Use For

Use this for real-time intent inference, mixed-initiative browser organization, proactive task resumption, persistent activity structures, and human-control patterns for systems that continuously reorganize a workspace.
