<template>
  <div class="page">
    <div class="section">
      <h1>TDD Stats app</h1>
      <p>Starttime: {{ Date.now() }}</p>
      <p>
        Keep track of what TDD state you are in, and see how much time you spend
        in each!
      </p>
    </div>
    <button class="button" v-on:click="$emit('start-session')">
      Start session
    </button>
  </div>
</template>

<script>
export default {
  name: "Splash"
};
</script>
