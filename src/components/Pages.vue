<template>
  <div class="pages_background">
    <p>{{ state }}</p>
    <!--  <Session v-if="state === SESSION"/>-->
    <!--  <Result v-if="state === RESULT"/>-->
    <Splash v-if="inSplash" @start-session="nextState"/>
  </div>
</template>

<script>

import Splash from './Splash.vue'

const SPLASH = 'SPLASH'
const SESSION = 'SESSION'
const RESULT = 'RESULT'
const STATE_ORDER = [SPLASH, SESSION, RESULT]

export default {
  name: 'Pages',
  components: {
    Splash
  },
  data: function () {
    return {
      state: SPLASH,
    }
  },
  computed: {
    inSplash: function() {
      return this.state === SPLASH
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
