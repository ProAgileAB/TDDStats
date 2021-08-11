<template>
  <div class="page">
    <div class="section">
      {{ summary }}
      {{ session }}
      <h1>Session summary</h1>
      <p>Total time: {{ summary.totalTime }} s</p>
      <p>Adding tests (BLUE): 33% of time (66 s)</p>
      <p>Making them pass (RED): 50% of time (100 s)</p>
      <p>Refactoring (GREEN): 17% of time (34 s)</p>
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
