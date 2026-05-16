"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { ESSAYS } from "@/data/essays";

export default function EssaysIndex() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-12 md:py-16">
      <div className="mb-10">
        <div className="micro text-violet mb-2">{t({ en: "Silicon Valley as religion", zh: "硅谷作为宗教" })}</div>
        <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-tight text-text">
          {t({ en: "Long-form essays.", zh: "长文。" })}
        </h1>
        <p className="text-muted text-[16px] leading-relaxed max-w-2xl mt-4">
          {t({
            en: "Five recurring frames examined at essay length. The frames are religious in structure but secular in vocabulary — that is the point.",
            zh: "五个反复出现的框架，以随笔篇幅审视。它们在结构上是宗教的，在词汇上是世俗的——这正是要点。",
          })}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {ESSAYS.map((e) => (
          <Link
            key={e.slug}
            href={`/essay/${e.slug}`}
            className="group block border border-line bg-bg-2/40 hover:bg-surface hover:border-violet/40 p-6 transition-colors"
          >
            <div className="micro text-violet mb-2">✠ {t({ en: "Essay", zh: "随笔" })}</div>
            <div className="font-display text-2xl md:text-3xl text-text group-hover:text-violet transition-colors leading-tight mb-2">
              {t(e.title)}
            </div>
            <div className="text-muted text-[14px] leading-relaxed mb-4">{t(e.subtitle)}</div>
            <div className="text-muted text-[13.5px] leading-relaxed line-clamp-3 italic">
              {t(e.kernel)}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
