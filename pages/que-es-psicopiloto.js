import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader";
import AnimatedCTA from "../components/AnimatedCTA";

export default function QueEsPsicopiloto() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <NextSeo
        title="¿Qué es Psicopiloto? | Psicología y aviación para transformar vidas"
        description="Psicopiloto une la psicología con la aviación para ofrecer terapia individual, programas de empresa y consultoría en factores humanos."
        canonical="https://psicopiloto.com/que-es-psicopiloto"
        additionalMetaTags={[
          { name: "keywords", content: "qué es Psicopiloto, psicología aviación, psicólogo Granada, terapia individual, psicología empresas, factores humanos" },
          { name: "author", content: "Psicopiloto" },
        ]}
        openGraph={{
          url: "https://psicopiloto.com/que-es-psicopiloto",
          title: "¿Qué es Psicopiloto? | Psicología y aviación para transformar vidas",
          description: "Psicopiloto une la psicología con la aviación para ofrecer terapia individual, programas de empresa y consultoría en factores humanos.",
          images: [
            { url: "https://psicopiloto.com/images/seo/que-es.jpg", width: 1200, height: 630, alt: "Qué es Psicopiloto", type: "image/jpeg" },
          ],
          site_name: "Psicopiloto",
        }}
      />

      <Nav />

      <PageHeader
        title="Psicopiloto — Uniendo aviación y psicología"
        subtitle="Un enfoque que combina la experiencia aeronáutica con la psicología para ayudarte a crecer a nivel personal o como empresa."
        backgroundImage="/header-quees.webp"
      />

      <main className="flex-grow pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* ¿Qué es Psicopiloto? */}
          <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">¿Qué es Psicopiloto?</h2>
              <p className="text-gray-700 leading-relaxed">
                Psicopiloto es un proyecto único que nace de la unión de mis dos grandes pasiones: la <strong>aviación</strong> y la <strong>psicología</strong>. Tras más de 18 años de experiencia como piloto militar, comandante en misiones de alto riesgo, instructor de vuelo y formador en gestión de recursos de tripulación (CRM) y factores humanos, decidí trasladar todo ese conocimiento al ámbito de la psicología y el desarrollo humano.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Del mismo modo que en la cabina de un avión cada decisión puede marcar la diferencia, en la vida personal y profesional también necesitamos herramientas para gestionar la presión, comunicarnos eficazmente, tomar decisiones conscientes y trabajar en equipo.
              </p>
            </div>
            <Image src="/sobre1.webp" alt="Qué es Psicopiloto" width={600} height={400} className="rounded-xl shadow-lg" />
          </section>

          {/* Misión y Visión */}
          <section className="mb-16 grid md:grid-cols-2 gap-10 items-center">
            <Image src="/sobre2.webp" alt="Misión y visión Psicopiloto" width={600} height={400} className="rounded-xl shadow-lg order-2 md:order-1" />
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">Nuestra misión</h2>
              <p className="text-gray-700 leading-relaxed">
                Acompañar a las personas y organizaciones en su viaje, integrando lo mejor de la psicología clínica con los valores y metodologías de la aviación.
              </p>
              <h2 className="text-3xl font-semibold mt-8 mb-6 text-psicopiloto-green-600">Nuestra visión</h2>
              <p className="text-gray-700 leading-relaxed">
                Convertirnos en un referente en psicología integradora y aplicada, reconocidos por un enfoque humano, práctico y transformador.
              </p>
            </div>
          </section>

          {/* Qué te ofrece Psicopiloto */}
          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-psicopiloto-green-600">¿Qué te ofrece Psicopiloto?</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
              <li><strong>Terapia individual:</strong> gestión de ansiedad, estrés, autoestima, trauma o dificultades en las relaciones.</li>
              <li><strong>Psicología aplicada a empresas:</strong> programas de liderazgo, comunicación y gestión de errores inspirados en CRM y TEM.</li>
              <li><strong>Asesoramiento en factores humanos:</strong> aplicamos metodologías de la aviación para mejorar la seguridad y eficiencia corporativa.</li>
            </ul>
          </section>

          {/* CTA */}
          <section className="text-center mt-12">
            <AnimatedCTA href="/contacto" text="👉 Contacta hoy mismo" color="green" />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
