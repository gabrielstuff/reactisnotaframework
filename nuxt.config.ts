// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon'
  ],
  future: {
    compatibilityVersion: 4,
  },

  content: {
    database: {
      type: 'postgres',
      url: process.env.DATABASE_URL!,
    },
  },
})