"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLang } from "@/components/LanguageProvider";

const hashMap = {
  mentions: 'mentions', 'mentions-legales': 'mentions',
  confidentialite: 'confid', confid: 'confid', privacy: 'confid',
  cookies: 'cookies',
  cgu: 'cgu', terms: 'cgu',
  cgv: 'cgv'
};

const DOC_ORDER = [
  ['mentions', 'mentions'],
  ['confid', 'confidentialite'],
  ['cookies', 'cookies'],
  ['cgu', 'cgu'],
  ['cgv', 'cgv'],
];

const i18n = {
  fr: {
    eyebrow: 'INFORMATIONS LÉGALES',
    title: 'Mentions & politiques',
    lede: "Transparence totale. Retrouvez ici l'ensemble des documents légaux qui encadrent l'utilisation du site et de l'application Magic Minds.",
    updated: 'Dernière mise à jour :',
    contactCard: { title: 'Une question juridique ?', text: "Notre DPO et notre équipe légale répondent sous 30 jours." },
    docs: {
      mentions: {
        label: 'Mentions légales', icon: '⚖️', bg: '#B8E6C8', updated: '20 juin 2026',
        sections: [
          { h: 'Éditeur du site', paras: ["Le site magicminds.fr est édité par Magic Minds SAS, société par actions simplifiée au capital de 10 000 €, immatriculée au RCS de Paris sous le numéro 000 000 000.", "Siège social : 5 rue de la Découverte, 75000 Paris, France. Numéro de TVA intracommunautaire : FR00 000000000."] },
          { h: 'Directeur de la publication', paras: ["Le directeur de la publication est Lorenzo Neft, en sa qualité de Président de Magic Minds SAS."] },
          { h: 'Contact', paras: ["Vous pouvez contacter l'éditeur par courriel à l'adresse contact@magicminds.fr ou par courrier postal à l'adresse du siège social indiquée ci-dessus."] },
          { h: 'Hébergement', paras: ["Le site est hébergé par un prestataire situé dans l'Union européenne, garantissant un niveau de protection des données conforme au RGPD. Les coordonnées complètes de l'hébergeur sont disponibles sur simple demande à contact@magicminds.fr."] },
          { h: 'Propriété intellectuelle', paras: ["L'ensemble des contenus présents sur le site (textes, illustrations, personnages du Chimera World, logos, vidéos, marques) est la propriété exclusive de Magic Minds SAS ou de ses partenaires, et est protégé par le droit français et international de la propriété intellectuelle.", "Toute reproduction, représentation ou exploitation, totale ou partielle, sans autorisation écrite préalable est strictement interdite et constitue une contrefaçon."] },
          { h: 'Crédits', paras: ["Conception et réalisation : Magic Minds SAS. Illustrations et personnages : studio Magic Minds."] }
        ]
      },
      confid: {
        label: 'Politique de confidentialité', icon: '🔒', bg: '#C9B6F2', updated: '20 juin 2026',
        sections: [
          { h: 'Notre engagement', paras: ["La protection des données des familles, et tout particulièrement des enfants, est au cœur de notre mission. Cette politique explique quelles données nous collectons, pourquoi, et comment vous gardez le contrôle, conformément au Règlement (UE) 2016/679 (RGPD) et à la loi Informatique et Libertés."] },
          { h: 'Données collectées', paras: ["Données de compte : adresse e-mail du parent, prénom de l'enfant, tranche d'âge. Données d'usage : contenus consultés, progression, temps d'utilisation, à des fins de personnalisation et d'analyse agrégée.", "Nous ne collectons jamais de données sensibles et ne demandons jamais à l'enfant d'informations personnelles directes."] },
          { h: 'Finalités et bases légales', paras: ["Fourniture du service (exécution du contrat), amélioration et sécurité (intérêt légitime), communications marketing (consentement, révocable à tout moment).", "Les données ne sont jamais vendues à des tiers."] },
          { h: 'Durée de conservation', paras: ["Les données sont conservées le temps strictement nécessaire à la finalité poursuivie, puis supprimées ou anonymisées. Les comptes inactifs depuis 24 mois sont supprimés après notification."] },
          { h: 'Vos droits', paras: ["Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité. Exercez-les à dpo@magicminds.fr. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr)."] },
          { h: 'Protection des mineurs', paras: ["Le compte est créé et géré par un parent ou tuteur légal. Le consentement parental est requis pour tout traitement concernant un enfant de moins de 15 ans, conformément à l'article 8 du RGPD."] }
        ]
      },
      cookies: {
        label: 'Politique cookies', icon: '🍪', bg: '#FFD83D', updated: '20 juin 2026',
        sections: [
          { h: "Qu'est-ce qu'un cookie ?", paras: ["Un cookie est un petit fichier déposé sur votre terminal lors de la visite d'un site. Il permet de mémoriser des informations relatives à votre navigation."] },
          { h: 'Cookies utilisés', paras: ["Cookies strictement nécessaires : indispensables au fonctionnement du site (préférence de langue, gestion de session). Ils ne nécessitent pas votre consentement.", "Cookies de mesure d'audience : statistiques de fréquentation anonymisées. Cookies marketing : déposés uniquement avec votre consentement."] },
          { h: 'Votre consentement', paras: ["Lors de votre première visite, un bandeau vous permet d'accepter ou de refuser les cookies non essentiels. Vous pouvez modifier vos choix à tout moment via le lien « Gérer mes cookies » en pied de page."] },
          { h: 'Durée de vie', paras: ["Les cookies ont une durée de vie maximale de 13 mois. À l'issue de ce délai, votre consentement est à nouveau sollicité."] },
          { h: 'Gérer les cookies', paras: ["Vous pouvez configurer votre navigateur pour refuser tout ou partie des cookies. Le refus des cookies strictement nécessaires peut toutefois dégrader votre expérience de navigation."] }
        ]
      },
      cgu: {
        label: "Conditions générales d'utilisation", icon: '📄', bg: '#FF9E7A', updated: '20 juin 2026',
        sections: [
          { h: 'Objet', paras: ["Les présentes CGU définissent les modalités d'accès et d'utilisation du site et de l'application Magic Minds. Toute utilisation implique l'acceptation pleine et entière des présentes conditions."] },
          { h: 'Accès au service', paras: ["Le service est accessible aux parents et tuteurs légaux majeurs, qui en assument la responsabilité pour les enfants dont ils ont la charge. L'accès peut être suspendu pour maintenance ou en cas de manquement aux présentes CGU."] },
          { h: 'Compte utilisateur', paras: ["Vous êtes responsable de la confidentialité de vos identifiants et de toute activité réalisée depuis votre compte. Vous vous engagez à fournir des informations exactes lors de l'inscription."] },
          { h: 'Comportements interdits', paras: ["Sont notamment interdits : toute tentative de contournement des mesures de sécurité, l'extraction non autorisée de contenus, l'usage du service à des fins illicites ou portant atteinte aux droits de tiers."] },
          { h: 'Responsabilité', paras: ["Magic Minds met tout en œuvre pour assurer un service de qualité mais ne saurait être tenu responsable des dommages indirects résultant de l'utilisation du service. L'application est un outil d'accompagnement et ne se substitue pas à la vigilance parentale."] },
          { h: 'Droit applicable', paras: ["Les présentes CGU sont régies par le droit français. Tout litige relève de la compétence des tribunaux français, sous réserve des dispositions protectrices du consommateur."] }
        ]
      },
      cgv: {
        label: 'Conditions générales de vente', icon: '🛒', bg: '#4E63E6', updated: '20 juin 2026',
        sections: [
          { h: "Champ d'application", paras: ["Les présentes CGV s'appliquent à tout abonnement payant souscrit aux services Magic Minds. Elles complètent les CGU."] },
          { h: 'Offres et prix', paras: ["Les offres d'abonnement et leurs tarifs sont indiqués en euros toutes taxes comprises sur le site et l'application au moment de la commande. Magic Minds se réserve le droit de modifier ses tarifs, les abonnements en cours restant aux conditions souscrites."] },
          { h: 'Commande et paiement', paras: ["Le paiement s'effectue en ligne par les moyens proposés lors de la souscription. L'abonnement est activé après confirmation du paiement. Une confirmation récapitulative est adressée par e-mail."] },
          { h: 'Droit de rétractation', paras: ["Conformément au Code de la consommation, vous disposez d'un délai de 14 jours pour vous rétracter. En cas de fourniture immédiate du service numérique avec votre accord exprès, ce droit peut ne plus s'appliquer une fois le service pleinement exécuté."] },
          { h: 'Résiliation', paras: ["Vous pouvez résilier votre abonnement à tout moment depuis votre espace personnel. La résiliation prend effet à la fin de la période d'engagement en cours, sans reconduction."] },
          { h: 'Service client', paras: ["Pour toute question relative à votre commande, contactez contact@magicminds.fr. Les réclamations sont traitées dans les meilleurs délais."] }
        ]
      }
    }
  },
  en: {
    eyebrow: 'LEGAL INFORMATION',
    title: 'Notices & policies',
    lede: "Full transparency. Find here all the legal documents governing the use of the Magic Minds website and app.",
    updated: 'Last updated:',
    contactCard: { title: 'A legal question?', text: "Our DPO and legal team reply within 30 days." },
    docs: {
      mentions: {
        label: 'Legal notice', icon: '⚖️', bg: '#B8E6C8', updated: 'June 20, 2026',
        sections: [
          { h: 'Publisher', paras: ["The magicminds.fr website is published by Magic Minds SAS, a simplified joint-stock company with a capital of €10,000, registered with the Paris Trade Register under number 000 000 000.", "Registered office: 5 rue de la Découverte, 75000 Paris, France. Intra-community VAT number: FR00 000000000."] },
          { h: 'Publication director', paras: ["The publication director is Lorenzo Neft, in his capacity as President of Magic Minds SAS."] },
          { h: 'Contact', paras: ["You may contact the publisher by email at contact@magicminds.fr or by post at the registered office address above."] },
          { h: 'Hosting', paras: ["The website is hosted by a provider located within the European Union, ensuring a level of data protection compliant with the GDPR. Full host details are available on request at contact@magicminds.fr."] },
          { h: 'Intellectual property', paras: ["All content on the site (texts, illustrations, Chimera World characters, logos, videos, trademarks) is the exclusive property of Magic Minds SAS or its partners and is protected by French and international intellectual property law.", "Any reproduction or use, in whole or in part, without prior written authorization is strictly prohibited and constitutes infringement."] },
          { h: 'Credits', paras: ["Design and development: Magic Minds SAS. Illustrations and characters: Magic Minds studio."] }
        ]
      },
      confid: {
        label: 'Privacy policy', icon: '🔒', bg: '#C9B6F2', updated: 'June 20, 2026',
        sections: [
          { h: 'Our commitment', paras: ["Protecting families' data, and children's in particular, is at the heart of our mission. This policy explains what data we collect, why, and how you stay in control, in accordance with Regulation (EU) 2016/679 (GDPR)."] },
          { h: 'Data collected', paras: ["Account data: parent's email, child's first name, age range. Usage data: content viewed, progress, time spent, for personalization and aggregate analytics.", "We never collect sensitive data and never ask children for direct personal information."] },
          { h: 'Purposes and legal bases', paras: ["Service provision (contract performance), improvement and security (legitimate interest), marketing communications (consent, revocable at any time).", "Data is never sold to third parties."] },
          { h: 'Retention period', paras: ["Data is kept only as long as strictly necessary for the stated purpose, then deleted or anonymized. Accounts inactive for 24 months are deleted after notice."] },
          { h: 'Your rights', paras: ["You have the right to access, rectify, erase, restrict, object and to data portability. Exercise them at dpo@magicminds.fr. You may also lodge a complaint with the CNIL (www.cnil.fr)."] },
          { h: 'Protection of minors', paras: ["The account is created and managed by a parent or legal guardian. Parental consent is required for any processing concerning a child under 15, per Article 8 of the GDPR."] }
        ]
      },
      cookies: {
        label: 'Cookie policy', icon: '🍪', bg: '#FFD83D', updated: 'June 20, 2026',
        sections: [
          { h: 'What is a cookie?', paras: ["A cookie is a small file placed on your device when you visit a site. It allows information about your browsing to be remembered."] },
          { h: 'Cookies we use', paras: ["Strictly necessary cookies: essential to the site's operation (language preference, session). They do not require your consent.", "Audience measurement cookies: anonymized traffic statistics. Marketing cookies: only with your consent."] },
          { h: 'Your consent', paras: ["On your first visit, a banner lets you accept or decline non-essential cookies. You can change your choices at any time via the 'Manage cookies' link in the footer."] },
          { h: 'Lifespan', paras: ["Cookies have a maximum lifespan of 13 months. After this period, your consent is requested again."] },
          { h: 'Managing cookies', paras: ["You can configure your browser to refuse some or all cookies. Refusing strictly necessary cookies may however degrade your browsing experience."] }
        ]
      },
      cgu: {
        label: 'Terms of use', icon: '📄', bg: '#FF9E7A', updated: 'June 20, 2026',
        sections: [
          { h: 'Purpose', paras: ["These Terms of Use define how the Magic Minds website and app may be accessed and used. Any use implies full acceptance of these terms."] },
          { h: 'Access to the service', paras: ["The service is available to adult parents and legal guardians, who assume responsibility for the children in their care. Access may be suspended for maintenance or in case of breach of these terms."] },
          { h: 'User account', paras: ["You are responsible for keeping your credentials confidential and for all activity from your account. You agree to provide accurate information when registering."] },
          { h: 'Prohibited conduct', paras: ["Prohibited in particular: any attempt to circumvent security measures, unauthorized extraction of content, and use of the service for unlawful purposes or infringing third-party rights."] },
          { h: 'Liability', paras: ["Magic Minds does its best to ensure a quality service but cannot be held liable for indirect damages arising from its use. The app is a support tool and does not replace parental vigilance."] },
          { h: 'Governing law', paras: ["These terms are governed by French law. Any dispute falls under the jurisdiction of the French courts, subject to consumer protection provisions."] }
        ]
      },
      cgv: {
        label: 'Terms of sale', icon: '🛒', bg: '#4E63E6', updated: 'June 20, 2026',
        sections: [
          { h: 'Scope', paras: ["These Terms of Sale apply to any paid subscription to Magic Minds services. They complement the Terms of Use."] },
          { h: 'Offers and prices', paras: ["Subscription offers and prices are shown in euros including all taxes on the site and app at the time of order. Magic Minds reserves the right to change its prices; ongoing subscriptions remain at the subscribed terms."] },
          { h: 'Order and payment', paras: ["Payment is made online via the methods offered at subscription. The subscription is activated after payment confirmation. A summary confirmation is sent by email."] },
          { h: 'Right of withdrawal', paras: ["Under consumer law, you have 14 days to withdraw. Where the digital service is supplied immediately with your express agreement, this right may no longer apply once the service is fully performed."] },
          { h: 'Cancellation', paras: ["You can cancel your subscription at any time from your account. Cancellation takes effect at the end of the current commitment period, with no renewal."] },
          { h: 'Customer support', paras: ["For any question about your order, contact contact@magicminds.fr. Claims are handled as promptly as possible."] }
        ]
      }
    }
  }
};

