import { createRouter, createWebHistory } from 'vue-router'
import AdminDash from '../views/AdminDash.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'login',
            path: '/',
            component: () => import('../views/Login.vue')
        },
        {
            name: 'AdminDash',
            path: '/ADash',
            component: AdminDash
        },
        {
            name: 'Register',
            path: '/Register',
            component: () => import('../views/Register.vue')
        },
        {
            name: 'UserDash',
            path: '/UDash',
            component: () => import('../views/UserDash.vue')
        },
    ]
})

export default router