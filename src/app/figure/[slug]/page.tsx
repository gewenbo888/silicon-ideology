"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { FIGURE_BY_SLUG } from "@/data/figures";
import { CLUSTER_META } from "@/lib/types";
import { clusterStroke } from "@/components/Sigil";
import RelatedRail from "@/components/RelatedRail";

export default function FigurePage({ params }: { params: { slug: string } }) {
  const { t } = useLang();
  const f = FIGURE_BY_SLUG[params.slug];
  if (!f) notFound();
  const color = clusterStroke(f.cluster);
  const meta = CLUSTER_META[f.cluster];

  const sections: { heading: { en: string; zh: string }; body: { en: string; zh: string } }[] = [
    { heading: { en: "Worldview", zh: "世界观" }, body: f.worldview },
    { heading: { en: "Linguistic style", zh: "语言风格" }, body: f.style },
    { heading: { en: "Product philosophy", zh: "产品哲学" }, body: f.products },
    { heading: { en: "Influence network", zh: "影响网络" }, body: f.influence },
    { heading: { en: "Historical significance", zh: "历史意义" }, body: f.significance },
  ];

  return (
    <article>
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-6 pt-12 pb-10 md:pt-16">
          <Link href="/figures" className="inline-block micro text-dim hover:text-amber transition-colors mb-6">
            ← {t({ en: "all figures", zh: "全部人物" })}
          </Link>
          <div className="grid md:grid-cols-[1fr_320px] gap-10">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] px-2 py-0.5 border" style={{ color, borderColor: color + "55" }}>
                  ◇ {t(meta as { en: string; zh: string })}
                </span>
                <span className="font-mono text-[11px] text-dim">{f.born}</span>
              </div>
              <h1 className="font-display text-[clamp(40px,7vw,88px)] leading-[0.97] tracking-[-0.018em] text-text mb-2 text-balance">
                {f.name}
              </h1>
              {f.nameZh && (
                <div className="font-display lang-zh text-2xl text-muted leading-snug mb-3">{f.nameZh}</div>
              )}
              <p className="font-display italic text-xl md:text-2xl text-muted leading-snug max-w-3xl text-pretty">
                {t(f.title)}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {f.affiliations.map((a, i) => (
                  <span key={i} className="text-[12px] font-mono px-2 py-0.5 border border-line-2 text-muted">
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div className="border border-line p-5 bg-bg-2/50 self-start">
              <h5 className="micro text-amber mb-2">{t({ en: "Kernel", zh: "内核" })}</h5>
              <p className="text-[14px] leading-relaxed text-text">{t(f.kernel)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-12 md:py-16 grid md:grid-cols-[1fr_280px] gap-12">
          <div className="space-y-10 max-w-3xl">
            {sections.map((s, i) => (
              <div key={i}>
                <div className="micro text-dim mb-2">§ {String(i + 1).padStart(2, "0")}</div>
                <h2 className="font-display text-2xl md:text-3xl text-text leading-tight mb-3">{t(s.heading)}</h2>
                <p className="text-[16.5px] leading-[1.75] text-muted">{t(s.body)}</p>
              </div>
            ))}
          </div>
          <RelatedRail ideologies={f.ideologies} figures={f.related} />
        </div>
      </section>
    </article>
  );
}
