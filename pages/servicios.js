import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link";

export default function Servicios() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-psicopiloto-sand-50 text-psicopiloto-gray-700">
      <Nav />
      <main className="flex-grow pt-16">
        {/* HERO */}
        <section className="py-16 bg-white text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold mb-6 text-psicopiloto-blue-700">
              Servicios
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
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                Ansiedad y estrés
              </h3>
              <p>Insomnio, tensión, preocupaciones constantes.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                Depresión y ánimo bajo
              </h3>
              <p>Falta de motivación, tristeza o apatía.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                Autoestima y apego
              </h3>
              <p>Inseguridad, dificultad para poner límites.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                Terapia de pareja
              </h3>
              <p>Conflictos, discusiones, pérdida de confianza.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition md:col-span-2">
              <h3 className="font-semibold text-xl mb-2 text-psicopiloto-green-600">
                Trauma y experiencias difíciles
              </h3>
              <p>Recuerdos dolorosos, bloqueos emocionales, EMDR.</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/contacto">
              <span className="px-6 py-3 bg-psicopiloto-green-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-psicopiloto-green-600 transition">
                Agenda tu primera cita
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
