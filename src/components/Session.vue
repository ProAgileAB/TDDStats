<template>
  <div class="page" v-on:click="nextState">
    <h1>In session</h1>
    <p class="STATE BLUE" v-bind:class="{ ACTIVE: state==='BLUE' }">
      Add a test
    </p>
    <p class="STATE RED" v-bind:class="{ ACTIVE: state==='RED' }">
      Make it pass
    </p>
    <p class="STATE GREEN" v-bind:class="{ ACTIVE: state==='GREEN' }">
      Refactor
    </p>
    <p>Current state: {{ state }}</p>
    <button :disabled="state !== 'BLUE'" class="button" v-on:click="$emit('end-session')">End session</button>
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
.BLUE {
  background-color: lightblue;
  border-width: 2px;
}
.RED {
  background-color: lightcoral;
}
.GREEN {
  background-color: lightgreen;
}
.ACTIVE {
  font-size: xx-large;
  height: 18vh;
}
.STATE {
  line-height: 10vh;
  width: 80%;
  margin: 0 auto;
  alignment: center;
  text-align: center;
  vertical-align: center;
  height: 10vh;
}
</style>
