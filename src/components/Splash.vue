<template>
  <div class="page">
    <div class="section">
      <h1 class="page_title">TDD Stats app</h1>
      <p class="infotext">
        Keep track of what TDD state you are in!
      </p>
      <p class="infotext">The TDD mindsets</p>
      <ul>
        <li>
          🦊 In blue state, the fox says "You are not done yet, add another test!"
        </li>
        <li>
          🐇 In red state, the rabbit says "Quickly, make it pass!"
        </li>
        <li>
          🐈 In green state, the cat says "Enjoy life - refactor!"
        </li>

      </ul>
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

<style>
ul  {
  list-style: none
}
li {
  font-size: x-large;
}
</style>
