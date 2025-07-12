<script setup>
import { RouterView } from "vue-router";
import SiteContainer2026 from "./2026/sitecontainer/SiteContainer2026.vue";

import TopNav2025 from "./components/2025/TopNav.vue";
import Bottom2025 from "./components/2025/Bottom.vue";

import TopNav2024 from "./components/2024/TopNav.vue";
import Bottom2024 from "./components/2024/Bottom.vue";

import TopNav2023 from "./components/2023/TopNav.vue";
import Tickets from "./components/2023/Tickets.vue";
import Bottom2023 from "./components/2023/Bottom.vue";
</script>

<template>
  <template v-if="['2023', 'schedule2023', 'volunteers2023', 'speakers2023', 'logistics2023'].includes($route.name)">
    <TopNav2023 />
    <RouterView />
    <Bottom2023 :showLine="$route.name === '2023'" />
  </template>
  <template v-if="['2024', 'schedule2024', 'volunteers2024', 'speakers2024', 'logistics2024'].includes($route.name)">
    <TopNav2024 />
    <Tickets />
    <RouterView />
    <Bottom2024 :showLine="$route.name === '2024'" />
  </template>
  <template v-if="['2025', 'schedule2025', 'volunteers2025', 'speakers2025', 'logistics2025'].includes($route.name)">
    <TopNav2025 />
    <RouterView />
    <Bottom2025 :showLine="$route.name === 'home'" />
  </template>
  <template v-else>
    <SiteContainer2026 />
  </template>
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
@font-face {
  font-family: "Alarm Clock";
  src: url("./assets/2025/alarm_clock.ttf");
}
body {
  width: 100vw;
  overflow-x: hidden;
  overflow-y: scroll;
}
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

  .btn2025 {
    cursor: pointer;
    background-color: #37bfea;
    padding: 1rem 2rem;
    width: fit-content;
    border-radius: 30px;
    text-align: center;

    font-family: "Poppins", sans-serif;
    color: #1F1F1F;
    font-weight: 600;
	}
}
</style>
