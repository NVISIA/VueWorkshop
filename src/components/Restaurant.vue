<template>
  <div id="restaurant" class="row">
      <div class="large-12 columns">
          <div class="callout panel">
              <p><strong>{{name}}</strong><span v-if="tagline"><br/>{{tagline}}</span></p>
              <div class="row">
                  <div class="large-3 medium-6 small-12 columns">
                      <p>Price: {{price}}</p>
                  </div>
                  <div class="large-3 medium-6 small-12 columns">
                      <p>Rating: {{rating}}</p>
                  </div>
                  <div class="large-6 medium-12 small-12 columns">
                      <p>Address: {{address}}</p>
                  </div>
              </div>
              <p>Description: {{description}} </p>
              <div class="availableTimes">
                <a :href="'#restaurant/' + id" :name="'restaurant-' + id"
                  class="button restaurantRow" style="color: white;">Show Times
                </a>
              </div>
              <div class="reservationForm"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'restaurant',
  data () {
    return {
      name: 'Test Restaurant',
      tagline: 'The Testaurant',
      price: 2,
      rating: 1,
      address: '123 Test Street',
      description: 'Foo Mae Padme Hum',
      id: 1
    }
  }
}
</script>

<style>
#restaurant {

}
</style>
