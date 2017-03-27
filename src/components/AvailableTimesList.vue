<template>
  <form>
      <fieldset>
          <legend>Available Times</legend>

          <div class="row">
              <div class="large-3 medium-4 small-6 columns availableTime" :value="availableTime" v-for="availableTime in availableTimes">
                  {{availableTime | showTime}}
              </div>
          </div>
      </fieldset>
  </form>
</template>

<script>
export default {
  name: 'available-times-list',
  props: [
    'availableTimes'
  ],
  filters: {
    showTime: function (value) {
      if (!value) {
        return null
      }

      let time = new Date(value)
      let hours = parseInt(time.getHours())
      let minutes = time.getMinutes().toString()
      let ampm = 'AM'

      if (hours > 12) {
        ampm = 'PM'
        hours -= 12
      }

      if (minutes.length < 2) {
        minutes = '0' + minutes
      }

      return hours + ':' + minutes + ' ' + ampm
    }
  }
}
</script>

<style>
</style>
