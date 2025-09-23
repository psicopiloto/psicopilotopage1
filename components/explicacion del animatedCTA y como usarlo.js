Cómo usarlo en tus páginas

Guarda este archivo en:

components/AnimatedCTA.js


Importa y usa en cualquier página, por ejemplo en sobre-mi.js:

import AnimatedCTA from "../components/AnimatedCTA";

<AnimatedCTA href="/contacto" text="👉 Reserva tu primera consulta" color="green" />


Puedes cambiar color entre "green" o "blue" según tu Tailwind config.

Si quieres añadir clases extra (como mt-4 o w-full), pásalas por className:

<AnimatedCTA href="/contacto" text="Enviar mensaje" color="green" className="mt-4 w-full" />

Beneficios

Animación ligera de subida (hover:-translate-y-1) que mejora UX sin afectar carga.

Reutilizable en todas las páginas, mantiene coherencia visual.

Compatible con focus para accesibilidad (focus:ring-2).

Colores sincronizados con tu tailwind.config (psicopiloto-green y psicopiloto-blue).