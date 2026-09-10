# Chinese editorial review · 10 September 2026

The Chinese homepage was reread independently of the English after rewriting. This is an agent editorial pass, not a completed human native-speaker review. These are the most useful judgment calls for a mainland Chinese technical reader. English expresses intent, not a sentence to translate literally.

| English semantic intent | Proposed Chinese | Review focus |
| --- | --- | --- |
| Study intelligent systems beyond the model boundary | 我研究智能系统，也追问模型之外的事。 | Is the opening personal without being vague? |
| Outputs affect the next learning environment | 模型给出了答案，然后呢？ | Conversational register for researchers |
| Trace failures across layers | 先弄清楚，问题出在哪一层。 | Clarity without a forced debugging metaphor |
| Reliability is not construct validity | 分数稳定，不代表测对了。 | Compactness versus precision |
| Ask how a signal was measured | 这个信号是怎么测出来的？ | Natural across wet labs and AI |
| Retrieval may lose relations in storage | 是搜索不够好，还是记忆里已经丢了关系？ | Does “关系” need more detail here? |
| Test whether feedback transfers before scaling | 先检查迁移是否发生，再谈规模。 | Accessibility outside ML |
| Information ablation diagnoses failure | 拿掉一类信息后，智能体在哪一步开始失败？ | Informal verb with precise intent |
| Plans alone may hide malicious behavior | 只看计划够不够？ | Connection to concrete implementation |
| Harness orchestrates context, tools and execution | 运行框架负责组织上下文、调用工具、安排执行流程。 | “运行框架” versus an unexplained harness |
| A zero needs its failure cause adjudicated | 零分，说明了什么？ | Avoid administrative 判定 language |
| Independent verification can overturn a result | 谁有能力说“不”？ | Rhetorical heading versus clarity |
| Distributed corrigibility is a proposal | 做出结果的一方，不应独自决定结果是否成立。 | Plain definition of a coined term |
| Preserve reasons at each step | 每走一步，都留下判断的依据。 | Rhythm without a slogan |
| Permit revision while retaining evidence | 证据要能找回来，结论要允许改。 | Informality of closing line |

## Terminology decisions

- model → 模型; agent → 智能体. Harness is introduced as 运行框架 with its function; runtime → 运行时 is a distinct execution concept. No claim that one translation of harness is settled.
- verifier → 验证器 for software; 核验 / 验证机制 for broader checks. Evaluation → 评估, benchmark testing → 评测. Do not call every instrument a verifier.
- provenance → 来源和处理记录 / 证据溯源, not the bureaucratic 工件链. “原始输出” identifies the concrete artifact in the homepage card.
- construct validity → 构念效度, immediately explained as whether the measurement measures what it claims. Alignment → 对齐; ontology → 本体, explained through objects and relationships if used. Neither is inserted merely to complete a glossary.
- feedback loop → 反馈循环. Institution → 制度 for rules and authority, 机构 for organizations. Distributed corrigibility is explicitly a provisional concept, not established Chinese terminology.

Usage consulted: [Alibaba AgentRun terminology](https://next.api.aliyun.com/document/AgentRun), [Alibaba runtime documentation](https://www.alibabacloud.com/help/zh/agentrun/code-creation-agent), [China Industrial Internet Research Institute on harness](https://www.china-aii.com/jgdt/202507015.jhtml), [construct validity terminology](https://cse.neea.edu.cn/html1/report/16104/3-1.htm).
