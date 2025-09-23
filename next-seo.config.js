export default {
  title: "Psicopiloto — Psicólogo online y presencial en Granada",
  description:
    "Acompaño tu viaje hacia el bienestar con psicoterapia integradora, EMDR y terapia online. Un espacio seguro y cercano para tu crecimiento personal.",
  canonical: "https://www.psicopiloto.com/",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.psicopiloto.com/",
    siteName: "Psicopiloto",
    title: "Psicopiloto — Psicólogo online y presencial en Granada",
    description:
      "Psicoterapia integradora, EMDR y terapia online en Granada. Acompañamiento profesional en un espacio seguro y cercano para tu bienestar y crecimiento personal.",
    images: [
      {
        url: "https://www.psicopiloto.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Psicopiloto — Psicólogo online y presencial en Granada",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@psicopiloto",
    site: "@psicopiloto",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "psicólogo online Granada, terapia EMDR, psicoterapia integradora, salud mental, psicólogo presencial Granada, terapia psicológica online",
    },
    {
      name: "author",
      content: "Jose Carlos Rodríguez Retamar",
    },
  ],
  additionalLinkTags: [
    { rel: "icon", href: "/favicon.ico" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
    { rel: "manifest", href: "/site.webmanifest" },
  ],
};


/*
Cambios y optimizaciones aplicadas:
- Canonical añadido para SEO canónico.
- Meta tags ampliadas con keywords y autor.
- OpenGraph mejorado para claridad, persuasión y consistencia visual.
- additionalLinkTags añadidos para favicon, apple-touch-icon y manifest (UX y PWA-ready).
- Se especificó type en la imagen OG para compatibilidad.

Sugerencia opcional:
- Implementar JSON-LD LocalBusiness o ProfessionalService en <Head> para SEO local, confianza y rich results.
*/
