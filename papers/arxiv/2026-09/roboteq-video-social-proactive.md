# RobotEQ-Video: A Video-Centric Benchmark for Social Proactive Intelligence with World-State Taxonomy

[Paper](https://arxiv.org/abs/2609.21371) · First posted 2026-09-18 · Checked 2026-11-01. Review: primary method/protocol and linked artifacts; no rerun.

## Why It Matters

Moves social proactive evaluation from static images to short videos, where human state and context unfold over time, with explicit coverage of scenario attributes.

## Proactivity Signal

Given a video and a list of candidate actions, a model labels each action "should do" or "should not do" for a robot in the scene. The target is behavior properness in an embodied social situation, with no per-event request for help.

## Evaluation Setup

2,036 videos (1,218 synthetic, 818 real) and 16,850 candidate actions, built from a taxonomy of 6 domains, 20 dimensions, 142 level-1 and 816 level-2 attributes. Four annotators label each video by majority vote. Table 2 reports GPT-5.6-Luna best at 79.5 against a human average of 86.9. A world-model pipeline on a random 400-video subset is reported as helpful.

## Key Limitations

Annotators and video roles are Chinese, so cross-cultural effects are untested. Clips run about 6-10 seconds. The paper states both 48 and "40+" evaluated models. Models judge supplied options rather than generate or perform actions, and the world-model subset was limited by API cost.

## Use For

Evaluating social appropriateness of embodied actions from video, alongside RobotEQ 3.0 for personalization. No public code or data was verified on 2026-11-01 and no result was reproduced.
