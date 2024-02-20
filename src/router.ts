import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/user/login',
            name: 'home',
            component: () => import('./views/user/login'),
        },
        {
            path: '/single/',
            component: () => import('./views/patterns/empty.vue'),
            children: [
                {
                    path: 'login',
                    component: () => import('./views/user/login.vue'),
                    meta: {
                        'title': 'داشبورد کاربر',
                        'login': true
                    }
                },
            ],
        },
    ]
})

router.beforeEach(async (to, from, next) => {
   

    next();
    return
})
export default router