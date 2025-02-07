// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    public: {
      wordpressUrl: 'https://liftoff-mmi.chloe-vct.fr/'
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  tailwindcss: { exposeConfig: true, },
})
