// pages/politica-cookies.js

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Image from "next/image";
import { NextSeo } from "next-seo";
import { FaBalanceScale, FaFire } from "react-icons/fa"; // Importamos iconos por si se usan en la política

export default function PoliticaCookies() {
  const tablaCookies = [
    { name: "moove_gdpr_popup", entity: "Propia", purpose: "Guarda las preferencias del usuario sobre el consentimiento de cookies.", expiry: "1 año", type: "Necesaria" },
    { name: "_ga", entity: "Terceros (Google Analytics)", purpose: "Se usa para distinguir a los usuarios y generar estadísticas de uso.", expiry: "2 años", type: "Análisis" },
    { name: "_gid", entity: "Terceros (Google Analytics)", purpose: "Se usa para distinguir a los usuarios durante 24 horas.", expiry: "24 horas", type: "Análisis" },
    { name: "_gat", entity: "Terceros (Google Analytics)", purpose: "Se usa para limitar el porcentaje de solicitudes a Google.", expiry: "1 minuto", type: "Análisis" },
    // Si añades publicidad o más analíticas, irían aquí.
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NextSeo
        title="Política de Cookies | Psicopiloto"
        description="Política de Cookies de Psicopiloto. Información sobre el uso de cookies propias y de terceros en nuestra web."
        canonical="https://psicopiloto.com/politica-cookies"
        additionalMetaTags={[
          { name: "author", content: "Jose Carlos Rguez. Retamar" },
        ]}
      />

      <Nav />

      <main className="flex-grow pt-16">
        {/* Usamos prose-lg para que el texto sea más legible en la política */}
        <section className="max-w-4xl mx-auto px-6 py-12 prose prose-lg prose-gray"> 
          {/* Logo centrado */}
          <div className="flex justify-center mb-6">
            <Image
              src="/logo.webp"
              alt="Psicopiloto"
              width={150}
              height={50}
            />
          </div>

          <h1 className="text-3xl font-bold mb-6 text-center">Política de Cookies</h1>

          <p>
            La presente Política tiene por finalidad informarle sobre el uso de cookies en el sitio web de <strong>Psicopiloto®</strong>, cuyo titular es <strong>Jose Carlos Rguez. Retamar</strong>, en cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI).
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. ¿Qué son las cookies y para qué sirven?</h2>
          <p>
            Las cookies son pequeños ficheros que se descargan en su dispositivo (navegador, smartphone, tablet) al acceder a nuestra web. Permiten recopilar información estadística, recordar sus preferencias de navegación y, dependiendo de la información que contengan, se utilizan para reconocerle y mejorar el servicio ofrecido.
          </p>
          <p>
            Utilizamos cookies propias y de terceros para garantizar el correcto funcionamiento de la web, mejorar su experiencia de navegación y obtener estadísticas de uso.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Tipos de cookies utilizadas</h2>
          <p>Según su finalidad, las cookies se clasifican en:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Necesarias (Técnicas):</strong> Imprescindibles para el funcionamiento básico del sitio (ej: recordar el consentimiento). Están exentas de consentimiento.
            </li>
            <li>
              <strong>De Análisis o Rendimiento:</strong> Permiten el seguimiento y análisis estadístico de la actividad de los usuarios (ej: Google Analytics). Requieren su consentimiento.
            </li>
            <li>
              <strong>De Publicidad o Marketing:</strong> Almacenan información sobre su comportamiento de navegación para mostrar publicidad personalizada. Requieren su consentimiento.
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Cookies en esta web: Listado y Finalidad</h2>
          
          {/* ✨ CAMBIO: Párrafo de aclaración sobre Formspree y servicios de terceros */}
          <p>
            El envío de formularios de contacto en esta web se realiza a través del servicio de Formspree, un tercero que procesa la información para remitir el email al titular. Este servicio no instala cookies de análisis o publicidad. Las cookies listadas a continuación son las utilizadas directamente en la navegación o para fines de medición de tráfico.
          </p>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Entidad</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Finalidad</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Caducidad</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tablaCookies.map((cookie, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cookie.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cookie.entity}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{cookie.purpose}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cookie.expiry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Gestión y consentimiento</h2>
          <p>
            Al acceder a nuestro sitio web, se muestra un banner de cookies que le permite **aceptar, rechazar o configurar** el uso de cookies. El consentimiento es la base legal para el uso de cookies de análisis y marketing.
          </p>
          <p>
            Usted puede modificar o revocar su consentimiento en cualquier momento a través del panel de configuración de cookies o borrando las cookies directamente desde la configuración de su navegador.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cómo desactivar o eliminar cookies desde su navegador</h2>
          <p>Puede configurar su navegador para rechazar o eliminar cookies. Consulte las instrucciones específicas:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="underline text-psicopiloto-green-600 transition-colors duration-200 hover:text-psicopiloto-blue-600">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="http://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we" target="_blank" rel="noopener noreferrer" className="underline text-psicopiloto-green-600 transition-colors duration-200 hover:text-psicopiloto-blue-600">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline text-psicopiloto-green-600 transition-colors duration-200 hover:text-psicopiloto-blue-600">
                Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="underline text-psicopiloto-green-600 transition-colors duration-200 hover:text-psicopiloto-blue-600">
                Microsoft Edge
              </a>
            </li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Modificaciones de la Política</h2>
          <p>
            Esta Política de Cookies puede ser objeto de actualizaciones. Le invitamos a consultar esta política para conocer de forma suficiente qué cookies utilizamos, cómo y para qué. Siempre que realicemos dichas actualizaciones, encontrará la última versión aquí.
          </p>

          <p className="mt-8">
            Si tiene dudas sobre el uso de cookies en nuestra web, puede contactar con el responsable del tratamiento en{" "}
            <a href="mailto:info@psicopiloto.com" className="underline text-psicopiloto-green-600 hover:text-psicopiloto-blue-600 transition-colors duration-200">
              info@psicopiloto.com
            </a>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
