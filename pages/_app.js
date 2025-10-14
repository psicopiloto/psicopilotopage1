// pages/_app.js

import "../styles/globals.css";
import Head from "next/head";
import CookiesBanner from "../components/CookiesBanner";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import BackgroundLogo from "../components/BackgroundLogo";
import WhatsAppButton from "../components/WhatsAppButton";
// ✨ MEJORA 1: Importar la fuente 'Nunito' con next/font
import { Nunito } from "next/font/google";

// ✨ MEJORA 2: Configurar la fuente para usarla en toda la web
const nunito = Nunito({
  subsets: ["latin"],
  display: "swap", // Clave para el rendimiento: evita que la fuente bloquee la carga
  variable: "--font-nunito", // La usaremos como variable CSS en Tailwind
});

function MyApp({ Component, pageProps }) {
  return (
    // ✨ MEJORA 3: Aplicar la variable de la fuente al contenedor principal
    <div className={`${nunito.variable} relative min-h-screen font-sans`}>
      {/* Head global simplificado (los favicons los gestiona next-seo) */}
      <Head>
        <meta name="theme-color" content="#ffffff" />
      </Head>

      {/* Configuración SEO global */}
      <DefaultSeo {...SEO} />

      {/* JSON-LD con la ruta del logo corregida */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Psicopiloto",
            url: "https://www.psicopiloto.com",
            // ✨ MEJORA 4: Usar el logo optimizado .webp
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
