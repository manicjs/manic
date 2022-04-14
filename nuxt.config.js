export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - nuxt-sw3cl by MrIsaacs',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'author', name: 'author', content: 'Ivan Ilić' },
      { hid: 'description', name: 'description', content: 'nuxt static web3 client' },
      { name: 'format-detection', content: 'telephone=no' },
      /**
       * Open Graph Twitter Card
       */
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary'
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@diamantberg'
      },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://mrisaacs.org/nuxt-sw3cl'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'nuxt-sw3cl by MrIsaacs'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'nuxt-sw3cl is a full static web3 client'
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: 'Nuxt logo'
      },
      /**
       * Open Graph Facebook Card
       */
      { hid: 'og:site_name', property: 'og:site_name', content: 'MrIsaacs' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://mrisaacs.org/nuxt-sw3cl'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'nuxt-sw3cl'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'nuxt-sw3cl is a full static web3 client'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Nuxt logo'
      }
    ],
    link: [
      {
        hid: 'canonical',
        rel: 'canonical',
        href: `https://mrisaacs.org/nuxt-sw3cl/`
      },
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

  // Auto import components, see https://go.nuxtjs.dev/config-components
  components: true,

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
    base: '/nuxt-sw3cl',
    prefetchLinks: false
  },

  cli: {
    badgeMessages: ['nuxt-sw3cl is ready to go!'],
    bannerColor: 'yellow'
  }
}
