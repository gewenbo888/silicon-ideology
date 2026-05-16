"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "en" | "zh";
export type Bi = { en: string; zh: string };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (s: Bi) => string;
};

const LangCtx = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (s) => s.en,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("siv:lang")) as Lang | null;
    if (saved === "zh" || saved === "en") {
      setLangState(saved);
      document.documentElement.lang = saved === "zh" ? "zh-CN" : "en";
      document.body.classList.toggle("lang-zh", saved === "zh");
    } else {
      // Auto-pick on first load
      const nav = navigator.language?.toLowerCase() || "";
      if (nav.startsWith("zh")) {
        setLangState("zh");
        document.documentElement.lang = "zh-CN";
        document.body.classList.add("lang-zh");
      }
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") {
      localStorage.setItem("siv:lang", l);
      document.documentElement.lang = l === "zh" ? "zh-CN" : "en";
      document.body.classList.toggle("lang-zh", l === "zh");
    }
  };

  const t = (s: Bi) => (s ? (lang === "zh" ? s.zh : s.en) : "");

  return (
    <LangCtx.Provider value={{ lang, setLang, t }}>{children}</LangCtx.Provider>
  );
}

export const useLang = () => useContext(LangCtx);
