<template>
  <div>
    <h1>Current state:</h1>
    <p>{{ state }}</p>
    <!--  <Session v-if="state === SESSION"/>-->
    <!--  <Result v-if="state === RESULT"/>-->
    <!--  <Splash v-if="state === SPLASH"/>-->
  </div>
</template>

<script>
const SPLASH = "SPLASH"
// const SESSION = "SESSION"
// const RESULT = "RESULT"

export default {
  name: 'Pages',
  data: function() {
    return {
      state: SPLASH
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
