<script setup>
import HighlightItem from "./HighlightItem.vue";
import SponsorItem from "./SponsorItem.vue";
import GradientContainer from "../GradientContainer.vue";
</script>

<template>
  <div class="gradientContainer"></div>
  <div class="highlightsSection">
    <!-- <h1>Are you ready to support learning and networking in your community?</h1> -->
    <h1>CPOSC Sponsors, 2023</h1>
    <!-- <p>There are CPOSC sponsorship opportunities at all levels! <a href="mailto:sponsor@localareanetworks.org?subject=Sponsorship Lead: I'd like more info!" target="_blank">Contact us</a> for a prospectus and more information on how you can help this event benefit everyone from high school and college students to professionals with decades of experience.</p> -->
    <p>Thank you to our 2023 Sponsors for their support in community learning and networking! <a href="mailto:sponsor@localareanetworks.org?subject=Sponsorship Lead: I'd like more info for 2024!" target="_blank">Contact us</a> for information on how you can be involved next year.</p>
    <!-- <div class="highlightsWrapper"> -->
      <!-- <HighlightItem v-for="link of quickLinks"
        :title=link.title
        :content=link.content
        :icon=link.icon
      /> -->
    <!-- </div> -->
    <div class="sponsorsWrapper">
      <div class="sponsorSection" style="flex-direction: column">
        <SponsorItem v-for="sponsor of sponsors.slice(0, 2)"
          :name=sponsor.name
          :tier=sponsor.tier
        />
      </div>
      <div class="sponsorSection">
        <SponsorItem v-for="sponsor of sponsors.slice(2, 4)"
          :name=sponsor.name
          :tier=sponsor.tier
        />
      </div>
      <div class="sponsorSection">
        <SponsorItem v-for="sponsor of sponsors.slice(4, 7)"
          :name=sponsor.name
          :tier=sponsor.tier
        />
      </div>
      <div class="sponsorSection">
        <SponsorItem v-for="sponsor of sponsors.slice(7, 12)"
          :name=sponsor.name
          :tier=sponsor.tier
        />
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
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
      ],
      sponsors: [
        { name: "Seisan", tier: "one" },
        { name: "WebstaurantStore", tier: "one" },
        { name: "Elastic", tier: "two" },
        { name: "Listrak", tier: "two" },
        { name: "Cargas", tier: "three" },
        { name: "Mind Development & Design", tier: "three" },
        { name: "Industrial Resolution", tier: "three" },
        { name: "Boyd Technical Solutions", tier: "four" },
        { name: "JFC Global", tier: "four" },
        { name: "Crunchy Data", tier: "four" },
        { name: "HUG", tier: "four" },
        { name: "Quub", tier: "four" },
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

  .sponsorsWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(117, 117, 117, 0.5);
    box-shadow: 0 0 30px 20px rgba(117, 117, 117, 0.5);
    border-radius: 10px;

    @media screen and (max-width: 663px) {
      width: 100%;
      padding: 2rem 0;
      box-shadow: 0 0 50px 50px rgba(117, 117, 117, 0.5);
      margin-top: 2rem;
    }

    .sponsorSection {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding: 1rem 3rem;
      margin-bottom: 1rem;
      width: 100%;
      max-width: 800px;

      @media screen and (max-width: 663px) {
        max-width: 100%;
        flex-direction: column;
        padding: 0;
      } 
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