export default function LegalPage() {
  const { lang } = useLang();
  const t = i18n[lang];
  const [doc, setDoc] = useState('mentions');

  useEffect(() => {
    function applyHash() {
      const h = (window.location.hash || '').replace('#', '').toLowerCase();
      if (hashMap[h]) setDoc(hashMap[h]);
    }
    applyHash();
    window.addEventListener('hashchange', applyHash);
    return () => window.removeEventListener('hashchange', applyHash);
  }, []);

  function go(docKey, hash) {
    setDoc(docKey);
    try { history.replaceState(null, '', '#' + hash); } catch (e) {}
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const activeDoc = t.docs[doc];

  return (
    <div style={{ fontFamily: "'Nunito',sans-serif", color: '#1B2559' }}>
      <Navbar />

      {/* HERO */}
      <section className="mm-section" style={{ background: 'linear-gradient(168deg,#DCF0FF 0%,#EDF5FF 42%,#FBF6E9 88%)', padding: '140px 40px 64px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
        <div style={{ position: 'absolute', top: 120, left: '9%', opacity: .5, animation: 'cld 9s ease-in-out infinite', pointerEvents: 'none' }}>
          <div style={{ position: 'relative', width: 84, height: 36, background: 'rgba(255,255,255,.9)', borderRadius: 999 }}>
            <div style={{ position: 'absolute', top: -14, left: 12, width: 30, height: 30, background: 'rgba(255,255,255,.9)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', top: -20, left: 28, width: 40, height: 40, background: 'rgba(255,255,255,.9)', borderRadius: '50%' }} />
          </div>
        </div>
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', background: '#1B2559', color: 'white', padding: '6px 18px', borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: '.14em', marginBottom: 24, boxShadow: '3px 3px 0 rgba(27,37,89,.14)' }}>{t.eyebrow}</div>
          <h1 style={{ fontFamily: "'Grandstander',cursive", fontSize: 'clamp(38px,6vw,72px)', fontWeight: 900, lineHeight: .96, letterSpacing: '-.02em', color: '#1B2559', marginBottom: 18, textShadow: '4px 4px 0 rgba(27,37,89,.08)' }}>{t.title}</h1>
          <p style={{ fontSize: 'clamp(15px,1.8vw,18px)', fontWeight: 600, color: '#5A6178', lineHeight: 1.66, maxWidth: 560, margin: '0 auto' }}>{t.lede}</p>
        </div>
      </section>

      {/* BODY: SIDEBAR + CONTENT */}
      <section className="mm-section" style={{ background: '#FBF6E9', padding: 'clamp(40px,5vw,72px) 40px clamp(64px,8vw,110px)' }}>
        <div className="mm-grid" style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '268px 1fr', gap: 40, alignItems: 'start' }}>

          {/* Sidebar */}
          <aside style={{ position: 'sticky', top: 96, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {DOC_ORDER.map(([key, hash]) => {
              const d = t.docs[key];
              const active = doc === key;
              return (
                <button
                  key={key}
                  onClick={() => go(key, hash)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 12, width: '100%', textAlign: 'left',
                    border: 'none', cursor: 'pointer', fontFamily: "'Nunito',sans-serif", fontSize: 14,
                    fontWeight: active ? 800 : 700,
                    padding: '13px 16px', borderRadius: 16,
                    background: active ? '#FFFFFF' : 'transparent',
                    color: active ? '#1B2559' : '#5A6178',
                    boxShadow: active ? '0 8px 22px rgba(27,37,89,.08)' : 'none',
                    transition: 'background .15s'
                  }}
                >
                  <span style={{ fontSize: 18, width: 24, textAlign: 'center', flexShrink: 0 }}>{d.icon}</span>
                  <span style={{ lineHeight: 1.25, textAlign: 'left' }}>{d.label}</span>
                </button>
              );
            })}
            <div style={{ marginTop: 14, background: 'white', borderRadius: 18, padding: '18px 20px', boxShadow: '0 8px 24px rgba(27,37,89,.06)', border: '1px solid rgba(27,37,89,.05)' }}>
              <div style={{ fontSize: 11, fontWeight: 800, color: '#1B2559', marginBottom: 6 }}>{t.contactCard.title}</div>
              <p style={{ fontSize: 12, color: '#5A6178', fontWeight: 600, lineHeight: 1.55, marginBottom: 10 }}>{t.contactCard.text}</p>
              <a href="mailto:contact@magicminds.fr" style={{ fontSize: 12, fontWeight: 800, color: '#4E63E6', textDecoration: 'none' }}>contact@magicminds.fr →</a>
            </div>
          </aside>

          {/* Document content */}
          <article style={{ background: '#FFFFFF', borderRadius: 28, padding: 'clamp(32px,4vw,56px) clamp(28px,4vw,56px)', boxShadow: '0 12px 40px rgba(27,37,89,.07)', border: '1px solid rgba(27,37,89,.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 8 }}>
              <div style={{ width: 52, height: 52, borderRadius: 16, background: activeDoc.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26, boxShadow: '2px 2px 0 rgba(27,37,89,.1)', flexShrink: 0 }}>{activeDoc.icon}</div>
              <h2 style={{ fontFamily: "'Grandstander',cursive", fontSize: 'clamp(26px,3.4vw,40px)', fontWeight: 900, color: '#1B2559', lineHeight: 1.05 }}>{activeDoc.label}</h2>
            </div>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#5A6178', opacity: .7, letterSpacing: '.04em', marginBottom: 34 }}>{t.updated} {activeDoc.updated}</p>

            {activeDoc.sections.map((sec, si) => (
              <div key={si} style={{ marginBottom: 30 }}>
                <h3 style={{ fontFamily: "'Grandstander',cursive", fontSize: 20, fontWeight: 800, color: '#1B2559', marginBottom: 12, lineHeight: 1.2 }}>{sec.h}</h3>
                {sec.paras.map((p, pi) => (
                  <p key={pi} style={{ fontSize: 15, color: '#5A6178', lineHeight: 1.78, fontWeight: 600, marginBottom: 12 }}>{p}</p>
                ))}
              </div>
            ))}
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}
