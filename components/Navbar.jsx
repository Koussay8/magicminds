"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import BurgerMenu from "./BurgerMenu";

/**
 * Top navigation bar — logo left, lang switcher + burger right.
 * The `cta` prop is accepted but unused (pages still pass it; removing it
 * from call sites is a separate cleanup step).
 */
export default function Navbar({ cta }) {
  const { lang, setLang } = useLang();

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 24px",
        pointerEvents: "none",
      }}
    >
      {/* ── Logo ── */}
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexShrink: 0,
          textDecoration: "none",
          color: "#1B2559",
          pointerEvents: "all",
        }}
      >
        <img
          src="/uploads/logo.png"
          alt="Magic Minds, retour accueil"
          style={{ height: 34, width: "auto" }}
        />
        <span
          style={{
            fontFamily: "'Grandstander', cursive",
            fontWeight: 800,
            fontSize: 17,
            color: "#1B2559",
          }}
        >
          Magic Minds
        </span>
      </Link>

      {/* ── Right box: lang switcher + burger ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          background: "#FBF6E9",
          border: "2px solid #1B2559",
          padding: "8px 14px",
          boxShadow: "2px 3px 0px rgba(27,37,89,0.15)",
          pointerEvents: "all",
          flexShrink: 0,
        }}
      >
        {/* Language switcher */}
        {["fr", "en"].map((locale) => (
          <button
            key={locale}
            onClick={() => setLang(locale)}
            style={{
              fontSize: 11,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              padding: "4px 8px",
              cursor: "pointer",
              border: "none",
              transition: "background .15s, color .15s",
              ...(locale === lang
                ? { background: "#1B2559", color: "#FBF6E9" }
                : { background: "transparent", color: "rgba(27,37,89,.45)" }),
            }}
          >
            {locale}
          </button>
        ))}

        {/* Burger (contains the overlay) */}
        <BurgerMenu />
      </div>
    </header>
  );
}
