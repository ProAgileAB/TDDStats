<template>
  <div class="pages_background">
    <Splash v-if="state === 'SPLASH'" @start-session="nextState"/>
    <Session v-if="state === 'SESSION'" @end-session="nextState"/>
    <Summary v-if="state === 'SUMMARY'" @exit-session="nextState"/>
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
      state: 'SPLASH',
    }
  },
  methods: {
    nextState: function () {
      var currIndex = FLOW.indexOf(this.state)
      var newIndex = (currIndex + 1) % FLOW.length
      this.state = FLOW[newIndex]
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
