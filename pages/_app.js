// pages/_app.js

import "../styles/globals.css";
// ✨ CAMBIO: Ya no se necesita 'Head' de next/head en este archivo
import CookiesBanner from "../components/CookiesBanner";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import BackgroundLogo from "../components/BackgroundLogo";
import WhatsAppButton from "../components/WhatsAppButton";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${nunito.variable} relative min-h-screen font-sans`}>
      
      {/* ✨ CAMBIO: La sección <Head> ha sido eliminada para evitar duplicados. */}

      {/* Configuración SEO global */}
      <DefaultSeo {...SEO} />

      {/* JSON-LD para que Google entienda la organización y el logo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Psicopiloto",
            url: "https://www.psicopiloto.com",
            logo: "https://www.psicopiloto.com/logo.webp",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+34 676 230 537",
              contactType: "customer service",
              areaServed: "ES",
              availableLanguage: ["Spanish", "English"],
            },
            sameAs: [
              "https://www.instagram.com/psicopiloto",
              "https://www.linkedin.com/in/jcrodriguezret",
              "https://twitter.com/jcrodriguezret",
            ],
          }),
        }}
      />

      {/* Contenedor principal con elementos globales */}
      <div className="relative z-10">
        <Component {...pageProps} />
        <CookiesBanner />
        <WhatsAppButton />
      </div>
    </div>
  );
}

export default MyApp;
