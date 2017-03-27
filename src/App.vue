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
      <router-view class="large-8 medium-8 columns"></router-view>
      <div class="large-4 medium-4 columns">
          <div class="panel">
              <h5>Welcome Back!</h5>

              <a href="/logout" class="small button">Logout</a>
          </div>
          <div class="panel">
              <h5>There is so much more!</h5>

              <p>This is but one example with Vue, there is so much more possible!</p>
              <a href="https://vuejs.org" class="small button">Go to Backbone.js Docs</a>
          </div>
      </div>
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
