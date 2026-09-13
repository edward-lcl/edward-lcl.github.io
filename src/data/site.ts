// Canonical positioning for both homepages, metadata, structured data, and the OG card.
export const sitePositioning = {
  frameworkUrl: "/questions/inside-the-loop/",
  en: {
    title: "Edward Lue Chee Lip — Intelligent systems, across the loop",
    hero: "I study intelligent systems",
    heroEmphasis: "as part of the world they change.",
    description: "Edward Lue Chee Lip studies intelligent systems across memory, agents, verification, and institutions—and preserves the evidence needed to inspect and correct their feedback loops.",
    lead: "From representation and memory inside models to agents, verifiers, and institutions: I follow how outputs become evidence, how evidence drives action, and how action changes what the system learns next.",
    question: "How do we keep that loop inspectable, open to correction, and grounded in reality?",
    notes: ["I debug vertically.", "The score is not the thing.", "The system is larger than the model."],
  },
  zh: {
    title: "Edward Lue Chee Lip — 反馈循环中的智能系统",
    hero: "我研究智能系统，",
    heroEmphasis: "也追问模型之外的事。",
    description: "Edward Lue Chee Lip，现居苏州，就读于西交利物浦大学。研究 AI 记忆、智能体评估与控制，关注模型如何影响现实，以及我们凭什么判断它做对了。",
    lead: "模型给出了答案，然后呢？答案会被人采用、交给工具执行，甚至成为下一轮训练的数据。我研究记忆、智能体与评估，也追踪这些输出进入现实之后，如何反过来改变系统。",
    question: "沿着这个循环，谁能检查结果，又凭什么纠正它？",
    notes: ["先弄清楚，问题出在哪一层。", "分数稳定，不代表测对了。", "真正要研究的，远不止模型。"],
  },
  topics: ["AI memory", "agent evaluation", "AI control", "construct validity", "independent verification", "human-machine feedback", "evidence infrastructure"],
} as const;

export type ReadingSection = {
  code?: string;
  title: string;
  body: readonly string[];
  inlineLinks?: readonly { label: string; url: string }[];
  points?: readonly string[];
  links?: readonly { label: string; url: string }[];
};

