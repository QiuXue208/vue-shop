/* eslint-disable @typescript-eslint/promise-function-async */
import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'product',
  name: 'product_parent',
  // component: RouterView,
  meta: {
    title: '商品'
  },
  children: [
    {
      path: 'product_list',
      name: 'product_list',
      meta: {
        title: '商品列表'
      },
      component: () => import('@/view/product/list/index.vue')
    },
    {
      path: 'product_attr',
      name: 'product_attr',
      meta: {
        title: '商品规格'
      },
      component: () => import('@/view/product/attr/index.vue')
    },
    {
      path: 'product_classify',
      name: 'product_classify',
      meta: {
        title: '商品分类'
      },
      component: () => import('@/view/product/classify/index.vue')
    },
    {
      path: 'product_comment',
      name: 'product_comment',
      meta: {
        title: '商品评论'
      },
      component: () => import('@/view/product/comment/index.vue')
    }
  ]
}

export default routes
