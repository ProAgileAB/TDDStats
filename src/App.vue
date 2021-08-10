<template>
  <div id="app">
    <Pages msg="TDD Statistics"/>
  </div>
</template>

<script>
import Pages from './components/Pages.vue'

export default {
  name: 'App',
  components: {
    Pages
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
