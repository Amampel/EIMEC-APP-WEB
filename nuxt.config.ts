export default defineNuxtConfig({
  css: ['@/assets/css/fonts.css'],
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/formacion', '/clinic', '/scientific', '/space-rental']
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Centro Avanzado de Investigación y Formación',
      meta: [
        { name: 'description', content: 'Centro líder en España especializado en formación avanzada, clínica, alquiler de espacios y desarrollo científico.' },
        { name: 'keywords', content: 'formación científica, clínica avanzada, alquiler de espacios, investigación científica, España' },
        { name: 'author', content: 'EIMEC' },
        { name: 'robots', content: 'index, follow' }
      ]
    }
  },


  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/sitemap', '@nuxtjs/robots', '@nuxt/icon'],
  robots: {
    allow: ['/'],
    disallow: ['/admin'],
    sitemap: 'https://eimec.com/sitemap.xml'
  },
  sitemap: {
    autoLastmod: true
  },
  runtimeConfig: {
    public: {
      sitemap: {
        hostname: 'https://eimec.com'
      }
    }
  },
  experimental: {
    viewTransition: true
  },
  compatibilityDate: '2025-04-15'
})