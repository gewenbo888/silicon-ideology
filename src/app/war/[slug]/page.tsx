"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { WAR_BY_SLUG } from "@/data/wars";
import RelatedRail from "@/components/RelatedRail";

export default function WarPage({ params }: { params: { slug: string } }) {
  const { t } = useLang();
  const w = WAR_BY_SLUG[params.slug];
  if (!w) notFound();

  return (
    <article>
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-6 pt-12 pb-10 md:pt-16">
          <Link href="/wars" className="inline-block micro text-dim hover:text-amber transition-colors mb-6">
            ← {t({ en: "all wars", zh: "全部战争" })}
          </Link>
          <div className="grid md:grid-cols-[1fr_320px] gap-10">
            <div>
              <div className="micro text-crimson mb-4 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-crimson animate-pulse-soft" />
                {t({ en: "Active conflict", zh: "进行中的冲突" })}
              </div>
              <h1 className="font-display text-[clamp(34px,5.5vw,72px)] leading-[1] tracking-[-0.012em] text-text mb-3 text-balance">
                {t(w.title)}
              </h1>
              <p className="font-display italic text-xl md:text-2xl text-muted leading-snug max-w-3xl text-pretty">
                {t(w.subtitle)}
              </p>
              <div className="mt-6 space-y-2">
                {w.parties.map((p, i) => (
                  <div key={i} className="flex items-baseline gap-3">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-crimson">
                      Party {i + 1}
                    </span>
                    <span className="text-text text-[15px]">{t(p)}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="border border-line p-5 bg-bg-2/50 self-start">
              <h5 className="micro text-crimson mb-2">{t({ en: "Kernel", zh: "内核" })}</h5>
              <p className="text-[14px] leading-relaxed text-text">{t(w.kernel)}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-12 md:py-16 grid md:grid-cols-[1fr_280px] gap-12">
          <div className="space-y-10 max-w-3xl">
            {w.sections.map((s, i) => (
              <div key={i}>
                <div className="micro text-dim mb-2">§ {String(i + 1).padStart(2, "0")}</div>
                <h2 className="font-display text-2xl md:text-3xl text-text leading-tight mb-3">{t(s.heading)}</h2>
                <p className="text-[16.5px] leading-[1.75] text-muted">{t(s.body)}</p>
              </div>
            ))}
          </div>
          <RelatedRail ideologies={w.ideologies} figures={w.figures} />
        </div>
      </section>
    </article>
  );
}
