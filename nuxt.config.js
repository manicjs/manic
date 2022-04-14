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
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTUuNzQ5OCAyNy4xNTUxQzUyLjUyNzcgMjEuNjE1IDQ0LjQ3MjMgMjEuNjE0OSA0MS4yNTAyIDI3LjE1NTFMNi4xMzQwNCA4Ny41MzQ2QzIuOTExOTEgOTMuMDc0OCA2LjkzOTU2IDEwMCAxMy4zODM4IDEwMEg0MC43OTc1QzM4LjA0MzggOTcuNTkzNCAzNy4wMjQxIDkzLjQzMDMgMzkuMTA3OSA4OS44NTg0TDY1LjcwMzMgNDQuMjY5NEw1NS43NDk4IDI3LjE1NTFaIiBmaWxsPSIjODBFRUMwIi8+CjxwYXRoIGQ9Ik03OC4wMDAyIDQwLjM5OTdDODAuNjY2OCAzNS44NjY4IDg3LjMzMzIgMzUuODY2OCA4OS45OTk4IDQwLjM5OTdMMTE5LjA2MSA4OS44MDFDMTIxLjcyOCA5NC4zMzM5IDExOC4zOTUgMTAwIDExMy4wNjIgMTAwSDU0LjkzODNDNDkuNjA1MiAxMDAgNDYuMjcxOSA5NC4zMzM5IDQ4LjkzODUgODkuODAxTDc4LjAwMDIgNDAuMzk5N1oiIGZpbGw9IiMwMERDODIiLz4KPC9zdmc+Cg=='
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
        hid: 'og:image',
        property: 'og:image',
        content: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTUuNzQ5OCAyNy4xNTUxQzUyLjUyNzcgMjEuNjE1IDQ0LjQ3MjMgMjEuNjE0OSA0MS4yNTAyIDI3LjE1NTFMNi4xMzQwNCA4Ny41MzQ2QzIuOTExOTEgOTMuMDc0OCA2LjkzOTU2IDEwMCAxMy4zODM4IDEwMEg0MC43OTc1QzM4LjA0MzggOTcuNTkzNCAzNy4wMjQxIDkzLjQzMDMgMzkuMTA3OSA4OS44NTg0TDY1LjcwMzMgNDQuMjY5NEw1NS43NDk4IDI3LjE1NTFaIiBmaWxsPSIjODBFRUMwIi8+CjxwYXRoIGQ9Ik03OC4wMDAyIDQwLjM5OTdDODAuNjY2OCAzNS44NjY4IDg3LjMzMzIgMzUuODY2OCA4OS45OTk4IDQwLjM5OTdMMTE5LjA2MSA4OS44MDFDMTIxLjcyOCA5NC4zMzM5IDExOC4zOTUgMTAwIDExMy4wNjIgMTAwSDU0LjkzODNDNDkuNjA1MiAxMDAgNDYuMjcxOSA5NC4zMzM5IDQ4LjkzODUgODkuODAxTDc4LjAwMDIgNDAuMzk5N1oiIGZpbGw9IiMwMERDODIiLz4KPC9zdmc+Cg=='
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI0IiBoZWlnaHQ9IjEyNCIgdmlld0JveD0iMCAwIDEyNCAxMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNNTUuNzQ5OCAyNy4xNTUxQzUyLjUyNzcgMjEuNjE1IDQ0LjQ3MjMgMjEuNjE0OSA0MS4yNTAyIDI3LjE1NTFMNi4xMzQwNCA4Ny41MzQ2QzIuOTExOTEgOTMuMDc0OCA2LjkzOTU2IDEwMCAxMy4zODM4IDEwMEg0MC43OTc1QzM4LjA0MzggOTcuNTkzNCAzNy4wMjQxIDkzLjQzMDMgMzkuMTA3OSA4OS44NTg0TDY1LjcwMzMgNDQuMjY5NEw1NS43NDk4IDI3LjE1NTFaIiBmaWxsPSIjODBFRUMwIi8+CjxwYXRoIGQ9Ik03OC4wMDAyIDQwLjM5OTdDODAuNjY2OCAzNS44NjY4IDg3LjMzMzIgMzUuODY2OCA4OS45OTk4IDQwLjM5OTdMMTE5LjA2MSA4OS44MDFDMTIxLjcyOCA5NC4zMzM5IDExOC4zOTUgMTAwIDExMy4wNjIgMTAwSDU0LjkzODNDNDkuNjA1MiAxMDAgNDYuMjcxOSA5NC4zMzM5IDQ4LjkzODUgODkuODAxTDc4LjAwMDIgNDAuMzk5N1oiIGZpbGw9IiMwMERDODIiLz4KPC9zdmc+Cg=='
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
