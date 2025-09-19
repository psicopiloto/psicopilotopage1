import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function QueEsPsicopiloto() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Psicopiloto | Psicología innovadora con enfoque en aviación</title>
        <meta
          name="description"
          content="Psicopiloto integra aviación y psicología para ayudarte a tomar el control de tu vida. Descubre nuestra misión, visión y metodología práctica para tu bienestar."
        />
      </Head>
      <Nav />
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-10 text-center">
            Qué es Psicopiloto
          </h1>

          {/* Intro */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p>
                  <strong>Psicopiloto</strong> nace de la unión entre dos pasiones: 
                  la <strong>aviación</strong> y la <strong>psicología</strong>. 
                  Soy <strong>Person</strong>, piloto e instructor de vuelo, además de psicólogo. 
                  Durante años he aprendido que, tanto en la cabina como en la vida, 
                  la <strong>toma de decisiones bajo presión</strong>, 
                  la <strong>gestión del riesgo</strong> y la 
                  <strong>comunicación efectiva</strong> son la clave para llegar a destino con seguridad.
                </p>
                <p className="mt-4">
                  La idea central de <strong>Psicopiloto</strong> es simple pero poderosa: 
                  aplicar los principios de seguridad, eficiencia y gestión de factores humanos 
                  de la aviación a la psicoterapia. El objetivo es que aprendas a 
                  <strong>“pilotar” tu vida</strong> con control, claridad y confianza.
                </p>
              </div>
              <Image
                src="/sobre1.jpg"
                alt="Psicopiloto - aviación y psicología"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* Misión */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Misión</h2>
            <p>
              Nuestra misión es <strong>acompañarte en tu viaje personal</strong>, 
              brindándote apoyo psicológico cercano, práctico y basado en la evidencia. 
              Queremos que desarrolles habilidades para:
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>Tomar el control de tus decisiones.</li>
              <li>Desarrollar estrategias de afrontamiento efectivas.</li>
              <li>Alcanzar un bienestar duradero.</li>
            </ul>
          </section>

          {/* Visión */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Visión</h2>
            <p>
              Ser un referente en <strong>psicología integradora</strong>, reconocido por un enfoque 
              <strong>humano y práctico</strong>, que inspire a las personas a 
              <strong>vivir con confianza y resiliencia</strong>, superando cualquier turbulencia emocional.
            </p>
          </section>

          {/* Metáfora */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  La Metáfora: Aviación + Psicología
                </h2>
                <p>
                  Imagina tu vida como un vuelo. A veces el cielo está despejado, 
                  otras veces surgen tormentas inesperadas. 
                  En <strong>Psicopiloto</strong> aplicamos estrategias de seguridad de la aviación 
                  para que desarrolles:
                </p>
                <ul className="list-disc list-inside mt-4">
                  <li><strong>Conciencia situacional</strong>: reconocer tus emociones y pensamientos.</li>
                  <li><strong>Comunicación efectiva</strong>: expresar lo que sientes y crear relaciones sanas.</li>
                  <li><strong>Gestión de amenazas y errores (TEM)</strong>: anticipar y manejar retos de la vida.</li>
                  <li><strong>Toma de decisiones</strong>: elegir el mejor rumbo para tu bienestar.</li>
                  <li><strong>Resiliencia</strong>: recuperarte y crecer tras la adversidad.</li>
                  <li><strong>Trabajo en equipo</strong>: fortalecer vínculos personales y profesionales.</li>
                </ul>
              </div>
              <Image
                src="/sobre2.jpg"
                alt="Metáfora aviación y psicología"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
          </section>

          {/* Metodología */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Nuestra Metodología</h2>
            <p>
              En <strong>Psicopiloto</strong> aplicamos un modelo de 
              <strong>terapia integradora</strong>, combinando enfoques como:
            </p>
            <ul className="list-disc list-inside mt-4">
              <li>Terapia cognitivo-conductual.</li>
              <li>Terapia humanista.</li>
              <li>Terapia sistémica.</li>
              <li>EMDR y otros enfoques basados en evidencia científica.</li>
            </ul>
            <p className="mt-4">
              Nuestro enfoque es <strong>práctico y eficaz</strong>, 
              con estrategias aplicables a tu vida diaria. 
              No nos quedamos en la teoría: te acompañamos en cambios reales.
            </p>
          </section>

          {/* Resultados */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Resultados que Puedes Esperar</h2>
            <ul className="list-disc list-inside">
              <li>Mayor autoconocimiento y gestión emocional.</li>
              <li>Herramientas efectivas contra estrés y ansiedad.</li>
              <li>Relaciones más sanas y equilibradas.</li>
              <li>Mejora en autoestima y confianza.</li>
              <li>Capacidad de tomar las riendas de tu vida con seguridad.</li>
            </ul>
          </section>

          {/* Ética */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4">Nuestro Compromiso Ético</h2>
            <p>
              En <strong>Psicopiloto</strong> garantizamos un 
              <strong>espacio seguro y confidencial</strong>, regido por los estándares 
              del <strong>Colegio Oficial de la Psicología de Madrid</strong>. 
              Nuestro compromiso es brindarte un acompañamiento ético, respetuoso y transparente.
            </p>
          </section>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link href="/servicios">
              <span className="px-6 py-3 bg-softorange-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-softorange-600 transition">
                Conoce nuestros servicios
              </span>
            </Link>
            <Link href="/contacto">
              <span className="ml-4 px-6 py-3 bg-softorange-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-softorange-600 transition">
                Contacta con nosotros
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
