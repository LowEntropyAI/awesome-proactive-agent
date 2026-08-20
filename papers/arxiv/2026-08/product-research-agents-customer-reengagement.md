# Bridging Search and CRM: Productionizing AI Product Research Agents for Customer Re-Engagement

## Why It Matters

This work connects in-session exploratory search with later, out-of-app assistance. It provides production evidence for a proactive pipeline that identifies unresolved product-research intent, grounds recommendations in external and enterprise data, and re-engages users through a messaging channel.

## Proactivity Signal

The system detects users with exploratory purchase intent and low engagement from behavioral logs, conducts multi-agent product research, and sends personalized WhatsApp recommendations on the following day without a fresh request. The user-facing action is therefore an agent-generated notification initiated outside the original search session.

## Evaluation Setup

The framework was deployed for 23 days and delivered 15,061 WhatsApp messages containing two or three mobile-product recommendations, producing 37,258 attributed visits. The paper reports roughly 285% higher click-through than historical WhatsApp mobile campaigns, downstream purchases and GMV impact, plus a 2,200-instance rule-based comparison of centralized and sequential agent orchestration.

## Key Limitations

The deployment is compared with historical campaigns rather than a randomized concurrent control, so the reported uplift is not a clean causal estimate. Forwarded messages inflate attributed visits beyond direct recipients, and the paper does not report user-level notification acceptance, opt-out behavior, interruption burden, or longer-term welfare effects; evidence is limited to one commerce category and channel.

## Use For

Use this for proactive recommendation agents, cross-session intent recovery, CRM re-engagement, production multi-agent pipelines, and evaluating the tradeoff between commercial utility and unsolicited-notification burden.
