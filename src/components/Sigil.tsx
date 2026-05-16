"use client";
import type { Cluster } from "@/lib/types";

const CLUSTER_COLORS: Record<Cluster, string> = {
  hacker: "text-patina",
  venture: "text-amber",
  "ai-belief": "text-violet",
  power: "text-crimson",
  counter: "text-muted",
};

export function Sigil({ cluster, size = 22 }: { cluster: Cluster; size?: number }) {
  const cls = CLUSTER_COLORS[cluster];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={cls}
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.1" fill="none" opacity=".7">
        <circle cx="16" cy="16" r="10" />
        <circle cx="16" cy="16" r="5" />
      </g>
      <circle cx="16" cy="16" r="1.6" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="0.55" fill="none" opacity=".55">
        <line x1="16" y1="3" x2="16" y2="29" />
        <line x1="3" y1="16" x2="29" y2="16" />
      </g>
    </svg>
  );
}

export function clusterColor(c: Cluster) {
  return CLUSTER_COLORS[c];
}

export function clusterStroke(c: Cluster) {
  return {
    hacker: "#5fbfb0",
    venture: "#ffb259",
    "ai-belief": "#a584d6",
    power: "#ef6b6b",
    counter: "#9b94aa",
  }[c];
}
