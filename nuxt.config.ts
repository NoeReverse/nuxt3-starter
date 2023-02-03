// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],

  pinia: {
    autoImports: ['defineStore']
  },

  // Pinia stores auto-import
  imports: {
    dirs: ['store/*']
  },

  // To use the Tailwind config in components
  // See: https://tailwindcss.nuxtjs.org/getting-started/options#exposeconfig
  tailwindcss: {
    exposeConfig: true
  },

  // Nuxt Google Fonts options to load the required fonts into the project
  // See: https://google-fonts.nuxtjs.org/options
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700],
      Lato: true
    }
  },

  // To interact Nuxt Color Mode with Tailwind CSS
  // See: https://color-mode.nuxtjs.org/#tailwindcss
  colorMode: {
    classSuffix: ''
  },

  // To make the naive-ui library work for server-side rendering
  // See: https://www.naiveui.com/en-US/dark/docs/ssr
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer'
          ]
        : ['@juggle/resize-observer']
  },
  vite: {
    optimizeDeps: {
      include:
        process.env.NODE_ENV === 'development'
          ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
          : []
    }
  }
})
