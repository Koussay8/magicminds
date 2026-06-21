"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import CosmoCanvas from "@/components/CosmoCanvas";
import { useLang } from "@/components/LanguageProvider";

const i18n = {
  fr: {
    hero: {
      badge: "12 000+ familles pionnières",
      line1: "MAGIC MINDS",
      line2: "Éveille",
      line3: "les esprits curieux.",
      sub: "Le NutriScore pour les écrans, une application qui guide, protège et stimule la créativité de vos enfants, de 6 à 11 ans.",
      cta: "Rejoindre la liste d'attente →",
      hint: "Bientôt sur App Store & Google Play",
    },
    partners: { title: "Ils parlent de nous" },
    how: {
      eyebrow: "COMMENT ÇA MARCHE",
      title: "Trois piliers, un seul objectif",
      sub: "Transformer chaque instant d'écran en moment d'éveil et de créativité.",
      pillars: [
        { emoji: "🛡️", color: "#B8E6C8", tag: "SAFE PLACE", title: "Safe Place", desc: "Zéro publicité, zéro algorithme addictif. Un espace numérique entièrement pensé pour le développement sain de l'enfant." },
        { emoji: "🌿", color: "#C9B6F2", tag: "LIMITES DOUCES", title: "Limites douces", desc: "L'app prévient et ralentit en douceur. Les enfants apprennent naturellement à gérer leur temps d'écran, sans frustration." },
        { emoji: "🌉", color: "#FF9E7A", tag: "PONT VERS LE RÉEL", title: "Pont vers le réel", desc: "Des défis créatifs et activités hors écran pour prolonger l'aventure dans la vraie vie." },
      ],
    },
    video: {
      label: "MOT DU FONDATEUR",
      title: "Pourquoi j'ai créé Magic Minds",
      sub: "Une vision née d'une conviction simple : les enfants méritent mieux que des écrans qui les abrutissent.",
      duration: "▶  3 min 42",
    },
    memo: {
      label: "NOTRE MISSION",
      quote: "Nous croyons que chaque enfant mérite des écrans qui l'éveillent plutôt que de l'endormir.",
      author: "Lorenzo Neft",
      role: "Cofondateur & CEO · Magic Minds",
    },
    faq: {
      title: "Questions fréquentes",
      items: [
        { q: "Qu'est-ce que Magic Minds ?", a: "Magic Minds est une application éducative pour les enfants de 6 à 11 ans qui transforme le temps d'écran en moments d'apprentissage, d'éveil émotionnel et de créativité. Comme un NutriScore pour les écrans, nous évaluons et guidons la consommation de contenus numériques." },
        { q: "Pour quel âge est conçue l'application ?", a: "L'application est conçue pour les 6 à 11 ans, avec des modules adaptés par tranche d'âge et un tableau de bord parental pour suivre les progrès." },
        { q: "Comment fonctionne le NutriScore des écrans ?", a: "Notre algorithme analyse chaque contenu selon 5 critères validés scientifiquement : valeur éducative, impact émotionnel, stimulation créative, durée recommandée et appropriation à l'âge. Chaque contenu reçoit une note de A à E." },
        { q: "Quand l'application sera-t-elle disponible ?", a: "Magic Minds est en bêta privée. Rejoignez la liste d'attente pour être parmi les premiers à y accéder et bénéficier d'un accès étendu gratuit." },
        { q: "Magic Minds remplace-t-il le contrôle parental ?", a: "Non, Magic Minds complète le contrôle parental en ajoutant une dimension qualitative. Pas seulement « combien de temps », mais « quel contenu » et « quel impact » sur le développement de votre enfant." },
      ],
      ctaText: "Une autre question ? Contactez-nous ou découvrez l'app.",
      ctaBtn: "Voir sur l'App Store →",
    },
    waitlist: {
      label: "ACCÈS ANTICIPÉ EXCLUSIF",
      title: "Rejoignez l'aventure !",
      sub: "Faites partie des 12 000+ familles pionnières d'un numérique sain. Accédez à la bêta privée et recevez nos guides de création gratuits.",
      placeholder: "votre@email.com",
      cta: "REJOINDRE",
    },
    popup: {
      label: "ACCÈS ANTICIPÉ",
      title: "Rejoignez l'aventure !",
      sub: "Soyez parmi les premiers à découvrir Magic Minds. Accédez à la bêta privée et aidez-nous à construire le futur de l'éducation numérique.",
      placeholder: "votre@email.com",
      cta: "Rejoindre →",
    },
  },
  en: {
    hero: {
      badge: "12,000+ pioneer families",
      line1: "MAGIC MINDS",
      line2: "Sparks",
      line3: "curious minds.",
      sub: "The NutriScore for screens, an app that guides, protects and stimulates your children's creativity, ages 6 to 11.",
      cta: "Join the waitlist →",
      hint: "Coming soon on App Store & Google Play",
    },
    partners: { title: "As seen in" },
    how: {
      eyebrow: "HOW IT WORKS",
      title: "Three pillars, one goal",
      sub: "Transform every screen moment into a learning and creativity opportunity.",
      pillars: [
        { emoji: "🛡️", color: "#B8E6C8", tag: "SAFE PLACE", title: "Safe Place", desc: "Zero ads, zero addictive algorithms. A digital space entirely designed for healthy child development." },
        { emoji: "🌿", color: "#C9B6F2", tag: "SOFT LIMITS", title: "Soft limits", desc: "The app gently warns and slows down. Children naturally learn to manage their screen time without frustration." },
        { emoji: "🌉", color: "#FF9E7A", tag: "BRIDGE TO REAL LIFE", title: "Bridge to real life", desc: "Creative challenges and offline activities to extend the adventure into the real world." },
      ],
    },
    video: {
      label: "FOUNDER'S MESSAGE",
      title: "Why I created Magic Minds",
      sub: "A vision born from a simple conviction: children deserve more than screens that numb them.",
      duration: "▶  3 min 42",
    },
    memo: {
      label: "OUR MISSION",
      quote: "We believe every child deserves screens that awaken rather than numb.",
      author: "Lorenzo Neft",
      role: "Co-founder & CEO · Magic Minds",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "What is Magic Minds?", a: "Magic Minds is an educational app for children aged 6 to 11 that transforms screen time into moments of learning, emotional awareness and creativity. Like a NutriScore for screens, we evaluate and guide digital content consumption." },
        { q: "What age group is it designed for?", a: "The app is designed for children aged 6 to 11, with age-appropriate modules and a full parental dashboard to track progress." },
        { q: "How does the screen NutriScore work?", a: "Our algorithm analyses every piece of content across 5 scientifically validated criteria: educational value, emotional impact, creative stimulation, recommended duration and age appropriateness. Each content receives a grade from A to E." },
        { q: "When will the app be available?", a: "Magic Minds is currently in private beta. Join the waitlist to be among the first to access it and benefit from extended free access during the launch phase." },
        { q: "Does Magic Minds replace parental controls?", a: "No, Magic Minds complements parental controls by adding a qualitative dimension. Not just 'how much time', but 'what content' and 'what impact' on your child's development." },
      ],
      ctaText: "Another question? Contact us or discover the app.",
      ctaBtn: "See on App Store →",
    },
    waitlist: {
      label: "EXCLUSIVE EARLY ACCESS",
      title: "Join the adventure!",
      sub: "Join 12,000+ pioneer families pioneering healthy digital habits. Access the private beta and receive our free creation guides.",
      placeholder: "your@email.com",
      cta: "JOIN",
    },
    popup: {
      label: "EARLY ACCESS",
      title: "Join the adventure!",
      sub: "Be among the first to discover Magic Minds. Access the private beta and help us build the future of digital education.",
      placeholder: "your@email.com",
      cta: "Join →",
    },
  },
};

