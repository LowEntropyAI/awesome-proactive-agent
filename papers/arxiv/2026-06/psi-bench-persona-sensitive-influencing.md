# Ψ-Bench: Evaluating Persona-Sensitive Influencing in Persuasive Dialogues

## 基本信息

| 字段 | 内容 |
|------|------|
| **来源** | arXiv preprint |
| **arXiv ID** | [arXiv:2606.02754](https://arxiv.org/abs/2606.02754) |
| **首发日期** | 2026 年 6 月 1 日 |
| **代码/数据/模型** | [GitHub](https://github.com/Hanpx20/Psi-Bench) |
| **领域** | cs.LG · Persuasive Dialogue · Personalized Agent |

---

## 一句话总结

Ψ-Bench 评估 LLM 在说服式对话中利用用户画像进行 persona-sensitive influencing 的能力，强调个性化代理不应只是被动响应偏好，也要能主动给出有针对性的建议和引导。

---

## 为什么适合本仓库

这篇论文把 proactive personalization 放在真实交互式说服任务中评估。代理需要根据来自历史对话的用户画像，选择更适合当前用户的论点、语气和引导策略，而不是对所有用户输出同质化建议。

---

## 评测设计

- 构建 3 类真实世界说服场景：观点辩论、心理咨询和日常请求。
- 为模拟客户提供由历史对话生成的显式 user profile，用于测试 persona-sensitive personalization。
- 使用模拟 client 和 judge，对 10 个前沿 LLM 的说服质量、个性化响应和对话质量进行评估。
- 对比是否提供用户画像，衡量用户特定信息对说服效果的影响。

---

## 核心结论

- 大多数模型能生成连贯合理的论点，但在真正有效的个性化说服上仍有明显提升空间。
- 提供用户画像带来平均 18.24% 的性能提升，说明 user-specific information 对 proactive personalized agents 很关键。
- 论文将 persona-sensitive influencing 提出为评估主动个性化代理的实际方向。

---

## 关键词

`Proactive Personalization` · `Persuasive Dialogue` · `Persona-sensitive Influencing` · `User Profile` · `Benchmark` · `Ψ-Bench`
