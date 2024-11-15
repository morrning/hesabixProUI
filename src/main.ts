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
import { aliases, mdi } from "vuetify/iconsets/mdi";

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
        defaultTheme: 'light',
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.indigo.darken4, // #E53935
                    secondary: colors.grey.darken4, // #FFCDD2
                    danger: colors.red.darken3,
                    dangerLight: colors.red.lighten4,
                    primaryLight: '#f8f9fc',
                    primaryLight2: '#edf1fc',
                    success: '#457237'
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
axios.get('/api2/user/check/login').then((response) => {
    localStorage.setItem('isLogedIn', response.data.Success);

});

// add app stores
import applicationStore from "@/stores/applicationStore";

//add components
import Hdatepicker from "@/components/forms/Hdatepicker.vue";
import Vue3PersianDatetimePicker from 'vue3-persian-datetime-picker';
import calendarLocalConfig from "@/i18n/calendarLocalConfig";
const app = createApp(App)
app.component(VueCountdown.name, VueCountdown);
app.component('h-date-picker', Hdatepicker);

app.use(Vue3PersianDatetimePicker, {
    name: 'CustomDatePicker',
    props: {
        locale: localStorage.getItem('UI_LANG'),
        color: "#3059ab",
        format: calendarLocalConfig.format(localStorage.getItem('UI_CALENDAR')),
        displayFormat: calendarLocalConfig.format(localStorage.getItem('UI_CALENDAR')),
        editable: false,
        autoSubmit: true,
        localeConfig: calendarLocalConfig.data().localeConfig
    }
})
app.use(createPinia())
app.use(router)
app.use(vuetify)
app.use(i18n)
app.use(VueSweetalert2, swallOptions);
//add stores
app.use(applicationStore);
app.mount('#app')
