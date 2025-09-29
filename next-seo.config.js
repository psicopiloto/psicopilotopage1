// next-seo.config.js
export default {
  // ✨ CORRECCIÓN A: Title más comercial y con mayor autoridad (E-A-T)
  title: "Psicopiloto | Psicólogo online en Granada — Terapia, EMDR y Liderazgo",
  
  // ✨ CORRECCIÓN B: Description más directa y orientada al beneficio (máx. 160 caracteres)
  description:
    "Acompaño tu viaje hacia el bienestar con psicoterapia integradora, EMDR y enfoque basado en factores humanos. Recupera el control y la calma en tu vida.", // (Aprox. 158 caracteres)
    
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
        alt: "Logo Psicopiloto, uniendo psicología y aviación", // ✨ CORRECCIÓN C: Alt más descriptivo.
      },
      {
        url: "https://www.www.psicopiloto.com/og-image.jpg",
        width: 1200,
        height: 630,
        // ✨ CORRECCIÓN C: Alt descriptivo para la imagen social.
        alt: "Psicopiloto — Psicólogo especialista en estrés, ansiedad y trauma", 
      },
    ],
  },
  twitter: {
    // Si usas un handle de Twitter específico, asegúrate de que sea ese, si no existe es mejor dejarlo vacío.
    handle: "@jcrodriguezret", // ✅ Asumiendo que el handle del profesional es el más activo
    site: "@jcrodriguezret", 
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    { rel: "icon", href: "/favicon.ico" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
  ],
};
