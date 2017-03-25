<template>
  <div class="restaurantList">
    <div is="restaurant"
      v-for="restaurant in restaurants"
      :key="restaurant.id"
      :name="restaurant.name"
      :tagline="restaurant.tagline"
      :price="restaurant.price"
      :rating="restaurant.rating"
      :address="restaurant.address"
      :description="restaurant.description"
      :id="restaurant.id"></div>
  </div>
</template>

<script>
import Restaurant from './Restaurant'

export default {
  name: 'restaurantList',
  data () {
    return {
      restaurants: [{
        name: 'Test Restaurant',
        tagline: 'The Testaurant',
        price: 2,
        rating: 1,
        address: '123 Test Street',
        description: 'Foo Mae Padme Hum',
        id: 1
      }]
    }
  },

  components: [
    Restaurant
  ]
}
</script>

<style>
#restaurantList {

}
</style>
