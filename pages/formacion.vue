<template>
  <div class="min-h-screen bg-[url(/assets/eimec-formacion-background.png)] flex flex-col justify-between p-4 ">
    <!-- Header -->
    <header class="flex justify-between items-center pl-4 pr-4">
      <div class="flex flex-row items-center gap-2">
        <img src="/assets/menu-bars.png" alt="Formación" class="w-4 h-4 mb-2" />
        <NuxtLink to="/">
          <img src="/assets/eimec-logo-blanco.png" alt="Formación" class="w-10 h-10 mb-2" />
        </NuxtLink>
      </div>
      <img src="/assets/eimec-formacion.png" alt="Formación" class="w-30 h-10 mb-2 ml-4 md:ml-8 lg:ml-8" />
      <NuxtLink to="/sobre-nosotros" class="text-sm md:text-base lg:text-base text-white font-neue font-bold">Sobre
        nosotros
      </NuxtLink>
    </header>

    <!-- Central logo -->
    <div class="flex justify-center items-center my-12">
      <NuxtLink to="/"
        class="w-64 h-64 rounded-full bg-white flex flex-col items-center justify-center text-center shadow-lg">
        <img src="/assets/eimec-logo.png" alt="Formación" class="w-35 h-40 mb-2"
          view-transition-name="formacion-logo" />
        <span class="text-4xl font-neue font-bold text-[#8ac1c1]">EIMEC</span>
      </NuxtLink>
    </div>

    <!-- Secciones -->
    <div class="flex justify-center flex-wrap gap-6 mb-12">
      <div class="block md:hidden lg:hidden text-center text-[#3B3B3B] font-neue font-black text-md mb-6">
        Donde la Medicina Estética se forma,<br />se investiga y se practica.
      </div>
      <NuxtLink to="/formacion" class="w-52 h-52 rounded-full bg-white flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 ease-in-out hover:scale-105
         hover:ring-2 hover:ring-offset-2 hover:ring-[#A5D1CD]">
        <img src="/assets/eimec-formacion.webp" alt="Formación" class="w-20 h-25 mb-2" />
        <span class="font-neue font-bold text-xl text-[#8ac1c1]">FORMACIÓN</span>
      </NuxtLink>

      <NuxtLink to="/clinic" class="w-52 h-52 rounded-full bg-[#1B223C] flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 ease-in-out hover:scale-105
         hover:ring-2 hover:ring-offset-2 hover:ring-[#A5D1CD]">
        <img src="/assets/eimec-clinic.webp" alt="Clinic" class="w-20 h-25 mb-2" />
        <span class="text-xl font-neue font-bold text-white">CLINIC</span>
      </NuxtLink>

      <NuxtLink to="/space-rental"
        class="w-52 h-52 rounded-full bg-[#3F3D3B] flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-[#A5D1CD]">
        <img src="/assets/eimec-rental.png" alt="Space Rental" class="w-20 h-25 mb-2" />
        <span class="text-xl font-neue font-bold text-white">SPACE RENTAL</span>
      </NuxtLink>

      <NuxtLink to="/scientific" class="w-52 h-52 rounded-full bg-[#057779] flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 ease-in-out hover:scale-105
         hover:ring-2 hover:ring-offset-2 hover:ring-[#A5D1CD]">
        <img src="/assets/eimec-scientific.png" alt="Scientific" class="w-20 h-25 mb-2" />
        <span class="text-xl font-neue font-bold text-white">SCIENTIFIC</span>
      </NuxtLink>
    </div>

    <!-- Frase final -->
    <div class="hidden md:block lg:block text-center text-[#3B3B3B] font-neue font-black text-md mb-6">
      Donde la Medicina Estética se forma,<br />se investiga y se practica.
    </div>

    <!-- Footer redes sociales -->
    <footer class="flex gap-4 text-white justify-between">
      <div>
        <a href="https://wa.me/" target="_blank" aria-label="Whatsapp"
          class="transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1">
          <Icon name="mdi:whatsapp" size="40" />
        </a>
        <a href="https://facebook.com/" target="_blank" aria-label="Facebook"
          class="transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1">
          <Icon name="mdi:facebook" size="40" />
        </a>
        <a href="https://instagram.com/" target="_blank" aria-label="Instagram"
          class="transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-1">
          <Icon name="mdi:instagram" size="40" />
        </a>
      </div>
      <div class="flex flex-col">
        <span>PARA MÁS INFORMACIÓN</span>
        <button>RELLENA EL FORMULARIO</button>
      </div>

    </footer>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Inicio - Centro Avanzado',
  description: 'Bienvenido al Centro Avanzado, referencia nacional en ciencia, formación y clínica.'
})
</script>
