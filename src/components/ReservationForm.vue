<template>
  <div class="row">
      <div class="large-12 columns">
          <div class="panel">
              <form v-on:submit.prevent="reserveRestaurant">
                  <div class="row">
                      <div class="large-6 columns">
                          <h5><label>Selected Time:</label>{{ showTime(time) }}</h5>
                          <span class="success" v-if="success">Successfully reserved {{ restaurantName }} for {{ showTime(time) }}!</span>
                      </div>
                  </div>
                  <div class="row" v-if="!success">
                      <div class="large-6 columns">
                          <label>Number of Guests</label>
                          <input type="number" v-model="guests" placeholder="#"
                            min="1" inputmode="numeric" required />
                      </div>
                  </div>

                  <div class="row" v-if="!success">
                      <div class="large-12 columns">
                          <label>Name:</label>
                          <input type="text" v-model="name"
                            placeholder="Enter your full name"
                            minlength="1" autocapitalize="words"
                            autocomplete="name" inputmode="verbatim" required />
                      </div>
                  </div>
                  <div class="row" v-if="!success">
                      <div class="large-6 medium-6 columns">
                          <label>Phone:</label>
                          <input type="tel" v-model="phone"
                            placeholder="###-###-####" autocomplete="tel"
                            required
                            pattern="^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$" />
                      </div>
                      <div class="large-6 medium-6 columns">
                          <label>Email:</label>
                          <input type="email" v-model="email"
                            placeholder="user@domain.ext" autocomplete="email" />
                      </div>
                  </div>
                  <div class="row" v-if="!success">
                      <div class="large-8 medium-8 columns">
                          <label>Seating:</label>
                          <input type="radio" v-model="location" value="Red" id="noPreference"><label for="noPreference">No Preference</label>
                          <input type="radio" v-model="location" value="Red" id="outside"><label for="outside">Outside</label>
                          <input type="radio" v-model="location" value="Blue" id="inside"><label for="inside">Inside</label>
                      </div>
                      <div class="large-4 medium-4 columns">
                          <label>Other Info:</label>
                          <input id="specialOccasion" v-model="isSpecialOccasion" type="checkbox"><label for="specialOccasion">Special Occasion</label>
                      </div>
                  </div>
                  <div class="row" v-if="!success">
                      <div class="large-12 columns">
                          <label>Special Requests:</label>
                          <textarea v-model="specialRequests" placeholder="Enter any special requests here."></textarea>
                      </div>
                  </div>
                  <div class="row" v-if="!success">
                      <div class="small-12 medium-12 large-12 small-centered columns">
                          <button type="submit" class="small radius button submitButton">Make Reservation</button>
                          <button type="reset" @click="hideForm" class="small radius secondary button cancelButton">Cancel</button>
                      </div>
                  </div>
              </form>
              <div class="error-box" v-if="errorList.length > 0">
                  <ul class="error-list">
                    <li v-for="error in errorList">{{ error.message }}</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import showTime from '../showTime.js'

export default {
  name: 'reservation-form',
  data () {
    return {
      showTime: showTime,
      guests: 1,
      name: '',
      phone: '',
      email: '',
      location: 'Red',
      isSpecialOccasion: false,
      specialRequests: '',
      success: false,
      errorList: []
    }
  },
  props: [
    'time',
    'restaurantId',
    'restaurantName'
  ],
  watch: {
    time: function (newValue) {
      this.success = false
      this.errorList = []
    }
  },
  methods: {
    hideForm (event) {
      this.success = false
      this.errorList = []
      this.$emit('hideForm')
    },
    reserveRestaurant (event) {
      let reservationData = {
        time: this.time,
        restaurantId: this.restaurantId,
        guests: this.guests,
        name: this.name,
        phone: this.phone,
        email: this.email,
        location: this.location,
        isSpecialOccasion: this.isSpecialOccasion,
        specialRequests: this.specialRequests
      }

      console.log(reservationData)

      let myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      return fetch('/reservations', {
        method: 'POST',
        body: JSON.stringify(reservationData),
        headers: myHeaders
      }).then((response) => {
        if (!response.ok) {
          let myError = new Error(response.status + ' ' + response.statusText)
          this.errorList.push(myError)
          throw myError
        }

        this.success = true
        return response.ok
      })
    }
  }
}
</script>

<style>
#reservation-form {

}

.success {
  color: green;
}
</style>
