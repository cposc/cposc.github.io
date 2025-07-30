<script setup>
import { RouterView } from "vue-router";
import AnnouncementBanner from "./AnnouncementBanner/AnnouncementBanner.vue";
import BottomNav from "./Nav/BottomNav.vue";
</script>

<template>
  <!-- <AnnouncementBanner :announcementType="'speakers'" /> -->
  <!-- <AnnouncementBanner :announcementType="'schedule'" /> -->
  <AnnouncementBanner :announcementType="'sponsors'" />
  <RouterView />
  <BottomNav />
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
h3 {
  font-family: "Cal Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
}
h4,
p,
a {
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
a {
  cursor: pointer;
}
</style>
