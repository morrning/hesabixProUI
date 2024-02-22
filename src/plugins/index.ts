/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'
import i18n from '@/i18n/i18n'
import axios from "@/plugins/axios";
// Types
import type { App } from 'vue'

export function registerPlugins (app: App) {
  app
    .use(axios)
    .use(i18n)
    .use(vuetify)
    .use(router)
    .use(pinia)
}
