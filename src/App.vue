<template>
  <div id="app" class="app">
    <auth-layout v-if="isAuth"></auth-layout>
    <layout v-else></layout>
  </div>
</template>

<script>
import Layout from 'components/layout/Layout'
import AuthLayout from './components/layout/AuthLayout'
import VuesticPreLoader from './components/vuestic-components/vuestic-preloader/VuesticPreLoader.vue'

export default {
  name: 'app',
  components: {
    VuesticPreLoader,
    AuthLayout,
    Layout
  },
  computed: {
    isAuth () {
      return this.$route.path.match('auth')
    }
  },
  created () {
    let dir = 'https://api.myjson.com/bins/1ez1v9'
    fetch(dir).then(function (data) { return data.json() }).then(response => console.log(response[0].nazwa))
  }
}
</script>

<style lang="scss">
@import "sass/main";
body {
  height: 100%;
  .app {
    height: 100%;
  }
}
</style>
