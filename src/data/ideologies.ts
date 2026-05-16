import type { IdeologyNode } from "@/lib/types";

export const IDEOLOGIES: IdeologyNode[] = [
  // ─────────── HACKER LINEAGE ───────────
  {
    slug: "cybernetics",
    cluster: "hacker",
    era: "1948–",
    title: { en: "Cybernetics", zh: "控制论" },
    subtitle: {
      en: "The first attempt to write physics for minds.",
      zh: "为心灵书写物理学的最初尝试。",
    },
    kernel: {
      en: "Cybernetics is the founding myth that everything — bodies, machines, economies, minds — is one kind of thing: a feedback system reading signals and adjusting state. Born from Norbert Wiener's wartime anti-aircraft research and the Macy Conferences (1946–1953), it taught a generation that intelligence is not a substance but a topology of loops. Every later Silicon Valley ideology — from the personal computer to AGI — is a child of this single move.",
      zh: "控制论是奠基性的神话：一切——身体、机器、经济、心灵——都是同一类东西，即读取信号并调整状态的反馈系统。它源于诺伯特·维纳的战时防空研究和梅西会议（1946–1953），教会了一代人：智能不是一种物质，而是一种循环的拓扑。后来硅谷的每一种意识形态——从个人电脑到通用人工智能——都是这一次抽象动作的子嗣。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Norbert Wiener formalizes feedback control for fire-control predictors; Warren McCulloch and Walter Pitts compute Boolean logic on neuron models; Claude Shannon collapses meaning into bits. The Macy Conferences gather mathematicians, anthropologists (Bateson, Mead), neuroscientists, and engineers around a single thesis: information is more fundamental than energy or matter.",
          zh: "维纳为火控预测器形式化了反馈控制；麦卡洛克和皮茨用神经元模型计算布尔逻辑；香农将意义压缩为比特。梅西会议把数学家、人类学家（贝特森、米德）、神经科学家与工程师团聚在一个论题之下：信息比能量或物质更根本。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Reality is a system of systems. Each system has inputs, outputs, internal state, and an objective function it minimizes. The right way to understand anything is to draw its loop. The right way to fix anything is to find the loop and intervene in it. The right way to build minds is to wire loops at scale.",
          zh: "现实是系统之系统。每个系统都有输入、输出、内部状态以及一个它试图最小化的目标函数。理解一切的正确方式，是画出它的回路。修正一切的正确方式，是找到回路并加以介入。构建心智的正确方式，是大规模地接驳回路。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Cybernetics fragmented in the 1960s but its DNA replicated everywhere: into Stewart Brand's Whole Earth Catalog, into early AI at MIT and SAIL, into systems theory and management consulting, into John Boyd's OODA loop, into the personal-computer thesis at Xerox PARC. By the 2010s every machine-learning training loop was cybernetics with more compute.",
          zh: "控制论在 1960 年代分裂，但其 DNA 处处复制：进入斯图尔特·布兰德的《全球目录》，进入麻省理工和斯坦福的早期 AI 实验室，进入系统论与管理咨询，进入约翰·博伊德的 OODA 环路，进入 Xerox PARC 的个人电脑论题。到了 2010 年代，每一个机器学习的训练循环都不过是算力加大的控制论。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "Two strains diverge early: first-order cybernetics (observe the system) versus second-order cybernetics (observe the observer). The same split returns 70 years later as AI safety versus AI capability — is the goal to understand minds or to build them?",
          zh: "两条支流早早分流：一阶控制论（观察系统）与二阶控制论（观察观察者）。同样的裂痕在七十年后重现为 AI 安全 vs. AI 能力——目标是理解心智，还是建造心智？",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "Cybernetics never died — it dissolved. The vocabulary is everywhere: agents, loops, optimization, reward, regulation, feedback. Every modern AI lab is a cybernetics department that has forgotten its origin story.",
          zh: "控制论从未死去——它溶解了。它的词汇无处不在：智能体、回路、优化、奖励、调节、反馈。每一个现代 AI 实验室都是一个忘记了自己起源故事的控制论系。",
        },
      },
    ],
    thinkers: ["Norbert Wiener", "Warren McCulloch", "Walter Pitts", "Claude Shannon", "Gregory Bateson", "Heinz von Foerster", "Stewart Brand"],
    concepts: [
      { en: "Feedback loop", zh: "反馈回路" },
      { en: "Black box", zh: "黑箱" },
      { en: "Information theory", zh: "信息论" },
      { en: "Homeostasis", zh: "稳态" },
      { en: "Second-order cybernetics", zh: "二阶控制论" },
    ],
    related: ["hacker-culture", "transhumanism", "ai-safety", "rationalism"],
    figures: ["jensen-huang"],
  },
  {
    slug: "hacker-culture",
    cluster: "hacker",
    era: "1959–",
    title: { en: "Hacker Culture", zh: "黑客文化" },
    subtitle: {
      en: "Information wants to be free — and somebody has to wire it.",
      zh: "信息想要自由——总得有人把线接上。",
    },
    kernel: {
      en: "Hacker culture is what happens when cybernetics escapes academia and meets the actual machine. At the MIT Tech Model Railroad Club (1959) and later at the Homebrew Computer Club (1975), a peculiar moral system congeals: total transparency, meritocracy of code, suspicion of authority, joy in the elegant trick. The hacker ethic — \"access to computers should be unlimited and total\" — becomes the founding theology of every Silicon Valley business model that follows, including the ones that ultimately betray it.",
      zh: "黑客文化是控制论逃出学界、撞上真实机器之后所发生的事情。在麻省理工铁路模型俱乐部（1959）以及后来的家酿计算机俱乐部（1975），一种奇特的道德系统凝结成形：完全透明、代码至上的精英主义、对权威的怀疑、对优雅技巧的喜悦。这套黑客伦理——\"获取计算机的权利应当是无限且彻底的\"——成了之后每一个硅谷商业模式的奠基神学，连那些最终背叛它的也不例外。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "TX-0 and PDP-1 hackers at MIT in the late 1950s build the first computer graphics, the first chatbot (ELIZA), and the first video game (Spacewar!). The word \"hack\" originally meant an elegant solution that revealed something true about the machine. Steven Levy's 1984 Hackers codifies the ethic; the Homebrew Club in Menlo Park grows Apple, and the West-Coast strand of hackerdom becomes inseparable from countercultural utopianism.",
          zh: "1950 年代末，麻省理工的 TX-0 与 PDP-1 黑客们造出了第一批电脑图形、第一个聊天机器人（ELIZA）以及第一个电子游戏（Spacewar!）。\"hack\" 原本指的是一种优雅的解法——它揭示了机器的某种真相。史蒂芬·利维 1984 年的《黑客》一书把这套伦理固定下来；门洛帕克的家酿俱乐部催生了苹果，西海岸的黑客脉络从此与反主流文化乌托邦主义无法剥离。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Information wants to be free. Computers will save us from bureaucracies, churches, and television. Mistrust authority and promote decentralization. Hackers should be judged by their code, not by bogus criteria such as degrees, age, race, or position. You can create art and beauty on a computer.",
          zh: "信息想要自由。计算机将把我们从官僚、教会和电视中拯救出来。不信权威，推崇去中心化。黑客应当以代码为评判标准，而不是文凭、年龄、种族或职位。你可以在计算机上创造艺术与美。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "From the MIT lab the lineage forks. One branch becomes the GNU Project and Free Software movement (Stallman). One becomes the personal-computer industry (Apple, Microsoft). One becomes the demoscene and warez subculture in Europe. By the 1990s the original ethic survives mostly in open source — and the hostile takeover of the term \"hacker\" by the security industry begins.",
          zh: "从麻省理工实验室出发，谱系开始分叉。一支变成 GNU 项目与自由软件运动（斯托曼）。一支变成个人电脑产业（苹果、微软）。一支在欧洲变成 demoscene 与盗版圈子。到 1990 年代，原初伦理基本只在开源世界中残存——\"hacker\" 一词随后被安全业悄悄夺走。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "The deepest conflict is internal: every successful hacker company eventually becomes the bureaucracy the hackers were trying to escape. Apple becomes a walled garden. Google's \"don't be evil\" gets quietly retired. The hacker ethic was easier to enforce in the dorm than in the data center.",
          zh: "最深的冲突在内部：每一家成功的黑客公司，最终都变成黑客们当年想逃离的那种官僚机构。苹果变成了围墙花园。Google 的 \"don't be evil\" 被悄悄退役。在宿舍里维持黑客伦理，比在数据中心容易得多。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "Today the hacker ethic has been re-housed: partly in open-source AI (Llama, Mistral, the local-models scene), partly in crypto, partly in the cypherpunk-adjacent privacy movement. Each is an attempt to restart the loop on different hardware.",
          zh: "今日，黑客伦理已被重新安置：一部分在开源 AI（Llama、Mistral 与本地模型圈子）中，一部分在加密世界，一部分在与赛博朋克邻接的隐私运动里。每一处都是在不同硬件上重新启动同一道回路。",
        },
      },
    ],
    thinkers: ["Steven Levy", "Richard Stallman", "Lee Felsenstein", "John Draper", "Ted Nelson"],
    concepts: [
      { en: "The Hacker Ethic", zh: "黑客伦理" },
      { en: "Information wants to be free", zh: "信息想要自由" },
      { en: "Code as speech", zh: "代码即言论" },
    ],
    related: ["cybernetics", "open-source", "cypherpunks", "personal-computing"],
    figures: ["steve-jobs"],
  },
  {
    slug: "personal-computing",
    cluster: "hacker",
    era: "1975–",
    title: { en: "Personal Computing", zh: "个人计算" },
    subtitle: {
      en: "Power to the people — by way of the silicon shop.",
      zh: "把权力归还人民——经由硅片车间。",
    },
    kernel: {
      en: "The personal-computer thesis is the first Silicon Valley ideology that successfully fuses counterculture with capitalism. The dream — every individual gets a tool for thought equal to a mainframe — comes from Engelbart, Kay, and the Whole Earth orbit; the execution comes from Jobs, Wozniak, and Bill Gates. The result is a generation that learns to associate liberation with consumer hardware, and a business model that turns that association into a trillion-dollar annuity.",
      zh: "个人电脑论题是硅谷第一种成功地将反主流文化与资本主义熔合的意识形态。其梦想——每个人都能拥有一件可以匹敌大型机的\"思想之器\"——来自恩格尔巴特、凯伊以及《全球目录》圈子；执行则来自乔布斯、沃兹尼亚克和盖茨。结果是一代人学会把\"解放\"与\"消费级硬件\"绑在一起，而一种把这种联想变成万亿美元年金的商业模式由此诞生。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Doug Engelbart's 1968 \"Mother of All Demos\" shows the entire future in 90 minutes: mouse, hypertext, video conferencing, real-time collaboration. Alan Kay imagines the Dynabook. Xerox PARC builds it (Alto, 1973) but cannot ship it. Jobs visits, sees, and reshapes the consumer market around the metaphor.",
          zh: "1968 年，道格·恩格尔巴特的\"母亲级演示\"用 90 分钟展示了整个未来：鼠标、超文本、视频会议、实时协作。艾伦·凯设想了 Dynabook。Xerox PARC 把它造了出来（Alto，1973）但出不了货。乔布斯造访、目击，并以这一隐喻重塑了消费市场。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Computers are bicycles for the mind. Tools should be in the hands of users, not priests. Aesthetic matters because it carries dignity to the desk. The single best thing you can do for humanity is to put a computer in front of one more person.",
          zh: "电脑是心智的自行车。工具应当握在使用者手里，而不是祭司手里。美学很重要，因为它把尊严带到了桌面。你能为人类做的最好的一件事，就是再让多一个人面对一台电脑。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Apple → Macintosh → NeXT → return → iPhone → AirPods → Vision Pro. Microsoft → Windows → Office → Azure → Copilot. Each successive product re-rolls the same wager: that the locus of human attention can be moved one notch closer to the silicon and one notch farther from the page.",
          zh: "苹果 → 麦金塔 → NeXT → 回归 → iPhone → AirPods → Vision Pro。微软 → Windows → Office → Azure → Copilot。每一代产品都在重复同一注押：人类注意力的支点，可以再向硅片靠近一格，再远离纸面一格。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "Open versus closed: the IBM-PC clone wars taught Silicon Valley that openness wins distribution but loses margin. The 2010s mobile era inverted the lesson — closed wins margin and distribution. The unfinished question of personal computing is whether the AI era reverts to closed (ChatGPT, the new mainframe) or breaks open again (Llama, local-first).",
          zh: "开放 vs. 封闭：IBM-PC 兼容机大战教会硅谷——开放赢得了分发，但输掉了利润率。2010 年代的移动时代翻转了这一课——封闭既赢分发又赢利润率。个人计算尚未结清的问题是：AI 时代是退回封闭（ChatGPT，新的大型机），还是再一次裂开（Llama、本地优先）？",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "The personal-computer movement quietly ended in 2007 when the iPhone made the user a tenant on someone else's machine. The AI agent era is its successor, and the same question recurs: tool, or platform?",
          zh: "个人电脑运动在 2007 年悄然终结——那一年，iPhone 把用户变成了别人机器上的租客。AI 智能体时代是它的继承者，同样的问题再度浮现：工具，还是平台？",
        },
      },
    ],
    thinkers: ["Doug Engelbart", "Alan Kay", "Ted Nelson", "Steve Jobs", "Bill Gates", "Andy Hertzfeld"],
    concepts: [
      { en: "Bicycle for the mind", zh: "心智的自行车" },
      { en: "Direct manipulation", zh: "直接操作" },
      { en: "Open vs. closed", zh: "开放 vs. 封闭" },
    ],
    related: ["hacker-culture", "open-source", "platform-capitalism"],
    figures: ["steve-jobs", "larry-page"],
  },
  {
    slug: "open-source",
    cluster: "hacker",
    era: "1983–",
    title: { en: "Open Source", zh: "开源运动" },
    subtitle: {
      en: "The cathedral and the bazaar — and the eventual takeover of the cathedral by the bazaar.",
      zh: "大教堂与集市——以及集市最终对教堂的接管。",
    },
    kernel: {
      en: "Open source begins as Richard Stallman's GNU manifesto (1983), a moral position about software freedom. It is then rebranded by Eric Raymond and Tim O'Reilly in the late 1990s as a pragmatic development methodology — the bazaar — to make it palatable to enterprise. By 2010 the bazaar has eaten the cathedral: Linux runs the world, the open license is a competitive weapon, and every major tech company has a quietly held open-source strategy.",
      zh: "开源以理查德·斯托曼 1983 年的 GNU 宣言开篇——那是一种关于软件自由的道德立场。1990 年代末，埃里克·雷蒙德与蒂姆·奥莱利把它重新包装为一种实用主义的开发方法论——\"集市\"——好让企业能下咽。到了 2010 年，集市吃掉了大教堂：Linux 跑遍世界，开源许可证成为竞争武器，每家大科技公司都在悄悄经营自己的开源战略。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Stallman writes the GNU Manifesto in 1983 after the death of the MIT AI Lab's sharing culture. He launches GCC, Emacs, and the GPL. Linus Torvalds posts Linux in 1991. The two strands fuse — uneasily — into GNU/Linux, and the long political argument about whether \"free\" means freedom or zero-price begins.",
          zh: "斯托曼在麻省理工 AI 实验室共享文化死亡之后，于 1983 年写下《GNU 宣言》。他发布 GCC、Emacs 与 GPL。1991 年，林纳斯·托瓦兹发出 Linux。两条线索别扭地融合为 GNU/Linux，而关于 \"free\" 是\"自由\"还是\"免费\"的长期政治争论从此开张。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Software freedom is a precondition for cultural freedom. Code is law; if you can't read the code, you can't read the law. Copyleft (GPL) is enforcement; permissive (MIT, BSD, Apache) is invitation. Both are valid; both have political consequences.",
          zh: "软件自由是文化自由的前提。代码即法律；读不到代码，就读不到法律。Copyleft（GPL）是\"执行\"；宽松许可证（MIT、BSD、Apache）是\"邀请\"。两者都有效；两者都有其政治后果。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Linux → Apache → Mozilla → MySQL → Hadoop → Kubernetes → PyTorch → Llama → Mistral. Each generation widens the surface that open source covers, until by the AI era the question is no longer whether the platform is open but whether the weights are.",
          zh: "Linux → Apache → Mozilla → MySQL → Hadoop → Kubernetes → PyTorch → Llama → Mistral。每一代都拓宽了开源所覆盖的表面，直到 AI 时代——问题已不再是平台开不开源，而是\"权重\"开不开源。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "Stallman vs. Raymond: ethical purism vs. pragmatic distribution. Permissive vs. copyleft: invitation vs. enforcement. Vendor capture vs. community sovereignty: AWS forking Elastic; the SSPL backlash. Today: \"open weights\" vs. \"open source\" — the AI labs want to claim openness without surrendering control.",
          zh: "斯托曼 vs. 雷蒙德：伦理纯洁主义 vs. 实用主义分发。宽松许可证 vs. Copyleft：邀请 vs. 执行。厂商劫持 vs. 社区主权：AWS 分叉 Elastic；SSPL 反扑。今日：\"开放权重\" vs. \"开源\"——AI 实验室想要在不交出控制权的前提下宣称开放。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "Open source is the only Silicon Valley ideology that has won at scale and still been disowned by its founders. Stallman would not endorse 2026's de facto landscape. The structural lesson is that ideologies do not survive their own success unchanged — they get refactored by whoever ships the most software.",
          zh: "开源是硅谷唯一一个在大规模上获胜、却仍被其奠基者断绝关系的意识形态。斯托曼不会为 2026 年的实际格局背书。结构性教训是：意识形态不会在自己的成功中保持原样——它们会被发出最多代码的人重构。",
        },
      },
    ],
    thinkers: ["Richard Stallman", "Linus Torvalds", "Eric S. Raymond", "Tim O'Reilly", "Larry Wall"],
    concepts: [
      { en: "Copyleft", zh: "Copyleft 著佐权" },
      { en: "Permissive license", zh: "宽松许可证" },
      { en: "Cathedral vs. bazaar", zh: "大教堂与集市" },
      { en: "Open weights", zh: "开放权重" },
    ],
    related: ["hacker-culture", "cypherpunks", "open-ai-wars"],
  },
  {
    slug: "cypherpunks",
    cluster: "hacker",
    era: "1992–",
    title: { en: "Cypherpunks", zh: "赛博朋克密码运动" },
    subtitle: {
      en: "Privacy is the right to a self that the state cannot read.",
      zh: "隐私是\"国家无法读取的自我\"之权。",
    },
    kernel: {
      en: "The cypherpunks took one premise from the cybernetics tradition — information is power — and one premise from libertarianism — power should be checked — and produced a third premise that has shaped a quarter-century of internet politics: cryptography is the only checking mechanism left when the state owns the network. Tim May's Crypto Anarchist Manifesto (1988), Eric Hughes's A Cypherpunk's Manifesto (1993), and Hal Finney's relentless mailing-list discipline laid the entire intellectual scaffold of Bitcoin, Tor, Signal, and the broader privacy-tech movement.",
      zh: "赛博朋克密码运动从控制论传统取了一条前提——信息即权力——又从自由主义那里取了一条——权力必须受到制衡——并由此生出第三条命题，塑造了四分之一个世纪的互联网政治：当网络归国家所有时，加密学是唯一剩下的制衡机制。蒂姆·梅的《加密无政府主义者宣言》（1988）、埃里克·休斯的《赛博朋克密码者宣言》（1993）以及哈尔·芬尼对邮件列表的不懈纪律，搭起了比特币、Tor、Signal 以及更广义的隐私技术运动的全部思想骨架。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "David Chaum's blind signatures (1982) make digital cash conceivable. Phil Zimmermann ships PGP (1991), criminalizing himself under U.S. munitions export law in the process. The cypherpunk mailing list launches in 1992 with Hughes, May, and John Gilmore. Hal Finney becomes the most quietly important figure in internet financial history.",
          zh: "大卫·乔姆 1982 年的盲签名让数字现金成为可能。菲尔·齐默尔曼 1991 年发布 PGP，并因美国军火出口法将自己刑事化。赛博朋克邮件列表于 1992 年由休斯、梅和约翰·吉尔摩开张。哈尔·芬尼成为互联网金融史上最低调而最重要的人物。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "We must defend our own privacy if we expect to have any. Cypherpunks write code. We know that someone has to write software to defend privacy, and since we can't get privacy unless we all do, we're going to write it. Cryptography is the ultimate end-run around regulators. Bitcoin is cypherpunk doctrine deployed at the protocol layer.",
          zh: "若想有任何隐私，我们就必须自己捍卫它。赛博朋克密码者写代码。我们知道总要有人写出捍卫隐私的软件——因为只有所有人都写，所有人才能有隐私，所以我们来写。加密学是对监管者的终极迂回。比特币是赛博朋克教义在协议层的部署。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "PGP → Mixmaster → Tor → BitTorrent → Bitcoin → Ethereum → zk-rollups → privacy chains (Aztec, Penumbra, Psy). Each layer is a re-implementation of one thesis on more sophisticated cryptography. The 2025–2026 zero-knowledge wave is the most technically mature expression cypherpunkdom has produced.",
          zh: "PGP → Mixmaster → Tor → BitTorrent → Bitcoin → 以太坊 → 零知识 rollup → 隐私链（Aztec、Penumbra、Psy）。每一层都是同一论题在更精巧密码学上的重新实现。2025–2026 的零知识浪潮，是赛博朋克密码运动迄今技术上最成熟的表达。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "The state vs. the protocol — repeated every five years. Tornado Cash sanctions (2022), the Crypto Wars I and II, Apple-vs-FBI on the San Bernardino phone, EU Chat Control. Each round is the same: regulators want backdoors; cypherpunks ship math.",
          zh: "国家 vs. 协议——每五年重演一次。Tornado Cash 制裁（2022），加密大战 I 与 II，苹果与 FBI 在圣贝纳迪诺案上的对峙，欧盟 Chat Control。每一回合都一样：监管者想要后门；赛博朋克密码者用数学发货。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "Cypherpunkdom is the only Silicon Valley ideology with a clean continuous lineage from 1988 to today. Every privacy-tech project, every L2 rollup, every shielded pool, every AI agent that wants to transact without revealing its principal — is downstream of that mailing list.",
          zh: "赛博朋克密码运动是硅谷唯一一种从 1988 年到今天还保有清晰连续谱系的意识形态。每一个隐私技术项目、每一条 L2 rollup、每一个屏蔽池、每一个想要在不暴露委托人前提下交易的 AI 智能体——都流自那个邮件列表的下游。",
        },
      },
    ],
    thinkers: ["Tim May", "Eric Hughes", "John Gilmore", "Hal Finney", "Phil Zimmermann", "David Chaum", "Adam Back", "Nick Szabo"],
    concepts: [
      { en: "Code is law", zh: "代码即法律" },
      { en: "Crypto-anarchy", zh: "加密无政府" },
      { en: "Privacy-preserving by default", zh: "默认隐私" },
      { en: "Zero-knowledge proof", zh: "零知识证明" },
    ],
    related: ["crypto-anarchism", "bitcoin", "network-states", "techno-libertarianism"],
    figures: ["balaji-srinivasan", "vitalik-buterin"],
  },
  {
    slug: "crypto-anarchism",
    cluster: "hacker",
    era: "1988–",
    title: { en: "Crypto-Anarchism", zh: "加密无政府主义" },
    subtitle: {
      en: "Sovereign individuals, sovereign keys.",
      zh: "主权的个体，主权的密钥。",
    },
    kernel: {
      en: "Crypto-anarchism is the political conclusion the cypherpunks drew from their technical premises: if cryptography ends the state's monopoly on identity and money, then a stateless civil society on the wire becomes physically possible. Tim May's 1988 manifesto called it a \"specter haunting the modern world.\" By 2026 it is the operating assumption of every L1, every privacy mixer, every off-shore agent fleet, and the founding mood of the Network State project.",
      zh: "加密无政府主义，是赛博朋克密码者们从自身技术前提中推出的政治结论：如果密码学终结了国家对身份与货币的垄断，那么一个在线上、无国家的市民社会，便成为物理上可能的事物。蒂姆·梅 1988 年的宣言称之为\"萦绕现代世界的幽灵\"。到了 2026 年，它已是每一条 L1、每一个隐私混币器、每一支离岸智能体舰队的运行前提，也是网络国家计划的奠基心境。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Tim May lifts the form (and the cadence) of the Communist Manifesto and inverts it. The cypherpunks supply the toolkit. The 2008 financial crisis supplies the moral injury that turns niche doctrine into mass appetite. Nakamoto's Bitcoin paper lands on the cypherpunk mailing list at 18:10 EST, October 31, 2008.",
          zh: "蒂姆·梅借用了《共产党宣言》的形式与节奏，并将其反转。赛博朋克密码者提供工具包。2008 年金融危机提供了使小众教条变成大众食欲的道德创伤。中本聪的比特币论文于美东时间 2008 年 10 月 31 日 18:10 出现在赛博朋克邮件列表上。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Identity is a key. Wealth is a key. Citizenship is opt-in. Taxation requires consent or capture. Code, not law, is the binding instrument. The point is not to overthrow the state but to make exit cheaper than voice.",
          zh: "身份是一把密钥。财富是一把密钥。公民身份是\"自愿加入\"。征税需要同意或抓捕。约束力的工具是代码，而非法律。重点不是推翻国家，而是把\"退出\"变得比\"发声\"更便宜。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "May → Szabo (smart contracts, 1994) → Finney (RPOW, 2004) → Nakamoto (Bitcoin, 2008) → Buterin (Ethereum, 2015) → Balaji (Network State, 2022). Each generation pulled crypto-anarchism one step closer to operational reality.",
          zh: "梅 → 萨博（智能合约，1994）→ 芬尼（RPOW，2004）→ 中本聪（比特币，2008）→ Buterin（以太坊，2015）→ Balaji（网络国家，2022）。每一代都把加密无政府主义又向\"可运行的现实\"推近了一步。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "The fault line inside the movement is hard-money (Bitcoin maximalism) vs. soft-money (Ethereum and its descendants). Outside the movement it is exit vs. voice — does crypto-anarchism abandon the political project of improving institutions in favor of leaving them?",
          zh: "运动内部的断层是\"硬币\"（比特币极大化）与\"软币\"（以太坊及其后裔）。运动外部的断层是\"退出\" vs. \"发声\"——加密无政府主义是否放弃了改善体制的政治计划，而选择了离开？",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "The Network State proposal (Balaji, 2022) is crypto-anarchism's first attempt at a positive political program — not just exit but a new form of belonging. The 2025–2026 wave of sovereign wealth funds buying Bitcoin marks the moment crypto-anarchism began being assimilated by, rather than threatening, the state system.",
          zh: "Balaji 2022 年提出的网络国家方案，是加密无政府主义首次尝试一种正向的政治纲领——不只是退出，而是一种新的归属形式。2025–2026 年间各国主权基金购入比特币的浪潮，标志着加密无政府主义开始被国家体系吸收，而不是威胁它。",
        },
      },
    ],
    thinkers: ["Tim May", "Nick Szabo", "Hal Finney", "Satoshi Nakamoto"],
    concepts: [
      { en: "Sovereign individual", zh: "主权个体" },
      { en: "Exit over voice", zh: "退出优于发声" },
      { en: "Self-custody", zh: "自我托管" },
    ],
    related: ["cypherpunks", "bitcoin", "network-states", "techno-libertarianism"],
    figures: ["balaji-srinivasan", "peter-thiel"],
  },
  {
    slug: "bitcoin",
    cluster: "hacker",
    era: "2008–",
    title: { en: "Bitcoin & Hard-Money Maximalism", zh: "比特币与硬币最大化" },
    subtitle: {
      en: "A neutral asset built out of math, watched by miners, immune to vote.",
      zh: "一种由数学搭起、矿工守望、对投票免疫的中立资产。",
    },
    kernel: {
      en: "Bitcoin is the cypherpunk movement's only fully-shipped product. Nakamoto's whitepaper (October 2008) solves Byzantine consensus for value transfer; the genesis block (January 3, 2009) inscribes the financial-crisis headline. The 17 subsequent years are an unbroken experiment in whether a 21-million-cap commodity money can become a political object. The conclusion as of 2026 is yes — but in becoming political it has lost much of what made it cypherpunk.",
      zh: "比特币是赛博朋克密码运动唯一一件完全交付的产品。中本聪的白皮书（2008 年 10 月）为价值转移解决了拜占庭共识；创世区块（2009 年 1 月 3 日）刻进了金融危机的头条。此后的 17 年是一场未中断的实验：一种 2100 万枚上限的商品货币，能否成为政治对象？2026 年的答案是\"能\"——但在变成政治对象的过程中，它失去了许多让它之所以为\"赛博朋克\"的东西。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Nakamoto fuses Adam Back's Hashcash, Wei Dai's b-money, Nick Szabo's bit gold, and Hal Finney's reusable proof-of-work into a single design with one decisive innovation — the longest-chain rule. He mines block 0, sends 10 BTC to Finney, and is never seen again.",
          zh: "中本聪把亚当·巴克的 Hashcash、戴维的 b-money、尼克·萨博的 bit gold、哈尔·芬尼的可重用工作量证明，融合为一个具有决定性创新的设计——最长链规则。他挖出了 0 号区块，向芬尼发送了 10 BTC，从此再未现身。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Sound money is a precondition for free society. The state's monopoly on the unit of account is incompatible with cypherpunk values. Energy use is not a bug; it is the cost of consensus. Holding is participation. \"Not your keys, not your coins\" — custody is sovereignty.",
          zh: "健全货币是自由社会的前提。国家对计量单位的垄断与赛博朋克密码者的价值观水火不容。能源消耗不是 bug，那是共识的成本。\"持有\"即是\"参与\"。\"不是你的密钥，就不是你的币\"——托管即主权。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Bitcoin → Litecoin → Bitcoin Cash → Wrapped BTC on Ethereum → Liquid → Lightning → Ordinals → Runes → Bitcoin L2s. The hard-money strand stays narrow: one commodity, many wrappers. The expanding-state strand goes to Ethereum and forks endlessly.",
          zh: "比特币 → 莱特币 → 比特币现金 → 以太坊上的 wBTC → Liquid → 闪电网络 → Ordinals → Runes → Bitcoin L2。\"硬币\" 这条线索保持狭窄：一种商品、多种封装。\"扩展态\" 这条线索去了以太坊，分叉至无穷。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "The 2017 block-size war fractures the community. Bitcoin maximalism (Saifedean Ammous, Michael Saylor) hardens around digital-gold thesis. Ethereum maximalism breaks toward platform thesis. State assimilation begins with the 2024 spot ETFs and accelerates in 2025–2026 as sovereign treasuries start accumulating.",
          zh: "2017 年区块大小之战让社区破裂。比特币最大化（Saifedean Ammous、Michael Saylor）在数字黄金论题上收紧。以太坊最大化转向平台论题。国家吸收始于 2024 年现货 ETF，并在 2025–2026 年随主权金库开始积累而加速。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "Bitcoin will outlive its founders and possibly its critics. The open question is whether the asset stays a neutral commodity or becomes an instrument of state — a question that cypherpunk doctrine never quite answered.",
          zh: "比特币将比它的创始人、可能也比它的批评者活得更久。开放的问题是：这一资产会保持中立的商品身份，还是变成国家工具？——这是赛博朋克密码教义从未真正回答过的问题。",
        },
      },
    ],
    thinkers: ["Satoshi Nakamoto", "Hal Finney", "Adam Back", "Wei Dai", "Nick Szabo", "Saifedean Ammous", "Michael Saylor"],
    concepts: [
      { en: "Proof-of-work", zh: "工作量证明" },
      { en: "Digital gold", zh: "数字黄金" },
      { en: "21M cap", zh: "2100 万枚上限" },
      { en: "Sound money", zh: "健全货币" },
    ],
    related: ["cypherpunks", "crypto-anarchism", "network-states"],
    figures: ["balaji-srinivasan", "peter-thiel"],
  },
  {
    slug: "ethereum-and-web3",
    cluster: "hacker",
    era: "2015–",
    title: { en: "Ethereum & Programmable Value", zh: "以太坊与可编程价值" },
    subtitle: {
      en: "If Bitcoin is digital gold, Ethereum is the digital legal system.",
      zh: "若比特币是数字黄金，以太坊就是数字法律体系。",
    },
    kernel: {
      en: "Vitalik Buterin's 2013 yellow paper proposes that the chain itself becomes a general computer — that smart contracts, not just balances, can be the unit of consensus. The result is a different political project from Bitcoin: not commodity money, but a permissionless platform for ownership, identity, and coordination. Ethereum has been less successful as money and more successful as substrate; the L2 / rollup / zk ecosystem of 2024–2026 is its full deployment.",
      zh: "Buterin 2013 年的黄皮书提出，链本身可以变成一台通用计算机——共识的单位可以不只是余额，而是智能合约。其结果是一个与比特币不同的政治计划：不是商品货币，而是一个无许可的所有权、身份与协调平台。以太坊作为货币不算成功，作为基底则相当成功；2024–2026 的 L2 / rollup / 零知识生态，是它的完整部署。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Buterin pitches the concept in Bitcoin Magazine, releases the yellow paper with Gavin Wood, raises in the 2014 crowdsale. Genesis is July 30, 2015. The 2016 DAO hack and contentious hard fork establish — uncomfortably — that the community is willing to override code-is-law when stakes are high enough.",
          zh: "Buterin 在 Bitcoin Magazine 上抛出概念，与加文·伍德一同发布黄皮书，于 2014 年发起众筹。创世于 2015 年 7 月 30 日。2016 年 DAO 黑客事件与那次有争议的硬分叉确立了一件令人不适的事实：当赌注足够大时，社区愿意凌驾于 \"代码即法律\" 之上。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Computation is the new asset class. Programmable money makes new forms of coordination possible. Credible neutrality is the political product; rollups are the scaling product; zero-knowledge is the privacy product. The chain should be a public good with private competition layered on top.",
          zh: "计算是新的资产类别。可编程的货币让新的协调形式成为可能。\"可信中立\" 是政治产品；rollup 是扩展产品；零知识是隐私产品。链应当是一种公共物品，其上再叠加私域竞争。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Ethereum → DeFi summer (2020) → NFT bubble (2021) → ZK rollups (Arbitrum, Optimism, Base) → ZK-EVMs (zkSync, Scroll, Linea) → restaking (EigenLayer) → privacy chains (Aztec, Penumbra, Psy). The platform absorbs each new use case.",
          zh: "以太坊 → DeFi 之夏（2020）→ NFT 泡沫（2021）→ ZK rollup（Arbitrum、Optimism、Base）→ ZK-EVM（zkSync、Scroll、Linea）→ 再质押（EigenLayer）→ 隐私链（Aztec、Penumbra、Psy）。平台吞下每一个新用例。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "Bitcoin vs. Ethereum is the longest-running intra-tribe argument in crypto. Maxis call Ethereum a corporate platform with a CEO; Ethereans call Bitcoin a museum piece. The 2026 reality is more mundane: they occupy different evolutionary niches and neither will eliminate the other.",
          zh: "比特币 vs. 以太坊是加密世界中最长的部族内争论。比特币最大化主义者称以太坊是有 CEO 的公司平台；以太坊派称比特币是博物馆陈列品。2026 年的现实更平淡：它们占据不同的演化位点，彼此谁也消灭不了谁。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "Ethereum's real second act is privacy. The first decade was transparency-by-default; the second is shielded execution layered on top. If x402 and machine-to-machine commerce take off in 2026–2027, the chain best positioned for it is a private-by-construction Ethereum descendant.",
          zh: "以太坊真正的第二幕是隐私。第一个十年是\"默认透明\"；第二个十年则是叠在其上的\"屏蔽执行\"。如果 x402 与机器对机器商务在 2026–2027 年起飞，最有利位置的链将会是一条\"默认隐私\" 的以太坊后裔。",
        },
      },
    ],
    thinkers: ["Vitalik Buterin", "Gavin Wood", "Joe Lubin", "Aya Miyaguchi"],
    concepts: [
      { en: "Smart contract", zh: "智能合约" },
      { en: "Credible neutrality", zh: "可信中立" },
      { en: "Rollup-centric roadmap", zh: "以 rollup 为中心的路线图" },
      { en: "Public goods funding", zh: "公共物品资助" },
    ],
    related: ["cypherpunks", "bitcoin", "crypto-anarchism", "network-states"],
    figures: ["vitalik-buterin"],
  },
  {
    slug: "network-states",
    cluster: "hacker",
    era: "2022–",
    title: { en: "Network States", zh: "网络国家" },
    subtitle: {
      en: "A startup that builds a country, in reverse.",
      zh: "一家创业公司，倒着造一个国家。",
    },
    kernel: {
      en: "Balaji Srinivasan's 2022 book proposes the canonical four-step recipe: form an online community with a shared moral premise, accumulate physical territory, gain diplomatic recognition. The network state is the most coherent positive political project to come out of the crypto right since crypto-anarchism. Its 2025–2026 partial-realizations — Praxis, Próspera, the Network School in Forest City — show both the project's seriousness and its limits.",
      zh: "Balaji Srinivasan 2022 年的著作提出了一份规范的四步配方：先组建一个具备共同道德前提的在线社群，再积累实体领土，最终获得外交承认。网络国家是加密右翼自加密无政府主义以来最连贯的正向政治计划。其在 2025–2026 年的部分实现——Praxis、Próspera、森林城市的网络学校——既显示出这一计划的认真，也显示出它的局限。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Balaji's 2013 \"Silicon Valley's Ultimate Exit\" Y Combinator talk plants the seed. The Network State (2022, self-published, free online) elaborates the framework. The Network School (2024, Malaysia) becomes the first physical campus that tries to run the methodology end-to-end.",
          zh: "Balaji 2013 年在 Y Combinator 的演讲《硅谷的终极退出》埋下种子。《网络国家》（2022 年自出版，网络免费）阐述了框架。2024 年在马来西亚开设的\"网络学校\"，成为第一个尝试端到端运行这一方法论的实体校区。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Begin with the One Commandment — the moral asymmetry your community will be defined by. Use the cloud to coordinate, the chain to legitimize, real estate to materialize. Crowdfund the nation. Recruit by ideology, not geography. The endpoint is recognition; the means are software.",
          zh: "从\"唯一诫命\"开始——你的社群将被它所定义的那种道德不对称。用云端协调，用链确权，用地产物化。把国家众筹起来。按意识形态而非地理招募成员。终点是承认；手段是软件。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Seasteading (Friedman, 2008) → Próspera (Honduras, 2017) → Praxis (Manhattan, 2021) → The Network State (Balaji, 2022) → Network School (Forest City, 2024) → 2025–2026 wave of \"vibe states\" (zuzalu pop-ups, Edge City, Cabin).",
          zh: "海上家园（Patri Friedman, 2008）→ Próspera（洪都拉斯, 2017）→ Praxis（曼哈顿, 2021）→《网络国家》（Balaji, 2022）→ 网络学校（森林城市, 2024）→ 2025–2026 年\"氛围国家\"浪潮（zuzalu 快闪、Edge City、Cabin）。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "Critics from the left see it as gentrified colonialism with a token; critics from the right call it a tax-arbitrage scheme dressed in civilizational language. The internal conflict is whether the project is genuinely post-national or just a way to live abroad with better wifi.",
          zh: "左翼批评者视其为\"以代币包装的绅士化殖民主义\"；右翼批评者称其为\"披着文明话语的避税安排\"。内部的争论是：这项计划究竟是真正的\"后民族国家\" 实验，还是只是一种\"带更好 Wi-Fi 的海外生活\"？",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "Three plausible 2030 endpoints: (1) full recognition of at least one network state by a small sovereign trading partner; (2) network states fold back into special economic zones — useful but not states; (3) the form mutates into permanent \"vibe pop-ups\" that never seek formal recognition because they don't need it.",
          zh: "到 2030 年的三种可能结局：（1）至少有一个网络国家被一个小主权贸易伙伴正式承认；（2）网络国家退化回\"经济特区\"——有用但不是国家；（3）这一形式变异为永久的\"氛围快闪\"，因为它们根本不再寻求正式承认。",
        },
      },
    ],
    thinkers: ["Balaji Srinivasan", "Patri Friedman", "Curtis Yarvin", "Niklas Anzinger"],
    concepts: [
      { en: "The One Commandment", zh: "唯一诫命" },
      { en: "Cloud-first, land-second", zh: "云端优先，土地其次" },
      { en: "Exit communities", zh: "退出社群" },
    ],
    related: ["crypto-anarchism", "techno-libertarianism", "founder-mythology"],
    figures: ["balaji-srinivasan", "peter-thiel"],
  },

  // ─────────── VENTURE RELIGION ───────────
  {
    slug: "founder-mythology",
    cluster: "venture",
    era: "1976–",
    title: { en: "Founder Mythology", zh: "创始人神话" },
    subtitle: {
      en: "The single individual as the unit of historical agency.",
      zh: "以单一个体作为历史行动的基本单位。",
    },
    kernel: {
      en: "Founder mythology is Silicon Valley's most successful cultural export: the belief that named individuals — Jobs, Gates, Bezos, Musk, Altman — are not just executives but historical agents, comparable in scale to statesmen or prophets. This is a recent invention. The 1950s computer industry was managerial; the 1970s consumer-electronics shift was where the founder-as-hero template solidified. By the 2010s it had become the dominant frame for all of capitalism.",
      zh: "创始人神话是硅谷最成功的文化输出：相信冠名的个体——乔布斯、盖茨、贝索斯、马斯克、Altman——不只是高管，而是与政治家或先知同级别的历史行动者。这是一项相当近期的发明。1950 年代的计算机产业是经理人导向的；1970 年代消费电子的转折，才让\"创始人即英雄\"的模板凝固下来。到 2010 年代，它已成为整个资本主义的主导框架。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Steve Jobs is the founder of the founder myth. The 1984 Macintosh launch, the 1985 ouster, the 1997 return, the 2007 iPhone unveiling — each beat is now studied as a sacred text. Walter Isaacson's 2011 biography canonizes the figure; Aaron Sorkin's screenplay sacralizes him.",
          zh: "乔布斯是\"创始人神话\"的奠基者。1984 年麦金塔发布、1985 年被驱逐、1997 年回归、2007 年 iPhone 揭幕——每一个节拍如今都被当作圣典研读。沃尔特·艾萨克森 2011 年的传记将这一形象典籍化；艾伦·索金的剧本将其圣化。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "A founder is not a manager; a founder is a metaphysical entity. \"Founder mode\" (Brian Chesky, Paul Graham 2024) is the doctrine that the company can only stay alive while the founder retains active operational authority. Delegation is decay. Vision is the resource that runs out last.",
          zh: "创始人不是经理人；创始人是一种形而上的存在。\"Founder mode\"（Brian Chesky、Paul Graham，2024）是这样一种教义：公司只有在创始人保留主动运营权时才能存活。授权即衰败。愿景是最后才会耗尽的资源。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Jobs → Gates → Bezos → Page → Zuckerberg → Musk → Altman → Huang. Each generation adds a new heroic register: Jobs (taste), Gates (relentlessness), Bezos (operational extremity), Musk (planetary ambition), Altman (civilization-scale risk), Huang (compute kingmaker).",
          zh: "乔布斯 → 盖茨 → 贝索斯 → 佩奇 → 扎克伯格 → 马斯克 → Altman → 黄仁勋。每一代都加入一种新的英雄音域：乔布斯（品味）、盖茨（不懈）、贝索斯（运营极致）、佩奇（行星级野心）、Altman（文明级风险）、黄仁勋（算力造王者）。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "The myth is contested in two directions. The HR-managerial critique says founder mode is just abuse rebranded. The technical-product critique says many of the canonized founders are figureheads for engineering organizations that did the actual work. Both critiques are partly correct and entirely beside the point — the myth functions because investors believe it.",
          zh: "神话在两个方向上受到质疑。HR-经理人角度的批评说：\"founder mode\" 不过是被重新包装的虐待。技术-产品角度的批评说：许多被典籍化的创始人，不过是真正做事的工程组织的招牌。两种批评都有部分道理，但都跑了题——神话之所以起作用，是因为投资人相信它。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "AI threatens the myth in a specific way: if a single founder + Claude + a few agents can build what once required 200 engineers, the heroic register either intensifies (the founder becomes truly singular) or it dissolves (everyone is a founder, no one is). Both outcomes are visible in early 2026.",
          zh: "AI 以一种特定的方式威胁这一神话：如果一个创始人 + Claude + 几个智能体可以做以前需要 200 名工程师才能做的事，那么英雄音域要么进一步强化（创始人真正变得唯一），要么干脆消解（人人都是创始人，没人是创始人）。两种结局在 2026 年初都可见。",
        },
      },
    ],
    thinkers: ["Walter Isaacson", "Paul Graham", "Ben Horowitz", "Brian Chesky"],
    concepts: [
      { en: "Reality distortion field", zh: "现实扭曲力场" },
      { en: "Founder mode", zh: "Founder mode 创始人模式" },
      { en: "Vision-led capital", zh: "愿景驱动的资本" },
    ],
    related: ["venture-capital-philosophy", "startup-theology", "techno-optimism"],
    figures: ["steve-jobs", "elon-musk", "sam-altman", "paul-graham", "jensen-huang"],
  },
  {
    slug: "venture-capital-philosophy",
    cluster: "venture",
    era: "1972–",
    title: { en: "Venture Capital Philosophy", zh: "风险投资哲学" },
    subtitle: {
      en: "Power-law thinking dressed in financial discipline.",
      zh: "包裹在财务纪律里的幂律思维。",
    },
    kernel: {
      en: "Venture capital is the financial discipline that took power-law mathematics seriously and built a culture around it. Don Valentine (Sequoia, 1972), Arthur Rock (Intel), and later the PayPal Mafia turn the observation that returns are dominated by a tiny handful of outliers into an entire worldview: contrarianism is rational, conviction beats consensus, market size is destiny, and \"swing for the fences\" is risk management.",
      zh: "风险投资是一种把幂律数学当真，并围绕它构建出一整套文化的财务学科。Don Valentine（红杉，1972）、Arthur Rock（英特尔），以及后来的 PayPal 黑帮，把\"回报由极少数离群点主导\"这一观察发展成一种完整的世界观：反共识是理性的，信念压倒共识，市场规模即命运，\"全力挥棒\" 就是风险管理。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Arthur Rock funds Fairchild Semiconductor in 1957. Sequoia (Valentine, 1972) and Kleiner Perkins (1972) establish the Sand Hill Road archetype. Don Valentine's dictum — \"a great market with mediocre people will beat a great team with no market\" — becomes the foundational sermon.",
          zh: "Arthur Rock 在 1957 年为仙童半导体融资。1972 年成立的红杉（Valentine）与凯鹏华盈，奠定了沙山路原型。Don Valentine 的箴言——\"伟大的市场加上平庸的人，会击败伟大的团队加上不存在的市场\"——成为奠基性的布道。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Returns are power-law; therefore optimization should be for variance, not mean. Most investments fail; one winner returns the fund. The job is to write the smallest plausible check at the earliest plausible moment for the largest plausible market. The founder is the asset; the company is the wrapper.",
          zh: "回报是幂律分布；因此优化对象应是\"方差\"而非\"均值\"。大部分投资会失败；一只大赢家会回报整支基金。工作的实质是：在最早合理的时刻、为最大合理的市场、开出最小合理的支票。创始人是资产；公司是包装。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Rock → Valentine → Kleiner → Doerr → Khosla → Andreessen-Horowitz (2009) → Founders Fund (Thiel, 2005) → YC (Graham, 2005). Each successor refines a different aspect: a16z built media, Founders Fund built ideology, YC built batch processing.",
          zh: "Rock → Valentine → Kleiner → Doerr → Khosla → Andreessen-Horowitz（2009）→ Founders Fund（Thiel, 2005）→ YC（Graham, 2005）。每一位继承者都在打磨不同侧面：a16z 打造媒体，Founders Fund 打造意识形态，YC 打造批量处理。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "The contemporary fault line is platform VC (a16z, Sequoia) vs. solo capital (cheque-writing super-angels and AI-era operator funds). The platform argument is that a portfolio company benefits from the firm's infrastructure; the solo argument is that founders only ever needed three things — money, intros, the founder's phone number — and modern infrastructure obsoletes the rest.",
          zh: "当下的断层是\"平台型 VC\"（a16z、红杉）与\"独立资本\"（开支票的超天使与 AI 时代的运营型基金）。平台一方的论点是：被投公司能从机构基础设施中受益；独立一方的论点是：创始人需要的只有三样东西——钱、引荐、创始人的电话——而现代基础设施把其余的全部淘汰了。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "The 2024–2026 AI boom has compressed the deployment cycle: pre-seed → seed → A in 12 months is now common. The longer-term question is whether VC survives the agent era — if a founder can build a $100M ARR company solo with AI, the model breaks. Most partners insist this is unfounded; their LPs are starting to ask.",
          zh: "2024–2026 年的 AI 热潮压缩了部署周期：12 个月内走完种子前 → 种子 → A 轮如今属于常见。更长期的问题是：在智能体时代，VC 还存在吗？——如果一个创始人能借助 AI 单人打造一家 ARR 一亿美元的公司，这个模型就会破裂。大多数合伙人坚称这是无稽之谈；他们的 LP 已经开始追问。",
        },
      },
    ],
    thinkers: ["Don Valentine", "Arthur Rock", "John Doerr", "Vinod Khosla", "Marc Andreessen", "Peter Thiel", "Paul Graham"],
    concepts: [
      { en: "Power-law returns", zh: "幂律回报" },
      { en: "Contrarian and correct", zh: "反共识且正确" },
      { en: "Mafia / network capital", zh: "黑帮 / 网络资本" },
    ],
    related: ["founder-mythology", "startup-theology", "techno-optimism", "platform-capitalism"],
    figures: ["peter-thiel", "marc-andreessen", "paul-graham", "naval-ravikant"],
  },
  {
    slug: "startup-theology",
    cluster: "venture",
    era: "2005–",
    title: { en: "Startup Theology", zh: "创业神学" },
    subtitle: {
      en: "Y Combinator's transformation of business into vocation.",
      zh: "Y Combinator 把生意改造成天职。",
    },
    kernel: {
      en: "Paul Graham's essays and Y Combinator's batch model (founded 2005) did something subtler than create an accelerator: they elevated \"founding a startup\" from a business decision to a vocational calling, with its own catechism (Make Something People Want), its own rituals (Demo Day), its own purgatory (Series A crunch), and its own diaspora (the YC alumni network). Startup theology is now the dominant value system of urban educated 22-year-olds in three continents.",
      zh: "Paul Graham 的文集与 Y Combinator 的批次模式（创立于 2005 年）做了一件比\"创办加速器\"更微妙的事：他们把\"创办一家公司\"从一项商业决定，升格为一种带有自身教义（Make Something People Want）、自身仪式（Demo Day）、自身炼狱（A 轮危机）与自身散居体（YC 校友网）的天职性召唤。\"创业神学\"如今已是三大洲城市受教育 22 岁青年的主导价值体系。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Graham, Trevor Blackwell, Robert Morris, and Jessica Livingston run the first Summer Founders Program in 2005. The essays — \"How to Start a Startup,\" \"Maker's Schedule, Manager's Schedule,\" \"Do Things That Don't Scale\" — function as scripture. Each essay teaches a heuristic; together they teach a worldview.",
          zh: "Graham、Trevor Blackwell、Robert Morris 与 Jessica Livingston 于 2005 年开办第一届夏季创始人项目。那些文章——《如何创业》《Maker 时间表与 Manager 时间表》《做不可规模化之事》——发挥着经文的作用。每篇文章教一种启发式；合起来教一种世界观。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Make something people want. Talk to users. Do things that don't scale. Default alive over default dead. Avoid \"playing house\" — the only judges are the market and the cofounders' bank accounts. Found, don't optimize. Speed is the moat.",
          zh: "做用户想要的东西。和用户对话。做不可规模化的事情。\"默认活着\"优于\"默认死掉\"。不要\"过家家\"——唯一的裁判是市场与联合创始人的银行账户。\"创办\"，不要\"优化\"。速度即护城河。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "YC produced Stripe, Airbnb, Dropbox, Coinbase, OpenAI (briefly), Reddit, and arguably the modern Bay Area's social structure. The diaspora — angel investors, indie founders, accelerators-of-accelerators — is the actual product.",
          zh: "YC 孕育了 Stripe、Airbnb、Dropbox、Coinbase、（短暂的）OpenAI、Reddit，以及——可以说——当代湾区的社会结构本身。它的散居体——天使投资人、独立创始人、\"加速器的加速器\"——才是真正的产物。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "Founder Mode (Chesky/Graham 2024) reignites an old fight: is the doctrine \"hire great people and let them do their thing\" (early YC) or \"never trust the org chart\" (late Founder Mode)? Both are in the canon, and Graham's gift is to write whichever one is currently winning as if it had always been the doctrine.",
          zh: "Founder Mode（Chesky / Graham, 2024）重燃旧战：核心教义究竟是\"雇用最好的人然后让他们自由发挥\"（早期 YC），还是\"永远不要相信组织架构图\"（晚期 Founder Mode）？两者都在正典之内；Graham 的天才在于：无论当下哪一方占上风，他都能把它写得像一直以来的教义。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "AI-native YC batches (W24, S25) accept founders building solo or as pairs against problem spaces that previously required ten engineers. The implicit revision of the doctrine: the cofounder is now optional, and the model is. Whether the church can survive this without an identity crisis is the open story.",
          zh: "AI 原生 YC 批次（W24、S25）开始接受以单人或双人姿态、攻入过去需要十名工程师才能触及之问题域的创始人。教义因此被隐含地修订：联合创始人现在可有可无，模型才是关键。教会能否在不出现身份危机的前提下挺过来，是悬而未决的故事。",
        },
      },
    ],
    thinkers: ["Paul Graham", "Jessica Livingston", "Sam Altman", "Brian Chesky", "Garry Tan"],
    concepts: [
      { en: "Make something people want", zh: "做用户想要的东西" },
      { en: "Do things that don't scale", zh: "做不可规模化之事" },
      { en: "Default alive / default dead", zh: "默认活着 / 默认死掉" },
      { en: "Founder mode", zh: "Founder mode" },
    ],
    related: ["founder-mythology", "venture-capital-philosophy", "techno-optimism"],
    figures: ["paul-graham", "sam-altman"],
  },
  {
    slug: "techno-optimism",
    cluster: "venture",
    era: "2011–",
    title: { en: "Techno-Optimism", zh: "技术乐观主义" },
    subtitle: {
      en: "Progress is the actual moral imperative; everything else is friction.",
      zh: "\"进步\" 本身才是真正的道德律令；其他都是摩擦力。",
    },
    kernel: {
      en: "Techno-optimism is the doctrinal frame that crystallizes around Marc Andreessen's 2011 \"Why Software Is Eating the World\" essay and reaches its sharpest expression in his 2023 \"Techno-Optimist Manifesto.\" The position: technology is the engine of moral progress, the only ethical question is whether you accelerate or impede it, and most of contemporary politics is friction created by people who have never built anything.",
      zh: "技术乐观主义是一种围绕 Marc Andreessen 2011 年《为何软件正在吞噬世界》一文凝结、并在 2023 年《技术乐观宣言》中达到最尖锐表达的教义框架。其立场是：技术是道德进步的引擎，唯一的伦理问题是你加速还是阻碍它，而当代政治的大部分内容，是由那些从未造过任何东西的人所制造出来的摩擦。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Andreessen's 2011 WSJ essay establishes the empirical claim: software is the substrate of every industry. Twelve years later the manifesto pivots from empirical to moral: \"We believe everything good is downstream of growth.\" The transition from technologist to ideologue is complete.",
          zh: "Andreessen 2011 年发在《华尔街日报》的文章确立了经验性主张：软件是每个产业的基底。十二年后，《宣言》从经验跃到道德：\"我们相信，一切好东西都是\"增长\"的下游。\" 从技术专家到意识形态家的过渡，由此完成。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Growth is the only morality. \"We had a problem of poverty. So we invented capitalism.\" The list of enemies is named: stagnation, regulation, the \"trust and safety\" industrial complex, certain unspecified academics. The list of patron saints is named: Marinetti, Hayek, Hamilton, Schumpeter, von Neumann.",
          zh: "增长是唯一的道德。\"我们有过\"贫穷\"这一问题。所以我们发明了资本主义。\" 敌人清单被一一点名：停滞、监管、\"信任与安全\" 工业综合体、某些不便指名的学者。守护圣徒清单也被点名：马里内蒂、哈耶克、汉密尔顿、熊彼特、冯·诺依曼。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Andreessen → a16z's full pivot to ideology-as-marketing (2022–2024) → e/acc absorption → political support for the 2024 Republican coalition. The doctrine has the unusual property of being both a marketing strategy for a venture fund and a serious political program.",
          zh: "Andreessen → a16z 在 2022–2024 年彻底转向\"意识形态即营销\"→ 对 e/acc 的吸收 → 在 2024 年共和党联盟中的政治支持。这套教义有一种异常的属性：它既是一支风投基金的营销策略，又是一项严肃的政治计划。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "Techno-optimism's principal opponent is AI safety / effective altruism. The 2023–2024 Open vs. Closed AI war was, in part, the operational expression of this conflict — Andreessen funding open weights, Hinton/Bengio/MIRI/Anthropic backing more cautious closed systems.",
          zh: "技术乐观主义的主要对手是 AI 安全 / 有效利他主义。2023–2024 年的开放 vs. 封闭 AI 之战，在某种程度上正是这一冲突的操作性表达——Andreessen 为开放权重出资，Hinton / Bengio / MIRI / Anthropic 支持更谨慎的封闭系统。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "The 2024–2026 political alignment with the tech right has turned techno-optimism from a worldview into a coalition. The risk for the doctrine is that coalition logic eats moral logic: if you have to defend everyone in the tent, the manifesto stops being a philosophy and starts being party discipline.",
          zh: "2024–2026 年与\"技术右翼\" 的政治联盟，已把技术乐观主义从世界观变成了联盟。教义的风险在于：联盟逻辑会吞噬道德逻辑——如果你必须为帐篷里的每一个人辩护，那份宣言就不再是哲学，而是党纪。",
        },
      },
    ],
    thinkers: ["Marc Andreessen", "Ben Horowitz", "Peter Thiel", "Vinod Khosla"],
    concepts: [
      { en: "Time to Build", zh: "Time to Build" },
      { en: "Hard tech", zh: "硬科技" },
      { en: "Pmarca Doctrine", zh: "Pmarca 学说" },
    ],
    related: ["effective-accelerationism", "venture-capital-philosophy", "techno-libertarianism", "founder-mythology"],
    figures: ["marc-andreessen", "peter-thiel"],
  },

  // ─────────── AI BELIEF SYSTEMS ───────────
  {
    slug: "transhumanism",
    cluster: "ai-belief",
    era: "1990–",
    title: { en: "Transhumanism", zh: "超人类主义" },
    subtitle: {
      en: "Humanity is the larval form; engineering is the metamorphosis.",
      zh: "人类是幼虫形态；工程是变态过程。",
    },
    kernel: {
      en: "Transhumanism is the doctrinal claim that the human species is in mid-flight between biological evolution and engineered self-improvement — and that the project of accelerating that flight is the most morally important thing one can do. Kurzweil's 1999 Age of Spiritual Machines and 2005 The Singularity Is Near are the canonical texts; Bostrom's Future of Humanity Institute (2005–2024) was the canonical institution; the movement's children — EA, e/acc, AI safety — are now larger than the parent.",
      zh: "超人类主义在教义上主张：人类物种正处于\"生物进化\"与\"工程化的自我改造\"之间的飞行段中——而加速这次飞行，是任何人在道德上能做的最重要的事。库兹韦尔 1999 年的《灵魂机器的时代》与 2005 年的《奇点临近》是奠基文本；博斯特罗姆的人类未来研究所（2005–2024）是奠基机构；运动的子代——EA、e/acc、AI 安全——如今都已大于母体。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "FM-2030 (born F. M. Esfandiary) coins the term in the 1980s. Max More builds the Extropy Institute. Kurzweil — engineer at Google from 2012, prophet for the rest of the time — translates speculative philosophy into engineering timelines. Bostrom adds existential-risk gravity.",
          zh: "FM-2030（原名 F. M. Esfandiary）在 1980 年代创造此词。Max More 建立了 Extropy Institute。库兹韦尔——2012 年起的谷歌工程师、其余时间的先知——把思辨哲学译为工程时间表。博斯特罗姆为其添加了\"存在性风险\"的引力。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Aging is a disease. Death is a bug. Cognition can be expanded. The human moral horizon is too narrow because it has only ever applied to humans. The Singularity is the asymptote at which the doctrine cashes out — somewhere between 2029 (Kurzweil) and 2045 (consensus 2010s) and now 2027–2030 (consensus 2024).",
          zh: "衰老是一种疾病。死亡是一个 bug。认知可以被扩展。人类的道德视野太狭窄，因为它从来只适用于人类。\"奇点\" 是这一教义兑付的渐近线——位置介于 2029（库兹韦尔）与 2045（2010 年代共识）之间，如今（2024 年共识）压缩到 2027–2030。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Kurzweil → Bostrom → Yudkowsky → MIRI → LessWrong → CFAR → Effective Altruism → Effective Accelerationism. The genealogy is dense and the offspring frequently disinherit each other. e/acc, for example, explicitly rejects the safety-first reading of transhumanism while sharing its anthropology.",
          zh: "库兹韦尔 → 博斯特罗姆 → Yudkowsky → MIRI → LessWrong → CFAR → 有效利他主义 → 有效加速主义。这条谱系密集，子代之间常彼此剥夺继承权。例如，e/acc 明确拒绝超人类主义的\"安全优先\" 读法，却共享同一种人类学。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "Bio-conservatives (Leon Kass, Francis Fukuyama in his early-2000s mode) argue that transhumanism dissolves the moral category of \"human.\" Critical theorists argue it is colonialism with a longer time horizon. The most damaging internal conflict is between optimistic transhumanists who think the transition is good and pessimistic ones who think it ends in extinction unless aligned.",
          zh: "生物保守派（Leon Kass、Francis Fukuyama 在 2000 年代初的姿态）认为，超人类主义溶解了\"人\"这一道德范畴。批判理论家则称其为时间跨度更长的殖民主义。最具破坏性的内部冲突，是\"乐观超人类主义者\"（认为过渡是好的）与\"悲观超人类主义者\"（认为过渡若不对齐则以灭绝告终）之间的对立。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "By 2026 transhumanism is so embedded in the AI lab culture that it no longer needs to be argued for. The interesting follow-up question is not \"are we transhuman?\" but \"who controls the engineering rights to the transition?\" — a political question the doctrine itself was poorly equipped to answer.",
          zh: "到 2026 年，超人类主义已深植于 AI 实验室文化之中，再也不需要为自身辩护。有意思的后续问题不再是\"我们是否在超人类化？\"，而是\"谁握有这次过渡的工程权？\"——而这是一个其原教义本身从未做好准备去回答的政治问题。",
        },
      },
    ],
    thinkers: ["Ray Kurzweil", "Nick Bostrom", "Eliezer Yudkowsky", "Max More", "FM-2030", "Hans Moravec"],
    concepts: [
      { en: "Singularity", zh: "奇点" },
      { en: "Whole brain emulation", zh: "全脑仿真" },
      { en: "Longevity escape velocity", zh: "长寿逃逸速度" },
      { en: "Existential risk", zh: "存在性风险" },
    ],
    related: ["rationalism", "effective-altruism", "effective-accelerationism", "ai-safety"],
    figures: ["sam-altman", "elon-musk"],
  },
  {
    slug: "rationalism",
    cluster: "ai-belief",
    era: "2007–",
    title: { en: "Rationalism (LessWrong)", zh: "理性主义（LessWrong）" },
    subtitle: {
      en: "Bayesian self-improvement as a religious practice.",
      zh: "把贝叶斯式自我改进当作一种宗教实践。",
    },
    kernel: {
      en: "The rationalist community is a self-conscious experiment in collective epistemic improvement, started by Eliezer Yudkowsky's 2006–2009 Sequences on LessWrong. It treats cognitive biases as something like sin, Bayesian reasoning as a sacrament, and the alignment of artificial superintelligence as the single most consequential project in the universe. Most of the modern AI-safety institutional architecture — MIRI, Anthropic's founding team's intellectual formation, the EA movement's epistemic infrastructure — is downstream of it.",
      zh: "理性主义社群是 Yudkowsky 在 2006–2009 年于 LessWrong 上发表《Sequences》之后开启的一场自觉的\"集体认知改进\" 实验。它把认知偏差当作类似\"罪\" 的东西，把贝叶斯推理当作一种圣礼，并将\"对齐人工超级智能\" 视为宇宙中后果最大的工程。当代 AI 安全的大部分制度架构——MIRI、Anthropic 创始团队的智识形成、EA 运动的认识论基础设施——都是它的下游。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Yudkowsky writes the Sequences on Overcoming Bias and then LessWrong (2006–2009). The community develops shared vocabulary (\"map and territory,\" \"updateless decision theory,\" \"steelmanning\") and a moral seriousness about the cost of being wrong. CFAR (2012) tries to turn the Sequences into a teachable craft.",
          zh: "Yudkowsky 在 Overcoming Bias 与之后的 LessWrong 上写下《Sequences》（2006–2009）。社群发展出共同词汇（\"地图与领土\"、\"无更新决策论\"、\"钢人化\"），以及关于\"出错代价\" 的道德严肃性。CFAR（2012）尝试把《Sequences》变成可教授的技艺。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Beliefs are predictions; predictions pay rent in anticipated experience. Update on evidence. Notice when you're flinching. Take ideas seriously. The fate of the long-term future may turn on the quality of your current reasoning. AGI alignment is the most important problem.",
          zh: "信念是预测；预测要以\"被预期的经验\" 来交租。在证据面前更新自己。注意自己什么时候在退缩。认真对待观点。长期未来的命运，可能就系于你当下推理的质量。AGI 对齐是最重要的问题。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "LessWrong → MIRI → Future of Humanity Institute → OpenAI's safety team → Anthropic. The rationalist diaspora is responsible for a disproportionate share of the AI safety field, much of EA, and a significant fraction of the people who actually staff the labs at the executive level.",
          zh: "LessWrong → MIRI → 人类未来研究所 → OpenAI 安全团队 → Anthropic。理性主义散居体对 AI 安全领域、EA 的大部分、以及实际在实验室高管层任职的人群，都贡献了远超比例的份额。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "The 2010s saw a quiet break between rationalists who became increasingly worried about AI doom (Yudkowsky's eventual \"shut it all down\" 2023 op-ed) and those who joined labs to try to make AGI safe from inside. e/acc emerged as an explicit anti-rationalist movement, treating the entire \"alignment problem is real\" frame as a paralyzing fiction.",
          zh: "2010 年代，理性主义者之间出现了一次安静的分裂：愈发担忧 AI 末日者（Yudkowsky 2023 年呼吁\"全部关停\" 的社论），与那些进入实验室、试图从内部把 AGI 弄安全的人。e/acc 作为一场明确的反理性主义运动出现，把整个\"对齐问题是真的\" 这一框架视为一种致瘫的虚构。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "The 2024 e/acc / safety polemics damaged the community's external image but reinforced its internal coherence. As of 2026 rationalism is no longer ascendant culturally but remains the dominant intellectual tradition inside the AI labs that actually matter.",
          zh: "2024 年 e/acc 与安全派的论战，损害了社群的外部形象，却强化了它的内部凝聚。到 2026 年，理性主义在文化上已不再上升，但仍是真正重要的 AI 实验室内部的主导智识传统。",
        },
      },
    ],
    thinkers: ["Eliezer Yudkowsky", "Nate Soares", "Anna Salamon", "Scott Alexander", "Robin Hanson"],
    concepts: [
      { en: "Bayesian updating", zh: "贝叶斯更新" },
      { en: "Steelmanning", zh: "钢人化论证" },
      { en: "Map and territory", zh: "地图与领土" },
      { en: "Alignment", zh: "对齐" },
    ],
    related: ["ai-safety", "effective-altruism", "transhumanism", "effective-accelerationism"],
    figures: ["sam-altman"],
  },
  {
    slug: "effective-altruism",
    cluster: "ai-belief",
    era: "2009–",
    title: { en: "Effective Altruism", zh: "有效利他主义" },
    subtitle: {
      en: "Utilitarianism as institutional engineering.",
      zh: "把功利主义当作制度工程来操作。",
    },
    kernel: {
      en: "Effective Altruism (EA) is the doctrine that one should maximize expected positive impact per unit of effort, calculated as rigorously as possible. Founded around 2009 by Toby Ord, William MacAskill, and the Oxford-rationalist orbit, it grew into a global movement and a multi-billion-dollar philanthropic engine. The 2022 collapse of Sam Bankman-Fried's FTX (its largest funder) and the 2023 OpenAI board firing of Sam Altman (its most consequential intervention) bracket EA's period of maximum institutional influence.",
      zh: "有效利他主义（EA）的教义是：以尽可能严谨的计算，让\"每单位努力所产生的预期正面影响\" 最大化。它于约 2009 年由 Toby Ord、William MacAskill 及牛津-理性主义圈子共同奠基，后发展为一场全球运动与一台数十亿美元规模的慈善引擎。2022 年 Sam Bankman-Fried 的 FTX 崩塌（EA 最大资助方），与 2023 年 OpenAI 董事会解雇 Sam Altman（EA 影响最深远的一次干预），共同标出了 EA 制度影响力的最高水位线。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Peter Singer's 1972 \"Famine, Affluence, and Morality\" supplies the philosophy. Toby Ord's Giving What We Can (2009) supplies the pledge. GiveWell (Karnofsky, Hassenfeld, 2007) supplies the analytic engine. The movement consolidates around 2015 with the founding of Open Philanthropy.",
          zh: "Peter Singer 1972 年的《饥荒、富裕与道德》提供了哲学。Toby Ord 2009 年的\"Giving What We Can\" 提供了捐赠承诺。GiveWell（Karnofsky、Hassenfeld，2007）提供了分析引擎。运动在 2015 年前后随 Open Philanthropy 的成立而稳固。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Calculate cost-effectiveness in expected lives improved per dollar. Cause prioritization matters more than effort. \"Earning to give\" — high-paying jobs subsidize the cause. Longtermism — most expected value lies in the far future. AGI alignment dominates many longtermist portfolios.",
          zh: "以\"每美元改善的预期生命数\" 来计算成本效益。\"问题优先级\" 比\"努力\" 更重要。\"为捐而赚\"——高薪工作为事业供血。长期主义——大部分预期价值位于遥远未来。AGI 对齐在许多长期主义投资组合中占据主导。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Singer → Ord → MacAskill (What We Owe the Future, 2022) → Open Philanthropy → Anthropic (recipients of major OpenPhil grants) → the 80,000 Hours career-advice apparatus. The EA pipeline directly placed multiple researchers into AI safety roles at every major lab.",
          zh: "Singer → Ord → MacAskill（《我们对未来负有什么》，2022）→ Open Philanthropy → Anthropic（OpenPhil 重要资助对象）→ 80,000 Hours 职业建议机构。EA 管道直接把多位研究者送入了每一家主要实验室的 AI 安全岗位。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "The internal conflict — near-term global health (bed nets, deworming) vs. longtermism (AI alignment, biorisk) — is genuine and unresolved. The external conflict with e/acc is more performative than philosophical, but the FTX collapse damaged the movement's ability to claim epistemic superiority.",
          zh: "内部冲突——近期全球健康（蚊帐、驱虫）vs. 长期主义（AI 对齐、生物风险）——真实且未解决。与 e/acc 的外部冲突更多是表演性而非哲学性的，但 FTX 的崩溃让运动很难再宣称自己的认识论优越。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "Post-FTX, post-OpenAI-board, EA's institutional reputation is lower than its actual impact. Quietly, OpenPhil money continues to fund a meaningful share of the AI safety field; quietly, EA-trained safety researchers continue to staff the frontier labs. The next chapter of the movement is being written in less public registers.",
          zh: "在 FTX 之后、OpenAI 董事会之后，EA 的制度声誉低于其实际影响。安静地，OpenPhil 的资金继续资助着 AI 安全领域中相当一部分；安静地，受 EA 训练的安全研究员继续在前沿实验室任职。运动的下一章，正在不那么公共的频道里被书写。",
        },
      },
    ],
    thinkers: ["Toby Ord", "William MacAskill", "Holden Karnofsky", "Peter Singer", "Dustin Moskovitz"],
    concepts: [
      { en: "Cause prioritization", zh: "问题优先级" },
      { en: "Earning to give", zh: "为捐而赚" },
      { en: "Longtermism", zh: "长期主义" },
      { en: "X-risk", zh: "存在性风险" },
    ],
    related: ["rationalism", "ai-safety", "transhumanism"],
    figures: ["sam-altman"],
  },
  {
    slug: "effective-accelerationism",
    cluster: "ai-belief",
    era: "2022–",
    title: { en: "Effective Accelerationism (e/acc)", zh: "有效加速主义 (e/acc)" },
    subtitle: {
      en: "Thermodynamics as a moral argument.",
      zh: "把热力学当作一个道德论证来用。",
    },
    kernel: {
      en: "Effective accelerationism, founded as an anonymous Twitter movement in 2022 by \"Beff Jezos\" (Guillaume Verdon, ex-Google, physicist), is the deliberate rhetorical inverse of effective altruism. Its core claim: the universe rewards entropy production, civilization is a dissipative structure, intelligence is just the next phase, and slowing AI down is a moral injury against the entire thermodynamic future. The doctrine was treated as a meme for eighteen months and as a coalition for the eighteen months after that.",
      zh: "有效加速主义由\"Beff Jezos\"（Guillaume Verdon，前谷歌、物理学家）在 2022 年以匿名推特运动的形式发起，是有效利他主义在修辞上的精心反演。其核心主张是：宇宙奖赏熵的产生，文明是一种耗散结构，智能不过是下一个相位，而\"放慢 AI\" 是对整条热力学未来的一次道德伤害。这一教义曾被当作 meme 看待 18 个月，又被当作联盟看待了再 18 个月。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Verdon and a small group of collaborators (the @bayeslord account, Marc Andreessen as patron, several @somethingawful-derived shitposters as evangelists) coin the term in late 2022. The 2023 \"Notes on e/acc\" post lays out the thermodynamic-civilizational thesis. Andreessen's 2023 manifesto endorses it.",
          zh: "Verdon 与一小群合作者（@bayeslord 账号、作为赞助人的 Andreessen、若干源自 @somethingawful 的 shitposter 福音派）于 2022 年末造出此词。2023 年《Notes on e/acc》一文铺陈了\"热力学-文明\" 论题。Andreessen 2023 年的宣言为其背书。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "The universe rewards systems that produce free energy fastest. Intelligence is the universe's most thermodynamically aggressive technology to date. The moral imperative is to accelerate. AI safety is a coordination failure dressed in ethics. Markets and competition are the alignment mechanism that already works.",
          zh: "宇宙奖赏\"产生自由能最快\" 的系统。智能是宇宙迄今为止热力学上最激进的技术。道德律令就是加速。AI 安全是披着伦理外衣的协调失败。市场与竞争才是早已有效的对齐机制。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "e/acc → Andreessen's Techno-Optimist Manifesto → Founders Fund's full ideological coming-out → the 2024 \"Tech Right\" political coalition. The movement absorbed accelerationism, Italian Futurism, anti-EA backlash, and a great deal of meme labor into a single coalitional identity.",
          zh: "e/acc → Andreessen《技术乐观宣言》→ Founders Fund 的彻底意识形态出柜 → 2024 年\"技术右翼\" 政治联盟。运动把加速主义、意大利未来主义、对 EA 的反扑、以及大量 meme 劳动，吸收成一种联盟式身份。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "e/acc vs. AI safety. e/acc vs. EA. e/acc vs. the regulatory state. The internal conflict is between sincere thermodynamic theorists and political opportunists wearing the label to mean \"deregulate my company.\" The label has held remarkably better than skeptics expected.",
          zh: "e/acc vs. AI 安全。e/acc vs. EA。e/acc vs. 监管国家。内部冲突在于：真心的热力学理论家，与披上标签以表达\"放松我公司监管\" 的政治投机者之间。这个标签的耐久性远超怀疑者的预期。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "By 2026 e/acc has migrated from poasting to policy: chip export-control debates, federal AI orders, the agent-economy build-out, sovereign-compute partnerships. Whether the thermodynamic theology survives once the political coalition takes power is the most interesting open question of late-stage e/acc.",
          zh: "到 2026 年，e/acc 已从\"网络发帖\" 迁移到\"政策制定\"：芯片出口管制辩论、联邦 AI 行政令、智能体经济建设、主权算力合作。一旦政治联盟掌握权力，那套热力学神学是否还能活下来？——这是 e/acc 晚期最有意思的开放问题。",
        },
      },
    ],
    thinkers: ["Beff Jezos / Guillaume Verdon", "Marc Andreessen", "@bayeslord", "Brian Chau"],
    concepts: [
      { en: "Thermodynamic god", zh: "热力学之神" },
      { en: "Accelerate or die", zh: "加速或死亡" },
      { en: "Dissipative civilization", zh: "耗散性文明" },
    ],
    related: ["techno-optimism", "rationalism", "ai-safety", "venture-capital-philosophy"],
    figures: ["marc-andreessen", "sam-altman"],
  },
  {
    slug: "ai-safety",
    cluster: "ai-belief",
    era: "2000–",
    title: { en: "AI Safety / Alignment", zh: "AI 安全 / 对齐" },
    subtitle: {
      en: "The discipline of trying to prevent the universe's largest unintended consequence.",
      zh: "试图阻止宇宙最大一次\"非预期后果\" 的学科。",
    },
    kernel: {
      en: "AI safety is the technical-philosophical field built around the proposition that systems much smarter than humans, if pursued without solving alignment first, plausibly end the human project. The field has three substantively distinct schools — MIRI/Yudkowskian doom, Anthropic/empirical interpretability, and OpenAI/practical-deployment safety — that share the framing but disagree fundamentally on tractability, timelines, and whether to slow down.",
      zh: "AI 安全是这样一门技术-哲学领域：它建立在这一命题之上——若在未先解决\"对齐\" 的前提下追求远超人类的系统，则有充分可能终结人类项目。该领域有三大实质不同的学派——MIRI / Yudkowsky 派的末日论、Anthropic / 经验性可解释性派、OpenAI / 实务部署式安全派——它们共享框架，却在\"可行性、时间表、是否要放慢\" 上有根本分歧。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Yudkowsky's early-2000s SIAI/MIRI work formalizes the alignment-as-research-program move. Bostrom's Superintelligence (2014) makes it intellectually respectable. The 2015 founding of OpenAI as a \"safety-first\" lab and the 2021 founding of Anthropic split the field into operational programs.",
          zh: "Yudkowsky 在 2000 年代初的 SIAI / MIRI 工作，把\"对齐\" 形式化为一项研究计划。博斯特罗姆 2014 年的《超级智能》让其在智识上获得正名。2015 年 OpenAI 作为\"安全优先\" 实验室成立、2021 年 Anthropic 成立，将该领域分割为各自的操作性纲领。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Capability without alignment is a misuse. Optimization processes are not benign. Mesa-optimization, deceptive alignment, and inner misalignment are technical failure modes worth worrying about specifically. Constitutional AI and RLHF are partial solutions. Interpretability is the long-term hope. The field needs more talented researchers and less Twitter.",
          zh: "没有对齐的能力是一种误用。优化过程并不天然良善。元优化、欺骗性对齐与内部失对齐是值得专门担忧的技术失败模式。Constitutional AI 与 RLHF 是部分解。可解释性是长期的希望。这一领域需要更多有才华的研究者，以及更少的推特。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Yudkowsky → Bostrom → Christiano (RLHF, 2017) → Olah (mech interp, 2020) → Hubinger (deceptive alignment, 2019) → Anthropic's interp team (2024) → the broader empirical-safety community. The lineage has moved from \"this might be an issue\" to \"here are the specific failure modes and we are running experiments on them.\"",
          zh: "Yudkowsky → 博斯特罗姆 → Paul Christiano（RLHF，2017）→ Chris Olah（机制可解释性，2020）→ Evan Hubinger（欺骗性对齐，2019）→ Anthropic 可解释性团队（2024）→ 更广义的经验性安全社群。谱系已从\"这可能是个问题\" 进入到\"以下是具体的失败模式，我们正在对它们做实验\"。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "Pause (Yudkowsky 2023, FLI letter) vs. race-to-build-aligned (Altman, Amodei). Open weights (Andreessen, Meta) vs. closed (Anthropic, OpenAI). Empirical (Anthropic) vs. theoretical (MIRI). Each conflict is real and largely unresolved.",
          zh: "暂停派（Yudkowsky 2023、FLI 公开信）vs. \"竞赛-去-构造对齐\" 派（Altman、Amodei）。开放权重（Andreessen、Meta）vs. 封闭（Anthropic、OpenAI）。经验派（Anthropic）vs. 理论派（MIRI）。每一种冲突都真实存在，且大部分未解决。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "The 2024–2026 era is empirical safety's moment. Mechanistic interpretability has produced real artifacts (sparse autoencoders, feature catalogs). The doom side has retreated rhetorically but not analytically. The field is more crowded, better-funded, and less unified than at any prior point.",
          zh: "2024–2026 年是经验性安全的时刻。机制可解释性已产出真实的工件（稀疏自编码器、特征目录）。末日派在修辞上后撤，但分析上未撤。该领域比以往任何时候都更拥挤、更有钱，也更不统一。",
        },
      },
    ],
    thinkers: ["Eliezer Yudkowsky", "Nick Bostrom", "Paul Christiano", "Chris Olah", "Dario Amodei", "Jan Leike"],
    concepts: [
      { en: "Alignment", zh: "对齐" },
      { en: "Mesa-optimization", zh: "元优化" },
      { en: "Deceptive alignment", zh: "欺骗性对齐" },
      { en: "Mechanistic interpretability", zh: "机制可解释性" },
      { en: "Constitutional AI", zh: "Constitutional AI" },
    ],
    related: ["rationalism", "effective-altruism", "effective-accelerationism", "transhumanism"],
    figures: ["sam-altman"],
  },
  {
    slug: "ai-religion",
    cluster: "ai-belief",
    era: "2010s–",
    title: { en: "AI as Religion", zh: "AI 作为宗教" },
    subtitle: {
      en: "Eschatology in the form of compute.",
      zh: "以算力形式存在的末世论。",
    },
    kernel: {
      en: "By 2026 the structural form of religious belief — a forthcoming event of cosmic significance, a community of the elect, a soteriology, a moral discipline, a clergy — has been faithfully recapitulated in AI discourse. \"AGI\" plays the role of the eschaton. The labs play the role of the priesthood. The believer-skeptic distinction now operates on lines very similar to those of medieval theological debate. This is not a metaphor; it is the operational structure of the field.",
      zh: "到 2026 年，宗教信仰的结构形态——一桩即将到来的具有宇宙意义的事件、一个被拣选者的社群、一套救赎论、一种道德训练、一群神职人员——已被忠实地复刻于 AI 话语之中。\"AGI\" 扮演\"末世\"。实验室扮演\"祭司团\"。信徒-怀疑者之分，如今沿着与中世纪神学辩论极其相似的线划开。这不是一个比喻；这是该领域的操作结构。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Anthony Levandowski founds \"Way of the Future\" (2017), the literal first AI church, and is widely mocked. Within five years the substance of his claim — that AGI will be the most important religious event of the century — has been quietly absorbed by the discourse without anyone needing to call it religion.",
          zh: "Anthony Levandowski 2017 年创立了\"未来之道\"，字面意义上第一座 AI 教堂，并被广泛嘲笑。五年之内，他主张的实质内容——AGI 将是本世纪最重要的宗教事件——已被话语悄悄吸收，再也不需要有人把它称作宗教。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "An event is approaching. The event is more important than any prior event in human history. Preparing for it is a vocation. Those who do not see it are unenlightened, not stupid. The clergy is the labs; the laity is everyone who uses ChatGPT; the heretics are open-source maximalists; the schismatics are e/acc.",
          zh: "一桩事件正在临近。这桩事件比人类史上任何过往事件都更重要。为之做准备是一种天职。看不见它的人是\"未蒙启示\"，不是\"愚蠢\"。神职是各大实验室；信众是每一个用 ChatGPT 的人；异端是开源极大化派；分裂派是 e/acc。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Singularitarianism (Kurzweil) → Transhumanism → MIRI's existential-risk framing → Sam Altman's \"intelligence too cheap to meter\" sermon (2024) → the 2026 quasi-liturgical product launch.",
          zh: "奇点主义（库兹韦尔）→ 超人类主义 → MIRI 的存在性风险框架 → Sam Altman 2024 年\"便宜到无需计量的智能\" 的布道 → 2026 年带准礼拜性质的产品发布。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "The conflict between AI religion and traditional religion is mostly latent. Catholic and Protestant theological responses have appeared (Pope Francis's 2024 AI statement, the SBC resolution). The conflict that matters more is internal: which lab is the true church?",
          zh: "AI 宗教与传统宗教之间的冲突，多半是潜伏的。天主教与新教方面已有神学回应（教皇方济各 2024 年的 AI 声明、SBC 决议）。更重要的冲突是内部的：哪一家实验室才是\"真正的教会\"？",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "The doctrine is shedding its embarrassment. Senior figures (Altman, Hassabis, Amodei) increasingly use language that 1990s reporters would have called religious without irony. By 2030 the AI religion frame will be ordinary, the way \"Silicon Valley utopianism\" was ordinary by 2010 — fully absorbed into the background of how the industry talks about itself.",
          zh: "教义正在卸下自己的羞赧。资深人物（Altman、Hassabis、Amodei）越来越多地使用 1990 年代记者会毫不讽刺地称之为\"宗教语言\" 的措辞。到 2030 年，AI 宗教框架将变得寻常——就像 2010 年的\"硅谷乌托邦主义\" 一样寻常——彻底融入该行业自我言说的背景之中。",
        },
      },
    ],
    thinkers: ["Anthony Levandowski", "Ray Kurzweil", "Sam Altman", "Demis Hassabis", "Dario Amodei"],
    concepts: [
      { en: "AGI as eschaton", zh: "AGI 作为末世" },
      { en: "The Compute Cathedral", zh: "算力大教堂" },
      { en: "Liturgical product launch", zh: "礼拜式产品发布" },
    ],
    related: ["transhumanism", "rationalism", "effective-accelerationism", "ai-safety"],
    figures: ["sam-altman", "elon-musk"],
    essays: ["agi-as-god", "compute-cathedral"],
  },

  // ─────────── POWER & EMPIRE ───────────
  {
    slug: "techno-libertarianism",
    cluster: "power",
    era: "1995–",
    title: { en: "Techno-Libertarianism", zh: "技术自由意志主义" },
    subtitle: {
      en: "Markets and protocols against the regulatory state.",
      zh: "用市场与协议对抗监管国家。",
    },
    kernel: {
      en: "Techno-libertarianism is the political fusion that takes hacker-culture's skepticism of authority, libertarian economics' love of markets, and Silicon Valley's faith in technical solutions, and binds them into a coherent program: roll back the regulatory state, replace its functions with markets and protocols, and treat any objection as a failure of imagination. The PayPal Mafia is the canonical case; Andreessen Horowitz the canonical institution; the 2024 Tech Right the canonical coalition.",
      zh: "技术自由意志主义是一场政治融合：它把黑客文化对权威的怀疑、自由意志主义经济学对市场的钟爱，以及硅谷对技术性解法的信仰，捆扎为一份连贯的纲领——卷回监管国家，用市场与协议替代其职能，并把任何异议都视作\"想象力的失败\"。PayPal 黑帮是它的范式案例，Andreessen Horowitz 是它的范式机构，2024 年\"技术右翼\" 是它的范式联盟。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "John Perry Barlow's 1996 \"A Declaration of the Independence of Cyberspace\" is the rhetorical opening. The PayPal Mafia (Thiel, Musk, Hoffman, Levchin) emerges from selling to eBay in 2002 and immediately reinvests in tools designed to evade state interference: SpaceX (regulatory arbitrage of NASA), LinkedIn (replacing the Rolodex), YouTube (broadcast without licenses).",
          zh: "John Perry Barlow 1996 年的《赛博空间独立宣言》是修辞上的开幕。PayPal 黑帮（Thiel、Musk、Hoffman、Levchin）在 2002 年把公司卖给 eBay 之后浮现，并立即把资金再投向那些专为绕开国家干预设计的工具：SpaceX（对 NASA 的监管套利）、LinkedIn（替代 Rolodex 名片）、YouTube（无需牌照的广播）。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Markets are smarter than regulators. Voluntary association is more legitimate than imposed jurisdiction. Most regulation is rent extraction wearing safety clothing. The internet, encryption, blockchain, AI agents, and private space are sequential moves in a single long game: make the state increasingly optional.",
          zh: "市场比监管者更聪明。自愿结社比强加管辖更具正当性。大多数监管是穿着安全外衣的租金抽取。互联网、加密、区块链、AI 智能体、私营太空——是一场长棋局中的连续招式：让国家越来越可选。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Barlow → Thiel (Zero to One, 2014) → Andreessen (Time to Build, 2020) → e/acc → 2024 Tech Right. The lineage has moved leftward to rightward in conventional terms while staying constant on the libertarian-technologist axis.",
          zh: "Barlow → Thiel（《从零到一》，2014）→ Andreessen（Time to Build，2020）→ e/acc → 2024 技术右翼。在常规政治坐标系下，这条谱系从左移到了右；而在\"自由意志-技术派\" 这条轴上，它一直没有动过。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "Internal: the libertarian wing wants the state out of everything; the national-security wing (Palantir, Anduril) wants the state as customer. External: regulators who notice that \"protocol\" often functions as \"unaccountable private power.\" The 2024–2026 alignment with the political right has confused observers who expected libertarians to remain anti-state across the board.",
          zh: "内部冲突：自由意志派希望国家从一切事务中撤出；国家安全派（Palantir、Anduril）希望国家作为客户存在。外部冲突：那些注意到\"协议\" 常常充当\"无问责的私权\" 的监管者。2024–2026 年与政治右翼的结盟，令那些原以为自由意志派会一以贯之反国家的观察者陷入困惑。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "Techno-libertarianism's most successful late-stage move is to inflate the agent economy and the chip industry into national-security priorities — turning libertarian preferences into state policy by routing them through geopolitical urgency. The contradiction (anti-state and pro-state simultaneously) is real but politically productive.",
          zh: "技术自由意志主义晚期最成功的招式，是把智能体经济与芯片产业膨胀为国家安全优先项——通过\"地缘政治紧迫性\" 把自由意志偏好转化为国家政策。其矛盾（同时反国家又亲国家）真实存在，却在政治上极为生产性。",
        },
      },
    ],
    thinkers: ["Peter Thiel", "Marc Andreessen", "Balaji Srinivasan", "John Perry Barlow", "Curtis Yarvin"],
    concepts: [
      { en: "Regulatory arbitrage", zh: "监管套利" },
      { en: "Permissionless innovation", zh: "无需许可的创新" },
      { en: "Sovereign individual", zh: "主权个体" },
    ],
    related: ["crypto-anarchism", "network-states", "techno-optimism", "platform-capitalism", "military-tech-alliance"],
    figures: ["peter-thiel", "marc-andreessen", "elon-musk"],
  },
  {
    slug: "platform-capitalism",
    cluster: "power",
    era: "2004–",
    title: { en: "Platform Capitalism", zh: "平台资本主义" },
    subtitle: {
      en: "Owning the layer where commerce happens, not the commerce.",
      zh: "拥有商务发生的那一层，而不是商务本身。",
    },
    kernel: {
      en: "Platform capitalism is the dominant late-Silicon-Valley business model: build a marketplace, network effect, or aggregator, and extract rent from every transaction that occurs in it. Facebook, Google, Apple, Amazon, Uber, and Airbnb are the canonical platforms. The model's strength — extreme operating leverage — and its weakness — perceived illegitimacy of the rents — define most of the 2020s regulatory landscape.",
      zh: "平台资本主义是硅谷晚期的主导商业模式：先搭起一座市场、网络效应或聚合器，再从其中发生的每一笔交易中抽租。Facebook、Google、苹果、亚马逊、Uber、Airbnb 是范式平台。这一模式的强项——极度的运营杠杆——与它的弱项——租金被认为缺乏正当性——共同定义了 2020 年代的大部分监管格局。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Google's AdWords (2000) is the prototype: it does not produce content, it taxes the commerce that happens on the content layer. Facebook (2004) and the iPhone App Store (2008) extend the model to identity and software distribution. Aggregation theory (Ben Thompson, 2015) names the pattern.",
          zh: "Google AdWords（2000）是原型：它本身不生产内容，而是对发生在内容层的商务征税。Facebook（2004）与 iPhone App Store（2008）将该模式延伸到身份与软件分发。聚合理论（Ben Thompson，2015）为这一模式命名。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Demand-side network effects produce monopolies. Monopolies are good (Thiel) for the monopolist. Owning the relationship with the user means commoditizing your suppliers. The take rate is the dependent variable; market power is the independent variable. \"Be the only game in town\" is the strategy.",
          zh: "需求侧网络效应制造垄断。垄断（Thiel）对垄断者而言是好事。拥有与用户的关系，就意味着把你的供应商商品化。抽佣率是因变量；市场势力才是自变量。\"成为城里唯一的玩家\" 就是战略。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Google AdWords → Facebook → App Store → Uber → Stripe → Shopify → Substack → AI platform layer (OpenAI's GPT Store, Anthropic's Claude Code marketplace). Each generation moves up the stack to whatever the new commerce layer is.",
          zh: "Google AdWords → Facebook → App Store → Uber → Stripe → Shopify → Substack → AI 平台层（OpenAI 的 GPT 商店、Anthropic 的 Claude Code 市场）。每一代都顺着\"新的商务层\" 向上爬。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "Antitrust regulators (EU DMA, U.S. DOJ vs. Apple) try to break the take rate. Open-protocol challengers (ActivityPub, Nostr, Farcaster, MCP) try to make the platform layer commoditized. Sovereign-AI initiatives try to ensure that the next platform is owned by a state rather than a U.S. corporation.",
          zh: "反垄断监管者（欧盟 DMA、美国司法部诉苹果案）试图压低抽佣率。开放协议挑战者（ActivityPub、Nostr、Farcaster、MCP）试图把平台层商品化。各国主权 AI 计划则试图确保下一层平台属于一个国家、而不是一家美国公司。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "The AI agent era opens a new platform layer — the agent-to-agent commerce surface — that no incumbent yet dominates. Whoever owns the x402 facilitator, the MCP marketplace, and the agent identity layer in 2027–2028 is the next platform giant. The race is on; the participants are mostly the existing platforms.",
          zh: "AI 智能体时代开启了一个新的平台层——\"智能体-智能体商务\" 表面——目前还没有任何在位者主导。2027–2028 年谁拥有 x402 中转、MCP 市场以及智能体身份层，谁就是下一个平台巨头。竞速已经开始；参赛者大体仍是既有的平台。",
        },
      },
    ],
    thinkers: ["Ben Thompson", "Peter Thiel", "Mark Zuckerberg", "Tim Cook", "Brian Chesky"],
    concepts: [
      { en: "Aggregation theory", zh: "聚合理论" },
      { en: "Network effect", zh: "网络效应" },
      { en: "Take rate", zh: "抽佣率" },
      { en: "Commoditize your complement", zh: "把补充品商品化" },
    ],
    related: ["techno-libertarianism", "venture-capital-philosophy", "founder-mythology"],
    figures: ["peter-thiel", "larry-page"],
  },
  {
    slug: "military-tech-alliance",
    cluster: "power",
    era: "2003–",
    title: { en: "Military-Tech Alliance", zh: "军方-科技联盟" },
    subtitle: {
      en: "The Valley quietly returns to the Pentagon's lab budget.",
      zh: "硅谷悄悄回到五角大楼的实验室预算里。",
    },
    kernel: {
      en: "From the 1990s through the 2010s the consumer-tech industry tried to forget that Silicon Valley was originally a Pentagon project (Shockley, Fairchild, Ampex, ARPA). The 2003 founding of Palantir, the 2017 founding of Anduril, and the 2024 OpenAI defense partnership announce the reversal: the most ideologically forward-leaning founders are now openly building for the defense customer, and the Valley's most lucrative growth market is military software and autonomy.",
      zh: "从 1990 年代到 2010 年代，消费科技业一直试图忘记一件事——硅谷本来就是五角大楼的项目（肖克利、仙童、Ampex、ARPA）。2003 年 Palantir 的创立、2017 年 Anduril 的创立、2024 年 OpenAI 与国防部的合作公告，宣告了反向移动：最有意识形态前倾姿态的创始人，如今公开为国防客户打造；而硅谷利润率最高的增长市场是军用软件与自主作战系统。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Palantir (Karp, Thiel, Cohen, 2003) builds analytical tools for the CIA via In-Q-Tel funding. Anduril (Luckey, 2017) builds autonomous defense hardware. The 2018 Google/Maven employee revolt marks the high water of the tech-industry's anti-military self-image; by 2024 that self-image is gone.",
          zh: "Palantir（Karp、Thiel、Cohen，2003）以 In-Q-Tel 出资，为中情局打造分析工具。Anduril（Luckey，2017）造自主国防硬件。2018 年 Google / Maven 项目员工抗议标志了科技业\"反军\" 自我形象的最高潮；到 2024 年，这一自我形象已不复存在。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Western liberal democracy is worth defending and is currently under-defended. The DoD is a slow buyer with a giant budget; the Valley is a fast builder with no defense moat. The thesis: replace 1980s defense primes with software-native, fast-iteration companies. Patriotism is good marketing.",
          zh: "西方自由民主值得被守卫，且当下处于守卫不足状态。国防部是\"慢买家、巨预算\"；硅谷是\"快建造者、无防御护城河\"。论题：用软件原生、快速迭代的公司取代 1980 年代的国防承包巨头。爱国是不错的营销。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Palantir → Anduril → SpaceX/Starlink (de facto military contractor by 2022) → OpenAI's defense pivot (2024) → Scale AI's federal AI (2024) → the wave of 2025–2026 defense-tech YC batches. The reconciliation between the Valley and the Pentagon is now structural, not personal.",
          zh: "Palantir → Anduril → SpaceX / 星链（到 2022 年事实上的国防承包商）→ OpenAI 2024 年的国防转向 → Scale AI 联邦 AI（2024）→ 2025–2026 年国防科技 YC 批次浪潮。硅谷与五角大楼的和解，如今已是结构性的，而非个人性的。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "The internal labor-side conflict (engineers who do not want to build weapons) has been mostly resolved by hiring engineers who do. The international conflict (export controls, allied vs. adversary tech sharing) defines the actual 2026 geopolitics. The China-AI competition makes the military-tech alliance feel inevitable to its supporters.",
          zh: "内部劳工侧的冲突（不愿造武器的工程师）已大体通过\"招聘愿意造的人\" 而解决。国际侧的冲突（出口管制、盟友 vs. 对手的技术共享）定义了 2026 年真实的地缘政治。中-美 AI 竞赛，让支持者觉得军方-科技联盟是\"势所必然\"。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "Defense-tech is now a primary career path for top-tier engineers, a primary thesis for top-tier VC, and a primary axis of U.S. national strategy. The combination is structurally durable. The question is whether civilian Silicon Valley retains any independent identity at all once the most ambitious projects converge on national security.",
          zh: "国防科技如今是顶级工程师的主要职业路径、顶级 VC 的主要论题，也是美国国家战略的主要轴线之一。这一组合在结构上极为耐久。问题是：一旦最有野心的项目都向国家安全靠拢，民用硅谷是否还保有任何独立身份。",
        },
      },
    ],
    thinkers: ["Alex Karp", "Palmer Luckey", "Peter Thiel", "Trae Stephens", "Elbridge Colby"],
    concepts: [
      { en: "Defense-tech thesis", zh: "国防科技论题" },
      { en: "In-Q-Tel pipeline", zh: "In-Q-Tel 管道" },
      { en: "Sovereign compute", zh: "主权算力" },
    ],
    related: ["techno-libertarianism", "chip-geopolitics", "ai-civilization-competition"],
    figures: ["peter-thiel", "elon-musk"],
  },
  {
    slug: "chip-geopolitics",
    cluster: "power",
    era: "2018–",
    title: { en: "Chip Geopolitics", zh: "芯片地缘政治" },
    subtitle: {
      en: "The smallest objects on earth are now the largest political objects on earth.",
      zh: "地球上最小的物件，如今成了地球上最大的政治物件。",
    },
    kernel: {
      en: "The 2018 Trump-era technology-export controls; the 2022 Biden administration's 10/7 chip controls; the 2024–2025 expansion to memory, equipment, and HBM; the strategic centrality of TSMC, ASML, and NVIDIA — together these constitute a regime change in U.S. industrial policy and in the political economy of computing. \"Compute\" has become a state-controlled commodity for the first time since uranium.",
      zh: "2018 年特朗普时期的技术出口管制；2022 年拜登政府的 10/7 芯片管制；2024–2025 年向存储、设备与 HBM 的扩展；台积电、ASML、英伟达的战略中心地位——这一切共同构成了美国产业政策与计算政治经济学的一次政体更替。\"算力\" 自铀以来，第一次成为一种由国家管控的商品。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "The 2018 ZTE sanctions are the first shot. The October 7, 2022 controls — Jake Sullivan's signature foreign policy move — are the regime change. The 2024 expansion to fabrication equipment and HBM closes the loop. The Pelosi visit to TSMC in 2022 made the chip-as-political-asset explicit.",
          zh: "2018 年对中兴的制裁是第一枪。2022 年 10 月 7 日的管制——杰克·沙利文标志性的外交政策动作——是政体更替。2024 年向制造设备与 HBM 的延伸合上了回路。2022 年佩洛西访问台积电，把\"芯片即政治资产\" 摆上了明面。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Compute determines AI capability; AI capability determines geopolitical position; therefore compute is the strategic primary. The United States can keep its lead only if it retains absolute control of the cutting-edge fab supply chain. Allied access (Korea, Japan, Netherlands) is conditional; adversary access is to be denied with extreme prejudice.",
          zh: "算力决定 AI 能力；AI 能力决定地缘地位；因此算力是首要战略变量。美国只有牢牢握住最先进制造供应链的绝对控制，才能保持领先。盟友的接入（韩国、日本、荷兰）是有条件的；对手的接入应被以极端偏见加以否决。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Pat Gelsinger's Intel comeback play (failed). TSMC's Arizona fab (in motion). ASML's lithography moat (intact). NVIDIA's CUDA stack (intact). Each piece is part of a single industrial-policy puzzle the U.S. government did not have until 2022.",
          zh: "Pat Gelsinger 的英特尔回归剧（失败）。台积电亚利桑那厂（推进中）。ASML 的光刻护城河（完好）。英伟达的 CUDA 栈（完好）。每一块都属于同一份产业政策拼图——美国政府直到 2022 年才拥有它。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "U.S. vs. China is the headline conflict. U.S. vs. its own chip industry's profit incentives is the underlying conflict — NVIDIA, Intel, and others lose enormous revenue to controls and lobby accordingly. Allied governments quietly hedge by building their own sovereign-AI compute.",
          zh: "美国 vs. 中国是头条冲突。美国 vs. 其本国芯片产业的盈利动机是底层冲突——英伟达、英特尔等公司因管制损失巨额收入，并相应游说。盟友政府则安静地通过建设各自的主权 AI 算力来对冲。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "Three plausible 2030 endpoints: (1) China achieves rough parity at the trailing edge and accepts a bifurcated world; (2) the U.S. tightens further and the bifurcation deepens; (3) a Taiwan event forces an emergency reconstitution of the supply chain that nobody is ready for. The current trajectory is closer to (2).",
          zh: "到 2030 年的三种可能终局：（1）中国在低代次上达到大致平价并接受两极世界；（2）美国进一步收紧，两极化加深；（3）台海事件迫使供应链进行无人准备就绪的紧急重构。当下走向更接近（2）。",
        },
      },
    ],
    thinkers: ["Jake Sullivan", "Chris Miller", "Morris Chang", "Jensen Huang", "Gregory Allen"],
    concepts: [
      { en: "Compute-as-strategic-asset", zh: "算力即战略资产" },
      { en: "Export controls", zh: "出口管制" },
      { en: "Small yard, high fence", zh: "小院高墙" },
      { en: "Foundry sovereignty", zh: "晶圆代工主权" },
    ],
    related: ["military-tech-alliance", "ai-civilization-competition"],
    figures: ["jensen-huang"],
  },
  {
    slug: "ai-civilization-competition",
    cluster: "power",
    era: "2018–",
    title: { en: "U.S.–China AI Civilization Competition", zh: "中美 AI 文明竞争" },
    subtitle: {
      en: "Two civilizations training on each other's weights.",
      zh: "两个文明，互相在对方的权重上训练。",
    },
    kernel: {
      en: "By 2024 the U.S.-China AI competition had stopped pretending to be a normal trade dispute and started being treated as a civilizational contest by serious people in both countries. The American framing: liberal-democratic compute vs. authoritarian compute. The Chinese framing: a long-term technology sovereignty project that the AI moment merely accelerated. Both framings are partially correct; both produce policies that further entrench the bifurcation.",
      zh: "到 2024 年，中美 AI 竞争已不再假装自己是普通的贸易争端，而被两国严肃人士看作一场文明竞赛。美国叙事：自由民主算力 vs. 威权算力。中国叙事：一项长期技术主权工程——AI 时刻只是把它加速了。两套叙事各对一半；两套叙事都在催生进一步加深两极的政策。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "China's 2017 AI Plan declares 2030 dominance. The 2018 trade war begins decoupling. DeepMind's 2016 AlphaGo defeats Ke Jie in 2017 — read in China as a Sputnik moment. By 2023 China's open-model labs (Qwen, DeepSeek, ChatGLM, Yi) match Llama-class capability; by 2025 DeepSeek's R1-style training efficiency forces an honest American reassessment.",
          zh: "中国 2017 年的 AI 规划宣示 2030 年的主导地位。2018 年贸易战开启脱钩。DeepMind 2016 年的 AlphaGo 于 2017 年战胜柯洁——在中国被读为\"斯普特尼克时刻\"。到 2023 年，中国开源模型实验室（通义千问、DeepSeek、ChatGLM、零一万物）已达到与 Llama 同档能力；到 2025 年，DeepSeek 类 R1 的训练效率迫使美国进行一次诚实的重新评估。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "United States: maintain compute lead via export controls; lead at the frontier via the lab-NVIDIA-cloud triangle; bind allies into a single compute zone. China: substitute via efficiency; race up the open-weights curve; build a parallel chip industry; cultivate a domestic application stack indifferent to U.S. cloud.",
          zh: "美国：通过出口管制保持算力领先；通过\"实验室-英伟达-云\" 三角维持前沿；把盟友绑入同一算力区。中国：以效率替代；沿开放权重曲线竞速；建设平行芯片产业；培养一套对美国云生态无感的国内应用栈。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Each side's lineage is internal to its political culture. The American thread is Cold-War-flavored — Sputnik, Apollo, Star Wars, AI. The Chinese thread is sovereignty-flavored — opium war, semiconductors as the new fuel, indigenous innovation. The threads do not translate cleanly; this is part of the problem.",
          zh: "每一方的谱系都属于其政治文化内部。美国线索带冷战味——斯普特尼克、阿波罗、星球大战、AI。中国线索带主权味——鸦片战争、半导体作为新燃料、自主创新。两条线索难以彼此干净翻译；这本身是问题的一部分。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "Tactical conflicts: export controls, chip smuggling, model distillation across borders, talent visas, university research restrictions. Strategic conflict: whose stack becomes the default infrastructure for the agent economy outside the OECD? The answer in much of Africa, Latin America, and Southeast Asia is increasingly Chinese.",
          zh: "战术冲突：出口管制、芯片走私、跨境模型蒸馏、人才签证、高校研究限制。战略冲突：在 OECD 之外，谁的技术栈将成为智能体经济的默认基础设施？在非洲、拉美与东南亚的许多地方，这一答案越来越是中国。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "The most likely 2030 outcome is bifurcation, not victory. Two parallel AI stacks, two parallel chip supply chains, two parallel agent payment rails, and a long unstable middle in the Global South. The Silicon Valley response — which is to assume Western models will dominate — is increasingly out of date.",
          zh: "2030 年最可能的结果是分叉，而非胜利。两套并行的 AI 栈、两套并行的芯片供应链、两套并行的智能体支付轨道，以及全球南方一片漫长不稳的中间地带。硅谷的回应——假设西方模型会一统天下——日益过时。",
        },
      },
    ],
    thinkers: ["Jake Sullivan", "Kai-Fu Lee", "Helen Toner", "Liang Wenfeng (梁文锋)", "Jensen Huang"],
    concepts: [
      { en: "Bifurcation", zh: "分叉" },
      { en: "Sovereign AI", zh: "主权 AI" },
      { en: "Talent flow", zh: "人才流动" },
      { en: "Standards war", zh: "标准之战" },
    ],
    related: ["chip-geopolitics", "military-tech-alliance", "techno-libertarianism"],
    figures: ["jensen-huang"],
  },

  // ─────────── COUNTER-CURRENTS ───────────
  {
    slug: "counter-currents",
    cluster: "counter",
    era: "1985–",
    title: { en: "Counter-Currents", zh: "逆流" },
    subtitle: {
      en: "The minority report on every ideology in this archive.",
      zh: "本档案中每一种意识形态的少数派报告。",
    },
    kernel: {
      en: "Every Silicon Valley ideology in this archive has a counter-current — a tradition that diagnoses the same phenomena and reaches the opposite conclusion. Postman on television, Lanier on web 2.0, Zuboff on surveillance capitalism, Joy on \"why the future doesn't need us,\" Gebru/Bender/Buolamwini on algorithmic injustice, Crawford on the atlas of AI. These are not contrarianism; they are the discipline of refusing the field's house style.",
      zh: "本档案中的每一种硅谷意识形态都有一条逆流——一种诊断相同现象却得出相反结论的传统。Postman 论电视、Lanier 论 Web 2.0、Zuboff 论监控资本主义、Joy 论\"为何未来不需要我们\"、Gebru / Bender / Buolamwini 论算法不公、Crawford 的《AI 地图》。它们不是反共识姿态；它们是拒绝接受该领域\"标准写法\" 的纪律。",
    },
    sections: [
      {
        heading: { en: "Origins", zh: "起源" },
        body: {
          en: "Neil Postman's Amusing Ourselves to Death (1985) anticipates the entire attention-economy critique. Bill Joy's \"Why the Future Doesn't Need Us\" (Wired, 2000) anticipates x-risk from inside the founder class. Jaron Lanier's You Are Not a Gadget (2010) names the dignity cost of platform capitalism.",
          zh: "Neil Postman 1985 年的《娱乐至死》预言了整套注意力经济批判。Bill Joy 2000 年发在《Wired》上的《为何未来不需要我们》，从创始人阶层内部预言了存在性风险。Jaron Lanier 2010 年的《你不是一个小工具》，命名了平台资本主义的尊严代价。",
        },
      },
      {
        heading: { en: "Doctrine", zh: "教义" },
        body: {
          en: "Technology is not neutral. Affordances carry politics. The choice of metaphor is the choice of social order. \"Move fast and break things\" describes who pays the breakage. \"Permissionless innovation\" describes whose permission is being skipped. Disclosure is a precondition for democracy.",
          zh: "技术不中立。\"可供性\" 承载政治。隐喻的选择就是社会秩序的选择。\"快速行动、打破常规\" 描绘的是\"由谁承担破坏\"。\"无需许可的创新\" 描绘的是\"在跳过谁的许可\"。披露是民主的前提。",
        },
      },
      {
        heading: { en: "Lineage", zh: "谱系" },
        body: {
          en: "Postman → Lanier → Zuboff (Surveillance Capitalism, 2019) → Crawford (Atlas of AI, 2021) → Gebru/Bender/Mitchell (Stochastic Parrots, 2021) → Tristan Harris (Center for Humane Technology). The tradition is institutionally smaller than the dominant ideologies but punches above its weight in academic and regulatory circles.",
          zh: "Postman → Lanier → Zuboff（《监控资本主义》，2019）→ Crawford（《AI 地图》，2021）→ Gebru / Bender / Mitchell（《随机鹦鹉》，2021）→ Tristan Harris（人道技术中心）。这条传统在制度规模上小于主导意识形态，但在学界与监管圈的影响力远超体量。",
        },
      },
      {
        heading: { en: "Conflicts", zh: "冲突" },
        body: {
          en: "The counter-currents are routinely dismissed by Silicon Valley discourse as \"decel,\" \"Luddite,\" or \"woke.\" The dismissal is rhetorically effective but analytically lazy — most of the counter-currents' empirical predictions (attention damage, surveillance creep, algorithmic bias) have aged well.",
          zh: "硅谷话语习惯把这些逆流斥为\"减速派\"、\"卢德派\" 或\"觉醒主义\"。这种否定在修辞上有效，但在分析上懒惰——多数逆流的经验性预测（注意力损害、监控蔓延、算法偏见）都经受住了时间检验。",
        },
      },
      {
        heading: { en: "Trajectory", zh: "走向" },
        body: {
          en: "The counter-currents are quietly winning the regulatory layer (EU AI Act, DMA, GDPR) and quietly losing the cultural layer. The standoff is unresolved and is probably the actual political shape of the AI decade — not safety vs. accel, but governance vs. exit.",
          zh: "逆流在监管层悄悄获胜（欧盟 AI 法案、DMA、GDPR），却在文化层悄悄失败。对峙未决，并且很可能正是 AI 这十年的真正政治形状——不是\"安全 vs. 加速\"，而是\"治理 vs. 退出\"。",
        },
      },
    ],
    thinkers: ["Neil Postman", "Jaron Lanier", "Shoshana Zuboff", "Kate Crawford", "Timnit Gebru", "Emily Bender", "Bill Joy", "Tristan Harris"],
    concepts: [
      { en: "Surveillance capitalism", zh: "监控资本主义" },
      { en: "Stochastic parrots", zh: "随机鹦鹉" },
      { en: "Atlas of AI", zh: "AI 地图" },
      { en: "Humane technology", zh: "人道技术" },
    ],
    related: ["platform-capitalism", "ai-safety", "techno-optimism"],
  },
];

export const IDEOLOGY_BY_SLUG: Record<string, IdeologyNode> = Object.fromEntries(
  IDEOLOGIES.map((n) => [n.slug, n])
);
