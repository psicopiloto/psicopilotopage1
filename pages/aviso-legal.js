// pages/aviso-legal.js

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function AvisoLegal() {
  const secciones = [
    { id: "titular", label: "Titular de la web" },
    { id: "objeto", label: "Objeto" },
    { id: "proteccion-datos", label: "Protección de datos personales" },
    { id: "derechos", label: "Derechos de los usuarios" },
    { id: "propiedad", label: "Propiedad intelectual" },
    { id: "cookies", label: "Cookies" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NextSeo
        title="Aviso Legal y Política de Privacidad | Psicopiloto"
        description="Aviso Legal y Política de Privacidad de Psicopiloto. Psicólogo online y presencial en Granada."
        canonical="https://psicopiloto.com/aviso-legal"
        additionalMetaTags={[
          { name: "author", content: "Jose Carlos Rguez. Retamar" },
        ]}
      />

      <Nav />

      <main className="flex-grow pt-16">
        <section className="max-w-4xl mx-auto px-6 py-12 text-gray-700">
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.webp"
              alt="Psicopiloto"
              width={150}
              height={50}
            />
          </div>

          <h1 className="text-3xl font-bold mb-6 text-center">Aviso Legal y Política de Privacidad</h1>

          <nav className="mb-8 bg-gray-50 p-4 rounded-lg shadow-sm">
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

          <section id="titular" className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Titular de la web</h2>
            <p>
              <strong>Nombre:</strong> Jose Carlos Rguez. Retamar <br />
              <strong>Teléfono:</strong> 676 230 537 <br />
              <strong>Correo electrónico:</strong> joseretamar@psicopiloto.com <br />
            </p>
          </section>

          <section id="objeto" className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Objeto</h2>
            <p>
              La presente página web tiene por objeto ofrecer información sobre los servicios de psicología de Psicopiloto y permitir la toma de contacto con el titular.
            </p>
          </section>

          {/* ✨ CORRECCIÓN: Contenido actualizado para cumplir con el RGPD */}
          <section id="proteccion-datos" className="mb-8 space-y-4">
            <h2 className="text-xl font-semibold mb-2">Protección de Datos Personales</h2>
            <p>
              De conformidad con el Reglamento (UE) 2016/679 (RGPD), le informamos de que los datos personales que nos facilite a través de los formularios de esta web serán tratados por <strong>Jose Carlos Rguez. Retamar</strong> con la finalidad de gestionar su consulta y/o prestarle el servicio solicitado.
            </p>
            <p>
              <strong>Base Jurídica del Tratamiento:</strong> El tratamiento de sus datos se basa en el consentimiento explícito que usted otorga al enviar el formulario.
            </p>
            <p>
              <strong>Plazo de Conservación:</strong> Sus datos se conservarán mientras sean necesarios para atender su solicitud o mientras no solicite su supresión. Posteriormente, se conservarán durante los plazos legales aplicables.
            </p>
            <p>
              <strong>Comunicación de Datos:</strong> Sus datos no serán cedidos a terceros, salvo obligación legal. No obstante, para el correcto funcionamiento de la web, podrán tener acceso a ellos nuestros proveedores de servicios (Encargados del Tratamiento), como el proveedor de hosting (Vercel), el gestor de formularios (Formspree) y otros proveedores de herramientas analíticas o de comunicación (Google), siempre bajo nuestro control y con las debidas garantías de seguridad.
            </p>
          </section>

          {/* ✨ CORRECCIÓN: Contenido actualizado para cumplir con el RGPD */}
          <section id="derechos" className="mb-8 space-y-4">
            <h2 className="text-xl font-semibold mb-2">Derechos de los usuarios</h2>
            <p>
              Usted puede ejercer en cualquier momento sus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad de sus datos, contactando con el titular a través de los datos de contacto proporcionados en esta página.
            </p>
            <p>
              Asimismo, si considera que el tratamiento de sus datos no se ajusta a la normativa, tiene derecho a presentar una reclamación ante la Autoridad de Control competente (en España, la <a href="https://www.aepd.es/" target="_blank" rel="noopener noreferrer" className="text-psicopiloto-green-600 hover:underline">Agencia Española de Protección de Datos</a>).
            </p>
          </section>

          <section id="propiedad" className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Propiedad intelectual</h2>
            <p>
              Todos los contenidos, textos, imágenes, logotipos y elementos de esta web son propiedad de Psicopiloto o de terceros que han autorizado su uso. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.
            </p>
          </section>

          <section id="cookies" className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Cookies</h2>
            <p>
              Esta web utiliza cookies propias y de terceros con fines analíticos y funcionales. Puede aceptar, rechazar o configurar su uso a través del banner de cookies. Para más información, consulte nuestra <a href="/politica-cookies" className="text-psicopiloto-green-600 hover:underline">Política de Cookies</a>.
            </p>
          </section>

          <p className="mt-6 text-sm text-gray-500">
            Última actualización: octubre 2025.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
