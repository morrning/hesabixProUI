/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

//router
import router from './router';

//translatins
import VueI18n from 'vue-i18n'
import {translations} from './i18n/translations';
const i18n = VueI18n.createI18n({
    locale: 'fa', // set locale
    fallbackLocale: 'fa', // set fallback locale
    translations, // set locale messages
    // If you need to specify other options, you can set other options
    // ...
  })
  
const app = createApp(App)

registerPlugins(app)
app.use(router);
app.use(i18n)
app.mount('#app')
