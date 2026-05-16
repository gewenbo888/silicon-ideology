import type { GraphPoint, Edge } from "@/lib/types";

// Curated 2D layout (percent coordinates) for the ideology universe map.
// Designed as five rough vertical bands left→right: hacker, venture, ai-belief, power, counter.
export const GRAPH_POINTS: GraphPoint[] = [
  // ── Hacker lineage (top-to-bottom chronology, left band) ──
  { slug: "cybernetics",            x: 10, y: 12, cluster: "hacker" },
  { slug: "hacker-culture",         x: 14, y: 24, cluster: "hacker" },
  { slug: "personal-computing",     x: 9,  y: 36, cluster: "hacker" },
  { slug: "open-source",            x: 16, y: 48, cluster: "hacker" },
  { slug: "cypherpunks",            x: 11, y: 60, cluster: "hacker" },
  { slug: "crypto-anarchism",       x: 17, y: 72, cluster: "hacker" },
  { slug: "bitcoin",                x: 9,  y: 82, cluster: "hacker" },
  { slug: "ethereum-and-web3",      x: 18, y: 88, cluster: "hacker" },
  { slug: "network-states",         x: 12, y: 95, cluster: "hacker" },

  // ── Venture religion (second band) ──
  { slug: "founder-mythology",       x: 32, y: 28, cluster: "venture" },
  { slug: "venture-capital-philosophy", x: 36, y: 44, cluster: "venture" },
  { slug: "startup-theology",        x: 30, y: 58, cluster: "venture" },
  { slug: "techno-optimism",         x: 36, y: 74, cluster: "venture" },

  // ── AI belief (center band) ──
  { slug: "transhumanism",           x: 52, y: 16, cluster: "ai-belief" },
  { slug: "rationalism",             x: 56, y: 32, cluster: "ai-belief" },
  { slug: "effective-altruism",      x: 50, y: 48, cluster: "ai-belief" },
  { slug: "ai-safety",               x: 56, y: 64, cluster: "ai-belief" },
  { slug: "effective-accelerationism", x: 50, y: 80, cluster: "ai-belief" },
  { slug: "ai-religion",             x: 56, y: 92, cluster: "ai-belief" },

  // ── Power (right band) ──
  { slug: "techno-libertarianism",   x: 76, y: 24, cluster: "power" },
  { slug: "platform-capitalism",     x: 80, y: 42, cluster: "power" },
  { slug: "military-tech-alliance",  x: 74, y: 60, cluster: "power" },
  { slug: "chip-geopolitics",        x: 80, y: 76, cluster: "power" },
  { slug: "ai-civilization-competition", x: 74, y: 90, cluster: "power" },

  // ── Counter (far right, single moon) ──
  { slug: "counter-currents",        x: 93, y: 50, cluster: "counter" },
];

export const GRAPH_POINT_BY_SLUG: Record<string, GraphPoint> = Object.fromEntries(
  GRAPH_POINTS.map((p) => [p.slug, p])
);

