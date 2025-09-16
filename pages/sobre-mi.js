import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function SobreMi() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow pt-16">
        {/* HERO */}
        <section className="relative h-[50vh] flex items-center justify-center">
          <Image
            src="/sobre1.jpg"
            alt="Psicopiloto - Psicología y acompañamiento"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="relative z-20 text-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre mí</h1>
            <p className="text-lg max-w-2xl mx-auto">
              En la vida, como en el vuelo, las turbulencias son inevitables.  
              Lo importante es no pilotar solo: <strong>estoy aquí para acompañarte</strong>.
            </p>
          </div>
        </section>

        {/* BLOQUE 1 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-6">Mi recorrido</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Soy <strong>Jose C.R. Retamar</strong>,{" "}
                <strong>psicólogo con habilitación sanitaria</strong> y{" "}
                <strong>piloto militar</strong>.  
                Durante casi dos décadas acumulé más de{" "}
                <strong>2.500 horas de vuelo</strong> en misiones de{" "}
                <strong>extinción de incendios</strong>, formando a tripulaciones
                en habilidades tan humanas como la{" "}
                <strong>comunicación</strong>, la{" "}
                <strong>gestión del estrés</strong>, la{" "}
                <strong>toma de decisiones</strong> y el{" "}
                <strong>trabajo en equipo</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Hoy aplico toda esa experiencia a la{" "}
                <strong>psicología clínica y online</strong>, ofreciendo un
                espacio cercano, libre de juicios y seguro, donde cada persona
                puede recuperar el control de su vida.
              </p>
            </div>
            <div className="relative w-full h-80">
              <Image
                src="/sobre2.jpg"
                alt="Psicólogo online en Granada"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow"
              />
            </div>
          </div>
        </section>

        {/* BLOQUE 2 */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="relative w-full h-80 order-2 md:order-1">
              <Image
                src="/sobre3.jpg"
                alt="Psicopiloto - Acompañamiento terapéutico"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg shadow"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-semibold mb-6">Filosofía de Psicopiloto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                La aviación me enseñó la importancia de la{" "}
                <strong>humildad</strong>, la{" "}
                <strong>claridad</strong> y el{" "}
                <strong>aprendizaje constante</strong>.  
                La psicología me mostró que cada persona merece un{" "}
                <strong>espacio de confianza y calidez</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                En Psicopiloto encontrarás un{" "}
                <strong>acompañamiento cercano y humano</strong>, donde el
                respeto, la escucha activa y la{" "}
                <strong>confidencialidad total</strong> son la base de cada
                proceso.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Mi objetivo es que sientas que no estás solo en tu camino. Igual
                que un copiloto en cabina, estaré a tu lado para ayudarte a
                superar la turbulencia y recuperar la serenidad.
              </p>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 bg-white text-center">
          <h2 className="text-3xl font-semibold mb-6">📩 Da el primer paso</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Tu bienestar importa.  
            Si sientes que es momento de tomar un nuevo rumbo en tu vida, no
            tienes que hacerlo solo.
          </p>
          <Link href="/contacto">
            <span className="px-6 py-3 bg-softorange-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-softorange-600 transition">
              Agenda tu primera cita
            </span>
          </Link>
        </section>
      </main>
      <Footer />
    </div>
  );
}
