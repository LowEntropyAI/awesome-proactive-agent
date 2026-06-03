# Long-term Task-oriented Agent: Proactive Long-term Intent Maintenance in Dynamic Environments

## 基本信息

| 字段 | 内容 |
|------|------|
| **来源** | arXiv preprint |
| **arXiv ID** | [arXiv:2601.09382](https://arxiv.org/abs/2601.09382) |
| **首发日期** | 2026 年 1 月 14 日 |
| **OpenReview** | [ACL ARR 2026 January Submission](https://openreview.net/forum?id=PWotyjUGro) |
| **基准** | ChronosBench |
| **领域** | cs.AI · cs.CL · Task-oriented Agent |

---

## 一句话总结

提出一种长期任务导向 proactive agent 范式，使代理能在动态环境中维护用户长期意图，并在外部事件满足触发条件时主动跟进用户。

---

## 为什么适合本仓库

这篇论文直接研究 proactive agent 的长期意图维护问题：代理不是只在当前会话里响应用户，而是根据历史对话自主生成监控条件，并在环境更新出现时主动发起后续交互。

---

## 方法

- 将主动性形式化为两个能力：**Intent-Conditioned Monitoring** 和 **Event-Triggered Follow-up**。
- 让代理根据历史对话生成触发条件，用于长期监控用户目标和外部环境变化。
- 构建合成数据流水线，生成复杂、多轮、跨时间的动态环境对话数据。
- 提出 **ChronosBench**，评估动态环境中长期任务导向交互的意图维护和主动跟进能力。

---

## 核心结论

- 当前主流开源和闭源模型在长期任务导向交互中仍存在明显缺陷。
- 对包含用户意图变化的复杂任务，论文的 SFT 模型达到 85.19% 任务完成率，验证了数据驱动训练策略的有效性。
- 长期 proactive agent 的关键不只是记忆历史，还包括把历史转化为可监控条件，并在环境变化时主动恢复任务线程。

---

## 关键词

`Proactive Agent` · `Task-oriented Agent` · `Long-term Intent` · `Dynamic Environment` · `ChronosBench` · `Event-triggered Follow-up`
