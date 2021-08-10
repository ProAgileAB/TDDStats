<template>
  <div class="summary_background">
    <h1>Session summary</h1>
    <p>Total time: 200 s</p>
    <p>Adding tests (BLUE): 33% of time (66 s)</p>
    <p>Making them pass (RED): 50% of time (100 s)</p>
    <p>Refactoring (GREEN): 17% of time (34 s)</p>
    <button v-on:click="$emit('exit-session')">Exit session</button>
  </div>
</template>

<script>
export default {
  name: "Summary",
}
</script>

<style scoped>
.summary_background {
  background-color: deepskyblue;
  padding: 10px;
}
</style>
