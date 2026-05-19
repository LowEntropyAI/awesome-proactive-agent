# ProactiveEval: A Unified Evaluation Framework for Proactive Dialogue Agents

## 基本信息

| 字段 | 内容 |
|------|------|
| **来源** | arXiv preprint |
| **arXiv ID** | [arXiv:2508.20973](https://arxiv.org/abs/2508.20973) |
| **首发日期** | 2025 年 8 月 28 日 |
| **代码/数据/模型** | [GitHub](https://github.com/liutj9/ProactiveEval) |
| **领域** | cs.CL · cs.AI · cs.HC |

---

## 一句话总结

ProactiveEval 将主动对话拆成目标规划和对话引导两个核心能力，并提供跨领域的统一评测框架与自动数据生成流程。

---

## 为什么适合本仓库

这篇论文直接评估 proactive dialogue agent 的核心能力：代理不仅要回答用户，还要识别对话目标、选择推进策略，并在多轮交互中主动引导用户靠近目标。

---

## 方法

- 将 proactive dialogue 抽象为 **target planning** 和 **dialogue guidance** 两类任务。
- 构建覆盖 6 个领域的 328 个评测环境，降低不同 proactive dialogue 任务之间的格式碎片化。
- 使用主题树、目标集成、模糊重写和噪声注入生成更有挑战性的评测数据。
- 评测 22 类 LLM，并分析 reasoning 能力对主动对话行为的影响。

---

## 核心结论

- 不同模型在目标规划和对话引导上的优势并不一致，说明 proactive dialogue 不能只用单一指标衡量。
- 推理型模型在困难场景中更容易产生有效主动策略，但也可能带来更强的推动感或对话自然度下降。
- 明确的目标表示对小模型尤其重要；缺少目标时，对话引导质量会明显下降。

---

## 关键词

`Proactive Dialogue` · `Evaluation` · `Target Planning` · `Dialogue Guidance` · `LLM-as-a-Judge`
