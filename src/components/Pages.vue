<template>
  <div class="pages_background">
    <Splash v-if="page === 'SPLASH'" @start-session="nextPage" />
    <Session v-if="page === 'SESSION'" @end-session="sessionEnded" />
    <Summary v-if="page === 'SUMMARY'" @exit-session="nextPage" v-bind:session='session' />
  </div>
</template>

<script>
import Splash from "./Splash.vue";
import Session from "./Session.vue";
import Summary from "./Summary.vue";

const FLOW = ["SPLASH", "SESSION", "SUMMARY"];

export default {
  name: "Pages",
  components: {
    Splash,
    Session,
    Summary
  },
  data: function() {
    return {
      page: "SPLASH",
      session: null
    };
  },
  methods: {
    nextPage: function() {
      var currIndex = FLOW.indexOf(this.page);
      var newIndex = (currIndex + 1) % FLOW.length;
      this.page = FLOW[newIndex];
    },
    sessionEnded: function(session) {
      this.session = session
      this.nextPage()
    }
  }
};
</script>

<style>

.pages_background {
  background-color: aliceblue;
  border-color: black;
  border-style: solid;
  border-width: 1px;
  min-height: 94vh;
  padding: 10px;
}

.button {
  font-size: 1.6rem;
  height: 5rem;
  border: 1px solid #000;
  border-radius: 20px;
  box-shadow: 4px 2px 2px #ccc;
  background-color: #09cdda;
}

.page {
  height: 100%;
}

.section {
  height: 80%;
}

.page_title {
  font-size: xxx-large;
}

.infotext {
  font-size: xx-large;
}

</style>
