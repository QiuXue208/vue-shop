import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import store from '@/store'

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则
})

router.beforeEach((to, from) => {
  // 返回 false 以取消导航
  if (to.meta.requiresAuth && !store.state.user) {
    return {
      path: '/login',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath }
    }
  }
  nprogress.start()
})

router.afterEach((to, from) => {
  nprogress.done()
})

export default router
