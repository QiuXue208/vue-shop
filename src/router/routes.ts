
import type { RouteRecordRaw } from 'vue-router'
// 不使用懒加载，而是优先加载出来
import AppLayout from '@/layout/AppLayout.vue'
import productRoute from './modules/product'

const appPage: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    children: [
      {
        path: '/',
        name: 'home',
        meta: {
          title: '首页'
        },
        component: async () => await import('@/view/home/index.vue')
      },
      productRoute
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: async () => await import('@/view/login/index.vue')
  }
]

const routes: RouteRecordRaw[] = appPage

export default routes
