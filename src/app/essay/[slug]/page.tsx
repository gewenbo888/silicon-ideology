"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { ESSAY_BY_SLUG } from "@/data/essays";
import RelatedRail from "@/components/RelatedRail";

export default function EssayPage({ params }: { params: { slug: string } }) {
  const { t } = useLang();
  const e = ESSAY_BY_SLUG[params.slug];
  if (!e) notFound();

  // Split body into paragraphs on \n\n
  const paragraphs = t(e.body).split(/\n\n+/);

  return (
    <article>
      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-6 pt-12 pb-10 md:pt-16">
          <Link href="/essays" className="inline-block micro text-dim hover:text-amber transition-colors mb-6">
            ← {t({ en: "all essays", zh: "全部文章" })}
          </Link>
          <div className="micro text-violet mb-4">✠ {t({ en: "Essay", zh: "随笔" })}</div>
          <h1 className="font-display text-[clamp(36px,6vw,80px)] leading-[1] tracking-[-0.012em] text-text mb-3 text-balance max-w-4xl">
            {t(e.title)}
          </h1>
          <p className="font-display italic text-xl md:text-2xl text-muted leading-snug max-w-3xl text-pretty">
            {t(e.subtitle)}
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-[1400px] px-6 py-12 md:py-16 grid md:grid-cols-[1fr_280px] gap-12">
          <div className="space-y-7 max-w-3xl">
            <p className="font-display italic text-[20px] md:text-[22px] leading-snug text-text border-l-2 border-violet pl-5">
              {t(e.kernel)}
            </p>
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[16.5px] leading-[1.8] text-muted">
                {p}
              </p>
            ))}
          </div>
          <RelatedRail ideologies={e.related} />
        </div>
      </section>
    </article>
  );
}
