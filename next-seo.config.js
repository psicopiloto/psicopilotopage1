// next-seo.config.js
export default {
  title: "Psicopiloto — Psicólogo online y presencial en Granada",
  description:
    "Acompaño tu viaje hacia el bienestar con psicoterapia integradora, EMDR y terapia online. Un espacio seguro y cercano para tu crecimiento personal.",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.psicopiloto.com/",
    siteName: "Psicopiloto",
    images: [
      {
        url: "https://www.psicopiloto.com/logo.png", // ✅ logo cuadrado
        width: 512,
        height: 512,
        alt: "Logo Psicopiloto",
      },
      {
        url: "https://www.psicopiloto.com/og-image.jpg", // ✅ imagen social
        width: 1200,
        height: 630,
        alt: "Psicopiloto — Psicólogo online y presencial en Granada",
      },
    ],
  },
  twitter: {
    handle: "@psicopiloto",
    site: "@psicopiloto",
    cardType: "summary_large_image",
  },
  additionalLinkTags: [
    { rel: "icon", href: "/favicon.ico" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
  ],
};