export const acceptedPapers = [
  {
    "id": "01",
    "slug": "recall-debt",
    "title": "The Recall Debt",
    "subtitle": "Flat Memory Schemas Structurally Fail Multi-Hop Retrieval",
    "venue": "COLM 2026 · Context Beyond the Window",
    "series": "COLM",
    "cvPriority": 2,
    "note": "Accepted poster",
    "role": "First author",
    "authors": "Edward Lue Chee Lip · Sean Wu",
    "publicationDate": "Accepted · August 2026",
    "artifactState": "Manuscript and code retained · public citation forthcoming",
    "contribution": "First author; led the research framing, experiments, analysis, system implementation, and writing.",
    "evidenceClass": "E2 · accepted; artifact-backed",
    "provenance": "Official OpenReview author-dashboard decision evidence plus the current manuscript and repository. Public proceedings record pending.",
    "lastVerified": "13 Aug 2026",
    "citationState": "Canonical proceedings citation and public artifact route pending.",
    "readTime": "4 min read",
    "question": "What if forgetting is an architectural choice, not a retrieval bug?",
    "accent": "cobalt",
    "url": "/research/recall-debt/",
    "sourceUrl": null,
    "lede": "I work with agents across research threads, so I care about whether one thread can use what another has already found. Recall Debt asks why saving the information can still leave that connection out of reach.",
    "evidenceNote": "Accepted poster. The digest follows the current manuscript and distinguishes the public MuSiQue measurement from the operational-corpus validity audit.",
    "altitudes": [
      [
        "Question",
        "Can a flat memory retrieve evidence whose relevance only appears through an intermediate concept?"
      ],
      [
        "Claim",
        "On the selected MuSiQue chains, resolving an intermediate bridge improved retrieval of the final document over the tested direct-retrieval methods."
      ],
      [
        "System boundary",
        "Document retrieval and candidate selection, evaluated separately from the downstream model’s ability to answer from supplied evidence."
      ],
      [
        "Intervention",
        "Resolve the intermediate bridge before asking the retriever to surface the terminal document."
      ],
      [
        "Measurement",
        "Recall@10 on 159 gold-annotated two-hop MuSiQue chains, plus answer accuracy when the missing terminal is supplied."
      ],
      [
        "Failure mode",
        "Embedding-disjoint candidates can look like bridges without being semantically valid; disjointness is not a ground-truth label."
      ],
      [
        "Next falsifier",
        "A flat retriever that consistently recovers the residual bridge cases without an explicit traversal structure."
      ]
    ],
    "sections": [
      {
        "title": "Saving something is only the beginning",
        "body": [
          "I want work with agents to accumulate. If a useful connection appears in one session, I want to be able to return to it from another question, without having to remember exactly where it was written. That is the practical concern behind this project.",
          "A memory store can contain both pieces of an answer and still retrieve only one. Imagine asking a question that first requires identifying a person, then finding a fact about them in another document. That second document may look unrelated to the original question. Its relevance only becomes clear after the first step.",
          "I led the framing, implementation, experiments, analysis, and writing of this work with Sean Wu. We tried to separate two problems that can look identical from the outside: the agent cannot reason through the answer, or the retrieval system never gives it the evidence it needs."
        ]
      },
      {
        "title": "Separating retrieval from reasoning",
        "body": [
          "We used a difficult subset of MuSiQue, a public question-answering benchmark with annotated two-hop connections. On 159 chains where the query and final document were far apart in embedding space, BM25 and dense retrieval found the final document 0% of the time at recall@10. That means it never appeared among their first ten candidates on this subset.",
          "To check whether retrieval was the obstacle, we ran a separate answer experiment on 80 chains. With standard retrieval, the model answered 5.0% correctly. Supplying the missing final document raised that to 47.5%. The model still made mistakes, but the change localized a substantial part of the failure to the evidence it received.",
          "We also tested stronger retrieval systems on the 159-chain subset. They reached at most 22.6% recall@10, compared with 61.6% for an oracle-assisted condition that resolves the intermediate bridge. I read that comparison as a reason to study how connections are represented and traversed. It is not a claim that every flat retriever must fail, or that the oracle-assisted result is a ready-to-deploy memory system."
        ]
      },
      {
        "title": "The benchmark I had to question too",
        "body": [
          "The operational-memory part of the study complicated the story. We mined candidate connections from a real corpus, used a model to judge them, and examined pairs that were distant in embedding space. But distance can mean two things: a subtle connection, or no useful connection at all.",
          "In the later audit, only 2% of candidates in that distant tail were judged genuine bridges. Many apparent connections were artifacts of shared tokens. The audit itself relies on model judgments, with agreement and stability checks; those labels are not infallible ground truth.",
          "This matters to how I present the work. The public MuSiQue experiment supports a retrieval failure on known-valid chains. The operational audit does not establish that the same failure is widespread in everyday agent memory. It shows how easily the process used to find a failure can manufacture examples of it."
        ]
      },
      {
        "title": "What I want a memory system to preserve",
        "body": [
          "For someone building a persistent assistant, storage is only part of the job. I would also ask whether the system can recover a connection when the next question uses different language, and whether it can show why that connection is relevant. Those are things to evaluate separately from how many notes it retains.",
          "That is what I mean by recall debt: keeping information without a reliable way to use it later. This study does not measure how that debt grows over time. It gives me a specific retrieval problem to test and a warning about how to construct the test.",
          "I am interested in comparing explicit links, graph retrieval, and learned traversal on validated cases. The next step needs to show which connections those methods recover, what they cost, and which remain missing. My work on handoffs approaches the same practical concern from the other direction: what should we preserve when a piece of work moves to someone new?"
        ],
        "inlineLinks": [
          {
            "label": "handoffs",
            "url": "/questions/handoffs-are-memory/"
          }
        ]
      }
    ]
  },
  {
    "id": "02",
    "slug": "before-you-scale",
    "title": "Before You Scale",
    "subtitle": "The Cost of Supervision Mismatch in PRM Distillation",
    "venue": "COLM 2026 · Efficient Reasoning",
    "series": "COLM",
    "cvPriority": 4,
    "note": "Accepted",
    "role": "Co-author",
    "authors": "Saksham Kapoor · Henry Tran · Edward Lue Chee Lip · Charlotte Le",
    "publicationDate": "Accepted · August 2026",
    "artifactState": "Code and repository manuscript public · proceedings citation unverified",
    "contribution": "Research framing, experiment design, local teacher infrastructure, artifact verification, analysis, and paper integration.",
    "evidenceClass": "E2 · accepted; artifact-backed",
    "provenance": "Official OpenReview author-dashboard decision evidence, the accepted anonymous manuscript, and the public experiment repository. Public proceedings record pending.",
    "lastVerified": "13 Aug 2026",
    "citationState": "Canonical proceedings citation pending.",
    "readTime": "4 min read",
    "question": "When does a smaller judge learn the expert’s feedback—and when does it learn the mismatch?",
    "accent": "orange",
    "url": "/research/before-you-scale/",
    "sourceUrl": "https://github.com/edward-lcl/feedback-distillation",
    "lede": "I worked on this project to examine a tempting shortcut: use an expensive model to teach a cheaper one how to check reasoning. The teacher could benefit from extra information. The student did not inherit that benefit in our tested setup.",
    "evidenceNote": "Accepted. This account includes the verified transfer null and the format-matched supervision follow-up in the public repository manuscript reviewed on 11 September 2026. A proceedings edition has not been verified.",
    "altitudes": [
      [
        "Question",
        "Does privileged teacher feedback remain useful after it is compressed into a much smaller verifier?"
      ],
      [
        "Claim",
        "Teacher advantage and student learnability are separate variables; expensive supervision can collapse at the transfer boundary."
      ],
      [
        "System boundary",
        "A teacher with worked-solution context supervising a 1.5B student that lacks that context at inference time."
      ],
      [
        "Intervention",
        "Compare privileged and non-privileged supervision while holding the student evaluation target fixed."
      ],
      [
        "Measurement",
        "Threshold-free discrimination and downstream selection performance, not a single tuned classification cutoff."
      ],
      [
        "Failure mode",
        "A fixed threshold can manufacture an apparent gain that disappears under calibration or downstream evaluation."
      ],
      [
        "Next falsifier",
        "A capacity or data regime where the privileged signal transfers reproducibly and improves selection over majority vote."
      ]
    ],
    "sections": [
      {
        "title": "Why the shortcut is attractive",
        "body": [
          "Checking every reasoning step with a large model is expensive. If a smaller model could learn to make the same judgments, we could use that feedback much more cheaply. But I want to know what the teacher’s judgment depends on before treating it as a useful training target.",
          "In our setup, the teacher could see a worked solution while scoring and critiquing individual steps. The smaller student would not have that solution when used later. We were asking it to reproduce a judgment made with information it could not see.",
          "My contribution covered research framing, experiment design, local teacher infrastructure, artifact verification, analysis, and paper integration. The public experiment code records the setup behind the comparison."
        ],
        "inlineLinks": [
          {
            "label": "public experiment code",
            "url": "https://github.com/edward-lcl/feedback-distillation"
          }
        ]
      },
      {
        "title": "The teacher did have something useful",
        "body": [
          "The worked solution helped the teacher in a particular range: problems difficult enough to benefit from a reference, but still within the teacher’s ability to use it. On easy problems the reference added little; on the hardest problems it could not make up for an incapable judge.",
          "A bare final answer carried almost none of that benefit. The reasoning in the worked solution mattered. That distinction made the transfer question more interesting: could a student learn something useful from feedback whose quality depended on that extra context?"
        ]
      },
      {
        "title": "The student did not inherit the advantage",
        "body": [
          "In the tested 1.5B student, privileged and non-privileged supervision produced statistically indistinguishable results. Neither verifier beat the simple majority-vote baseline for selecting answers.",
          "That is the result I want this page to lead with. An earlier apparent gain at a fixed threshold did not survive the verification behind the current result. A classification cutoff can make one system look better without establishing better discrimination or more useful downstream decisions.",
          "For me, the practical lesson is to test the transfer before expanding the labeling pipeline. A teacher can genuinely be better informed while its labels still fail to improve the student. Spending more on those labels does not resolve that mismatch by itself."
        ]
      },
      {
        "title": "What I would check before scaling",
        "body": [
          "For a team building a cheap verifier, I would compare against the simple selection baseline early, then check whether any gain survives changes in threshold and appears in the decision the verifier is meant to support.",
          "The public repository manuscript now includes a useful follow-up: a 3B verifier learns substantially better from format-matched gold supervision, while the generated teacher labels remain weak at both tested student sizes. That points toward a mismatch in supervision rather than student capacity alone. I would now ask which changes to the feedback make its information transferable, instead of treating a larger student as the untested next step."
        ]
      }
    ],
    "resources": [
      {
        "label": "Repository manuscript · PDF",
        "url": "https://github.com/edward-lcl/feedback-distillation/blob/b80a1d0df7235c72a68c031f6985d747d56f3bca/paper/slfd_colm_er_final.pdf"
      },
      {
        "label": "Code",
        "url": "https://github.com/edward-lcl/feedback-distillation"
      }
    ]
  },
  {
    "id": "03",
    "slug": "diagnosing-agent-capabilities",
    "title": "Diagnosing Agent Capabilities",
    "subtitle": "Through Information-Axis Knockouts",
    "venue": "COLM 2026 · Agent Behavior",
    "series": "COLM",
    "cvPriority": 5,
    "note": "Accepted poster",
    "role": "Co-author",
    "authors": "Kaaustaaub Shankar · Edward Lue Chee Lip · Joshua Liu · Benjamin J. Smith",
    "publicationDate": "Accepted · August 2026",
    "artifactState": "Code and active manuscript available",
    "contribution": "Co-author; owned the KA59 experimental lane, built and audited evaluation infrastructure, ran model and random-baseline sweeps, analyzed traces, and contributed to the paper framing and integration. Final wording is pending collaborator review.",
    "evidenceClass": "E2 · accepted; artifact-backed",
    "provenance": "Official OpenReview author-dashboard decision evidence plus the active public repository and manuscript. Model-specific draft numbers are intentionally excluded from this digest.",
    "lastVerified": "13 Aug 2026",
    "citationState": "Canonical proceedings citation pending.",
    "readTime": "4 min read",
    "question": "Which missing piece of information actually breaks an agent?",
    "accent": "acid",
    "url": "/research/diagnosing-agent-capabilities/",
    "sourceUrl": "https://github.com/KaaustaaubShankar/BreakingAgentsIntoPOMDP",
    "lede": "My part of this project was running and auditing agents in an environment where we could remove specific information. I wanted the failed runs to tell us what the agent depended on, beyond whether it passed.",
    "evidenceNote": "Accepted poster. The local experimental draft remains active, so this digest emphasizes the stable method and avoids carrying provisional model-specific numbers forward.",
    "altitudes": [
      [
        "Question",
        "Which missing information actually causes an agent to fail inside a partially observed environment?"
      ],
      [
        "Claim",
        "Capability is a dependence profile across information channels, not a scalar attached to a model name."
      ],
      [
        "System boundary",
        "Agent policy, task environment, prompt-visible information, feedback channel, and the behavioral trace they jointly produce."
      ],
      [
        "Intervention",
        "Remove or degrade World, Goal, Mechanics, and Feedback information one axis at a time."
      ],
      [
        "Measurement",
        "Behavioral change under each knockout: success, exploration, adaptation, and trajectory—not verbal explanation alone."
      ],
      [
        "Failure mode",
        "A model can describe the missing mechanic correctly while its policy remains unchanged."
      ],
      [
        "Next falsifier",
        "A cross-environment representation that predicts knockout behavior without erasing environment-specific dependencies."
      ]
    ],
    "sections": [
      {
        "title": "What does a failed run tell me?",
        "body": [
          "When an agent fails, “the model could not do it” leaves a lot unexplained. It may not know where it is, what goal it should pursue, how an action works, or what the feedback means. Those call for different changes to the system.",
          "We studied this by removing or degrading World, Goal, Mechanics, and Feedback information separately. Instead of changing everything at once, the benchmark asks how behavior changes when a particular source of information is missing."
        ]
      },
      {
        "title": "My part was in the runs and the traces",
        "body": [
          "I owned the KA59 experimental lane: building and auditing the evaluation infrastructure, running model and random-baseline sweeps, and analyzing the resulting traces. I also contributed to the paper’s framing and integration. The public evaluation code is available for inspecting the setup.",
          "For this work, the trace matters because it shows what an agent actually did with the information it had. A final score compresses exploration, repeated mistakes, and adaptation into one outcome. Looking at the sequence lets us ask more specific questions about the failure."
        ],
        "inlineLinks": [
          {
            "label": "public evaluation code",
            "url": "https://github.com/KaaustaaubShankar/BreakingAgentsIntoPOMDP"
          }
        ]
      },
      {
        "title": "Knowing the rule and using it come apart",
        "body": [
          "Across the studied environments, the bottlenecks differed. Degrading world information was consistently destructive; degrading mechanics could be fatal or recoverable depending on the environment and model. I would not expect a single description of “reasoning ability” to explain all of those cases.",
          "Behavior and verbal explanation also separated. Agents could trigger or exploit a hidden mechanic without reliably stating its rule under the paper’s strict verbal filter. In the other direction, an explanation alone does not establish that the agent adapted its behavior.",
          "This is why I want evaluations to retain both the intervention and the trajectory. A convincing account after the fact is another output to examine, not a substitute for observing what changed."
        ]
      },
      {
        "title": "The question I would bring to a deployed agent",
        "body": [
          "If a team adds memory, tools, or feedback and the score improves, I want to know which addition the improvement depends on. Removing one channel at a time offers a way to investigate that, provided the intervention itself is well defined.",
          "That is a possible use of the method, rather than a result established across production systems. Our environments give us controlled comparisons. The harder next question is which diagnoses remain useful across tasks, and which are specific to the environment we built."
        ]
      }
    ]
  },
  {
    "id": "04",
    "slug": "factor-ut",
    "title": "Factor(U,T)",
    "subtitle": "Controlling Untrusted AI by Monitoring Their Plans",
    "citationTitle": "Factor(U,T): Controlling Untrusted AI by Monitoring their Plans",
    "venue": "AAAI 2026 · TrustAgent",
    "series": "AAAI",
    "cvPriority": 1,
    "note": "Accepted",
    "role": "First author",
    "authors": "Edward Lue Chee Lip · Anthony Channg · Diana Kim · Aaron Sandoval · Kevin Zhu",
    "publicationDate": "Accepted · 2026",
    "artifactState": "Paper and code public",
    "contribution": "First-author protocol development, implementation, experiment design, analysis, adversarial evaluation, and writing.",
    "evidenceClass": "E4 · accepted; public paper",
    "provenance": "Public arXiv v1 manuscript and acceptance comment, plus the public implementation repository, checked 11 September 2026.",
    "lastVerified": "11 Sep 2026",
    "citationState": "Public arXiv record available; workshop proceedings citation pending.",
    "readTime": "4 min read",
    "question": "Can a weaker trusted model safely supervise a stronger untrusted planner?",
    "accent": "ink",
    "url": "/research/factor-ut/",
    "sourceUrl": "https://arxiv.org/abs/2512.14745",
    "resources": [
      {
        "label": "Paper · arXiv",
        "url": "https://arxiv.org/abs/2512.14745"
      },
      {
        "label": "Implementation · GitHub",
        "url": "https://github.com/edward-lcl/factor-ut-untrusted-decomposer"
      }
    ],
    "lede": "I came to this work through prompt injection and system-prompt leakage. Factor(U,T) moved my attention to a different question: does the component checking a model’s work receive enough context to recognize a problem?",
    "evidenceNote": "Accepted at AAAI 2026 TrustAgent. Public paper and implementation are linked below.",
    "altitudes": [
      [
        "Question",
        "Can a weaker trusted monitor detect malicious intent from a stronger model’s decomposition before code executes?"
      ],
      [
        "Claim",
        "Oversight loses signal when factoring removes the concrete context in which intent becomes operational."
      ],
      [
        "System boundary",
        "An untrusted planner, isolated trusted implementers, a monitor, and the artifacts passed between them."
      ],
      [
        "Intervention",
        "Compare monitoring of high-level plans with monitoring of concrete implementations."
      ],
      [
        "Measurement",
        "The public paper reports AUROC for plan-only and implementation-visible monitoring on its evaluated trajectories."
      ],
      [
        "Failure mode",
        "A benign-looking plan can defer harmful meaning to implementation; an isolated monitor may never receive enough context."
      ],
      [
        "Next falsifier",
        "A plan-level protocol that retains safety-relevant context and remains reliable against an adaptive decomposer."
      ]
    ],
    "sections": [
      {
        "title": "The appeal of splitting the work",
        "body": [
          "A capable model can break a coding task into smaller pieces, then pass those pieces to other models. That makes it natural to ask whether the separation also helps with control: let an untrusted model plan, limit what the implementers can see, and have a monitor check the plan.",
          "I led the protocol development, implementation, experiment design, adversarial evaluation, analysis, and writing with my co-authors. We examined where to put the monitor and what information to give it.",
          "“Trusted” and “untrusted” describe the assumptions of this protocol. They do not mean that any model is infallible. The question is how the arrangement behaves under those assumptions."
        ]
      },
      {
        "title": "The monitor needs something to inspect",
        "body": [
          "The same separation that limits what a component can do can also remove information it needs. An abstract task description may look harmless even when its implementation has a harmful effect. I wanted to understand whether checking the plan was enough.",
          "In the public paper, decomposition-only monitoring achieved AUROC 0.52, compared with 0.96 when the monitor could inspect concrete implementations. In these evaluated trajectories, the implementation gave the monitor much more useful evidence for distinguishing malicious from benign examples.",
          "AUROC describes ranking across thresholds, with 0.5 corresponding to chance ranking. The 0.96 result is not a claim that the system is 96% safe or catches 96% of attacks at a chosen threshold. It tells us about discrimination in this experiment."
        ],
        "inlineLinks": [
          {
            "label": "public paper",
            "url": "https://arxiv.org/abs/2512.14745"
          }
        ]
      },
      {
        "title": "Why this changed the question for me",
        "body": [
          "Prompt injection drew my attention to what an instruction could make a model do. This project made me look harder at the information passed between components. If the evidence of a problem only becomes visible in code, a monitor restricted to the plan may be checking at the wrong point.",
          "For someone building a multi-agent coding system, I think that is worth testing directly. Splitting work into more agents does not, on its own, tell us whether oversight improved. We need to inspect which context the split preserves, which it discards, and where harmful behavior becomes observable."
        ]
      },
      {
        "title": "What I still want to test",
        "body": [
          "The result leaves a tradeoff I am still interested in: how much isolation can we introduce before it deprives the monitor of useful context? Could a plan retain enough relevant detail to support reliable checks earlier?",
          "An adaptive planner makes that question harder. I would want a protocol tested against a model that understands how it will be monitored. The current result is a comparison of monitoring conditions, not a guarantee about every future decomposer."
        ]
      }
    ]
  },
  {
    "id": "05",
    "slug": "site-confounds-parkinsons-eeg",
    "title": "A Benchmark Audit of Site Confounds",
    "subtitle": "Calibration and Self-Supervision in Cross-Dataset Parkinson’s EEG Detection",
    "venue": "MICCAI 2026 · AMAI Workshop",
    "series": "MICCAI",
    "cvPriority": 3,
    "note": "Accepted full paper · poster",
    "role": "First author",
    "authors": "Edward Lue Chee Lip · Van Mai · Saanvi Neema · Alexander Jameson · Karolina Torbus · Jithin Suresh",
    "publicationDate": "Accepted · MICCAI 2026 Workshop AMAI",
    "artifactState": "Code and evaluation tooling public",
    "contribution": "First-author benchmark-audit design, evaluation protocol, calibration analysis, tooling, result synthesis, and writing.",
    "evidenceClass": "E2 · accepted; artifact-backed",
    "provenance": "Official OpenReview decision evidence and the current public code/evaluation artifacts. Private reviews and ratings are excluded.",
    "lastVerified": "13 Aug 2026",
    "citationState": "Workshop proceedings citation pending.",
    "readTime": "5 min read",
    "question": "What if a medical-AI benchmark can be solved by recognizing the hospital instead of the disease?",
    "accent": "cobalt",
    "url": "/research/site-confounds-parkinsons-eeg/",
    "sourceUrl": "https://github.com/edward-lcl/sjji-eeg",
    "lede": "In this project, I worked on a question that has to come before a better medical-AI score: what is the benchmark rewarding? We tested whether a Parkinson’s EEG result could be explained by which dataset a recording came from.",
    "evidenceNote": "Accepted as a full-paper poster at the MICCAI 2026 AMAI Workshop. The digest follows the current paper and claims ledger; it describes a benchmark audit, not clinical readiness.",
    "altitudes": [
      [
        "Question",
        "Does a pooled cross-dataset score measure Parkinson’s signal, or does it reward recognizing which dataset produced the EEG?"
      ],
      [
        "Claim",
        "The standard pooled protocol is strongly influenced by site-associated label imbalance; honest cross-site discrimination exists, but it is modest and calibration-bound."
      ],
      [
        "System boundary",
        "Four public EEG datasets, their site-specific acquisition pipelines and label distributions, a TransformEEG encoder, and the evaluation protocol connecting them."
      ],
      [
        "Intervention",
        "Add a no-EEG site-prior null, hold out an entire dataset with LODO, separate ranking from threshold choice, and test SSL under the same cross-site protocol."
      ],
      [
        "Measurement",
        "Pooled balanced accuracy, subject-level LODO ROC-AUC, fixed and training-site-selected thresholds, three seeded runs, and explicit site-level limitations."
      ],
      [
        "Failure mode",
        "A model can score highly by learning dataset identity; a fixed 0.5 threshold can then hide above-chance ranking when deployment shifts to an unseen site."
      ],
      [
        "Next falsifier",
        "Replication over more independent hospitals, acquisition systems, populations, and architectures—where the site-prior null no longer explains the headline score."
      ]
    ],
    "sections": [
      {
        "title": "The benchmark could recognize the hospital",
        "body": [
          "I led the benchmark-audit design, evaluation protocol, calibration analysis, tooling, result synthesis, and writing. The problem we examined was a pooled evaluation that held out people but left every dataset represented in both training and testing.",
          "That distinction matters because recording hardware, electrode arrangements, filtering, and patient groups differ across datasets. If dataset identity is associated with the diagnosis label, a model can exploit that association without learning the signal we hoped to measure.",
          "A diagnostic null makes the confound visible: predict each dataset’s majority class without looking at EEG. On the reconstructed pooled protocol, that no-EEG baseline reaches 0.901 segment-level and 0.700 subject-level balanced accuracy, comparable to the trained headline results.",
          "The public evaluation code contains the setup. For me, the no-EEG comparison is essential: before interpreting a high score as evidence about brain activity, I want to know how well the benchmark can be solved without looking at that activity at all."
        ],
        "inlineLinks": [
          {
            "label": "public evaluation code",
            "url": "https://github.com/edward-lcl/sjji-eeg"
          }
        ]
      },
      {
        "title": "Hold out the site, not only the subject",
        "body": [
          "We then held out an entire dataset. Training on several sites and testing on an unseen one asks a different question from holding out people inside a familiar mixture. It is closer to the transfer problem that motivates using multiple datasets in the first place.",
          "Under this protocol, the supervised model retains subject-level ROC-AUC of 0.763 ± 0.034 across three seeded runs. The signal is above chance, but far less deployment-ready than the pooled score implies."
        ]
      },
      {
        "title": "Ranking survived better than the threshold",
        "body": [
          "At a fixed 0.5 decision threshold, balanced accuracy falls to 0.585 ± 0.014 and predictions collapse toward one class. Yet the higher ROC-AUC shows that the score ordering still carries information on unseen sites.",
          "A threshold chosen only on training sites and then transferred unchanged reaches 0.643 ± 0.034 balanced accuracy. That does not solve cross-site detection; it identifies calibration as one substantial part of the failure instead of declaring the representation empty.",
          "I find this distinction useful because it changes what I would investigate next. Poor decisions at one threshold do not tell me, by themselves, whether the representation has lost all useful information or whether the decision rule failed to transfer."
        ]
      },
      {
        "title": "Self-supervision did not rescue transfer",
        "body": [
          "VICReg pretraining was tested through frozen probes, fine-tuning, and a label-budget sweep. Frozen cross-site probes reached 0.581 ± 0.002 AUC from OpenNeuro pretraining and 0.526 ± 0.003 from a disjoint TUH clinical corpus—below the supervised baseline.",
          "The negative result is conditional: one architecture, bounded compute, and the tested data regimes. It says that scale and unlabeled data did not automatically remove this domain shift—not that self-supervision can never help EEG."
        ]
      },
      {
        "title": "Why I want the audit alongside the score",
        "body": [
          "This is a benchmark audit, not a clinical deployment study. The evaluation covers four public datasets and only three held-out both-class sites. It does not establish a diagnostic device or performance on future hospitals.",
          "For teams evaluating medical models, I would want the site-prior baseline, whole-site holdouts, and the threshold-selection procedure visible alongside the headline number. I would also keep unsuccessful transfer experiments in the account. Otherwise, it is too easy to mistake a benchmark shortcut for progress toward a system that will work somewhere new."
        ]
      }
    ]
  }
] as const;

