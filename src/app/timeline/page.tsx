"use client";
import { useLang } from "@/lib/i18n";
import Timeline from "@/components/Timeline";

export default function TimelinePage() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-12 md:py-16">
      <div className="mb-10">
        <div className="micro text-amber mb-2">{t({ en: "1948 — present", zh: "1948 — 至今" })}</div>
        <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-tight text-text">
          {t({ en: "The lineage timeline.", zh: "谱系时间线。" })}
        </h1>
        <p className="text-muted text-[16px] leading-relaxed max-w-2xl mt-4">
          {t({
            en: "From the Macy Conferences to the AGI cathedral, an unbroken thread. Each entry anchors at the year the ideology first cohered as a distinct intellectual program; many descendants of any given entry appear in later decades.",
            zh: "从梅西会议到 AGI 大教堂，一条未中断的线。每一个条目都锚定在该意识形态首次凝结为独立思想纲领的年份；任一条目都有许多后裔出现在其后的几十年里。",
          })}
        </p>
      </div>
      <Timeline />
    </section>
  );
}
