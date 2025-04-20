<template>
  <div class="min-h-screen bg-[url(/assets/eimec-formacion-background.png)] flex flex-col justify-between p-4 ">
    <!-- Header -->
    <header class="flex justify-between items-center pl-4 pr-4">
      <div class="flex flex-row items-center gap-2">
        <img src="/assets/menu-bars.png" alt="Formación" class="w-4 h-4 mb-2" />
        <NuxtLink to="/">
          <img src="/assets/eimec-logo-verde.png" alt="Formación" class="w-10 h-10 mb-2" />
        </NuxtLink>
      </div>
      <img src="/assets/eimec-formacion.png" alt="Formación" class="w-25 h-10 mb-2 ml-4 md:ml-8 lg:ml-8" />
      <NuxtLink to="/sobre-nosotros" class="text-sm md:text-base lg:text-base text-[#8bc0c1] font-neue font-bold">Sobre
        nosotros
      </NuxtLink>
    </header>

    <!-- Central logo -->
    <div class="flex justify-center items-center my-12">
      <NuxtLink to="/" class="w-64 h-64 rounded-full  shadow-lg">
        <img src="/assets/eimec-logo-verde.png" alt="Formación" class="w-64 h-64 mb-2" />
      </NuxtLink>
    </div>

    <!-- Secciones -->
    <div class="flex justify-center flex-wrap gap-6 mb-12">
      <div class="block md:hidden lg:hidden text-center text-[#3B3B3B] font-neue font-black text-md mb-6">
        Formación acreditada con el rigor de la experiencia.
      </div>
      <NuxtLink to="/formacion" class="w-52 h-52 rounded-full bg-[#8ac1c1] flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 ease-in-out hover:scale-105
         hover:ring-2 hover:ring-offset-2 hover:ring-[#A5D1CD]">
        <span class="font-neue font-bold text-3xl text-white">FORMACIÓN</span>
      </NuxtLink>

      <NuxtLink to="/clinic" class="w-52 h-52 rounded-full bg-[#8ac1c1] flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 ease-in-out hover:scale-105
         hover:ring-2 hover:ring-offset-2 hover:ring-[#A5D1CD]">
        <span class="text-3xl font-neue font-bold text-white">CAMPUS VIRTUAL</span>
      </NuxtLink>

      <NuxtLink to="/space-rental"
        class="w-52 h-52 rounded-full bg-[#8ac1c1] flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-[#A5D1CD]">
        <span class="text-3xl font-neue font-bold text-white">PACIENTE MODDELO</span>
      </NuxtLink>

      <NuxtLink to="/scientific" class="w-52 h-52 rounded-full bg-[#8ac1c1] flex flex-col items-center justify-center text-center shadow-xl transition-all duration-300 ease-in-out hover:scale-105
         hover:ring-2 hover:ring-offset-2 hover:ring-[#A5D1CD]">
        <span class="text-3xl font-neue font-bold text-white">ALUMINI</span>
      </NuxtLink>
    </div>

    <!-- Frase final -->
    <div class="hidden md:block lg:block text-center text-[#3B3B3B] font-neue font-black text-md mb-6">
      Formación acreditada con el rigor de la experiencia.
    </div>

    <!-- Footer redes sociales -->
    <footer class="flex gap-4 text-white justify-between pl-4 pr-4">
      <div>
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
      <div class="flex flex-col">
        <span class="text-2xl font-neue font-black text-[#89C1C1]">PARA MÁS INFORMACIÓN</span>
        <button
          class="animate-pulse text-xl font-neue font-black text-[#89C1C1] rounded-full border-[1px] border-[#89C1C1]">RELLENA
          EL
          FORMULARIO</button>
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
