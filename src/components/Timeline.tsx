"use client";
import Link from "next/link";
import { useMemo } from "react";
import { useLang } from "@/lib/i18n";
import { TIMELINE } from "@/data/graph";
import { IDEOLOGY_BY_SLUG } from "@/data/ideologies";
import { CLUSTER_META } from "@/lib/types";
import { clusterStroke } from "./Sigil";

export default function Timeline() {
  const { t } = useLang();

  const ordered = useMemo(() => {
    return [...TIMELINE].sort((a, b) => a.year - b.year);
  }, []);

  const decades = useMemo(() => {
    const buckets: Record<number, typeof ordered> = {};
    ordered.forEach((row) => {
      const d = Math.floor(row.year / 10) * 10;
      if (!buckets[d]) buckets[d] = [];
      buckets[d].push(row);
    });
    return Object.entries(buckets)
      .map(([d, rows]) => ({ decade: Number(d), rows }))
      .sort((a, b) => a.decade - b.decade);
  }, [ordered]);

  return (
    <div className="space-y-10">
      {decades.map(({ decade, rows }) => (
        <section key={decade} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-6">
          <div className="md:sticky md:top-24 md:self-start">
            <div className="font-display text-3xl md:text-4xl text-amber leading-none">
              {decade}s
            </div>
            <div className="micro text-dim mt-1">
              {decade}–{decade + 9}
            </div>
          </div>
          <ol className="border-l border-line pl-6 space-y-5">
            {rows.map((row, i) => {
              const node = IDEOLOGY_BY_SLUG[row.slug];
              if (!node) return null;
              const meta = CLUSTER_META[node.cluster];
              const color = clusterStroke(node.cluster);
              return (
                <li key={`${row.slug}-${i}`} className="relative">
                  <span
                    className="absolute -left-[31px] top-1.5 inline-block w-2.5 h-2.5 rounded-full ring-2 ring-bg"
                    style={{ background: color }}
                  />
                  <Link
                    href={`/ideology/${row.slug}`}
                    className="group block hover:bg-surface/60 -ml-4 pl-4 py-2 transition-colors rounded-sm"
                  >
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="font-mono text-[11px] text-amber">{row.year}</span>
                      <span
                        className="font-mono text-[10.5px] uppercase tracking-[0.14em]"
                        style={{ color }}
                      >
                        {t(meta as { en: string; zh: string })}
                      </span>
                    </div>
                    <div className="font-display text-xl text-text group-hover:text-amber transition-colors mt-0.5">
                      {t(node.title)}
                    </div>
                    <div className="text-muted text-[14px] mt-0.5">{t(node.subtitle)}</div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </section>
      ))}
    </div>
  );
}
