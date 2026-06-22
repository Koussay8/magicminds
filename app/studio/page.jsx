"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CosmoCanvas from "@/components/CosmoCanvas";
import { useLang } from "@/components/LanguageProvider";

const i18n = {
  fr: {
    cta: "Proposer un projet",
    hero: {
      eyebrow: "NOTRE STUDIO DE CRÉATION",
      title: "The Chimera World",
      sub: "Un univers, mille histoires.",
      lede: "L'imaginaire de Magic Minds prend vie dans The Chimera World, un monde narratif conçu pour émerveiller, rassurer et faire grandir. Nous l'ouvrons aux artistes et aux marques qui partagent notre mission.",
    },
    ip: {
      eyebrow: "NOTRE IP",
      title: "Un monde pensé pour les enfants",
      p1: "The Chimera World réunit Cosmo et ses compagnons dans des aventures où chaque émotion a sa place. Les personnages incarnent la curiosité, la douceur et le courage, des valeurs que nous voulons transmettre aux 6 à 11 ans.",
      p2: "Chaque histoire est validée par notre comité éditorial et nos experts en développement de l'enfant, pour garantir un contenu sain, sans pub ni mécanique addictive.",
    },
    ways: {
      title: "Deux façons de créer avec nous",
      sub: "Que vous soyez artiste indépendant ou marque engagée, il y a une place pour vous dans l'aventure.",
      a: { emoji: "🌱", color: "#C9B6F2", btn: "#4E63E6", btnColor: "white", title: "Incubation d'IP", desc: "Vous êtes auteur, illustrateur ou scénariste émergent ? Proposez votre univers. Nous accompagnons les talents indépendants pour porter leurs histoires jusqu'aux enfants.", cta: "Proposer mon IP →" },
      b: { emoji: "🤝", color: "#FF9E7A", btn: "#FF9E7A", btnColor: "#1B2559", title: "Devenir partenaire", desc: "Marques, fondations, institutions : sponsorisez un contenu dans l'application et associez votre nom à un numérique bienveillant et éducatif.", cta: "Découvrir les partenariats →" },
    },
    form: {
      eyebrow: "CANDIDATURE SIMPLE & RAPIDE",
      title: "Prêt à semer vos graines d'imaginaire ?",
      sub: "Soumettez votre projet ci-dessous. Notre comité éditorial analyse chaque dossier sous 15 jours.",
      session: "SESSION OUVERTE",
      name: "VOTRE NOM & PRÉNOM *", namePh: "ex. Alexandre Dumas",
      email: "ADRESSE EMAIL *", emailPh: "ex. alexandre@studio.com",
      type: "TYPE DE PROJET", opt1: "Proposer une histoire", opt2: "Proposer un personnage", opt3: "Collaboration artistique",
      portfolio: "LIEN VERS VOTRE PORTFOLIO / PITCH (OPTIONNEL)",
      pitch: "PRÉSENTEZ-NOUS VOTRE IDÉE EN QUELQUES LIGNES (SYNOPSIS, CONCEPT, INSPIRATIONS) *", pitchPh: "Parlez-nous de la magie de votre univers…",
      consent: "J'accepte que Magic Minds traite mes données pour étudier ma candidature. Je confirme que les éléments partagés relèvent de ma propre autorité morale et créative.",
      submit: "Envoyer ma candidature", submitted: "Candidature envoyée ✓",
    },
    partners: {
      eyebrow: "COLLABORATIONS & IMPACT",
      title: "Partnerships",
      sub: "Construisons ensemble des expériences utiles, éducatives et inspirantes pour les enfants. Associez votre marque ou votre fondation à des valeurs universelles de bienveillance et d'apprentissage par le rêve.",
      cards: [
        { emoji: "🎬", color: "#B8E6C8", t: "Contenu sponsorisé", d: "Intégrez votre message dans une histoire ou un module, dans le respect total de notre charte éditoriale et de l'enfant." },
        { emoji: "🏛️", color: "#C9B6F2", t: "Partenariats institutionnels", d: "Écoles, collectivités, fondations : déployez Magic Minds auprès des familles et soutenez la recherche sur enfants & écrans." },
        { emoji: "💡", color: "#FF9E7A", t: "Co-création de marque", d: "Imaginons ensemble un personnage, un univers ou une expérience sur-mesure portant vos valeurs." },
      ],
    },
    block: {
      eyebrow: "LA COMMUNAUTÉ MAGIC MINDS",
      title: "Rejoignez l'aventure Magic Minds",
      sub: "Que vous soyez un parent curieux, un artiste rêveur, une marque engagée ou simplement désireux de participer à notre mission : notre porte est toujours ouverte pour inventer l'avenir.",
      b1: "Nous contacter", b2: "Proposer un projet", b3: "Devenir partenaire",
      mail: "Vous préférez envoyer un e-mail direct ?",
    },
  },
  en: {
    cta: "Submit a project",
    hero: {
      eyebrow: "OUR CREATIVE STUDIO",
      title: "The Chimera World",
      sub: "One world, a thousand stories.",
      lede: "Magic Minds' imagination comes to life in The Chimera World, a narrative universe designed to delight, reassure and help children grow. We open it to artists and brands who share our mission.",
    },
    ip: {
      eyebrow: "OUR IP",
      title: "A world built for children",
      p1: "The Chimera World brings Cosmo and friends together in adventures where every emotion has its place. The characters embody curiosity, gentleness and courage, values we want to pass on to 6 to 11 year-olds.",
      p2: "Every story is reviewed by our editorial board and child-development experts, to guarantee healthy content with no ads or addictive mechanics.",
    },
    ways: {
      title: "Two ways to create with us",
      sub: "Whether you're an independent artist or a committed brand, there's a place for you in the adventure.",
      a: { emoji: "🌱", color: "#C9B6F2", btn: "#4E63E6", btnColor: "white", title: "IP Incubation", desc: "Are you an emerging author, illustrator or screenwriter? Pitch your universe. We support independent talent to bring their stories to children.", cta: "Pitch my IP →" },
      b: { emoji: "🤝", color: "#FF9E7A", btn: "#FF9E7A", btnColor: "#1B2559", title: "Become a partner", desc: "Brands, foundations, institutions: sponsor content in the app and associate your name with kind, educational digital experiences.", cta: "Explore partnerships →" },
    },
    form: {
      eyebrow: "SIMPLE & FAST APPLICATION",
      title: "Ready to plant your seeds of imagination?",
      sub: "Submit your project below. Our editorial board reviews every application within 15 days.",
      session: "SESSION OPEN",
      name: "YOUR FULL NAME *", namePh: "e.g. Alexandre Dumas",
      email: "EMAIL ADDRESS *", emailPh: "e.g. alexandre@studio.com",
      type: "PROJECT TYPE", opt1: "Pitch a story", opt2: "Pitch a character", opt3: "Artistic collaboration",
      portfolio: "LINK TO YOUR PORTFOLIO / PITCH (OPTIONAL)",
      pitch: "TELL US YOUR IDEA IN A FEW LINES (SYNOPSIS, CONCEPT, INSPIRATIONS) *", pitchPh: "Tell us about the magic of your universe…",
      consent: "I agree that Magic Minds may process my data to review my application. I confirm the shared materials are my own moral and creative property.",
      submit: "Send my application", submitted: "Application sent ✓",
    },
    partners: {
      eyebrow: "COLLABORATIONS & IMPACT",
      title: "Partnerships",
      sub: "Let's build useful, educational and inspiring experiences for children together. Associate your brand or foundation with universal values of kindness and learning through wonder.",
      cards: [
        { emoji: "🎬", color: "#B8E6C8", t: "Sponsored content", d: "Integrate your message into a story or module, fully respecting our editorial and child-safety charter." },
        { emoji: "🏛️", color: "#C9B6F2", t: "Institutional partnerships", d: "Schools, communities, foundations: deploy Magic Minds to families and support research on children & screens." },
        { emoji: "💡", color: "#FF9E7A", t: "Brand co-creation", d: "Let's imagine a character, world or bespoke experience that carries your values." },
      ],
    },
    block: {
      eyebrow: "THE MAGIC MINDS COMMUNITY",
      title: "Join the Magic Minds adventure",
      sub: "Whether you're a curious parent, a dreaming artist, a committed brand or simply eager to take part in our mission: our door is always open to invent the future.",
      b1: "Contact us", b2: "Submit a project", b3: "Become a partner",
      mail: "Prefer to send a direct email?",
    },
  },
};

