"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/components/LanguageProvider";

const i18n = {
  fr: {
    cta: "Voir les publications",
    hero: {
      eyebrow: "LE LAB MAGIC MINDS",
      title: "La recherche au service des enfants",
      lede: "Nous publions nos travaux en libre accès pour faire avancer le débat public sur l'enfance connectée. Deux terrains d'étude : l'impact des écrans sur le développement, et la conception responsable de nos intelligences artificielles.",
      s1: "publications", s2: "libre accès", s3: "axes de recherche",
    },
    axes: {
      title: "Deux terrains de recherche",
      sub: "Une démarche scientifique rigoureuse, menée avec notre conseil consultatif d'experts.",
      a: { title: "Enfants & écrans", desc: "Études sur l'attention, le sommeil, les émotions et les apprentissages. Nous mesurons l'effet réel des contenus numériques sur les 6 à 11 ans pour fonder nos recommandations." },
      b: { title: "Création de nos IA", desc: "Comment construit-on une IA générative sûre pour l'enfant ? Nous documentons l'éthique, les garde-fous et les choix techniques derrière nos récits adaptatifs." },
    },
    lib: {
      eyebrow: "BIBLIOTHÈQUE ACADÉMIQUE",
      title: "Notes de recherche & Livres blancs",
      note: "Tous nos travaux de recherche sont publiés en libre accès pour faire avancer le débat public sur l'enfance connectée.",
    },
    filtersList: [
      { id: "all", label: "Tous" },
      { id: "note", label: "Notes de recherche" },
      { id: "lb", label: "Livres blancs" },
      { id: "pub", label: "Publications" },
    ],
    papers: [
      { cat: "note", tag: "NOTE DE RECHERCHE", tagBg: "#FF9E7A", title: "Surcharge d'attention & Écrans", desc: "Étude comparative de la résonance magnétique chez les enfants de 6 à 9 ans.", dl: "Télécharger le PDF (1.4 MB)" },
      { cat: "lb", tag: "LIVRE BLANC", tagBg: "#C9B6F2", title: "IA générative & Cognition", desc: "L'éthique logicielle dans la construction de récits adaptatifs interactifs.", dl: "Télécharger le PDF (2.8 MB)" },
      { cat: "pub", tag: "PUBLICATION", tagBg: "#B8E6C8", title: "Compétences psychosociales", desc: "Comment le jeu hybride physique-numérique favorise l'empathie à l'école primaire.", dl: "Télécharger le PDF (940 KB)" },
      { cat: "note", tag: "NOTE DE RECHERCHE", tagBg: "#FF9E7A", title: "Sommeil & exposition tardive", desc: "Effet de la lumière des écrans sur l'endormissement chez l'enfant de primaire.", dl: "Télécharger le PDF (1.1 MB)" },
      { cat: "lb", tag: "LIVRE BLANC", tagBg: "#C9B6F2", title: "Limites douces : un cadre", desc: "Modèle de design pour ralentir l'usage sans frustration ni mécanique addictive.", dl: "Télécharger le PDF (3.2 MB)" },
      { cat: "pub", tag: "PUBLICATION", tagBg: "#B8E6C8", title: "Créativité & temps d'écran", desc: "Mesurer la stimulation créative réelle de contenus éducatifs interactifs.", dl: "Télécharger le PDF (1.7 MB)" },
    ],
    method: {
      eyebrow: "NOTRE MÉTHODE",
      title: "Une science ouverte et transparente",
      sub: "Nous croyons qu'une recherche utile est une recherche partagée. Voici nos engagements.",
      m1t: "Libre accès", m1d: "Chaque papier est téléchargeable gratuitement, sans inscription.",
      m2t: "Méthodo publiée", m2d: "Protocoles, échantillons et limites détaillés dans chaque publication.",
      m3t: "Comité d'experts", m3d: "Travaux relus par notre board en neuroscience et santé mentale.",
    },
  },
  en: {
    cta: "See publications",
    hero: {
      eyebrow: "THE MAGIC MINDS LAB",
      title: "Research in service of children",
      lede: "We publish our work in open access to advance public debate on connected childhood. Two fields of study: the impact of screens on development, and the responsible design of our artificial intelligences.",
      s1: "publications", s2: "open access", s3: "research fields",
    },
    axes: {
      title: "Two fields of research",
      sub: "A rigorous scientific approach, conducted with our advisory board of experts.",
      a: { title: "Children & screens", desc: "Studies on attention, sleep, emotions and learning. We measure the real effect of digital content on 6 to 11 year-olds to ground our recommendations." },
      b: { title: "Building our AI", desc: "How do you build generative AI that's safe for children? We document the ethics, safeguards and technical choices behind our adaptive stories." },
    },
    lib: {
      eyebrow: "ACADEMIC LIBRARY",
      title: "Research notes & White papers",
      note: "All our research is published in open access to advance public debate on connected childhood.",
    },
    filtersList: [
      { id: "all", label: "All" },
      { id: "note", label: "Research notes" },
      { id: "lb", label: "White papers" },
      { id: "pub", label: "Publications" },
    ],
    papers: [
      { cat: "note", tag: "RESEARCH NOTE", tagBg: "#FF9E7A", title: "Attention overload & Screens", desc: "Comparative MRI study in children aged 6 to 9.", dl: "Download PDF (1.4 MB)" },
      { cat: "lb", tag: "WHITE PAPER", tagBg: "#C9B6F2", title: "Generative AI & Cognition", desc: "Software ethics in building interactive adaptive narratives.", dl: "Download PDF (2.8 MB)" },
      { cat: "pub", tag: "PUBLICATION", tagBg: "#B8E6C8", title: "Psychosocial skills", desc: "How hybrid physical-digital play fosters empathy in primary school.", dl: "Download PDF (940 KB)" },
      { cat: "note", tag: "RESEARCH NOTE", tagBg: "#FF9E7A", title: "Sleep & late exposure", desc: "Effect of screen light on sleep onset in primary-school children.", dl: "Download PDF (1.1 MB)" },
      { cat: "lb", tag: "WHITE PAPER", tagBg: "#C9B6F2", title: "Soft limits: a framework", desc: "A design model to slow usage without frustration or addictive mechanics.", dl: "Download PDF (3.2 MB)" },
      { cat: "pub", tag: "PUBLICATION", tagBg: "#B8E6C8", title: "Creativity & screen time", desc: "Measuring the real creative stimulation of interactive educational content.", dl: "Download PDF (1.7 MB)" },
    ],
    method: {
      eyebrow: "OUR METHOD",
      title: "Open and transparent science",
      sub: "We believe useful research is shared research. Here are our commitments.",
      m1t: "Open access", m1d: "Every paper is free to download, no sign-up required.",
      m2t: "Published method", m2d: "Protocols, samples and limitations detailed in every publication.",
      m3t: "Expert board", m3d: "Work reviewed by our neuroscience and mental-health board.",
    },
  },
};

