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
      path: '/index',
      name: 'index',
      component: () => import('@/views/index/index.vue')
    },
    {
      path: '/productDetail',
      name: 'productDetail',
      component: () => import('@/views/productDetail/productDetail.vue')
    }]
  },
  {
    path: '/product',
    name: '产品服务',
    component: () => import('@/views/product.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '*',
    name: '*',
    redirect: '/404'
  }
]

const createRouter = () => new Router({
  mode: 'history',
  routes: constantRoutes,
  linkExactActiveClass: 'menu-bar-item-active',
  scrollBehavior: () => ({ y: 0 })
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

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router
