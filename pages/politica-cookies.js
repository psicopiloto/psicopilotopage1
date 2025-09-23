import Nav from "../components/Nav";
import Footer from "../components/Footer";

export default function PoliticaCookies() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow pt-16">
        <section className="container mx-auto py-12 px-6 prose prose-gray">
          <h1 className="text-3xl font-bold mb-6">Política de Cookies</h1>

          <p>
            En <strong>Psicopiloto®</strong> utilizamos cookies propias y de
            terceros para garantizar el correcto funcionamiento de la web, mejorar tu experiencia de navegación, obtener estadísticas de uso y, cuando proceda, mostrar publicidad personalizada según tus intereses.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños archivos que se almacenan en tu navegador al visitar un sitio web. Permiten recordar información sobre tu visita, como preferencias de idioma o inicio de sesión, y pueden utilizarse con diferentes finalidades.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Tipos de cookies que utilizamos</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Cookies necesarias:</strong> imprescindibles para el funcionamiento de la web y no requieren consentimiento.
            </li>
            <li>
              <strong>Cookies de analítica:</strong> nos ayudan a entender cómo interactúan los usuarios con la web (por ejemplo, Google Analytics 4). Solo se activan si das tu consentimiento.
            </li>
            <li>
              <strong>Cookies de marketing:</strong> se utilizan para mostrar publicidad personalizada según tus intereses y requieren consentimiento explícito.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Gestión del consentimiento</h2>
          <p>
            Al acceder a nuestro sitio web, se muestra un banner de cookies que te permite:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Aceptar todas las cookies.</li>
            <li>Rechazar todas las cookies.</li>
            <li>Personalizar tu configuración, activando o desactivando cookies de analítica y marketing según tus preferencias.</li>
          </ul>
          <p>
            Puedes cambiar tu decisión en cualquier momento borrando las cookies de tu navegador o ajustando nuevamente tu consentimiento.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cómo desactivar o eliminar cookies desde tu navegador</h2>
          <p>Puedes configurar tu navegador para rechazar o eliminar cookies. Consulta las instrucciones específicas:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a href="https://support.google.com/chrome/answer/95647?hl=es" target="_blank" rel="noopener noreferrer" className="underline text-psicopiloto-green-600">
                Google Chrome
              </a>
            </li>
            <li>
              <a href="https://support.mozilla.org/es/kb/Borrar%20cookies" target="_blank" rel="noopener noreferrer" className="underline text-psicopiloto-green-600">
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="underline text-psicopiloto-green-600">
                Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="underline text-psicopiloto-green-600">
                Microsoft Edge
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Cambios en la política de cookies</h2>
          <p>
            Podemos actualizar esta Política de Cookies en cualquier momento para adaptarla a nuevas normativas o cambios en el uso de cookies. Te recomendamos revisarla periódicamente.
          </p>

          <p className="mt-8">
            Si tienes dudas sobre el uso de cookies en nuestra web, puedes contactar con nosotros en{" "}
            <a href="mailto:joseretamar@psicopiloto.com" className="underline text-psicopiloto-green-600">
              joseretamar@psicopiloto.com
            </a>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
