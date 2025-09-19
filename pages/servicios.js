import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Link from "next/link"; // ✅ Importado para evitar el error

export default function Servicios() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow pt-16">
        {/* HERO */}
        <section className="py-16 bg-white text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold mb-6">Servicios</h1>
            <p className="text-gray-700 leading-relaxed">
              En <strong>Psicopiloto</strong> encontrarás un espacio seguro y cercano, 
              donde trabajaremos juntos para recuperar el equilibrio y afrontar 
              los retos de la vida con confianza y serenidad.
            </p>
          </div>
        </section>

        {/* LISTA DE SERVICIOS */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8 text-gray-700">
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

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/contacto">
              <span className="px-6 py-3 bg-softorange-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-softorange-600 transition">
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
