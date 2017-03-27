<template>
  <div class="row">
      <div class="large-12 columns">
          <div class="panel">
              <form>
                  <div class="row">
                      <div class="large-6 columns">
                          <h5><label>Selected Time:</label>{{ showTime(time) }}</h5>
                      </div>
                      <div class="large-6 columns">
                          <label>Number of Guests</label>
                          <input type="number" v-model="guests" placeholder="#"
                            min="1" inputmode="numeric" required />
                      </div>
                  </div>

                  <div class="row">
                      <div class="large-12 columns">
                          <label>Name:</label>
                          <input type="text" v-model="name"
                            placeholder="Enter your full name"
                            minlength="1" autocapitalize="words"
                            autocomplete="name" inputmode="verbatim" required />
                      </div>
                  </div>
                  <div class="row">
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
                  <div class="row">
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
                  <div class="row">
                      <div class="large-12 columns">
                          <label>Special Requests:</label>
                          <textarea name="specialRequests" placeholder="Enter any special requests here."></textarea>
                      </div>
                  </div>
                  <div class="row">
                      <div class="small-12 medium-12 large-12 small-centered columns">
                          <button class="small radius button submitButton">Make Reservation</button>
                          <button class="small radius secondary button cancelButton">Cancel</button>
                      </div>
                  </div>
              </form>
              <div class="error-box">
                  <ul class="error-list"></ul>
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
      showTime: showTime
    }
  },
  props: [
    'time'
  ]
}
</script>

<style>
#reservation-form {

}
</style>
