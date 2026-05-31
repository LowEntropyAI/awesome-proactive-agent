# π-Bench: Evaluating Proactive Personal Assistant Agents in Long-Horizon Workflows

## 基本信息

| 字段 | 内容 |
|------|------|
| **来源** | arXiv preprint |
| **arXiv ID** | [arXiv:2605.14678](https://arxiv.org/abs/2605.14678) |
| **首发日期** | 2026 年 5 月 14 日 |
| **最新版本** | v3, 2026 年 5 月 19 日 |
| **项目主页** | [π-Bench](https://simplified-reasoning.github.io/Pi-Bench/) |
| **代码/数据/模型** | [GitHub](https://github.com/Simplified-Reasoning/Pi-Bench) · [HF Dataset](https://huggingface.co/datasets/zzzhr97/Pi-Bench) |
| **领域** | cs.AI · Proactive Personal Assistant · Long-horizon Benchmark |

---

## 一句话总结

π-Bench 面向长周期个人助理工作流，评估 agent 是否能在用户未明说前识别 hidden intents，并将主动意图解决能力和最终任务完成度分开衡量。

---

## 为什么适合本仓库

这篇论文把 proactivity 放在评测核心：任务从欠明确的用户请求开始，真正目标分散在用户画像、历史记录、工作区文件、应用状态和工具上下文中。Agent 需要判断何时检查上下文、何时追问、何时直接行动，而不是被动等待用户把约束全部说出来。

---

## 评测设计

- 构建 100 个多轮任务，覆盖 5 类领域用户画像：researcher、marketer、pharmacist、law trainee、financier。
- 使用持久化个人工作区，让任务之间存在历史、文件、偏好和跨会话依赖。
- 标注 hidden intents，用于追踪代理是否主动完成、主动询问并推断，还是只能等用户补充。
- 分离两个指标：**Proc** 衡量主动意图解决，**Comp** 衡量最终产物是否满足 checklist 和规则要求。

---

## 核心结论

- 主动性和任务完成度是可分离的能力；能完成显式任务不代表能提前发现用户潜在需求。
- 长周期历史对后续 hidden intent resolution 有价值，说明 proactive personal assistant 需要跨会话记忆与偏好建模。
- 当前前沿模型在完成度上已有一定能力，但主动识别和减少用户负担仍然明显不足。

---

## 关键词

`Proactive Agent` · `Personal Assistant` · `Hidden Intent` · `Long-horizon Workflow` · `Benchmark` · `Persistent Workspace`