// Edges in the master knowledge graph
export const EDGES: Edge[] = [
  // Hacker lineage chain
  { from: "cybernetics",        to: "hacker-culture",        kind: "lineage" },
  { from: "hacker-culture",     to: "personal-computing",    kind: "lineage" },
  { from: "hacker-culture",     to: "open-source",           kind: "lineage" },
  { from: "open-source",        to: "cypherpunks",           kind: "kin" },
  { from: "cypherpunks",        to: "crypto-anarchism",      kind: "lineage" },
  { from: "crypto-anarchism",   to: "bitcoin",               kind: "lineage" },
  { from: "bitcoin",            to: "ethereum-and-web3",     kind: "kin" },
  { from: "crypto-anarchism",   to: "network-states",        kind: "lineage" },
  { from: "ethereum-and-web3",  to: "network-states",        kind: "kin" },

  // Hacker → venture cross-links
  { from: "personal-computing", to: "founder-mythology",     kind: "kin" },
  { from: "hacker-culture",     to: "startup-theology",      kind: "kin" },

  // Venture religion chain
  { from: "founder-mythology",  to: "venture-capital-philosophy", kind: "lineage" },
  { from: "venture-capital-philosophy", to: "startup-theology", kind: "kin" },
  { from: "venture-capital-philosophy", to: "techno-optimism",   kind: "lineage" },
  { from: "startup-theology",   to: "techno-optimism",       kind: "kin" },

  // Venture → AI belief
  { from: "techno-optimism",    to: "effective-accelerationism", kind: "lineage" },
  { from: "founder-mythology",  to: "ai-religion",           kind: "kin" },

  // Cybernetics → AI belief
  { from: "cybernetics",        to: "transhumanism",         kind: "lineage" },
  { from: "cybernetics",        to: "rationalism",           kind: "lineage" },

  // AI belief chain
  { from: "transhumanism",      to: "rationalism",           kind: "kin" },
  { from: "rationalism",        to: "effective-altruism",    kind: "lineage" },
  { from: "rationalism",        to: "ai-safety",             kind: "lineage" },
  { from: "effective-altruism", to: "ai-safety",             kind: "kin" },
  { from: "ai-safety",          to: "effective-accelerationism", kind: "conflict" },
  { from: "effective-altruism", to: "effective-accelerationism", kind: "conflict" },
  { from: "effective-accelerationism", to: "ai-religion",    kind: "kin" },
  { from: "transhumanism",      to: "ai-religion",           kind: "lineage" },

  // AI belief → power
  { from: "ai-safety",          to: "military-tech-alliance", kind: "conflict" },
  { from: "ai-religion",        to: "ai-civilization-competition", kind: "kin" },

  // Power chain
  { from: "techno-libertarianism", to: "platform-capitalism", kind: "kin" },
  { from: "techno-libertarianism", to: "military-tech-alliance", kind: "kin" },
  { from: "military-tech-alliance", to: "chip-geopolitics",  kind: "kin" },
  { from: "chip-geopolitics",   to: "ai-civilization-competition", kind: "lineage" },

  // Venture ↔ Power
  { from: "techno-optimism",    to: "techno-libertarianism", kind: "kin" },
  { from: "venture-capital-philosophy", to: "platform-capitalism", kind: "kin" },
  { from: "founder-mythology",  to: "platform-capitalism",   kind: "kin" },

  // Crypto ↔ Power
  { from: "network-states",     to: "techno-libertarianism", kind: "kin" },
  { from: "crypto-anarchism",   to: "techno-libertarianism", kind: "kin" },

  // Counter currents — opposed to everything
  { from: "counter-currents",   to: "platform-capitalism",   kind: "conflict" },
  { from: "counter-currents",   to: "techno-optimism",       kind: "conflict" },
  { from: "counter-currents",   to: "ai-safety",             kind: "kin" },
  { from: "counter-currents",   to: "effective-accelerationism", kind: "conflict" },
];

// Timeline anchor years (used by the timeline view)
export const TIMELINE: { year: number; slug: string }[] = [
  { year: 1948, slug: "cybernetics" },
  { year: 1959, slug: "hacker-culture" },
  { year: 1975, slug: "personal-computing" },
  { year: 1983, slug: "open-source" },
  { year: 1988, slug: "crypto-anarchism" },
  { year: 1992, slug: "cypherpunks" },
  { year: 1995, slug: "techno-libertarianism" },
  { year: 2000, slug: "rationalism" }, // anchored at LessWrong-era convergence
  { year: 2003, slug: "military-tech-alliance" },
  { year: 2004, slug: "platform-capitalism" },
  { year: 2005, slug: "startup-theology" },
  { year: 2008, slug: "bitcoin" },
  { year: 2009, slug: "effective-altruism" },
  { year: 2011, slug: "techno-optimism" },
  { year: 2015, slug: "ethereum-and-web3" },
  { year: 2018, slug: "chip-geopolitics" },
  { year: 2018, slug: "ai-civilization-competition" },
  { year: 2022, slug: "network-states" },
  { year: 2022, slug: "effective-accelerationism" },
  { year: 2024, slug: "ai-religion" },
  { year: 2024, slug: "transhumanism" },
  { year: 1976, slug: "founder-mythology" },
  { year: 2000, slug: "ai-safety" },
  { year: 1985, slug: "counter-currents" },
];
