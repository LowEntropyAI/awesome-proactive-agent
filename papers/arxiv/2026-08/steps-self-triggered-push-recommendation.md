# A Self-Triggered Agentic Push Recommendation System

## Why It Matters

STEPS turns push delivery into a closed-loop agent problem rather than a fixed schedule: the system decides both whether to contact a user and when it should next wake up. Its production deployment provides unusually large-scale evidence about proactive timing and interruption costs.

## Proactivity Signal

A planning agent schedules the next system invocation, an execution agent chooses whether to send a notification, and a filtering agent suppresses low-value or unreasonable triggers. The system therefore acts outside the app without a fresh request while retaining an explicit no-push path.

## Evaluation Setup

The work uses more than six months of Douyin production logs from over one billion users and a 14-day randomized online A/B test. Relative to the production baseline, STEPS reports a 0.2843% increase in user active days, a 1.9089% reduction in push-permission disablement, and 79.42% lower resource consumption.

## Key Limitations

The reported evidence comes from one commercial platform and optimizes engagement-oriented outcomes. Push-permission disablement is a useful but incomplete proxy for interruption burden, consent, and long-term user well-being.

## Use For

Use this for self-triggered agents, learned wake-up scheduling, intervention filtering, large-scale online evaluation, and recommendation systems that must balance utility against interruption.
