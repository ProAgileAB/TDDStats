<template>
  <div class="pages_background">
    <p>{{ state }}</p>
    <Splash v-if="inSplash" @start-session="nextState"/>
    <Session v-if="inSession" @end-session="nextState"/>
    <!--  <Result v-if="state === RESULT"/>-->
  </div>
</template>

<script>

import Splash from './Splash.vue'
import Session from './Session.vue'

const SPLASH = 'SPLASH'
const SESSION = 'SESSION'
const RESULT = 'RESULT'
const STATE_ORDER = [SPLASH, SESSION, RESULT]

export default {
  name: 'Pages',
  components: {
    Splash, Session
  },
  data: function () {
    return {
      state: SPLASH,
    }
  },
  computed: {
    inSplash: function() {
      return this.state === SPLASH
    },
    inSession: function() {
      return this.state === SESSION
    }
  },
  methods: {
    nextState: function () {
      var currIndex = STATE_ORDER.indexOf(this.state)
      var newIndex = (currIndex + 1) % STATE_ORDER.length
      this.state = STATE_ORDER[newIndex]
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
  padding: 10px;
}
</style>
