<template>
  <div class="page" v-on:click="nextState">
    <div class="section">
      <h1 class="page_title">In session</h1>
      <p class="state blue" v-bind:class="{ active: state === 'BLUE' }">
        🦊 Add a test
      </p>
      <p class="state red" v-bind:class="{ active: state === 'RED' }">
        🐇 Make it pass
      </p>
      <p class="state green" v-bind:class="{ active: state === 'GREEN' }">
        🐈 Refactor
      </p>
      <p class="infotext">Tap anywhere switch state</p>
      <p class="infotext">Number of cycles: {{ noCycles }}</p>
    </div>
    <button
      :disabled="state !== 'BLUE'"
      class="button"
      v-on:click="endSession"
    >
      End session
    </button>
  </div>
</template>

<script>
const STATES = ["BLUE", "RED", "GREEN"];

export default {
  name: "Session",
  data: function() {
    return {
      state: STATES[0],
      timeStampsMs: [Date.now()],
      noCycles: 0
    };
  },
  methods: {
    nextState: function() {
      var currState = STATES.indexOf(this.state);
      var nextState = (currState + 1) % STATES.length;
      this.state = STATES[nextState];
      this.timeStampsMs.push(Date.now())
      if (nextState === 0) {
        this.noCycles++;
      }
    },
    endSession: function() {
      this.$emit('end-session', {
        timeStampsMs: this.timeStampsMs
      })
    }
  }
};
</script>

<style scoped>
.blue {
  background-color: lightblue;
  border-width: 2px;
}
.red {
  background-color: lightcoral;
}
.green {
  background-color: lightgreen;
}
.state {
  border: 0.5vw solid black;
  transition: 0.1s;
  line-height: 15vh;
  height: 15vh;
  border-radius: 20px;
  width: 80%;
  margin: auto;
  padding: 2vh;
  font-size: 2vh;
}
.active {
  font-size: 3.5vh;
  border: 0.5vw solid yellow;
}
</style>
