import en from './locales/en-US.json'
import de from './locales/de-AT.json'

export default defineI18nConfig(() => ({
  defaultLocale: 'en',
  langDir: './locales',
  locale: 'en',
  lazy: {
    skipNuxtState: true
  },
  messages: {
    en,
    de
  },
  parsePages: false,
  strategy: 'prefix_except_default',
  vueI18n: {
    legacy: false
  }
}))
