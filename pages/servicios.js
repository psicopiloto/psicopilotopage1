import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";   // 👈 Esta línea es la que faltaba

export default function Servicios() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold mb-10 text-center">
            Nuestros Servicios
          </h1>
{/* SERVICIOS */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto max-w-5xl text-center">
    <h2 className="text-3xl font-semibold mb-6">Servicios</h2>
    <div className="grid md:grid-cols-2 gap-8 text-gray-700">
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="font-semibold text-xl mb-2">Terapia para la ansiedad y el estrés</h3>
        <p>Insomnio, tensión, preocupaciones constantes y bloqueos que afectan tu día a día.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="font-semibold text-xl mb-2">Gestión emocional y autoestima</h3>
        <p>Trabajamos la confianza personal, la seguridad en ti mismo y la capacidad de poner límites.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="font-semibold text-xl mb-2">Terapia EMDR y tratamiento del trauma</h3>
        <p>Intervención especializada para experiencias difíciles y recuerdos dolorosos.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="font-semibold text-xl mb-2">Problemas de pareja y dependencia emocional</h3>
        <p>Conflictos, discusiones, pérdida de confianza o vínculos que generan malestar.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="font-semibold text-xl mb-2">Procesos de duelo y cambios vitales</h3>
        <p>Acompañamiento en pérdidas, transiciones personales o profesionales.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-sm md:col-span-2">
        <h3 className="font-semibold text-xl mb-2">Psicología aeronáutica</h3>
        <p>Factores humanos, liderazgo, comunicación, gestión de amenazas y errores.</p>
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
