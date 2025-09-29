// next-seo.config.js
export default {
  // --- CONFIGURACIÓN SEO Y BRANDING ---
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
        url: "https://www.psicopiloto.com/logo.png",
        width: 512,
        height: 512,
        alt: "Logo Psicopiloto, uniendo psicología y aviación",
      },
      {
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

  // --- OPTIMIZACIÓN CRÍTICA DEL FAVICON ---
  additionalLinkTags: [
    // 1. Favicon Tradicional .ico (Prioridad en Google para SERPs)
    { rel: "icon", href: "/favicon.ico" }, 
    
    // 2. Favicons PNG de diferentes resoluciones (para navegadores y Android)
    { rel: "icon", href: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    { rel: "icon", href: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    { rel: "icon", href: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },

    // 3. Apple Touch Icon (para guardar en la pantalla de inicio de dispositivos iOS)
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
  ],
};
