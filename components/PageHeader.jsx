<header class="relative w-full h-screen">
  <!-- Imagen de fondo -->
  <img 
    src="tu-imagen.jpg" 
    alt="Imagen de cabecera"
    class="w-full h-full object-contain md:object-cover"
  />

  <!-- Capa oscura encima de la imagen -->
  <div class="absolute inset-0 bg-black bg-opacity-40"></div>

  <!-- Contenido centrado -->
  <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
    <h1 class="text-3xl md:text-5xl font-bold mb-4">
      Bienvenido a Mi Página
    </h1>
    <p class="text-lg md:text-xl max-w-2xl">
      Psicología online para tu bienestar emocional y crecimiento personal.
    </p>
    <a 
      href="#contacto" 
      class="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg text-lg font-medium transition"
    >
      Contáctame
    </a>
  </div>
</header>
