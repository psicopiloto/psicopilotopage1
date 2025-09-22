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

        {/* LISTA DE SERVICIOS PARA PERSONAS */}
<section className="py-16 bg-psicopiloto-sand-50">
  <div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl font-semibold text-center text-psicopiloto-green-700 mb-12">
      Psicopiloto para Ti
    </h2>
    <div className="grid md:grid-cols-2 gap-8 text-psicopiloto-gray-700">
      
      {/* Ansiedad y Estrés */}
      <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
          Ansiedad y Estrés
        </h3>
        <p className="mb-4">
          La <strong>ansiedad</strong> y el <strong>estrés</strong> son respuestas naturales del cuerpo, pero cuando se vuelven constantes pueden causar <strong>insomnio</strong>, <strong>tensión muscular</strong> y una sensación de estar siempre en alerta.
        </p>
        <p className="mb-4">
          En <strong>Psicopiloto</strong> te acompaño a comprender lo que te ocurre y a desarrollar <strong>herramientas prácticas</strong> para reducir la ansiedad, mejorar tu descanso y recuperar la calma en tu día a día.
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
                Sentirse sin energía, desmotivado o con <strong>tristeza persistente</strong> no es simplemente “estar de bajón”. La <strong>depresión</strong> puede afectar a tu manera de pensar, sentir y relacionarte.
              </p>
              <p className="mb-4">
                En <strong>Psicopiloto</strong> encontrarás un acompañamiento <strong>cercano y respetuoso</strong> para comprender lo que te ocurre y empezar a recuperar el sentido de tu vida.
              </p>
              <p className="mb-4">
                Con apoyo profesional podrás <strong>reconectar contigo mismo</strong>, redescubrir tus fortalezas y volver a experimentar motivación y bienestar en tu día a día.
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
                Una <strong>autoestima baja</strong> o patrones de <strong>apego inseguro</strong> pueden generar relaciones complicadas y un profundo malestar interno.
              </p>
              <p className="mb-4">
                En terapia aprenderás a <strong>reconocer tus necesidades</strong>, poner límites sanos y fortalecer tu confianza, construyendo vínculos más equilibrados.
              </p>
              <p className="mb-4">
                El objetivo es que puedas mirarte con <strong>respeto y cariño</strong>, y que logres relaciones que te nutran en lugar de desgastarte.
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
                Las <strong>relaciones de pareja</strong> pueden atravesar discusiones frecuentes, pérdida de confianza o <strong>distanciamiento emocional</strong>. Si no se abordan, estas dificultades pueden generar una gran desconexión.
              </p>
              <p className="mb-4">
                La <strong>terapia de pareja</strong> ofrece un espacio neutral y empático para comprender el origen de los conflictos, abrir nuevos canales de comunicación y recuperar la conexión.
              </p>
              <p className="mb-4">
                Os acompañaré a tomar <strong>decisiones conscientes</strong> sobre vuestro futuro, fomentando vínculos más sólidos y saludables.
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
                Las <strong>experiencias dolorosas del pasado</strong> pueden dejar <strong>huellas profundas</strong> en la memoria y en el cuerpo, apareciendo en forma de <strong>bloqueos emocionales</strong>, recuerdos intrusivos o sensación de amenaza constante.
              </p>
              <p className="mb-4">
                En <strong>Psicopiloto</strong> aplico enfoques basados en la evidencia como la <strong>terapia EMDR</strong> y técnicas de regulación que ayudan a <strong>procesar y liberar memorias traumáticas</strong> de manera <strong>segura y progresiva</strong>.
              </p>
              <p className="mb-4">
                Aprenderás a <strong>gestionar emociones intensas</strong>, a fortalecer tu resiliencia y a recuperar la capacidad de vivir con libertad y serenidad, sin que el pasado condicione tu presente.
              </p>
              <Link href="/contacto">
                <span className="inline-block mt-2 px-6 py-2 bg-psicopiloto-green-500 text-white rounded-lg text-sm font-semibold shadow hover:bg-psicopiloto-green-600 transition">
                  🌱 Empieza hoy tu proceso de sanación: agenda tu sesión de terapia
                </span>
              </Link>
              </div>
  </div>
</section>
          
{/* BLOQUE DIFERENCIADO PARA EMPRESAS */}
<section className="py-20 bg-psicopiloto-blue-50">
  <div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl font-semibold text-center text-psicopiloto-blue-700 mb-12">
      Psicopiloto para Empresas
    </h2>
    <div className="grid md:grid-cols-2 gap-8 text-psicopiloto-gray-700">
      
      {/* Psicopiloto para Empresas */}
      <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
        <h3 className="font-semibold text-xl mb-2 text-psicopiloto-blue-600">
          Desarrollo Organizacional y Liderazgo
        </h3>
        <p className="mb-4">
          En un entorno empresarial competitivo, los equipos necesitan <strong>cohesión, confianza y liderazgo positivo</strong> para alcanzar sus objetivos. En <strong>Psicopiloto</strong> aplicamos los principios de la aviación al desarrollo organizacional.
        </p>
        <p className="mb-4">
          Nuestros programas de <strong>psicología aplicada a empresas</strong> ayudan a reducir errores, mejorar la eficiencia y fomentar una <strong>comunicación clara</strong>, potenciando tanto a líderes como a equipos.
        </p>
        <p className="mb-4">
          Los mismos principios que hacen que un vuelo sea seguro pueden transformar también tu empresa, aportando <strong>seguridad, confianza y eficiencia</strong>.
        </p>
        <Link href="/contacto">
          <span className="inline-block mt-2 px-6 py-2 bg-psicopiloto-blue-500 text-white rounded-lg text-sm font-semibold shadow hover:bg-psicopiloto-blue-600 transition">
            🚀 Fortalece tu equipo hoy: solicita una sesión de asesoramiento
          </span>
        </Link>
      </div>
      
    </div>
  </div>
</section>
      </main>
      <Footer />
    </div>
  );
}
