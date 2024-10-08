// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  modules: [
    '@pinia/nuxt', 
    '@nuxtjs/i18n',
  ],
  app: {
    // pageTransition: { name: 'page', mode: 'out-in' },
    // layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  i18n: {
    defaultLocale: 'ru',
    strategy: 'no_prefix',
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: "ru",
        iso: "ru",
        name: "Ру",
      },
      {
        code: "uz",
        iso: "uz",
        name: "O`z",
      },
      {
        code: "en",
        iso: "en",
        name: "En",
      },
    ],
  },
})
