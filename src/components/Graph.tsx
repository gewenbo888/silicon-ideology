"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { GRAPH_POINTS, EDGES, GRAPH_POINT_BY_SLUG } from "@/data/graph";
import { IDEOLOGY_BY_SLUG } from "@/data/ideologies";
import { CLUSTER_META } from "@/lib/types";
import { clusterStroke } from "./Sigil";

const EDGE_STYLE = {
  lineage: { color: "rgba(255, 178, 89, 0.45)", dash: "" },
  kin:     { color: "rgba(95, 191, 176, 0.42)", dash: "" },
  conflict:{ color: "rgba(239, 107, 107, 0.55)", dash: "3 3" },
};

export default function Graph({ focusSlug }: { focusSlug?: string }) {
  const { t, lang } = useLang();
  const [hover, setHover] = useState<string | null>(null);

  const focused = hover ?? focusSlug ?? null;
  const connectedSet = useMemo(() => {
    if (!focused) return null;
    const s = new Set<string>([focused]);
    EDGES.forEach((e) => {
      if (e.from === focused) s.add(e.to);
      if (e.to === focused) s.add(e.from);
    });
    return s;
  }, [focused]);

  const dim = (slug: string) =>
    connectedSet ? (connectedSet.has(slug) ? "" : " opacity-25") : "";

  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 z-10 flex flex-wrap items-center gap-4 px-2 py-2 text-[11px] font-mono uppercase tracking-[0.12em] text-muted">
        {Object.entries(CLUSTER_META).map(([key, meta]) => (
          <div key={key} className="flex items-center gap-1.5">
            <span
              className="inline-block w-2 h-2 rounded-full"
              style={{ background: clusterStroke(key as keyof typeof CLUSTER_META) }}
            />
            <span>{t(meta as { en: string; zh: string })}</span>
          </div>
        ))}
        <div className="ml-auto flex items-center gap-3 text-dim normal-case tracking-normal">
          <span><span className="inline-block w-3 h-px align-middle" style={{ background: EDGE_STYLE.lineage.color }} /> {t({ en: "lineage", zh: "谱系" })}</span>
          <span><span className="inline-block w-3 h-px align-middle" style={{ background: EDGE_STYLE.kin.color }} /> {t({ en: "kin", zh: "亲缘" })}</span>
          <span><span className="inline-block w-3 h-px align-middle border-t border-dashed" style={{ borderColor: EDGE_STYLE.conflict.color }} /> {t({ en: "conflict", zh: "冲突" })}</span>
        </div>
      </div>

      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="w-full aspect-[16/10] md:aspect-[16/9] border border-line rounded-sm bg-bg-2/40"
      >
        {/* subtle grid lines */}
        <g stroke="rgba(155,148,170,0.06)" strokeWidth="0.08">
          {[10, 20, 30, 40, 50, 60, 70, 80, 90].map((v) => (
            <g key={v}>
              <line x1={v} y1="0" x2={v} y2="100" />
              <line x1="0" y1={v} x2="100" y2={v} />
            </g>
          ))}
        </g>

        {/* edges */}
        <g>
          {EDGES.map((e, i) => {
            const a = GRAPH_POINT_BY_SLUG[e.from];
            const b = GRAPH_POINT_BY_SLUG[e.to];
            if (!a || !b) return null;
            const style = EDGE_STYLE[e.kind || "kin"];
            const highlighted =
              !connectedSet ||
              (connectedSet.has(e.from) && connectedSet.has(e.to));
            return (
              <line
                key={i}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={style.color}
                strokeWidth={highlighted ? 0.18 : 0.08}
                strokeDasharray={style.dash || undefined}
                opacity={highlighted ? 1 : 0.25}
              />
            );
          })}
        </g>

        {/* nodes */}
        <g>
          {GRAPH_POINTS.map((p) => {
            const node = IDEOLOGY_BY_SLUG[p.slug];
            if (!node) return null;
            const color = clusterStroke(p.cluster);
            const isFocus = focused === p.slug;
            return (
              <g
                key={p.slug}
                className={`cursor-pointer transition-opacity ${dim(p.slug)}`}
                onMouseEnter={() => setHover(p.slug)}
                onMouseLeave={() => setHover(null)}
              >
                <Link href={`/ideology/${p.slug}`}>
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={isFocus ? 1.3 : 0.9}
                    fill={color}
                    opacity={isFocus ? 1 : 0.85}
                  />
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={isFocus ? 2.4 : 1.6}
                    fill="none"
                    stroke={color}
                    strokeWidth="0.12"
                    opacity={isFocus ? 0.7 : 0.35}
                  />
                  <text
                    x={p.x + 1.8}
                    y={p.y + 0.4}
                    fontSize={lang === "zh" ? "1.55" : "1.55"}
                    fill={isFocus ? "#e8e4d8" : "#9b94aa"}
                    fontFamily={lang === "zh" ? "Noto Sans SC, sans-serif" : "Manrope, sans-serif"}
                    style={{ fontWeight: 500, pointerEvents: "none" }}
                  >
                    {t(node.title)}
                  </text>
                </Link>
              </g>
            );
          })}
        </g>
      </svg>

      {/* hover detail */}
      {hover && (
        <div className="mt-3 border border-line bg-surface rounded-sm p-4">
          {(() => {
            const node = IDEOLOGY_BY_SLUG[hover];
            if (!node) return null;
            const meta = CLUSTER_META[node.cluster];
            return (
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="micro" style={{ color: clusterStroke(node.cluster) }}>
                      {t(meta as { en: string; zh: string })}
                    </span>
                    <span className="micro text-dim">· {node.era}</span>
                  </div>
                  <div className="font-display text-xl text-text">{t(node.title)}</div>
                  <div className="text-muted text-[14px] max-w-2xl">{t(node.subtitle)}</div>
                </div>
                <Link
                  href={`/ideology/${node.slug}`}
                  className="self-start text-[12px] font-mono uppercase tracking-[0.14em] text-amber hover:text-amber-2 transition-colors"
                >
                  {t({ en: "Read ↗", zh: "阅读 ↗" })}
                </Link>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
