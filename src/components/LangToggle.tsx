"use client";
import { useLang } from "@/lib/i18n";

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="flex items-center gap-0 border border-line rounded-sm overflow-hidden font-mono text-[11px] tracking-[0.12em] uppercase">
      <button
        onClick={() => setLang("en")}
        className={`px-2.5 py-1 transition-colors ${
          lang === "en" ? "bg-amber text-bg" : "text-muted hover:text-text"
        }`}
        aria-label="English"
      >
        EN
      </button>
      <button
        onClick={() => setLang("zh")}
        className={`px-2.5 py-1 transition-colors ${
          lang === "zh" ? "bg-amber text-bg" : "text-muted hover:text-text"
        }`}
        aria-label="中文"
      >
        中文
      </button>
    </div>
  );
}
