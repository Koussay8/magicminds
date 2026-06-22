import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export const metadata = {
  title: "Magic Minds — Le NutriScore pour les écrans",
  description:
    "Magic Minds est un studio, un média et une application qui transforment le temps d'écran des 6 à 11 ans en moments d'apprentissage, d'éveil et de créativité.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Grandstander:wght@700;800;900&family=VT323&family=Boogaloo&family=Pacifico&family=Courier+Prime:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
