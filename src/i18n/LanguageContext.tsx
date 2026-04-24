import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, TranslationKey } from "./translations";

type Lang = "de" | "en";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "de";
    const saved = localStorage.getItem("ezindu-lang");
    if (saved === "de" || saved === "en") return saved;
    return navigator.language.startsWith("de") ? "de" : "en";
  });

  useEffect(() => {
    localStorage.setItem("ezindu-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((l) => (l === "de" ? "en" : "de"));
  const t = (key: TranslationKey) => translations[lang][key] ?? translations.en[key] ?? String(key);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
