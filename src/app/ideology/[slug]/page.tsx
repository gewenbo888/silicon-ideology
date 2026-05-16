"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { IDEOLOGY_BY_SLUG } from "@/data/ideologies";
import { CLUSTER_META } from "@/lib/types";
import { clusterStroke } from "@/components/Sigil";
import RelatedRail from "@/components/RelatedRail";
import Graph from "@/components/Graph";

export default function IdeologyPage({ params }: { params: { slug: string } }) {
  const { t } = useLang();
  const node = IDEOLOGY_BY_SLUG[params.slug];
  if (!node) {
    notFound();
  }
  const color = clusterStroke(node.cluster);
  const meta = CLUSTER_META[node.cluster];

  return (
    <article>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-6 pt-12 pb-10 md:pt-16">
          <Link
            href="/"
            className="inline-block micro text-dim hover:text-amber transition-colors mb-6"
          >
            ← {t({ en: "back to universe", zh: "返回宇宙" })}
          </Link>
          <div className="grid md:grid-cols-[1fr_320px] gap-10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className="font-mono text-[10.5px] uppercase tracking-[0.18em] px-2 py-0.5 border"
                  style={{ color, borderColor: color + "55" }}
                >
                  ◇ {t(meta as { en: string; zh: string })}
                </span>
                <span className="font-mono text-[11px] text-dim">{node.era}</span>
              </div>
              <h1 className="font-display text-[clamp(34px,5.5vw,72px)] leading-[1] tracking-[-0.012em] text-text mb-4 text-balance">
                {t(node.title)}
              </h1>
              <p className="font-display italic text-xl md:text-2xl text-muted leading-snug max-w-3xl text-pretty">
                {t(node.subtitle)}
              </p>
            </div>
            <div className="border border-line p-5 bg-bg-2/50 self-start">
              <h5 className="micro text-amber mb-2">{t({ en: "Kernel", zh: "内核" })}</h5>
              <p className="text-[14px] leading-relaxed text-text">{t(node.kernel)}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-12 md:py-16 grid md:grid-cols-[1fr_280px] gap-12">
          <div className="space-y-10 max-w-3xl">
            {node.sections.map((s, i) => (
              <div key={i}>
                <div className="micro text-dim mb-2">
                  § {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="font-display text-2xl md:text-3xl text-text leading-tight mb-3">
                  {t(s.heading)}
                </h2>
                <p className="text-[16.5px] leading-[1.75] text-muted">{t(s.body)}</p>
              </div>
            ))}

            {/* Thinkers */}
            <div>
              <div className="micro text-dim mb-3">{t({ en: "Key thinkers", zh: "关键思考者" })}</div>
              <div className="flex flex-wrap gap-2">
                {node.thinkers.map((th) => (
                  <span key={th} className="text-[13px] font-mono text-text border border-line-2 bg-bg-2/40 px-2.5 py-1">
                    {th}
                  </span>
                ))}
              </div>
            </div>

            {/* Concepts */}
            <div>
              <div className="micro text-dim mb-3">{t({ en: "Key concepts", zh: "关键概念" })}</div>
              <div className="flex flex-wrap gap-2">
                {node.concepts.map((c, i) => (
                  <span key={i} className="text-[13px] font-mono px-2.5 py-1 bg-bg" style={{ color, borderColor: color + "44", borderWidth: 1, borderStyle: "solid" }}>
                    {t(c)}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <RelatedRail
            ideologies={node.related}
            figures={node.figures}
            wars={node.wars}
            essays={node.essays}
          />
        </div>
      </section>

      {/* Mini-graph */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-12 md:py-16">
          <div className="flex items-end justify-between mb-6 gap-4 flex-wrap">
            <div>
              <div className="micro text-amber mb-2">{t({ en: "Position in the universe", zh: "在宇宙中的位置" })}</div>
              <h3 className="font-display text-2xl md:text-3xl text-text leading-tight">
                {t({ en: "Where this node sits.", zh: "这个节点的位置。" })}
              </h3>
            </div>
            <Link href="/graph" className="font-mono text-[12px] uppercase tracking-[0.16em] text-amber hover:text-amber-2 transition-colors">
              {t({ en: "Open full graph →", zh: "打开完整图谱 →" })}
            </Link>
          </div>
          <Graph focusSlug={node.slug} />
        </div>
      </section>
    </article>
  );
}

