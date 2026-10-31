# A Risk-Adaptive and Evidence-Constrained Framework for Generative AI Feedback in Programming Education

[Paper](https://arxiv.org/abs/2609.29874) · First posted 2026-09-24 · Checked 2026-11-01. Review: primary method/protocol and linked artifacts; no rerun.

## Why It Matters

Keeps prediction, the decision to intervene and feedback generation as separately evaluated stages, and treats attention as a limited budget.

## Proactivity Signal

In policy replay, an alert fires when calibrated risk at a failed-submission state crosses a fixed threshold and counts against an intervention budget. The proposed learner flow is partly solicited: scaffolds appear on request or when difficulty continues.

## Evaluation Setup

ProgFeed: 215 students and 2,993 decision states from one introductory course, with student-disjoint splits. Logistic regression reaches test PR-AUC 0.550 and ROC-AUC 0.681. The sequential policy triggers on 17.8% of eligible states and captures 25.2% of persistent failures. 544 generated messages received automated checks and human review of flagged outputs.

## Key Limitations

Retrospective, single course, offline only, with no learner-facing or learning-outcome evaluation. Discrimination is moderate and near-term transfer prediction is poor. At a 20% budget, simple consecutive-failure alerting captured more failures (75) than the student-history policy (62). The paper reports the threshold inconsistently.

## Use For

A worked example of budgeted intervention timing in education. It does not show that learners benefit. The dataset link was checked on 2026-11-01; nothing was reproduced.
