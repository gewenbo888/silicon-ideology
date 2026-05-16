import type { WarNode } from "@/lib/types";

export const WARS: WarNode[] = [
  {
    slug: "openai-vs-anthropic",
    title: { en: "OpenAI vs. Anthropic", zh: "OpenAI vs. Anthropic" },
    subtitle: {
      en: "The safety schism that became the industry's primary fault line.",
      zh: "由\"安全分裂\" 变成行业首要断层。",
    },
    parties: [
      { en: "OpenAI · the deployment-first lab", zh: "OpenAI · 部署优先实验室" },
      { en: "Anthropic · the safety-first lab", zh: "Anthropic · 安全优先实验室" },
    ],
    kernel: {
      en: "Anthropic exists because its founders — Dario and Daniela Amodei, Tom Brown, Jared Kaplan, and most of OpenAI's original safety team — left OpenAI in 2021 over a disagreement about how seriously the lab was taking alignment. Five years later the resulting rivalry is the principal cultural and commercial axis of the AI industry. Both labs ship at the frontier; their disagreements about how to do so have set the terms of debate for the entire field.",
      zh: "Anthropic 之所以存在，是因为其创始人——Dario 与 Daniela Amodei、Tom Brown、Jared Kaplan，以及 OpenAI 最初安全团队的大半——于 2021 年因\"实验室对齐工作的认真程度\" 出现分歧而离开 OpenAI。五年后，由此形成的对垒，已是 AI 行业的首要文化与商业轴线。两家实验室都在前沿出货；它们关于\"如何出货\" 的分歧，为整个领域的辩论设定了基本词汇。",
    },
    sections: [
      {
        heading: { en: "Frontline", zh: "前线" },
        body: {
          en: "Model capability (GPT-4, Claude 3, GPT-5, Claude 4). Enterprise contracts (the same Fortune 500 buyers, the same federal agencies). Safety research output (papers, interpretability artifacts, public statements about risk). Talent (a tight bidirectional flow that occasionally turns into a hiring war). Capital (Microsoft for OpenAI; Google + Amazon for Anthropic).",
          zh: "前线：模型能力（GPT-4、Claude 3、GPT-5、Claude 4）。企业合同（同一批《财富》500 强买家、同一批联邦机构）。安全研究输出（论文、可解释性工件、关于风险的公开声明）。人才（双向流动紧密，偶尔变成抢人战）。资本（OpenAI 由微软支持；Anthropic 由 Google 与亚马逊支持）。",
        },
      },
      {
        heading: { en: "Doctrine — OpenAI", zh: "教义 — OpenAI" },
        body: {
          en: "Beneficial AGI requires being the lab that ships it. Deployment teaches you what's true about the technology faster than theoretical research alone. The right strategy is to be early, fast, and at scale — and to let the safety work be carried by the operational discipline of being the lab the world is actually using.",
          zh: "\"有益的 AGI\" 需要成为发出去的那家实验室。比起单纯理论研究，部署能更快地教会你关于这项技术的真相。正确战略是\"早、快、规模化\"——并让\"成为世界真正在用的那家实验室\" 这一运营纪律去承担安全工作。",
        },
      },
      {
        heading: { en: "Doctrine — Anthropic", zh: "教义 — Anthropic" },
        body: {
          en: "If frontier models are dangerous, the right move is to be one of the labs at the frontier — but to be the one that prioritizes interpretability, refuses certain deployments, and builds Constitutional AI as a default. The safety community should staff the frontier rather than pause it. Public communication should be calmer than the technology warrants.",
          zh: "若前沿模型危险，正确做法是\"成为前沿实验室之一——但是那个把可解释性放在优先位置、拒绝某些部署、并把 Constitutional AI 作为默认的实验室\"。安全社群应当\"驻守前沿\"，而非\"叫停前沿\"。公开沟通应当比技术本身所要求的更冷静。",
        },
      },
      {
        heading: { en: "Stakes", zh: "赌注" },
        body: {
          en: "Whoever wins enterprise distribution by 2027 sets the cultural register of AI for the second half of the decade. Whoever wins the technical-interpretability race owns the moral high ground inside the field. The 2023 OpenAI board crisis showed that the safety-faction-aligned governance of OpenAI was structurally weak; whether Anthropic's commercial growth lets it preserve its founding posture is the open question.",
          zh: "谁在 2027 年前赢下企业分发，谁就为十年下半场设定 AI 的文化语域。谁赢下技术可解释性的竞速，谁就在领域内占据道德高地。2023 年 OpenAI 董事会危机表明，OpenAI 内部\"安全派对齐的治理\" 在结构上是脆弱的；Anthropic 的商业增长能否让它守住创业初心，是开放问题。",
        },
      },
      {
        heading: { en: "Outlook", zh: "前景" },
        body: {
          en: "The most likely 2027 outcome is bipolar, not unipolar: two frontier labs with similar capability profiles, distinguishable mainly by deployment posture. The deeper question is whether the U.S. closed-frontier-lab duopoly survives Chinese open-weight efficiency at all. If DeepSeek-class training continues to compress costs, the OpenAI–Anthropic rivalry may become a sideshow in a larger open-vs-closed war.",
          zh: "2027 年最可能的结果是两极而非单极：两家前沿实验室拥有相似的能力曲线，主要靠部署姿态来区分。更深的问题是：美国\"封闭前沿实验室\" 双头垄断，能否扛住中国开源权重的效率？如果 DeepSeek 类训练继续压缩成本，OpenAI–Anthropic 之争可能沦为更大那场\"开放 vs. 封闭\" 战争中的支线。",
        },
      },
    ],
    ideologies: ["ai-safety", "ai-religion", "effective-altruism", "effective-accelerationism"],
    figures: ["sam-altman"],
  },
  {
    slug: "open-vs-closed",
    title: { en: "Open Weights vs. Closed Frontier", zh: "开放权重 vs. 封闭前沿" },
    subtitle: {
      en: "Whether the AI substrate is a Linux or a Windows.",
      zh: "AI 基底究竟是 Linux 还是 Windows。",
    },
    parties: [
      { en: "Meta · Mistral · DeepSeek · Qwen · the open-weights coalition", zh: "Meta · Mistral · DeepSeek · 通义千问 · 开放权重联盟" },
      { en: "OpenAI · Anthropic · Google DeepMind · xAI · the closed-frontier coalition", zh: "OpenAI · Anthropic · Google DeepMind · xAI · 封闭前沿联盟" },
    ],
    kernel: {
      en: "The defining commercial-political question of mid-2020s AI: should the most capable models' weights be publicly downloadable? Meta's Llama series, Mistral's Mixtral and Magistral, DeepSeek's R1, Alibaba's Qwen, 01.AI's Yi — the open coalition has produced models within months of the closed frontier and at a fraction of the operating cost. The closed coalition argues that responsible deployment requires control of the model. The argument is half about safety and half about market structure.",
      zh: "2020 年代中期 AI 的定义性商业-政治问题：最强模型的权重应当能被公开下载吗？Meta 的 Llama 系列、Mistral 的 Mixtral 与 Magistral、DeepSeek 的 R1、阿里通义千问、零一万物 Yi——开放联盟已在数月之内追上了封闭前沿，且以其零头的运行成本。封闭联盟则坚持：负责任的部署需要对模型的控制权。这一争论一半是关于安全，一半是关于市场结构。",
    },
    sections: [
      {
        heading: { en: "Frontline", zh: "前线" },
        body: {
          en: "Capability gap (closing on most benchmarks, narrower on agentic and reasoning tasks). Cost gap (closing fast — DeepSeek's training-efficiency claims have been the largest single shock to the closed-frontier business model). Distribution gap (open wins developer mind-share; closed wins enterprise contracts). Regulatory gap (open faces the most regulatory pressure in the EU and UK).",
          zh: "前线：能力差距（多数 benchmark 上正在缩小，在智能体与推理任务上仍较窄）。成本差距（迅速收窄——DeepSeek 在训练效率上的主张，是对封闭前沿商业模式的最大单一冲击）。分发差距（开放赢得开发者心智份额；封闭赢得企业合同）。监管差距（开放在欧盟与英国面临最大监管压力）。",
        },
      },
      {
        heading: { en: "Doctrine — Open", zh: "教义 — 开放" },
        body: {
          en: "Frontier knowledge should not be the property of a small number of corporate boards. Distribution wins history; the AI lab equivalent of Linux will win as Linux won. Safety is best served by maximally distributed scrutiny. Open weights are also the only mechanism that preserves national-AI sovereignty for non-U.S. countries.",
          zh: "前沿知识不应属于少数几个公司董事会。\"分发\" 决定历史；AI 实验室世界中相当于 Linux 的那位，将以 Linux 之道获胜。安全最好通过\"最大化分布的审视\" 来实现。开放权重也是非美国国家保留\"国家 AI 主权\" 的唯一机制。",
        },
      },
      {
        heading: { en: "Doctrine — Closed", zh: "教义 — 封闭" },
        body: {
          en: "Sufficiently capable models are dual-use weapons. Open weights cannot be unshipped. Responsible deployment requires the ability to revoke access. The frontier requires capital concentration that is incompatible with open weights at current cost curves. (This last claim ages worse than the others.)",
          zh: "足够强的模型是两用武器。开放权重一旦发布就无法收回。负责任的部署需要\"撤销访问\" 的能力。前沿需要的资本集中度，在当前成本曲线下与开放权重不相容。（最后这条比其余几条老化得更快。）",
        },
      },
      {
        heading: { en: "Stakes", zh: "赌注" },
        body: {
          en: "Sovereign-AI initiatives in France, Germany, the UAE, India, and Singapore have explicitly endorsed open weights as a precondition of national capability. The 2024 EU AI Act carved out distinct treatment for open models. The U.S. 2024 chip export-control regime is in part an attempt to manage the open-weights problem at the compute layer, since the weights themselves can't be controlled.",
          zh: "法国、德国、阿联酋、印度、新加坡的主权 AI 计划都明确将\"开放权重\" 视作国家能力的前提。2024 年欧盟 AI 法案对开源模型做了独立处置。2024 年美国芯片出口管制体制，在某种程度上是在\"算力层\" 试图处理\"开放权重问题\"——因为权重本身控制不了。",
        },
      },
      {
        heading: { en: "Outlook", zh: "前景" },
        body: {
          en: "The 2026–2028 capability curve will probably converge — open weights five to nine months behind closed, at fractional cost, on most workloads. The interesting question becomes: which capability frontier remains durably closed? Likely candidates: extremely-long-context reasoning, agentic execution chains, multimodal real-time. If those collapse, the closed-frontier business model collapses with them.",
          zh: "2026–2028 年的能力曲线大概率会收敛——开放权重落后封闭五到九个月，在大多数工作负载上以零头成本运行。有意思的问题变成：哪一条能力前沿能持久封闭？候选项可能包括：极长上下文推理、智能体执行链、多模态实时。如果这些坍塌，封闭前沿的商业模式也会随之坍塌。",
        },
      },
    ],
    ideologies: ["open-source", "ai-safety", "ai-civilization-competition", "techno-libertarianism"],
    figures: ["marc-andreessen", "sam-altman"],
  },
  {
    slug: "accel-vs-decel",
    title: { en: "Accelerationism vs. Safety (e/acc vs. Decel)", zh: "加速主义 vs. 安全派（e/acc vs. 减速派）" },
    subtitle: {
      en: "The same disagreement, performed at higher temperature.",
      zh: "同一场分歧，演奏得更热烈。",
    },
    parties: [
      { en: "e/acc · accelerate AI development", zh: "e/acc · 加速 AI 发展" },
      { en: "Decel · AI safety + pause coalition", zh: "Decel · AI 安全与暂停联盟" },
    ],
    kernel: {
      en: "By 2023 the AI policy debate had organized itself into two performative camps: e/acc, demanding faster deployment and less regulation; and \"decel,\" the catch-all e/acc label for anyone arguing for slowing down, mandatory evaluations, or capability moratoria. The fight is partly philosophical and very largely tribal. Both camps share more premises than either admits, but their public registers do not allow it.",
      zh: "到 2023 年，AI 政策辩论已自我组织为两个表演性阵营：e/acc，要求更快部署、更少监管；以及 \"decel\"——这是 e/acc 给\"任何主张减速、强制评估或暂停能力\" 之人贴的统称标签。这场战斗一半是哲学，绝大部分是部族化的。两阵营共享的前提比任一方愿意承认的都多，但他们的公共语域不允许承认。",
    },
    sections: [
      {
        heading: { en: "Frontline", zh: "前线" },
        body: {
          en: "FLI's 2023 \"pause\" letter (Yudkowsky escalates to \"shut it all down\"). The Biden 2023 executive order and its 2024 successor. The California SB 1047 fight. The 2024 OpenAI board crisis. Every product launch that uses words like \"superintelligence\" or \"AGI\" without scare quotes.",
          zh: "前线：FLI 2023 年的\"暂停\" 公开信（Yudkowsky 升级至\"全部关停\"）。拜登 2023 年行政令及其 2024 年继任令。加州 SB 1047 之战。2024 年 OpenAI 董事会危机。每一次不带引号地使用\"超级智能\" 或\"AGI\" 字样的产品发布。",
        },
      },
      {
        heading: { en: "Doctrine — e/acc", zh: "教义 — e/acc" },
        body: {
          en: "The expected loss from slowing AI is greater than the expected loss from speeding it up. Markets and competition are the actual alignment mechanism. AI safety as a discipline is largely the worry of an unrepresentative academic elite. The 21st century needs more building and less PowerPoint about risk.",
          zh: "放慢 AI 的预期损失，大于加速它的预期损失。市场与竞争是真正起作用的对齐机制。\"AI 安全\" 作为一门学科，主要是一群不具代表性的学术精英的忧虑。21 世纪需要的是更多建造，更少关于风险的 PPT。",
        },
      },
      {
        heading: { en: "Doctrine — Decel", zh: "教义 — Decel" },
        body: {
          en: "Frontier-AI capabilities are advancing faster than alignment understanding. The expected loss from misalignment is bounded by extinction. Voluntary pauses, compute-licensing, dangerous-capability evaluations, and selective deployment are minimum-viable governance. The label \"decel\" is a rhetorical attack, not a self-description.",
          zh: "前沿 AI 能力的发展速度，快于\"对齐理解\" 的发展速度。失对齐的预期损失，上界是灭绝。自愿暂停、算力许可证、危险能力评估、选择性部署，是最低可行治理。\"decel\" 是一种修辞攻击，而不是一种自我描述。",
        },
      },
      {
        heading: { en: "Stakes", zh: "赌注" },
        body: {
          en: "The 2024 U.S. election repositioned the entire alignment-policy debate. The new administration's posture is closer to e/acc than to the 2023 executive order. The EU and UK are moving the other direction. Whoever wins the regulatory layer at the national level for the next four years gets to set the global default.",
          zh: "2024 年美国大选重置了整个对齐政策辩论。新政府的姿态更接近 e/acc，而非 2023 年的行政令。欧盟与英国走向另一边。未来四年谁赢下国家层级的监管层，谁就为全球默认设了标准。",
        },
      },
      {
        heading: { en: "Outlook", zh: "前景" },
        body: {
          en: "The most likely 2027 endpoint is a quiet compromise neither camp will claim: mandatory evaluations for the largest training runs, no moratorium, expanded export controls, public-interest interpretability research at the national-lab level. Both sides will declare victory and the underlying questions will remain.",
          zh: "2027 年最可能的结局是\"任何一方都不会承认的安静妥协\"：对最大规模训练强制评估、无暂停、出口管制扩大、国家实验室层级的公共利益可解释性研究。双方都会宣布胜利，而底层问题仍未解决。",
        },
      },
    ],
    ideologies: ["effective-accelerationism", "effective-altruism", "ai-safety", "techno-optimism"],
    figures: ["marc-andreessen", "sam-altman"],
  },
  {
    slug: "us-vs-china-ai",
    title: { en: "U.S. vs. China · the Civilizational Race", zh: "美 vs. 中 · 文明级竞速" },
    subtitle: {
      en: "Two AI stacks, two chip ecosystems, two definitions of victory.",
      zh: "两套 AI 栈，两套芯片生态，两种对胜利的定义。",
    },
    parties: [
      { en: "United States · NVIDIA + frontier labs + cloud trinity", zh: "美国 · NVIDIA + 前沿实验室 + 云三角" },
      { en: "China · indigenous chips + open labs + national strategy", zh: "中国 · 国产芯片 + 开源实验室 + 国家战略" },
    ],
    kernel: {
      en: "The U.S.-China AI competition is the dominant geopolitical fact of the 2020s technology cycle. By 2026 each side has its own frontier-lab portfolio, its own preferred chip supply chain, its own open-or-closed posture, and its own narrative about why it will win. The substantive technical convergence in 2024–2025 (DeepSeek R1, Qwen-Max, the Mistral-style efficiency frontier) has scrambled the comfortable U.S. assumption of permanent lead.",
      zh: "中美 AI 竞争是 2020 年代技术周期的主导地缘事实。到 2026 年，两边各自拥有自己的前沿实验室组合、自己偏好的芯片供应链、自己\"开放或封闭\" 的姿态，以及自己关于\"为何能赢\" 的叙事。2024–2025 年的实质性技术收敛（DeepSeek R1、Qwen-Max、Mistral 风格的效率前沿），打乱了美国\"领先永驻\" 的舒适假设。",
    },
    sections: [
      {
        heading: { en: "Frontline", zh: "前线" },
        body: {
          en: "Chip exports (the October 2022 controls + 2024 expansion). HBM and EUV equipment. Frontier-model release cadence. Open weights as a vector of soft power. Talent flows (Chinese-trained researchers in U.S. labs, U.S.-trained Chinese researchers returning, talent visa friction).",
          zh: "前线：芯片出口（2022 年 10 月管制 + 2024 年扩展）。HBM 与 EUV 设备。前沿模型发布节奏。开放权重作为软实力载体。人才流动（在美国实验室的中国受训研究员、回流的美国受训中国研究员、人才签证摩擦）。",
        },
      },
      {
        heading: { en: "Doctrine — U.S.", zh: "教义 — 美国" },
        body: {
          en: "Maintain the compute lead through export controls; ride NVIDIA-CUDA-cloud trinity at the frontier; bind allies into one compute zone; accept that AI is the defining national-security technology of the 21st century and act accordingly.",
          zh: "通过出口管制保持算力领先；在前沿乘坐 NVIDIA–CUDA–云三角；把盟友绑入同一算力区；接受\"AI 是 21 世纪定义性的国家安全技术\"，并据此行事。",
        },
      },
      {
        heading: { en: "Doctrine — China", zh: "教义 — 中国" },
        body: {
          en: "Substitute via efficiency. Race up the open-weights curve. Build an indigenous chip industry on whatever node generation is reachable. Cultivate a parallel application ecosystem (WeChat-class platforms, sovereign cloud, hardware vertical integration) that is structurally insulated from the U.S. stack.",
          zh: "以效率替代。沿开放权重曲线竞速。在能够触达的任何工艺节点上建设国产芯片产业。培养一套与美国栈在结构上隔离的并行应用生态（微信级平台、主权云、硬件垂直整合）。",
        },
      },
      {
        heading: { en: "Stakes", zh: "赌注" },
        body: {
          en: "Whose stack becomes the default for the Global South in 2027–2030 may be the single most consequential question of the cycle. The U.S. assumption that English-language frontier models will dominate everywhere is increasingly questionable. In Africa, parts of Latin America, and most of Southeast Asia, Chinese open models are already common.",
          zh: "2027–2030 年谁的技术栈成为全球南方的默认，可能是这一周期最具后果的问题。美国\"英语前沿模型将处处主导\" 的假设日益可疑。在非洲、拉美部分、东南亚大部分地区，中国开源模型已属寻常。",
        },
      },
      {
        heading: { en: "Outlook", zh: "前景" },
        body: {
          en: "The most likely 2030 outcome is a bifurcated world: two AI stacks, two chip supply chains, two agent-payment rails, and a long unstable middle. Neither side wins outright; both pay enormous compliance and inefficiency costs for the bifurcation; the global development frontier slows accordingly.",
          zh: "2030 年最可能的结果是分叉世界：两套 AI 栈、两套芯片供应链、两套智能体支付轨道，以及一片漫长不稳的中间地带。两边都没有彻底获胜；两边都为分叉付出巨大合规与效率成本；全球发展前沿随之放缓。",
        },
      },
    ],
    ideologies: ["ai-civilization-competition", "chip-geopolitics", "military-tech-alliance"],
    figures: ["jensen-huang"],
  },
  {
    slug: "centralized-vs-decentralized-ai",
    title: { en: "Centralized vs. Decentralized Intelligence", zh: "中心化 vs. 去中心化的智能" },
    subtitle: {
      en: "Whether intelligence is rented from three labs or owned by every user.",
      zh: "智能是从三家实验室租来，还是由每个用户拥有。",
    },
    parties: [
      { en: "Centralized · OpenAI / Anthropic / Google as utility providers", zh: "中心化 · OpenAI / Anthropic / Google 作为公用事业提供方" },
      { en: "Decentralized · local models + crypto-AI + agent markets", zh: "去中心化 · 本地模型 + 加密 AI + 智能体市场" },
    ],
    kernel: {
      en: "The centralized scenario is the 2025 status quo: a handful of frontier labs sell intelligence as a metered API. The decentralized scenario is the cypherpunk-adjacent counter-program: local-first models, encrypted agent identities, on-chain coordination, x402 micropayments, MCP marketplaces. Whether the second scenario remains a niche or absorbs a meaningful slice of the agent economy is the most operationally consequential open question of the late 2020s.",
      zh: "中心化情景是 2025 年的现状：几家前沿实验室以\"按用量计费的 API\" 出售智能。去中心化情景是邻近赛博朋克密码运动的反向方案：本地优先模型、加密的智能体身份、链上协调、x402 微支付、MCP 市场。第二种情景会保持小众，还是会吸纳智能体经济中实质性的一片，是 2020 年代晚期在运营上最具后果的开放问题。",
    },
    sections: [
      {
        heading: { en: "Frontline", zh: "前线" },
        body: {
          en: "Local-model performance (Llama-class on consumer laptops by 2025). Agent identity (centralized OAuth vs. decentralized DID/keys). Payments (Stripe-rails x402 vs. crypto-native x402). Coordination (centralized agent registries vs. on-chain marketplaces). Trust (lab brand vs. cryptographic proof).",
          zh: "前线：本地模型性能（2025 年消费级笔记本上达到 Llama 档）。智能体身份（中心化 OAuth vs. 去中心化 DID / 密钥）。支付（Stripe 轨道 x402 vs. 加密原生 x402）。协调（中心化智能体注册 vs. 链上市场）。信任（实验室品牌 vs. 密码学证明）。",
        },
      },
      {
        heading: { en: "Doctrine — Centralized", zh: "教义 — 中心化" },
        body: {
          en: "Frontier capability requires capital and infrastructure that only large labs can provide. Distribution is easier through the existing cloud trinity. Trust accrues to brand and operational discipline. Most users do not want to manage keys, models, or wallets; they want the API to work.",
          zh: "前沿能力所需的资本与基础设施，只有大型实验室能提供。通过既有的云三角进行分发更容易。信任积累在\"品牌与运营纪律\" 之上。大多数用户不想管理密钥、模型或钱包；他们只想 API 能用。",
        },
      },
      {
        heading: { en: "Doctrine — Decentralized", zh: "教义 — 去中心化" },
        body: {
          en: "Agents acting on behalf of users should not require trust in a third lab. Cryptographic identity, local inference, and on-chain payments make it possible to compose intelligence without rent extraction. Privacy-by-default is the durable competitive advantage. The platform-capitalism era can be skipped at the AI layer if the right primitives ship in time.",
          zh: "代用户行事的智能体，不应当需要对第三方实验室的信任。密码学身份、本地推理、链上支付，使得在不被抽租的前提下\"组合智能\" 成为可能。\"默认隐私\" 是耐久的竞争优势。如果合适的原语在恰当时间发出，AI 层就可以跳过平台资本主义时代。",
        },
      },
      {
        heading: { en: "Stakes", zh: "赌注" },
        body: {
          en: "If decentralized wins even 10–20% of the agent-economy volume, the entire crypto-AI thesis (Psy-class privacy chains, x402 facilitators, agent marketplaces) becomes structurally large. If decentralized stays at 1–2%, the cypherpunk wing of the agent era is a hobbyist subculture for the second time in twenty years.",
          zh: "如果去中心化哪怕只赢下智能体经济量的 10–20%，整个加密-AI 论题（Psy 级隐私链、x402 中转、智能体市场）在结构上就会变得很大。如果去中心化停留在 1–2%，那么智能体时代的赛博朋克密码翼，将在二十年里第二次成为爱好者亚文化。",
        },
      },
      {
        heading: { en: "Outlook", zh: "前景" },
        body: {
          en: "Realistic 2028 distribution: 70% centralized (consumer + most enterprise), 15% sovereign / national clouds, 10% decentralized agent commerce, 5% local-first. The 10% slice is small in share but enormous in absolute terms — large enough to support a healthy ecosystem of privacy chains and agent infrastructure if the technical work ships.",
          zh: "现实的 2028 分布：70% 中心化（消费 + 大多数企业），15% 主权 / 国家云，10% 去中心化智能体商务，5% 本地优先。那 10% 在比例上不大，但绝对量极大——如果技术工作按期完成，足以支撑一个健康的隐私链与智能体基础设施生态。",
        },
      },
    ],
    ideologies: ["cypherpunks", "crypto-anarchism", "ethereum-and-web3", "platform-capitalism"],
    figures: ["vitalik-buterin", "balaji-srinivasan"],
  },
];

export const WAR_BY_SLUG: Record<string, WarNode> = Object.fromEntries(
  WARS.map((w) => [w.slug, w])
);
