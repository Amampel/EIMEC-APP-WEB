<template>
  <div
    class="min-h-screen bg-[url(/assets/eimec-background.png)] flex flex-col justify-between p-4 animate-square-in-center">

    <!-- Header -->
    <header class="flex justify-between items-center pl-4 pr-4" role="banner">
      <div class="flex flex-row items-center gap-2">
        <img src="/assets/menu-bars.png" alt="Menú" class="w-4 h-4 mb-2" />
        <NuxtLink to="/" aria-label="Inicio">
          <img src="/assets/eimec-logo-blanco.png" alt="Logotipo EIMEC" class="w-10 h-10 mb-2" />
        </NuxtLink>
      </div>
      <h1 class="sr-only">Inicio - EIMEC</h1>
      <span class="font-neue font-black text-xl md:text-xl lg:text-4xl text-white ml-4 md:ml-8 lg:ml-8">EIMEC</span>
      <NuxtLink to="/sobre-nosotros" class="text-sm md:text-base lg:text-base text-white font-neue font-bold">
        Sobre nosotros
      </NuxtLink>
    </header>

    <!-- Contenido principal -->
    <main class="flex-grow mt-20" role="main">
      <!-- Logo central -->
      <div class="flex justify-center items-center my-12">
        <NuxtLink to="/"
          class="w-[25rem] h-[25rem] rounded-full bg-white flex flex-col items-center justify-center text-center shadow-lg"
          aria-label="Volver a inicio">
          <img src="/assets/eimec-logo.png" alt="Logo EIMEC" class="w-[15rem] h-[17rem] mb-2" />
          <span class="text-4xl font-neue font-bold text-[#8ac1c1]">EIMEC</span>
        </NuxtLink>
      </div>

      <!-- Frase destacada (mobile) -->
      <section class="block md:hidden lg:hidden text-center text-[#3B3B3B] font-neue font-black text-md mb-6">
        Donde la Medicina Estética se forma,<br />se investiga y se practica.
      </section>

      <!-- Secciones -->
      <section class="flex justify-center flex-wrap gap-20 mb-12" aria-label="Opciones principales">
        <NuxtLink to="/formacion"
          class="w-[17rem] h-[17rem] rounded-full bg-white flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-[#A5D1CD]">
          <img src="/assets/eimec-formacion.webp" alt="Formación" class="w-[8rem] h-[9rem] mb-2"
            view-transition-name="formacion-logo" />
          <span class="font-neue font-bold text-xl text-[#8ac1c1]">FORMACIÓN</span>
        </NuxtLink>

        <NuxtLink to="/clinic"
          class="w-[17rem] h-[17rem] rounded-full bg-[#1B223C] flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-[#A5D1CD]">
          <img src="/assets/eimec-clinic.webp" alt="Clinic" class="w-[8rem] h-[9rem] mb-2" />
          <span class="text-xl font-neue font-bold text-white">CLINIC</span>
        </NuxtLink>

        <NuxtLink to="/space-rental"
          class="w-[17rem] h-[17rem] rounded-full bg-[#3F3D3B] flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-[#A5D1CD]">
          <img src="/assets/eimec-rental.png" alt="Space Rental" class="w-[8rem] h-[9rem] mb-2" />
          <span class="text-xl font-neue font-bold text-white">SPACE RENTAL</span>
        </NuxtLink>

        <NuxtLink to="/scientific"
          class="w-[17rem] h-[17rem] rounded-full bg-[#057779] flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-[#A5D1CD]">
          <img src="/assets/eimec-scientific.png" alt="Scientific" class="w-[8rem] h-[9rem] mb-2" />
          <span class="text-xl font-neue font-bold text-white">SCIENTIFIC</span>
        </NuxtLink>
      </section>

      <!-- Frase destacada (desktop) -->
      <section class="hidden md:block lg:block text-center text-[#3B3B3B] font-neue font-black text-3xl mt-24">
        Donde la Medicina Estética se forma,<br />se investiga y se practica.
      </section>
    </main>

    <!-- Footer -->
    <footer
      class="flex flex-col-reverse md:flex-row lg:flex-row items-center gap-4 text-white justify-between pl-4 pr-4"
      role="contentinfo">
      <div class="flex gap-4">
        <a href="https://wa.me/" target="_blank" aria-label="Whatsapp">
          <Icon name="mdi:whatsapp" size="40"
            class="transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1" />
        </a>
        <a href="https://facebook.com/" target="_blank" aria-label="Facebook">
          <Icon name="mdi:facebook" size="40"
            class="transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1" />
        </a>
        <a href="https://instagram.com/" target="_blank" aria-label="Instagram">
          <Icon name="mdi:instagram" size="40"
            class="transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1" />
        </a>
      </div>
      <!-- <div class="flex flex-col text-right">
        <span class="text-2xl font-neue font-black text-[#89C1C1]">PARA MÁS INFORMACIÓN</span>
        <button
          class="animate-pulse text-xl font-neue font-black text-[#89C1C1] rounded-full border-[1px] border-[#89C1C1]">
          RELLENA EL FORMULARIO
        </button>
      </div> -->
    </footer>
  </div>
</template>


<script setup lang="ts">
definePageMeta({
  title: 'Inicio - Centro Avanzado',
  description: 'Bienvenido al Centro Avanzado, referencia nacional en ciencia, formación y clínica.'
})
</script>
