"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/components/LanguageProvider";

const i18n = {
  fr: {
    nav: { studio:'Studio', lab:'Lab', mag:'Le Mag', serie:'Série animée', about:'À propos', legal:'Légal', cta:"Liste d'attente" },
    hero: { eyebrow:'À PROPOS DE NOUS', title:'Notre mission rend les écrans plus humains', lede:"Magic Minds est un studio, un média et une application qui transforment le temps d'écran des 6 à 11 ans en moments d'apprentissage, d'éveil émotionnel et de créativité partagée." },
    mission: { eyebrow:'NOTRE MISSION', text:"« Nous croyons que chaque enfant mérite des écrans qui l'éveillent plutôt que de l'endormir. Notre mission : devenir la référence d'un numérique sain, créatif et bienveillant pour les familles. »" },
    partners: { title:'Ils nous soutiennent et parlent de nous' },
    partnersList: [
      { name:'Éducation Nationale', icon:'🏛️' }, { name:'BPI France', icon:'🚀' }, { name:'Le Monde', icon:'📰' },
      { name:'Forbes', icon:'📈' }, { name:'France Télévisions', icon:'📺' }, { name:'CNRS', icon:'🔬' },
      { name:'Station F', icon:'⚡' }, { name:'Télérama', icon:'🎭' }
    ],
    team: { eyebrow:"L'ÉQUIPE", title:'Les esprits derrière Magic Minds' },
    teamList: [
      { name:'Lorenzo Neft', role:'Cofondateur & CEO', initials:'LN', bg:'linear-gradient(135deg,#4E63E6,#C9B6F2)' },
      { name:'Lola Fourcade', role:'Cofondatrice', initials:'LF', bg:'linear-gradient(135deg,#FF9E7A,#F7C8DD)' },
      { name:'Jing Qian', role:'Artiste 2D / 3D', initials:'JQ', bg:'linear-gradient(135deg,#B8E6C8,#4E63E6)' },
      { name:'Benjamin Delattre', role:'Artiste 2D', initials:'BD', bg:'linear-gradient(135deg,#C9B6F2,#4E63E6)' },
      { name:'Frédéric Soyer', role:'Scénariste', initials:'FS', bg:'linear-gradient(135deg,#FFD83D,#FF9E7A)' }
    ],
    board: { eyebrow:'LE BOARD', title:'Conseil consultatif', sub:"Des experts en neuroscience, santé mentale et entrepreneuriat qui garantissent la rigueur de notre démarche." },
    boardList: [
      { name:'Bader Chaarani', role:'Neuroscience, impact des écrans', initials:'BC', bg:'linear-gradient(135deg,#4E63E6,#A0B2F5)' },
      { name:'Xavier Briffault', role:'CNRS, santé mentale', initials:'XB', bg:'linear-gradient(135deg,#B8E6C8,#9BD64A)' },
      { name:'Fabien Raynaud', role:'Mentor', initials:'FR', bg:'linear-gradient(135deg,#FF9E7A,#FFD83D)' },
      { name:'Christian Meyssonnier', role:'Mentor', initials:'CM', bg:'linear-gradient(135deg,#C9B6F2,#F7C8DD)' }
    ],
    values: { eyebrow:'NOS VALEURS', title:'Ce qui nous guide' },
    valuesList: [
      { icon:'🛡️', title:'Protéger', desc:"Zéro pub, zéro algorithme addictif. La sécurité de l'enfant avant tout.", bg:'#B8E6C8' },
      { icon:'🌱', title:'Éveiller', desc:"Nourrir la curiosité, l'imaginaire et l'envie d'apprendre.", bg:'#C9B6F2' },
      { icon:'🔬', title:'Prouver', desc:"S'appuyer sur la science, publier en libre accès, rester transparents.", bg:'#FF9E7A' },
      { icon:'🤝', title:'Partager', desc:"Recréer du lien familial autour des écrans, pas de l'isolement.", bg:'#FFD83D' }
    ],
    vision: { eyebrow:'NOTRE VISION', title:'Un futur numérique qui fait grandir', text:"Devenir la référence francophone puis européenne sur enfants & écrans, à l'image des plus grands. Un monde où la technologie sert le développement de l'enfant, et où chaque famille a les clés pour grandir sereinement avec les écrans." },
    footer: { tagline:'Le NutriScore pour les écrans', social:'Nous suivre' }
  },
  en: {
    nav: { studio:'Studio', lab:'Lab', mag:'The Mag', serie:'Animated series', about:'About', legal:'Legal', cta:'Waitlist' },
    hero: { eyebrow:'ABOUT US', title:'Our mission makes screens more human', lede:"Magic Minds is a studio, a media and an app that turn screen time for 6 to 11 year-olds into moments of learning, emotional awareness and shared creativity." },
    mission: { eyebrow:'OUR MISSION', text:"“We believe every child deserves screens that awaken rather than numb. Our mission: to become the reference for healthy, creative and caring digital experiences for families.”" },
    partners: { title:'They support us and talk about us' },
    partnersList: [
      { name:'Éducation Nationale', icon:'🏛️' }, { name:'BPI France', icon:'🚀' }, { name:'Le Monde', icon:'📰' },
      { name:'Forbes', icon:'📈' }, { name:'France Télévisions', icon:'📺' }, { name:'CNRS', icon:'🔬' },
      { name:'Station F', icon:'⚡' }, { name:'Télérama', icon:'🎭' }
    ],
    team: { eyebrow:'THE TEAM', title:'The minds behind Magic Minds' },
    teamList: [
      { name:'Lorenzo Neft', role:'Co-founder & CEO', initials:'LN', bg:'linear-gradient(135deg,#4E63E6,#C9B6F2)' },
      { name:'Lola Fourcade', role:'Co-founder', initials:'LF', bg:'linear-gradient(135deg,#FF9E7A,#F7C8DD)' },
      { name:'Jing Qian', role:'2D / 3D Artist', initials:'JQ', bg:'linear-gradient(135deg,#B8E6C8,#4E63E6)' },
      { name:'Benjamin Delattre', role:'2D Artist', initials:'BD', bg:'linear-gradient(135deg,#C9B6F2,#4E63E6)' },
      { name:'Frédéric Soyer', role:'Screenwriter', initials:'FS', bg:'linear-gradient(135deg,#FFD83D,#FF9E7A)' }
    ],
    board: { eyebrow:'THE BOARD', title:'Advisory board', sub:"Experts in neuroscience, mental health and entrepreneurship who ensure the rigor of our approach." },
    boardList: [
      { name:'Bader Chaarani', role:'Neuroscience, screen impact', initials:'BC', bg:'linear-gradient(135deg,#4E63E6,#A0B2F5)' },
      { name:'Xavier Briffault', role:'CNRS, mental health', initials:'XB', bg:'linear-gradient(135deg,#B8E6C8,#9BD64A)' },
      { name:'Fabien Raynaud', role:'Mentor', initials:'FR', bg:'linear-gradient(135deg,#FF9E7A,#FFD83D)' },
      { name:'Christian Meyssonnier', role:'Mentor', initials:'CM', bg:'linear-gradient(135deg,#C9B6F2,#F7C8DD)' }
    ],
    values: { eyebrow:'OUR VALUES', title:'What guides us' },
    valuesList: [
      { icon:'🛡️', title:'Protect', desc:"Zero ads, zero addictive algorithm. Child safety above all.", bg:'#B8E6C8' },
      { icon:'🌱', title:'Awaken', desc:"Nurture curiosity, imagination and the desire to learn.", bg:'#C9B6F2' },
      { icon:'🔬', title:'Prove', desc:"Rely on science, publish in open access, stay transparent.", bg:'#FF9E7A' },
      { icon:'🤝', title:'Share', desc:"Rebuild family connection around screens, not isolation.", bg:'#FFD83D' }
    ],
    vision: { eyebrow:'OUR VISION', title:'A digital future that helps children grow', text:"To become the French-language then European reference on children & screens. A world where technology serves child development, and where every family has the keys to grow up serenely with screens." },
    footer: { tagline:'The NutriScore for screens', social:'Follow us' }
  }
};

