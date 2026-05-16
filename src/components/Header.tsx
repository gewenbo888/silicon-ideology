"use client";
import Link from "next/link";
import LangToggle from "./LangToggle";
import { useLang } from "@/lib/i18n";

export default function Header() {
  const { t, lang } = useLang();
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3 md:py-4">
        <Link href="/" className="group flex items-center gap-3">
          {/* Sigil */}
          <span className="relative inline-flex h-7 w-7 items-center justify-center">
            <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
              <g stroke="currentColor" strokeWidth="1.3" fill="none" className="text-amber">
                <circle cx="16" cy="16" r="9" opacity=".55" />
                <circle cx="16" cy="16" r="4.5" opacity=".4" />
              </g>
              <circle cx="16" cy="16" r="1.6" fill="currentColor" className="text-amber animate-pulse-soft" />
              <g stroke="currentColor" strokeWidth="0.65" opacity=".55" fill="none" className="text-patina">
                <line x1="16" y1="3.5" x2="16" y2="28.5" />
                <line x1="3.5" y1="16" x2="28.5" y2="16" />
              </g>
            </svg>
          </span>
          <div className="leading-tight">
            <div className="font-display text-[18px] md:text-[20px] tracking-tight text-text">
              {t({
                en: "Silicon Valley Ideological Universe",
                zh: "硅谷思想宇宙",
              })}
            </div>
            <div className="micro text-dim">
              {t({
                en: "v01 · A bilingual knowledge graph",
                zh: "v01 · 双语知识图谱",
              })}
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted md:flex">
          <Link href="/graph" className="hover:text-amber transition-colors">
            {t({ en: "Graph", zh: "图谱" })}
          </Link>
          <Link href="/timeline" className="hover:text-amber transition-colors">
            {t({ en: "Timeline", zh: "时间线" })}
          </Link>
          <Link href="/figures" className="hover:text-amber transition-colors">
            {t({ en: "Figures", zh: "人物" })}
          </Link>
          <Link href="/wars" className="hover:text-amber transition-colors">
            {t({ en: "Wars", zh: "战争" })}
          </Link>
          <Link href="/essays" className="hover:text-amber transition-colors">
            {t({ en: "Essays", zh: "文章" })}
          </Link>
        </nav>

        <LangToggle />
      </div>
    </header>
  );
}
