"use client";

import Link from "next/link";
import { useLang } from "./LanguageProvider";
import { nav, footerStrings, footerPages } from "@/lib/strings";

const cloud = (w, h, parts) => (
  <div style={{ position: "relative", width: w, height: h, background: "white", borderRadius: 999 }}>
    {parts.map((p, i) => (
      <div
        key={i}
        style={{
          position: "absolute",
          ...p,
          background: "white",
          borderRadius: "50%",
        }}
      />
    ))}
  </div>
);

/**
 * Site footer.
 * `rich` (Home) adds the wave/cloud transition, newsletter, mission line & 6 socials.
 * Default footer is the compact dark variant used on every other page.
 */
export default function Footer({ rich = false, onNewsletter, socials: socialsProp }) {
  const { lang } = useLang();
  const t = nav[lang];
  const f = footerStrings[lang];

  const defaultSocials = rich
    ? ["Instagram", "TikTok", "YouTube", "LinkedIn", "Facebook", "Substack"]
    : ["LinkedIn", "Instagram", "Substack", "YouTube"];
  const socials = socialsProp || defaultSocials;

  const PagesCol = (
    <div>
      <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".14em", color: "rgba(255,255,255,.28)", marginBottom: 18, textTransform: "uppercase" }}>
        {f.pages}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {footerPages.map((p) => (
          <Link key={p.key} href={p.href} className="mm-footlink">{t[p.key]}</Link>
        ))}
      </div>
    </div>
  );

  const SocialCol = (
    <div>
      <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".14em", color: "rgba(255,255,255,.28)", marginBottom: 18, textTransform: "uppercase" }}>
        {f.social}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
        {socials.map((s) => (
          <a key={s} href="#" className="mm-footlink">{s}</a>
        ))}
      </div>
    </div>
  );

  const LegalCol = (
    <div>
      <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".14em", color: "rgba(255,255,255,.28)", marginBottom: 18, textTransform: "uppercase" }}>
        {f.legal}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
        {f.legalLinks.map(([href, label]) => (
          <Link key={href} href={href} className="mm-footlink">{label}</Link>
        ))}
      </div>
    </div>
  );

  const BrandCol = (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
        <img src="/uploads/logo.png" alt="Magic Minds" style={{ height: rich ? 36 : 34, width: "auto" }} />
        <span style={{ fontFamily: "'Grandstander',cursive", fontWeight: 800, fontSize: 17, color: "white" }}>Magic Minds</span>
      </div>
      <p style={{ fontSize: 14, color: "rgba(255,255,255,.35)", lineHeight: 1.6, marginBottom: rich ? 6 : 0, fontWeight: 600 }}>{f.tagline}</p>
      {rich && (
        <>
          <p style={{ fontSize: 13, color: "rgba(255,255,255,.22)", lineHeight: 1.5, marginBottom: 26, fontWeight: 600, fontStyle: "italic" }}>{f.mission}</p>
          <div style={{ display: "flex", background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 999, overflow: "hidden", maxWidth: 230 }}>
            <input type="email" placeholder="email@..." style={{ flex: 1, border: "none", background: "transparent", padding: "10px 14px", fontFamily: "'Nunito',sans-serif", fontSize: 13, color: "white", outline: "none", minWidth: 0, fontWeight: 600 }} />
            <button onClick={onNewsletter} style={{ background: "#4E63E6", border: "none", padding: "10px 16px", cursor: "pointer", fontSize: 15, borderRadius: "0 999px 999px 0", color: "white", fontWeight: 700 }}>→</button>
          </div>
        </>
      )}
    </div>
  );

  return (
    <footer style={{ background: "#0F1538", position: "relative", overflow: "hidden" }}>
      {rich && (
        <div style={{ position: "relative", height: 80, overflow: "hidden", background: "#1B2559" }}>
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, width: "100%", height: "100%" }}>
            <path d="M0,40 C360,78 1080,8 1440,48 L1440,80 L0,80 Z" fill="#0F1538"></path>
          </svg>
          <div style={{ position: "absolute", bottom: 16, left: "6%", opacity: 0.12, animation: "cld 9s ease-in-out infinite", pointerEvents: "none" }}>
            {cloud(72, 32, [
              { top: -12, left: 10, width: 28, height: 28 },
              { top: -18, left: 26, width: 36, height: 36 },
              { top: -8, right: 5, width: 22, height: 22 },
            ])}
          </div>
          <div style={{ position: "absolute", bottom: 16, right: "9%", opacity: 0.08, animation: "cld 12s ease-in-out 3s infinite", pointerEvents: "none" }}>
            {cloud(54, 24, [
              { top: -10, left: 8, width: 22, height: 22 },
              { top: -14, left: 22, width: 28, height: 28 },
            ])}
          </div>
        </div>
      )}

      <div style={{ padding: "56px 40px 36px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
              gap: rich ? 56 : 48,
              marginBottom: rich ? 52 : 44,
              alignItems: "start",
            }}
          >
            {BrandCol}
            {PagesCol}
            {SocialCol}
            {LegalCol}
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,.06)", paddingTop: 22, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,.22)", fontWeight: 600 }}>{f.rights}</span>
            <span style={{ fontSize: 14, color: "rgba(255,255,255,.38)", fontWeight: 700 }}>{f.future}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
