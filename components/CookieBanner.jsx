"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLang } from "./LanguageProvider";

const T = {
  fr: {
    text: "Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic. Vous pouvez les accepter ou les refuser à tout moment.",
    link: "Politique de confidentialité & cookies",
    accept: "Accepter",
    decline: "Refuser",
  },
  en: {
    text: "We use cookies to improve your experience and analyse our traffic. You can accept or decline at any time.",
    link: "Privacy & cookie policy",
    accept: "Accept",
    decline: "Decline",
  },
};

export default function CookieBanner() {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("mm_cookie_v2")) setVisible(true);
  }, []);

  if (!visible) return null;
  const t = T[lang];
  const hide = () => {
    setVisible(false);
    localStorage.setItem("mm_cookie_v2", "1");
  };

  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 300, background: "#FFFFFF", borderTop: "2px solid rgba(27,37,89,.07)", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, flexWrap: "wrap", boxShadow: "0 -4px 24px rgba(27,37,89,.07)" }}>
      <p style={{ fontSize: 14, color: "#5A6178", lineHeight: 1.55, maxWidth: 640, fontWeight: 600 }}>
        {t.text}{" "}
        <Link href="/legal#cookies" style={{ color: "#4E63E6", fontWeight: 800, textDecoration: "underline" }}>
          {t.link}
        </Link>
      </p>
      <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
        <button onClick={hide} style={{ background: "#4E63E6", color: "white", border: "none", padding: "10px 24px", borderRadius: 999, fontFamily: "'Nunito',sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer", boxShadow: "3px 3px 0 rgba(27,37,89,.15)" }}>
          {t.accept}
        </button>
        <button onClick={hide} style={{ background: "transparent", color: "#5A6178", border: "1.5px solid rgba(27,37,89,.18)", padding: "10px 24px", borderRadius: 999, fontFamily: "'Nunito',sans-serif", fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
          {t.decline}
        </button>
      </div>
    </div>
  );
}
