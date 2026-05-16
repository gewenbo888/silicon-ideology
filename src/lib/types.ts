import type { Bi } from "./i18n";

export type Cluster =
  | "hacker"
  | "venture"
  | "ai-belief"
  | "power"
  | "counter";

export const CLUSTER_META: Record<Cluster, { en: string; zh: string; color: string }> = {
  hacker:   { en: "The Hacker Lineage",       zh: "黑客谱系",       color: "patina" },
  venture:  { en: "The Venture Religion",     zh: "风险投资宗教",   color: "amber" },
  "ai-belief": { en: "AI Belief Systems",     zh: "AI 信仰体系",    color: "violet" },
  power:    { en: "Empire & Power",           zh: "帝国与权力",     color: "crimson" },
  counter:  { en: "Counter-Currents",         zh: "逆流与抗衡",     color: "muted" },
};

export type Section = {
  heading: Bi;
  body: Bi;
};

export type IdeologyNode = {
  slug: string;
  title: Bi;          // e.g. { en: "Hacker Culture", zh: "黑客文化" }
  subtitle: Bi;       // one-liner
  era: string;        // "1948–"
  cluster: Cluster;
  kernel: Bi;         // 80-120 word core paragraph
  sections: Section[]; // Origins, Doctrine, Lineage, Conflicts, Trajectory
  thinkers: string[]; // names
  concepts: Bi[];     // key terms
  related: string[];  // slugs of related ideologies
  figures?: string[]; // slugs of related figures
  wars?: string[];    // slugs of related wars
  essays?: string[];  // slugs of related essays
};

export type FigureNode = {
  slug: string;
  name: string;        // canonical (not translated; names stay as-is)
  nameZh?: string;     // optional CN rendering
  title: Bi;           // role/epithet
  born: string;        // "1971"
  affiliations: string[];
  kernel: Bi;
  worldview: Bi;
  style: Bi;
  products: Bi;
  influence: Bi;
  significance: Bi;
  ideologies: string[]; // slugs
  related: string[];    // figure slugs
  cluster: Cluster;
};

export type WarNode = {
  slug: string;
  title: Bi;
  subtitle: Bi;
  parties: Bi[];
  kernel: Bi;
  sections: Section[]; // Frontline, Doctrine A, Doctrine B, Stakes, Outlook
  ideologies: string[];
  figures: string[];
};

export type EssayNode = {
  slug: string;
  title: Bi;
  subtitle: Bi;
  kernel: Bi;
  body: Bi;         // one long paragraph or markdown-like block
  related: string[];
};

// Graph layout (for the knowledge map)
export type GraphPoint = {
  slug: string;
  x: number;  // 0-100
  y: number;  // 0-100
  cluster: Cluster;
};

export type Edge = { from: string; to: string; kind?: "lineage" | "conflict" | "kin" };
