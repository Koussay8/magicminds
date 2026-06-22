"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CosmoCanvas from "@/components/CosmoCanvas";
import { useLang } from "@/components/LanguageProvider";

// ─── i18n data ───────────────────────────────────────────────────────────────
const i18n = {
  fr: {
    nav: { studio:'Studio', lab:'Lab', mag:'Le Mag', serie:'Série animée', about:'À propos', legal:'Légal', cta:"Liste d'attente" },
    hero: {
      eyebrow: 'LE MAG',
      title: 'Des clés pour grandir avec les écrans',
      lede: "Conseils, décryptages, vocabulaire des jeunes et études vulgarisées : la référence francophone sur enfants & écrans, écoutable et accessible à tous.",
      searchPh: 'Posez votre question à Cosmo…', searchBtn: 'Demander',
      aiHint: "Ex : « Mon enfant veut TikTok, que faire ? » — Cosmo répond et vous oriente.",
      aiLabel: 'COSMO • ASSISTANT IA', aiArticle: 'ARTICLE SUGGÉRÉ'
    },
    readCta: 'Lire', toc: 'Dans cet article', listen: 'Écouter cet article',
    bcHome: 'Accueil',
    related: 'Vous aimerez aussi…',
    wl: { t: "Rejoignez l'aventure !", s: "Soyez les premiers informés du lancement de Magic Minds.", cta: 'Rejoindre maintenant' },
    filtersList: [
      { id: 'all', label: 'Tous' },
      { id: 'tech', label: 'Comprendre la techno' },
      { id: 'parents', label: 'Le brief des parents' },
      { id: 'mots', label: 'Mots de jeunes' },
      { id: 'science', label: 'Études vulgarisées' },
      { id: 'news', label: 'News' }
    ],
    nutri: {
      eyebrow: 'LE NUTRISCORE POUR LES ÉCRANS',
      title: 'Une note claire pour chaque contenu',
      desc: "Comme sur les aliments, nous attribuons une note de A à E à chaque application et contenu numérique. Fini de deviner : vous savez en un coup d'œil ce qui nourrit vraiment l'imaginaire de votre enfant.",
      c1: 'Valeur éducative', c2: 'Impact émotionnel', c3: 'Stimulation créative', c4: 'Durée recommandée',
      scaleTitle: "L'ÉCHELLE MAGIC MINDS",
      a: 'Excellent, nourrit et éveille', b: 'Très bon, équilibré', c: 'Correct, à doser', d: 'Faible, à limiter', e: 'À éviter, peu de valeur'
    },
    media: {
      title: 'Écouter, regarder, télécharger',
      sub: "Chaque contenu existe en plusieurs formats. Lecture audio toujours disponible, et désactivable.",
      v: { t: 'Vidéos', d: "Décryptages courts et formats explicatifs pour toute la famille." },
      p: { t: 'Podcasts', d: "Nos épisodes audio à écouter en voiture ou avant de dormir." },
      d: { t: 'Téléchargements', d: "Guides PDF, fiches pratiques et affiches à imprimer, en libre accès." }
    },
    footer: { tagline: 'Le NutriScore pour les écrans', social: 'Nous suivre' },
    articles: [
      {
        id: 'six-seven', cat: 'mots', tag: 'MOTS DE JEUNES', tagBg: '#F7C8DD', thumb: 'linear-gradient(135deg,#F7C8DD,#FFCBA4)', icon: '💬',
        title: '« Six-seven » : on vous explique', date: '16 JAN 2026', dateColor: '#E5566B', read: '4 min', author: 'Équipe Magic Minds',
        excerpt: "D'où vient cette expression qui envahit les cours de récré, et faut-il s'en inquiéter ?",
        sections: [
          { h: "D'où ça vient ?", p: "« Six-seven » (souvent écrit 6-7) est une expression virale née sur TikTok, reprise dans des vidéos de basket et des mèmes audio. Les enfants la répètent surtout parce qu'elle est rythmée et un peu absurde, pas pour un sens précis." },
          { h: "Qu'est-ce que ça veut dire ?", p: "Honnêtement : pas grand-chose. C'est ce qu'on appelle un « brainrot meme », une blague d'initiés qui sert surtout de signe d'appartenance entre copains. Le sens compte moins que le plaisir de la dire ensemble." },
          { h: "Faut-il s'inquiéter ?", p: "Non. C'est un phénomène de mode inoffensif. L'occasion est plutôt belle pour discuter : demandez à votre enfant de vous l'expliquer. Vous montrez de l'intérêt, et vous ouvrez la porte à des conversations plus sérieuses plus tard." }
        ],
        related: ['brainrot', 'prompt-enfant', 'australie-reseaux']
      },
      {
        id: 'prompt-enfant', cat: 'tech', tag: 'COMPRENDRE LA TECHNO', tagBg: '#C9B6F2', thumb: 'linear-gradient(135deg,#C9B6F2,#A0B2F5)', icon: '🤖',
        title: 'Quel prompt simple donner à un enfant pour commencer ?', date: '16 JAN 2026', dateColor: '#7C5BD8', read: '6 min', author: 'Équipe Magic Minds',
        excerpt: "Générer une image par IA peut être magique. Voici comment accompagner sans risque.",
        sections: [
          { h: 'Un bon premier prompt', p: "Choisissez une idée amusante avec 2 ou 3 détails : « un dragon gentil qui lit un livre, style dessin animé, couleurs pastel ». Si le résultat est étrange, changez un seul mot à la fois. L'enfant comprend vite que la précision aide l'IA." },
          { h: 'Les réglages qui comptent', p: "Le format (carré, paysage, portrait) et le style (photo, dessin, aquarelle) sont les plus visibles. Faire plusieurs variantes est souvent plus efficace que chercher « le prompt parfait » du premier coup." },
          { h: 'Rester en sécurité', p: "Activez les filtres ou un mode adapté à l'âge si l'outil le propose, et restez en usage accompagné. Encouragez des personnages inventés et des thèmes neutres (animaux, paysages, objets). En cas d'image gênante, fermez, reformulez, et expliquez que l'IA peut se tromper." }
        ],
        related: ['controle-iphone', 'brainrot', 'six-seven']
      },
      {
        id: 'brainrot', cat: 'mots', tag: 'MOTS DE JEUNES', tagBg: '#F7C8DD', thumb: 'linear-gradient(135deg,#FFE08A,#B8E6C8)', icon: '🧠',
        title: '« Brainrot » : faut-il paniquer ?', date: '15 JAN 2026', dateColor: '#E5566B', read: '5 min', author: 'Équipe Magic Minds',
        excerpt: "Le terme qui décrit le contenu abrutissant. Ce que dit la science, sans dramatiser.",
        sections: [
          { h: 'De quoi parle-t-on ?', p: "« Brainrot » (littéralement « cerveau qui pourrit ») désigne le sentiment d'abrutissement après avoir enchaîné des vidéos très courtes et hyper-stimulantes. Les ados l'emploient souvent avec autodérision." },
          { h: 'Ce que dit la recherche', p: "Le défilement infini n'« abîme » pas le cerveau, mais il entraîne l'attention à zapper sans cesse et réduit la tolérance à l'ennui, pourtant essentiel à la créativité. La qualité et la durée des contenus comptent plus que l'écran en lui-même." },
          { h: 'Que faire à la maison ?', p: "Privilégiez des contenus plus longs et plus riches, ménagez des temps sans écran, et nommez le phénomène avec humour. Plus l'enfant sait reconnaître le « brainrot », plus il peut décider d'arrêter lui-même." }
        ],
        related: ['six-seven', 'ecrans-sommeil', 'prompt-enfant']
      },
      {
        id: 'controle-iphone', cat: 'tech', tag: 'COMPRENDRE LA TECHNO', tagBg: '#C9B6F2', thumb: 'linear-gradient(135deg,#A0B2F5,#C9B6F2)', icon: '🔒',
        title: 'Comment mettre un contrôle parental sur iPhone ?', date: '15 JAN 2026', dateColor: '#7C5BD8', read: '7 min', author: 'Équipe Magic Minds',
        excerpt: "Guide simple pour activer Temps d'écran et Partage familial pas à pas.",
        sections: [
          { h: "Activer Temps d'écran", p: "Réglages > Temps d'écran > activez-le, puis choisissez « Cet iPhone est à mon enfant ». Vous pourrez définir un code parental distinct de celui de déverrouillage, indispensable pour que l'enfant ne contourne pas les limites." },
          { h: 'Partage familial', p: "Avec le Partage familial, vous gérez à distance le téléphone de votre enfant : validation des téléchargements, limites d'apps, et demandes d'achat. C'est le réglage le plus puissant pour les plus jeunes." },
          { h: 'Les bons réglages', p: "Définissez des limites par catégorie (réseaux sociaux, jeux), un temps d'arrêt le soir, et des restrictions de contenu adaptées à l'âge. L'objectif n'est pas de tout bloquer, mais de créer un cadre clair et négocié." }
        ],
        related: ['prompt-enfant', 'australie-reseaux', 'ecrans-sommeil']
      },
      {
        id: 'australie-reseaux', cat: 'parents', tag: 'LE BRIEF DES PARENTS', tagBg: '#FF9E7A', thumb: 'linear-gradient(135deg,#FFCBA4,#A0B2F5)', icon: '🦘',
        title: "Interdiction des réseaux sociaux en Australie : ce qu'il faut retenir", date: '15 JAN 2026', dateColor: '#E07A4A', read: '5 min', author: 'Équipe Magic Minds',
        excerpt: "Ce que la nouvelle loi australienne change, et ce qu'on peut en retenir en France.",
        sections: [
          { h: 'Ce que dit la loi', p: "L'Australie a voté l'interdiction des réseaux sociaux pour les moins de 16 ans, en plaçant la responsabilité de la vérification d'âge sur les plateformes, pas sur les parents. C'est l'une des mesures les plus strictes au monde." },
          { h: "Pourquoi c'est débattu", p: "Les partisans y voient une protection nécessaire face au harcèlement et à l'anxiété. Les critiques pointent les limites techniques de la vérification d'âge et le risque de pousser les jeunes vers des espaces moins surveillés." },
          { h: 'Et en France ?', p: "La France expérimente déjà la majorité numérique à 15 ans avec accord parental. Le débat australien nourrit la réflexion européenne : mieux vaut un cadre clair et un accompagnement qu'une interdiction seule." }
        ],
        related: ['controle-iphone', 'six-seven', 'ecrans-sommeil']
      },
      {
        id: 'ecrans-sommeil', cat: 'science', tag: 'ÉTUDE VULGARISÉE', tagBg: '#B8E6C8', thumb: 'linear-gradient(135deg,#B8E6C8,#9BD64A)', icon: '📊',
        title: 'Écrans & sommeil : que dit vraiment la recherche ?', date: '14 JAN 2026', dateColor: '#1FA862', read: '8 min', author: 'Équipe Magic Minds',
        excerpt: "On a lu les études pour vous. Verdict clair sur l'exposition avant le coucher.",
        sections: [
          { h: "L'effet de la lumière", p: "La lumière des écrans, surtout bleue, retarde la sécrétion de mélatonine, l'hormone du sommeil. Chez l'enfant, dont l'horloge biologique est plus sensible, l'effet sur l'endormissement est mesurable." },
          { h: 'Le contenu compte aussi', p: "Au-delà de la lumière, c'est l'excitation du contenu qui pose problème : une vidéo stimulante ou un jeu compétitif juste avant le coucher maintient le cerveau en alerte bien après l'extinction de l'écran." },
          { h: 'Les recommandations', p: "La règle simple : pas d'écran dans l'heure qui précède le coucher, et pas d'écran dans la chambre. Remplacez par un rituel calme (lecture, histoire audio). Le sommeil regagné se voit dès les premières semaines." }
        ],
        related: ['brainrot', 'controle-iphone', 'prompt-enfant']
      }
    ]
  },
  en: {
    nav: { studio:'Studio', lab:'Lab', mag:'The Mag', serie:'Animated series', about:'About', legal:'Legal', cta:'Waitlist' },
    hero: {
      eyebrow: 'THE MAG',
      title: 'Keys to growing up with screens',
      lede: "Advice, explainers, kids' slang and digestible studies: the French-language reference on children & screens, listenable and accessible to all.",
      searchPh: 'Ask Cosmo a question…', searchBtn: 'Ask',
      aiHint: `E.g. "My kid wants TikTok, what should I do?" — Cosmo answers and points you to an article.`,
      aiLabel: 'COSMO • AI ASSISTANT', aiArticle: 'SUGGESTED ARTICLE'
    },
    readCta: 'Read', toc: 'In this article', listen: 'Listen to this article',
    bcHome: 'Home',
    related: 'You may also like…',
    wl: { t: 'Join the adventure!', s: 'Be the first to hear about the Magic Minds launch.', cta: 'Join now' },
    filtersList: [
      { id: 'all', label: 'All' },
      { id: 'tech', label: 'Understanding tech' },
      { id: 'parents', label: 'Parents brief' },
      { id: 'mots', label: 'Kids slang' },
      { id: 'science', label: 'Studies explained' },
      { id: 'news', label: 'News' }
    ],
    nutri: {
      eyebrow: 'THE NUTRISCORE FOR SCREENS',
      title: 'A clear grade for every content',
      desc: "Just like on food, we give every app and digital content a grade from A to E. No more guessing: you know at a glance what truly nourishes your child's imagination.",
      c1: 'Educational value', c2: 'Emotional impact', c3: 'Creative stimulation', c4: 'Recommended duration',
      scaleTitle: 'THE MAGIC MINDS SCALE',
      a: 'Excellent, nourishes & awakens', b: 'Very good, balanced', c: 'Fair, in moderation', d: 'Low, to limit', e: 'Avoid, little value'
    },
    media: {
      title: 'Listen, watch, download',
      sub: "Every content comes in several formats. Audio playback always available, and switchable off.",
      v: { t: 'Videos', d: "Short explainers and educational formats for the whole family." },
      p: { t: 'Podcasts', d: "Our audio episodes to listen to in the car or before bed." },
      d: { t: 'Downloads', d: "PDF guides, fact sheets and printable posters, in open access." }
    },
    footer: { tagline: 'The NutriScore for screens', social: 'Follow us' },
    articles: [
      { id: 'six-seven', cat: 'mots', tag: 'KIDS SLANG', tagBg: '#F7C8DD', thumb: 'linear-gradient(135deg,#F7C8DD,#FFCBA4)', icon: '💬', title: '"Six-seven": we explain it', date: '16 JAN 2026', dateColor: '#E5566B', read: '4 min', author: 'Magic Minds Team', excerpt: "Where does this playground expression come from, and should you worry?", sections: [{ h: 'Where it comes from', p: `"Six-seven" (often written 6-7) is a viral expression born on TikTok, picked up in basketball clips and audio memes. Kids repeat it mostly because it's catchy and a bit absurd.` }, { h: 'What it means', p: `Honestly: not much. It's a "brainrot meme", an inside joke that mainly signals belonging among friends. The meaning matters less than the fun of saying it together.` }, { h: 'Should you worry?', p: "No. It's a harmless fad. It's a great chance to talk: ask your child to explain it to you. You show interest and open the door to more serious conversations later." }], related: ['brainrot', 'prompt-enfant', 'australie-reseaux'] },
      { id: 'prompt-enfant', cat: 'tech', tag: 'UNDERSTANDING TECH', tagBg: '#C9B6F2', thumb: 'linear-gradient(135deg,#C9B6F2,#A0B2F5)', icon: '🤖', title: 'What simple prompt to give a child to start?', date: '16 JAN 2026', dateColor: '#7C5BD8', read: '6 min', author: 'Magic Minds Team', excerpt: "Generating an AI image can be magical. Here's how to guide safely.", sections: [{ h: 'A good first prompt', p: `Pick a fun idea with 2 or 3 details: "a gentle dragon reading a book, cartoon style, pastel colors". If the result is odd, change one word at a time. Kids quickly learn that precision helps the AI.` }, { h: 'Settings that matter', p: `Format (square, landscape, portrait) and style (photo, drawing, watercolor) are the most visible. Making several variants is often more effective than chasing "the perfect prompt" first try.` }, { h: 'Staying safe', p: "Turn on filters or an age-appropriate mode if available, and keep it a guided activity. Encourage invented characters and neutral themes. If an image is uncomfortable, close it, rephrase, and explain that AI can get things wrong." }], related: ['controle-iphone', 'brainrot', 'six-seven'] },
      { id: 'brainrot', cat: 'mots', tag: 'KIDS SLANG', tagBg: '#F7C8DD', thumb: 'linear-gradient(135deg,#FFE08A,#B8E6C8)', icon: '🧠', title: '"Brainrot": should we panic?', date: '15 JAN 2026', dateColor: '#E5566B', read: '5 min', author: 'Magic Minds Team', excerpt: "The term for numbing content. What science says, without the drama.", sections: [{ h: 'What we mean', p: `"Brainrot" describes the numb feeling after binge-watching very short, hyper-stimulating videos. Teens often use it with self-irony.` }, { h: 'What research says', p: `Infinite scrolling doesn't "damage" the brain, but it trains attention to constantly jump and lowers tolerance for boredom, which is essential to creativity. Quality and length matter more than the screen itself.` }, { h: 'What to do at home', p: `Favor longer, richer content, build screen-free time, and name the phenomenon with humor. The more a child can recognize "brainrot", the more they can choose to stop.` }], related: ['six-seven', 'ecrans-sommeil', 'prompt-enfant'] },
      { id: 'controle-iphone', cat: 'tech', tag: 'UNDERSTANDING TECH', tagBg: '#C9B6F2', thumb: 'linear-gradient(135deg,#A0B2F5,#C9B6F2)', icon: '🔒', title: 'How to set up parental controls on iPhone?', date: '15 JAN 2026', dateColor: '#7C5BD8', read: '7 min', author: 'Magic Minds Team', excerpt: "A simple guide to set up Screen Time and Family Sharing step by step.", sections: [{ h: 'Enable Screen Time', p: `Settings > Screen Time > turn it on, then choose "This is my child's iPhone". Set a Screen Time passcode different from the unlock code, essential so the child can't bypass the limits.` }, { h: 'Family Sharing', p: "With Family Sharing you manage your child's phone remotely: download approvals, app limits and purchase requests. It's the most powerful setting for younger kids." }, { h: 'The right settings', p: "Set category limits (social, games), a downtime at night, and age-appropriate content restrictions. The goal isn't to block everything, but to create a clear, negotiated framework." }], related: ['prompt-enfant', 'australie-reseaux', 'ecrans-sommeil'] },
      { id: 'australie-reseaux', cat: 'parents', tag: 'PARENTS BRIEF', tagBg: '#FF9E7A', thumb: 'linear-gradient(135deg,#FFCBA4,#A0B2F5)', icon: '🦘', title: 'Social media ban in Australia: what to take away', date: '15 JAN 2026', dateColor: '#E07A4A', read: '5 min', author: 'Magic Minds Team', excerpt: "What the new Australian law changes, and what to take away in France.", sections: [{ h: 'What the law says', p: "Australia passed a ban on social media for under-16s, placing age-verification responsibility on platforms, not parents. It's one of the strictest measures in the world." }, { h: "Why it's debated", p: "Supporters see needed protection against bullying and anxiety. Critics point to the technical limits of age verification and the risk of pushing teens toward less monitored spaces." }, { h: 'And in France?', p: "France is already piloting a digital age of majority at 15 with parental consent. The Australian debate feeds European thinking: a clear framework plus support beats a ban alone." }], related: ['controle-iphone', 'six-seven', 'ecrans-sommeil'] },
      { id: 'ecrans-sommeil', cat: 'science', tag: 'STUDY EXPLAINED', tagBg: '#B8E6C8', thumb: 'linear-gradient(135deg,#B8E6C8,#9BD64A)', icon: '📊', title: 'Screens & sleep: what does research really say?', date: '14 JAN 2026', dateColor: '#1FA862', read: '8 min', author: 'Magic Minds Team', excerpt: "We read the studies for you. A clear verdict on bedtime exposure.", sections: [{ h: 'The light effect', p: "Screen light, especially blue light, delays melatonin, the sleep hormone. In children, whose body clock is more sensitive, the effect on falling asleep is measurable." }, { h: 'Content matters too', p: "Beyond light, it's the excitement of content that's the issue: a stimulating video or a competitive game right before bed keeps the brain alert long after the screen is off." }, { h: 'The recommendations', p: "The simple rule: no screens in the hour before bed, and no screens in the bedroom. Replace with a calm ritual (reading, audio story). The sleep regained shows within the first weeks." }], related: ['brainrot', 'controle-iphone', 'prompt-enfant'] }
    ]
  }
};

