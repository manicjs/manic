export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s by MrIsaacs',
    title: 'nuxt-sw3cl',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'author', name: 'author', content: 'Ivan Ilić' },
      { hid: 'description', name: 'description', content: 'nuxt static web3 client' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/normalize.css',
    '@/assets/css/skeleton.css',
    '@/assets/css/custom.css',
    '@/assets/css/animation.css',
    '@/assets/css/material-design-iconic-font.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/nuxt-init.client.js'
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',
    ['@nuxtjs/eslint-module', {
      fix: true
    }]
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content'
  ],
  
  generate: {
    fallback: true
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    apiPrefix: 'api',
    dir: 'data/',
    liveEdit: false
  },

  /**
   * Customize router options for different environments
   * https://hikari-blog.com/nuxtjs-github-pages/
   */
   router: {
    base: '/',
    prefetchLinks: false
  },

  cli: {
    badgeMessages: ['nuxt-sw3cl is ready to go!'],
    bannerColor: 'yellow'
  }
}
