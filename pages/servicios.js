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
            alt="Psicólogo online - Psicopiloto"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="container mx-auto text-center text-white z-20 relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ✈️ Psicopiloto – Psicología online con rumbo claro
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              “En la vida, como en el vuelo, siempre habrá turbulencias y
              dificultades. Lo importante es no pilotar solo. Estoy aquí para
              acompañarte, estés donde estés.”
            </p>
            <p className="text-base md:text-lg max-w-2xl mx-auto mb-8">
              Soy <strong>Jose C.R. Retamar</strong>, psicólogo y piloto con más
              de 18 años de experiencia en la aviación y una trayectoria centrada
              en el cuidado, la seguridad y el trabajo en equipo. En Psicopiloto
              uno ambos mundos para ofrecerte un espacio terapéutico único,
              humano y cercano, ahora también online.
            </p>
            <Link href="/contacto">
              <span className="px-6 py-3 bg-softorange-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-softorange-600 transition">
                Agenda tu primera cita
              </span>
            </Link>
          </div>
        </section>

        {/* QUIÉN SOY */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6">👤 Quién soy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Durante casi dos décadas he volado como{" "}
              <strong>piloto militar en la lucha contraincendios</strong>,
              acumulando más de <strong>2.500 horas de vuelo</strong> y formando a
              tripulaciones en habilidades humanas como la{" "}
              <strong>comunicación</strong>, la{" "}
              <strong>gestión del estrés</strong>, la{" "}
              <strong>toma de decisiones</strong> y el{" "}
              <strong>trabajo en equipo</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Hoy, como <strong>psicólogo con habilitación sanitaria</strong>,
              aplico esa experiencia vital para ayudarte a{" "}
              <strong>recuperar el control de tu vida</strong>, con un enfoque
              cercano, práctico y humano.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Soy padre de dos hijas, lo que me recuerda cada día el valor de la{" "}
              <strong>empatía</strong>, la <strong>paciencia</strong> y la{" "}
              <strong>humildad</strong>.
            </p>
          </div>
        </section>

        {/* FILOSOFÍA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6">✨ Filosofía de Psicopiloto</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              La aviación me enseñó que la <strong>humildad</strong>, la{" "}
              <strong>claridad</strong> y el{" "}
              <strong>aprendizaje constante</strong> son esenciales para avanzar.
              La psicología me mostró que cada persona merece ser escuchada en un
              espacio de <strong>confianza</strong>,{" "}
              <strong>respeto</strong> y <strong>calidez</strong>.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-gray-700">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Humildad</h3>
                <p>Cada historia es única y la afronto desde la escucha y el respeto.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Claridad</h3>
                <p>Juntos trazaremos un rumbo que te ayude a ver con más serenidad.</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-semibold text-xl mb-2">Humanidad</h3>
                <p>Tu bienestar es lo más importante; cada paso lo daremos a tu ritmo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* TERAPIA ONLINE */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold mb-6">💻 Psicología online: un espacio sin barreras</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              El servicio principal de Psicopiloto es la{" "}
              <strong>terapia online</strong>, porque creo que el acompañamiento
              no debe depender de la distancia ni de los horarios.
            </p>
            <ul className="text-gray-700 leading-relaxed space-y-2 mb-6 text-left max-w-md mx-auto">
              <li>✔️ <strong>Accesibilidad:</strong> estés donde estés, sin desplazarte.</li>
              <li>✔️ <strong>Flexibilidad:</strong> se adapta a tu agenda y a tu ritmo.</li>
              <li>✔️ <strong>Comodidad:</strong> desde tu casa, en un entorno seguro.</li>
              <li>✔️ <strong>Cercanía:</strong> la pantalla no resta humanidad.</li>
              <li>✔️ <strong>Confidencialidad total:</strong> con el mismo rigor que en persona.</li>
            </ul>
            <p className="text-gray-700">
              La distancia no es un obstáculo: la terapia online acerca la ayuda
              a donde tú estés.
            </p>
          </div>
        </section>

        {/* ÁREAS DE AYUDA */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-5xl text-center">
            <h2 className="text-3xl font-semibold mb-6">🌱 Áreas en las que puedo ayudarte</h2>
            <div className="grid md:grid-cols-2 gap-6 text-gray-700">
              <div className="p-4 bg-white rounded-lg shadow-sm">Ansiedad y gestión del estrés</div>
              <div className="p-4 bg-white rounded-lg shadow-sm">Autoestima y confianza personal</div>
              <div className="p-4 bg-white rounded-lg shadow-sm">Relaciones de pareja y vínculos afectivos</div>
              <div className="p-4 bg-white rounded-lg shadow-sm">Dependencia emocional</div>
              <div className="p-4 bg-white rounded-lg shadow-sm">Duelo y experiencias traumáticas</div>
              <div className="p-4 bg-white rounded-lg shadow-sm">Adicciones</div>
              <div className="p-4 bg-white rounded-lg shadow-sm">Relaciones sociales y familiares</div>
              <div className="p-4 bg-white rounded-lg shadow-sm">Desarrollo personal y profesional</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">📩 Da el primer paso</h2>
            <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
              Tu bienestar importa.  
              Si sientes que es momento de tomar el control y dar un nuevo rumbo a tu vida, no tienes que hacerlo solo.
            </p>
            <Link href="/contacto">
              <span className="px-6 py-3 bg-softorange-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-softorange-600 transition">
                Agenda tu primera cita online
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

