
import type { RouteRecordRaw } from 'vue-router'

const appPage: RouteRecordRaw[] = [
  {
    path: '/',
    component: async () => await import('@/view/home/index.vue')
  },
  {
    path: '/login',
    component: async () => await import('@/view/login/index.vue')
  }
]

const routes: RouteRecordRaw[] = appPage

export default routes
