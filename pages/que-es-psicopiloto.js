import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function QueEsPsicopiloto() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        {/* SEO */}
        <title>Psicopiloto | Psicología innovadora con enfoque en aviación</title>
        <meta
          name="description"
          content="Psicopiloto integra aviación y psicología para ayudarte a tomar el control de tu vida. Descubre nuestra misión, visión y metodología práctica para tu bienestar."
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Psicopiloto | Psicología innovadora con enfoque en aviación"
        />
        <meta
          property="og:description"
          content="Psicopiloto integra aviación y psicología para ayudarte a tomar el control de tu vida. Descubre nuestra misión, visión y metodología práctica para tu bienestar."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.psicopiloto.com/que-es-psicopiloto"
        />
        <meta
          property="og:image"
          content="https://www.psicopiloto.com/og-image.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Psicopiloto | Psicología innovadora con enfoque en aviación"
        />
        <meta
          name="twitter:description"
          content="Psicopiloto integra aviación y psicología para ayudarte a tomar el control de tu vida. Descubre nuestra misión, visión y metodología práctica para tu bienestar."
        />
        <meta
          name="twitter:image"
          content="https://www.psicopiloto.com/og-image.jpg"
        />
      </Head>

      <Nav />
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-10 text-center">
            Qué es Psicopiloto
          </h1>

          {/* Introducción */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p>
                  <strong>Psicopiloto</strong> nace con una idea clara: unir lo
                  mejor de la <strong>psicología</strong> y la{" "}
                  <strong>aviación</strong> para ofrecer un enfoque innovador en
                  el acompañamiento personal. Nuestra misión es ayudarte a
                  recuperar el control de tu vida, entrenando la mente igual que
                  se entrena a un piloto: con preparación, claridad y confianza.
                </p>
                <p className="mt-4">
                  La vida, como el vuelo, está llena de turbulencias. La clave
                  está en la <strong>gestión emocional</strong>, la{" "}
                  <strong>resiliencia</strong> y la{" "}
                  <strong>toma de decisiones bajo presión</strong>. Esa es la
                  esencia de Psicopiloto.
                </p>
              </div>
              <Image
                src="/sobre1.jpg"
                alt="Psicopiloto - uniendo psicología y aviación"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* Filosofía */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <Image
                src="/sobre2.jpg"
                alt="Filosofía de Psicopiloto"
                width={600}
                height={400}
                className="rounded-lg shadow-md order-2 md:order-1"
              />
              <div className="order-1 md:order-2">
                <h2 className="text-2xl font-semibold mb-4">Nuestra filosofía</h2>
                <p>
                  Creemos que todo proceso de cambio requiere una{" "}
                  <strong>preparación mental adecuada</strong>. Igual que un
                  piloto no despega sin revisar su avión, nadie debería
                  enfrentarse a sus retos personales sin herramientas para
                  gestionarlos.
                </p>
                <p className="mt-4">
                  En Psicopiloto trabajamos con una{" "}
                  <strong>psicología práctica</strong>, centrada en darte
                  recursos reales y aplicables desde la primera sesión.
                </p>
              </div>
            </div>
          </section>

          {/* El proyecto */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  El proyecto Psicopiloto
                </h2>
                <p>
                  Nuestro enfoque une la <strong>experiencia aeronáutica</strong>{" "}
                  con la <strong>psicología clínica y sanitaria</strong>. Con la
                  misma metodología que se aplica en la cabina de un avión para
                  mantener la seguridad, te acompañamos en tus propios procesos
                  de vida: ansiedad, gestión emocional, toma de decisiones,
                  autoestima y superación personal.
                </p>
                <p className="mt-4">
                  Porque al final, se trata de que tú seas el piloto de tu
                  propio camino.
                </p>
              </div>
              <Image
                src="/sobre3.jpg"
                alt="El proyecto Psicopiloto"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* CTA */}
          <section className="text-center">
            <h2 className="text-2xl font-semibold mb-6">
              ¿Quieres empezar tu viaje con Psicopiloto?
            </h2>
            <Link href="/contacto">
              <span className="px-6 py-3 bg-softorange-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-softorange-600 transition cursor-pointer">
                Reserva tu primera consulta
              </span>
            </Link>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
