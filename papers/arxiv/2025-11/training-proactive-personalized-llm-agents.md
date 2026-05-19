# Training Proactive and Personalized LLM Agents

## 基本信息

| 字段 | 内容 |
|------|------|
| **来源** | arXiv preprint |
| **arXiv ID** | [arXiv:2511.02208](https://arxiv.org/abs/2511.02208) |
| **首发日期** | 2025 年 11 月 4 日 |
| **代码/数据/模型** | [GitHub](https://github.com/sunnweiwei/PPP-Agent) |
| **领域** | cs.AI · cs.CL · cs.LG |

---

## 一句话总结

提出 UserVille 交互环境和 PPP 多目标强化学习方法，把 agent 训练目标从单纯任务完成扩展到 productivity、proactivity 和 personalization 三个维度。

---

## 为什么适合本仓库

这篇论文把主动性定义为高质量的人机交互能力：代理需要判断何时向用户提问、如何降低用户表达负担，并根据不同用户偏好调整行为，而不是只追求最终任务成功。

---

## 方法

- 构建 **UserVille**，用偏好感知的 LLM 用户模拟器把现有 agent benchmark 转换为交互式训练环境。
- 将原始任务提示 vaguenize，使代理必须主动澄清缺失约束与用户偏好。
- 设计 PPP 强化学习目标，同时优化任务成功、主动提问质量和个性化偏好对齐。
- 在软件工程与 deep research 任务上验证 agent 是否能泛化到未见过的用户偏好和更复杂任务。

---

## 核心结论

- PPP 训练能提升任务完成、主动交互和个性化三类指标。
- 经过训练的代理更能区分明确请求和模糊请求，在真正需要时提出澄清问题。
- 用户模拟和多目标奖励为训练可交互、可个性化的 proactive agent 提供了可复用范式。

---

## 关键词

`Proactive Agent` · `Personalization` · `User Simulation` · `Reinforcement Learning` · `Clarification` · `UserVille`
