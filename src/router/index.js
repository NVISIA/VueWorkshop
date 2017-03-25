import Vue from 'vue'
import Router from 'vue-router'
import RestaurantList from '@/components/RestaurantList'
import Restaurant from '@/components/Restaurant'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'restaurantList',
      component: RestaurantList
    },
    {
      path: '/restaurant',
      name: 'Restaurant',
      component: Restaurant
    }
  ]
})
