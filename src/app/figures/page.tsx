"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { FIGURES } from "@/data/figures";
import { clusterStroke } from "@/components/Sigil";

export default function FiguresIndex() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-12 md:py-16">
      <div className="mb-10">
        <div className="micro text-amber mb-2">{t({ en: "Character universe", zh: "人物宇宙" })}</div>
        <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-tight text-text">
          {t({ en: "The figures who installed the operating system.", zh: "安装这套操作系统的人物们。" })}
        </h1>
        <p className="text-muted text-[16px] leading-relaxed max-w-2xl mt-4">
          {t({
            en: "Each profile examines worldview, linguistic style, product philosophy, influence network, and historical significance — not biography. The interest is in the operating system the figure installed, not the personal anecdote.",
            zh: "每一份档案审视世界观、语言风格、产品哲学、影响网络与历史意义——而非传记。其兴趣在于该人物所安装的那套操作系统，而非个人轶事。",
          })}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {FIGURES.map((f) => (
          <Link
            key={f.slug}
            href={`/figure/${f.slug}`}
            className="group border border-line bg-bg-2/40 hover:bg-surface hover:border-line-2 transition-colors p-6"
          >
            <div className="flex items-start justify-between mb-3">
              <span
                className="font-mono text-[10.5px] uppercase tracking-[0.14em]"
                style={{ color: clusterStroke(f.cluster) }}
              >
                {f.born}
              </span>
              <span className="micro text-dim">{f.affiliations[0]}</span>
            </div>
            <div className="font-display text-2xl text-text group-hover:text-amber transition-colors leading-tight mb-1">
              {f.name}
            </div>
            <div className="text-muted text-[14px] leading-snug mb-3">{t(f.title)}</div>
            <div className="text-muted text-[13.5px] leading-relaxed line-clamp-3">
              {t(f.kernel)}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
