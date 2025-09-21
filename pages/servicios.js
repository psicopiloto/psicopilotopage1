import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import { NextSeo } from "next-seo";

export default function Servicios() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700">
      <NextSeo
        title="Servicios de Psicología | Psicopiloto"
        description="Psicoterapia para ansiedad, estrés, depresión, autoestima, terapia de pareja y trauma. Un espacio seguro para recuperar tu bienestar emocional con Psicopiloto."
        canonical="https://psicopiloto.com/servicios"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "psicología, ansiedad, estrés, depresión, autoestima, terapia de pareja, trauma, EMDR, psicoterapia online",
          },
          {
            name: "author",
            content: "Psicopiloto",
          },
        ]}
        openGraph={{
          url: "https://psicopiloto.com/servicios",
          title: "Servicios de Psicología | Psicopiloto",
          description:
            "Psicoterapia para ansiedad, estrés, depresión, autoestima, terapia de pareja y trauma. Un espacio seguro para recuperar tu bienestar emocional con Psicopiloto.",
          images: [
            {
              url: "https://psicopiloto.com/images/seo/servicios.jpg",
              width: 1200,
              height: 630,
              alt: "Servicios de Psicología - Psicopiloto",
              type: "image/jpeg",
            },
          ],
          site_name: "Psicopiloto",
        }}
      />

      <Nav />
      <main className="flex-grow pt-16">
        {/* HERO */}
        <section className="py-16 bg-white text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold mb-6 text-psicopiloto-blue-700">
              Servicios de Psicología
            </h1>
            <p className="text-psicopiloto-gray-600 leading-relaxed">
              En <strong>Psicopiloto</strong> encontrarás un espacio seguro y
              cercano, donde trabajaremos juntos para recuperar el equilibrio y
              afrontar los retos de la vida con confianza y serenidad.
            </p>
          </div>
        </section>

        {/* LISTA DE SERVICIOS */}
        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8 text-psicopiloto-gray-700">
            
            {/* Ansiedad y Estrés */}
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                Ansiedad y Estrés
              </h2>
              <p className="mb-4">
                La ansiedad y el estrés son respuestas naturales del cuerpo ante
                las exigencias de la vida. Sin embargo, cuando se vuelven
                constantes, pueden generar un gran desgaste: insomnio, tensión
                muscular, dificultad para concentrarse o la sensación de estar
                siempre en alerta.
              </p>
              <p className="mb-4">
                En Psicopiloto, te ofrezco un espacio seguro para aprender a
                comprender lo que te ocurre, poner nombre a tus emociones y
                desarrollar herramientas que te permitan recuperar el
                equilibrio. Juntos trabajaremos en estrategias prácticas para
                reducir la ansiedad, mejorar tu descanso y volver a sentir calma
                en tu día a día.
              </p>
              <Link href="/contacto">
                <span className="inline-block mt-2 px-6 py-2 bg-psicopiloto-green-500 text-white rounded-lg text-sm font-semibold shadow hover:bg-psicopiloto-green-600 transition">
                  👉 Da el primer paso y comienza a transformar tu relación con el estrés
                </span>
              </Link>
            </div>

            {/* Depresión y Ánimo Bajo */}
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                Depresión y Ánimo Bajo
              </h2>
              <p className="mb-4">
                Sentirse sin energía, desmotivado o con tristeza persistente no
                es simplemente “estar de bajón”. La depresión puede afectar a la
                manera en que piensas, sientes y te relacionas con los demás.
                Quizás te cuesta disfrutar de lo que antes te llenaba o te
                resulta difícil levantarte cada mañana con ilusión.
              </p>
              <p className="mb-4">
                Con un enfoque respetuoso y cercano, trabajaremos para que
                puedas reconectar contigo mismo, recuperar el sentido de tu vida
                y redescubrir tus fortalezas. No tienes por qué recorrer este
                camino en soledad: la ayuda profesional puede marcar la
                diferencia.
              </p>
              <Link href="/contacto">
                <span className="inline-block mt-2 px-6 py-2 bg-psicopiloto-green-500 text-white rounded-lg text-sm font-semibold shadow hover:bg-psicopiloto-green-600 transition">
                  👉 Contacta ahora y empecemos a recuperar tu bienestar emocional
                </span>
              </Link>
            </div>

            {/* Autoestima y Apego */}
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                Autoestima y Apego
              </h2>
              <p className="mb-4">
                ¿Te cuesta poner límites? ¿Sientes que tu valor depende de la
                aprobación de los demás? La autoestima baja y los patrones de
                apego inseguros suelen generar relaciones complicadas y mucho
                malestar interno.
              </p>
              <p className="mb-4">
                En terapia, aprenderás a reconocer tus propias necesidades, a
                fortalecer tu confianza y a establecer vínculos más sanos y
                equilibrados. El objetivo es que puedas mirarte con respeto y
                cariño, y construir relaciones que te nutran en lugar de
                desgastarte.
              </p>
              <Link href="/contacto">
                <span className="inline-block mt-2 px-6 py-2 bg-psicopiloto-green-500 text-white rounded-lg text-sm font-semibold shadow hover:bg-psicopiloto-green-600 transition">
                  👉 Atrévete a priorizarte y empieza a construir una autoestima sólida
                </span>
              </Link>
            </div>

            {/* Terapia de Pareja */}
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                Terapia de Pareja
              </h2>
              <p className="mb-4">
                Las relaciones de pareja pueden atravesar momentos difíciles:
                discusiones frecuentes, pérdida de confianza, falta de
                comunicación o distanciamiento emocional. Estas dificultades, si
                no se abordan, pueden convertirse en un muro que separa a los
                dos miembros de la pareja.
              </p>
              <p className="mb-4">
                La terapia de pareja es una oportunidad para reencontrarse,
                comprender el origen de los conflictos y abrir nuevos canales de
                comunicación. A través de un acompañamiento neutral y empático,
                os ayudaré a recuperar la conexión y a tomar decisiones
                conscientes sobre el futuro de vuestra relación.
              </p>
              <Link href="/contacto">
                <span className="inline-block mt-2 px-6 py-2 bg-psicopiloto-green-500 text-white rounded-lg text-sm font-semibold shadow hover:bg-psicopiloto-green-600 transition">
                  👉 Si queréis reconectar, reservad una cita y comencemos juntos este proceso
                </span>
              </Link>
            </div>

            {/* Trauma y Experiencias Difíciles */}
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition md:col-span-2">
              <h2 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                Trauma y Experiencias Difíciles
              </h2>
              <p className="mb-4">
                Las experiencias dolorosas del pasado pueden dejar huellas
                profundas en la memoria y en el cuerpo, apareciendo en forma de
                bloqueos, recuerdos intrusivos o emociones intensas que parecen
                imposibles de manejar.
              </p>
              <p className="mb-4">
                En Psicopiloto, utilizo enfoques basados en la evidencia como la
                terapia EMDR, que ayudan a procesar y liberar esas memorias
                traumáticas de una manera segura y progresiva. El objetivo es
                que puedas mirar al pasado sin que condicione tu presente, y
                recuperar tu capacidad de vivir con libertad y serenidad.
              </p>
              <Link href="/contacto">
                <span className="inline-block mt-2 px-6 py-2 bg-psicopiloto-green-500 text-white rounded-lg text-sm font-semibold shadow hover:bg-psicopiloto-green-600 transition">
                  👉 Empieza a sanar tu historia: agenda tu sesión de terapia
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