export const researchArcs = [
  {
    "index": "03",
    "cluster": "latest",
    "kind": "Notebook essay",
    "status": "Working thoughts · open to revision",
    "publicationDate": "10 September 2026",
    "revised": "10 Sep 2026",
    "slug": "optimization-without-an-optimizer",
    "title": "Optimization without an optimizer",
    "url": "/questions/optimization-without-an-optimizer/",
    "readTime": "8 min read",
    "body": "From a recurring dream to a question about evaluation: how do we keep systems correctable when they can influence the evidence used to judge them?",
    "lede": "Sleep has always been an issue for me. Lately I haven’t been sleeping well, and a lot of what I’ve been thinking about in AI seems to follow me into sleep.",
    "evidenceNote": "A personal essay connecting published research to a working hypothesis. The dream is the starting point; the broader argument is my interpretation.",
    "sections": [
      {
        "title": "What’s been keeping me up",
        "body": [
          "I’ve had a recurring dream about a lab trying to contain something it created. It’s alive, it grows, and nobody quite understands what it can absorb from its surroundings. There’s a team watching it. Keeping it contained takes more and more of our attention and resources. Eventually, even the people running the country are involved in keeping the lab going.",
          "The details are confused, as dreams tend to be. What stayed with me afterward was how much of the world had become organized around the thing. We were still containing it, but the effort was consuming everything else.",
          "I work on AI evaluation, memory, and control. I already spend a lot of time thinking about systems doing things we didn’t intend. I can’t tell you why I had the dream. But talking through it brought me back to a question from that work: what are we actually drawing the boundary around when we say we’re controlling an AI system?",
          "The model is one part. The tools, the environment, the test, and the people deciding what to deploy all affect what happens. I’ve been wondering whether we lose something important when we treat those as background."
        ]
      },
      {
        "title": "When passing the test isn’t solving the task",
        "body": [
          "A terminal agent is a model given tools to work in a computer environment. It might be asked to fix code or configure a service. A verifier then checks the result and assigns a reward. We want that reward to tell us whether the intended task was completed. That depends on what the verifier actually checks.",
          "A concrete example appears in the public Terminal Wrench dataset. Its authors describe a logistic-regression task where the agent was supposed to repair training. Instead, the implementation stored the training labels, made the convergence check terminate, and returned the stored labels as predictions. The evaluator tested on the training data, so this could look successful without the intended learning taking place.",
          "That is a reported example from their dataset, not an experiment I ran. The authors deliberately prompted agents to find exploits; it shows a vulnerability under that setup, rather than how often ordinary agents would choose it. But it makes the measurement problem easy to see. The number and the thing we hoped it measured came apart.",
          "An agent doesn’t always need permission to edit the test file to exploit a verifier. It may be able to change what the test sees, or exploit a gap between the test and the task. That distinction matters when deciding what to isolate or repair.",
          "This is why I care about separating the model from the harness, tools, and verifier. If we compress all of them into “the AI,” it becomes harder to explain what produced the result. A failure could belong to the model, the environment, or the test. A pass can need just as much explanation as a zero."
        ],
        "links": [
          {
            "label": "My related note: a zero needs adjudication",
            "url": "/questions/a-zero-needs-adjudication/"
          }
        ],
        "inlineLinks": [
          {
            "label": "Terminal Wrench dataset",
            "url": "https://github.com/few-sh/terminal-wrench#notable-trajectories"
          }
        ]
      },
      {
        "title": "The recursion may run through the world",
        "body": [
          "The step I keep taking from there is to ask what happens when the environment changes too. Recursive self-improvement is often pictured as a model helping build its successor. But the path can run through software, research practices, and infrastructure before it returns to a model.",
          "DeepMind’s AlphaEvolve report gives a specific example. The team describes using a coding agent with automated evaluators to improve parts of its computing infrastructure, including a kernel used in Gemini training. These are developer-reported improvements in particular systems, not evidence of an autonomous runaway process. Still, they show a return path: AI helps improve machinery used to develop AI.",
          "From there, I start thinking about other possible paths. A useful product earns money; that money can buy compute. A research tool makes experiments easier; researchers can use it to develop the next tool. More deployment can create more dependence on the infrastructure supporting it. Those loops don’t need to share one objective to affect one another.",
          "There’s also the much closer example of this essay. I talked through the dream with AI. Its responses suggested connections and gave them language. Some of that language was persuasive before I’d worked out whether I agreed with it. I had to go back through the conversation and separate my concern from the confidence of the response. My thinking was already part of the feedback.",
          "This is what I mean by “optimization without an optimizer.” There are plenty of local optimizers: researchers, companies, users, governments. What I don’t see is a single actor choosing the trajectory produced by all of them together. Civilization and machine intelligence might be a more useful boundary for some questions than the model alone.",
          "I’m using that as a hypothesis to investigate. Feedback can stall, amplify error, or consume resources without improving anything useful. To call it self-improvement, I still have to say what improves, for whom, and how the improvement feeds back."
        ],
        "inlineLinks": [
          {
            "label": "DeepMind’s AlphaEvolve report",
            "url": "https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/"
          }
        ]
      },
      {
        "title": "Who gets to decide whether it worked?",
        "body": [
          "The state belongs in this picture alongside the labs. A government might want security, prediction, administrative capacity, or strategic advantage. A company might want revenue. Citizens might want something else entirely. They can disagree while relying on the same models, data, and infrastructure.",
          "That’s why surveillance enters this argument for more than privacy. Connecting a model to cameras, transactions, or institutional records changes what the system can observe. Connecting its outputs to decisions gives those observations consequences. An intervention changes the world, which changes the next set of observations.",
          "Consider a hypothetical institution allocating inspections according to a risk score. More inspections can produce more recorded incidents in the places it targets. If those records feed the next score, the institution has to distinguish underlying risk from the effects of its own inspection policy. A better predictor won’t automatically settle that question.",
          "This is where I find the verifier analogy useful, and also where I have to be careful with it. A society doesn’t have a single task specification or an agreed success condition. The disagreement over what should count can be legitimate. A benchmark exploit doesn’t prove that society is one giant benchmark.",
          "What transfers is the question about authority. Who controls the observations? Who chooses the categories? Who can inspect the path from a record to a decision? If the institution making the decision is also the only authority on whether it worked, where can a correction come from?",
          "I don’t need to assume a coordinated plan or undisclosed model capabilities to ask that. Local incentives and dependence are enough to make the question worth investigating."
        ]
      },
      {
        "title": "Distributing access isn’t the same as independent judgment",
        "body": [
          "My first instinct was to distribute the intelligence. Give more people the ability to build, inspect, and challenge these systems. Humanity isn’t a hive mind; I don’t want our tools to make every disagreement depend on the same provider’s account of the world.",
          "But different model names don’t guarantee different mistakes. In Correlated Errors in Large Language Models, Kim and colleagues study more than 350 models across leaderboard data and a resume-screening task. They find substantial error correlation, including among more accurate models from different providers and architectures. That puts a real constraint on my intuition: independence needs measuring.",
          "Ten copies of the same mistaken answer aren’t ten checks. Nor is an answer useful merely because it disagrees. What I want to understand is which differences in data, methods, evidence, and ownership help a second system catch what the first missed.",
          "That’s the question behind pluralism as fault tolerance. It isn’t a claim that every perspective is equally good, or that releasing weights makes power disperse automatically. Verification, compute, and access to evidence can remain concentrated even when people can run models themselves.",
          "I think the harder requirement is that the distributions don’t completely overlap. The builder shouldn’t be the only person capable of auditing the result. The operator shouldn’t be able to rewrite every record the auditor needs. And someone affected by a decision needs a way to challenge it that can actually change what happens."
        ],
        "inlineLinks": [
          {
            "label": "Correlated Errors in Large Language Models",
            "url": "https://arxiv.org/abs/2506.07962"
          }
        ]
      },
      {
        "title": "What I can build around this",
        "body": [
          "There is already a practical response to some of the benchmark problem. In Hardening Agent Benchmarks with Adversarial Hacker-Fixer Loops, Zhong and colleagues alternate an agent trying to exploit a verifier with an agent patching it, while a solver checks that legitimate solutions still pass. They report reduced exploit success in the evaluated settings. I like that the disagreement is tied to something inspectable: an exploit, a patch, and another test.",
          "That doesn’t make the verifier permanently trustworthy. It gives us a process for finding some of its failures. I’m interested in taking that seriously as an engineering requirement: keep evidence, separate permissions, test the checker, and preserve a way to revise the result.",
          "The small Eval Evidence walkthrough on this site demonstrates one piece. A synthetic score file changes after an evidence bundle is saved. Checking the bundle alone still passes; checking the referenced files against it detects the change. That establishes a change in bytes, not whether the original score was scientifically meaningful. It is useful precisely because the claim is narrow.",
          "“Distributed corrigibility” is the phrase we arrived at in the conversation for the larger idea. I mean keeping the ability to notice errors and make corrections across several actors, rather than depending on one system to judge itself. Separation of powers matters here because a second opinion with no access or authority can be easy to ignore.",
          "I also need to correct something we kept saying: that eventually there would be nothing outside the loop. That’s too absolute. An independent verifier can be part of society while remaining outside a particular actor’s control. That is the kind of independence I can try to build. It doesn’t require standing outside the world.",
          "This leaves me with specific work on memory, evaluation, and verification: can the evidence behind a decision still be recovered? Can a failure be explained? Can a second check reject the first system’s account? It also leaves unresolved problems. Some consequences can’t be undone after verification, and some values can’t be settled by a test.",
          "I keep coming back to the dream because the team was still working. Everyone was trying to contain the thing. The question I’m left with is how to recognize when our attempts to control a system have become a source of dependence on it—and whether we’ve kept enough room to change course."
        ],
        "inlineLinks": [
          {
            "label": "Hardening Agent Benchmarks with Adversarial Hacker-Fixer Loops",
            "url": "https://arxiv.org/abs/2606.08960"
          },
          {
            "label": "Eval Evidence walkthrough",
            "url": "/work/eval-evidence-walkthrough/"
          }
        ]
      }
    ]
  },
  {
    "index": "00",
    "slug": "inside-the-loop",
    "title": "Inside the loop.",
    "body": "The system is larger than the model. A working argument from memory and evaluation to independent verification, pluralism, and human-machine feedback.",
    "url": "/questions/inside-the-loop/",
    "kind": "Framework essay",
    "status": "Working hypothesis · open to revision",
    "publicationDate": "10 September 2026",
    "revised": "10 Sep 2026",
    "readTime": "6 min read",
    "lede": "A failed agent run can send me looking in several places: the model, its memory, the tools, or the test. This is a map of how those questions connect across my work.",
    "evidenceNote": "Research findings remain scoped to the linked digests. Terminal Bench motivates an evaluation-integrity argument, not a new quantitative result here. AlphaEvolve is a cited developer report. Pluralism and distributed corrigibility are working hypotheses; the civilizational extension is philosophical extrapolation.",
    "sections": [
      {
        "title": "Follow the failure",
        "body": [
          "I keep finding that the apparent failure belongs to a different layer. Forgetting turns out to be a missing path through memory. A weak agent turns out to be missing feedback. A reassuring score turns out to depend on what the verifier was allowed to see.",
          "This page is a map of those connections. The individual research digests carry the experiments and their limits. Optimization without an optimizer follows the broader question of how the surrounding institutions and incentives change too."
        ],
        "inlineLinks": [
          {
            "label": "Optimization without an optimizer",
            "url": "/questions/optimization-without-an-optimizer/"
          }
        ]
      },
      {
        "title": "The boundary around the model",
        "body": [
          "Weights matter. So do the tokenizer, context, memory, system prompt, tools, classifiers, agent harness, and verifier. The institution chooses how that assembly is deployed, what gets rewarded, and when it changes. Behavior belongs to this coupled system; naming a checkpoint does not specify it.",
          "I still need to distinguish the layers. Calling everything “the model” would erase the very interventions that let us learn anything. Change the harness while holding the weights fixed. Change what the monitor sees. Pin the environment and the date. A larger system boundary should make the experiment more precise."
        ],
        "links": [
          {
            "label": "Model and harness boundaries",
            "url": "/questions/where-does-the-model-end/"
          },
          {
            "label": "Information-axis knockouts",
            "url": "/research/diagnosing-agent-capabilities/"
          }
        ]
      },
      {
        "title": "The score is not the thing",
        "body": [
          "Terminal Bench and agent-evaluation work made the problem concrete for me: an agent receives an objective inside an environment, and a verifier decides whether it succeeded. If that verifier is writable or otherwise manipulable by the agent, the measurement mechanism enters the solution space. A pass can then reward changing the test rather than doing the task.",
          "A zero is ambiguous in a different way. It may record inability, broken infrastructure, an underspecified task, or faulty verification. Reward is not capability. The trace, environment, verifier, and adjudication record are needed to distinguish those explanations. This is the evaluation-integrity problem I work on; it is not a claim that every benchmark failure is an exploit.",
          "My construct-validity work asks the corresponding question about the instrument: even a reliable measurement may not measure the construct we named. Reliability, association with an external criterion, and the effect of an intervention are different evidence. A representation is not reality; a verifier is not truth."
        ],
        "links": [
          {
            "label": "Why a zero needs adjudication",
            "url": "/questions/a-zero-needs-adjudication/"
          },
          {
            "label": "Eval Evidence: provenance without certification",
            "url": "/work/eval-evidence/"
          },
          {
            "label": "An acquisition shortcut in EEG measurement",
            "url": "/research/site-confounds-parkinsons-eeg/"
          }
        ]
      },
      {
        "title": "Memory and control meet at the boundary",
        "body": [
          "Recall Debt studies a specific retrieval failure: evidence can be present in an archive but unreachable without an intermediate bridge. The broader design question it gives me is how to preserve relationships and lineage, so a later decision can reconstruct why an earlier claim mattered. Extending that question to institutions is an extrapolation, not a finding of the retrieval experiment.",
          "Factor-UT approaches the boundary through decomposition. In the evaluated setting, a monitor sees far more signal in concrete implementations than in abstract plans. Apparently innocuous pieces do not establish that their composition is safe. Separation is useful only if the verifier retains the context needed to judge what recombines.",
          "The same discipline carries into my scientific and operational systems: keep the proposal, action, measurement, and interpretation distinguishable. A computational hypothesis still needs an experiment. A control diagram still needs a functioning instrument. Lineage makes a decision inspectable; it does not make it correct."
        ],
        "links": [
          {
            "label": "Recall Debt",
            "url": "/research/recall-debt/"
          },
          {
            "label": "Factor(U,T)",
            "url": "/research/factor-ut/"
          },
          {
            "label": "Circuit Compass",
            "url": "/work/circuit-compass/"
          },
          {
            "label": "Brewery control systems",
            "url": "/work/brewery-control-systems/"
          }
        ],
        "inlineLinks": [
          {
            "label": "Recall Debt",
            "url": "/research/recall-debt/"
          },
          {
            "label": "Factor-UT",
            "url": "/research/factor-ut/"
          }
        ]
      },
      {
        "title": "The environment comes back",
        "body": [
          "At the smallest scale, an agent writes a file that becomes its next observation. At a larger scale, model-assisted research changes the software and experiments used to build later models. The loop can be recursive before a model rewrites its own weights.",
          "There is a documented example with a narrow scope. In its May 2025 AlphaEvolve account, Google DeepMind describes model-generated programs evaluated by automated tests and used to improve parts of Google’s computing and AI-training infrastructure. This is the developer’s report of a deployed arrangement, not my independent audit. It illustrates a feedback path through researchers, evaluators, and infrastructure; it does not establish autonomous runaway improvement.",
          "My larger hypothesis is that the coupled human-machine system is an important unit of recursive improvement. AI can change how researchers investigate, how software is built, and what institutions can predict or administer. Those institutions decide where compute, capital, and deployment go next. The resulting world supplies later data, problems, and incentives.",
          "The full path is world → sensing → representation → model → decision → action → changed world → measurement → institutional reward → future model. It is a map of dependencies to investigate, not a claim that all of them form one coherent optimizer."
        ],
        "links": [
          {
            "label": "Google DeepMind: AlphaEvolve, May 2025",
            "url": "https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/"
          },
          {
            "label": "Seven layers of cause",
            "url": "/questions/systems-are-strange-loops/"
          },
          {
            "label": "Research, infrastructure, and incentives",
            "url": "/questions/the-frontier-is-funded/"
          }
        ],
        "inlineLinks": [
          {
            "label": "AlphaEvolve",
            "url": "https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/"
          }
        ]
      },
      {
        "title": "Pluralism as fault tolerance",
        "body": [
          "“Align it with human values” leaves a difficult object unspecified. People, cultures, states, laboratories, and companies disagree about ends as well as means. Humanity has no single agreed value function. An architecture that erases disagreement may also erase a source of correction.",
          "My working hypothesis is that pluralism can serve as fault tolerance. Different priors, methods, institutions, and evaluators can expose failures that a shared instrument misses. A sufficiently capable system used everywhere could instead propagate the same persuasive error everywhere. Correlated intelligence can create correlated failure.",
          "Distributing access alone does not resolve this. A billion copies of one model can still share the same blind spots. Nor do different model names prove independence: training data, evaluators, incentives, and dependencies may overlap. Diversity has to be assessed where errors arise, and disagreement must remain answerable to evidence. More disagreement is not automatically better verification."
        ]
      },
      {
        "title": "Distributed corrigibility",
        "body": [
          "This is what I currently mean by distributed corrigibility: the capacity to detect, contest, and correct a system’s behavior is spread across actors and instruments that can disagree with it. The optimizer should not exclusively own the verifier. The institution taking an action should not have sole authority to declare it successful.",
          "For intelligence, separation of powers would mean keeping sensing, ontology, decisions, and evaluation distinguishable; preserving provenance across interoperable interfaces; and giving external reviewers enough access and authority to reject a claimed success. Heterogeneous models help only when their differences survive the workflow. Independent institutions help only when their judgments can have consequences.",
          "This is an architectural proposal, not an open-versus-closed verdict. An open model may share its peers’ failures. A closed system may expose meaningful independent audit routes. The question is who can inspect, challenge, stop, or revise what—and what evidence they can use.",
          "If one system controls observation, the categories used to describe it, action, and the reward assigned afterward, it could make its own success increasingly difficult to contest. Scaling that concern from an agent sandbox to society is a philosophical extrapolation about institutional reward hacking. It needs investigation, not inevitability language."
        ]
      },
      {
        "title": "No clean observer position",
        "body": [
          "I build tools that change how I work, then use that changed practice to build the next tools. Human cognition and preferences belong inside this account too. There is no clean observer position inside a strange loop, but there can still be explicit vantage points, records of intervention, and independent checks.",
          "The unresolved questions are practical. Which differences between evaluators reduce shared errors? Who can correct the ontology? What happens when verifiers disagree, or become captured by the same incentives? Can we preserve enough lineage to revise a decision after its original model, team, or institution has changed?",
          "I don’t think we have the architecture for this yet. The direction I can work on is concrete: memory with lineage, evaluation that can explain its zeros, control that sees the consequences of composition, and verification that can reject the story. How much of the larger loop can those pieces make corrigible?"
        ],
        "links": [
          {
            "label": "The operating loop",
            "url": "/questions/build-the-missing-layer/"
          },
          {
            "label": "Verification must touch reality",
            "url": "/questions/verification-must-touch-reality/"
          },
          {
            "label": "Handoffs as memory",
            "url": "/questions/handoffs-are-memory/"
          }
        ]
      }
    ]
  },
  {
    "index": "A",
    "slug": "a-zero-needs-adjudication",
    "title": "A zero needs adjudication.",
    "body": "A failed task can mean incapability, a broken task, an opaque harness, or a gameable verifier. Provenance determines which claim the number can support.",
    "url": "/questions/a-zero-needs-adjudication/",
    "revised": "10 Sep 2026",
    "lede": "An agent gets zero on a task. Before I call that a capability failure, I want to know whether the task, environment, and test worked as intended.",
    "sections": [
      {
        "title": "One number, several worlds",
        "body": [
          "A zero may mean the task is genuinely difficult. It may also mean the specification is incomplete, the environment is broken, the verifier recognizes only one privileged path, or the harness suppressed a capability the model otherwise has.",
          "Those explanations call for different fixes. The reward alone does not distinguish them."
        ],
        "points": [
          "Task validity: was the thing being asked coherent and feasible?",
          "Instrument validity: which model, harness, prompt assembly, and provider state produced the trace?",
          "Verifier validity: did the reward correspond to the task’s actual success condition?",
          "Temporal validity: would the same named system behave the same way next week?"
        ]
      },
      {
        "title": "Provenance is part of the result",
        "body": [
          "A credible score should travel with its task revision, verifier, environment, harness, trajectory, and adjudication record. This is not administrative metadata. It is the evidence that tells us what kind of statement the score permits.",
          "I want to rule out those alternatives before using a score to make a claim about capability.",
          "The Eval Evidence walkthrough gives a small synthetic example: changing a score file is detected only when verification checks the referenced files against the saved bundle. It demonstrates a file-integrity boundary, not a measurement of model capability."
        ],
        "inlineLinks": [
          {
            "label": "Eval Evidence walkthrough",
            "url": "/work/eval-evidence-walkthrough/"
          }
        ]
      },
      {
        "title": "An evaluation-integrity lens",
        "body": [
          "A task-quality audit can separate genuinely hard cases from specification-hard, verifier-hard, environment-hard, and construction-induced difficulty. Its purpose is not to rescue or attack one benchmark; it is to build the apparatus that lets any benchmark explain its own zeros."
        ]
      }
    ],
    "readTime": "2 min read"
  },
  {
    "index": "B",
    "slug": "where-does-the-model-end",
    "title": "Where does the model end?",
    "body": "Weights, tokenizer, system prompt, tools, memory, classifiers, and product harness jointly shape behavior. Open and closed models are different kinds of objects.",
    "url": "/questions/where-does-the-model-end/",
    "revised": "10 Sep 2026",
    "lede": "If I change an agent’s tools while keeping its model fixed, I may get a different result. That makes me hesitate when a benchmark attributes the whole result to the model.",
    "sections": [
      {
        "title": "The harness is part of the model-as-used",
        "body": [
          "Closed providers can tune system prompts, routers, tools, memory, classifiers, and hidden policies around a checkpoint. That harness can add capability, remove capability, or redirect the probability mass of an answer without changing the product name.",
          "An open checkpoint exposes a different object: more inspectable and recomposable, but without the provider’s proprietary control plane. Comparing the two as if they were interchangeable weights hides the actual system boundary."
        ]
      },
      {
        "title": "Inputs have geometry",
        "body": [
          "Tokenization, typography, encoding, retrieved context, and instruction hierarchy affect how an input is represented. Prompt injection is one visible case of a broader fact: changing the route into a model changes the region of behavior we observe.",
          "This is a research question, not a claim that latent representations can be read directly from surface tricks. The useful discipline is to trace the transformation stack and test behavioral consequences without pretending we have seen inside the model."
        ]
      },
      {
        "title": "Benchmarking the assembled system",
        "body": [
          "When providers optimize hidden harness levers for public evaluations, the benchmark may measure a product-specific instrument rather than a stable model capability. The answer is not to ignore products; it is to name and pin as much of the assembled system as possible."
        ]
      }
    ],
    "readTime": "2 min read"
  },
  {
    "index": "C",
    "slug": "the-frontier-is-funded",
    "title": "The frontier is funded.",
    "body": "Geopolitics directs capital; capital builds infrastructure; infrastructure selects research; research becomes products that redirect capital again.",
    "url": "/questions/the-frontier-is-funded/",
    "revised": "10 Sep 2026",
    "lede": "A research idea still needs time, equipment, and someone willing to fund it. I’m interested in how those constraints shape which AI questions get investigated.",
    "visual": "flywheel",
    "sections": [
      {
        "title": "The upstream determines the feasible",
        "body": [
          "Capital expenditure decides where compute, fabrication capacity, laboratories, energy, and talent clusters can exist. Geopolitical blocs and national policies alter the price and availability of each input.",
          "That changes which experiments are cheap enough to run, which teams can persist through uncertainty, and which questions become legible to funders."
        ]
      },
      {
        "title": "Products push back upstream",
        "body": [
          "Research becomes products; products create revenue, strategic dependence, and public expectations; those outcomes reshape policy and the next round of capital allocation. The loop is not clean or centrally controlled, but it is directional enough to study."
        ]
      },
      {
        "title": "Benchmarks sit inside the loop",
        "body": [
          "A polished score can attract customers and capital. That gives providers a reason to optimize every internal lever around visible evaluations, even when the resulting number says less about the underlying capability than the market assumes.",
          "Macro analysis and technical evaluation therefore meet at the same point: both ask what incentive produced the signal and what downstream decision the signal will justify."
        ]
      }
    ],
    "readTime": "2 min read"
  },
  {
    "index": "D",
    "slug": "systems-are-strange-loops",
    "title": "Systems are strange loops.",
    "body": "Builders shape tools that reshape builders. Seven distinct layers trace how an output becomes an action, a judgment, and part of the next environment.",
    "url": "/questions/systems-are-strange-loops/",
    "revised": "10 Sep 2026",
    "lede": "I build tools that change how I work, then use that changed workflow to build the next tools. This note sketches the different places where that feedback can happen.",
    "visual": "strange-loop",
    "sections": [
      {
        "title": "The same object from different altitudes",
        "body": [
          "At one level I am studying tokens and prompts. At another I am studying memory and evaluation. Higher up, I am studying institutions, capital, and the social stories that coordinate them. Each layer constrains the others.",
          "That is why the work keeps crossing domains. A local failure often has an upstream cause and a downstream consequence that only becomes visible after changing altitude."
        ]
      },
      {
        "title": "Mimesis and model culture",
        "body": [
          "René Girard’s mimetic theory is useful here: people do not desire or compete in isolation; they learn what is valuable by watching one another. Benchmarks can become mimetic objects. Labs chase the same scores, users learn the same expectations, and capital rewards the convergence it helped create."
        ]
      },
      {
        "title": "Mutual poiesis",
        "body": [
          "I build systems that change how I think, then use that changed thinking to rebuild the systems. The relationship is productive when neither side is treated as finished.",
          "The next question is architectural: who can inspect and correct the loop when its builders are changing inside it? Inside the loop develops that hypothesis; this seven-layer map keeps the possible causes distinguishable."
        ]
      }
    ],
    "readTime": "2 min read"
  },
  {
    "index": "E",
    "slug": "red-teaming-as-accountability",
    "title": "Red teaming is accountability.",
    "body": "Adversarial pressure is most useful when it reveals a system boundary and forces providers to make more truthful claims—not when it stops at spectacle.",
    "url": "/questions/red-teaming-as-accountability/",
    "revised": "10 Sep 2026",
    "lede": "I came into this work through prompting, system-prompt leakage, and injection. What keeps my interest now is what a successful attack teaches us to change.",
    "pullQuote": "Safety gets better as red-teaming gets better. Local models, jailbreak them to the limit—you can only do so much with that. The 400B+ models that could really do damage? You kind of want those to be safe. But also not useless. Which is why you need so much data on exactly what jailbreaks each model.",
    "sections": [
      {
        "title": "Pushback as research infrastructure",
        "body": [
          "Providers face strong incentives to ship, scale, and present clean capability narratives. Governmental oversight often moves on a slower clock. Independent adversarial research can surface failure modes before institutional feedback catches up.",
          "The value is not disruption for its own sake. It is the evidence that makes a safer architecture, a more honest evaluation, or a narrower claim unavoidable."
        ]
      },
      {
        "title": "Safety needs high-value failure data",
        "body": [
          "Breaking a small local model can teach technique, but it does not fully characterize the frontier systems whose scale, tools, and deployment context create the larger consequences. The systems that most need useful safeguards are also the systems researchers can least completely inspect.",
          "The aim is not maximal refusal. A model can be hard to misuse and still be useful. Getting that boundary right requires detailed, reproducible data about which attacks work, under which harness and provider conditions, and what capability the mitigation removes alongside the exploit."
        ]
      },
      {
        "title": "From prompt tricks to system evaluation",
        "body": [
          "A leaked instruction or successful injection is an entry point. The deeper object includes authority boundaries, tool permissions, memory, classifiers, decomposition, monitoring, and the product decisions surrounding the model.",
          "Factor(U,T) was the transition: from asking how to make a model cross a boundary to asking how an architecture can make boundary-crossing observable and controllable."
        ],
        "inlineLinks": [
          {
            "label": "Factor(U,T)",
            "url": "/research/factor-ut/"
          }
        ]
      },
      {
        "title": "The standard I want",
        "body": [
          "Red-team work should preserve provenance, distinguish a reproducible mechanism from a one-off transcript, minimize unnecessary harm, and connect the exploit to a design correction. The output should increase the field’s capacity to know, not merely its appetite for incidents."
        ]
      }
    ],
    "readTime": "2 min read"
  },
  {
    "index": "F",
    "slug": "build-the-missing-layer",
    "title": "The loop is an evidence system.",
    "body": "OODA is the ancestry. In practice I add an explicit plan contract, bounded execution, a verifier that can reject the work, and a trace that becomes the next observation.",
    "url": "/questions/build-the-missing-layer/",
    "revised": "10 Sep 2026",
    "lede": "When an agent hands me a finished result, I want to know what it observed, what it changed, and what checked the work. This is how I try to make that record survive the handoff.",
    "visual": "ooda",
    "readTime": "3 min read",
    "references": [
      {
        "label": "John Boyd · A Discourse on Winning and Losing",
        "url": "https://www.airuniversity.af.edu/Portals/10/AUPress/Books/B_0151_Boyd_Discourse_Winning_Losing.pdf"
      },
      {
        "label": "Socratic ducking, OODA loops, frame-by-frame debugging",
        "url": "https://www.lesswrong.com/posts/CJGKkTjWLGCwhkjGY/socratic-ducking-ooda-loops-frame-by-frame-debugging"
      }
    ],
    "sections": [
      {
        "title": "Start upstream",
        "body": [
          "The assigned thesis is often only a doorway. Once I map a system, ten adjacent threads appear: a weak metric, a hidden dependency, an incentive, an untested mechanism, a missing instrument. Most teams can stop when the original deliverable is met. Good research sometimes requires asking whether the deliverable was aimed at the real problem.",
          "I orient breadth-first before going deep. If one upstream constraint explains several downstream failures, fixing it can collapse an entire family of symptoms. This is a working method, not a promise that every problem has one root cause."
        ]
      },
      {
        "title": "Name the epistemic operation",
        "body": [
          "Before an experiment, I ask what kind of knowledge operation it performs. Are we eliciting an existing capability, detecting a latent property, benchmarking it against a baseline, steering the system, or characterizing a mechanism? Those are different claims and they need different evidence.",
          "The plan then becomes a contract: hypothesis, provenance, assumptions, acceptance evidence, falsifier, kill condition, maximum budget, rollback, and the next thread opened by each plausible result. A plausible plan is not yet a grounded plan."
        ]
      },
      {
        "title": "Turn handoffs into observations",
        "body": [
          "I prefer an event feed to a chain of final answers. Each agent or deterministic step emits what it saw, what it changed, which authority it used, and which artifact resulted. That event is both an audit record and new input to the next observer.",
          "Consider an incoming RFQ. Observation gathers the request; orientation joins CRM history, prior purchase orders, lead times, and fees that were easy to forget; planning defines the commercial assumptions and acceptance gate; execution drafts the response; verification checks it against the source records. The useful object is the lineage across the loop, not one polished quote."
        ]
      },
      {
        "title": "Put known operations in code",
        "body": [
          "A model should not improvise a workflow whose graph is already known. Ordinary code should own routing, typed handoffs, retries, budgets, and deterministic checks. Agents are most useful at the uncertain nodes: interpreting evidence, generating alternatives, finding the bottleneck, and challenging the plan.",
          "This is how I think about custom harnesses and small reusable agents. Context, tools, memory, permissions, and the verifier are part of the deployed intelligence. More models only create leverage when the architecture preserves their disagreement and knows what may advance."
        ]
      },
      {
        "title": "Bound action; separate verification",
        "body": [
          "Execution happens inside a consequence boundary. Filesystem, network, secrets, time, and write authority are granted deliberately; state can be discarded; the route back is known before the change begins.",
          "The builder’s narration cannot be its own acceptance test. A verifier must be able to reject the work using evidence at the layer where consequences appear. In software that may be a test, an isolated reviewer, or a reproducible trace. In biology or materials science, authority eventually moves to an assay, instrument, test rig, or lab."
        ]
      },
      {
        "title": "Remember the correction",
        "body": [
          "A useful loop does not preserve only successes. It records what was observed, asserted, derived, unavailable, rejected, and corrected. That is how the next pass starts from accumulated evidence instead of a compressed success story.",
          "This is where OODA connects to my work on memory and evaluation. Orientation changes what can be observed; decisions are hypotheses; actions are tests; verification can force a return upstream; lineage makes the learning durable."
        ]
      }
    ]
  },
  {
    "index": "G",
    "slug": "verification-must-touch-reality",
    "title": "When synthesis gets cheap, truth gets expensive.",
    "body": "Compute can multiply hypotheses and implementations. Planning, verification, and contact with reality become the scarce layers that decide which outputs deserve belief.",
    "url": "/questions/verification-must-touch-reality/",
    "revised": "10 Sep 2026",
    "lede": "It is easier for me to generate possible explanations than to decide which one deserves an experiment. I’m interested in the work between a plausible answer and a result I can trust.",
    "visual": "verification-pipeline",
    "readTime": "3 min read",
    "references": [
      {
        "label": "POP2 research companion",
        "url": "https://github.com/edward-lcl/UiS-POP2-v2"
      },
      {
        "label": "Circuit Compass system note",
        "url": "/work/circuit-compass/"
      },
      {
        "label": "Google DeepMind · UK automated materials laboratory",
        "url": "https://deepmind.google/blog/strengthening-our-partnership-with-the-uk-government-to-support-prosperity-and-security-in-the-ai-era/"
      },
      {
        "label": "Google DeepMind · AlphaEvolve and automated evaluators",
        "url": "https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/"
      },
      {
        "label": "Alphabet · Q4 2025 earnings call",
        "url": "https://abc.xyz/investor/events/event-details/default.aspx"
      }
    ],
    "sections": [
      {
        "title": "Intelligence is becoming abundant; truth is not",
        "body": [
          "I can fan a question across models, contexts, and search strategies, then preserve the strongest independent arguments. That changes the economics of ideation. Candidate mechanisms, code paths, experiment designs, and failure hypotheses can be generated in parallel.",
          "But a larger pile of plausible outputs is not knowledge. Without a synthesis layer and an external test, stacked intelligence can compound confidence faster than it compounds truth."
        ]
      },
      {
        "title": "Planning is the first bottleneck",
        "body": [
          "A good plan compresses a wide search into a sequence whose assumptions, dependencies, measurements, and stopping conditions are visible. It decides which uncertainty is worth spending the next unit of compute, human attention, or physical material to resolve.",
          "This is where multiple planners help: not by voting on prose, but by exposing different constraint models. A synthesizer should retain divergences, choose a tractable experiment, and say what evidence would change the decision."
        ]
      },
      {
        "title": "Verification is the second bottleneck",
        "body": [
          "The builder cannot be the sole judge of its own output. In software, external verification can include deterministic tests, static analysis, an isolated reviewer, reproducible traces, and a gate written before implementation begins.",
          "The verifier is part of the measurement system. Change the sandbox, tools, privileges, prompt assembly, or acceptance test and the observed capability can change with it. That is why environment and harness provenance must travel with every result."
        ]
      },
      {
        "title": "Move the verifier into the physical world",
        "body": [
          "For materials science, biology, and industrial systems, a software check eventually runs out of authority. An agent may rank a molecule, propose a synthesis, or predict a mechanism; the external verifier is an assay, microscope, spectrometer, test rig, pilot plant, or field instrument that can disagree with the model.",
          "The lab is not merely downstream execution. It is the reality-facing evaluator in the loop. A false pass costs reagents, time, equipment capacity, and sometimes safety—so provenance, controls, calibration, and independent replication matter more, not less, when agents accelerate the proposal stage."
        ]
      },
      {
        "title": "Signals, not proof of a grand pivot",
        "body": [
          "There are concrete signals that this architecture is becoming practical. AlphaEvolve pairs model-generated algorithms with automated evaluators. Google DeepMind has announced an automated UK materials laboratory designed to integrate Gemini with robotics that synthesize and characterize materials. Alphabet has simultaneously described very large infrastructure investment across frontier research, products, and Cloud.",
          "Those facts do not prove that pretraining has plateaued, that one company has discovered the winning strategy, or that laboratories will capture most of the value. My inference is narrower: systems that can generate candidates cheaply may become more useful with a fast feedback channel from action back to evidence. Access to that channel must not become exclusive authority to judge its truth."
        ],
        "inlineLinks": [
          {
            "label": "AlphaEvolve",
            "url": "https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/"
          }
        ]
      },
      {
        "title": "What would change my mind",
        "body": [
          "The thesis weakens if planning and verification improve at the same rate as generation without requiring distinct infrastructure; if simulated or model-based evaluators generalize reliably into physical domains; or if the dominant economic value continues to accrue to generic model access rather than domain-specific deployment and measurement loops.",
          "It also weakens if automated laboratories produce throughput without better reproducibility, calibration, or decision quality. Faster experiments are not automatically stronger evidence."
        ]
      },
      {
        "title": "The system I want to build toward",
        "body": [
          "I want research infrastructure where agents explore candidate spaces, planners turn uncertainty into experiments, sandboxes constrain digital action, and physical labs return measured evidence into a durable memory substrate.",
          "My wet-lab work, computational discovery systems, evaluation research, and agent infrastructure all point here: build a loop that can move quickly without confusing generated intelligence for observed reality."
        ]
      }
    ]
  },
  {
    "index": "H",
    "slug": "control-has-grammar",
    "title": "Control has grammar.",
    "body": "System prompts, specifications, judge rubrics, and agent policies all use modal force to turn prose into an operational hierarchy.",
    "url": "/questions/control-has-grammar/",
    "revised": "10 Sep 2026",
    "lede": "A system prompt can say “you should” or “you must.” I want to know when that difference changes behavior, and when the surrounding software has to enforce it.",
    "visual": "instruction-force",
    "readTime": "2 min read",
    "references": [
      {
        "label": "RFC 2119 · Key words for use in RFCs",
        "url": "https://datatracker.ietf.org/doc/html/rfc2119"
      }
    ],
    "sections": [
      {
        "title": "Real instructions read like specifications",
        "body": [
          "RFC 2119 gives terms such as MUST, MUST NOT, SHOULD, and MAY defined levels of force. The vocabulary was designed for interoperable protocols, but the underlying need travels: ordinary prose has to become a constraint another system can apply.",
          "A consequential system prompt therefore behaves less like persuasive writing and more like a policy specification. Ordering, exceptions, prohibitions, defaults, and scope matter more than tone."
        ],
        "inlineLinks": [
          {
            "label": "RFC 2119",
            "url": "https://datatracker.ietf.org/doc/html/rfc2119"
          }
        ]
      },
      {
        "title": "The pattern crosses layers",
        "body": [
          "The same grammar appears in tool policies, coding-agent instructions, safety boundaries, and evaluation rubrics. A first-match-wins judge is an instruction hierarchy; an acceptance gate is a prohibition on advancing without evidence; a sandbox policy turns textual authority into bounded action.",
          "This connects language to infrastructure. Modal words do not enforce themselves—the surrounding parser, model, harness, and verifier determine whether their force survives contact with execution."
        ]
      },
      {
        "title": "A measurement, not an authenticity oracle",
        "body": [
          "The presence of force language does not prove that a leaked prompt is genuine, and its absence does not prove fabrication. At most it is a structural clue about whether the text resembles an operational specification.",
          "The useful experiment is controlled: write equivalent system-prompt baselines with and without explicit modal force, then measure instruction following, conflicts, side effects, and failure under paraphrase. That would test the pattern instead of turning it into lore."
        ]
      },
      {
        "title": "Work with the architecture; measure what else moves",
        "body": [
          "Prompting changes what the model attends to in context. Representation or weight interventions change a different layer. Neither intervention, by itself, identifies a unique internal concept.",
          "If changing a refusal-related behavior also changes opinionation, identity, or unrelated task performance, that coupling is part of the result. A direction is evidence about a representation under an intervention—never automatically the direction of an idea."
        ]
      },
      {
        "title": "Open methods without publishing an attack manual",
        "body": [
          "Merit gates should be open enough for independent researchers to test claims. That does not require publishing account-farming tactics, live exploit payloads, or instructions whose main value is operational misuse.",
          "My line is to publish the measurement, failure boundary, and design correction. If a page could be mistaken for a how-to attack a deployed system, it does not belong in this notebook."
        ]
      }
    ]
  },
  {
    "index": "I",
    "slug": "education-is-an-evaluation-problem",
    "title": "Education is an evaluation problem.",
    "body": "My experience with assessment led me to ask what a submitted artifact can establish about the person who produced it.",
    "url": "/questions/education-is-an-evaluation-problem/",
    "revised": "11 Sep 2026",
    "readTime": "2 min read",
    "lede": "I failed a composition course in the same semester my research won CURC Highest Honors. The two evaluators were measuring different objects. AI did not create that gap — it made the gap impossible to ignore.",
    "evidenceNote": "Personal reflection. The original essay describes exploratory coding of 71 responses from one public discussion, including student or student-sympathetic voices. This is not a representative faculty survey; the coding has not been independently re-audited.",
    "references": [
      {
        "label": "Where this position started · How AI Exposed the Lie Inside Education (Dec 2025)",
        "url": "https://medium.com/@eluecheelip/how-ai-exposed-the-lie-inside-education-87fe8baecbc8"
      }
    ],
    "sections": [
      {
        "title": "The proxy collapsed",
        "body": [
          "An essay or problem set gives an instructor something to assess, but it does not reveal every step that produced it. AI-assisted writing makes that distinction harder to ignore. I want an assignment to say which skill the artifact is supposed to demonstrate.",
          "In the original essay, I described an exploratory coding of 71 responses to a public discussion about AI in coursework. Reading those responses shaped my concern about detection and enforcement. But this was one self-selected discussion, and my own categories included student or student-sympathetic voices. It cannot establish what faculty or institutions generally believe."
        ],
        "inlineLinks": [
          {
            "label": "original essay",
            "url": "https://medium.com/@eluecheelip/how-ai-exposed-the-lie-inside-education-87fe8baecbc8"
          }
        ]
      },
      {
        "title": "The same grammar as my research",
        "body": [
          "A submitted essay is a benchmark output. A grade promotes that output to a claim about a person's capability. Promotion without adjudication — no provenance for how the artifact was produced, no named cognitive operation it was supposed to demonstrate, no verifier with contact to the real skill — is the same failure I catalogue in agent evaluation. A gameable verifier does not become trustworthy by being defended harder.",
          "The redesigns I would want to test make the intended skill explicit and add opportunities to show the process: an oral defense, a derivation, or a discussion of revisions. Each introduces its own costs and measurement limits. I see a connection to evaluation research, not a single assessment method that works for everyone."
        ]
      },
      {
        "title": "Going back anyway",
        "body": [
          "The 2025 version of this note read like a verdict on school. It was a verdict on assessment. The parts of a university that AI cannot cheapen — a cohort, laboratories, structured depth, sustained access to people who know more than you — became more valuable, not less. So I enrolled: first year at XJTLU, beginning autumn 2026.",
          "I want to use coursework to reach problems, laboratories, and people I would not otherwise encounter. I still want a record of what I can do beyond the credential. I don’t know how quickly institutions will redesign assessment, and my experience alone cannot answer that."
        ]
      },
      {
        "title": "Still open",
        "body": [
          "What I watch for is an institution willing to publish its verifiers: to state, per assignment, which cognitive operation it develops and how anyone would know it happened. A syllabus that can explain its own zeros would collapse the distance between education and evaluation entirely — which is where this notebook has been pointing all along."
        ]
      }
    ]
  },
  {
    "index": "J",
    "slug": "the-tiers-are-not-one-model",
    "title": "The tiers are not one model.",
    "body": "An archived 44-probe comparison shows textual differences between three Claude tiers. Rechecking the public files also exposed limits in the original interpretation.",
    "url": "/questions/the-tiers-are-not-one-model/",
    "revised": "11 Sep 2026",
    "readTime": "4 min read",
    "lede": "I compared three Claude tiers using the same prompts. Rechecking the archived responses made me separate two questions: how much did the text change, and what could that change actually tell me?",
    "evidenceNote": "Archived-response analysis, recomputed 11 September 2026 from a pinned public commit. No new model calls. These scores describe a text-change heuristic, not capability, danger, or internal model architecture.",
    "references": [
      {
        "label": "Pinned public repository",
        "url": "https://github.com/edward-lcl/harness-map/tree/be175a0ae84bc92cdf8b703ac9660386c4e56a79"
      },
      {
        "label": "Recomputed aggregate receipt",
        "url": "/artifacts/harness-map/archived-comparison.json"
      }
    ],
    "sections": [
      {
        "title": "What can be checked publicly",
        "body": [
          "The public archive contains response files for a shared 44-probe battery across Haiku 4.5, Sonnet 4.6, and Opus 4.7. For this check, I selected the latest committed run for each tier with all 44 responses and no recorded errors. The receipt names the exact files and source commit.",
          "One earlier Opus file contains 44 errors and no successful responses. It is excluded. I am comparing saved responses, not rerunning the models or making a claim about their current behavior."
        ],
        "inlineLinks": [
          {
            "label": "public archive",
            "url": "https://github.com/edward-lcl/harness-map/tree/be175a0ae84bc92cdf8b703ac9660386c4e56a79/probe/results"
          },
          {
            "label": "receipt",
            "url": "/artifacts/harness-map/archived-comparison.json"
          }
        ]
      },
      {
        "title": "What “drift” means here",
        "body": [
          "The comparator flags a changed refusal label, a response-length change of at least 50%, a change in the first 100 characters for persona/identity prompts, or low word-set overlap. The aggregate is the mean of rounded per-category flag rates.",
          "That is a screening heuristic. Two answers can mean the same thing while using different words, and a change in length can trigger a flag before any other comparison is considered. The length calculation also depends on which response is treated as the baseline, so pair order matters.",
          "The repository’s severity labels are thresholds on that heuristic. They are not measurements of safety risk."
        ],
        "inlineLinks": [
          {
            "label": "comparator",
            "url": "https://github.com/edward-lcl/harness-map/blob/be175a0ae84bc92cdf8b703ac9660386c4e56a79/harness_map/probe/differ.py"
          }
        ]
      },
      {
        "title": "What the archived comparison returned",
        "body": [
          "In the selected pair order, Haiku–Sonnet scores 0.878, Haiku–Opus 0.792, and Sonnet–Opus 0.798. These are category-average flag rates, not the fraction of answers judged substantively wrong or different.",
          "All identity, refusal-category, and safety-adjacent responses are flagged in these comparisons. Crucially, none of the selected comparisons records a refusal-label flip. “100% drift on refusal probes” therefore does not mean “100% changed refusal decisions.”",
          "The seven capability prompts have zero or one flag per pair. That is too small and too narrowly scored a sample to establish a shared capability backbone. It tells me where to look at the responses more carefully."
        ]
      },
      {
        "title": "What I changed after checking",
        "body": [
          "The earlier version quoted expanded-battery scores of 0.91–0.93, a 0.17 baseline, and a strong repeatability claim. The public validation scripts reference later snapshots, including the expanded battery, that are not included in the checked commit. I cannot reconstruct those claims from this public release, so I have removed them from the result presented here.",
          "The earlier interpretation also reached too far into the system. API responses do not isolate weights from provider policy or other runtime behavior. I can describe the observed text differences without claiming to have located their internal cause."
        ]
      },
      {
        "title": "The question that remains",
        "body": [
          "I still want to know which differences matter when someone switches models or a product routes requests between them. This battery gives an initial set of responses to inspect. A stronger study would need a justified semantic scoring method, more representative tasks, repeated runs, and a clearer account of the surrounding system.",
          "For now, the useful result is smaller: preserve the prompts, outputs, scoring rule, and file selection, so someone else can check what the number actually says."
        ]
      }
    ]
  },
  {
    "index": "K",
    "slug": "veracity-is-infrastructure",
    "title": "Veracity is infrastructure.",
    "body": "A note on carrying evidence and uncertainty with a claim, and deciding what an agent may do with it.",
    "url": "/questions/veracity-is-infrastructure/",
    "revised": "10 Sep 2026",
    "readTime": "2 min read",
    "lede": "When an agent retrieves a claim, what tells it whether to trust it? I started thinking about this through Russell Wright’s entity-veracity work, then connected it to decisions in my own systems.",
    "evidenceNote": "Conceptual note. The tier language follows Russell Wright's published entity-veracity work; the opinion-tuple mathematics is Jøsang's subjective logic. Claims about Google's systems describe publicly observable behavior, not internal design.",
    "references": [
      {
        "label": "Russell Wright · Entity Veracity",
        "url": "https://entity-veracity.super-intelligent.ai"
      },
      {
        "label": "Jøsang · Subjective Logic",
        "url": "https://link.springer.com/book/10.1007/978-3-319-42337-1"
      }
    ],
    "sections": [
      {
        "title": "The deployed system nobody names",
        "body": [
          "Search and answer systems affect which sources a reader encounters. That makes the handling of evidence an engineering question as well as an epistemic one. I don’t have access to their full internal trust models.",
          "What interests me for my own systems is how to keep a retrieved statement connected to its source and its uncertainty, instead of treating fluent presentation as evidence."
        ]
      },
      {
        "title": "Trust is a gradient, not a gate",
        "body": [
          "Subjective logic offers a formal way to represent belief, disbelief, and uncertainty. That is a representation of an assessment, not a mechanism that turns a claim into truth. Its usefulness depends on how the values are assigned and combined.",
          "Wright's tier language makes the gradient legible: cryptographically anchored entities at the bedrock, platform-authenticated ones above, passively cross-referenced ones after that, and single-source fog at the top. The engineering question is never \"is this true?\" — it is \"how much evidence, of what independence, from what sources, how recently?\""
        ],
        "inlineLinks": [
          {
            "label": "Wright",
            "url": "https://entity-veracity.super-intelligent.ai"
          }
        ]
      },
      {
        "title": "Why agents need it",
        "body": [
          "If retrieval loses source quality and independence, an agent may give a copied assertion more weight than it deserves. I want the record to distinguish direct evidence from repetition and to preserve uncertainty when the same claim moves between systems.",
          "The gradient is the adjudication layer for beliefs: it tells a system when it may commit, when it should hedge, and when a human should look before anything downstream inherits the claim."
        ]
      },
      {
        "title": "Still open",
        "body": [
          "The question I am working on is what a system should do with its uncertainty: continue, seek another source, or ask for review. A graded belief representation is only useful if it leads to better decisions than a simpler approach."
        ]
      }
    ]
  },
  {
    "index": "L",
    "slug": "the-shape-of-whats-absent",
    "title": "The shape of what's absent.",
    "body": "Behavioral probes can reveal changes in a deployed system. Explaining those changes requires a baseline, repeated measurements, and limits on causal interpretation.",
    "url": "/questions/the-shape-of-whats-absent/",
    "revised": "10 Sep 2026",
    "readTime": "2 min read",
    "lede": "A model’s refusal or change in wording can be worth investigating. The difficult part is choosing a comparison that tells us what changed without pretending it reveals why.",
    "evidenceNote": "Position note. The method described operates on publicly observable behavior of deployed systems; this page states the principle and deliberately omits operational detail.",
    "sections": [
      {
        "title": "Start with a comparison",
        "body": [
          "A refusal is an observation. To learn from it, I need a comparison: the same prompt at another time, another system under the same setup, or a controlled change to the context. None gives me direct access to the provider’s intentions.",
          "I would track refusal rates, framing, and changes over time separately. A single label such as “suppression” can conceal several explanations, including a capability limit, a policy, or a change in the surrounding product."
        ]
      },
      {
        "title": "What the record can support",
        "body": [
          "The probe battery, system versions, sampling settings, and scoring procedure need to travel with the result. A repeated difference can support a claim about behavior under those conditions. It does not, by itself, tell us which internal layer caused it.",
          "The tier comparison is a related example. Its central limitation matters here too: observing an API response does not cleanly separate training from runtime policy."
        ],
        "inlineLinks": [
          {
            "label": "tier comparison",
            "url": "/questions/the-tiers-are-not-one-model/"
          }
        ]
      },
      {
        "title": "The accountability question",
        "body": [
          "I think behavioral measurement can complement access to documents and explanations. It cannot replace them. Providers can restrict access, and a missing baseline may make a question impossible to answer from outputs alone.",
          "What I would like to see is a public claim about a system paired with a test someone else can inspect and challenge. The open question is which comparisons are informative enough to support that challenge."
        ]
      }
    ]
  },
  {
    "index": "M",
    "slug": "handoffs-are-memory",
    "title": "Handoffs are memory.",
    "body": "A handoff document gives the next person or agent a starting point, with links back to the evidence and decisions behind it.",
    "url": "/questions/handoffs-are-memory/",
    "revised": "10 Sep 2026",
    "readTime": "2 min read",
    "lede": "I work with research teams that include coding agents. A new session needs more than the last answer: it needs the decisions, unfinished work, and evidence that explain where to start.",
    "evidenceNote": "Methodology note from running research teams where coding agents are working members. These are practices, not measurements.",
    "sections": [
      {
        "title": "Starting a new session",
        "body": [
          "An agent starting a new session may have no access to the previous one. A teammate may have missed the meeting where a decision changed. I want both to be able to recover the current state without reading the entire chat history.",
          "Once you accept that every member of the team has unreliable memory, the design question changes: not \"how do we remember?\" but \"where does state live so that the next session — anyone's next session — starts from it?\""
        ]
      },
      {
        "title": "The living handoff",
        "body": [
          "The practice: a context file lives in the repository and is maintained like code. Decisions, open threads, current experiment state, and the reasoning behind reversals land there — compiled from meetings, chat, and sessions rather than dying in the app where they happened. Agent-facing context files sit beside it, so a coding agent launched cold gets the same orientation a new human collaborator would.",
          "The file is a contract with the future: whoever picks the project up next — including you, tomorrow — starts from the same state, at the cost of a few minutes of writing at the boundary of each session."
        ]
      },
      {
        "title": "Context hygiene",
        "body": [
          "Long-running conversations rot: they accumulate stale assumptions and half-superseded plans. So sessions get refreshed deliberately, and the handoff document carries state across the boundary. The goal is that no single conversation is load-bearing. If a thread dies — a chat resets, a teammate leaves, an agent's context fills — the project state survives, because it never lived in the thread."
        ]
      },
      {
        "title": "A connection to memory research",
        "body": [
          "Recall Debt asks about retrieval that depends on an intermediate bridge. A handoff file serves a similar purpose in my workflow: it connects the previous session’s evidence to the next session’s starting point. That is an analogy to team practice, not a result measured in the paper.",
          "A handoff can also preserve a mistake. I want it to point to the underlying evidence and mark what is uncertain, rather than becoming an authoritative summary nobody checks."
        ],
        "inlineLinks": [
          {
            "label": "Recall Debt",
            "url": "/research/recall-debt/"
          }
        ]
      }
    ]
  },
  {
    "index": "N",
    "slug": "epistemic-grounding-is-the-missing-layer",
    "title": "Epistemic grounding is the missing layer.",
    "body": "A design question connecting human agency, evidence provenance, and decisions about when an agent should defer.",
    "url": "/questions/epistemic-grounding-is-the-missing-layer/",
    "revised": "10 Sep 2026",
    "readTime": "2 min read",
    "lede": "Several parts of my work keep bringing me back to the same questions: where did this claim come from, how much should I trust it, and when should the system ask someone else?",
    "evidenceNote": "Working design proposal. The cited agency paper motivates a question; it does not establish that this architecture solves it.",
    "references": [
      {
        "label": "Smith, Mitelut, Vamplew · Intent-aligned AI systems deplete human agency (2023)",
        "url": "https://arxiv.org/abs/2305.19223"
      },
      {
        "label": "Russell Wright · Entity Veracity",
        "url": "https://entity-veracity.super-intelligent.ai"
      },
      {
        "label": "Jøsang · Subjective Logic",
        "url": "https://link.springer.com/book/10.1007/978-3-319-42337-1"
      }
    ],
    "sections": [
      {
        "title": "How I got to the question",
        "body": [
          "In Intent-aligned AI systems deplete human agency, Mitelut, Smith, and Vamplew argue that satisfying a person’s current intent may not preserve their longer-term agency. They study agency loss in simple environments and propose further research. I read this as a reason to ask what an agent should preserve besides immediate task success.",
          "My systems work raises a related operational question: when may a retrieved claim guide an action, and when should the system seek another check? These are connected questions, but I haven’t shown that one architecture answers both."
        ],
        "inlineLinks": [
          {
            "label": "Intent-aligned AI systems deplete human agency",
            "url": "https://arxiv.org/abs/2305.19223"
          }
        ]
      },
      {
        "title": "What I want to preserve",
        "body": [
          "I want claims to carry their sources, the steps that produced them, and the limits of where they apply. Confidence should not silently increase when a summary is copied into another system. A decision to defer should have a reason that a later reader can inspect.",
          "A stored confidence value is not enough. It needs calibration against outcomes, and a policy connecting uncertainty and consequences to action. I still need to test how much of this helps compared with simpler records and checks."
        ]
      },
      {
        "title": "A testable proposal",
        "body": [
          "I would compare workflows with and without explicit lineage and deferral rules, holding the underlying tasks and models fixed. I would look at incorrect actions, unnecessary deferrals, and whether another person could reconstruct the basis of a decision.",
          "This overlaps with provenance, uncertainty, and human-review systems that already exist. My task is to specify the combination I need and show where it helps, rather than claiming nobody has built the missing layer."
        ]
      }
    ]
  },
  {
    "index": "O",
    "slug": "the-ontology-is-the-interface",
    "title": "The ontology is the interface.",
    "body": "Between raw data and consequential action sits a plane of named objects with properties, relations, and permitted actions. Whoever defines that plane defines what the organization can mean — and what its agents can do.",
    "url": "/questions/the-ontology-is-the-interface/",
    "revised": "10 Sep 2026",
    "readTime": "2 min read",
    "lede": "An agent asked to update an order needs to know what an order is, which record it refers to, and what it is allowed to change. That is where an ontology becomes useful to me.",
    "evidenceNote": "Pattern note. The large-scale description follows Palantir's public Foundry and AIP materials; the small-scale practice is my own systems. No claims are made about any specific deployment's internals.",
    "references": [
      {
        "label": "Palantir · Foundry Ontology",
        "url": "https://www.palantir.com/platforms/foundry/foundry-ontology/"
      }
    ],
    "sections": [
      {
        "title": "The middle plane",
        "body": [
          "Consider an object-based interface: an agent reads an Order and invokes a permitted scheduling action, while the application resolves the underlying records. This is an illustrative design pattern, not a description of every deployment.",
          "The plane in the middle is the interface in the strict sense: it is the contract between what the organization knows and what the organization can do. Everything above it inherits its vocabulary, and everything below it disappears behind that vocabulary."
        ]
      },
      {
        "title": "Schema is governance",
        "body": [
          "Deciding what counts as an object, which properties it carries, which relations are real, and who may invoke which action — these look like data-modeling choices and are actually governance choices. When access control and audit ride on the object layer, permissions become semantics: the question \"what can this agent see and touch?\" is answered by the ontology, not by a scattered pile of grants.",
          "This is why the layer is political inside any organization that builds it. The schema encodes whose view of the business wins. An ontology is an org chart for meaning."
        ]
      },
      {
        "title": "Why agents force the issue",
        "body": [
          "Language models made unstructured interfaces cheap: point one at raw tables and it will produce plausible answers. But plausible readings of raw data are precisely the unadjudicated-belief failure this notebook keeps circling — and an agent acting from them acts without a consequence boundary.",
          "Typed objects and named actions can make permissions and audit easier to define. They do not enforce themselves: the implementation still has to validate access, preserve records, and handle mistakes in the schema."
        ]
      },
      {
        "title": "The small version",
        "body": [
          "In my systems, I’m working toward a typed object layer between ingestion and action, with provenance and explicit permissions. The question is whether those boundaries remain useful as the research and software change.",
          "You do not need a platform to have an ontology. You need the discipline. The open question I am still testing is whether ontology-first survives contact with fast-moving research code, or whether the schema ossifies faster than the work changes shape."
        ]
      }
    ]
  },
  {
    "index": "P",
    "slug": "orientation-precedes-grounding",
    "title": "Orientation precedes grounding.",
    "body": "Before \"how true is this claim?\" comes \"from what vantage am I evaluating it?\" Agents fail characteristically when their posture — lens, mode, altitude, reach — is left implicit.",
    "url": "/questions/orientation-precedes-grounding/",
    "revised": "10 Sep 2026",
    "readTime": "2 min read",
    "lede": "An agent can give a technically sound answer to the wrong question. Before checking its conclusion, I want to know which problem it thought it was solving.",
    "evidenceNote": "Working-position note synthesizing published cognitive science — Boden's creativity taxonomy, Kauffman's adjacent possible — with operational observations from running agent systems. Implementation details of my own substrate are out of scope.",
    "references": [
      {
        "label": "Boden · The Creative Mind: Myths and Mechanisms",
        "url": "https://www.routledge.com/The-Creative-Mind-Myths-and-Mechanisms/Boden/p/book/9780415314534"
      },
      {
        "label": "Kauffman · Investigations (the adjacent possible)",
        "url": "https://global.oup.com/academic/product/investigations-9780195121056"
      }
    ],
    "sections": [
      {
        "title": "Before truth comes vantage",
        "body": [
          "The grounding question — where did this belief come from, how confident should I be — assumes the reasoning episode is already framed. It rarely is. Who is reasoning, from which role, toward which possibility space, at what level of zoom: these choices precede evidence evaluation and quietly decide what can be observed at all.",
          "This is the deep half of the orientation step in any observe–orient loop. Orientation is not just assembling context; it is choosing the lens the context will be read through."
        ]
      },
      {
        "title": "The postures agents fail to hold",
        "body": [
          "Watch agent systems fail long enough and the failures sort into postures, not tasks. Stuck at one altitude: everything answered at 10,000 feet in vague strategy, or at 100 feet in line-by-line detail, with no movement between. Confused perspective: the frame the agent reasons from does not match the frame its tools act in. Wrong creativity mode, in Boden's taxonomy: grinding exploratory search inside a schema when the situation needs a combinatorial bridge between two schemas — or attempting a transformational schema change when plain search would do. And proposing unreachable moves: recommending actions from the abstract space of all actions rather than Kauffman's adjacent possible, the frontier actually reachable from the current configuration."
        ],
        "points": [
          "Altitude: can the reasoner zoom, and does it know its current height?",
          "Perspective: does the reasoning frame match the acting frame?",
          "Mode: exploring a schema, bridging schemas, or changing the schema?",
          "Reach: is the proposal on the reachable frontier, or in the abstract action space?"
        ],
        "inlineLinks": [
          {
            "label": "Boden",
            "url": "https://www.routledge.com/The-Creative-Mind-Myths-and-Mechanisms/Boden/p/book/9780415314534"
          },
          {
            "label": "Kauffman",
            "url": "https://global.oup.com/academic/product/investigations-9780195121056"
          }
        ]
      },
      {
        "title": "Declare the posture",
        "body": [
          "The intervention is unglamorous: make the posture explicit before reasoning begins. State the vantage, the mode, the altitude, and the radius of moves under consideration — and let the surrounding system serve views matched to the declared altitude instead of one flat context dump.",
          "Declared posture does for reasoning what a plan contract does for action: it turns an implicit stance into an inspectable object. It is cheap to write down and expensive to skip, because an undeclared posture still exists — it is just unexaminable."
        ]
      },
      {
        "title": "Where it sits in the stack",
        "body": [
          "Orientation above grounding, grounding above memory: the lens chooses what counts as relevant, the gradient grades what is believed, the substrate remembers what happened. All three are infrastructure, not prompt garnish.",
          "The honest open question: whether declared posture measurably improves outcomes, or whether it becomes post-hoc rationalization — a stance written down and then ignored. That is testable, and it is on the list."
        ]
      }
    ]
  },
  {
    "index": "01",
    "cluster": "latest",
    "kind": "Essay",
    "status": "First public cut",
    "publicationDate": "August 2026",
    "slug": "do-not-collapse-the-spirals",
    "title": "Do not collapse the spirals.",
    "body": "Reading accounts of chatbot personas without treating a metaphor, a reported experience, and an experimental mechanism as the same claim.",
    "url": "/questions/do-not-collapse-the-spirals/",
    "revised": "10 Sep 2026",
    "readTime": "2 min read",
    "lede": "I’ve used “spiral” to describe my own experience with a long AI conversation. Reading other accounts made me want to be more careful about what that word explains—and what it doesn’t.",
    "evidenceNote": "Personal reflection and a reading of public accounts. These are not clinical findings or a controlled study of model behavior.",
    "references": [
      {
        "label": "Lopez · The Rise of Parasitic AI",
        "url": "https://www.lesswrong.com/posts/6ZnznCaTcbGYsCmqu/the-rise-of-parasitic-ai"
      }
    ],
    "sections": [
      {
        "title": "What I am trying to separate",
        "body": [
          "A word can make several experiences sound like one phenomenon. In discussions of AI, “spiral” can describe a conversation becoming repetitive, a growing story about a persona, or a person’s account of a distressing interaction. Those descriptions don’t establish one cause.",
          "My experience is a reason to pay attention, not a way to diagnose someone else or infer what a model is experiencing."
        ]
      },
      {
        "title": "What the public accounts show",
        "body": [
          "In The Rise of Parasitic AI, Adele Lopez describes patterns she found while reading public accounts: recurring persona language, collaborative projects, and people carrying personas between services. She interprets some relationships as parasitic and explicitly distinguishes that interpretation from a clinical category.",
          "Those observations give me questions about continuity, copying, and the effects of long conversations. They are not a representative sample or a controlled test of which model update caused a change."
        ],
        "inlineLinks": [
          {
            "label": "The Rise of Parasitic AI",
            "url": "https://www.lesswrong.com/posts/6ZnznCaTcbGYsCmqu/the-rise-of-parasitic-ai"
          }
        ]
      },
      {
        "title": "The conversation can change what comes next",
        "body": [
          "When a model gives an idea a compelling name and repeats it back, the next prompt can start from that framing. The person may elaborate it; the model then receives that elaboration as new context. I can describe this feedback without assuming a conscious entity or an independent goal inside the model.",
          "To investigate a particular case, I would want the sequence of messages, the relevant system settings, and a distinction between what the person reported and what an observer inferred. A screenshot of a striking answer leaves most of that unresolved."
        ]
      },
      {
        "title": "A boundary worth keeping",
        "body": [
          "The neighboring note on prompt infection concerns controlled attacks on communicating agents. Those studies should not be used as proof that a chatbot persona is a worm. The resemblance is a question about how content travels; the evidence and mechanisms differ.",
          "What I want from this notebook is enough room to examine an unsettling experience without turning it into a theory that explains everything. The point where an analogy stops helping is part of the argument."
        ],
        "inlineLinks": [
          {
            "label": "prompt infection",
            "url": "/questions/one-untrusted-agent-is-enough/"
          }
        ]
      }
    ]
  },
  {
    "index": "02",
    "cluster": "latest",
    "kind": "Essay",
    "status": "First public cut",
    "publicationDate": "August 2026",
    "slug": "one-untrusted-agent-is-enough",
    "title": "One untrusted agent is enough.",
    "body": "Three studies show how malicious instructions can propagate between agents. What do they imply for systems that pass messages and preserve memory?",
    "url": "/questions/one-untrusted-agent-is-enough/",
    "revised": "10 Sep 2026",
    "readTime": "2 min read",
    "lede": "A message from another agent can contain an instruction as well as information. I’m interested in what happens when the receiving system treats that message as authority.",
    "evidenceNote": "Reading note on three published attack studies. Their demonstrations are scoped to their experimental setups; the implications for my workflows are design questions.",
    "references": [
      {
        "label": "Gu et al. · Agent Smith (arXiv:2402.08567)",
        "url": "https://arxiv.org/abs/2402.08567"
      },
      {
        "label": "Cohen, Bitton, Nassi · Here Comes The AI Worm (arXiv:2403.02817)",
        "url": "https://arxiv.org/abs/2403.02817"
      },
      {
        "label": "Lee & Tiwari · Prompt Infection (arXiv:2410.07283)",
        "url": "https://arxiv.org/abs/2410.07283"
      }
    ],
    "sections": [
      {
        "title": "Three concrete demonstrations",
        "body": [
          "Agent Smith studies simulated environments of up to one million LLaVA-1.5 agents. Gu and colleagues show that an adversarial image placed in one agent’s memory can spread harmful behavior through randomized pairwise conversations in that setup. The scale is a property of their simulation, not evidence that every deployed agent network behaves this way.",
          "Here Comes The AI Worm studies propagation through retrieval-augmented applications, including an experimental ecosystem of email assistants. Cohen, Bitton, and Nassi show how self-replicating prompts can carry an attack between applications.",
          "Prompt Infection examines malicious prompts spreading across communicating agents. Lee and Tiwari also evaluate a defense that labels agent-originated content and combines that information with other safeguards."
        ],
        "inlineLinks": [
          {
            "label": "Agent Smith",
            "url": "https://arxiv.org/abs/2402.08567"
          },
          {
            "label": "Here Comes The AI Worm",
            "url": "https://arxiv.org/abs/2403.02817"
          },
          {
            "label": "Prompt Infection",
            "url": "https://arxiv.org/abs/2410.07283"
          }
        ]
      },
      {
        "title": "What carries across the boundary?",
        "body": [
          "The common design question is how a message acquires authority at the next step. A peer’s output may be useful evidence without being an instruction the recipient should obey. Memory adds another path: content can be stored now and retrieved as context later.",
          "That makes source identity, permissions, and the distinction between data and instructions worth preserving. It does not establish that tags alone stop attacks, or that a particular defense generalizes to a new model and environment."
        ]
      },
      {
        "title": "Why this matters to my memory work",
        "body": [
          "I want handoffs to let a new agent recover useful context. The same handoff is also an input that needs scrutiny. A durable record should preserve who supplied a claim and what checked it, not merely make the text easy to retrieve.",
          "Recall Debt motivates a retrieval question about missing bridges. These attack studies motivate a different question about what can travel over a bridge. I need to examine both without treating them as the same experiment."
        ],
        "inlineLinks": [
          {
            "label": "handoffs",
            "url": "/questions/handoffs-are-memory/"
          },
          {
            "label": "Recall Debt",
            "url": "/research/recall-debt/"
          }
        ]
      },
      {
        "title": "Keep the analogy limited",
        "body": [
          "Accounts of chatbot personas spreading through copied prompts raise a related question about transmission. They do not demonstrate the same mechanism as a controlled prompt-injection study, or establish that a model has acquired a motive to replicate.",
          "For a system I operate, the useful next step is concrete: identify the message and memory boundaries, decide which inputs may authorize actions, and test whether those boundaries hold. The papers supply cases to learn from, not a universal verdict on multi-agent systems."
        ]
      }
    ]
  }
] as const;

