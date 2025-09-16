import Image from "next/image";
import Nav from "../components/Nav";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow pt-16">
        <section className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-indigo-900 mb-8">Sobre mí y el proyecto Psicopiloto</h1>

          {/* Primer bloque */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div>
              <p className="text-gray-700 mb-4">
                Soy Jose Carlos Rodríguez Retamar, Psicólogo con Habilitación Sanitaria (Colegiado M-30360) y piloto con más de 18 años de experiencia en el Ejército del Aire y del Espacio. 
                A lo largo de mi trayectoria he podido desarrollarme en dos ámbitos que, lejos de ser ajenos, comparten una base común: la gestión de las emociones, la toma de decisiones bajo presión y el papel fundamental del factor humano. 
              </p>
              <p className="text-gray-700">
                De esa unión nace <strong>Psicopiloto</strong>, un proyecto que integra mi experiencia aeronáutica y clínica para ofrecer un acompañamiento psicológico diferente, práctico y humano.
              </p>
            </div>
            <Image
              src="/sobre1.png"
              alt="Experiencia en psicología y aviación canadair cl415 en incendio"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Segundo bloque */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <Image
              src="/sobre2.png"
              alt="Trayectoria profesional en psicología"
              width={600}
              height={400}
              className="rounded-xl shadow-lg order-2 md:order-1"
            />
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Mi trayectoria en la aviación</h2>
              <p className="text-gray-700 mb-4">
                Durante casi dos décadas serví como piloto militar en aeronaves como el ENAER T-35C Pillán, el Aviocar C-212 y los aviones anfibios contraincendios Canadair CL-215T y CL-415, acumulando más de 2.500 horas de vuelo. 
                Ejercí como piloto comandante, instructor de vuelo, facilitador de CRM y jefe de la sección de CRM del 43 Grupo de Fuerzas Aéreas.
              </p>
              <p className="text-gray-700">
                También participé en misiones internacionales contra incendios forestales en países como Portugal y Grecia, dentro del programa europeo RescUE, lo que reforzó en mí la importancia de la resiliencia, la cooperación y la preparación psicológica en entornos de alta exigencia.
              </p>
            </div>
          </div>

          {/* Tercer bloque */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">Mi vocación por la psicología</h2>
              <p className="text-gray-700 mb-4">
                Me licencié en Psicología en la Universidad de Granada en 2003. Desde entonces he ampliado mi formación con la Habilitación Sanitaria, el título de Experto en Psicología Aeronáutica, el de Psicopatología Integradora y la especialización en Intervención en Trauma y EMDR.
              </p>
              <p className="text-gray-700 mb-4">
                En el ámbito clínico, acompaño a personas que sufren ansiedad, depresión, problemas de autoestima y apego, trastornos de la conducta alimentaria, adicciones o experiencias traumáticas, siempre desde un enfoque de psicoterapia breve e integradora centrada en el trauma y en el crecimiento personal.
              </p>
              <p className="text-gray-700">
                Otra de mis facetas es la docencia: actualmente soy profesor en el título de Experto en Psicología Aeronáutica del Colegio Oficial de la Psicología de Madrid y tutor de Trabajos de Fin de Experto (TFE).
              </p>
            </div>
            <Image
              src="/sobre3.png"
              alt="Vocación en psicología"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Voluntariado y cierre */}
          <div>
            <h2 className="text-2xl font-semibold text-indigo-900 mb-4">El valor del voluntariado</h2>
            <p className="text-gray-700 mb-4">
              El voluntariado ha estado siempre presente en mi vida. Desde joven colaboré con la ONG Solidarios para el Desarrollo, trabajando con personas mayores en fases iniciales de demencia mediante terapias de orientación a la realidad y reminiscencia.
            </p>
            <p className="text-gray-700 mb-4">
              En la actualidad, participo como psicólogo voluntario en Amalgama Social, atendiendo de manera online a personas en situación de vulnerabilidad y ayudándoles a gestionar ansiedad, depresión, estrés y conflictos personales.
            </p>
            <p className="text-gray-700 mb-4">
              De la suma de todas estas experiencias surge <strong>Psicopiloto</strong>: un proyecto que une la disciplina, la precisión y la visión global de la aviación con la cercanía y el rigor de la psicología clínica.
            </p>
            <p className="text-gray-700">
              Mi objetivo es ser tu copiloto en el viaje hacia el bienestar emocional: acompañarte en momentos de turbulencia, ayudarte a recuperar el control y ofrecerte herramientas para que vuelvas a sentirte al mando de tu vida.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
