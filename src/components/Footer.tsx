"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line mt-16">
      <div className="mx-auto max-w-[1400px] px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div className="col-span-2 md:col-span-2 space-y-3">
          <div className="font-display text-xl text-text">
            {t({ en: "Silicon Valley Ideological Universe", zh: "硅谷思想宇宙" })}
          </div>
          <p className="text-muted leading-relaxed max-w-md text-[14px]">
            {t({
              en: "A bilingual knowledge graph of every ideology, lineage, conflict, and belief system that shaped Silicon Valley from cybernetics to the AGI era. Independent · research-oriented · still writing.",
              zh: "一份双语知识图谱，记录自控制论至 AGI 时代之间，塑造了硅谷的每一种意识形态、谱系、冲突与信仰体系。独立 · 研究取向 · 持续书写中。",
            })}
          </p>
        </div>
        <div className="space-y-2">
          <h5 className="micro text-dim">{t({ en: "Maps", zh: "地图" })}</h5>
          <ul className="space-y-1">
            <li><Link href="/graph" className="text-text hover:text-amber transition-colors">{t({ en: "Knowledge graph", zh: "知识图谱" })}</Link></li>
            <li><Link href="/timeline" className="text-text hover:text-amber transition-colors">{t({ en: "Timeline 1948–", zh: "时间线 1948–" })}</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h5 className="micro text-dim">{t({ en: "Archive", zh: "档案" })}</h5>
          <ul className="space-y-1">
            <li><Link href="/figures" className="text-text hover:text-amber transition-colors">{t({ en: "Figures", zh: "人物" })}</Link></li>
            <li><Link href="/wars" className="text-text hover:text-amber transition-colors">{t({ en: "AI ideological wars", zh: "AI 意识形态战争" })}</Link></li>
            <li><Link href="/essays" className="text-text hover:text-amber transition-colors">{t({ en: "Essays", zh: "文章" })}</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <h5 className="micro text-dim">{t({ en: "Series", zh: "系列" })}</h5>
          <ul className="space-y-1">
            <li><a href="https://psyverse.fun" className="text-text hover:text-amber transition-colors">psyverse.fun</a></li>
            <li><a href="https://psyverse.fun/atlas.html" className="text-text hover:text-amber transition-colors">{t({ en: "Atlas", zh: "图册" })}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[10.5px] uppercase tracking-[0.16em] text-dim">
          <span>{t({ en: "v01 · 2026", zh: "v01 · 2026" })}</span>
          <span>{t({ en: "Independent research", zh: "独立研究" })}</span>
          <span>{t({ en: "Bilingual EN · 中文", zh: "双语 EN · 中文" })}</span>
        </div>
      </div>
    </footer>
  );
}
