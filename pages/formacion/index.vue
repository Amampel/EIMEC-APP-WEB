<template>
  <div class="min-h-screen bg-[url(/assets/eimec-formacion-background.png)] flex flex-col justify-between p-4">
    <!-- Header -->
    <header class="flex justify-between items-center pl-4 pr-4" role="banner">
      <div class="flex flex-row items-center gap-2">
        <img src="/assets/menu-bars.png" alt="Menú" class="w-4 h-4 mb-2" />
        <NuxtLink to="/" aria-label="Inicio">
          <img src="/assets/eimec-logo-verde.png" alt="Logotipo EIMEC" class="w-10 h-10 mb-2" />
        </NuxtLink>
      </div>
      <!-- h1 accesible pero no visible -->
      <h1 class="sr-only">Formación en ciencia avanzada - EIMEC</h1>
      <img src="/assets/eimec-formacion.png" alt="Formación EIMEC" class="w-25 h-10 mb-2 ml-4 md:ml-8 lg:ml-8" />
      <NuxtLink to="/sobre-nosotros" class="text-base md:text-xl lg:text-xl text-[#8bc0c1] font-neue font-bold">
        Sobre nosotros
      </NuxtLink>
    </header>

    <!-- Contenido principal -->
    <main class="flex-grow mt-20" role="main">
      <!-- Logo central -->
      <div class="flex justify-center items-center my-12">
        <NuxtLink to="/" class="w-[25rem] h-[25rem] rounded-full shadow-lg" aria-label="Volver a inicio">
          <img src="/assets/eimec-logo-verde.png" alt="Logo EIMEC grande" class="w-[25rem] h-[25rem] mb-2" />
        </NuxtLink>
      </div>

      <!-- Frase destacada (mobile) -->
      <section class="block md:hidden lg:hidden text-center text-[#3B3B3B] font-neue font-black text-md mb-6">
        Formación acreditada con el rigor de la experiencia.
      </section>

      <!-- Secciones principales -->
      <section class="flex justify-center flex-wrap gap-20 mb-12" aria-label="Opciones de formación">
        <NuxtLink to="/formacion"
          class="w-[17rem] h-[17rem] rounded-full bg-[#8ac1c1] flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-[#A5D1CD]">
          <h2 class="font-neue font-bold text-3xl text-white">FORMACIÓN</h2>
        </NuxtLink>

        <NuxtLink to="/clinic"
          class="w-[17rem] h-[17rem] rounded-full bg-[#8ac1c1] flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-[#A5D1CD]">
          <h2 class="text-3xl font-neue font-bold text-white">CAMPUS VIRTUAL</h2>
        </NuxtLink>

        <NuxtLink to="/space-rental"
          class="w-[17rem] h-[17rem] rounded-full bg-[#8ac1c1] flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-[#A5D1CD]">
          <h2 class="text-3xl font-neue font-bold text-white">PACIENTE MODELO</h2>
        </NuxtLink>

        <NuxtLink to="/scientific"
          class="w-[17rem] h-[17rem] rounded-full bg-[#8ac1c1] flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-[#A5D1CD]">
          <h2 class="text-3xl font-neue font-bold text-white">ALUMNI</h2>
        </NuxtLink>
      </section>

      <!-- Frase destacada (desktop) -->
      <section class="hidden md:block lg:block text-center text-[#3B3B3B] font-neue font-black text-3xl mt-24">
        Formación acreditada con el rigor de la experiencia.
      </section>
    </main>

    <!-- Footer -->
    <footer
      class="flex flex-col-reverse md:flex-row lg:flex-row items-center gap-4 text-white justify-between pl-4 pr-4 "
      role="contentinfo">
      <div class="flex gap-4">
        <a href="https://wa.me/" target="_blank" aria-label="Whatsapp">
          <Icon name="mdi:whatsapp" size="40"
            class="transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 bg-[#8ac1c1]" />
        </a>
        <a href="https://facebook.com/" target="_blank" aria-label="Facebook">
          <Icon name="mdi:facebook" size="40"
            class="transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 bg-[#8ac1c1]" />
        </a>
        <a href="https://instagram.com/" target="_blank" aria-label="Instagram">
          <Icon name="mdi:instagram" size="40"
            class="transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1 bg-[#8ac1c1]" />
        </a>
      </div>
      <div class="flex flex-col text-right">
        <span class="text-2xl font-neue font-black text-[#89C1C1]">PARA MÁS INFORMACIÓN</span>
        <button
          class="animate-pulse text-xl font-neue font-black text-[#89C1C1] rounded-full border-[1px] border-[#89C1C1]">
          RELLENA EL FORMULARIO
        </button>
      </div>
    </footer>
  </div>
</template>


<script setup lang="ts">
useHead({
  title: 'Formación - Centro Avanzado de Investigación y Ciencia',
  meta: [
    { name: 'description', content: 'Centro líder en España especializado en formación científica avanzada. Descubre nuestros cursos, campus virtual y recursos.' },
    { property: 'og:title', content: 'Formación | EIMEC' },
    { property: 'og:description', content: 'Formación acreditada en ciencia avanzada, clínica, e investigación. Aprende con los mejores expertos.' },
    { property: 'og:image', content: '/assets/og-formacion.jpg' },
    { property: 'og:url', content: 'https://eimec.com/formacion' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})
definePageMeta({
  title: 'Formación - Centro Avanzado de Investigación y Ciencia',
  description: 'Centro líder en España especializado en formación científica avanzada. Descubre nuestros cursos, campus virtual y recursos.',
  ogTitle: 'Formación | EIMEC',
  ogDescription: 'Formación acreditada en ciencia avanzada, clínica, e investigación. Aprende con los mejores expertos.',
  ogImage: '/assets/og-formacion.jpg',
  ogUrl: 'https://eimec.com/formacion',
  twitterCard: 'summary_large_image',
})
</script>
