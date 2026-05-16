import type { FigureNode } from "@/lib/types";

export const FIGURES: FigureNode[] = [
  {
    slug: "steve-jobs",
    name: "Steve Jobs",
    nameZh: "史蒂夫·乔布斯",
    cluster: "venture",
    born: "1955–2011",
    affiliations: ["Apple", "NeXT", "Pixar"],
    title: { en: "The Founder of Founder Mythology", zh: "创始人神话之奠基者" },
    kernel: {
      en: "Jobs is the patient zero of every subsequent founder myth. He invents the modern product-as-cultural-object, the modern founder-as-vatic-figure, and the modern Silicon Valley relationship to design. Every founder since 2007 quotes him, often without knowing it. Studying Jobs is the only way to read the cultural form he installed.",
      zh: "乔布斯是此后所有\"创始人神话\" 的零号病人。他发明了现代意义上的\"产品作为文化对象\"，发明了现代意义上的\"创始人作为先知\" 形象，也发明了硅谷与设计之间的现代关系。2007 年以来的每一个创始人都在引用他，常常自己都不知道。要读懂他所安装的那种文化形式，唯一办法就是研究他。",
    },
    worldview: {
      en: "A small team of obsessives with extreme taste can produce objects that recompose culture. Defaults are political: choose them. Most of the industry is intellectually lazy and aesthetically blind; the founder's job is to refuse what they accept. There is one right answer per design problem; the work is finding it.",
      zh: "一支痴迷的小团队，加上极端的品味，可以造出重组文化的物件。\"默认设置\" 是政治性的：要主动选择。整个行业大部分人智识懒惰、审美失明；创始人的工作就是拒绝他们接受的那些。每一个设计问题都有唯一正确的答案；工作就是把它找到。",
    },
    style: {
      en: "Imperative, declarative, intolerant of qualifications. \"It just works.\" \"Insanely great.\" \"One more thing.\" Pauses where competitors would explain. Holds the demonstration like a relic. The reality-distortion field is not a delusion — it is a discipline of refusing the room's premises until the room rebuilds itself around the artifact.",
      zh: "祈使、断言、对修饰语零容忍。\"It just works.\" \"Insanely great.\" \"One more thing.\" 在对手会解释的地方停顿。把演示当作圣物来托举。\"现实扭曲力场\" 不是幻觉——它是一种纪律：拒绝接受房间里的前提，直到房间围绕这件器物自我重建。",
    },
    products: {
      en: "Apple II, Macintosh, NeXT, iMac, iPod, iPhone, iPad, MacBook Air. Each is the first version of a category that becomes the default category. The product philosophy is editorial: subtract until only the thing remains.",
      zh: "Apple II、麦金塔、NeXT、iMac、iPod、iPhone、iPad、MacBook Air。每一件都是一个新品类的首个版本，而该品类随后变成默认品类。产品哲学是编辑式的：不断减法，直到只剩下\"那件事物\" 本身。",
    },
    influence: {
      en: "Cook, Ive, Forstall, Schiller in the inner circle; Jobs's grammar spreads outward through Brian Chesky's Founder Mode, Elon Musk's launch theatre, every product-marketing keynote of the last fifteen years. Bezos and Zuckerberg refused the influence publicly while imitating it operationally.",
      zh: "内圈是 Cook、Ive、Forstall、Schiller；乔布斯的语法向外扩散：经由 Brian Chesky 的 Founder Mode、Elon Musk 的发布会戏剧学，蔓延到过去十五年所有的产品营销主旨演讲。贝索斯与扎克伯格在公开场合拒绝这一影响，却在运营上模仿它。",
    },
    significance: {
      en: "Without Jobs the entire post-2007 product economy reads differently. The iPhone is the single decision that made \"a billion people in your pocket\" a meaningful sentence. Everything else that defines our era — social media, the gig economy, mobile-first AI, the attention economy — depends on it.",
      zh: "若无乔布斯，整个 2007 年后的产品经济读起来都会是另一种样貌。iPhone 是那一个让\"口袋里的十亿人\" 这一句子变得有意义的决定。我们这个时代其他的定义性事物——社交媒体、零工经济、移动优先 AI、注意力经济——皆系于其上。",
    },
    ideologies: ["personal-computing", "founder-mythology", "hacker-culture", "platform-capitalism"],
    related: ["elon-musk", "larry-page", "marc-andreessen"],
  },
  {
    slug: "elon-musk",
    name: "Elon Musk",
    nameZh: "埃隆·马斯克",
    cluster: "venture",
    born: "1971",
    affiliations: ["SpaceX", "Tesla", "X", "xAI", "Neuralink", "Boring Company"],
    title: { en: "The Multi-Planetary Industrialist", zh: "多行星工业家" },
    kernel: {
      en: "Musk is the founder who refused to specialize. Six companies, four industries (transport, energy, communications, AI), one operating philosophy — apply first-principles physics to industries that have forgotten they are physics. By 2026 he is also a political actor of consequence; whether that fact strengthens or destroys the founder myth is the open question of his late career.",
      zh: "马斯克是那个拒绝专业化的创始人。六家公司、四个产业（运输、能源、通讯、AI）、一种运营哲学——把第一性原理的物理学应用于那些已经忘记自己是物理学的产业。到 2026 年，他还是一个有后果的政治行动者；这一事实究竟强化了还是摧毁了\"创始人神话\"，是他晚期生涯的开放问题。",
    },
    worldview: {
      en: "Civilizations either become multi-planetary or go extinct. Energy capture, propulsion, and bandwidth are the three rate-limiting steps. Most established industries have ceased thinking from physics and now run on tradition; the inefficiency is enormous and the entry opportunity is permanent. AI is the most important technology and therefore the most important political object.",
      zh: "文明要么变成多行星的，要么灭绝。能量捕获、推进、带宽，是三个速率限制步骤。多数成熟产业已不再从物理出发思考，而是靠传统运行；其低效是巨大的，准入机会是永久性的。AI 是最重要的技术，因此也是最重要的政治对象。",
    },
    style: {
      en: "Numeric, performative, polarizing. Tweet as policy instrument. Public deadlines as forcing function. Schedules treated as physics constraints whether they are or not. The personal brand is the company brand; the company brand is the country's industrial policy; the country's industrial policy is occasionally the personal brand.",
      zh: "数字化、表演性、极化的。把推特当政策工具。把公开截止日当强制函数。无论时间表是否真是物理约束，都把它当物理约束对待。个人品牌就是公司品牌；公司品牌就是国家产业政策；国家产业政策有时又退回到个人品牌。",
    },
    products: {
      en: "Falcon 9 + Starship (reusable orbital launch). Tesla Model S/3/Y (mass-market EV). Starlink (low-orbit broadband, de facto national-security asset by 2022). xAI Grok + the X distribution. Each is the result of bringing high industrial intensity to a sector that had calcified.",
      zh: "猎鹰 9 号 + 星舰（可复用入轨）。Tesla Model S / 3 / Y（量产电动车）。Starlink（低轨宽带，到 2022 年事实上的国家安全资产）。xAI Grok + X 分发。每一项都是把高工业强度带入一个已经板结的部门所产生的结果。",
    },
    influence: {
      en: "Direct: Anduril (Luckey was Musk-adjacent before founding it), Stripe (Collisons via PayPal), every defense-tech YC batch. Indirect: every founder who chose to ship aggressive deadlines instead of ones consultants would approve. Political: a personally consequential role in the 2024 U.S. realignment.",
      zh: "直接：Anduril（Luckey 在创立前与马斯克体系紧邻）、Stripe（Collison 兄弟经由 PayPal）、每一个国防科技 YC 批次。间接：每一位选择采用激进截止日、而非咨询公司会批准的截止日的创始人。政治：在 2024 年美国重组中扮演了个人意义重大的角色。",
    },
    significance: {
      en: "If multi-planetary becomes ordinary discourse by 2040 it will be because of him. If reusable orbital launch becomes infrastructure, the resulting cost curve is comparable to the container ship in scale. If EVs win the global passenger car market by 2032, the climate calculation changes materially. Each of these is uncertain; collectively the option value is enormous.",
      zh: "如果到 2040 年\"多行星\" 成为日常话语，那是因为他。如果可复用入轨变成基础设施，由此产生的成本曲线在规模上可与集装箱船相提并论。如果电动车到 2032 年在全球乘用车市场胜出，气候账目就发生实质改变。这其中每一项都不确定；合起来，期权价值极为巨大。",
    },
    ideologies: ["founder-mythology", "techno-optimism", "techno-libertarianism", "military-tech-alliance"],
    related: ["peter-thiel", "sam-altman", "marc-andreessen"],
  },
  {
    slug: "sam-altman",
    name: "Sam Altman",
    nameZh: "山姆·奥尔特曼",
    cluster: "ai-belief",
    born: "1985",
    affiliations: ["OpenAI", "Y Combinator", "Worldcoin", "Loopt"],
    title: { en: "The AGI Sherpa", zh: "AGI 引路人" },
    kernel: {
      en: "Altman is the principal political architect of the AGI moment. Loopt founder at 19. YC president at 28. OpenAI CEO at 31. By 2024 the most influential operating CEO of his generation, with the lab that has set the cultural and commercial agenda of AI for half a decade. The 2023 board firing and immediate restoration is the canonical demonstration of his political surface area.",
      zh: "Altman 是 AGI 时刻的首要政治建筑师。19 岁创立 Loopt。28 岁出任 YC 总裁。31 岁出任 OpenAI CEO。到 2024 年，他是其代际中最具影响力的在任 CEO，他的实验室在半个十年里设定了 AI 的文化与商业议程。2023 年董事会解雇与立刻复职，是他政治表面积的范式演示。",
    },
    worldview: {
      en: "AGI is coming, the timeline is short, the consequences are civilization-scale, and the right strategy is to be the lab that ships it carefully. Compute is the rate-limiting input; alignment is a research program, not a moratorium; the United States must remain the locus of frontier development.",
      zh: "AGI 正在到来，时间表很短，后果是文明级的；正确战略是\"成为那个谨慎地把它发出去的实验室\"。算力是速率限制输入；对齐是一项研究计划，而不是暂停令；美国必须仍是前沿开发的中心。",
    },
    style: {
      en: "Deceptively understated. Short sentences. Blog posts written like internal memos. A genuine fluency in moving between technical, regulatory, and capital-markets registers without code-switching enough to draw attention to it. The trick is making civilization-scale claims sound like neutral observations.",
      zh: "貌不惊人地克制。短句。博客像内部备忘录。在技术、监管与资本市场三种语域之间真切地切换，又切换得足够小心，以致不引起注意。窍门是：让\"文明级\" 的断言听上去像中性观察。",
    },
    products: {
      en: "GPT-3 (2020), ChatGPT (Nov 2022), GPT-4 (2023), Sora (2024), the GPT Store, OpenAI's enterprise pivot, the 2024 defense agreement, the 2025 sovereign-AI deals. Each product is also a political act.",
      zh: "GPT-3（2020）、ChatGPT（2022 年 11 月）、GPT-4（2023）、Sora（2024）、GPT 商店、OpenAI 企业转型、2024 年国防合作、2025 年主权 AI 协议。每一件产品同时也是一次政治行动。",
    },
    influence: {
      en: "Direct: OpenAI's entire alumni diaspora (Anthropic founders, Adept, Imbue, Inflection, Character) and YC's network. Indirect: every CEO from Susan Wojcicki onward whose pitch deck quietly assumes the OpenAI API as substrate. Political: the U.S. Senate's mental model of AI is largely the one he has cultivated.",
      zh: "直接：OpenAI 的整个校友散居体（Anthropic 创始人、Adept、Imbue、Inflection、Character）与 YC 的网络。间接：自 Susan Wojcicki 之后的每一位 CEO，其 pitch deck 都默默假设 OpenAI API 是基底。政治：美国参议院对 AI 的心智模型，大体是他培育出来的那个。",
    },
    significance: {
      en: "If frontier AI continues to centralize on his lab's stack, the historical analogue is Rockefeller in 1900 — the founder who got the timing right. If decentralization wins (open weights, sovereign labs, agent-to-agent commerce), he is the figure who scaled the technology and then watched it slip his grasp. Either ending writes Silicon Valley history.",
      zh: "如果前沿 AI 继续在他实验室的技术栈上集中，历史类比是 1900 年的洛克菲勒——那个把握住时机的创始人。如果去中心化获胜（开放权重、主权实验室、智能体对智能体商务），他就是那个把技术规模化、然后看着它溜出掌心的人物。无论哪种结局，都写下硅谷的历史。",
    },
    ideologies: ["founder-mythology", "ai-religion", "ai-safety", "transhumanism", "startup-theology"],
    related: ["paul-graham", "peter-thiel", "elon-musk"],
  },
  {
    slug: "peter-thiel",
    name: "Peter Thiel",
    nameZh: "彼得·蒂尔",
    cluster: "power",
    born: "1967",
    affiliations: ["PayPal", "Founders Fund", "Palantir", "Mithril"],
    title: { en: "The Contrarian Monopolist", zh: "反共识的垄断者" },
    kernel: {
      en: "Thiel is the philosophical center of the post-2008 Silicon Valley right. PayPal cofounder, Facebook's first outside investor, Palantir cofounder, Founders Fund managing partner — a CV that would, on its own, place him in the small set of consequential operators. The intellectual project — Zero to One (2014), Stanford CS183, the persistent argument that competition is for losers — is what makes him a different kind of figure.",
      zh: "Thiel 是 2008 年之后硅谷右翼的哲学重心。PayPal 联合创始人、Facebook 第一位外部投资人、Palantir 联合创始人、Founders Fund 管理合伙人——单凭这份履历，他已是少数有后果的运营者之一。但真正让他成为另一种人物的，是他的智识工程——《从零到一》（2014）、斯坦福 CS183、那条始终坚持的论断：\"竞争是输家做的事\"。",
    },
    worldview: {
      en: "Stagnation, not technology, is the actual problem of the West. Competition is for losers; monopolies that produce something new are good. The West's institutions have weakened to the point that voice-based reform is unlikely to succeed; exit and the construction of parallel institutions is the only serious project. AI is the technology that breaks the stagnation hypothesis if it works.",
      zh: "西方真正的问题是\"停滞\"，而非\"技术\"。竞争是输家做的事；那种生产出新事物的垄断是好的。西方制度已经衰弱到一定程度，使得基于\"发声\" 的改革很难成功；\"退出\" 与构造平行制度，是唯一严肃的计划。AI 是\"停滞假说\" 在它若成功之时会被打破的那项技术。",
    },
    style: {
      en: "Precise, paradoxical, deliberately hard to summarize. The Thiel sentence proceeds by setting two received opinions against each other and arguing that the orthodox conclusion is wrong. The style is hard to mimic because the rhetorical move is structural, not surface-level.",
      zh: "精确、悖论、刻意难以总结。Thiel 的句子的展开方式是：把两条公认意见相互对置，并论证正统结论是错的。其风格难以模仿，因为他的修辞动作是结构性的，而非表面层级的。",
    },
    products: {
      en: "PayPal (sold 2002). Palantir (2003, public 2020). Founders Fund's portfolio. The Thiel Fellowship (skip college, here's $100k). The 2016 GOP convention speech. The 2024 political-realignment role. Each product is in part an argument against an institution.",
      zh: "PayPal（2002 年售出）。Palantir（2003 年，2020 年上市）。Founders Fund 的投资组合。Thiel Fellowship（跳过大学，拿 10 万美元）。2016 年共和党大会演讲。2024 年的政治重组角色。每一件产品在某种程度上都是对某个制度的反驳。",
    },
    influence: {
      en: "PayPal Mafia (Musk, Hoffman, Levchin, Sacks). The defense-tech founder class (Karp, Luckey, Stephens). The intellectual right (Yarvin, Vance, Hazony). A generation of Stanford-and-elsewhere founders for whom Zero to One is the first business book.",
      zh: "PayPal 黑帮（Musk、Hoffman、Levchin、Sacks）。国防科技创始人阶层（Karp、Luckey、Stephens）。智识右翼（Yarvin、Vance、Hazony）。一代——以斯坦福为主的——创始人，他们读到的第一本商业书就是《从零到一》。",
    },
    significance: {
      en: "Thiel's bet is that the West rebuilds its institutions or fails. If he is wrong he will be remembered as a successful investor with eccentric politics. If he is right he will be remembered as a political theorist of the late-American transition, on the order of mid-20th-century figures whose names the present is still arguing about.",
      zh: "Thiel 的赌注是：西方要么重建其制度，要么失败。如果他错，他会被记作一位拥有古怪政治观点的成功投资人。如果他对，他会被记作\"美国晚期过渡\" 的政治理论家——其分量与那些今日仍在被争论的 20 世纪中叶人物相当。",
    },
    ideologies: ["founder-mythology", "venture-capital-philosophy", "techno-libertarianism", "platform-capitalism", "network-states", "military-tech-alliance"],
    related: ["marc-andreessen", "elon-musk", "balaji-srinivasan"],
  },
  {
    slug: "marc-andreessen",
    name: "Marc Andreessen",
    nameZh: "马克·安德森",
    cluster: "venture",
    born: "1971",
    affiliations: ["Netscape", "Andreessen Horowitz", "Meta board"],
    title: { en: "The Techno-Optimist Polemicist", zh: "技术乐观派论战家" },
    kernel: {
      en: "Andreessen is the bridge between two eras. As the 22-year-old Netscape author he is one of the founders of the consumer web. As the a16z general partner from 2009 he becomes the most ideologically active institutional investor in Silicon Valley. The 2011 \"Why Software Is Eating the World,\" the 2020 \"It's Time to Build,\" and the 2023 \"Techno-Optimist Manifesto\" are the canonical texts of the period's most assertive worldview.",
      zh: "Andreessen 是两个时代之间的桥。22 岁时，作为 Netscape 的作者，他是消费级互联网的奠基人之一。2009 年起作为 a16z 的普通合伙人，他成为硅谷在意识形态上最活跃的机构投资人。2011 年的《为何软件正在吞噬世界》、2020 年的《是时候建造了》、2023 年的《技术乐观宣言》，是这一时代最具进攻姿态的世界观的三份正典文本。",
    },
    worldview: {
      en: "Software is the substrate of every industry; therefore software firms are the substrate of the economy. Growth is the precondition of every other good. Stagnation, regulatory capture, and elite contempt for technology are the principal moral problems. Both political parties are wrong about technology in different ways; an active reconfiguration of the alliance is overdue.",
      zh: "软件是每一个行业的基底；因此软件公司是整个经济的基底。增长是其他一切好事的前提。停滞、监管俘获以及精英对技术的鄙夷，是首要的道德问题。两大政党在技术问题上各自以不同方式错了；对联盟做一次主动的重组，早就该做。",
    },
    style: {
      en: "Long, kinetic, taxonomy-rich. The blog post that becomes a manifesto. The Twitter thread that becomes a movement. Persuasion by accumulation — the reader is meant to feel surrounded by examples until disagreement requires denying obvious facts.",
      zh: "长、动感、富于分类。先是博客文章，然后变成宣言；先是推特长贴，然后变成运动。靠累积说服——让读者感到被例子包围，直到要反对就必须否认明显的事实。",
    },
    products: {
      en: "Mosaic (1993), Netscape (1994), Loudcloud (1999), Ning (2005), Andreessen Horowitz (2009). The a16z brand-as-publisher (Future, podcasts, manifestos). The 2024 political endorsement and policy infrastructure.",
      zh: "Mosaic（1993）、Netscape（1994）、Loudcloud（1999）、Ning（2005）、Andreessen Horowitz（2009）。a16z 的\"品牌即出版社\" 策略（Future、播客、宣言）。2024 年的政治背书与政策基础设施。",
    },
    influence: {
      en: "Direct: every a16z portfolio CEO, the wider \"build\" coalition, the e/acc movement (he was its principal patron). Indirect: the 2024 political realignment of the tech right; the transformation of \"VC\" from financial role to cultural role.",
      zh: "直接：每一位 a16z 投资组合 CEO、更广义的\"build\" 联盟、e/acc 运动（他是其主要赞助人）。间接：2024 年技术右翼的政治重组；\"VC\" 从财务角色到文化角色的转化。",
    },
    significance: {
      en: "If techno-optimism becomes the dominant frame of the 2030s, Andreessen will be the most cited figure of the 2020s. If counter-currents win the regulatory layer he will be a footnote with a famous fund. The two are not mutually exclusive — they are simply playing for different decades.",
      zh: "如果技术乐观主义成为 2030 年代的主导框架，Andreessen 将是 2020 年代被引用最多的人物。如果\"逆流\" 在监管层胜出，他将只是一个名下有一家著名基金的脚注。这两种结局并不互斥——它们只是在为不同的十年下注。",
    },
    ideologies: ["techno-optimism", "venture-capital-philosophy", "effective-accelerationism", "techno-libertarianism", "founder-mythology"],
    related: ["peter-thiel", "paul-graham", "elon-musk"],
  },
  {
    slug: "paul-graham",
    name: "Paul Graham",
    nameZh: "保罗·格雷厄姆",
    cluster: "venture",
    born: "1964",
    affiliations: ["Y Combinator", "Viaweb"],
    title: { en: "The Startup Theologian", zh: "创业神学家" },
    kernel: {
      en: "Graham is the writer-philosopher of contemporary Silicon Valley. The essays — Hackers and Painters (2004), every successive piece on his site — supplied the vocabulary, the heuristics, and the moral structure of the modern startup. YC supplied the institutional form. Together they have shaped more founders than any business school of the period.",
      zh: "Graham 是当代硅谷的作家-哲学家。他的文集——《黑客与画家》（2004）以及此后网站上发表的每一篇——为现代创业提供了词汇表、启发式与道德结构。YC 提供了制度形态。两者合起来塑造的创始人比同期任何一所商学院都多。",
    },
    worldview: {
      en: "The optimal life is making something you find interesting and that the market also wants. Most of school is irrelevant; most of corporate work is wasted motion; the right strategy is to leave both as early as possible. Hackers and painters have more in common than either has with bureaucrats. Reading widely is operationally crucial.",
      zh: "最优生活是\"做一件你觉得有趣、市场也想要\" 的事。学校里大部分内容无关紧要；公司工作大部分是浪费的动作；正确策略是尽早离开两者。黑客与画家之间的共同点，比任何一方与官僚之间的共同点都多。广泛阅读在运营上至关重要。",
    },
    style: {
      en: "Lisp-shaped prose. Short, recursive, self-aware. Often opens with a counter-intuitive observation, then resolves it as if it were obvious. Famous for the rhetorical move where a footnote dissolves the main argument; you cannot skim a Graham essay safely.",
      zh: "Lisp 形态的散文。短句、递归、有自我意识。常以反直觉的观察开篇，然后把它解释得仿佛理所当然。以这一修辞动作著称：一个脚注就溶解了主论证；Graham 的文章是不能安全跳读的。",
    },
    products: {
      en: "Viaweb (sold to Yahoo, 1998, becomes Yahoo Stores). YC (2005). The essays — by far the most influential thing he made, by the metric of \"founders shaped per page.\"",
      zh: "Viaweb（1998 年售给 Yahoo，成为 Yahoo Stores）。YC（2005）。文集——以\"每页塑造的创始人数量\" 来衡量，是他做过的影响力最大的东西。",
    },
    influence: {
      en: "Every YC alumni founder. Sam Altman (his eventual successor at YC). The broader essayist-founder genre. The current cultural assumption that founders are supposed to write.",
      zh: "每一位 YC 校友创始人。Sam Altman（他在 YC 的继任者）。更广义的\"写文章的创始人\" 文类。当下\"创始人应该写作\" 的文化默认。",
    },
    significance: {
      en: "If Silicon Valley in 2050 is still in any sense a coherent culture, Graham's essays will be one of the founding texts assigned to its young. The combination of an institution (YC) and a canon (the essays) is what makes the role unusual; few founders produce both.",
      zh: "如果到 2050 年硅谷在任何意义上仍是一种连贯文化，Graham 的文集将是它指定给年轻人阅读的奠基文本之一。\"制度（YC）+ 正典（文集）\" 的组合是不常见的；少有创始人能同时产出两者。",
    },
    ideologies: ["startup-theology", "founder-mythology", "hacker-culture", "venture-capital-philosophy"],
    related: ["sam-altman", "marc-andreessen"],
  },
  {
    slug: "vitalik-buterin",
    name: "Vitalik Buterin",
    nameZh: "维塔利克·布特林",
    cluster: "hacker",
    born: "1994",
    affiliations: ["Ethereum Foundation"],
    title: { en: "The Crypto Polymath", zh: "加密世界的博学者" },
    kernel: {
      en: "Buterin is the only major living protocol founder who is also a serious public intellectual. The Ethereum yellow paper at 19, the 2015 mainnet at 21, the post-DAO recovery, the rollup-centric roadmap, the writing on quadratic voting, soulbound tokens, public goods funding, network states. Most founders own a company; Buterin co-owns an institution and a research program.",
      zh: "Buterin 是当今唯一一位仍在世且同时算得上严肃公共知识分子的重要协议奠基者。19 岁写出以太坊黄皮书，21 岁主网上线，DAO 危机后的恢复，以 rollup 为中心的路线图，关于二次方投票、灵魂绑定代币、公共物品资助、网络国家的论著。多数创始人拥有一家公司；Buterin 共同拥有一所机构与一套研究纲领。",
    },
    worldview: {
      en: "Credible neutrality is a technological possibility, not an oxymoron. Blockchains are most valuable when they solve coordination failures, not when they replace dollars. Public goods funding is a hard, ongoing problem that markets cannot fully solve. The crypto industry needs to take cypherpunk values more seriously than its own price action.",
      zh: "\"可信中立\" 是一种技术可能性，不是矛盾修辞。区块链最有价值的时刻是\"解决协调失败\" 的时刻，而非\"取代美元\" 的时刻。公共物品资助是一个艰难且持续的问题，市场无法完全解决。加密产业需要比对待其自身价格行情更认真地对待赛博朋克密码者的价值观。",
    },
    style: {
      en: "Patient, footnote-heavy, mathematically loaded but unfailingly courteous in prose. Long-form posts on his personal site that read like academic papers without the academic posturing. Refuses to perform certainty he does not hold.",
      zh: "耐心、注释繁多、数学密度大，但散文中始终保持礼貌。在个人网站发表的长文，读起来像没有学院姿态的学术论文。拒绝表演自己并不真正拥有的确定性。",
    },
    products: {
      en: "Ethereum. Plasma → rollup-centric scaling. EIP-1559. The Merge to Proof-of-Stake. The post-DAO governance precedent. The blog as a research-program forum.",
      zh: "以太坊。Plasma → 以 rollup 为中心的扩展。EIP-1559。向权益证明的合并。DAO 之后的治理先例。把博客当作研究纲领论坛。",
    },
    influence: {
      en: "Every ZK-rollup team. Every governance-research economist. The next-generation privacy chains (Aztec, Penumbra, Psy). A small but distinctive cohort of crypto-native economists and political scientists.",
      zh: "每一支 ZK rollup 团队。每一位治理研究的经济学家。下一代隐私链（Aztec、Penumbra、Psy）。一小群独具特色的加密原生经济学家与政治学者。",
    },
    significance: {
      en: "Ethereum will outlive any single founder; Buterin's specific significance is that he wrote much of the public material that made the protocol feel like a research program rather than a company. The credible-neutrality thesis is one of the few intellectual exports the crypto industry has produced that is read seriously outside it.",
      zh: "以太坊会比任何单一创始人活得更久；Buterin 的具体意义在于：他写下了让协议\"感觉像一个研究纲领，而不是一家公司\" 的大部分公开材料。\"可信中立\" 论题是加密产业产出的少数几项被外部认真阅读的智识输出之一。",
    },
    ideologies: ["ethereum-and-web3", "cypherpunks", "crypto-anarchism"],
    related: ["balaji-srinivasan"],
  },
  {
    slug: "balaji-srinivasan",
    name: "Balaji Srinivasan",
    nameZh: "巴拉吉·斯里尼瓦桑",
    cluster: "hacker",
    born: "1980",
    affiliations: ["Andreessen Horowitz (former)", "Coinbase (former CTO)", "21.co", "Network School"],
    title: { en: "The Network State Prophet", zh: "网络国家先知" },
    kernel: {
      en: "Balaji is the most prolific producer of political-technical theses in the crypto world. The Network State (2022) is the book; the daily Twitter output is the working paper; the Network School (2024) is the laboratory. He occupies a peculiar slot — too operational to be an academic, too theoretical to be an operator — and his actual significance may turn on whether the slot endures.",
      zh: "Balaji 是加密世界中最高产的政治-技术论题制造者。《网络国家》（2022）是书；每日推特输出是工作论文；网络学校（2024）是实验室。他占据一个奇特的位置——过于运营化以至于不是学者，过于理论化以至于不是运营者——而他真正的意义可能取决于这一位置能否持久。",
    },
    worldview: {
      en: "The legacy institutional structure of the West is breaking down faster than its replacement is being built. Exit is morally legitimate and technically feasible. Online communities with sufficient internal coherence are the precursor to physical states. The American political duopoly will be obsoleted by network sovereignties before it is reformed.",
      zh: "西方遗产制度结构正在以快于其替代品被建造的速度瓦解。\"退出\" 在道德上正当、在技术上可行。具备足够内部凝聚力的在线社群，是物理国家的先导。在美国两党格局被改革之前，它会被网络主权所淘汰。",
    },
    style: {
      en: "Brisk, taxonomic, slide-deck cadence. The Balaji thread is a unit: ten tweets, each with one numbered claim, each linking to a source. The cadence privileges scale and pattern-recognition over depth on any single point.",
      zh: "麻利、分类化、像幻灯片节奏。Balaji 的推特长串是一个单位：十条推文、每条一个编号断言、每条链接一个来源。这种节奏更看重规模与模式识别，而非对单一论点的深耕。",
    },
    products: {
      en: "Counsyl (genomics, sold 2018). 21 (a Bitcoin company that pivoted into Earn.com and was sold to Coinbase). The Network State (book + tour). The Network School (Forest City, Malaysia, 2024). The daily Twitter feed as institution.",
      zh: "Counsyl（基因组，2018 年售出）。21（一家比特币公司，转型为 Earn.com 后卖给 Coinbase）。《网络国家》（书 + 巡回）。网络学校（马来西亚森林城市，2024）。\"每日推特\" 本身作为一项制度。",
    },
    influence: {
      en: "Every \"crypto-political\" founder. The Praxis/Próspera circuit. The 2025–2026 wave of zuzalu-style temporary states. A cohort of Indian-diaspora technologist intellectuals.",
      zh: "每一位\"加密-政治\" 创始人。Praxis / Próspera 圈层。2025–2026 年的 zuzalu 风格临时国家浪潮。一群印度散居技术专家知识分子。",
    },
    significance: {
      en: "If any network state achieves diplomatic recognition by 2035 it will be because of the framework he supplied. If none does, he will still have produced one of the most coherent positive-program documents the crypto right has generated, and the failure itself will be a useful historical artifact.",
      zh: "如果到 2035 年有任何网络国家获得外交承认，那将归功于他提供的框架。如果一个都没有，他至少也已贡献了加密右翼所生成的最具连贯性的正向纲领文本，而\"失败\" 本身将是一份有用的历史文物。",
    },
    ideologies: ["network-states", "crypto-anarchism", "cypherpunks", "techno-libertarianism"],
    related: ["vitalik-buterin", "peter-thiel"],
  },
  {
    slug: "jensen-huang",
    name: "Jensen Huang (黄仁勋)",
    nameZh: "黄仁勋",
    cluster: "power",
    born: "1963",
    affiliations: ["NVIDIA"],
    title: { en: "The Compute Sovereign", zh: "算力主权者" },
    kernel: {
      en: "Huang spent thirty years building a graphics card company and discovered, around 2012, that he had been quietly building the substrate of the AI economy. NVIDIA's transformation from gaming silicon to AI infrastructure provider to de facto sovereign of the compute supply is the most consequential corporate trajectory of the 2010s and 2020s. By 2025 NVIDIA is, by market cap, the largest company on earth — and the only one whose CEO is treated as a foreign-policy actor.",
      zh: "黄仁勋花了三十年建一家显卡公司，并在 2012 年前后发现：他一直在安静地建造\"AI 经济的基底\"。NVIDIA 从游戏硅厂转为 AI 基础设施供应商，再转为算力供给的事实主权者——这是 2010 与 2020 年代最具后果的公司轨迹。到 2025 年，NVIDIA 已是按市值计算地球上最大的公司——也是其 CEO 被当作外交政策行动者来对待的唯一一家。",
    },
    worldview: {
      en: "Compute is the new oil; we are the OPEC. The CUDA stack is the moat. The longer the AI boom lasts the more the world has to come through Santa Clara. Engineering culture trumps strategy memos; the best plan is to ship the next generation faster than the customer can adjust to the last one.",
      zh: "算力是新的石油；我们是 OPEC。CUDA 栈是护城河。AI 热潮持续越久，全世界就越要从圣克拉拉过路。工程文化压倒战略备忘录；最好的计划是把下一代发出去——比客户适应上一代还要快。",
    },
    style: {
      en: "Leather jacket. Two-hour keynote without notes. Operates the meeting from the whiteboard rather than the chair. Uses the second person more than any other tech CEO. The communication grammar is engineering-floor, scaled to civilizational stakes.",
      zh: "皮夹克。两小时主旨演讲不带稿。在白板边运营会议，而不是在椅子上。在所有科技 CEO 中使用第二人称最多。他的沟通语法是\"工程车间式的\"，被放大到了文明级的赌注上。",
    },
    products: {
      en: "GeForce. CUDA (2006 — the patient capital that determined everything). Tesla → Hopper → Blackwell → Rubin. DGX systems. Omniverse. The NVIDIA cloud and the Tier-1 customer relationships that turned a chip vendor into a system vendor.",
      zh: "GeForce。CUDA（2006——决定了一切的耐心资本）。Tesla → Hopper → Blackwell → Rubin。DGX 系统。Omniverse。NVIDIA 云，以及把芯片厂商变成系统厂商的一级客户关系。",
    },
    influence: {
      en: "Every AI lab. Every sovereign-AI government. Every CIO who used to budget for x86 servers. The defense-tech alliance (most autonomy programs are NVIDIA-dependent). The Taiwanese-American semiconductor diaspora.",
      zh: "每一个 AI 实验室。每一个主权 AI 政府。每一位过去预算给 x86 服务器的 CIO。国防科技联盟（大多数自主作战项目都依赖 NVIDIA）。台美半导体散居体。",
    },
    significance: {
      en: "If the AI era continues to depend on dense GPU compute, Huang's company will be the most strategically important corporate entity of the 21st century to date. If a non-GPU paradigm wins (custom ASICs at the lab scale, optical, neuromorphic), he will be remembered as the CEO who shipped the bridge era. Either way the bridge era already reshapes geopolitics.",
      zh: "如果 AI 时代继续依赖密集 GPU 算力，黄仁勋的公司将是 21 世纪迄今为止战略上最重要的企业实体。如果某种非 GPU 范式（实验室规模的定制 ASIC、光学、神经形态）胜出，他会被记作\"运送了过渡时代的那位 CEO\"。无论哪种情况，这段过渡期都已重塑地缘政治。",
    },
    ideologies: ["chip-geopolitics", "ai-civilization-competition", "platform-capitalism", "founder-mythology"],
    related: ["sam-altman"],
  },
  {
    slug: "larry-page",
    name: "Larry Page",
    nameZh: "拉里·佩奇",
    cluster: "venture",
    born: "1973",
    affiliations: ["Google / Alphabet"],
    title: { en: "The Information Singulist", zh: "信息奇点主义者" },
    kernel: {
      en: "Page is the founder who took the cybernetic premise — that intelligence is a function of feedback loops over enough data — and shipped it twice, first as a search engine and then, more quietly, as the corporate parent of DeepMind. The 1998 PageRank paper, the 2014 DeepMind acquisition, and the 2015 Alphabet restructuring are the three operational moves; the worldview underneath them is more eccentric than the products suggest.",
      zh: "Page 是那位把控制论前提——\"智能是一个对足够多数据做反馈循环的函数\"——交付了两次的奠基者：先是搜索引擎，然后更安静地，作为 DeepMind 的母公司。1998 年的 PageRank 论文、2014 年对 DeepMind 的收购、2015 年的 Alphabet 重组，是三步运营动作；其底下的世界观比产品所暗示的要更怪异。",
    },
    worldview: {
      en: "Information processing scales without obvious limit. The corporation should be the substrate of long-horizon science projects that institutions cannot fund. Most regulation is friction. The right human relationship to AI is parental — \"benevolent digital deities\" — even if the metaphor is uncomfortable.",
      zh: "信息处理在可见范围内没有明显上限。公司应当成为\"机构无法资助的长视域科学项目\" 的基底。大多数监管是摩擦。人类与 AI 的正确关系是父母式的——\"良善的数字神祇\"——即便这个隐喻让人不适。",
    },
    style: {
      en: "Reticent in public, intense in private. Famously the founder who in 2019 stopped giving interviews and became close-to-invisible. The voice survives mostly through internal documents and Hassabis-era DeepMind output.",
      zh: "公开场合寡言，私下场合强烈。2019 年开始不再接受采访、几乎隐形的著名创始人。他的声音如今主要靠内部文件与 Hassabis 时期的 DeepMind 输出而留存。",
    },
    products: {
      en: "Google Search. AdWords. Google Maps. YouTube (acquired). Android (acquired). DeepMind (acquired). The X moonshot division. Calico. Wing. The Alphabet structure itself, which was designed to give Page room to think rather than operate.",
      zh: "Google 搜索。AdWords。Google 地图。YouTube（收购）。Android（收购）。DeepMind（收购）。X 登月部门。Calico。Wing。Alphabet 结构本身——它的设计意图是给 Page 留下\"思考而非运营\" 的空间。",
    },
    influence: {
      en: "Sundar Pichai (operationally). Demis Hassabis (philosophically). The early-2010s Google internal culture that birthed Brain, TensorFlow, Transformer (Vaswani et al., 2017, internal Google work). The current OpenAI–DeepMind rivalry is, structurally, a Page artifact.",
      zh: "Sundar Pichai（运营上）。Demis Hassabis（哲学上）。2010 年代初催生了 Brain、TensorFlow、Transformer（Vaswani 等，2017，Google 内部工作）的 Google 内部文化。当下 OpenAI–DeepMind 的竞争，从结构上看是 Page 的遗产。",
    },
    significance: {
      en: "If you ran AI history backwards from 2026, the single most upstream commercial decision is Page's 2014 DeepMind acquisition. Without it the Anglo-American frontier-lab landscape is a different shape, and most of the careers that produced ChatGPT do not exist as currently configured.",
      zh: "如果你从 2026 年向回倒着读 AI 史，单一最上游的商业决定就是 Page 在 2014 年对 DeepMind 的收购。若没有这一笔，英美前沿实验室的格局会是另一种形状，而催生 ChatGPT 的大多数职业生涯也不会以当下方式存在。",
    },
    ideologies: ["personal-computing", "platform-capitalism", "transhumanism", "founder-mythology"],
    related: ["steve-jobs", "sam-altman"],
  },
  {
    slug: "naval-ravikant",
    name: "Naval Ravikant",
    nameZh: "纳瓦尔·拉维肯特",
    cluster: "venture",
    born: "1974",
    affiliations: ["AngelList", "Epic.com"],
    title: { en: "The Stoic Capital Aphorist", zh: "斯多葛式资本格言家" },
    kernel: {
      en: "Naval is the figure who turned angel investing into a personal-brand practice and then turned that practice into a worldview. AngelList (2010) is the institutional contribution; the aphorisms — \"how to get rich without getting lucky,\" the read list, the leverage thesis — are the cultural contribution. The latter has reshaped a generation's relationship to wealth-building more than any single business book of the period.",
      zh: "Naval 是那位把天使投资变成\"个人品牌实践\"、又把这种实践变成世界观的人物。AngelList（2010）是制度贡献；那些格言——\"如何不靠运气致富\"、阅读清单、杠杆论题——是文化贡献。后者重塑了一代人与\"财富建造\" 之关系的程度，超过同期任何一本商业书。",
    },
    worldview: {
      en: "Leverage (code, capital, content, labor) is the modern multiplier. Specific knowledge cannot be taught and is therefore the only true moat. Wealth is a system of permanent compounding outputs, not an income; income is for trading time, wealth is for transcending it. Most of contemporary political conflict is a status game; opt out.",
      zh: "杠杆（代码、资本、内容、劳动）是现代意义上的乘数。\"具体知识\" 教不会，因此是唯一真正的护城河。财富是一套\"永久复利输出\" 的系统，不是收入；收入用来交换时间，财富用来超越时间。当下政治冲突大半是地位游戏；选择退出。",
    },
    style: {
      en: "Aphoristic. Twitter-native. Long-form via podcast not essay. Borrows generously from Stoicism, Naval's reading of Eastern philosophy, and Charlie Munger. The signature register is short declarative sentences that read better than they argue.",
      zh: "格言式。推特原生。长内容通过播客而非文章。慷慨地借鉴自斯多葛主义、Naval 对东方哲学的阅读，以及查理·芒格。其招牌语域是短句陈述——读起来比论证起来更顺口。",
    },
    products: {
      en: "AngelList. The Naval Podcast. Curated reading lists. The \"How to Get Rich\" tweet thread (June 2018) — one of the most-screenshotted texts of the modern startup era. Investing footprint includes Twitter, Uber, Yammer, Postmates, Stack Overflow.",
      zh: "AngelList。Naval 播客。精选阅读清单。\"如何致富\" 推特长串（2018 年 6 月）——现代创业时代被截屏最多的文本之一。投资足迹包括 Twitter、Uber、Yammer、Postmates、Stack Overflow。",
    },
    influence: {
      en: "The solo capitalist movement. The crypto-native angel cohort. A wide diaspora of \"Naval-pilled\" indie founders. The aphorism format as a serious mode of intellectual production has, since Naval, become legitimate in tech.",
      zh: "独立资本运动。加密原生天使群体。一片广泛的\"Naval 化\" 独立创始人散居体。自 Naval 之后，\"格言\" 作为严肃的智识生产模式，在科技界获得了合法性。",
    },
    significance: {
      en: "Naval did not build the biggest company of his era; he built the philosophical scaffold a generation of ambitious 28-year-olds reach for first. That is a different kind of contribution and may, in the long historical view, outlast many of the larger fortunes around him.",
      zh: "Naval 没有打造他那个时代最大的公司；他打造的是一代有抱负的 28 岁青年首先去抓住的哲学脚手架。这是另一种贡献，从长历史视角看，它可能比环绕他周遭的许多更大财富活得更久。",
    },
    ideologies: ["startup-theology", "venture-capital-philosophy", "founder-mythology", "techno-libertarianism"],
    related: ["paul-graham", "balaji-srinivasan"],
  },
];

export const FIGURE_BY_SLUG: Record<string, FigureNode> = Object.fromEntries(
  FIGURES.map((f) => [f.slug, f])
);
