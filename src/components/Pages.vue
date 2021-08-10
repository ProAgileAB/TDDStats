<template>
  <div class="pages_background" v-on:click="nextState">
    <h1>Current state:</h1>
    <p>{{ state }}</p>
    <!--  <Session v-if="state === SESSION"/>-->
    <!--  <Result v-if="state === RESULT"/>-->
    <!--  <Splash v-if="state === SPLASH"/>-->
  </div>
</template>

<script>
const SPLASH = "SPLASH"
const SESSION = "SESSION"
const RESULT = "RESULT"
const STATE_ORDER = [SPLASH, SESSION, RESULT]

export default {
  name: "Pages",
  data: function () {
    return {
      state: SPLASH
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
}
</style>
