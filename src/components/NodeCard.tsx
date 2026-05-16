"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import type { IdeologyNode } from "@/lib/types";
import { CLUSTER_META } from "@/lib/types";
import { clusterStroke } from "./Sigil";

export default function NodeCard({ node }: { node: IdeologyNode }) {
  const { t } = useLang();
  const meta = CLUSTER_META[node.cluster];
  const color = clusterStroke(node.cluster);
  return (
    <Link
      href={`/ideology/${node.slug}`}
      className="group relative block border border-line bg-bg-2/40 rounded-sm p-5 hover:bg-surface transition-colors hover:border-line-2"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <span
          className="font-mono text-[10.5px] uppercase tracking-[0.14em]"
          style={{ color }}
        >
          {t(meta as { en: string; zh: string })}
        </span>
        <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-dim">
          {node.era}
        </span>
      </div>
      <div className="font-display text-xl md:text-2xl text-text leading-tight mb-1.5 group-hover:text-amber transition-colors">
        {t(node.title)}
      </div>
      <div className="text-muted text-[14px] leading-relaxed">{t(node.subtitle)}</div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {node.concepts.slice(0, 3).map((c, i) => (
            <span
              key={i}
              className="text-[10.5px] font-mono px-1.5 py-0.5 border border-line-2 text-muted"
            >
              {t(c)}
            </span>
          ))}
        </div>
        <span className="text-amber font-mono text-[10.5px] uppercase tracking-[0.14em] opacity-0 group-hover:opacity-100 transition-opacity">
          {t({ en: "Open →", zh: "打开 →" })}
        </span>
      </div>
    </Link>
  );
}
