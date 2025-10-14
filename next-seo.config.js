// next-seo.config.js
export default {
  title: "Psicopiloto | Psicólogo online en Granada — Terapia, EMDR y Liderazgo",
  description:
    "Acompaño tu viaje hacia el bienestar con psicoterapia integradora, EMDR y enfoque basado en factores humanos. Recupera el control y la calma en tu vida.",

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.psicopiloto.com/",
    siteName: "Psicopiloto",
    images: [
      {
        // ✨ MEJORA: Usar el logo optimizado .webp
        url: "https://www.psicopiloto.com/logo.webp",
        width: 512,
        height: 512,
        alt: "Logo Psicopiloto, uniendo psicología y aviación",
      },
      {
        // Esta es la imagen principal para redes sociales.
        // Asegúrate de tener un archivo 'og-image.jpg' en tu carpeta /public
        url: "https://www.psicopiloto.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Psicopiloto — Psicólogo especialista en estrés, ansiedad y trauma",
      },
    ],
  },
  twitter: {
    handle: "@jcrodriguezret",
    site: "@jcrodriguezret",
    cardType: "summary_large_image",
  },

  additionalLinkTags: [
    { rel: "icon", href: "/favicon.ico" },
    { rel: "icon", href: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { rel: "icon", href: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { rel: "icon", href: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
  ],
};
