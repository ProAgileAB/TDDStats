<template>
  <div class="session_background">
    <h1>TDD session active</h1>
    <p>Current state: BLUE</p>
    <button v-on:click="$emit('end-session')">End session</button>
  </div>
</template>

<script>
export default {
  name: "Session",
}
</script>

<style scoped>
.session_background {
  background-color: rosybrown;
  padding: 10px;
}
</style>
