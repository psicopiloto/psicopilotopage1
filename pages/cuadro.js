import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function TestCuadroContacto() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Nav />
      <main className="flex-grow pt-20 pb-16 container mx-auto space-y-12">
        <h1 className="text-3xl font-bold mb-8 text-center text-psicopiloto-blue-900">
          Test de variantes de CuadroContacto
        </h1>

        {/* 1. Márgenes */}
        <div className="bg-white/80 shadow-lg rounded-2xl p-10 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-psicopiloto-green-600">
            Versión 1: Márgenes
          </h2>
          <img
            src="/telefono.webp"
            alt="Teléfono contacto Psicopiloto"
            className="w-48 mt-6 ml-12"
          />
        </div>

        {/* 2. Translate */}
        <div className="bg-white/80 shadow-lg rounded-2xl p-10 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-psicopiloto-green-600">
            Versión 2: Translate
          </h2>
          <img
            src="/telefono.webp"
            alt="Teléfono contacto Psicopiloto"
            className="w-48 transform translate-x-12 translate-y-6"
          />
        </div>

        {/* 3. Relative */}
        <div className="bg-white/80 shadow-lg rounded-2xl p-10 max-w-3xl mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-psicopiloto-green-600">
            Versión 3: Relative
          </h2>
          <img
            src="/telefono.webp"
            alt="Teléfono contacto Psicopiloto"
            className="w-48 relative top-6 left-12"
          />
        </div>

        {/* 4. Flexbox */}
        <div className="bg-white/80 shadow-lg rounded-2xl p-10 max-w-3xl mx-auto flex justify-end items-end relative">
          <h2 className="text-xl font-semibold absolute top-4 left-6 text-psicopiloto-green-600">
            Versión 4: Flexbox
          </h2>
          <img
            src="/telefono.webp"
            alt="Teléfono contacto Psicopiloto"
            className="w-48"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
