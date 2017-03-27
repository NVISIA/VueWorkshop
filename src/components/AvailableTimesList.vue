<template>
  <form>
      <fieldset>
          <legend>Available Times</legend>

          <div class="row">
              <div class="large-3 medium-4 small-6 columns availableTime" :value="availableTime" v-for="availableTime in availableTimes">
                  {{ showTime(availableTime) }}
              </div>
          </div>
      </fieldset>
  </form>
</template>

<script>
import showTime from '../showTime.js'

export default {
  name: 'available-times-list',
  data () {
    return {
      showTime: showTime
    }
  },
  props: [
    'availableTimes'
  ]
}
</script>

<style>
#available-times-list {

}
</style>
