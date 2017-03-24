import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Restaurant from '@/components/Restaurant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/restaurant',
      name: 'Restaurant',
      component: Restaurant
    }
  ]
})
