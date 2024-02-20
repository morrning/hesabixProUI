import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/user/login',
            name: 'home',
            component: () => import('./views/user/login.vue'),
        },
    ]
})

router.beforeEach(async (to, from, next) => {
   

    next();
    return
})
export default router