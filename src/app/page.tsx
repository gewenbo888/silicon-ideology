"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { IDEOLOGIES } from "@/data/ideologies";
import { FIGURES } from "@/data/figures";
import { WARS } from "@/data/wars";
import { ESSAYS } from "@/data/essays";
import { CLUSTER_META } from "@/lib/types";
import NodeCard from "@/components/NodeCard";
import Graph from "@/components/Graph";
import { clusterStroke } from "@/components/Sigil";

export default function HomePage() {
  const { t, lang } = useLang();

  const clusters = (Object.keys(CLUSTER_META) as Array<keyof typeof CLUSTER_META>).map((key) => ({
    key,
    meta: CLUSTER_META[key],
    nodes: IDEOLOGIES.filter((n) => n.cluster === key),
  }));

  return (
    <>
      {/* ───────── HERO ───────── */}
      <section className="relative border-b border-line overflow-hidden grid-bg">
        <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-20 md:pt-24 md:pb-28 relative">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7 space-y-7">
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-amber flex items-center gap-3 flex-wrap">
                <span className="inline-block w-2 h-2 bg-amber animate-pulse-soft" />
                <span>{t({ en: "Bilingual archive · since 1948", zh: "双语档案 · 自 1948 年起" })}</span>
                <span className="text-dim">·</span>
                <span className="text-dim">{t({ en: "Last write: 2026", zh: "上次写入：2026" })}</span>
              </div>
              <h1 className="font-display text-[clamp(40px,7vw,96px)] leading-[0.97] tracking-[-0.018em] text-text text-balance">
                {lang === "zh" ? (
                  <>每一种<em className="italic text-amber">塑造硅谷</em>的意识形态，绘成一张宇宙图。</>
                ) : (
                  <>Every ideology that built Silicon Valley, <em className="italic text-amber">mapped as one universe</em>.</>
                )}
              </h1>
              <p className="text-muted text-[18px] md:text-[20px] leading-relaxed max-w-xl text-pretty">
                {t({
                  en: "From cybernetics to the AGI cathedral, from hacker culture to e/acc, from the cypherpunk mailing list to the network state — this is the long thought-history of the engineers, the founders, the prophets, the apostates, and the heretics. A knowledge graph, not a blog.",
                  zh: "从控制论到 AGI 大教堂，从黑客文化到 e/acc，从赛博朋克密码者的邮件列表到网络国家——这是关于工程师、创始人、先知、叛教者与异端的那段长思想史。这是一张知识图谱，不是一个博客。",
                })}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/graph"
                  className="inline-flex items-center gap-2 border border-amber/40 bg-amber/10 hover:bg-amber/20 text-amber-2 px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.16em] transition-colors"
                >
                  {t({ en: "Enter the graph →", zh: "进入图谱 →" })}
                </Link>
                <Link
                  href="/timeline"
                  className="inline-flex items-center gap-2 border border-line hover:border-line-2 text-text hover:text-amber px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.16em] transition-colors"
                >
                  {t({ en: "Walk the timeline", zh: "走过时间线" })}
                </Link>
                <Link
                  href="/wars"
                  className="inline-flex items-center gap-2 border border-line hover:border-crimson/60 text-text hover:text-crimson px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.16em] transition-colors"
                >
                  {t({ en: "AI ideological wars", zh: "AI 意识形态战争" })}
                </Link>
              </div>
            </div>

            {/* Stat block */}
            <div className="md:col-span-5">
              <div className="grid grid-cols-2 gap-px bg-line border border-line">
                {[
                  { label: t({ en: "Ideologies", zh: "意识形态" }), val: IDEOLOGIES.length },
                  { label: t({ en: "Figures", zh: "人物" }), val: FIGURES.length },
                  { label: t({ en: "AI wars", zh: "AI 战争" }), val: WARS.length },
                  { label: t({ en: "Essays", zh: "文章" }), val: ESSAYS.length },
                  { label: t({ en: "Clusters", zh: "分簇" }), val: 5 },
                  { label: t({ en: "Languages", zh: "语言" }), val: "EN · 中" },
                ].map((s, i) => (
                  <div key={i} className="bg-bg p-5">
                    <div className="micro text-dim">{s.label}</div>
                    <div className="font-display text-3xl text-text mt-1">{s.val}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 border border-line p-5 bg-bg-2/50">
                <h4 className="micro text-amber mb-3">
                  {t({ en: "Operating premise", zh: "操作前提" })}
                </h4>
                <p className="text-[14px] leading-relaxed text-muted">
                  {t({
                    en: "Treat each ideology as a feedback loop with inputs (texts, thinkers, capital), outputs (products, institutions, casualties), and an objective function. Read the graph; the genealogy reveals itself.",
                    zh: "把每一种意识形态视作一个反馈回路：输入（文本、思考者、资本）、输出（产品、机构、伤亡）、目标函数。读图，谱系便自行显形。",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────── UNIVERSE GRAPH PREVIEW ───────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
          <div className="flex flex-wrap items-end justify-between mb-6 gap-4">
            <div>
              <div className="micro text-amber mb-2">{t({ en: "§ 01 · The universe", zh: "§ 01 · 宇宙" })}</div>
              <h2 className="font-display text-3xl md:text-5xl text-text leading-tight tracking-tight">
                {t({ en: "Five clusters, one lineage tree.", zh: "五大分簇，一条谱系树。" })}
              </h2>
            </div>
            <Link href="/graph" className="font-mono text-[12px] uppercase tracking-[0.16em] text-amber hover:text-amber-2 transition-colors">
              {t({ en: "Open full graph →", zh: "打开完整图谱 →" })}
            </Link>
          </div>
          <Graph />
        </div>
      </section>

      {/* ───────── CLUSTERS ───────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20 space-y-16">
          {clusters.map(({ key, meta, nodes }) => {
            const color = clusterStroke(key);
            return (
              <div key={key}>
                <div className="grid md:grid-cols-[200px_1fr] gap-8 items-baseline mb-6">
                  <div>
                    <div
                      className="font-mono text-[10.5px] uppercase tracking-[0.18em] mb-2"
                      style={{ color }}
                    >
                      ◇ {t({ en: "Cluster", zh: "分簇" })}
                    </div>
                    <h3 className="font-display text-3xl md:text-4xl text-text leading-tight">
                      {t(meta as { en: string; zh: string })}
                    </h3>
                  </div>
                  <p className="text-muted text-[16px] leading-relaxed max-w-3xl">
                    {(() => {
                      const blurbs: Record<string, { en: string; zh: string }> = {
                        hacker: {
                          en: "The line from Wiener to Buterin runs through one continuous question: who controls the loop? Each node here is a generational answer.",
                          zh: "从维纳到 Buterin 的那条线，贯穿一个连续的问题：谁掌握回路？此处的每一个节点，都是某一代人给出的答案。",
                        },
                        venture: {
                          en: "Power-law mathematics turned into a moral system. The founder, the deal, the fund, the manifesto — each is a sacrament in this cluster's liturgy.",
                          zh: "幂律数学被转化为一套道德系统。创始人、交易、基金、宣言——每一样都是这一簇礼拜中的圣礼。",
                        },
                        "ai-belief": {
                          en: "When intelligence becomes the question, the answer is always theological. From Kurzweil's calendar to Yudkowsky's warnings to e/acc's thermodynamic god — this is the cluster that organizes the AI era's soul.",
                          zh: "当智能本身成为问题，答案总会带神学性。从库兹韦尔的日历，到 Yudkowsky 的警告，再到 e/acc 的热力学之神——这是组织 AI 时代灵魂的那一簇。",
                        },
                        power: {
                          en: "Where the protocols meet the state. Chip controls, defense contracts, sovereign clouds, civilizational competition — the cluster in which infrastructure becomes geopolitics.",
                          zh: "协议与国家相遇之处。芯片管制、国防合同、主权云、文明级竞争——基础设施在这里变成地缘政治。",
                        },
                        counter: {
                          en: "Every ideology has a minority report. Postman, Lanier, Zuboff, Crawford, Gebru — the tradition of refusing the field's house style.",
                          zh: "每一种意识形态都有一份少数派报告。Postman、Lanier、Zuboff、Crawford、Gebru——\"拒绝接受领域标准写法\" 的传统。",
                        },
                      };
                      return t(blurbs[key]);
                    })()}
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {nodes.map((n) => (
                    <NodeCard key={n.slug} node={n} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ───────── FIGURES ───────── */}
      <section className="border-b border-line bg-bg-2/40">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
          <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
            <div>
              <div className="micro text-amber mb-2">{t({ en: "§ 02 · Character universe", zh: "§ 02 · 人物宇宙" })}</div>
              <h2 className="font-display text-3xl md:text-5xl text-text leading-tight tracking-tight">
                {t({ en: "The figures who installed the operating system.", zh: "安装这套操作系统的人物们。" })}
              </h2>
            </div>
            <Link href="/figures" className="font-mono text-[12px] uppercase tracking-[0.16em] text-amber hover:text-amber-2 transition-colors">
              {t({ en: "All figures →", zh: "全部人物 →" })}
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {FIGURES.map((f) => (
              <Link
                key={f.slug}
                href={`/figure/${f.slug}`}
                className="group border border-line bg-bg p-4 hover:border-line-2 hover:bg-surface transition-colors"
              >
                <div
                  className="micro mb-1"
                  style={{ color: clusterStroke(f.cluster) }}
                >
                  {f.born}
                </div>
                <div className="font-display text-xl text-text group-hover:text-amber transition-colors leading-tight">
                  {f.name}
                </div>
                <div className="text-muted text-[13px] mt-1.5 leading-snug">{t(f.title)}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── WARS ───────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
          <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
            <div>
              <div className="micro text-crimson mb-2">⚠ {t({ en: "§ 03 · Ideological wars", zh: "§ 03 · 意识形态战争" })}</div>
              <h2 className="font-display text-3xl md:text-5xl text-text leading-tight tracking-tight">
                {t({ en: "Where the doctrines actually fight.", zh: "教义真正交火之处。" })}
              </h2>
            </div>
            <Link href="/wars" className="font-mono text-[12px] uppercase tracking-[0.16em] text-crimson hover:opacity-80 transition-opacity">
              {t({ en: "All wars →", zh: "全部战争 →" })}
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {WARS.map((w) => (
              <Link
                key={w.slug}
                href={`/war/${w.slug}`}
                className="group block border border-line bg-bg-2/40 p-6 hover:bg-surface hover:border-crimson/40 transition-colors"
              >
                <div className="micro text-crimson mb-2 flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 bg-crimson animate-pulse-soft" />
                  {t({ en: "Active conflict", zh: "进行中的冲突" })}
                </div>
                <div className="font-display text-2xl text-text group-hover:text-crimson transition-colors leading-tight mb-1.5">
                  {t(w.title)}
                </div>
                <div className="text-muted text-[14px] leading-relaxed mb-3">
                  {t(w.subtitle)}
                </div>
                <div className="flex flex-wrap gap-2">
                  {w.parties.map((p, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-mono text-muted border border-line-2 px-2 py-0.5"
                    >
                      {t(p)}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── ESSAYS ───────── */}
      <section className="border-b border-line bg-bg-2/40">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
          <div className="flex items-end justify-between mb-8 gap-4 flex-wrap">
            <div>
              <div className="micro text-violet mb-2">✠ {t({ en: "§ 04 · Silicon Valley as religion", zh: "§ 04 · 硅谷作为宗教" })}</div>
              <h2 className="font-display text-3xl md:text-5xl text-text leading-tight tracking-tight">
                {t({ en: "Compute cathedrals, founder prophets, AI eschatology.", zh: "算力大教堂、创始人先知、AI 末世论。" })}
              </h2>
            </div>
            <Link href="/essays" className="font-mono text-[12px] uppercase tracking-[0.16em] text-violet hover:opacity-80 transition-opacity">
              {t({ en: "All essays →", zh: "全部文章 →" })}
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {ESSAYS.map((e) => (
              <Link
                key={e.slug}
                href={`/essay/${e.slug}`}
                className="group block border border-line bg-bg p-6 hover:bg-surface hover:border-violet/40 transition-colors"
              >
                <div className="micro text-violet mb-2">{t({ en: "Essay", zh: "随笔" })}</div>
                <div className="font-display text-2xl text-text group-hover:text-violet transition-colors leading-tight mb-1.5">
                  {t(e.title)}
                </div>
                <div className="text-muted text-[14px] leading-relaxed">
                  {t(e.subtitle)}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── METHODOLOGY ───────── */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="micro text-amber mb-3">§ 05 · {t({ en: "Method", zh: "方法" })}</div>
              <h2 className="font-display text-3xl md:text-4xl text-text leading-tight mb-5 tracking-tight">
                {t({
                  en: "Read this archive as a graph, not a feed.",
                  zh: "把这份档案当作图读，不要当作信息流读。",
                })}
              </h2>
              <p className="text-muted leading-relaxed text-[15.5px] mb-3">
                {t({
                  en: "Every node is connected to its lineage parents, its kin, and its adversaries. Hovering an ideology dims everything except its neighborhood. Clicking opens its dossier: origins, doctrine, lineage, conflicts, trajectory.",
                  zh: "每一个节点都连接着它的谱系亲本、亲缘节点与对手。把鼠标停在某一种意识形态上，整张图除其邻域外都将变暗。点击则打开它的卷宗：起源、教义、谱系、冲突、走向。",
                })}
              </p>
              <p className="text-muted leading-relaxed text-[15.5px]">
                {t({
                  en: "The archive is bilingual by construction. Every kernel paragraph, every section, every essay is written twice — not auto-translated. The Chinese register is its own register; the English register is its own register. Read either; ideally read both.",
                  zh: "本档案在结构上是双语的。每一段\"内核段\"、每一节、每一篇随笔，都是双语写就的——不是机器翻译。中文是它自己的语域；英文是它自己的语域。任择一种阅读；最理想是两种都读。",
                })}
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  num: "01",
                  t: { en: "Origins", zh: "起源" },
                  d: { en: "Where the doctrine actually came from — the institutions, texts, and personalities that gave it birth.", zh: "教义实际的来处——孕育它的机构、文本与人物。" },
                },
                {
                  num: "02",
                  t: { en: "Doctrine", zh: "教义" },
                  d: { en: "The set of propositions the doctrine actually asks you to believe. Stated plainly, without sympathy or hostility.", zh: "该教义真正要求你相信的一组命题。直白陈述，不带同情也不带敌意。" },
                },
                {
                  num: "03",
                  t: { en: "Lineage", zh: "谱系" },
                  d: { en: "The descendants. Who it became. What it now lives inside, often without acknowledging the parent.", zh: "其后裔。它变成了谁；它如今寄居在何处——通常不承认母体。" },
                },
                {
                  num: "04",
                  t: { en: "Conflicts", zh: "冲突" },
                  d: { en: "Where the doctrine breaks. Its internal schisms and its external adversaries.", zh: "教义裂开之处。它的内部分裂与外部敌手。" },
                },
                {
                  num: "05",
                  t: { en: "Trajectory", zh: "走向" },
                  d: { en: "Where it appears to be heading, and the uncertainty around that estimate.", zh: "它似乎要去的地方，以及该估计的不确定性。" },
                },
              ].map((row) => (
                <div key={row.num} className="grid grid-cols-[44px_1fr] gap-4 items-baseline pb-3 border-b border-line/50">
                  <div className="font-mono text-amber text-sm">{row.num}</div>
                  <div>
                    <div className="font-display text-xl text-text leading-tight">{t(row.t)}</div>
                    <div className="text-[14px] text-muted leading-relaxed mt-0.5">{t(row.d)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