const cloud = (w, h, parts, style) => (
  <div style={style}>
    <div style={{ position: "relative", width: w, height: h, background: "rgba(255,255,255,.9)", borderRadius: 999 }}>
      {parts.map((p, i) => (
        <div key={i} style={{ position: "absolute", ...p, background: "rgba(255,255,255,.9)", borderRadius: "50%" }} />
      ))}
    </div>
  </div>
);

const inputStyle = { width: "100%", border: "1.5px solid rgba(27,37,89,.14)", borderRadius: 14, padding: "14px 18px", fontFamily: "'Nunito',sans-serif", fontSize: 15, background: "white", outline: "none", color: "#1B2559", fontWeight: 600 };
const labelStyle = { display: "block", fontSize: 11, fontWeight: 800, letterSpacing: ".1em", color: "#1B2559", marginBottom: 8 };

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: "smooth" });
};

export default function StudioPage() {
  const { lang } = useLang();
  const t = i18n[lang];
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ fontFamily: "'Nunito',sans-serif", color: "#1B2559" }}>
      <Navbar cta={{ label: t.cta, onClick: () => scrollTo("mm-form") }} />

      {/* HERO */}
      <section style={{ minHeight: "74vh", background: "linear-gradient(168deg,#EEE8FF 0%,#EDF5FF 30%,#FBF6E9 70%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "140px 32px 80px", position: "relative", overflow: "hidden" }}>
        {cloud(96, 42, [{ top: -16, left: 14, width: 36, height: 36 }, { top: -24, left: 36, width: 46, height: 46 }], { position: "absolute", top: 130, left: "8%", opacity: 0.6, animation: "cld 8s ease-in-out infinite", pointerEvents: "none" })}
        {cloud(70, 32, [{ top: -12, left: 10, width: 28, height: 28 }, { top: -18, left: 26, width: 36, height: 36 }], { position: "absolute", top: 200, right: "9%", opacity: 0.45, animation: "cld 10s ease-in-out 2s infinite", pointerEvents: "none" })}
        <div style={{ display: "inline-block", background: "#4E63E6", color: "white", padding: "6px 18px", borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: ".14em", marginBottom: 26, boxShadow: "3px 3px 0 rgba(27,37,89,.14)", position: "relative", zIndex: 1 }}>{t.hero.eyebrow}</div>
        <h1 style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(44px,8vw,96px)", fontWeight: 900, lineHeight: 0.92, letterSpacing: "-.02em", color: "#1B2559", marginBottom: 8, textShadow: "4px 4px 0 rgba(27,37,89,.08)", position: "relative", zIndex: 1 }}>{t.hero.title}</h1>
        <div style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(22px,3.6vw,44px)", fontWeight: 800, color: "#C9B6F2", marginBottom: 26, position: "relative", zIndex: 1, textShadow: "2px 2px 0 rgba(27,37,89,.06)" }}>{t.hero.sub}</div>
        <p style={{ fontSize: "clamp(15px,1.8vw,18px)", fontWeight: 600, color: "#5A6178", maxWidth: 560, lineHeight: 1.68, textWrap: "pretty", position: "relative", zIndex: 1 }}>{t.hero.lede}</p>
      </section>

      {/* IP */}
      <section className="mm-section" style={{ background: "#FFFFFF", padding: "clamp(64px,8vw,120px) 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div className="mm-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-block", background: "#B8E6C8", color: "#1B2559", padding: "5px 16px", borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: ".14em", marginBottom: 20, boxShadow: "2px 2px 0 rgba(27,37,89,.1)" }}>{t.ip.eyebrow}</div>
              <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(30px,4.5vw,54px)", fontWeight: 900, color: "#1B2559", lineHeight: 1.04, marginBottom: 20, textShadow: "2px 2px 0 rgba(27,37,89,.07)" }}>{t.ip.title}</h2>
              <p style={{ fontSize: 16, fontWeight: 600, color: "#5A6178", lineHeight: 1.75, marginBottom: 18, textWrap: "pretty" }}>{t.ip.p1}</p>
              <p style={{ fontSize: 16, fontWeight: 600, color: "#5A6178", lineHeight: 1.75, textWrap: "pretty" }}>{t.ip.p2}</p>
            </div>
            <div style={{ background: "linear-gradient(155deg,#DCF0FF,#EEE8FF)", borderRadius: 32, padding: "48px 32px", display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 18, boxShadow: "inset 0 2px 20px rgba(27,37,89,.05)", minHeight: 340, position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 24, left: 28, fontSize: 18, opacity: 0.5 }}>✦</div>
              <div style={{ position: "absolute", top: 60, right: 40, fontSize: 13, opacity: 0.4 }}>✦</div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <img src="/uploads/Pico-0401.png" alt="Pico, le lion roux, personnage du Chimera World" loading="lazy" decoding="async" style={{ width: 86, height: "auto", animation: "flt2 4.2s ease-in-out .6s infinite", filter: "drop-shadow(0 8px 16px rgba(232,90,60,.3))" }} />
                <div style={{ background: "rgba(27,37,89,.06)", padding: "3px 10px", borderRadius: 999, fontSize: 9, fontWeight: 800, letterSpacing: ".1em", color: "#5A6178" }}>PICO</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                <CosmoCanvas width={280} height={300} style={{ width: 140, height: 150, display: "block", filter: "drop-shadow(0 12px 22px rgba(255,158,122,.4))", cursor: "pointer" }} />
                <div style={{ background: "#FFD83D", padding: "3px 12px", borderRadius: 999, fontSize: 9, fontWeight: 800, letterSpacing: ".1em", color: "#1B2559", boxShadow: "2px 2px 0 rgba(27,37,89,.12)" }}>COSMO ✦</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, marginBottom: 26 }}>
                <img src="/uploads/Rilo-0402.png" alt="Rilo, l'ours vert, personnage du Chimera World" loading="lazy" decoding="async" style={{ width: 82, height: "auto", animation: "flt2 3.8s ease-in-out 1.1s infinite", filter: "drop-shadow(0 8px 16px rgba(46,204,113,.3))" }} />
                <div style={{ background: "rgba(27,37,89,.06)", padding: "3px 10px", borderRadius: 999, fontSize: 9, fontWeight: 800, letterSpacing: ".1em", color: "#5A6178" }}>RILO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WAYS */}
      <section className="mm-section" style={{ background: "#FBF6E9", padding: "clamp(64px,8vw,120px) 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(28px,4vw,48px)", fontWeight: 900, color: "#1B2559", lineHeight: 1.06, marginBottom: 14, textShadow: "2px 2px 0 rgba(27,37,89,.07)" }}>{t.ways.title}</h2>
            <p style={{ fontSize: 17, fontWeight: 600, color: "#5A6178", maxWidth: 520, margin: "0 auto", lineHeight: 1.65, textWrap: "pretty" }}>{t.ways.sub}</p>
          </div>
          <div className="mm-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {[t.ways.a, t.ways.b].map((w, i) => (
              <div key={i} style={{ background: "#FFFFFF", borderRadius: 32, padding: "44px 40px", boxShadow: "0 10px 30px rgba(27,37,89,.08),3px 3px 0 rgba(27,37,89,.1)", border: "1px solid rgba(27,37,89,.05)", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -30, right: -30, width: 140, height: 140, background: w.color, borderRadius: "50%", opacity: 0.16, pointerEvents: "none" }} />
                <div style={{ fontSize: 46, marginBottom: 18 }}>{w.emoji}</div>
                <h3 style={{ fontFamily: "'Grandstander',cursive", fontSize: 26, fontWeight: 800, color: "#1B2559", marginBottom: 12, lineHeight: 1.12 }}>{w.title}</h3>
                <p style={{ fontSize: 15, fontWeight: 600, color: "#5A6178", lineHeight: 1.72, marginBottom: 24, textWrap: "pretty" }}>{w.desc}</p>
                <button onClick={() => scrollTo(i === 0 ? "mm-form" : "mm-partners")} style={{ background: w.btn, color: w.btnColor, border: "none", borderRadius: 999, padding: "13px 28px", fontFamily: "'Nunito',sans-serif", fontSize: 14, fontWeight: 800, cursor: "pointer", boxShadow: "3px 3px 0 rgba(27,37,89,.14)" }}>{w.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="mm-form" className="mm-section" style={{ background: "#FFFFFF", padding: "clamp(64px,8vw,120px) 40px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", background: "#FBF6E9", borderRadius: 36, padding: "clamp(36px,5vw,64px)", boxShadow: "0 16px 40px rgba(27,37,89,.1)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 32, alignItems: "flex-start", marginBottom: 40, flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".14em", color: "#4E63E6", marginBottom: 14 }}>{t.form.eyebrow}</div>
              <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(28px,4vw,46px)", fontWeight: 900, color: "#1B2559", lineHeight: 1.04, marginBottom: 14 }}>{t.form.title}</h2>
              <p style={{ fontSize: 15, fontWeight: 600, color: "#5A6178", lineHeight: 1.65, maxWidth: 440, textWrap: "pretty" }}>{t.form.sub}</p>
            </div>
            <div style={{ background: "#EEE8FF", borderRadius: 24, padding: "24px 32px", textAlign: "center", flexShrink: 0 }}>
              <div style={{ fontFamily: "'Grandstander',cursive", fontSize: 30, fontWeight: 900, color: "#4E63E6" }}>2026</div>
              <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".12em", color: "#5A6178", marginTop: 4 }}>{t.form.session}</div>
            </div>
          </div>

          <div className="mm-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 28px" }}>
            <div>
              <label style={labelStyle}>{t.form.name}</label>
              <input type="text" placeholder={t.form.namePh} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>{t.form.email}</label>
              <input type="email" placeholder={t.form.emailPh} style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>{t.form.type}</label>
              <select style={{ ...inputStyle, cursor: "pointer" }}>
                <option>{t.form.opt1}</option>
                <option>{t.form.opt2}</option>
                <option>{t.form.opt3}</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>{t.form.portfolio}</label>
              <input type="url" placeholder="https://monportfolio.com" style={inputStyle} />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={labelStyle}>{t.form.pitch}</label>
              <textarea placeholder={t.form.pitchPh} rows={5} style={{ ...inputStyle, resize: "vertical" }} />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "flex-start", gap: 12, margin: "28px 0 32px" }}>
            <input type="checkbox" style={{ width: 20, height: 20, marginTop: 2, accentColor: "#4E63E6", cursor: "pointer", flexShrink: 0 }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: "#5A6178", lineHeight: 1.55 }}>{t.form.consent}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button onClick={() => setSubmitted(true)} style={{ background: "linear-gradient(90deg,#B8E6C8,#C9B6F2,#4E63E6,#FF9E7A,#F7C8DD)", backgroundSize: "200% 100%", animation: "gradShift 6s ease infinite", color: "#1B2559", border: "none", borderRadius: 999, padding: "17px 40px", fontFamily: "'Nunito',sans-serif", fontSize: 16, fontWeight: 900, cursor: "pointer", boxShadow: "0 8px 24px rgba(78,99,230,.25),3px 3px 0 rgba(27,37,89,.14)" }}>
              {submitted ? t.form.submitted : t.form.submit}
            </button>
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS */}
      <section id="mm-partners" className="mm-section" style={{ background: "#FBF6E9", padding: "clamp(64px,8vw,120px) 40px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".16em", color: "#FF9E7A", marginBottom: 16 }}>{t.partners.eyebrow}</div>
            <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(34px,5vw,64px)", fontWeight: 900, color: "#1B2559", lineHeight: 1.02, marginBottom: 18, textShadow: "3px 3px 0 rgba(27,37,89,.08)" }}>{t.partners.title}</h2>
            <p style={{ fontSize: 17, fontWeight: 600, color: "#5A6178", maxWidth: 600, margin: "0 auto", lineHeight: 1.65, textWrap: "pretty" }}>{t.partners.sub}</p>
          </div>
          <div className="mm-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }}>
            {t.partners.cards.map((c) => (
              <div key={c.t} style={{ background: "#FFFFFF", borderRadius: 28, padding: "38px 32px", boxShadow: "0 10px 30px rgba(27,37,89,.07)", border: "1px solid rgba(27,37,89,.05)" }}>
                <div style={{ width: 56, height: 56, background: c.color, borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, marginBottom: 22, boxShadow: "2px 2px 0 rgba(27,37,89,.1)" }}>{c.emoji}</div>
                <h3 style={{ fontFamily: "'Grandstander',cursive", fontSize: 21, fontWeight: 800, color: "#1B2559", marginBottom: 10 }}>{c.t}</h3>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#5A6178", lineHeight: 1.7, textWrap: "pretty" }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section className="mm-section" style={{ background: "#1B2559", padding: "clamp(64px,8vw,110px) 40px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -70, right: -70, width: 260, height: 260, background: "rgba(201,182,242,.08)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 220, height: 220, background: "rgba(184,230,200,.06)", borderRadius: "50%", pointerEvents: "none" }} />
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".16em", color: "rgba(255,255,255,.4)", marginBottom: 20 }}>{t.block.eyebrow}</div>
          <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: "clamp(28px,4.4vw,54px)", fontWeight: 900, color: "white", lineHeight: 1.06, marginBottom: 18 }}>{t.block.title}</h2>
          <p style={{ fontSize: 16, fontWeight: 600, color: "rgba(255,255,255,.55)", lineHeight: 1.68, marginBottom: 40, maxWidth: 540, marginLeft: "auto", marginRight: "auto", textWrap: "pretty" }}>{t.block.sub}</p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{ background: "white", color: "#1B2559", border: "none", borderRadius: 999, padding: "15px 30px", fontFamily: "'Nunito',sans-serif", fontSize: 15, fontWeight: 800, cursor: "pointer", boxShadow: "3px 3px 0 rgba(0,0,0,.2)" }}>{t.block.b1}</button>
            <button onClick={() => scrollTo("mm-form")} style={{ background: "#FFD83D", color: "#1B2559", border: "none", borderRadius: 999, padding: "15px 30px", fontFamily: "'Nunito',sans-serif", fontSize: 15, fontWeight: 800, cursor: "pointer", boxShadow: "3px 3px 0 rgba(0,0,0,.2)" }}>{t.block.b2}</button>
            <button onClick={() => scrollTo("mm-partners")} style={{ background: "transparent", color: "white", border: "1.5px solid rgba(255,255,255,.4)", borderRadius: 999, padding: "15px 30px", fontFamily: "'Nunito',sans-serif", fontSize: 15, fontWeight: 800, cursor: "pointer" }}>{t.block.b3}</button>
          </div>
          <p style={{ fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,.4)", marginTop: 32 }}>{t.block.mail} <span style={{ color: "#B8E6C8", textDecoration: "underline" }}>hello@magicminds.studio</span></p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
