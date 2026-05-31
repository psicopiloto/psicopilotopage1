// pages/aviso-legal.js

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function AvisoLegal() {
  const secciones = [
    { id: "titular", label: "Titular de la web e Información Obligatoria" },
    { id: "objeto", label: "Objeto" },
    { id: "condiciones", label: "Condiciones de Uso y Responsabilidad" }, 
    { id: "proteccion-datos", label: "Política de Privacidad y Datos (RGPD)" },
    { id: "derechos", label: "Derechos del Usuario y Reclamaciones" },
    { id: "exoneracion", label: "Exoneración de Responsabilidad" }, 
    { id: "propiedad", label: "Propiedad Intelectual" },
    { id: "cookies", label: "Política de Cookies" },
    { id: "fuero", label: "Fuero y Legislación Aplicable" }, 
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NextSeo
        title="Aviso Legal, Condiciones de Uso y Política de Privacidad | Psicopiloto"
        description="Aviso Legal, Condiciones de Uso y Política de Privacidad de Psicopiloto. Información sobre protección de datos sanitarios, derechos y términos de uso."
        canonical="https://psicopiloto.com/aviso-legal"
        additionalMetaTags={[
          { name: "author", content: "Jose Carlos Rguez. Retamar" },
        ]}
      />

      <Nav />

      <main className="flex-grow pt-16">
        <section className="max-w-4xl mx-auto px-6 py-12 text-psicopiloto-gray-700">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.webp"
              alt="Psicopiloto"
              width={150}
              height={50}
            />
          </div>

          <h1 className="text-3xl font-bold mb-6 text-center">Aviso Legal, Condiciones de Uso y Política de Privacidad</h1>

          <nav className="mb-8 bg-gray-50 p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-3">Índice</h2>
            <ul className="space-y-2">
              {secciones.map((sec) => (
                <li key={sec.id}>
                  <a href={`#${sec.id}`} className="text-psicopiloto-green-600 hover:underline transition-colors duration-200">
                    {sec.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 1. Titular de la web */}
          <section id="titular" className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 border-b pb-1">1. Titular de la web e Información Obligatoria</h2>
            <p className="space-y-1">
              <strong>Nombre:</strong> Jose Carlos Rguez. Retamar (Psicopiloto) <br />
              <strong>NIF/DNI:</strong> 74658149-B <br />
              <strong>Teléfono:</strong> 676 230 537 <br />
              <strong>Correo electrónico:</strong> info@psicopiloto.com <br />
              <strong>Título oficial:</strong> Licenciado en Psicología con habilitación para el ejercicio de actividades sanitarias, expedido en España. <br />
              <strong>Colegiado:</strong> Nº AO14457 en el Ilustre Colegio Oficial de Psicología de Andalucía Oriental (COPAO).
            </p>
          </section>

          {/* 2. Objeto */}
          <section id="objeto" className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 border-b pb-1">2. Objeto</h2>
            <p>
              El presente documento regula las condiciones de uso del sitio web, cuyo objeto es ofrecer información sobre los servicios de psicología online y presencial de Psicopiloto y facilitar la toma de contacto con el titular.
            </p>
          </section>
          
          {/* 3. Condiciones de Uso y Responsabilidad del Usuario */}
          <section id="condiciones" className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 border-b pb-1">3. Condiciones de Uso y Responsabilidad del Usuario</h2>
            <p className="space-y-3">
                El Usuario se compromete a hacer un uso adecuado de los contenidos y servicios del Sitio Web. Se prohíbe expresamente cualquier actividad contraria a la ley, la moral, el orden público o que pueda causar perjuicio a la Entidad o a terceros.
            </p>
            <p className="mt-4">
                El Usuario se compromete, a título enunciativo y no limitativo, a no introducir virus, a no vulnerar la legislación en materia de propiedad intelectual e industrial, y a no atentar contra el honor o la intimidad de terceras personas. El Usuario garantiza la autenticidad de los datos que facilite.
            </p>
          </section>

          {/* 4. Política de Privacidad y Datos (RGPD) */}
          <section id="proteccion-datos" className="mb-8 space-y-4">
            <h2 className="text-2xl font-semibold mb-3 border-b pb-1">4. Política de Privacidad y Protección de Datos Personales</h2>
            <p>
              <strong>Garantía Sanitaria y Secreto Profesional:</strong> En cumplimiento del Código Deontológico de la Psicología y la normativa sanitaria aplicable en España, se garantiza el secreto profesional y la más estricta confidencialidad sobre toda la información clínica, médica o personal tratada durante las consultas y sesiones de terapia online o presenciales.
            </p>
            <p>
              De conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD), le informamos de que los datos personales que nos facilite a través de los formularios de esta web o comunicaciones directas serán tratados por <strong>Jose Carlos Rguez. Retamar</strong> con la finalidad de gestionar su consulta, agendar sus citas y/o prestarle el servicio de psicología solicitado. Al tratarse de servicios de salud mental, se procesarán datos de categoría especial relativos a la salud humana.
            </p>
            <p>
              <strong>Base Jurídica del Tratamiento:</strong> El tratamiento de sus datos se basa en el consentimiento explícito, libre e inequívoco que usted otorga al enviar voluntariamente el formulario de contacto o reservar una sesión, así como en la posterior relación precontractual o contractual para la prestación de los servicios profesionales de psicología.
            </p>
            <p>
              <strong>Plazo de Conservación:</strong> Sus datos personales se conservarán mientras sean necesarios para atender su solicitud o gestionar las sesiones de terapia. Una vez finalizada la prestación del servicio, las historias clínicas se conservarán bloqueadas durante los plazos legales obligatorios que fije la normativa sanitaria española aplicable para la conservación de documentación médica.
            </p>
            <p>
              <strong>Comunicación de Datos:</strong> Sus datos no serán cedidos ni vendidos a terceros, salvo obligación legal. No obstante, para garantizar el correcto funcionamiento técnico de la web y la consulta online, podrán tener acceso a ellos nuestros proveedores de servicios esenciales (en calidad de Encargados del Tratamiento), como el proveedor de hosting (Vercel), el gestor de formularios (Formspree) y herramientas digitales de comunicación (Google), operando siempre bajo estrictos contratos de confidencialidad conformes al marco del RGPD.
            </p>
          </section>

          {/* 5. Derechos del Usuario y Reclamaciones */}
          <section id="derechos" className="mb-8 space-y-4">
            <h2 className="text-2xl font-semibold mb-3 border-b pb-1">5. Derechos del Usuario y Reclamaciones</h2>
            <p>
              Usted puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión (derecho al olvido), oposición, limitación del tratamiento y portabilidad de sus datos personales, contactando con el titular a través de una solicitud por escrito adjuntando copia de su documento de identidad a la dirección de correo electrónico: <a href="mailto:info@psicopiloto.com" className="text-psicopiloto-green-600 hover:underline">info@psicopiloto.com</a>.
            </p>
            <p>
              Asimismo, si considera que el tratamiento de sus datos personales infringe la normativa de protección de datos, tiene pleno derecho a presentar una reclamación formal ante la Autoridad de Control competente (en España, la <a href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer" className="text-psicopiloto-green-600 hover:underline">Agencia Española de Protección de Datos - AEPD</a>).
            </p>
          </section>

          {/* 6. Exoneración de Responsabilidad */}
          <section id="exoneracion" className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 border-b pb-1">6. Exoneración de Responsabilidad</h2>
            <p>
              La Entidad no se hace responsable, ni directa ni subsidiariamente, de: la calidad del servicio de internet, la velocidad de acceso al Sitio Web, el correcto funcionamiento del mismo, ni la disponibilidad o continuidad de funcionamiento del Sitio Web. 
            </p>
            <p className="mt-4">
              Tampoco será responsable de los perjuicios que puedan causarse en los equipos del Usuario por el acceso o utilización del Sitio Web (virus, fallos de sistema, etc.), ni del incumplimiento por parte del Usuario de la ley, la moral o el orden público.
            </p>
          </section>

          {/* 7. Propiedad Intelectual */}
          <section id="propiedad" className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 border-b pb-1">7. Propiedad Intelectual</h2>
            <p>
              Todos los contenidos, textos, imágenes, logotipos y elementos de esta web son propiedad de Psicopiloto o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribution, comunicación pública (incluyendo su modalidad de puesta a disposición) y transformación total o parcial sin autorización expresa.
            </p>
          </section>

          {/* 8. Cookies */}
          <section id="cookies" className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 border-b pb-1">8. Política de Cookies</h2>
            <p>
              Esta web utiliza cookies propias y de terceros con fines analíticos y funcionales. Puede aceptar, rechazar o configurar su uso a través del banner de cookies. Para más información, consulte nuestra <a href="/politica-cookies" className="text-psicopiloto-green-600 hover:underline">Política de Cookies</a>.
            </p>
          </section>
          
          {/* 9. Fuero y Legislación Aplicable */}
          <section id="fuero" className="mb-8">
            <h2 className="text-2xl font-semibold mb-3 border-b pb-1">9. Fuero y Legislación Aplicable</h2>
            <p>
              El presente texto unificado se rige por la legislación española vigente. Para cualquier controversia que pudiera derivarse de la utilización del Sitio Web o de los servicios ofrecidos, las partes se someten a la jurisdicción y competencia de los tribunales de la ciudad de <strong>Granada</strong>, siempre que ello fuese legalmente posible. En caso contrario, se aplicará el fuero legal correspondiente.
            </p>
          </section>

          <p className="mt-6 text-sm text-gray-500">
            Última actualización: Mayo de 2026.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
