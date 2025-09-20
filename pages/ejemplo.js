// pages/ejemplo.js
export default function Ejemplo() {
  return (
    <div className="min-h-screen bg-psicopiloto-sand-50 font-sans p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-psicopiloto-green-600 mb-4">
          Bienvenido a Psicopiloto
        </h1>
        <p className="text-lg text-psicopiloto-gray-500">
          Psicología cercana, profesional y humana
        </p>
      </header>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* CTA primario */}
        <div className="p-6 bg-white rounded-2xl shadow-lg border border-psicopiloto-gray-500/10">
          <h2 className="text-2xl font-semibold text-psicopiloto-gray-700 mb-4">
            Agenda tu primera sesión
          </h2>
          <p className="text-psicopiloto-gray-500 mb-6">
            Da el primer paso hacia tu bienestar emocional. Estamos aquí para
            acompañarte.
          </p>
          <button className="px-6 py-3 rounded-xl bg-psicopiloto-green-500 text-white font-semibold hover:bg-psicopiloto-green-600 transition">
            Reserva ahora
          </button>
        </div>

        {/* CTA secundario */}
        <div className="p-6 bg-white rounded-2xl shadow-lg border border-psicopiloto-gray-500/10">
          <h2 className="text-2xl font-semibold text-psicopiloto-gray-700 mb-4">
            Conoce nuestro enfoque
          </h2>
          <p className="text-psicopiloto-gray-500 mb-6">
            Te ofrecemos un espacio seguro, cálido y confidencial para explorar
            lo que necesitas.
          </p>
          <button className="px-6 py-3 rounded-xl bg-psicopiloto-blue-500 text-white font-semibold hover:bg-psicopiloto-blue-600 transition">
            Saber más
          </button>
        </div>
      </div>

      {/* Card con color acento */}
      <div className="mt-12 max-w-3xl mx-auto p-6 rounded-2xl bg-psicopiloto-peach-500/20 border border-psicopiloto-peach-500/40">
        <p className="text-center text-psicopiloto-gray-700 font-medium">
          “Cuidar de tu salud emocional es un acto de valentía y amor propio.”
        </p>
      </div>
    </div>
  )
}
