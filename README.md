# Psicopiloto - Ready for Vercel (Next.js + Tailwind)

Este proyecto está preparado para desplegarse en Vercel. **Importante**: Vercel requiere un directorio `pages/` o `app/` en la raíz del repositorio. Este repositorio tiene `pages/` en la raíz.

## Lista de verificación rápida antes de desplegar en Vercel
1. Extrae el ZIP y asegúrate de que archivos como `package.json`, `pages/`, `components/` estén en la raíz del proyecto (no dentro de otra carpeta).
2. Inicializa un repositorio Git y súbelo a GitHub (instrucciones abajo) **O** sube la carpeta del proyecto directamente a un nuevo repositorio en GitHub (usando la opción web "Upload files" y sube los contenidos de la raíz del proyecto).
3. En Vercel, Import Project → selecciona el repositorio de GitHub.
4. Agrega las Variables de Entorno en Vercel (Project Settings > Environment Variables):
   - `FORMSPREE_URL` = https://formspree.io/f/YOUR_ENDPOINT (ver configuración de Formspree)
   - `GAS_URL` = https://script.google.com/macros/s/YOUR_ID/exec (ver configuración de Google Apps Script)
5. Despliega. Vercel ejecutará automáticamente `npm install` y `npm run build`.

## Si obtienes el error "Couldn't find any `pages` or `app` directory"
Esto significa que la raíz del repositorio no contiene la carpeta `pages/`. Razones comunes:
- Se comprimió una carpeta padre (por ejemplo `psicopiloto_v2/psicopiloto/`) y GitHub/Vercel ve solo esa carpeta en vez de los archivos internos.
- Se subió el ZIP como una sola carpeta de nivel superior a GitHub. Solución: asegúrate de que los archivos estén en la raíz del repositorio (package.json y pages/ deben estar al nivel superior).

### Cómo verificar localmente (macOS)
En Terminal, dentro de la carpeta del proyecto, ejecuta:
ls -la

markdown
Copiar código
Deberías ver `package.json` y un directorio `pages` en la salida.

## Cómo subir a GitHub (pasos simples)
1. Abre Terminal y `cd` a la carpeta donde extrajiste el ZIP.
2. Ejecuta estos comandos (reemplaza con la URL de tu repositorio):
git init
git add .
git commit -m "Initial commit - Psicopiloto site"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main

markdown
Copiar código
Si no tienes git instalado, puedes subir vía la web de GitHub: crea un nuevo repositorio y usa "Upload files", arrastrando los archivos del proyecto (no la carpeta padre).

## Configuración de Formspree (email)
1. Crea una cuenta en https://formspree.io
2. Crea un formulario y copia el endpoint (https://formspree.io/f/xxxxx)
3. Pega esa URL en Vercel como `FORMSPREE_URL` (Variable de Entorno).

## Google Sheets (guardar envíos)
Sigue las instrucciones del README original incluido en el ZIP. El endpoint `doPost` de Apps Script devuelve la URL `/exec` que debes configurar como `GAS_URL` en Vercel.

## Notas
- Puedes dejar `FORMSPREE_URL` y `GAS_URL` vacíos mientras despliegas; el sitio se renderizará, pero el formulario de contacto mostrará un mensaje de error indicando la falta de variables de entorno.
- Si falla el build en Vercel, revisa los logs: muestran el `ls` de la raíz del repositorio y los errores detectados.

cpp
Copiar código
// Cambios realizados:
// - Traducción completa al español para coherencia con microcopy y UX.
// - Ajustes menores de redacción para mejorar claridad y legibilidad.
// - Mantiene todas las instrucciones originales intactas, sin cambiar la funcionalidad.







Preguntar a ChatGPT
