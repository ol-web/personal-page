import dotenv from 'dotenv'
import focusVisible from 'postcss-focus-visible'

dotenv.config()

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ol-web | Michał Olejniczak - Front End Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Michał Olejniczak - Front End Developer | I am a front end developer passionate about web technologies from a young age.'
      },
      {
        property: 'og:description',
        content:
          'I am a front end developer passionate about web technologies from a young age.'
      },
      {
        property: 'og:image',
        content: '/og.jpg'
      },
      {
        name: 'keywords',
        content:
          'ol-web, ol web, olejniczak, michal olejniczak, web developer, javascript developer, front end, front end developer, phaser, developer, web, javascript, js, react, vue, html, poland, polska, programista, programmer'
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#402d20' }
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
        sizes: '180x180'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-32x32.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16x16.png',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/sass/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '@/plugins/add-event-listener',
      mode: 'client'
    },
    {
      src: '@/plugins/lazysizes',
      mode: 'client'
    },
    {
      src: '@/plugins/focus-visible',
      mode: 'client'
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://github.com/nuxt-community/style-resources-module#readme
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
    // https://go.nuxtjs.dev/pwa
    // '@nuxtjs/pwa'
  ],

  styleResources: {
    scss: [
      '@/assets/sass/_vars.scss',
      '@/assets/sass/_mixins.scss',
      '@/assets/sass/_utils.scss',
      '@/assets/sass/_transitions.scss'
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: [focusVisible()]
    }
  }
}
