"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CosmoCanvas from "@/components/CosmoCanvas";
import { useLang } from "@/components/LanguageProvider";

const i18n = {
  fr: {
    eyebrow: 'BIENTÔT SUR VOS ÉCRANS',
    title: 'La série animée',
    lede: "L'univers du Chimera World prend vie en épisodes. Cosmo, Dio, Liora, Lumi, Nia, Pico et Rilo embarquent les enfants dans des aventures pensées pour éveiller, rassurer et faire grandir.",
    placeholder: 'votre@email.com',
    notify: 'Être prévenu',
  },
  en: {
    eyebrow: 'COMING SOON TO YOUR SCREENS',
    title: 'The animated series',
    lede: "The Chimera World comes to life in episodes. Cosmo, Dio, Liora, Lumi, Nia, Pico and Rilo take children on adventures designed to awaken, reassure and help them grow.",
    placeholder: 'your@email.com',
    notify: 'Notify me',
  }
};

const characters = [
  { src: '/uploads/Dio-0401.png', alt: 'Dio', delay: '.2s', dur: '4s', shadow: 'rgba(244,114,114,.3)' },
  { src: '/uploads/Liora-0401.png', alt: 'Liora', delay: '.8s', dur: '4.4s', shadow: 'rgba(201,182,242,.4)' },
  { src: '/uploads/Lumi-0402.png', alt: 'Lumi', delay: '.5s', dur: '3.8s', shadow: 'rgba(78,99,230,.25)' },
  { src: '/uploads/Nia-0401.png', alt: 'Nia', delay: '1s', dur: '4.2s', shadow: 'rgba(255,158,122,.3)' },
  { src: '/uploads/Pico-0401.png', alt: 'Pico', delay: '.3s', dur: '4.6s', shadow: 'rgba(232,90,60,.3)' },
  { src: '/uploads/Rilo-0402.png', alt: 'Rilo', delay: '1.3s', dur: '3.9s', shadow: 'rgba(46,204,113,.3)' },
];

export default function SeriePage() {
  const { lang } = useLang();
  const t = i18n[lang];

  return (
    <div style={{ fontFamily: "'Nunito',sans-serif", color: '#1B2559', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* HERO / COMING SOON */}
      <section className="mm-hero" style={{ flex: 1, background: 'linear-gradient(168deg,#EEE8FF 0%,#DCF0FF 45%,#FBF6E9 90%)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '150px 32px 90px', position: 'relative', overflow: 'hidden' }}>
        {/* Cloud 1 */}
        <div className="mm-decor" style={{ position: 'absolute', top: 140, left: '9%', opacity: .6, animation: 'cld 8s ease-in-out infinite', pointerEvents: 'none' }}>
          <div style={{ position: 'relative', width: 96, height: 42, background: 'rgba(255,255,255,.9)', borderRadius: 999 }}>
            <div style={{ position: 'absolute', top: -16, left: 14, width: 36, height: 36, background: 'rgba(255,255,255,.9)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', top: -24, left: 36, width: 46, height: 46, background: 'rgba(255,255,255,.9)', borderRadius: '50%' }} />
          </div>
        </div>
        {/* Cloud 2 */}
        <div className="mm-decor" style={{ position: 'absolute', top: 210, right: '10%', opacity: .45, animation: 'cld 10s ease-in-out 2s infinite', pointerEvents: 'none' }}>
          <div style={{ position: 'relative', width: 70, height: 32, background: 'rgba(255,255,255,.9)', borderRadius: 999 }}>
            <div style={{ position: 'absolute', top: -12, left: 10, width: 28, height: 28, background: 'rgba(255,255,255,.9)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', top: -18, left: 26, width: 36, height: 36, background: 'rgba(255,255,255,.9)', borderRadius: '50%' }} />
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <CosmoCanvas
            width={280}
            height={260}
            style={{ width: 150, height: 140, display: 'block', margin: '0 auto 8px', filter: 'drop-shadow(0 12px 24px rgba(255,158,122,.4))', cursor: 'pointer' }}
          />
        </div>

        <div style={{ display: 'inline-block', background: '#4E63E6', color: 'white', padding: '6px 18px', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '.14em', marginBottom: 24, boxShadow: '3px 3px 0 rgba(27,37,89,.14)', position: 'relative', zIndex: 1 }}>{t.eyebrow}</div>
        <h1 style={{ fontFamily: "'Grandstander',cursive", fontSize: 'clamp(44px,8vw,98px)', fontWeight: 900, lineHeight: .92, letterSpacing: '-.02em', color: '#1B2559', marginBottom: 18, textShadow: '4px 4px 0 rgba(27,37,89,.08)', position: 'relative', zIndex: 1 }}>{t.title}</h1>
        <p style={{ fontSize: 'clamp(16px,2vw,19px)', fontWeight: 600, color: '#5A6178', maxWidth: 560, lineHeight: 1.7, marginBottom: 36, position: 'relative', zIndex: 1 }}>{t.lede}</p>

        {/* Character line-up */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 14, marginBottom: 40, position: 'relative', zIndex: 1, flexWrap: 'wrap' }}>
          {characters.map((c) => (
            <img
              key={c.alt}
              src={c.src}
              alt={c.alt}
              style={{ width: 72, height: 'auto', animation: `flt ${c.dur} ease-in-out ${c.delay} infinite`, filter: `drop-shadow(0 6px 12px ${c.shadow})` }}
            />
          ))}
        </div>

        {/* Notify form */}
        <div style={{ display: 'flex', background: 'white', border: '2px solid rgba(27,37,89,.1)', borderRadius: 999, overflow: 'hidden', maxWidth: 440, width: '100%', boxShadow: '0 12px 36px rgba(27,37,89,.12)', position: 'relative', zIndex: 1 }}>
          <input
            type="email"
            placeholder={t.placeholder}
            style={{ flex: 1, border: 'none', padding: '15px 22px', fontFamily: "'Nunito',sans-serif", fontSize: 15, background: 'transparent', outline: 'none', minWidth: 0, color: '#1B2559', fontWeight: 600 }}
          />
          <button style={{ background: '#4E63E6', color: 'white', border: 'none', padding: '15px 26px', fontFamily: "'Nunito',sans-serif", fontSize: 14, fontWeight: 800, cursor: 'pointer', whiteSpace: 'nowrap', borderRadius: '0 999px 999px 0' }}>
            {t.notify}
          </button>
        </div>
      </section>

      <Footer socials={["Instagram", "YouTube", "TikTok", "Dailymotion"]} />
    </div>
  );
}
