<script setup>
import HighlightItem from "./HighlightItem.vue";
import SponsorItem from "./SponsorItem.vue";
import GradientContainer from "../GradientContainer.vue";
</script>

<template>
  <!-- <div class="gradientContainer"></div> -->
  <div class="highlightWrapper">
    <div class="highlightsSection">
      <h1>SPONSOR</h1>
      <div class="line"></div>
      <!-- NOTE: Pre-Sponsors -->
      <!-- <p><b>Are you ready to support learning and networking in your community?</b></p> -->
      <!-- <p>There are CPOSC sponsorship opportunities at all levels! <a href="mailto:sponsor@localareanetworks.org?subject=Sponsorship Lead: I'd like more info!" target="_blank">Contact us</a> for a prospectus and more information on how you can help this event benefit everyone from high school and college students to professionals with decades of experience.</p> -->
      <!-- <div class="highlightsWrapper">
        <HighlightItem v-for="link of quickLinks"
          :title=link.title
          :content=link.content
          :icon=link.icon
        />
      </div> -->

      <!-- NOTE: Post-Sponsors -->
      <h1>CPOSC Sponsors, 2024</h1>
      <p>Thank you to our 2024 Sponsors for their support in community learning and networking! <a href="mailto:sponsor@localareanetworks.org?subject=Sponsorship Lead: I'd like more info for 2025!" target="_blank">Contact us</a> for information on how you can be involved next year.</p>
      <div class="sponsorsWrapper">
        <div class="sponsorSection">
          <SponsorItem v-for="sponsor of sponsors"
            :name=sponsor.name
            :tier=sponsor.tier
          />
        </div>
        <!-- <div class="sponsorSection">
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
        </div> -->
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
        { name: "WebstaurantStore", tier: "one" },
        { name: "Harbor Compliance", tier: "two" },
        { name: "Listrak", tier: "two" },
        { name: "Mind Development & Design", tier: "two" },
        { name: "Seisan", tier: "two" },
        { name: "Elastic", tier: "three" },
        { name: "Cargas", tier: "four" },
        { name: "Aha Labs", tier: "five" },
        { name: "HUG", tier: "five" },
        { name: "JFC Global", tier: "five" },
        { name: "Boyd Technical Solutions", tier: "five" },
        { name: "Make 717", tier: "five" },
        { name: "Sharp Innovation", tier: "five" }
        // { name: "Tom Swartz", tier: "five" }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin-top: 0;
  max-width: 1000px;
  // text-align: center;
  // padding: 0 1rem 3rem 1rem;

  a {
    color: #BA273B;
    transition: color 0.25s;

    &:hover {
      color: #C09D26;
    }
  }

  @media screen and (max-width: 950px) {
    padding: 0 2rem;
    margin-bottom: 3rem;
  }
}

h1 {
  // padding: 0 1rem;
  font-size: 20px;
}

.highlightWrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.line {
  background-color: #C09D26;
  height: 5px;
  width: 80px;
  margin-bottom: 1rem;
}

.highlightsSection {
  background-color: white;
  width: 100%;
  color: #1F1F1F;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 4rem 0 6rem 0;
  max-width: 887px;

  @media screen and (max-width: 950px) {
    align-items: center;
  }

  p {
    @media screen and (max-width: 950px) {
      text-align: center;
    }
  }

  .highlightsWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1rem;

    @media screen and (max-width: 950px) {
      flex-direction: column;
      margin-top: 0;

      div {
        margin-bottom: 1.5rem;
      }
    }
  }
}

.sponsorsWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 10rem;

  // @media screen and (max-width: 663px) {
  //   width: 100%;
  //   padding: 2rem 0;
  //   box-shadow: 0 0 50px 50px rgba(117, 117, 117, 0.5);
  //   margin-top: 2rem;
  // }

  .sponsorSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    // padding: 1rem 3rem;
    // margin-bottom: 1rem;
    width: 100%;
    flex-wrap: wrap;
    // max-width: 800px;

    // @media screen and (max-width: 663px) {
    //   max-width: 100%;
    //   flex-direction: column;
    //   padding: 0;
    // } 
  }
}

.gradientContainer {
  position: absolute;
  height: 150px; /* For browsers that do not support gradients */
  width: 100%;
  background-image: linear-gradient(to top, transparent , black);
}
</style>
