import redirects from '../301.json'

export default defineNuxtPlugin({
  name: 'nuxt-init-client',
  hooks: {
    'app:created'({ _context: { provides }}) {
      const req = redirects.find(r =>
        r.from === provides[Object.getOwnPropertySymbols(provides)[1]].fullPath
      )

      if (req) {
        window.location.replace(req.to)
      }
    }
  }
})
