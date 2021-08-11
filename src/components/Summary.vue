<template>
  <div class="page">
    <div class="section">
      <h1>Session summary</h1>
      <p>Total time: {{ summary.totalTime }} s</p>
      <p>Adding tests (BLUE): {{ summary.percentBlue }}% of time ({{ summary.timeInBlue }} s)</p>
      <p>Making them pass (RED): {{ summary.percentRed }}% of time ({{ summary.timeInRed }} s)</p>
      <p>Refactoring (GREEN): {{ summary.percentGreen }}% of time ({{ summary.timeInGreen }} s)</p>
    </div>
    <button class="button" v-on:click="$emit('exit-session')">
      Exit session
    </button>
  </div>
</template>

<script>
import Timelog from '@/Timelog.js'

export default {
  name: "Summary",
  data: function() {
    return {
      summary: Timelog.summaryFromTimelog(this.session.timeStampsMs)
    }
  },
  props: {
    session: Object
  }
};
</script>
