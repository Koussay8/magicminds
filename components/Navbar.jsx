"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLang } from "./LanguageProvider";
import { nav, navItems } from "@/lib/strings";

/**
 * Top navigation capsule, identical across every page.
 * Optional `cta` overrides the right-hand button:
 *   { label?, href?, onClick? }
 */
export default function Navbar({ cta }) {
  const { lang, toggle } = useLang();
  const pathname = usePathname();
  const t = nav[lang];

  const isActive = (href) => {
    const base = href.split("#")[0];
    if (base === "/") return pathname === "/";
    return pathname === base || pathname.startsWith(base + "/");
  };

  const ctaLabel = cta?.label ?? t.cta;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        padding: "14px 24px",
        pointerEvents: "none",
      }}
    >
      <nav
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          background: "rgba(255,255,255,.96)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderRadius: 999,
          boxShadow:
            "0 8px 32px rgba(27,37,89,.1),0 2px 8px rgba(27,37,89,.06)",
          padding: "10px 12px 10px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 20,
          pointerEvents: "all",
        }}
      >
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexShrink: 0,
            textDecoration: "none",
            color: "#1B2559",
          }}
        >
          <img
            src="/uploads/logo.png"
            alt="Magic Minds, retour accueil"
            style={{ height: 34, width: "auto" }}
          />
          <span
            style={{
              fontFamily: "'Grandstander',cursive",
              fontWeight: 800,
              fontSize: 17,
            }}
          >
            Magic Minds
          </span>
        </Link>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {navItems.map((it) => (
            <Link
              key={it.key}
              href={it.href}
              className={"mm-navlink" + (isActive(it.href) ? " active" : "")}
            >
              {t[it.key]}
            </Link>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexShrink: 0,
          }}
        >
          <button onClick={toggle} className="mm-langbtn">
            {lang === "fr" ? "EN" : "FR"}
          </button>
          {cta?.onClick ? (
            <button onClick={cta.onClick} className="mm-cta">
              {ctaLabel}
            </button>
          ) : (
            <Link href={cta?.href ?? "/"} className="mm-cta">
              {ctaLabel}
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
