# CogniFold: Always-On Proactive Memory via Cognitive Folding

## 基本信息

| 字段 | 内容 |
|------|------|
| **来源** | arXiv preprint |
| **arXiv ID** | [arXiv:2605.13438](https://arxiv.org/abs/2605.13438) |
| **首发日期** | 2026 年 5 月 13 日 |
| **最新版本** | v2, 2026 年 5 月 24 日 |
| **HF Paper** | [huggingface.co/papers/2605.13438](https://huggingface.co/papers/2605.13438) |
| **代码/数据/模型** | [GitHub](https://github.com/OpenNorve/CogniFold) · [CogEval-Bench](https://huggingface.co/datasets/OpenNorve/CogEval-Bench) |
| **领域** | cs.AI · cs.CL · Proactive Memory |

---

## 一句话总结

CogniFold 将 agent memory 从被动检索扩展为 always-on 认知结构：持续把碎片化事件流折叠成概念图，并在概念簇密度达到阈值时主动浮现 intent。

---

## 为什么适合本仓库

这篇论文把 proactivity 下沉到记忆层，而不是只作为策略层的“是否主动发言”。它关注代理如何在没有显式查询时持续组织经验、合并相似概念、衰减过期信息、通过关联回忆重连上下文，并从图结构中主动产生 intent。

---

## 方法

- 扩展 Complementary Learning Systems，从 hippocampus / neocortex 两层加入 prefrontal intent layer。
- 将事件、概念、intent 和时间锚组织成 typed graph，通过图拓扑自组织实现 cognitive folding。
- 通过 merge、decay、relink 和 density threshold 等机制，让 intent 从事件流中自发浮现。
- 提出 **CogEval-Bench**，专门评估 proactive emergence 和认知结构形成，而不只是传统检索准确率。

---

## 核心结论

- CogniFold 能形成更符合认知预期的结构化记忆，而不是只保留可检索片段。
- 在 CogEval-Bench 上，它能够更好展示概念 emergence 和 proactive intent surface。
- 在 7 个常规记忆 benchmark 上仍保持稳健，说明主动记忆结构不必以牺牲通用记忆能力为代价。

---

## 关键词

`Proactive Memory` · `Always-on Agent` · `Cognitive Folding` · `Intent Emergence` · `Graph Memory` · `CogEval-Bench`
