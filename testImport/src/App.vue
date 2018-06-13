<template>
  <div id="app">
    <import-test-widget></import-test-widget>
    <vue-test-widget></vue-test-widget>
  </div>
</template>

<script>
import {importTestWidget} from 'test-widget'
// import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'App',
  components: {
    importTestWidget
    // vueTesTwidget, swiper, swiperSlide
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
