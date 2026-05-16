"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { IDEOLOGY_BY_SLUG } from "@/data/ideologies";
import { FIGURE_BY_SLUG } from "@/data/figures";
import { WAR_BY_SLUG } from "@/data/wars";
import { ESSAY_BY_SLUG } from "@/data/essays";
import { clusterStroke } from "./Sigil";

export default function RelatedRail({
  ideologies = [],
  figures = [],
  wars = [],
  essays = [],
}: {
  ideologies?: string[];
  figures?: string[];
  wars?: string[];
  essays?: string[];
}) {
  const { t } = useLang();
  return (
    <aside className="space-y-6 border-l border-line pl-6">
      {ideologies.length > 0 && (
        <div>
          <h5 className="micro text-dim mb-2">{t({ en: "Related ideologies", zh: "相关意识形态" })}</h5>
          <ul className="space-y-1.5">
            {ideologies.map((slug) => {
              const n = IDEOLOGY_BY_SLUG[slug];
              if (!n) return null;
              return (
                <li key={slug}>
                  <Link href={`/ideology/${slug}`} className="group flex items-baseline gap-2 hover:text-amber transition-colors">
                    <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: clusterStroke(n.cluster) }} />
                    <span className="text-[14px] text-text group-hover:text-amber">{t(n.title)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {figures.length > 0 && (
        <div>
          <h5 className="micro text-dim mb-2">{t({ en: "Figures", zh: "人物" })}</h5>
          <ul className="space-y-1.5">
            {figures.map((slug) => {
              const f = FIGURE_BY_SLUG[slug];
              if (!f) return null;
              return (
                <li key={slug}>
                  <Link href={`/figure/${slug}`} className="group flex items-baseline gap-2 hover:text-amber transition-colors">
                    <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: clusterStroke(f.cluster) }} />
                    <span className="text-[14px] text-text group-hover:text-amber">{f.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {wars.length > 0 && (
        <div>
          <h5 className="micro text-dim mb-2">{t({ en: "Wars", zh: "战争" })}</h5>
          <ul className="space-y-1.5">
            {wars.map((slug) => {
              const w = WAR_BY_SLUG[slug];
              if (!w) return null;
              return (
                <li key={slug}>
                  <Link href={`/war/${slug}`} className="group flex items-baseline gap-2 hover:text-amber transition-colors">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-crimson mt-1.5" />
                    <span className="text-[14px] text-text group-hover:text-amber">{t(w.title)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {essays.length > 0 && (
        <div>
          <h5 className="micro text-dim mb-2">{t({ en: "Essays", zh: "文章" })}</h5>
          <ul className="space-y-1.5">
            {essays.map((slug) => {
              const e = ESSAY_BY_SLUG[slug];
              if (!e) return null;
              return (
                <li key={slug}>
                  <Link href={`/essay/${slug}`} className="group flex items-baseline gap-2 hover:text-amber transition-colors">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-violet mt-1.5" />
                    <span className="text-[14px] text-text group-hover:text-amber">{t(e.title)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </aside>
  );
}
