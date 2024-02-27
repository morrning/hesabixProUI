import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/static/home.vue'),
    },
    {
      path: '/app/',
      component: () => import('@/layers/app.vue'),
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/app/general/dashboard.vue'),
        },
        {
          path: "/:catchAll(.*)",
          name: "not-found",
          component: () => import('@/views/static/page404.vue'),
          
        },
      ],
    },
    {
      path: '/user/',
      component: () => import('@/layers/profile.vue'),
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/user/dashboard.vue'),
        },{
          path: 'change-password',
          component: () => import('@/views/user/change_password.vue'),
        },{
          path: 'new-business',
          component: () => import('@/views/user/business_create.vue'),
        },{
          path: "/:catchAll(.*)",
          name: "not-found",
          component: () => import('@/views/static/page404.vue'),
          
        },
      ],
    },
    {
      path: '/single/',
      component: () => import('@/layers/single.vue'),
      children: [
        {
          path: 'login',
          component: () => import('@/views/single/login.vue'),
        },{
          path: 'register',
          component: () => import('@/views/single/register.vue'),
        },{
          path: 'forget-password',
          component: () => import('@/views/single/forget_password.vue'),
        },{
          path: 'active-account/:id',
          component: () => import('@/views/single/active_account.vue'),
        },{
          path: 'reset-password/:id',
          component: () => import('@/views/single/reset-password.vue'),
        },{
          path: 'logout',
          component: () => import('@/views/single/logout.vue'),
        },
        {
          path: "/:catchAll(.*)",
          name: "not-found",
          component: () => import('@/views/static/page404.vue'),
          
        },
      ],
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: () => import('@/views/static/page404.vue'),
      
    },
  ]
})

export default router
