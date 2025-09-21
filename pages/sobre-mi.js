import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function SobreMi() {
  return (
    <div className="min-h-screen flex flex-col">
      <NextSeo
        title="Sobre mí | Psicopiloto"
        description="Soy psicólogo con habilitación sanitaria y piloto militar. En Psicopiloto uno la aviación y la psicología para ayudarte a manejar la ansiedad, el estrés, el trauma y recuperar tu confianza."
        canonical="https://www.psicopiloto.com/sobre-mi"
        openGraph={{
          url: "https://www.psicopiloto.com/sobre-mi",
          title: "Sobre mí | Psicopiloto",
          description:
            "Conoce mi trayectoria como psicólogo y piloto militar. Descubre cómo combino aviación y psicología para ofrecerte un enfoque único en ansiedad, autoestima, trauma y terapia.",
          images: [
            {
              url: "https://www.psicopiloto.com/og-sobre-mi.jpg", // ⚡ pon aquí tu imagen OG real
              width: 1200,
              height: 630,
              alt: "Sobre mí - Psicopiloto",
            },
          ],
          siteName: "Psicopiloto",
        }}
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "psicólogo Granada, psicólogo online, ansiedad, autoestima, trauma, terapia EMDR, psicología aeronáutica, piloto militar",
          },
        ]}
      />

      <Nav />
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-10 text-center text-psicopiloto-green-600">
            Sobre mí
          </h1>

          {/* Intro */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p>
                  Mi nombre es <strong>[Tu Nombre]</strong> y soy{" "}
                  <strong>psicólogo con Habilitación Sanitaria</strong> y{" "}
                  <strong>piloto militar</strong>. El proyecto{" "}
                  <strong>Psicopiloto</strong> nace de la unión de mis dos
                  pasiones: la <strong>aviación</strong> y la{" "}
                  <strong>psicología</strong>.
                </p>
                <p className="mt-4">
                  A lo largo de mi vida he aprendido que tanto en el aire como
                  en tierra, la clave para afrontar las turbulencias está en la{" "}
                  <strong>preparación mental</strong>, la{" "}
                  <strong>gestión de las emociones</strong> y la{" "}
                  <strong>toma de decisiones bajo presión</strong>.
                </p>
              </div>
              <Image
                src="/sobre1.jpg"
                alt="Psicopiloto - experiencia en psicología"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* El resto de tu contenido se mantiene igual */}
          {/* ... */}
        </div>
      </main>
      <Footer />
    </div>
  );
}
