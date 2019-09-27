import Vue from 'vue'
import Router from 'vue-router'

import homeRoutes from '@/modules/home/router'
import myAdmRoutes from '@/modules/myAdm/router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    ...homeRoutes,
    ...myAdmRoutes,
    { path: '', redirect: '/home' }
  ]
})

export default router
