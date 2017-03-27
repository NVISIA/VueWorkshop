<template>
  <div class="restaurantList">
    <restaurant
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :name="restaurant.name"
      :tagline="restaurant.tagline"
      :price="restaurant.price"
      :rating="restaurant.rating"
      :address="restaurant.address"
      :description="restaurant.description"
      :id="restaurant.id"></restaurant>
  </div>
</template>

<script>
import Restaurant from './Restaurant.vue'

export default {
  name: 'restaurantList',
  components: { Restaurant },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      return fetch('/restaurants').then((response) => {
        if (response.ok) {
          return response.json()
        }

        throw new Error(response.status + ' ' + response.statusText)
      }).then((json) => {
        const restaurants = json
        this.restaurants = restaurants
      })
    }
  },
  data () {
    return {
      restaurants: []
    }
  }
}
</script>

<style>
#restaurantList {

}
</style>
