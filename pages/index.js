import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow pt-16">
        
        {/* HERO */}
        <section className="relative h-[70vh] flex items-center justify-center">
          <Image
            src="/fotoinicio1.jpg"
            alt="Psicólogo online en Granada - Psicopiloto"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="container mx-auto text-center text-white z-20 relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tu copiloto en el viaje hacia el bienestar
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Un espacio seguro, cercano y libre de juicios para recuperar la
              calma y sentir de nuevo que llevas el control de tu vida.
            </p>
            <Link href="/contacto">
              <span className="px-6 py-3 bg-softorange-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-softorange-600 transition">
                Agenda tu primera cita
              </span>
            </Link>
          </div>
        </section>

        {/* SOBRE MÍ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6">Sobre mí</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Soy <strong>psicólogo con Habilitación Sanitaria</strong> y durante
              más de 18 años fui también <strong>piloto militar e instructor</strong>.
              Mi experiencia me enseñó que lo más importante no es la perfección,
              sino la <strong>confianza</strong>, la <strong>humildad</strong> y la
              capacidad de pedir ayuda cuando más lo necesitamos.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Hoy acompaño a personas en su camino de crecimiento personal y
              bienestar emocional, combinando mi formación en{" "}
              <strong>psicología integradora</strong>, <strong>trauma</strong> y{" "}
              <strong>EMDR</strong>, con una visión clara: cada persona es única y
              merece ser escuchada con respeto y cercanía.
            </p>
          </div>
        </section>

        {/* SERVICIOS */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6">Servicios</h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-700">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Ansiedad y estrés</h3>
                <p>Insomnio, tensión, preocupaciones constantes.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Depresión y ánimo bajo</h3>
                <p>Falta de motivación, tristeza o apatía.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Autoestima y apego</h3>
                <p>Inseguridad, dificultad para poner límites.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Terapia de pareja</h3>
                <p>Conflictos, discusiones, pérdida de confianza.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm md:col-span-2">
                <h3 className="font-semibold text-xl mb-2">Trauma y experiencias difíciles</h3>
                <p>Recuerdos dolorosos, bloqueos emocionales, EMDR.</p>
              </div>
            </div>
            <div className="mt-8">
              <Link href="/servicios">
                <span className="px-5 py-3 bg-psicopiloto-500 text-white rounded-lg shadow hover:bg-psicopiloto-600 transition">
                  Descubre todos los servicios
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* FILOSOFÍA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6">Mi filosofía</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              En Psicopiloto encontrarás:
            </p>
            <ul className="text-gray-700 leading-relaxed space-y-2">
              <li>✔️ <strong>Escucha sin juicios</strong></li>
              <li>✔️ <strong>Un espacio confidencial y seguro</strong></li>
              <li>✔️ <strong>Acompañamiento cercano y humano</strong></li>
              <li>✔️ <strong>Herramientas prácticas</strong> para afrontar tus retos cotidianos</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-6">
              No tienes que hacerlo todo solo: aquí cuentas con un{" "}
              <strong>copiloto en tu viaje</strong>.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">
              Da el primer paso hacia tu bienestar
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Estoy aquí para escucharte y acompañarte. La primera consulta es la
              oportunidad de empezar a recuperar la calma y la confianza.
            </p>
            <Link href="/contacto">
              <span className="px-6 py-3 bg-softorange-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-softorange-600 transition">
                Hablemos cuando estés listo/a
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