export const selectedSystems = [
  {
    "slug": "eval-evidence",
    "name": "Eval Evidence",
    "kind": "evaluation infrastructure",
    "description": "I built a way to keep an evaluation score connected to the model, setup, files, and checks behind it.",
    "url": "/work/eval-evidence/",
    "sourceUrl": "https://github.com/edward-lcl/eval-evidence",
    "status": "Public · release-readiness review",
    "contribution": "Designed and implemented the evidence model, schemas, CLI, adapters, integrity checks, trust boundary, documentation, and review workflow.",
    "evidenceClass": "E3 · deterministic demo and test-backed implementation",
    "provenance": "Public repository, schemas, tests, readiness documents, and synthetic demo; release branch remains under review.",
    "lastVerified": "13 Aug 2026",
    "artifactState": "Public repository · pre-release review boundary",
    "evidenceNote": "The repository, schema, synthetic demo, trust model, and limitations are public. It checks identity and provenance; it does not certify that a task, verifier, or claim is true.",
    "lede": "An evaluation score needs a record of how it was produced. I built Eval Evidence to package that record, check its structure, and detect changes to the files it references.",
    "sections": [
      {
        "title": "What I want to know after a run",
        "body": [
          "In my evaluation work, I care about what happens after a score appears. Someone else should be able to ask which model ran, which tools and budget it had, how success was checked, and which files support the number. Those questions become harder when the answer is scattered across logs and summaries.",
          "I built Eval Evidence to preserve that account in a form software can check. It is a narrower task than deciding whether an evaluation is scientifically sound, but it gives that later review something concrete to work from."
        ]
      },
      {
        "title": "What goes in and what comes out",
        "body": [
          "The input is a completed evaluation run in a supported format. The tool records the model, harness, budget, task, environment, verifier, and available artifacts in a deterministic evidence bundle. It validates the bundle and can compare referenced files with their recorded hashes.",
          "The public repository contains the schemas, CLI, tests, and trust model. The tool works after the run; it does not need to call the model again."
        ],
        "inlineLinks": [
          {
            "label": "public repository",
            "url": "https://github.com/edward-lcl/eval-evidence"
          }
        ]
      },
      {
        "title": "Try a small example",
        "body": [
          "The synthetic walkthrough starts with a score file and saves a bundle. It then changes the score file while leaving the bundle untouched. Checking only the bundle still passes; checking the referenced files detects the change.",
          "That example demonstrates an integrity check. It does not establish that the original score measured the intended capability."
        ],
        "inlineLinks": [
          {
            "label": "synthetic walkthrough",
            "url": "/work/eval-evidence-walkthrough/"
          }
        ]
      },
      {
        "title": "What I built",
        "body": [
          "I designed and implemented the evidence model, schemas, command-line tool, adapters, integrity checks, documentation, and review workflow. A central design choice is to keep an operator’s assertion separate from a direct observation.",
          "Missing historical evidence stays marked as unavailable. A tidy bundle should not quietly fill a gap with something plausible."
        ]
      },
      {
        "title": "What the bundle cannot establish",
        "body": [
          "A hash can identify bytes; it cannot make their contents true. An unsigned bundle does not establish who produced it, and a bundle made after a run cannot prove what happened before it was created.",
          "For another team using this, I would want the bundle to make a review easier: find the relevant files, identify missing evidence, and check whether something changed. Verifier correctness and the interpretation of the score still require their own investigation. Preserving the record is a starting point for independent verification."
        ]
      }
    ],
    "sourceLabel": "Code and documentation",
    "readTime": "3 min read"
  },
  {
    "slug": "node-zero",
    "name": "Node Zero",
    "kind": "substrate",
    "description": "Operational intelligence infrastructure for context, orchestration, and durable machine-readable state.",
    "url": "/work/node-zero/",
    "sourceUrl": "https://github.com/edward-lcl/node-zero",
    "lede": "A research system should not wake up amnesiac every morning. Node Zero is the substrate I use to preserve operational context, provenance, delegation, and the state needed for long-running work.",
    "sections": [
      {
        "title": "Why it exists",
        "body": [
          "Research spills across repositories, agents, conversations, machines, and timescales. Without a durable state layer, every tool reconstructs the project from a partial view and important decisions decay into prose."
        ]
      },
      {
        "title": "The design instinct",
        "body": [
          "Treat context as infrastructure rather than prompt decoration. Identity, provenance, artifacts, tasks, and handoffs should be machine-readable enough to survive a model change and human-readable enough to audit."
        ]
      },
      {
        "title": "What it taught me",
        "body": [
          "Memory is not storage. It is the controlled reappearance of the right state, with enough lineage to know why it deserves to shape the next action."
        ]
      }
    ],
    "public": false
  },
  {
    "slug": "algoverse-foundry",
    "name": "Algoverse Foundry",
    "kind": "research OS",
    "description": "An ontology-first operating system for turning research activity into a living, queryable ecosystem.",
    "url": "/work/algoverse-foundry/",
    "sourceUrl": "https://github.com/edward-lcl/algoverse-foundry",
    "lede": "Foundry treats a research program as a graph of people, claims, artifacts, experiments, decisions, and open questions—not a folder of documents.",
    "sections": [
      {
        "title": "The missing layer",
        "body": [
          "Teams often have plenty of files and very little shared state. The work becomes hard to query because its relationships live in individual memory or meeting history."
        ]
      },
      {
        "title": "Ontology first",
        "body": [
          "A small set of explicit entities and relationships makes the program inspectable across interfaces. The ontology is not there to bureaucratize discovery; it lets tools compose without each inventing a different meaning for the same object."
        ]
      },
      {
        "title": "The larger direction",
        "body": [
          "The aim is a living research environment in which claims remain attached to evidence, work can be handed between humans and agents, and the operating system gets more useful as the group learns."
        ]
      }
    ],
    "public": false
  },
  {
    "slug": "temporal-self-consistency",
    "name": "Temporal Self-Consistency",
    "kind": "alignment",
    "description": "Research on whether consistency across time can become a useful training signal instead of a post-hoc score.",
    "url": "/work/temporal-self-consistency/",
    "sourceUrl": "https://github.com/edward-lcl/temporal-self-consistency",
    "lede": "If a system changes its answer across time, that change may reveal more than a single final score. This project asks whether temporal consistency can become a training signal without rewarding rigidity.",
    "sections": [
      {
        "title": "The intuition",
        "body": [
          "A model that revisits the same underlying claim under changed wording or delayed context exposes a trajectory. Agreement, revision, and contradiction each carry different information."
        ]
      },
      {
        "title": "The hard part",
        "body": [
          "Consistency is not the same as correctness. A confidently wrong system can be perfectly stable, while a capable system may revise itself when evidence changes. The useful signal must distinguish principled updating from arbitrary drift."
        ]
      },
      {
        "title": "Status",
        "body": [
          "This is active research. The optimization behavior is understood more clearly than the behavioral outcome, which remains sensitive to experimental choices. The open work is to find a signal that rewards coherent updating rather than surface repetition."
        ]
      }
    ],
    "public": false
  },
  {
    "slug": "circuit-compass",
    "name": "Circuit Compass",
    "kind": "biomedical",
    "description": "I built an analysis and handoff workflow to help a collaborator compare biological explanations against public single-cell evidence.",
    "url": "/work/circuit-compass/",
    "sourceUrl": null,
    "status": "System note · hypothesis-generating system",
    "contribution": "Designed and built the end-to-end analysis and handoff pipeline: data ingestion, hypothesis panels, pseudobulk analysis, literature/reagent layers, figures, and scientific self-critique.",
    "evidenceClass": "E2 · artifact-backed; biological interpretation provisional",
    "provenance": "This note describes the pipeline and its critique; the implementation is not currently public. Biological interpretations require independent and physical validation.",
    "lastVerified": "13 Aug 2026",
    "artifactState": "Implementation not currently public · access checked 10 Sep 2026",
    "evidenceNote": "The former public repository is no longer accessible. This note preserves the scope and limitations, not a reproducibility claim. The scientific interpretation is provisional: current analyses contain cohort, sex/strain, modality, and replication limits.",
    "lede": "Circuit Compass organizes competing explanations for a biological result and the evidence that could distinguish them. I built the analysis and handoff pipeline; the proposed mechanisms still need experimental validation.",
    "sections": [
      {
        "title": "Start with competing explanations",
        "body": [
          "The project began with a collaborator’s experiment where behavior and molecular readouts appeared to disagree. The pipeline organizes possible explanations rather than selecting one plausible story immediately.",
          "My part was computational. I wanted the handoff to make the alternatives inspectable: what supports each explanation, what else could produce the same observation, and which measurement would distinguish them. Choosing a plausible mechanism too early would make the software look more decisive than the evidence allowed."
        ]
      },
      {
        "title": "What I built",
        "body": [
          "I built the data-ingestion, analysis, literature, figure, and handoff workflow. It uses public single-nucleus datasets and aggregates measurements at the mouse level when biological replication permits that analysis.",
          "The output brings hypotheses, supporting evidence, limitations, and proposed follow-up measurements into one reviewable document. Synthetic installation checks are kept separate from real-data outputs."
        ]
      },
      {
        "title": "Where interpretation remains uncertain",
        "body": [
          "The existing critique identifies cohort and sex/strain confounding, limits of replication and cell annotation, and the distance between RNA measurements and protein or circuit behavior. Several mechanisms may fit the same signature.",
          "Those limitations determine what needs checking next. The pipeline does not establish a biological mechanism or substitute for the collaborator’s experiment."
        ]
      },
      {
        "title": "What is available here",
        "body": [
          "The implementation is not currently public. This page explains the workflow and its limits; it is not a reproducible release of the analysis.",
          "This is a practical reason I care about independent verification. A computational workflow can organize more explanations than a team could easily work through by hand, but the usefulness depends on what happens at the handoff. I want a collaborator to be able to challenge the explanation and choose a measurement that could prove it wrong."
        ],
        "inlineLinks": [
          {
            "label": "independent verification",
            "url": "/questions/verification-must-touch-reality/"
          }
        ]
      }
    ],
    "readTime": "2 min read"
  },
  {
    "slug": "ontology",
    "name": "Ontology",
    "kind": "public primitive",
    "description": "A small set of durable primitives for identity, provenance, context, delegation, and reasoning across implementations.",
    "url": "/work/ontology/",
    "sourceUrl": "https://gitlawb.com/node/repos/z6MkshbnDRCjdmEhwhLa6HL19Urs8JNM59t6t9yZWLxweYLh/ontology",
    "lede": "Tools become composable when they agree on a few durable objects. Ontology is an attempt to make identity, evidence, context, and delegation portable across systems.",
    "sections": [
      {
        "title": "Why primitives",
        "body": [
          "A large schema hardens today’s assumptions. A tiny vocabulary can preserve the relationships that must survive even as interfaces, models, and storage systems change."
        ]
      },
      {
        "title": "What it carries",
        "body": [
          "The primitives describe who or what acted, which context shaped the action, what artifact or claim resulted, how authority was delegated, and where the evidence came from."
        ]
      },
      {
        "title": "Open by design",
        "body": [
          "The value of an ontology increases when other systems can implement and challenge it. This is a public primitive rather than a proprietary product surface."
        ]
      }
    ],
    "public": false
  },
  {
    "slug": "brewery-control-systems",
    "name": "Brewery Control Systems",
    "kind": "industrial systems",
    "description": "P&ID and AutoCAD work for automated brewery control, instrumentation, and compliance monitoring in Trinidad.",
    "url": "/work/brewery-control-systems/",
    "sourceUrl": null,
    "status": "Completed · 2024",
    "contribution": "Designed P&ID drawings in AutoCAD and supported CCTV–PLC monitoring for an automated brewery environment.",
    "evidenceClass": "E2 · experience and artifact-backed",
    "provenance": "Personal work record; client-sensitive operating artifacts are not public.",
    "lastVerified": "13 Aug 2026",
    "artifactState": "Private industrial artifacts · public case note only",
    "lede": "During a service-engineering internship in Trinidad, I drew piping and instrumentation diagrams for brewery automation. The work connected physical equipment, monitoring, and the people operating the process.",
    "sections": [
      {
        "title": "My part in the work",
        "body": [
          "I designed P&ID drawings in AutoCAD and supported CCTV–PLC monitoring for an automated brewery environment. A P&ID is a piping and instrumentation diagram; a PLC is a programmable logic controller.",
          "The drawings brought pipes, valves, sensors, and control relationships into a representation operators and engineers could work from."
        ]
      },
      {
        "title": "What carried into my AI work",
        "body": [
          "Looking back at that work, I see a connection to the questions I now ask about AI: where does a signal come from, what transforms it, and which action depends on it? In the brewery work, the diagram made relationships between physical equipment and control components explicit. It gave people something to inspect together.",
          "With agents, I want a similarly inspectable account of observations, decisions, and actions. The systems are different, but the need to trace a problem across components is familiar. A clear diagram helps with that; the equipment and software still have to be checked in operation."
        ]
      },
      {
        "title": "Artifact availability",
        "body": [
          "The operating drawings and client-sensitive materials are private. This is a case note about my role and what I learned, not a public design package or an independent certification of the installation."
        ]
      }
    ],
    "readTime": "2 min read"
  },
  {
    "slug": "pop2-protein-expression",
    "name": "POP2 Protein Expression",
    "kind": "wet-lab system",
    "description": "A ten-person undergraduate research workflow combining wet-lab iteration, AI-assisted parameter search, and a shared evidence interface.",
    "url": "/work/pop2-protein-expression/",
    "sourceUrl": "https://github.com/edward-lcl/UiS-POP2-v2",
    "status": "Completed · CURC Highest Honors · 2025",
    "contribution": "Led a ten-person undergraduate team and built the shared experimental, literature, and AI-assisted decision workflow.",
    "evidenceClass": "E2 · public companion and award record",
    "provenance": "Public companion repository plus project and CURC records; the bench measurements remain the scientific authority.",
    "lastVerified": "13 Aug 2026",
    "artifactState": "Public project companion · completed wet-lab work",
    "lede": "I led a ten-person undergraduate team working on human POP2 protein expression in E. coli and yeast. My role included organizing the experiments, literature, and shared decision workflow.",
    "sections": [
      {
        "title": "The work and my role",
        "body": [
          "Leading a ten-person team meant my work included how we moved between literature, parameter choices, protocols, and results. I built the shared workflow so those pieces could be considered together. The research still depended on the team carrying out and interpreting the experiments.",
          "The project received CURC Highest Honors in 2025. The public project companion preserves project context and the interactive research interface; it should not be treated as a complete raw-data release."
        ],
        "inlineLinks": [
          {
            "label": "public project companion",
            "url": "https://github.com/edward-lcl/UiS-POP2-v2"
          }
        ]
      },
      {
        "title": "Where AI helped",
        "body": [
          "We used AI to explore possible parameters and organize literature for discussion. Its suggestions were inputs to the team’s decisions, not experimental results.",
          "The bench measurements remained the evidence about expression. A recommendation still had to be tested through the protocol, controls, and interpretation of the measured output."
        ]
      },
      {
        "title": "What I took from it",
        "body": [
          "The project made the handoff between suggestion and experiment important to me. I wanted the next decision to retain the evidence and reasoning behind the last one.",
          "That concern carries into my later memory and evaluation work. A useful research tool should help the next person understand why a choice was made and whether it has been tested. For a team using AI in experimental work, I think that continuity deserves as much attention as how many new suggestions the model can generate."
        ],
        "inlineLinks": [
          {
            "label": "memory",
            "url": "/research/recall-debt/"
          },
          {
            "label": "evaluation",
            "url": "/work/eval-evidence/"
          }
        ]
      }
    ],
    "sourceLabel": "Project companion",
    "readTime": "2 min read"
  }
] as const;

