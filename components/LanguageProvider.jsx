"use client";

import { createContext, useContext, useEffect, useState } from "react";

const LangContext = createContext({
  lang: "fr",
  setLang: () => {},
  toggle: () => {},
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr");

  useEffect(() => {
    const saved = localStorage.getItem("mm_lang");
    if (saved === "fr" || saved === "en") setLang(saved);
  }, []);

  const toggle = () =>
    setLang((prev) => {
      const next = prev === "fr" ? "en" : "fr";
      localStorage.setItem("mm_lang", next);
      return next;
    });

  const update = (next) => {
    localStorage.setItem("mm_lang", next);
    setLang(next);
  };

  return (
    <LangContext.Provider value={{ lang, setLang: update, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
