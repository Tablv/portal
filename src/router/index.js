import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    children: [{
      path: 'index',
      name: 'index',
      component: () => import('@/views/index.vue'),
      meta: { title: '首页' }
    }, {
      path: 'product',
      name: 'product',
      component: () => import('@/views/product.vue'),
      meta: { title: '产品服务' }
    }]
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    hidden: true
  }
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}

router.selfaddRoutes = (params) => {
  router.matcher = new Router().matcher
  router.addRoutes(params)
}

export default router
