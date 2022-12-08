import 'vue-router'

declare module 'vue-router' {
  // 路由元信息
  interface RouteMeta {
    title?: string
    requiresAuth?: boolean
  }
}
