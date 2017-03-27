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
                  class="button restaurantRow" style="color: white;" v-if="!$route.params.id">Show Times
                </a>
                <available-times-list v-else :availableTimes="availableTimes"></available-times-list>
              </div>
              <div class="reservationForm"></div>
          </div>
      </div>
  </div>
</template>

<script>
import AvailableTimesList from './AvailableTimesList.vue'

export default {
  name: 'restaurant',
  data () {
    return {
      availableTimes: []
    }
  },
  created () {
    if (this.$route.params.id) {
      this.fetchRestaurant(this.$route.params.id)
      this.fetchReservations(this.$route.params.id)
    }
  },
  watch: {
    '$route': 'fetchData'
  },
  props: [
    'name',
    'tagline',
    'price',
    'rating',
    'address',
    'description',
    'id'
  ],
  components: { AvailableTimesList },
  methods: {
    fetchReservations (id) {
      return fetch('/restaurants/' + id + '/reservations').then((response) => {
        if (response.ok) {
          return response.json()
        }

        throw new Error(response.status + ' ' + response.statusText)
      }).then((json) => {
        const reservations = json
        this.availableTimes = reservations.available
      })
    }
  }
}
</script>

<style>
#restaurant {

}
</style>
