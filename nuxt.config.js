export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'NASA',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:'https://kit.fontawesome.com/8cca716547.js' },
      { rel:"stylesheet", href:'https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/firebase.js'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    
    
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBHO1tmcOz9PiuuZZl9LVPrQLTNKnQs-XY",
          authDomain: "test-login-79e01.firebaseapp.com",
          databaseURL: "https://test-login-79e01.firebaseio.com",
          projectId: "test-login-79e01",
          storageBucket: "test-login-79e01.appspot.com",
          messagingSenderId: "11033163715",
          appId: "1:11033163715:web:239d7131f88490a80aef76"
        },
        services: {
          storage: true // Just as example. Can be any other service.
        }
      }
    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
