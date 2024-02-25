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
import colors from 'vuetify/util/colors'

//i18n imports
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import { createI18n, useI18n } from 'vue-i18n'
import i18n from '@/i18n/i18n'
// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import {aliases, mdi} from "vuetify/iconsets/mdi";

//vue countdown
import VueCountdown from '@chenfengyuan/vue-countdown';

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
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.indigo.darken4, // #E53935
                    secondary: colors.grey.darken4, // #FFCDD2
                    danger: colors.red.darken3
                }
            },
        },
    },
})
// swall alert
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
const swallOptions = {

};
//  check user login state
const result = await axios.get('/api/user/is_loged_in');
localStorage.setItem('isLogedIn',result.data.data);

const app = createApp(App)
app.component(VueCountdown.name, VueCountdown);
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(i18n)
app.use(VueSweetalert2,swallOptions);
app.mount('#app')