const characters = [
  { src: "/uploads/Dio-0401.png", alt: "Dio, le chien-mouton rose, personnage du Chimera World", w: 94, anim: "flt2 4.2s ease-in-out .7s infinite", filter: "drop-shadow(0 8px 16px rgba(244,114,114,.3))", mb: 18, label: "DIO" },
  { src: "/uploads/Liora-0401.png", alt: "Liora, la chèvre ailée violette, personnage du Chimera World", w: 92, anim: "flt3 3.8s ease-in-out 1.1s infinite", filter: "drop-shadow(0 8px 16px rgba(201,182,242,.42))", mb: 36, label: "LIORA" },
  { src: "/uploads/Lumi-0402.png", alt: "Lumi, l'oiseau bleu, personnage du Chimera World", w: 88, anim: "flt5 3.6s ease-in-out .4s infinite", filter: "drop-shadow(0 8px 16px rgba(78,99,230,.25))", mb: 10, label: "LUMI" },
];
const charactersRight = [
  { src: "/uploads/Nia-0401.png", alt: "Nia, le tatou orange, personnage du Chimera World", w: 92, anim: "flt4 4.5s ease-in-out .3s infinite", filter: "drop-shadow(0 8px 16px rgba(255,158,122,.32))", mb: 12, label: "NIA" },
  { src: "/uploads/Pico-0401.png", alt: "Pico, le lion roux, personnage du Chimera World", w: 98, anim: "flt2 4s ease-in-out 1.4s infinite", filter: "drop-shadow(0 8px 16px rgba(232,90,60,.32))", mb: 34, label: "PICO" },
  { src: "/uploads/Rilo-0402.png", alt: "Rilo, l'ours vert, personnage du Chimera World", w: 94, anim: "flt3 3.7s ease-in-out 1.8s infinite", filter: "drop-shadow(0 8px 16px rgba(46,204,113,.3))", mb: 6, label: "RILO" },
];

