<script setup>
import { RouterLink, RouterView } from "vue-router";
import TopNav from "./components/TopNav.vue";
import Tickets from "./components/Tickets.vue";
import Bottom from "./components/Bottom.vue";
</script>

<template>
  <TopNav />
  <Tickets />
  <RouterView />
  <Bottom :showLine="$route.name === 'home'"/>
</template>

<script>

export default {
  components: {},
  data() {
    return {}
  },
  methods: {}
}
</script>


<style lang="scss">
.pageContainer {
  background-color: black;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;

  h1 {
    margin: 1rem 0;
    color: white;
  }

  h3 {
    color: white;
    font-family: var(--lato-regular);
    margin-top: 2rem;
  }

  h4 {
    font-size: 12px;
    letter-spacing: 3px;
  }

  .line {
    background-color: #2b3480;
    height: 5px;
    width: 80px;
  }

  .pageContent {
    max-width: 800px;

    p {
      color: #70706f;
      text-align: center;
    }

    .focusBlock {
      display: flex;
      flex-direction: row;
      align-items: flex-start;

      background-color: rgba(31,31,31,0.5);
      color: white;
      padding: 1rem 2rem;
      border-radius: 10px;
      margin-bottom: 1rem;
      margin-bottom: 2rem;

      li {
        margin-bottom: 8px;
        font-family: var(--open-regular);
      }
    }

    @media screen and (max-width: 800px) {
      padding: 0 2rem;
    }
  }
}
</style>
