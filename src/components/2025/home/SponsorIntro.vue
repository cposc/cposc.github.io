<script setup>
// import HighlightItem from "./HighlightItem.vue";
// import SponsorItem from "./SponsorItem.vue";
// import GradientContainer from "../GradientContainer.vue";
</script>

<template>
  <!-- <div class="gradientContainer"></div> -->
  <div
    class="highlightWrapper"
    data-aos="fade-right"
    data-aos-duration="5000"
    data-aos-easing="ease-in-out"
  >
    <div class="highlightsSection">
      <h1>SPONSOR</h1>

      <!-- NOTE: Pre-Sponsors -->
      <p>
        <b>
          Are you ready to support learning and networking in your community?
        </b>
      </p>
      <p>
        It's not too late! There are CPOSC sponsorship opportunities at all levels.
        <a href="/sponsors">Check out our prospectus</a>, which includes information on how you can help this event
        benefit everyone from high school and college students to professionals
        with decades of experience.
      </p>
      <div class="sponsor">
        <RouterLink to="/2025/sponsors">Learn More About Sponsoring</RouterLink>
      </div>
      <!-- <div class="highlightsWrapper">
        <HighlightItem v-for="link of quickLinks"
          :title=link.title
          :content=link.content
          :icon=link.icon
        />
      </div> -->

      <!-- NOTE: Post-Sponsors -->
      <!-- <h1>CPOSC Sponsors, 2024</h1>
      <p>Thank you to our 2024 Sponsors for their support in community learning and networking! <a href="mailto:sponsor@localareanetworks.org?subject=Sponsorship Lead: I'd like more info for 2025!" target="_blank">Contact us</a> for information on how you can be involved next year.</p>
      <div class="sponsorsWrapper">
        <div class="sponsorSection">
          <SponsorItem v-for="sponsor of sponsors"
            :name=sponsor.name
            :tier=sponsor.tier
          />
        </div> -->
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
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
// import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  components: {
    // Carousel,
    // Slide,
    // Pagination,
    // Navigation,
  },
  data() {
    return {
      quickLinks: [
        {
          title: "Promote",
          content: "Your company, products, and brand to a targeted audience.",
          icon: "fa-solid fa-bullhorn",
        },
        {
          title: "Demonstrate",
          content: "Your company's dedication to promoting innovation and diversity in tech.",
          icon: "fa-solid fa-code-branch",
        },
        {
          title: "Meet",
          content: "Motivated and talented developers for possible recruitment.",
          icon: "fa-solid fa-person-rays",
        },
        {
          title: "Help",
          content: "Develop your local community of technologists.",
          icon: "fa-solid fa-handshake-angle",
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
        { name: "Sharp Innovation", tier: "five" },
      ],
    };
  },
};
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

.sponsor {
  background-color: #37bfea;
  padding: 1rem 2rem;
  width: fit-content;
  border-radius: 30px;

  font-family: "Poppins", sans-serif;
  color: #1F1F1F;
  font-weight: 600;
}

a {
  text-decoration: none;
  color: #1F1F1F;
}

p {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
}

h1 {
  // padding: 0 1rem;
  font-size: 20px;
  font-family: "Bebas Neue", sans-serif;
  font-size: 40px;
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
  width: 100%;
  color: #1F1F1F;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4rem 0 6rem 0;
  max-width: 887px;

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

  .sponsorSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
  }
}

.gradientContainer {
  position: absolute;
  height: 150px; /* For browsers that do not support gradients */
  width: 100%;
  background-image: linear-gradient(to top, transparent , black);
}
</style>