const partners = [
  ["Le Monde", "#B8E6C8"], ["BFM TV", "#C9B6F2"], ["Télérama", "#FF9E7A"],
  ["Forbes France", "#FFD83D"], ["Éducation Nationale", "#4E63E6"], ["BPI France", "#F7C8DD"],
  ["L'Obs", "#B8E6C8"], ["TechCrunch", "#C9B6F2"],
];

const chip = { background: "rgba(27,37,89,.06)", padding: "3px 10px", borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: ".1em", color: "#5A6178" };

function Cloud({ w, h, parts, style }) {
  return (
    <div style={style}>
      <div style={{ position: "relative", width: w, height: h, background: "rgba(255,255,255,.9)", borderRadius: 999, boxShadow: "0 4px 16px rgba(27,37,89,.05)" }}>
        {parts.map((p, i) => (
          <div key={i} style={{ position: "absolute", ...p, background: "rgba(255,255,255,.9)", borderRadius: "50%" }} />
        ))}
      </div>
    </div>
  );
}

function Character({ c }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginBottom: c.mb }}>
      <img src={c.src} alt={c.alt} style={{ width: c.w, height: "auto", animation: c.anim, filter: c.filter }} />
      <div style={chip}>{c.label}</div>
    </div>
  );
}

export default function HomePage() {
  const { lang } = useLang();
  const t = i18n[lang];

  const [popupVisible, setPopupVisible] = useState(false);
  const [faqOpen, setFaqOpen] = useState(-1);

  useEffect(() => {
    if (localStorage.getItem("mm_popup_v2")) return;
    const timer = setTimeout(() => {
      setPopupVisible(true);
      localStorage.setItem("mm_popup_v2", "1");
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const showPopup = () => setPopupVisible(true);
  const hidePopup = () => setPopupVisible(false);

  return (
    <div style={{ fontFamily: "'Nunito',sans-serif", color: "#1B2559" }}>
      <CookieBanner />

      {/* POPUP WAITLIST */}
      {popupVisible && (
        <div onClick={hidePopup} style={{ position: "fixed", inset: 0, zIndex: 400, background: "rgba(27,37,89,.55)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#FBF6E9", borderRadius: 32, padding: "52px 48px 48px", maxWidth: 460, width: "100%", position: "relative", animation: "popin 0.4s cubic-bezier(.34,1.46,.64,1) both", boxShadow: "0 24px 80px rgba(27,37,89,.18)" }}>
            <button onClick={hidePopup} style={{ position: "absolute", top: 16, right: 18, background: "rgba(27,37,89,.07)", border: "none", width: 34, height: 34, borderRadius: "50%", fontSize: 18, cursor: "pointer", color: "#1B2559", fontFamily: "'Nunito',sans-serif", display: "flex", alignItems: "center", justifyContent: "center" }}>×</button>
            <div style={{ width: 68, height: 72, background: "#FFCBA4", borderRadius: "48% 52% 44% 56% / 52% 48% 56% 44%", margin: "0 auto 22px", display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 20, gap: 7, boxShadow: "3px 3px 0 rgba(27,37,89,.12)", animation: "flt 3.5s ease-in-out infinite" }}>
              <div style={{ display: "flex", gap: 8 }}>
                <div style={{ width: 9, height: 12, background: "#1B2559", borderRadius: "50%", animation: "blnk 3.5s ease-in-out infinite" }} />
                <div style={{ width: 9, height: 12, background: "#1B2559", borderRadius: "50%", animation: "blnk 3.5s ease-in-out .1s infinite" }} />
              </div>
              <div style={{ width: 14, height: 7, borderRadius: "0 0 14px 14px", background: "#1B2559" }} />
            </div>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ display: "inline-block", background: "#4E63E6", color: "white", padding: "4px 14px", borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: ".12em", marginBottom: 14 }}>{t.popup.label}</div>
              <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: 30, fontWeight: 900, color: "#1B2559", lineHeight: 1.1, marginBottom: 10 }}>{t.popup.title}</h2>
              <p style={{ fontSize: 15, color: "#5A6178", lineHeight: 1.65, fontWeight: 600 }}>{t.popup.sub}</p>
            </div>
            <div style={{ display: "flex", background: "white", border: "2px solid rgba(27,37,89,.1)", borderRadius: 999, overflow: "hidden", boxShadow: "var(--sh-card)" }}>
              <input type="email" placeholder={t.popup.placeholder} style={{ flex: 1, border: "none", padding: "14px 20px", fontFamily: "'Nunito',sans-serif", fontSize: 15, background: "transparent", outline: "none", minWidth: 0, color: "#1B2559" }} />
              <button onClick={hidePopup} style={{ background: "linear-gradient(90deg,#B8E6C8,#C9B6F2,#4E63E6,#FF9E7A,#F7C8DD)", backgroundSize: "200% 100%", animation: "gradShift 6s ease infinite", border: "none", padding: "14px 22px", fontFamily: "'Nunito',sans-serif", fontSize: 13, fontWeight: 800, cursor: "pointer", whiteSpace: "nowrap", borderRadius: "0 999px 999px 0", color: "#1B2559" }}>{t.popup.cta}</button>
            </div>
          </div>
        </div>
      )}

      <Navbar cta={{ onClick: showPopup }} />

      {/* HERO */}
      <section style={{ minHeight: "100vh", background: "linear-gradient(168deg,#DCF0FF 0%,#EDF5FF 20%,#EEE8FF 42%,#FBF6E9 68%)", display: "flex", flexDirection: "column", overflow: "hidden", position: "relative", paddingTop: 80 }}>
        <Cloud w={110} h={48} parts={[{ top: -18, left: 14, width: 40, height: 40 }, { top: -28, left: 38, width: 52, height: 52 }, { top: -14, right: 8, width: 32, height: 32 }]} style={{ position: "absolute", top: 140, left: "5%", opacity: 0.7, animation: "cld 7s ease-in-out infinite", pointerEvents: "none", zIndex: 1 }} />
        <Cloud w={80} h={36} parts={[{ top: -14, left: 10, width: 30, height: 30 }, { top: -22, left: 28, width: 42, height: 42 }, { top: -10, right: 6, width: 24, height: 24 }]} style={{ position: "absolute", top: 220, right: "7%", opacity: 0.55, animation: "cld 9s ease-in-out 2.5s infinite", pointerEvents: "none", zIndex: 1 }} />

        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "56px 32px 12px", position: "relative", zIndex: 2 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", border: "1.5px solid rgba(78,99,230,.2)", borderRadius: 999, padding: "8px 20px", fontSize: 13, fontWeight: 700, color: "#4E63E6", marginBottom: 28, boxShadow: "var(--sh-card),3px 3px 0 rgba(27,37,89,.08)" }}>
            ✨ {t.hero.badge}
          </div>
          <h1 style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(52px,9vw,116px)", fontWeight: 900, lineHeight: 0.9, letterSpacing: "-.02em", color: "#1B2559", marginBottom: 10, textShadow: "4px 4px 0 rgba(27,37,89,.08)" }}>{t.hero.line1}</h1>
          <div style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(36px,6.5vw,84px)", fontWeight: 900, lineHeight: 0.95, letterSpacing: "-.02em", color: "#4E63E6", marginBottom: 6, textShadow: "3px 3px 0 rgba(78,99,230,.18)" }}>{t.hero.line2}</div>
          <div style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(20px,3.5vw,48px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-.01em", color: "#5A6178", marginBottom: 32 }}>{t.hero.line3}</div>
          <p style={{ fontSize: "clamp(15px,1.8vw,18px)", fontWeight: 600, color: "#5A6178", maxWidth: 520, lineHeight: 1.68, marginBottom: 36, textWrap: "pretty" }}>{t.hero.sub}</p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
            <button onClick={showPopup} style={{ background: "linear-gradient(90deg,#B8E6C8,#C9B6F2,#4E63E6,#FF9E7A,#F7C8DD)", backgroundSize: "200% 100%", animation: "gradShift 6s ease infinite", color: "#1B2559", border: "none", borderRadius: 999, padding: "20px 52px", fontFamily: "'Nunito',sans-serif", fontSize: 18, fontWeight: 900, cursor: "pointer", boxShadow: "0 8px 32px rgba(78,99,230,.28),4px 4px 0 rgba(27,37,89,.14)" }}>{t.hero.cta}</button>
            <span style={{ fontSize: 13, color: "#5A6178", fontWeight: 600 }}>{t.hero.hint}</span>
          </div>
        </div>

        {/* CHARACTERS */}
        <div style={{ position: "relative", zIndex: 3, display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 20, padding: "36px 40px 0", overflow: "hidden" }}>
          {characters.map((c) => <Character key={c.label} c={c} />)}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <CosmoCanvas width={320} height={360} style={{ width: 160, height: 180, display: "block", filter: "drop-shadow(0 12px 24px rgba(255,158,122,.4))", cursor: "pointer" }} />
            <div style={{ background: "#FFD83D", padding: "3px 12px", borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: ".1em", color: "#1B2559", boxShadow: "2px 2px 0 rgba(27,37,89,.12)" }}>COSMO ✦</div>
          </div>
          {charactersRight.map((c) => <Character key={c.label} c={c} />)}
        </div>

        <div style={{ position: "relative", height: 56, overflow: "hidden", flexShrink: 0 }}>
          <svg viewBox="0 0 1440 56" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, width: "100%", height: "100%" }}>
            <path d="M0,28 C360,56 1080,0 1440,32 L1440,56 L0,56 Z" fill="#FFFFFF"></path>
          </svg>
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section style={{ background: "#FFFFFF", padding: "20px 0 32px", overflow: "hidden" }}>
        <p style={{ textAlign: "center", fontSize: 10, fontWeight: 800, letterSpacing: ".16em", color: "#5A6178", opacity: 0.55, marginBottom: 18, textTransform: "uppercase" }}>{t.partners.title}</p>
        <div style={{ overflow: "hidden" }}>
          <div style={{ display: "flex", gap: 72, animation: "mq 28s linear infinite", whiteSpace: "nowrap", alignItems: "center", padding: "0 36px", width: "max-content" }}>
            {[...partners, ...partners].map(([name, color], i) => (
              <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 72 }}>
                <span style={{ fontSize: 17, fontWeight: 800, color: "#1B2559", opacity: 0.35 }}>{name}</span>
                <span style={{ color, fontSize: 10 }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "#FBF6E9", padding: "clamp(64px,8vw,120px) 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 68 }}>
            <div style={{ display: "inline-block", background: "#4E63E6", color: "white", padding: "5px 16px", borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: ".14em", marginBottom: 18, boxShadow: "var(--sh-sticker)" }}>{t.how.eyebrow}</div>
            <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(30px,4.5vw,54px)", fontWeight: 900, color: "#1B2559", marginBottom: 14, lineHeight: 1.06, textShadow: "2px 2px 0 rgba(27,37,89,.07)" }}>{t.how.title}</h2>
            <p style={{ fontSize: 17, color: "#5A6178", maxWidth: 460, margin: "0 auto", lineHeight: 1.65, fontWeight: 600, textWrap: "pretty" }}>{t.how.sub}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {t.how.pillars.map((p) => (
              <div key={p.title} style={{ background: "#FFFFFF", borderRadius: 32, padding: "44px 36px 40px", boxShadow: "var(--sh-card),var(--sh-sticker)", border: "1px solid rgba(27,37,89,.05)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -28, right: -28, width: 130, height: 130, background: p.color, borderRadius: "50%", opacity: 0.18, pointerEvents: "none" }} />
                <div style={{ fontSize: 44, marginBottom: 20 }}>{p.emoji}</div>
                <div style={{ display: "inline-block", background: p.color, padding: "4px 12px", borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: ".1em", color: "#1B2559", marginBottom: 16, boxShadow: "2px 2px 0 rgba(27,37,89,.08)" }}>{p.tag}</div>
                <h3 style={{ fontFamily: "'Grandstander',cursive", fontSize: 24, fontWeight: 800, color: "#1B2559", marginBottom: 12, lineHeight: 1.15 }}>{p.title}</h3>
                <p style={{ fontSize: 15, color: "#5A6178", lineHeight: 1.72, fontWeight: 600, textWrap: "pretty" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO FOUNDER */}
      <section style={{ background: "#1B2559", padding: "clamp(64px,8vw,120px) 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, marginBottom: 44, flexWrap: "wrap" }}>
            <div>
              <div style={{ display: "inline-block", background: "#FFD83D", color: "#1B2559", padding: "5px 16px", borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: ".14em", marginBottom: 16, boxShadow: "3px 3px 0 rgba(27,37,89,.3)" }}>{t.video.label}</div>
              <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(26px,4vw,50px)", fontWeight: 900, color: "white", maxWidth: 520, lineHeight: 1.08 }}>{t.video.title}</h2>
            </div>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,.45)", maxWidth: 280, lineHeight: 1.65, fontWeight: 600 }}>{t.video.sub}</p>
          </div>
          <div style={{ position: "relative", background: "rgba(255,255,255,.04)", border: "1.5px solid rgba(255,255,255,.1)", borderRadius: 32, aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", cursor: "pointer", maxWidth: 940 }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 60%,rgba(78,99,230,.15),transparent 70%)" }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
            <div style={{ position: "relative", zIndex: 1, width: 80, height: 80, background: "linear-gradient(135deg,#B8E6C8,#C9B6F2,#4E63E6)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 12px 48px rgba(78,99,230,.45),4px 4px 0 rgba(27,37,89,.3)" }}>
              <div style={{ width: 0, height: 0, borderStyle: "solid", borderWidth: "14px 0 14px 26px", borderColor: "transparent transparent transparent white", marginLeft: 6 }} />
            </div>
            <div style={{ position: "absolute", bottom: 22, left: 28, fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,.35)", letterSpacing: ".06em", zIndex: 1 }}>{t.video.duration}</div>
          </div>
        </div>
      </section>

      {/* FOUNDER MEMO */}
      <section style={{ background: "#FBF6E9", padding: "clamp(64px,8vw,120px) 40px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center" }}>
          <div style={{ display: "inline-block", background: "#B8E6C8", padding: "5px 16px", borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: ".14em", color: "#1B2559", marginBottom: 40, boxShadow: "var(--sh-sticker)" }}>{t.memo.label}</div>
          <blockquote style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(22px,3.5vw,42px)", fontWeight: 800, color: "#1B2559", lineHeight: 1.28, marginBottom: 44, letterSpacing: "-.01em" }}>
            « {t.memo.quote} »
          </blockquote>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
            <div style={{ width: 52, height: 52, background: "linear-gradient(135deg,#C9B6F2,#4E63E6)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "var(--sh-sticker)" }}>
              <img src="/uploads/logo.png" alt="" style={{ width: 30, height: "auto", filter: "brightness(10)" }} />
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 15, fontWeight: 800, color: "#1B2559" }}>{t.memo.author}</div>
              <div style={{ fontSize: 13, color: "#5A6178", fontWeight: 600 }}>{t.memo.role}</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#FFFFFF", padding: "clamp(64px,8vw,120px) 40px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(28px,4vw,50px)", fontWeight: 900, color: "#1B2559", textAlign: "center", marginBottom: 56, textShadow: "2px 2px 0 rgba(27,37,89,.07)" }}>{t.faq.title}</h2>
          <div>
            {t.faq.items.map((item, i) => {
              const open = faqOpen === i;
              return (
                <div key={i} style={{ borderTop: "1.5px solid rgba(27,37,89,.08)" }}>
                  <button onClick={() => setFaqOpen(open ? -1 : i)} style={{ width: "100%", background: "none", border: "none", padding: "24px 0", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, cursor: "pointer", textAlign: "left", fontFamily: "'Nunito',sans-serif" }}>
                    <span style={{ fontSize: 17, fontWeight: 700, color: "#1B2559", lineHeight: 1.4 }}>{item.q}</span>
                    <span style={{ width: 34, height: 34, minWidth: 34, background: "rgba(78,99,230,.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 700, color: "#4E63E6", boxShadow: "2px 2px 0 rgba(27,37,89,.08)" }}>{open ? "−" : "+"}</span>
                  </button>
                  {open && (
                    <div style={{ padding: "0 0 28px", fontSize: 15, color: "#5A6178", lineHeight: 1.78, textWrap: "pretty", maxWidth: 640, fontWeight: 600 }}>{item.a}</div>
                  )}
                </div>
              );
            })}
            <div style={{ borderTop: "1.5px solid rgba(27,37,89,.08)" }} />
          </div>
          <div style={{ textAlign: "center", marginTop: 52 }}>
            <p style={{ fontSize: 15, color: "#5A6178", fontWeight: 600, marginBottom: 18 }}>{t.faq.ctaText}</p>
            <button style={{ background: "#FFD83D", color: "#1B2559", border: "none", borderRadius: 999, padding: "16px 40px", fontFamily: "'Nunito',sans-serif", fontSize: 16, fontWeight: 800, cursor: "pointer", boxShadow: "var(--sh-sticker),0 8px 24px rgba(255,216,61,.28)" }}>{t.faq.ctaBtn}</button>
          </div>
        </div>
      </section>

      {/* WAITLIST DARK CTA */}
      <section style={{ background: "#1B2559", padding: "clamp(64px,8vw,120px) 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -80, right: -80, width: 280, height: 280, background: "rgba(201,182,242,.08)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 220, height: 220, background: "rgba(184,230,200,.06)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ display: "inline-block", background: "#FFD83D", color: "#1B2559", padding: "5px 16px", borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: ".14em", marginBottom: 20, boxShadow: "3px 3px 0 rgba(27,37,89,.3)" }}>{t.waitlist.label}</div>
          <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(26px,4vw,50px)", fontWeight: 900, color: "white", marginBottom: 16, lineHeight: 1.08 }}>{t.waitlist.title}</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,.55)", lineHeight: 1.68, marginBottom: 40, textWrap: "pretty", fontWeight: 600 }}>{t.waitlist.sub}</p>
          <div style={{ display: "flex", background: "rgba(255,255,255,.08)", border: "1.5px solid rgba(255,255,255,.14)", borderRadius: 999, overflow: "hidden", maxWidth: 480, margin: "0 auto" }}>
            <input type="email" placeholder={t.waitlist.placeholder} style={{ flex: 1, border: "none", background: "transparent", padding: "18px 22px", fontFamily: "'Nunito',sans-serif", fontSize: 15, color: "white", outline: "none", minWidth: 0, fontWeight: 600 }} />
            <button style={{ background: "linear-gradient(90deg,#B8E6C8,#C9B6F2,#4E63E6,#FF9E7A,#F7C8DD)", backgroundSize: "200% 100%", animation: "gradShift 6s ease infinite", border: "none", padding: "18px 24px", fontFamily: "'Nunito',sans-serif", fontSize: 11, fontWeight: 800, color: "#1B2559", cursor: "pointer", whiteSpace: "nowrap", borderRadius: "0 999px 999px 0", letterSpacing: ".06em" }}>{t.waitlist.cta}</button>
          </div>
        </div>
      </section>

      <Footer rich onNewsletter={showPopup} />
    </div>
  );
}
