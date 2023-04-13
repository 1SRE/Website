import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: '1SRE',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: "keywords", content: "linux, networking, systems, platform, education, learn, student, students, professional, professionals, 1sre" },
      { hid: 'description', name: 'description', content: 'Your one stop-shop to learn anything and everything about Linux, networking, and other system concepts for free*' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: "og:title", name: 'title', content: '1SRE' },
      { property: "og:url", name: 'url', content: 'https://1sre.io' },
      { property: "og:image", name: 'image', content: 'https://1sre.io/logo.png' },
      { property: "og:theme-color", name: 'theme-color', content: '#00c180' },


    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  axios: {
    baseURL: 'http://127.0.0.1:8000'
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxtjs/fontaine',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          required: true,
          type: 'Bearer'
        },
        user: {
          property: 'user',
          autoFetch: true
        },
        endpoints: {
          login: { url: '/dj-rest-auth/login/', method: 'post' },
          logout: { url: '/dj-rest-auth/logout/', method: 'post' },
          user: { url: '/dj-rest-auth/user/', method: 'get' }
        }
      }
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
}
