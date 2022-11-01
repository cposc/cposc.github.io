<script setup>
import HighlightItem from "./HighlightItem.vue";
</script>

<template>
  <div class="gradientContainer"></div>
  <div class="highlightsSection">
    <div class="highlightsWrapper">
      <HighlightItem v-for="link of quickLinks"
        :title=link.title
        :content=link.content
        :icon=link.icon
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quickLinks: [
        {
          title: "Promote",
          content: "Your company, products, and brand to a targeted audience.",
          icon: "fa-solid fa-bullhorn"
        },
        {
          title: "Demonstrate",
          content: "Your company's dedication to promoting innovation and diversity in tech.",
          icon: "fa-solid fa-code-branch"
        },
        {
          title: "Meet",
          content: "Motivated and talented developers for possible recruitment.",
          icon: "fa-solid fa-person-rays"
        },
        {
          title: "Help",
          content: "Develop your local community of technologists.",
          icon: "fa-solid fa-handshake-angle"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.highlightsSection {
  background-color: #1F1F1F;
  width: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14rem 0 6rem 0;

  .highlightsWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
}

.gradientContainer {
  position: absolute;
  height: 150px; /* For browsers that do not support gradients */
  width: 100%;
  background-image: linear-gradient(to top, transparent , black);
}
</style>
