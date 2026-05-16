"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { WARS } from "@/data/wars";

export default function WarsIndex() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-12 md:py-16">
      <div className="mb-10">
        <div className="micro text-crimson mb-2 flex items-center gap-2">
          <span className="inline-block w-2 h-2 bg-crimson animate-pulse-soft" />
          {t({ en: "Active conflicts", zh: "进行中的冲突" })}
        </div>
        <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-tight text-text">
          {t({ en: "AI ideological wars.", zh: "AI 意识形态战争。" })}
        </h1>
        <p className="text-muted text-[16px] leading-relaxed max-w-2xl mt-4">
          {t({
            en: "Each entry maps one conflict — its frontline, the doctrines of each party, what is actually at stake, and the most likely 2027 endpoint. The wars are not metaphors; they are operational disagreements with budgets, coalitions, and casualties.",
            zh: "每一个条目映射一场冲突——前线、各方教义、真正的赌注，以及 2027 年最可能的结局。这些战争不是比喻；它们是带预算、带联盟、带伤亡的运营级分歧。",
          })}
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {WARS.map((w) => (
          <Link
            key={w.slug}
            href={`/war/${w.slug}`}
            className="group block border border-line bg-bg-2/40 hover:bg-surface hover:border-crimson/40 p-6 transition-colors"
          >
            <div className="micro text-crimson mb-2">{t({ en: "Conflict", zh: "冲突" })}</div>
            <div className="font-display text-2xl md:text-3xl text-text group-hover:text-crimson transition-colors leading-tight mb-2">
              {t(w.title)}
            </div>
            <div className="text-muted text-[14px] leading-relaxed mb-4">{t(w.subtitle)}</div>
            <div className="space-y-1.5">
              {w.parties.map((p, i) => (
                <div key={i} className="text-[13px] text-text font-mono">
                  <span className="text-dim">› </span>
                  {t(p)}
                </div>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
