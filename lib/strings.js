// Shared navigation + footer strings (FR / EN)

export const nav = {
  fr: { studio: "Studio", lab: "Lab", mag: "Le Mag", serie: "Série animée", about: "À propos", legal: "Légal", cta: "Liste d'attente" },
  en: { studio: "Studio", lab: "Lab", mag: "The Mag", serie: "Animated series", about: "About", legal: "Legal", cta: "Waitlist" },
};

// Order + routes for the top navbar
// Série animée lives inside Studio; Légal lives in the footer only
export const navItems = [
  { key: "studio", href: "/studio" },
  { key: "lab", href: "/lab" },
  { key: "mag", href: "/mag" },
  { key: "about", href: "/about" },
];

export const footerStrings = {
  fr: {
    pages: "Pages",
    social: "Nous suivre",
    legal: "Légal",
    tagline: "Le NutriScore pour les écrans",
    mission: "Éveiller les esprits, protéger les enfants.",
    rights: "© 2026 Magic Minds. Tous droits réservés.",
    future: "For a better digital future ✨",
    legalLinks: [
      ["/legal#mentions", "Mentions légales"],
      ["/legal#confidentialite", "Confidentialité"],
      ["/legal#cookies", "Cookies"],
      ["/legal#cgu", "CGU"],
      ["/legal#cgv", "CGV"],
    ],
  },
  en: {
    pages: "Pages",
    social: "Follow us",
    legal: "Legal",
    tagline: "The NutriScore for screens",
    mission: "Awakening minds, protecting children.",
    rights: "© 2026 Magic Minds. All rights reserved.",
    future: "For a better digital future ✨",
    legalLinks: [
      ["/legal#mentions", "Legal notice"],
      ["/legal#confidentialite", "Privacy"],
      ["/legal#cookies", "Cookies"],
      ["/legal#cgu", "Terms of use"],
      ["/legal#cgv", "Terms of sale"],
    ],
  },
};

// Footer "Pages" column links
export const footerPages = [
  { key: "studio", href: "/studio" },
  { key: "lab", href: "/lab" },
  { key: "mag", href: "/mag" },
  { key: "serie", href: "/serie" },
  { key: "about", href: "/about" },
];
