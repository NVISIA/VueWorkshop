<template>
  <div id="restaurant">
    <div class="row">
      <div class="large-12 columns">
          <div class="callout panel">
              <p><strong>{{name}}</strong><span v-if="tagline"><br/>{{tagline}}</span></p>
              <div class="row">
                  <div class="large-3 medium-6 small-12 columns">
                      <p>Price: {{ formatPrice(price) }}</p>
                  </div>
                  <div class="large-3 medium-6 small-12 columns">
                      <p>Rating: {{ formatRating(rating) }}</p>
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
                <available-times-list v-else :availableTimes="availableTimes"
                  @selectTime="selectTime"></available-times-list>
              </div>
              <reservation-form v-if="selectedTime" :time="selectedTime"
                :restaurantId="id" :restaurantName="name" @hideForm="hideForm">
              </reservation-form>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import AvailableTimesList from './AvailableTimesList.vue'
import ReservationForm from './ReservationForm.vue'

export default {
  name: 'restaurant',
  data () {
    return {
      availableTimes: [],
      selectedTime: null
    }
  },
  created () {
    if (this.$route.params.id) {
      this.fetchRestaurant(this.$route.params.id)
      this.fetchReservations(this.$route.params.id)
    }
  },
  watch: {
    '$route': ['fetchRestaurant', 'fetchReservations']
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
  components: {
    AvailableTimesList,
    ReservationForm
  },
  methods: {
    fetchRestaurant (id) {
      return fetch('/restaurants/' + id).then((response) => {
        if (response.ok) {
          return response.json()
        }

        throw new Error(response.status + ' ' + response.statusText)
      }).then((json) => {
        const restaurant = json
        this.name = restaurant.name
        this.tagline = restaurant.tagline
        this.price = restaurant.price
        this.rating = restaurant.rating
        this.address = restaurant.address
        this.description = restaurant.description
        this.id = restaurant.id
      })
    },
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
    },
    selectTime (time) {
      this.selectedTime = time
    },
    hideForm (event) {
      this.selectedTime = null
    },
    formatPrice (price) {
      if (!price) {
        return ''
      }

      price = parseInt(price)
      let string = ''

      for (let i = 0; i < price; i++) {
        string += '$'
      }

      return string
    },
    formatRating (rating) {
      if (!rating) {
        return ''
      }

      rating = parseInt(rating)
      let string = ''

      for (let i = 0; i < rating; i += 25) {
        string += '*'
      }

      return string
    }
  }
}
</script>

<style>
#restaurant {

}
</style>
