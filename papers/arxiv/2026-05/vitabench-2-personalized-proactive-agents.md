# VitaBench 2.0: Evaluating Personalized and Proactive Agents in Long-Term User Interactions

## 基本信息

| 字段 | 内容 |
|------|------|
| **来源** | arXiv preprint |
| **arXiv ID** | [arXiv:2605.27141](https://arxiv.org/abs/2605.27141) |
| **首发日期** | 2026 年 5 月 26 日 |
| **HF Paper** | [huggingface.co/papers/2605.27141](https://huggingface.co/papers/2605.27141) |
| **代码/数据/模型** | [GitHub](https://github.com/meituan-longcat/VitaBench-2.0) |
| **领域** | cs.AI · Personalized Agent · Proactive Agent Benchmark |

---

## 一句话总结

VitaBench 2.0 将个性化和主动性交给长期用户交互来检验：代理必须从碎片化、多会话历史中持续抽取、使用并更新用户偏好，同时在信息缺失时主动获取补充信息。

---

## 为什么适合本仓库

这篇论文直接命中 proactive agent 的长期用户建模问题。它不是只测试单次工具调用或单轮任务完成，而是要求代理在按时间排序的用户交互序列中识别偏好、维护记忆，并在决策前主动发现缺失信息、向用户或环境索取信息。

---

## 评测设计

- 将任务组织为面向单个用户的长时间序列，偏好散落在异质、碎片化的日常交互中。
- 要求代理持续抽取、使用和更新用户偏好，而不是依赖一次性 profile。
- 通过需要识别缺失信息并主动获取信息的任务评估 proactiveness。
- 提供可扩展 memory interface，支持 Full Context、Agentic Memory 和 RAG Memory 等不同记忆架构的对照。

---

## 核心结论

- 长期个性化对当前 SOTA 模型仍然很难，即使 Full Context 设置下也远未饱和。
- 更现实的记忆设置会进一步拉低表现，说明 memory retrieval、preference update 和 proactive acquisition 仍是瓶颈。
- 评测揭示了从“完成任务”到“理解并适应长期用户”的明显能力缺口。

---

## 关键词

`Proactive Agent` · `Personalized Agent` · `Long-term Interaction` · `User Preference` · `Agent Memory` · `Benchmark`
