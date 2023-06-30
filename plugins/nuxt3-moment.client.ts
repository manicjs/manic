import moment from 'moment'

export default defineNuxtPlugin(async (nuxtApp) => {
  return {
    provide: {
      moment: moment
    }
  }
})
