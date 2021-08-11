<template>
  <div class="page" v-on:click="nextState">
    <h1>TDD session active</h1>
    <p>Current state: {{ state }}</p>
    <button class="button" v-on:click="$emit('end-session')">End session</button>
  </div>
</template>

<script>

const STATES = ['BLUE', 'RED', 'GREEN']

export default {
  name: "Session",
  data: function() {
    return {
      state: STATES[0]
    }
  },
  methods: {
    nextState: function() {
      var currState = STATES.indexOf(this.state)
      var nextState = (currState + 1) % STATES.length
      this.state = STATES[nextState]
    }
  }
}
</script>

<style scoped>
@import './button.css';
@import './page.css';
</style>
