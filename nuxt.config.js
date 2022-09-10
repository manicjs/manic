import { siteHead } from "./config";

export default {
  // Target: https://go.nuxtjs.dev/config-target
  ssr: false,
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    ...siteHead
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
    base: '/',
    prefetchLinks: false
  },

  cli: {
    badgeMessages: ['Manic is ready to go!'],
    bannerColor: 'red'
  }
}
