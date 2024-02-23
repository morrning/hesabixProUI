import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
//i18n imports
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n, useI18n } from 'vue-i18n'
import i18n from '@/i18n/i18n'
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {aliases, mdi} from "vuetify/iconsets/mdi";

//axios
import axios from "axios";
//hesabx configs
import config from "@/hesabix.conf";

//configure axios
axios.defaults.headers.common['X-AUTH-TOKEN'] = localStorage.getItem('X-AUTH-TOKEN');
axios.defaults.baseURL = config.apiUrl;

// vuetify
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
    locale: {
        adapter: createVueI18nAdapter({ i18n, useI18n }),
    },
})
// swall alert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const swallOptions = {

};

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(i18n)
app.use(VueSweetalert2,swallOptions);
app.mount('#app')
