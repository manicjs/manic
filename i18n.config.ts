import en from './locales/en-US.json'

export default defineI18nConfig(() => ({
  defaultLocale: 'en',
  langDir: './locales',
  locale: 'en',
  lazy: {
    skipNuxtState: true
  },
  messages: {
    en
  },
  parsePages: false,
  strategy: 'prefix_except_default',
  vueI18n: {
    legacy: false
  }
}))
