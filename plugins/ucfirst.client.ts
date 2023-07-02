/**
 * @todo mention author
 * 
 * by https://stackoverflow.com/a/1026098/954480
 * @returns first letter of the input string uppercased
 */
export default defineNuxtPlugin(async (nuxtApp) => {
  return {
    provide: {
      ucfirst: (msg: string) => `${msg.charAt(0).toUpperCase() + msg.slice(1)}`
    }
  }
})
