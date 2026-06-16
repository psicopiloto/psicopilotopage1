// next-seo.config.js
export default {
  // 🚀 TÍTULO BLINDADO LEGALMENTE: Usamos tu denominación exacta oficial
  titleTemplate: "%s | Psicopiloto® Granada",
  title: "Psicólogo con Habilitación Sanitaria Especialista en Trauma y EMDR",
  description:
    "Acompaño tu viaje hacia el bienestar con psicoterapia integradora, EMDR y enfoque basado en factores humanos. Recupera el control y la calma en tu vida.",

  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.psicopiloto.com/",
    siteName: "Psicopiloto",
    images: [
      {
        url: "https://www.psicopiloto.com/logo.webp",
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
};