// ─── Component ───────────────────────────────────────────────────────────────
export default function MagPage() {
  const { lang } = useLang();
  const t = i18n[lang];
  const allArts = t.articles;

  const [filter, setFilter] = useState('all');
  const [playing, setPlaying] = useState(false);
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);
  const [answer, setAnswer] = useState('');
  const [suggestId, setSuggestId] = useState('');
  const [openId, setOpenId] = useState(null);

  // ── AI search ──────────────────────────────────────────────────────────────
  async function onSearchSubmit(e) {
    e.preventDefault();
    const q = query.trim();
    if (!q || searching) return;
    setSearching(true);
    setAnswer('');
    setSuggestId('');
    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: q, lang, articles: allArts.map(a => ({ id: a.id, title: a.title })) })
      });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      let sid = data.articleId || '';
      if (sid && !allArts.find(a => a.id === sid)) sid = '';
      setSearching(false);
      setAnswer(data.answer || '');
      setSuggestId(sid);
    } catch {
      // keyword fallback
      const ql = q.toLowerCase();
      const best = allArts.find(a =>
        (a.title + ' ' + a.excerpt).toLowerCase().split(/\s+/).some(w => w.length > 3 && ql.includes(w))
      );
      setSearching(false);
      setAnswer(lang === 'fr'
        ? "Je n'ai pas pu joindre l'assistant à l'instant, mais voici un article qui devrait vous aider."
        : "I couldn't reach the assistant right now, but here's an article that should help.");
      setSuggestId(best ? best.id : allArts[0].id);
    }
  }

  function openArticle(id) {
    setOpenId(id);
    setPlaying(false);
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  }

  const suggest = allArts.find(a => a.id === suggestId);
  const rd = allArts.find(a => a.id === openId) || {};

  function scrollToSec(id) {
    const el = document.getElementById(id);
    const c = document.getElementById('mm-reader');
    if (el && c) c.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  }

  const rdSections = (rd.sections || []).map((s, i) => ({ ...s, id: 'sec-' + i }));
  const rdRelated = (rd.related || [])
    .map(rid => allArts.find(a => a.id === rid))
    .filter(Boolean);

  const filteredArts = allArts.filter(a => filter === 'all' || a.cat === filter);

  return (
    <div style={{ fontFamily: "'Nunito',sans-serif", color: '#1B2559' }}>
      <Navbar />

      {/* ── HERO ── */}
      <section className="mm-section mm-hero" style={{ background: 'linear-gradient(168deg,#DCF0FF 0%,#EDF5FF 40%,#FBF6E9 86%)', padding: '118px 40px 60px', position: 'relative', overflow: 'hidden' }}>
        {/* Cloud 1 */}
        <div className="mm-decor" style={{ position: 'absolute', top: 140, left: '7%', opacity: .55, animation: 'cld 9s ease-in-out infinite', pointerEvents: 'none' }}>
          <div style={{ position: 'relative', width: 88, height: 38, background: 'rgba(255,255,255,.9)', borderRadius: 999 }}>
            <div style={{ position: 'absolute', top: -14, left: 12, width: 32, height: 32, background: 'rgba(255,255,255,.9)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', top: -22, left: 30, width: 42, height: 42, background: 'rgba(255,255,255,.9)', borderRadius: '50%' }} />
          </div>
        </div>
        {/* Cloud 2 */}
        <div className="mm-decor" style={{ position: 'absolute', top: 170, right: '8%', opacity: .4, animation: 'cld 11s ease-in-out 2s infinite', pointerEvents: 'none' }}>
          <div style={{ position: 'relative', width: 64, height: 28, background: 'rgba(255,255,255,.9)', borderRadius: 999 }}>
            <div style={{ position: 'absolute', top: -10, left: 10, width: 24, height: 24, background: 'rgba(255,255,255,.9)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', top: -15, left: 24, width: 30, height: 30, background: 'rgba(255,255,255,.9)', borderRadius: '50%' }} />
          </div>
        </div>

        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          {/* Cosmo */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
            <CosmoCanvas
              width={240}
              height={220}
              style={{ width: 120, height: 110, display: 'block', filter: 'drop-shadow(0 10px 20px rgba(255,158,122,.4))', cursor: 'pointer' }}
            />
          </div>
          <div style={{ display: 'inline-block', background: '#4E63E6', color: 'white', padding: '6px 18px', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '.14em', marginBottom: 18, boxShadow: '3px 3px 0 rgba(27,37,89,.14)' }}>{t.hero.eyebrow}</div>
          <h1 style={{ fontFamily: "'Grandstander',cursive", fontSize: 'clamp(32px,5vw,62px)', fontWeight: 900, lineHeight: 1, letterSpacing: '-.02em', color: '#1B2559', marginBottom: 16, textShadow: '3px 3px 0 rgba(27,37,89,.08)' }}>{t.hero.title}</h1>
          <p style={{ fontSize: 'clamp(15px,1.9vw,18px)', fontWeight: 600, color: '#5A6178', maxWidth: 560, margin: '0 auto 28px', lineHeight: 1.6 }}>{t.hero.lede}</p>

          {/* AI search bar */}
          <form onSubmit={onSearchSubmit} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'white', borderRadius: 999, padding: '8px 8px 8px 22px', boxShadow: '0 12px 36px rgba(27,37,89,.14)', maxWidth: 600, margin: '0 auto', border: '2px solid rgba(78,99,230,.12)' }}>
            <span style={{ fontSize: 18 }}>✨</span>
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              type="text"
              placeholder={t.hero.searchPh}
              style={{ flex: 1, border: 'none', outline: 'none', fontFamily: "'Nunito',sans-serif", fontSize: 15, fontWeight: 600, color: '#1B2559', background: 'transparent', minWidth: 0 }}
            />
            <button type="submit" style={{ background: '#4E63E6', color: 'white', border: 'none', borderRadius: 999, padding: '12px 24px', fontFamily: "'Nunito',sans-serif", fontSize: 14, fontWeight: 800, cursor: 'pointer', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 8 }}>
              {searching && (
                <span style={{ display: 'inline-block', width: 14, height: 14, border: '2px solid rgba(255,255,255,.4)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin360 .7s linear infinite' }} />
              )}
              {t.hero.searchBtn}
            </button>
          </form>
          <p style={{ fontSize: 12, fontWeight: 600, color: '#9AA0B4', marginTop: 12 }}>{t.hero.aiHint}</p>

          {/* AI answer panel */}
          {answer && (
            <div style={{ background: 'white', border: '2px solid rgba(78,99,230,.18)', borderRadius: 24, padding: '26px 28px', maxWidth: 600, margin: '24px auto 0', textAlign: 'left', boxShadow: '0 12px 36px rgba(27,37,89,.1)', animation: 'popin .4s ease both' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 34, height: 34, borderRadius: '50%', background: 'linear-gradient(135deg,#B8E6C8,#C9B6F2,#FF9E7A)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>✨</div>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#4E63E6', letterSpacing: '.04em' }}>{t.hero.aiLabel}</span>
              </div>
              <p style={{ fontSize: 15, fontWeight: 600, color: '#1B2559', lineHeight: 1.7, marginBottom: suggest ? 18 : 0 }}>{answer}</p>
              {suggest && (
                <div
                  onClick={() => openArticle(suggest.id)}
                  style={{ display: 'flex', alignItems: 'center', gap: 14, background: '#FBF6E9', borderRadius: 16, padding: '14px 16px', cursor: 'pointer', transition: 'transform .15s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'translateX(0)'}
                >
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: suggest.thumb, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{suggest.icon}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.06em', color: '#9AA0B4', marginBottom: 2 }}>{t.hero.aiArticle}</div>
                    <div style={{ fontSize: 15, fontWeight: 800, color: '#1B2559', lineHeight: 1.2 }}>{suggest.title}</div>
                  </div>
                  <span style={{ fontSize: 18, color: '#4E63E6', flexShrink: 0 }}>→</span>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <section className="mm-section" style={{ background: '#FBF6E9', padding: '36px 40px 8px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          {t.filtersList.map(f => {
            const active = filter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                style={{
                  background: active ? '#4E63E6' : '#FFFFFF',
                  color: active ? '#FFFFFF' : '#5A6178',
                  border: `1.5px solid ${active ? '#4E63E6' : 'rgba(27,37,89,.12)'}`,
                  borderRadius: 999, padding: '10px 22px',
                  fontFamily: "'Nunito',sans-serif", fontSize: 14, fontWeight: 800, cursor: 'pointer',
                  transition: 'all .15s',
                  boxShadow: active ? '0 6px 18px rgba(78,99,230,.28)' : '0 2px 8px rgba(27,37,89,.05)'
                }}
              >{f.label}</button>
            );
          })}
        </div>
      </section>

      {/* ── ARTICLE GRID ── */}
      <section className="mm-section" style={{ background: '#FBF6E9', padding: '32px 40px clamp(56px,7vw,96px)' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div className="mm-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
            {filteredArts.map(a => (
              <div
                key={a.id}
                onClick={() => openArticle(a.id)}
                style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', background: 'white', borderRadius: 24, overflow: 'hidden', boxShadow: '0 8px 24px rgba(27,37,89,.07)', border: '1px solid rgba(27,37,89,.05)', transition: 'transform .2s,box-shadow .2s' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 22px 46px rgba(27,37,89,.16)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(27,37,89,.07)'; }}
              >
                <div style={{ height: 184, background: a.thumb, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 78% 26%,rgba(255,255,255,.32),transparent 44%)' }} />
                  <span style={{ fontSize: 66, filter: 'drop-shadow(0 5px 10px rgba(27,37,89,.2))' }}>{a.icon}</span>
                  <div style={{ position: 'absolute', top: 14, left: 14, background: a.tagBg, color: '#1B2559', padding: '5px 13px', borderRadius: 999, fontSize: 9, fontWeight: 800, letterSpacing: '.08em', boxShadow: '2px 2px 0 rgba(27,37,89,.12)' }}>{a.tag}</div>
                  <div style={{ position: 'absolute', bottom: 14, right: 14, background: 'rgba(255,255,255,.92)', color: '#1B2559', padding: '5px 12px', borderRadius: 999, fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', gap: 5, boxShadow: '0 2px 8px rgba(27,37,89,.12)' }}>🔊 {a.read}</div>
                </div>
                <div style={{ padding: '24px 24px 26px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontFamily: "'Grandstander',cursive", fontSize: 20, fontWeight: 800, color: '#1B2559', lineHeight: 1.16, marginBottom: 10 }}>{a.title}</h3>
                  <p style={{ fontSize: 14, fontWeight: 600, color: '#5A6178', lineHeight: 1.6, flex: 1 }}>{a.excerpt}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 18, paddingTop: 16, borderTop: '1px solid rgba(27,37,89,.06)' }}>
                    <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.06em', color: a.dateColor }}>{a.date}</span>
                    <span style={{ fontSize: 13, fontWeight: 800, color: '#4E63E6', display: 'flex', alignItems: 'center', gap: 5 }}>{t.readCta} →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NUTRISCORE ── */}
      <section className="mm-section" style={{ background: '#FFFFFF', padding: 'clamp(64px,8vw,120px) 40px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <div className="mm-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'inline-block', background: '#FFD83D', color: '#1B2559', padding: '5px 16px', borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: '.14em', marginBottom: 20, boxShadow: '2px 2px 0 rgba(27,37,89,.12)' }}>{t.nutri.eyebrow}</div>
              <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: 'clamp(30px,4.5vw,54px)', fontWeight: 900, color: '#1B2559', lineHeight: 1.04, marginBottom: 18, textShadow: '2px 2px 0 rgba(27,37,89,.07)' }}>{t.nutri.title}</h2>
              <p style={{ fontSize: 16, fontWeight: 600, color: '#5A6178', lineHeight: 1.72, marginBottom: 28 }}>{t.nutri.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {[['📚', t.nutri.c1], ['💛', t.nutri.c2], ['🎨', t.nutri.c3], ['⏱️', t.nutri.c4]].map(([icon, label]) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontSize: 20 }}>{icon}</span>
                    <span style={{ fontSize: 15, fontWeight: 700, color: '#1B2559' }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#FBF6E9', borderRadius: 32, padding: '44px 40px', boxShadow: 'inset 0 2px 16px rgba(27,37,89,.04)' }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: '#5A6178', letterSpacing: '.06em', marginBottom: 22, textAlign: 'center' }}>{t.nutri.scaleTitle}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {[['A','#2ECC71','white',t.nutri.a],['B','#9BD64A','white',t.nutri.b],['C','#FFD83D','#1B2559',t.nutri.c],['D','#FF9E7A','white',t.nutri.d],['E','#E5566B','white',t.nutri.e]].map(([letter, bg, clr, desc]) => (
                  <div key={letter} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div style={{ width: 48, height: 48, background: bg, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Grandstander',cursive", fontSize: 24, fontWeight: 900, color: clr, boxShadow: '2px 2px 0 rgba(27,37,89,.12)' }}>{letter}</div>
                    <span style={{ fontSize: 14, fontWeight: 700, color: '#1B2559' }}>{desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MEDIA ── */}
      <section className="mm-section" style={{ background: '#FBF6E9', padding: 'clamp(56px,7vw,96px) 40px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: 'clamp(26px,3.6vw,44px)', fontWeight: 900, color: '#1B2559', textAlign: 'center', lineHeight: 1.06, marginBottom: 14, textShadow: '2px 2px 0 rgba(27,37,89,.07)' }}>{t.media.title}</h2>
          <p style={{ fontSize: 16, fontWeight: 600, color: '#5A6178', textAlign: 'center', maxWidth: 520, margin: '0 auto 44px', lineHeight: 1.6 }}>{t.media.sub}</p>
          <div className="mm-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {[
              { bg: '#C9B6F2', icon: '🎬', ...t.media.v },
              { bg: '#B8E6C8', icon: '🎙️', ...t.media.p },
              { bg: '#FF9E7A', icon: '📄', ...t.media.d }
            ].map((m) => (
              <div key={m.t} style={{ background: 'white', borderRadius: 24, padding: '36px 32px', boxShadow: '0 8px 24px rgba(27,37,89,.06)', border: '1px solid rgba(27,37,89,.05)', textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, background: m.bg, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 30, margin: '0 auto 20px', boxShadow: '3px 3px 0 rgba(27,37,89,.1)' }}>{m.icon}</div>
                <h3 style={{ fontFamily: "'Grandstander',cursive", fontSize: 21, fontWeight: 800, color: '#1B2559', marginBottom: 8 }}>{m.t}</h3>
                <p style={{ fontSize: 14, fontWeight: 600, color: '#5A6178', lineHeight: 1.6 }}>{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer socials={["Instagram", "TikTok", "YouTube", "Substack"]} />

      {/* ── ARTICLE READER OVERLAY ── */}
      {openId && rd.id && (
        <div id="mm-reader" style={{ position: 'fixed', inset: 0, zIndex: 500, background: '#FBF6E9', overflowY: 'auto', animation: 'popin .35s ease both' }}>
          {/* Reader topbar */}
          <div className="mm-section" style={{ position: 'sticky', top: 0, zIndex: 10, background: 'rgba(251,246,233,.94)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(27,37,89,.08)', padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, fontWeight: 700, color: '#5A6178', minWidth: 0 }}>
              <span style={{ cursor: 'pointer', color: '#4E63E6' }} onClick={() => setOpenId(null)}>{t.bcHome}</span>
              <span style={{ opacity: .4 }}>/</span>
              <span style={{ opacity: .6 }}>{rd.tag}</span>
              <span style={{ opacity: .4 }}>/</span>
              <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{rd.title}</span>
            </div>
            <button
              onClick={() => setOpenId(null)}
              style={{ background: 'rgba(27,37,89,.07)', border: 'none', width: 38, height: 38, borderRadius: '50%', fontSize: 20, cursor: 'pointer', color: '#1B2559', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >×</button>
          </div>

          <div className="mm-section" style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 40px 100px', position: 'relative' }}>
            {/* Header */}
            <div style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto 32px' }}>
              <div style={{ display: 'inline-block', background: rd.tagBg, color: '#1B2559', padding: '5px 16px', borderRadius: 999, fontSize: 10, fontWeight: 800, letterSpacing: '.1em', marginBottom: 18, boxShadow: '2px 2px 0 rgba(27,37,89,.1)' }}>{rd.tag}</div>
              <h1 style={{ fontFamily: "'Grandstander',cursive", fontSize: 'clamp(30px,4.6vw,52px)', fontWeight: 900, color: '#1B2559', lineHeight: 1.06, marginBottom: 18, textShadow: '2px 2px 0 rgba(27,37,89,.06)' }}>{rd.title}</h1>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, fontSize: 13, fontWeight: 700, color: '#9AA0B4' }}>
                <span>{rd.author}</span><span style={{ opacity: .5 }}>•</span><span>{rd.date}</span><span style={{ opacity: .5 }}>•</span><span>{rd.read}</span>
              </div>
            </div>

            {/* Hero band */}
            <div style={{ height: 200, borderRadius: 28, background: rd.thumb, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 36, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 80% 24%,rgba(255,255,255,.34),transparent 46%)' }} />
              <span style={{ fontSize: 88, filter: 'drop-shadow(0 6px 12px rgba(27,37,89,.2))' }}>{rd.icon}</span>
            </div>

            {/* Audio player */}
            <div style={{ background: 'linear-gradient(90deg,#F2F4F8,#EAF7EF)', border: '1px solid rgba(27,37,89,.07)', borderRadius: 16, padding: '14px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, maxWidth: 760, margin: '0 auto 40px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 19 }}>🔊</span>
                <span style={{ fontSize: 15, fontWeight: 800, color: '#1B2559' }}>{t.listen}</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#9AA0B4' }}>Thomas</span>
              </div>
              <button
                onClick={() => setPlaying(p => !p)}
                style={{ background: playing ? '#1FA862' : '#2ECC71', color: 'white', border: 'none', borderRadius: 999, padding: '10px 26px', fontFamily: "'Nunito',sans-serif", fontSize: 14, fontWeight: 800, cursor: 'pointer', flexShrink: 0, boxShadow: '0 4px 14px rgba(46,204,113,.3)' }}
              >{playing ? '❚❚ Pause' : `▶ ${lang === 'fr' ? 'Lire' : 'Play'}`}</button>
            </div>

            <div className="mm-grid" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 48, alignItems: 'start' }}>
              {/* TOC */}
              <div style={{ position: 'sticky', top: 90 }}>
                <div style={{ fontFamily: "'Grandstander',cursive", fontSize: 16, fontWeight: 800, color: '#1B2559', marginBottom: 16 }}>{t.toc}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, borderLeft: '2px solid rgba(27,37,89,.1)', paddingLeft: 16 }}>
                  {rdSections.map(sec => (
                    <span
                      key={sec.id}
                      onClick={() => scrollToSec(sec.id)}
                      style={{ fontSize: 14, fontWeight: 700, color: '#5A6178', cursor: 'pointer', lineHeight: 1.35, transition: 'color .15s' }}
                      onMouseEnter={e => e.currentTarget.style.color = '#4E63E6'}
                      onMouseLeave={e => e.currentTarget.style.color = '#5A6178'}
                    >{sec.h}</span>
                  ))}
                </div>
              </div>
              {/* Body */}
              <div style={{ maxWidth: 680 }}>
                {rdSections.map(sec => (
                  <div key={sec.id} id={sec.id} style={{ marginBottom: 32, scrollMarginTop: 90 }}>
                    <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: 26, fontWeight: 800, color: '#1B2559', marginBottom: 14, lineHeight: 1.15 }}>{sec.h}</h2>
                    <p style={{ fontSize: 16, fontWeight: 600, color: '#3A4055', lineHeight: 1.8, whiteSpace: 'pre-line' }}>{sec.p}</p>
                  </div>
                ))}

                {/* Waitlist inline */}
                <div style={{ background: '#4E63E6', borderRadius: 24, padding: '32px 28px', textAlign: 'center', marginTop: 40 }}>
                  <h3 style={{ fontFamily: "'Grandstander',cursive", fontSize: 24, fontWeight: 900, color: 'white', marginBottom: 8 }}>{t.wl.t}</h3>
                  <p style={{ fontSize: 14, fontWeight: 600, color: 'rgba(255,255,255,.8)', marginBottom: 20, lineHeight: 1.5 }}>{t.wl.s}</p>
                  <button style={{ background: '#FFD83D', color: '#1B2559', border: 'none', borderRadius: 999, padding: '13px 32px', fontFamily: "'Nunito',sans-serif", fontSize: 15, fontWeight: 800, cursor: 'pointer', boxShadow: '2px 2px 0 rgba(27,37,89,.18)' }}>{t.wl.cta}</button>
                </div>
              </div>
            </div>

            {/* Related */}
            {rdRelated.length > 0 && (
              <div style={{ marginTop: 72, borderTop: '1px solid rgba(27,37,89,.1)', paddingTop: 48 }}>
                <h3 style={{ fontFamily: "'Grandstander',cursive", fontSize: 28, fontWeight: 900, color: '#1B2559', textAlign: 'center', marginBottom: 32, textShadow: '2px 2px 0 rgba(27,37,89,.06)' }}>{t.related}</h3>
                <div className="mm-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, maxWidth: 1000, margin: '0 auto' }}>
                  {rdRelated.map(r => (
                    <div
                      key={r.id}
                      onClick={() => openArticle(r.id)}
                      style={{ cursor: 'pointer', background: 'white', borderRadius: 20, overflow: 'hidden', boxShadow: '0 8px 24px rgba(27,37,89,.07)', border: '1px solid rgba(27,37,89,.05)', transition: 'transform .2s' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                      <div style={{ height: 120, background: r.thumb, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: 44 }}>{r.icon}</span>
                      </div>
                      <div style={{ padding: '18px 20px' }}>
                        <div style={{ fontSize: 9, fontWeight: 800, letterSpacing: '.08em', color: '#9AA0B4', marginBottom: 6 }}>{r.tag}</div>
                        <h4 style={{ fontFamily: "'Grandstander',cursive", fontSize: 16, fontWeight: 800, color: '#1B2559', lineHeight: 1.18 }}>{r.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}