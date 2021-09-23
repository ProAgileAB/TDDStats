<template>
  <div class="page" v-on:click="nextState">
    <div class="section">
      <h1 class="page_title">In session</h1>
      <p class="state blue" v-bind:class="{ 'active activeblue': state === 'BLUE' }">
        🦊 Add a test
      </p>
      <p class="state red" v-bind:class="{ 'active activered': state === 'RED' }">
        🐇 Make it pass
      </p>
      <p class="state green" v-bind:class="{ 'active activegreen': state === 'GREEN' }">
        🐈 Refactor
      </p>
      <p>Tap anywhere switch state</p>
      <p>Number of cycles: {{ noCycles }}</p>
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
.state {
  line-height: 11vh;
  height: 11vh;
  border-radius: 40px;
  width: 80%;
  margin: auto;
}
.active {
  font-size: xx-large;
}
.blue {
  background-color: lightblue;
}
.red {
  background-color: lightcoral;
}
.green {
  background-color: lightgreen;
}
.activeblue {
  border: 5px solid darkblue;
}
.activered {
  border: 5px solid darkred;
}
.activegreen {
  border: 5px solid darkgreen;
}
</style>
