import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则
})

router.beforeEach((to, from) => {
  // 返回 false 以取消导航
  nprogress.start()
})

router.afterEach((to, from) => {
  nprogress.done()
})

export default router
