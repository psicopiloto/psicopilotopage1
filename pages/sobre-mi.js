import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function SobreMi() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow pt-20 pb-16">
        <div className="container mx-auto px-4 max-w-4xl prose prose-lg prose-psicopiloto">
          <h1 className="text-4xl font-bold mb-6">Sobre mí y el proyecto Psicopiloto</h1>

          <p>
            Mi nombre es <strong>[Tu Nombre]</strong> y soy <strong>psicólogo con Habilitación Sanitaria</strong> y{" "}
            <strong>piloto militar</strong>. El proyecto <strong>Psicopiloto</strong> nace de la unión de mis dos pasiones: 
            la <strong>aviación</strong> y la <strong>psicología</strong>. 
            A lo largo de mi vida he aprendido que tanto en el aire como en tierra, la clave para afrontar las turbulencias está en 
            la <strong>preparación mental</strong>, la <strong>gestión de las emociones</strong> y la <strong>toma de decisiones bajo presión</strong>.
          </p>

          {/* Imagen 1 */}
          <div className="my-8">
            <Image
              src="/sobre1.jpg"
              alt="Psicopiloto - experiencia en psicología"
              width={1200}
              height={700}
              className="rounded-lg shadow-md"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Fase 1: El inicio – vocación por la psicología</h2>
          <p>
            Me licencié en <strong>Psicología por la Universidad de Granada</strong> en 2003. 
            Durante esa etapa trabajé en prácticas con personas en procesos de drogodependencia, lo que me acercó al 
            sufrimiento humano y me mostró la importancia de la <strong>escucha y el acompañamiento</strong>. 
            Tras mi formación inicial, cursé el <strong>Curso de Adaptación Pedagógica</strong>, que me permitió adquirir una visión educativa y de orientación.
          </p>

          {/* Imagen 2 */}
          <div className="my-8">
            <Image
              src="/sobre2.jpg"
              alt="Trayectoria como piloto militar"
              width={1200}
              height={700}
              className="rounded-lg shadow-md"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Fase 2: La aviación – disciplina, liderazgo y seguridad</h2>
          <p>
            En 2007 ingresé en la <strong>Academia General del Aire</strong>, donde me formé como piloto militar. 
            Durante casi dos décadas acumulé más de <strong>2.500 horas de vuelo</strong> en aviones como el 
            <em> ENAER T-35C Pillán, Aviocar C-212, Canadair CL-215T y CL-415</em>.
          </p>
          <p>
            En el <strong>43 Grupo de las Fuerzas Armadas</strong>, ejercí como:
          </p>
          <ul>
            <li><strong>Piloto comandante</strong> en misiones de extinción de incendios forestales, en España, Grecia y Portugal.</li>
            <li><strong>Instructor de vuelo y simulador</strong>, formando a nuevas generaciones de pilotos.</li>
            <li><strong>Jefe de la Sección de Crew Resource Management (CRM)</strong>, desarrollando programas de entrenamiento en factores humanos.</li>
            <li><strong>Facilitador CRM</strong> e impulsor de programas como <strong>EBT</strong> y <strong>CBTA</strong> en simuladores en Milán.</li>
          </ul>
          <p>
            Esta etapa me enseñó el valor de la <strong>calma en la adversidad</strong>, el <strong>trabajo en equipo</strong> y la <strong>resiliencia</strong>, 
            competencias que hoy integro en mi práctica como psicólogo.
          </p>

          {/* Imagen 3 */}
          <div className="my-8">
            <Image
              src="/sobre3.jpg"
              alt="Psicología y aviación unidas en Psicopiloto"
              width={1200}
              height={700}
              className="rounded-lg shadow-md"
            />
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Fase 3: El regreso a la psicología – volver a la esencia</h2>
          <p>
            En paralelo a mi carrera aeronáutica, retomé mi vocación primera: la psicología. 
            Me habilité como <strong>Psicólogo con Habilitación Sanitaria</strong> en 2015 y me especialicé en:
          </p>
          <ul>
            <li><strong>Psicología aeronáutica</strong> (Experto en el Colegio Oficial de Psicología de Andalucía Oriental).</li>
            <li><strong>Psicología integradora y terapia breve</strong>.</li>
            <li><strong>Trauma y EMDR</strong>, técnica con gran eficacia en experiencias traumáticas.</li>
          </ul>
          <p>
            Desde 2024 ejerzo como <strong>psicólogo voluntario en Amalgama Social</strong>, trabajando en terapia online con problemas de ansiedad, 
            estrés, gestión emocional, duelo, autoestima, relaciones de pareja, dependencia emocional, adicciones y experiencias traumáticas.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Fase 4: El voluntariado – la parte más humana</h2>
          <p>
            El voluntariado ha sido siempre un pilar en mi vida. En mi juventud colaboré con la ONG{" "}
            <strong>Solidarios para el Desarrollo</strong>, trabajando con personas mayores en fases iniciales de demencia, aplicando 
            terapias de reminiscencia y orientación a la realidad.
          </p>
          <p>
            Más tarde, en 2019, cofundé <strong>Edades Granada</strong>, una empresa dedicada al cuidado de personas mayores y ayuda a domicilio, 
            donde sigo colaborando en la gestión de equipos y la atención a las necesidades de los más vulnerables.
          </p>
          <p>
            Estas experiencias me han permitido no solo crecer como profesional, sino también como persona, recordándome que 
            detrás de cada historia hay alguien que merece ser escuchado con respeto y cercanía.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Hoy: Psicopiloto</h2>
          <p>
            Hoy, en <strong>Psicopiloto</strong>, uno lo aprendido en la aviación con la psicología para ofrecer un acompañamiento diferente. 
            Si en la cabina de un avión entrenábamos la mente para afrontar lo inesperado y mantener la seguridad, 
            en la terapia aplico esa misma filosofía: ayudarte a ganar <strong>confianza</strong>, manejar la <strong>ansiedad</strong> 
            y recuperar el <strong>control de tu vida</strong>.
          </p>
          <p>
            Porque todos merecemos <strong>volar con seguridad</strong>, también en su propio camino personal.
          </p>

          <div className="mt-10 text-center">
            <Link href="/contacto">
              <span className="px-6 py-3 bg-softorange-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-softorange-600 transition">
                Reserva tu primera consulta
              </span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
