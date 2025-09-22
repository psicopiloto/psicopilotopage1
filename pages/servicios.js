import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";
import { NextSeo } from "next-seo";
import PageHeader from "../components/PageHeader"; // ✅ usamos PageHeader

export default function Servicios() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700">
      <NextSeo
        title="Servicios de Psicología | Psicopiloto"
        description="Psicoterapia para ansiedad, estrés, depresión, autoestima, terapia de pareja, trauma y formación para empresas. Un espacio seguro para recuperar tu bienestar emocional con Psicopiloto."
        canonical="https://psicopiloto.com/servicios"
        additionalMetaTags={[
          {
            name: "keywords",
            content:
              "psicología, ansiedad, estrés, depresión, autoestima, terapia de pareja, trauma, EMDR, psicoterapia online, psicología para empresas",
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
            "Psicoterapia para ansiedad, estrés, depresión, autoestima, terapia de pareja, trauma y formación para empresas. Un espacio seguro para recuperar tu bienestar emocional con Psicopiloto.",
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
        {/* ✅ PageHeader coherente con index */}
        <PageHeader
          title="Servicios de Psicología"
          subtitle="Un espacio seguro para recuperar el equilibrio, crecer personalmente y afrontar tus retos con confianza. Si eres empresa, también te acompaño con formación en factores humanos, liderazgo y gestión de equipos inspirada en la aviación."
          backgroundImage="/header-servicios.jpg"
        />

        {/* LISTA DE SERVICIOS */}
        <section className="py-16 bg-psicopiloto-sand-50">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8 text-psicopiloto-gray-700">
            
            {/* Ansiedad y Estrés */}
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                Ansiedad y Estrés
              </h2>
              <p className="mb-4">
                La <strong>ansiedad</strong> y el <strong>estrés</strong> son
                respuestas naturales del cuerpo, pero cuando se vuelven
                constantes pueden causar <strong>insomnio</strong>,{" "}
                <strong>tensión muscular</strong> y la sensación de estar siempre
                en alerta.
              </p>
              <p className="mb-4">
                En <strong>Psicopiloto</strong> te acompaño a comprender lo que
                te ocurre y a desarrollar <strong>herramientas prácticas</strong>{" "}
                para reducir la ansiedad, mejorar tu descanso y recuperar la
                calma en tu día a día.
              </p>
              <Link href="/contacto">
                <span className="inline-block mt-2 px-6 py-2 bg-psicopiloto-green-500 text-white rounded-lg text-sm font-semibold shadow hover:bg-psicopiloto-green-600 transition">
                  👉 Da el primer paso y transforma tu relación con el estrés
                </span>
              </Link>
            </div>

            {/* Depresión y Ánimo Bajo */}
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                Depresión y Ánimo Bajo
              </h2>
              <p className="mb-4">
                Sentirse sin energía, desmotivado o con <strong>tristeza
                persistente</strong> no es simplemente “estar de bajón”. La{" "}
                <strong>depresión</strong> afecta a la manera en que piensas,
                sientes y te relacionas con los demás.
              </p>
              <p className="mb-4">
                Con un enfoque <strong>respetuoso y cercano</strong>, trabajaremos
                para que puedas reconectar contigo mismo, recuperar el sentido de
                tu vida y redescubrir tus fortalezas. La{" "}
                <strong>ayuda profesional</strong> puede marcar la diferencia.
              </p>
              <Link href="/contacto">
                <span className="inline-block mt-2 px-6 py-2 bg-psicopiloto-green-500 text-white rounded-lg text-sm font-semibold shadow hover:bg-psicopiloto-green-600 transition">
                  👉 Contacta ahora y recupera tu bienestar emocional
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
                aprobación de los demás? Una <strong>autoestima baja</strong> y
                patrones de <strong>apego inseguro</strong> suelen generar
                relaciones complicadas y mucho malestar.
              </p>
              <p className="mb-4">
                En terapia aprenderás a <strong>fortalecer tu confianza</strong>,
                reconocer tus necesidades y establecer vínculos sanos. El
                objetivo es que puedas mirarte con respeto y construir
                relaciones que te nutran en lugar de desgastarte.
              </p>
              <Link href="/contacto">
                <span className="inline-block mt-2 px-6 py-2 bg-psicopiloto-green-500 text-white rounded-lg text-sm font-semibold shadow hover:bg-psicopiloto-green-600 transition">
                  👉 Atrévete a priorizarte y construye una autoestima sólida
                </span>
              </Link>
            </div>

            {/* Terapia de Pareja */}
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                Terapia de Pareja
              </h2>
              <p className="mb-4">
                Las <strong>relaciones de pareja</strong> pueden atravesar
                momentos difíciles: discusiones frecuentes, pérdida de confianza
                o distanciamiento emocional. Si no se abordan, estas dificultades
                pueden convertirse en un muro que separa.
              </p>
              <p className="mb-4">
                La <strong>terapia de pareja</strong> ofrece un espacio neutral y
                empático para abrir nuevos canales de comunicación, resolver
                conflictos y recuperar la conexión.
              </p>
              <Link href="/contacto">
                <span className="inline-block mt-2 px-6 py-2 bg-psicopiloto-green-500 text-white rounded-lg text-sm font-semibold shadow hover:bg-psicopiloto-green-600 transition">
                  👉 Recuperad vuestra conexión: reservad una cita hoy
                </span>
              </Link>
            </div>

            {/* Trauma y Experiencias Difíciles */}
<div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
  <h2 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
    Trauma y Experiencias Difíciles
  </h2>
  <p className="mb-4">
    Las <strong>experiencias dolorosas del pasado</strong> pueden dejar
    <strong> huellas profundas</strong> en la memoria y en el cuerpo. A veces
    aparecen en forma de <strong>bloqueos emocionales</strong>, recuerdos
    intrusivos o una sensación constante de alerta que impide vivir con calma.
  </p>
  <p className="mb-4">
    En <strong>Psicopiloto</strong> utilizo enfoques como la{" "}
    <strong>terapia EMDR</strong> y técnicas de regulación emocional que
    permiten <strong>procesar y liberar memorias traumáticas</strong> de una
    manera <strong>segura y progresiva</strong>. El objetivo es que puedas
    mirar al pasado sin que condicione tu presente y recuperar tu serenidad.
  </p>
  <p className="mb-4">
    Con este acompañamiento aprenderás a <strong>gestionar las emociones
    intensas</strong>, a desarrollar recursos internos y a fortalecer tu
    capacidad de resiliencia. De esta forma, podrás avanzar con mayor
    confianza y construir una vida más estable y equilibrada.
  </p>
  <Link href="/contacto">
    <span className="inline-block mt-2 px-6 py-2 bg-psicopiloto-green-500 text-white rounded-lg text-sm font-semibold shadow hover:bg-psicopiloto-green-600 transition">
      🌱 Empieza hoy tu proceso de sanación: agenda tu sesión de terapia
    </span>
  </Link>
</div>

            {/* Psicopiloto para Empresas */}
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                Psicopiloto para Empresas
              </h2>
              <p className="mb-4">
                En un entorno empresarial competitivo, los equipos necesitan{" "}
                <strong>cohesión, confianza y liderazgo positivo</strong> para
                alcanzar sus objetivos. En <strong>Psicopiloto</strong> aplicamos
                los principios de la aviación al desarrollo organizacional.
              </p>
              <p className="mb-4">
                Nuestros programas de{" "}
                <strong>psicología aplicada a empresas</strong> ayudan a reducir
                errores, mejorar la eficiencia y fomentar una{" "}
                <strong>comunicación clara</strong>, potenciando tanto a líderes
                como a equipos.
              </p>
              <p className="mb-4">
                Los mismos principios que hacen que un vuelo sea seguro pueden
                transformar también tu empresa, aportando{" "}
                <strong>seguridad, confianza y eficiencia</strong>.
              </p>
              <Link href="/contacto">
                <span className="inline-block mt-2 px-6 py-2 bg-psicopiloto-green-500 text-white rounded-lg text-sm font-semibold shadow hover:bg-psicopiloto-green-600 transition">
                  🚀 Fortalece tu equipo hoy: solicita una sesión de asesoramiento
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
