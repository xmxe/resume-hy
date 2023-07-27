import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/components/index'
import Biker from '@/components/animation/biker'
import Dove from '@/components/animation/dove'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/biker',
      component: Biker
    },
    {
      path: '/dove',
      component: Dove
    }
  ]
})
