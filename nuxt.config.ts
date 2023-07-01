export default {
  telemetry: false,
  ssr: false,
  nitro: {
    prerender: {
      crawlLinks: true,
    }
  },
  app: {
    head: {
      charset: 'utf-16',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
      ],
      "link": [],
      "style": [],
      "script": [],
      "noscript": []
    }
  },

  css: [
    '@/assets/scss/index.scss',
    '@/assets/css/material-design-iconic-font.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  // plugins: [
  //   '~/plugins/nuxt-init.client.js'
  // ],

  // Auto import components, see https://go.nuxtjs.dev/config-components
  // components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/moment',
    ['@nuxtjs/eslint-module', {
      fix: true
    }]
  ],

  /**
   * Nuxt Modules
   * @see https://nuxt.com/modules
   */
  modules: [
    '@nuxt/content',
    '@nuxt/devtools',
    '@nuxtjs/i18n'
    // '@nuxtjs/color-mode'
  ],
  
  /**
   * Nuxt Content - Module
   * @see https://content.nuxtjs.org/guide/writing/document-driven
   */
  content: {
    // apiPrefix: 'api',
    // dir: 'data/',
    // liveEdit: false,
    documentDriven: true,
    navigation: {
      fields: ['title']
    }
  },

  /**
   * Nuxt I18n - Module
   * @see https://v8.i18n.nuxtjs.org/
   */
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  // runtimeConfig: {
  //   public: {
  //     i18n: {
  //        title: 'asd'
  //        // smothing other options ...
  //     }
  //   }
  // }

  // cli: {
  //   badgeMessages: ['Manic is ready to go!'],
  //   bannerColor: 'red'
  // }
}
