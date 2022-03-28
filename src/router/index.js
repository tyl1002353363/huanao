import Vue from 'vue'
import Router from 'vue-router'
import HomeIndex from '@/views/Home/Index'
import Demo from '@/views/Demo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeIndex',
      component: HomeIndex
    }, {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
