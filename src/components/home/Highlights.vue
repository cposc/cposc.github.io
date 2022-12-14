<script setup>
import HighlightItem from "./HighlightItem.vue";
</script>

<template>
  <div class="gradientContainer"></div>
  <div class="highlightsSection">
    <h1>Are you ready to support learning and networking in your community?</h1>
    <p>There are CPOSC sponsorship opportunities at all levels! <a href="mailto:sponsor@localareanetworks.org?subject=Sponsorship Lead: I'd like more info!" target="_blank">Contact us</a> for a prospectus and more information on how you can help this event benefit everyone from high school and college students to professionals with decades of experience.</p>
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
p {
  margin-top: 0;
  max-width: 1000px;
  text-align: center;
  padding: 0 1rem 3rem 1rem;

  a {
    color: #848699;
    transition: color 0.25s;

    &:hover {
      color: white;
    }
  }

  @media screen and (max-width: 850px) {
    padding: 0 2rem;
    margin-bottom: 3rem;
  }
}

h1 {
  text-align: center;
  padding: 0 1rem;
}

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

    @media screen and (max-width: 850px) {
      flex-direction: column;
    }
  }
}

.gradientContainer {
  position: absolute;
  height: 150px; /* For browsers that do not support gradients */
  width: 100%;
  background-image: linear-gradient(to top, transparent , black);
}
</style>