export default function AboutPage() {
  const { lang } = useLang();
  const t = i18n[lang];

  return (
    <div style={{ fontFamily: "'Nunito',sans-serif", color: '#1B2559' }}>
      <Navbar />

      {/* HERO */}
      <section style={{ background: 'linear-gradient(168deg,#DCF0FF 0%,#EDF5FF 40%,#FBF6E9 84%)', padding: '150px 40px 80px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 130, left: '8%', opacity: .5, animation: 'cld 9s ease-in-out infinite', pointerEvents: 'none' }}>
          <div style={{ position: 'relative', width: 84, height: 36, background: 'rgba(255,255,255,.9)', borderRadius: 999 }}>
            <div style={{ position: 'absolute', top: -14, left: 12, width: 30, height: 30, background: 'rgba(255,255,255,.9)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', top: -20, left: 28, width: 40, height: 40, background: 'rgba(255,255,255,.9)', borderRadius: '50%' }} />
          </div>
        </div>
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', background: '#4E63E6', color: 'white', padding: '6px 18px', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '.14em', marginBottom: 24, boxShadow: '3px 3px 0 rgba(27,37,89,.14)' }}>{t.hero.eyebrow}</div>
          <h1 style={{ fontFamily: "'Grandstander',cursive", fontSize: 'clamp(40px,7vw,84px)', fontWeight: 900, lineHeight: .94, letterSpacing: '-.02em', color: '#1B2559', marginBottom: 22, textShadow: '4px 4px 0 rgba(27,37,89,.08)' }}>{t.hero.title}</h1>
          <p style={{ fontSize: 'clamp(16px,2vw,20px)', fontWeight: 600, color: '#5A6178', lineHeight: 1.7 }}>{t.hero.lede}</p>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(64px,8vw,110px) 40px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: '#B8E6C8', color: '#1B2559', padding: '5px 16px', borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: '.14em', marginBottom: 28, boxShadow: '2px 2px 0 rgba(27,37,89,.1)' }}>{t.mission.eyebrow}</div>
          <p style={{ fontFamily: "'Grandstander',cursive", fontSize: 'clamp(24px,3.6vw,42px)', fontWeight: 800, color: '#1B2559', lineHeight: 1.28, letterSpacing: '-.01em' }}>{t.mission.text}</p>
        </div>
      </section>

      {/* PARTNERS */}
      <section style={{ background: '#FBF6E9', padding: '56px 40px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.16em', color: '#5A6178', opacity: .6, marginBottom: 32, textTransform: 'uppercase' }}>{t.partners.title}</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: 18 }}>
            {t.partnersList.map((p, i) => (
              <div key={i} style={{ background: 'white', border: '1px solid rgba(27,37,89,.07)', borderRadius: 18, padding: '18px 26px', boxShadow: '0 6px 18px rgba(27,37,89,.05)', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 20 }}>{p.icon}</span>
                <span style={{ fontSize: 15, fontWeight: 800, color: '#1B2559', opacity: .72 }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(64px,8vw,110px) 40px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'inline-block', background: '#C9B6F2', color: '#1B2559', padding: '5px 16px', borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: '.14em', marginBottom: 18, boxShadow: '2px 2px 0 rgba(27,37,89,.1)' }}>{t.team.eyebrow}</div>
            <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: 'clamp(28px,4vw,50px)', fontWeight: 900, color: '#1B2559', lineHeight: 1.04, textShadow: '2px 2px 0 rgba(27,37,89,.07)' }}>{t.team.title}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 20 }}>
            {t.teamList.map((m, i) => (
              <div key={i} style={{ background: '#FBF6E9', borderRadius: 24, padding: '28px 20px', textAlign: 'center', boxShadow: '0 8px 24px rgba(27,37,89,.06)', border: '1px solid rgba(27,37,89,.05)' }}>
                <div style={{ width: 84, height: 84, borderRadius: '50%', background: m.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Grandstander',cursive", fontSize: 30, fontWeight: 900, color: 'white', margin: '0 auto 16px', boxShadow: '3px 3px 0 rgba(27,37,89,.12)' }}>{m.initials}</div>
                <h3 style={{ fontSize: 16, fontWeight: 800, color: '#1B2559', marginBottom: 4, lineHeight: 1.2 }}>{m.name}</h3>
                <p style={{ fontSize: 12, fontWeight: 700, color: '#5A6178', lineHeight: 1.4 }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOARD */}
      <section style={{ background: '#FBF6E9', padding: 'clamp(56px,7vw,100px) 40px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'inline-block', background: '#FF9E7A', color: '#1B2559', padding: '5px 16px', borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: '.14em', marginBottom: 18, boxShadow: '2px 2px 0 rgba(27,37,89,.1)' }}>{t.board.eyebrow}</div>
            <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: 'clamp(26px,3.6vw,44px)', fontWeight: 900, color: '#1B2559', lineHeight: 1.04, marginBottom: 12, textShadow: '2px 2px 0 rgba(27,37,89,.07)' }}>{t.board.title}</h2>
            <p style={{ fontSize: 16, fontWeight: 600, color: '#5A6178', maxWidth: 520, margin: '0 auto', lineHeight: 1.6 }}>{t.board.sub}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 20 }}>
            {t.boardList.map((b, i) => (
              <div key={i} style={{ background: 'white', borderRadius: 22, padding: '26px 28px', display: 'flex', alignItems: 'center', gap: 18, boxShadow: '0 8px 24px rgba(27,37,89,.06)', border: '1px solid rgba(27,37,89,.05)' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: b.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Grandstander',cursive", fontSize: 22, fontWeight: 900, color: 'white', flexShrink: 0, boxShadow: '2px 2px 0 rgba(27,37,89,.12)' }}>{b.initials}</div>
                <div style={{ minWidth: 0 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 800, color: '#1B2559', marginBottom: 3, lineHeight: 1.2 }}>{b.name}</h3>
                  <p style={{ fontSize: 13, fontWeight: 700, color: '#5A6178', lineHeight: 1.45 }}>{b.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: '#FFFFFF', padding: 'clamp(64px,8vw,110px) 40px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ display: 'inline-block', background: '#FFD83D', color: '#1B2559', padding: '5px 16px', borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: '.14em', marginBottom: 18, boxShadow: '2px 2px 0 rgba(27,37,89,.1)' }}>{t.values.eyebrow}</div>
            <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: 'clamp(28px,4vw,50px)', fontWeight: 900, color: '#1B2559', lineHeight: 1.04, textShadow: '2px 2px 0 rgba(27,37,89,.07)' }}>{t.values.title}</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22 }}>
            {t.valuesList.map((v, i) => (
              <div key={i} style={{ background: '#FBF6E9', borderRadius: 26, padding: '34px 28px', boxShadow: '0 8px 24px rgba(27,37,89,.05)', border: '1px solid rgba(27,37,89,.05)' }}>
                <div style={{ width: 58, height: 58, borderRadius: 18, background: v.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, marginBottom: 18, boxShadow: '2px 2px 0 rgba(27,37,89,.1)' }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Grandstander',cursive", fontSize: 19, fontWeight: 800, color: '#1B2559', marginBottom: 8, lineHeight: 1.15 }}>{v.title}</h3>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#5A6178', lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section style={{ background: '#1B2559', padding: 'clamp(64px,8vw,110px) 40px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -70, right: -70, width: 260, height: 260, background: 'rgba(201,182,242,.08)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 220, height: 220, background: 'rgba(184,230,200,.06)', borderRadius: '50%', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', background: '#B8E6C8', color: '#1B2559', padding: '5px 16px', borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: '.14em', marginBottom: 26, boxShadow: '2px 2px 0 rgba(0,0,0,.2)' }}>{t.vision.eyebrow}</div>
          <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: 'clamp(26px,4vw,48px)', fontWeight: 900, color: 'white', lineHeight: 1.14, marginBottom: 20 }}>{t.vision.title}</h2>
          <p style={{ fontSize: 17, fontWeight: 600, color: 'rgba(255,255,255,.6)', lineHeight: 1.74 }}>{t.vision.text}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
