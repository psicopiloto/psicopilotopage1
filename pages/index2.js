// pages/index2.js
export default function Home() {
  return (
    <div className="min-h-screen bg-psicopiloto-sand-50 font-sans">
      {/* HERO */}
      <section className="relative bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-bold text-psicopiloto-green-600 mb-6">
            Psicopiloto: Tu guía hacia el bienestar emocional
          </h1>
          <p className="text-lg text-psicopiloto-gray-500 max-w-2xl mx-auto mb-8">
            Te acompañamos en tu proceso con cercanía, confianza y profesionalidad.
            Un espacio seguro para hablar, comprender y crecer.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 rounded-xl bg-psicopiloto-green-500 text-white font-semibold hover:bg-psicopiloto-green-600 transition">
              Agenda tu sesión
            </button>
            <button className="px-6 py-3 rounded-xl bg-psicopiloto-blue-500 text-white font-semibold hover:bg-psicopiloto-blue-600 transition">
              Conocer más
            </button>
          </div>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="py-20 bg-psicopiloto-sand-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-psicopiloto-gray-700 mb-6">
            Un espacio humano y profesional
          </h2>
          <p className="text-psicopiloto-gray-500 max-w-3xl mx-auto">
            En Psicopiloto creemos que cada persona tiene el poder de transformar
            su vida. Nuestra misión es acompañarte con humildad, empatía y
            herramientas basadas en la evidencia científica.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-psicopiloto-gray-700 mb-12">
            ¿Cómo podemos ayudarte?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Terapia individual",
                desc: "Un espacio confidencial para trabajar tus emociones, pensamientos y objetivos personales.",
              },
              {
                title: "Terapia de pareja",
                desc: "Mejora la comunicación, confianza y conexión emocional con tu pareja.",
              },
              {
                title: "Orientación en crisis",
                desc: "Acompañamiento en momentos difíciles con escucha activa y estrategias de afrontamiento.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="p-6 bg-psicopiloto-sand-50 rounded-2xl shadow border border-psicopiloto-gray-500/20"
              >
                <h3 className="text-xl font-semibold text-psicopiloto-green-600 mb-4">
                  {s.title}
                </h3>
                <p className="text-psicopiloto-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRASE INSPIRADORA */}
      <section className="py-20 bg-psicopiloto-peach-500/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-2xl font-medium text-psicopiloto-gray-700">
            “Cuidar de tu salud emocional es un acto de valentía y amor propio.”
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-psicopiloto-green-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; 2025 Psicopiloto. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Política de privacidad
            </a>
            <a href="#" className="hover:underline">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
