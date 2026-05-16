"use client";
import { useLang } from "@/lib/i18n";
import Graph from "@/components/Graph";

export default function GraphPage() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-12 md:py-16">
      <div className="mb-8">
        <div className="micro text-amber mb-2">{t({ en: "Universe map", zh: "宇宙地图" })}</div>
        <h1 className="font-display text-4xl md:text-6xl tracking-tight leading-tight text-text">
          {t({ en: "The full ideology graph.", zh: "完整的意识形态图谱。" })}
        </h1>
        <p className="text-muted text-[16px] leading-relaxed max-w-2xl mt-4">
          {t({
            en: "Hover any node to reveal its immediate lineage, kin, and conflicts. Click to open the node's dossier. Five clusters arranged left → right by intellectual genealogy.",
            zh: "把鼠标停在任一节点上，可显示其直接谱系、亲缘与冲突；点击则打开该节点的卷宗。五大分簇按智识谱系从左至右排列。",
          })}
        </p>
      </div>
      <Graph />
    </section>
  );
}
