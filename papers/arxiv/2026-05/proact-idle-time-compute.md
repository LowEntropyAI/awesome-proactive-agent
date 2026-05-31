# Anticipate and Learn: Unleashing Idle-Time Compute in Proactive Agents

## 基本信息

| 字段 | 内容 |
|------|------|
| **来源** | arXiv preprint |
| **arXiv ID** | [arXiv:2605.25971](https://arxiv.org/abs/2605.25971) |
| **首发日期** | 2026 年 5 月 25 日 |
| **最新版本** | v2, 2026 年 5 月 26 日 |
| **项目主页** | [ProAct showcase](https://agentace-ai.github.io/proact-showcase/) |
| **代码/数据/模型** | [GitHub](https://github.com/AgentACE-AI/ProAct) |
| **领域** | cs.CL · cs.IR · cs.MA |

---

## 一句话总结

ProAct 利用用户交互之间的空闲时间预测后续需求，并提前检索、验证和组织证据，把 reactive assistant 转变为能提前准备下一步材料的 proactive agent。

---

## 为什么适合本仓库

这篇论文把 proactive agent 的核心从“用户问了以后再回答”推进到 **idle-time anticipation**：代理在用户暂停、切换任务或对话间隔中主动预测未来需求，补齐知识缺口，并在低风险边界内交付可审核材料。

---

## 方法

- 结合 evolving dialogue history 和 persistent memory，预测用户接下来可能提出的问题或需要的材料。
- 在空闲时间进行信息获取、证据检索和事实验证，提前减少后续回答中的知识缺口。
- 用 utility-aware delivery 决定 push、queue 或 drop，避免把主动性变成高打扰或越权执行。
- 提出 **ProActEval**：覆盖 40 个领域、200 个场景的 proactive capability benchmark，包含可预测需求链和不同用户认知画像。

---

## 核心结论

- 相比 reactive baseline，ProAct 能减少完成任务所需轮数、降低用户努力，并显著降低幻觉率。
- MemBench 结果显示，持久化记忆和反思能力对长期 proactive behavior 有帮助。
- 对 proactive agent 而言，空闲时间不是等待状态，而是可用于预测、检索、验证和准备的计算窗口。

---

## 关键词

`Proactive Agent` · `Idle-time Compute` · `Persistent Memory` · `Future Need Prediction` · `ProActEval` · `Evidence Acquisition`
