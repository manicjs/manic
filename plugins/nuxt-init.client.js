import redirects from '../301.json'

export default async (context) => {
  const req = redirects.find(r => r.from === context.route.fullPath)

  if (req) {
    window.location.replace(req.to)
  }
}