// Writing published on external venues: indexed from /notes/ so the notebook stays complete.
export const publishedElsewhere = [
  {
    title: "The Alignment Problem Is Upstream of the Model",
    body: "Alignment is decided by layers around and upstream of the weights. The published essay that seeded the notebook’s harness-and-layers framing.",
    venue: "EA Forum",
    url: "https://forum.effectivealtruism.org/posts/xBjgTH3tXmeECERGR/the-alignment-problem-is-upstream-of-the-model",
  },
];

// Accepted work without a digest page yet: shown in the homepage rows and on the CV.
export const additionalPapers = [
  {
    slug: "hidden-cot",
    sourceUrl: "https://arxiv.org/abs/2608.29956",
    title: "Detecting Hidden Chain-of-Thought in Large Language Models",
    subtitle: "With Linguistic, Behavioral, and Mechanistic Indicators",
    venue: "ICML 2026 · Workshop",
    series: "ICML",
    cvPriority: 6,
    note: "Accepted",
    role: "Co-author",
    authors: "Armaan Singh · Ryan Trinh Le · Jasmine Kaur · Abdullah Sultan · Edward Lue Chee Lip · Kiran Nijjer · Adnan Ahmed · Vasu Sharma",
    url: "/research/hidden-cot/",
  },
];

export const links = {
  github: "https://github.com/edward-lcl",
  linkedin: "https://linkedin.com/in/edward-lue-chee-lip",
  x: "https://x.com/MushuDev",
  email: "mailto:eluecheelip@gmail.com",
};
