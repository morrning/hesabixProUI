import fa_lang from '../i18n/fa_lang'

import { createI18n, useI18n } from 'vue-i18n'

const messages = {
  fa: fa_lang
}

const i18n = createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: 'fa',
  fallbackLocale: 'fa',
  messages,
});

export default i18n;
