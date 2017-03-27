<template>
  <div id="app">
    <div class="row">
        <div class="large-12 columns">
            <div style="display: inline-block;">
                <img src="static/icon_01.png" width="90px;"/>
            </div>
            <div style="display: inline-block;">
                <h1 class="title-main">Easy Reservations</h1>

                <p class="title-sub">Simply choose a restaurant, a time, and submit your reservation!</p>
            </div>
        </div>
    </div>
    <div class="row">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {

}
</style>
