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
  data () {
    return {
      restaurants: [{
        name: 'Test Restaurant',
        tagline: 'The Testaurant',
        price: 2,
        rating: 1,
        address: '123 Test Street',
        description: 'Foo Mane Padme Hum: Our first obligation is to keep the foo counters turning.',
        id: 1
      }]
    }
  }
}
</script>

<style>
#restaurantList {

}
</style>
