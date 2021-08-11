<template>
  <div class="pages_background">
    <Splash v-if="page === 'SPLASH'" @start-session="nextPage"/>
    <Session v-if="page === 'SESSION'" @end-session="nextPage"/>
    <Summary v-if="page === 'SUMMARY'" @exit-session="nextPage"/>
  </div>
</template>

<script>

import Splash from './Splash.vue'
import Session from './Session.vue'
import Summary from './Summary.vue'

const FLOW = ['SPLASH', 'SESSION', 'SUMMARY']

export default {
  name: 'Pages',
  components: {
    Splash, Session, Summary
  },
  data: function () {
    return {
      page: 'SPLASH',
    }
  },
  methods: {
    nextPage: function () {
      var currIndex = FLOW.indexOf(this.page)
      var newIndex = (currIndex + 1) % FLOW.length
      this.page = FLOW[newIndex]
    }
  }
}
</script>

<style scoped>
.pages_background {
  background-color: aliceblue;
  border-color: black;
  border-style: solid;
  border-width: 1px;
  height: 80vh;
  padding: 10px;
}
</style>