const stats = [
  { num: "12", color: "#4E63E6", key: "s1" },
  { num: "100%", color: "#FF9E7A", key: "s2" },
  { num: "4", color: "#B8E6C8", key: "s3" },
];

const axesStyles = [
  { grad: "linear-gradient(155deg,#EEF2FF,#F6F2FF)", blob: "#4E63E6", icon: "#C9B6F2", emoji: "🧠", key: "a" },
  { grad: "linear-gradient(155deg,#EAF7EF,#F3FBF6)", blob: "#2ECC71", icon: "#B8E6C8", emoji: "🤖", key: "b" },
];

const methodItems = [
  { emoji: "🔓", t: "m1t", d: "m1d" },
  { emoji: "🔬", t: "m2t", d: "m2d" },
  { emoji: "👥", t: "m3t", d: "m3d" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
};

export default function LabPage() {
  const { lang } = useLang();
  const t = i18n[lang];
  const [filter, setFilter] = useState("all");

  const papers = t.papers.filter((p) => filter === "all" || p.cat === filter);

  return (
    <div style={{ fontFamily: "'Nunito',sans-serif", color: "#1B2559" }}>
      <Navbar cta={{ label: t.cta, onClick: () => scrollTo("mm-lib") }} />

      {/* HERO */}
      <section style={{ background: "linear-gradient(168deg,#DCF0FF 0%,#EDF5FF 35%,#FBF6E9 75%)", padding: "140px 40px 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 130, right: "10%", opacity: 0.5, animation: "cld 9s ease-in-out infinite", pointerEvents: "none" }}>
          <div style={{ position: "relative", width: 80, height: 36, background: "rgba(255,255,255,.9)", borderRadius: 999 }}>
            <div style={{ position: "absolute", top: -14, left: 12, width: 30, height: 30, background: "rgba(255,255,255,.9)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", top: -20, left: 28, width: 40, height: 40, background: "rgba(255,255,255,.9)", borderRadius: "50%" }} />
          </div>
        </div>
        <div style={{ maxWidth: 1160, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{ display: "inline-block", background: "#4E63E6", color: "white", padding: "6px 18px", borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: ".14em", marginBottom: 24, boxShadow: "3px 3px 0 rgba(27,37,89,.14)" }}>{t.hero.eyebrow}</div>
            <h1 style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(40px,7vw,84px)", fontWeight: 900, lineHeight: 0.94, letterSpacing: "-.02em", color: "#1B2559", marginBottom: 22, textShadow: "4px 4px 0 rgba(27,37,89,.08)" }}>{t.hero.title}</h1>
            <p style={{ fontSize: "clamp(16px,2vw,19px)", fontWeight: 600, color: "#5A6178", lineHeight: 1.7, textWrap: "pretty" }}>{t.hero.lede}</p>
          </div>
          <div style={{ display: "flex", gap: 40, marginTop: 40, flexWrap: "wrap" }}>
            {stats.map((s) => (
              <div key={s.key}>
                <div style={{ fontFamily: "'Grandstander',cursive", fontSize: 34, fontWeight: 900, color: s.color }}>{s.num}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#5A6178" }}>{t.hero[s.key]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TWO RESEARCH AXES */}
      <section style={{ background: "#FFFFFF", padding: "clamp(64px,8vw,120px) 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(28px,4vw,50px)", fontWeight: 900, color: "#1B2559", lineHeight: 1.04, marginBottom: 14, textShadow: "2px 2px 0 rgba(27,37,89,.07)" }}>{t.axes.title}</h2>
            <p style={{ fontSize: 17, fontWeight: 600, color: "#5A6178", maxWidth: 560, margin: "0 auto", lineHeight: 1.65, textWrap: "pretty" }}>{t.axes.sub}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {axesStyles.map((a) => (
              <div key={a.key} style={{ background: a.grad, borderRadius: 32, padding: "46px 42px", border: "1px solid rgba(27,37,89,.05)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -40, right: -40, width: 160, height: 160, background: a.blob, borderRadius: "50%", opacity: 0.08 }} />
                <div style={{ width: 60, height: 60, background: a.icon, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, marginBottom: 24, boxShadow: "3px 3px 0 rgba(27,37,89,.12)" }}>{a.emoji}</div>
                <h3 style={{ fontFamily: "'Grandstander',cursive", fontSize: 25, fontWeight: 800, color: "#1B2559", marginBottom: 12, lineHeight: 1.12 }}>{t.axes[a.key].title}</h3>
                <p style={{ fontSize: 15, fontWeight: 600, color: "#5A6178", lineHeight: 1.72, textWrap: "pretty" }}>{t.axes[a.key].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIBLIOTHÈQUE ACADÉMIQUE */}
      <section id="mm-lib" style={{ background: "#FBF6E9", padding: "clamp(64px,8vw,120px) 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40, marginBottom: 48, flexWrap: "wrap" }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".16em", color: "#4E63E6", marginBottom: 14 }}>{t.lib.eyebrow}</div>
              <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#1B2559", lineHeight: 1.04, textShadow: "2px 2px 0 rgba(27,37,89,.07)" }}>{t.lib.title}</h2>
            </div>
            <p style={{ fontSize: 14, fontWeight: 600, color: "#5A6178", maxWidth: 300, lineHeight: 1.6, textWrap: "pretty" }}>{t.lib.note}</p>
          </div>

          {/* Filters */}
          <div style={{ display: "flex", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
            {t.filtersList.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  style={{
                    background: active ? "#4E63E6" : "#FFFFFF",
                    color: active ? "#FFFFFF" : "#5A6178",
                    border: "1.5px solid " + (active ? "#4E63E6" : "rgba(27,37,89,.12)"),
                    borderRadius: 999,
                    padding: "9px 20px",
                    fontFamily: "'Nunito',sans-serif",
                    fontSize: 13,
                    fontWeight: 800,
                    cursor: "pointer",
                    transition: "all .15s",
                  }}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          {/* Cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {papers.map((p, i) => (
              <div key={p.title} className="mm-paper" style={{ background: "#FFFFFF", borderRadius: 24, padding: "32px 30px", boxShadow: "0 8px 24px rgba(27,37,89,.06)", border: "1px solid rgba(27,37,89,.05)", display: "flex", flexDirection: "column", gap: 14, transition: "transform .2s,box-shadow .2s" }}>
                <div style={{ display: "inline-block", background: p.tagBg, color: "#1B2559", padding: "4px 12px", borderRadius: 999, fontSize: 9, fontWeight: 800, letterSpacing: ".1em", alignSelf: "flex-start" }}>{p.tag}</div>
                <h3 style={{ fontSize: 19, fontWeight: 800, color: "#1B2559", lineHeight: 1.22 }}>{p.title}</h3>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#5A6178", lineHeight: 1.6, flex: 1, textWrap: "pretty" }}>{p.desc}</p>
                <a href="#" className="mm-paperdl" style={{ display: "flex", alignItems: "center", gap: 8, color: "#4E63E6", fontSize: 14, fontWeight: 800, textDecoration: "none", marginTop: 6 }}>{p.dl} <span style={{ fontSize: 16 }}>↓</span></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* METHOD / TRANSPARENCY BAND */}
      <section style={{ background: "#1B2559", padding: "clamp(64px,8vw,110px) 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -70, left: -50, width: 240, height: 240, background: "rgba(184,230,200,.06)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ maxWidth: 880, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", background: "#B8E6C8", color: "#1B2559", padding: "5px 16px", borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: ".14em", marginBottom: 24, boxShadow: "2px 2px 0 rgba(0,0,0,.2)" }}>{t.method.eyebrow}</div>
          <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(26px,4vw,46px)", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: 18 }}>{t.method.title}</h2>
          <p style={{ fontSize: 16, fontWeight: 600, color: "rgba(255,255,255,.55)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto 40px", textWrap: "pretty" }}>{t.method.sub}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, textAlign: "left" }}>
            {methodItems.map((m) => (
              <div key={m.t} style={{ background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.1)", borderRadius: 20, padding: 24 }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{m.emoji}</div>
                <h4 style={{ fontSize: 16, fontWeight: 800, color: "white", marginBottom: 6 }}>{t.method[m.t]}</h4>
                <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,.5)", lineHeight: 1.55 }}>{t.method[m.d]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
