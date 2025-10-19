<template>
  <!-- <div class="gradientContainer"></div> -->
  <div class="whatAbout">
    <div class="featuredThings">
      <div class="featuredWrapper">
        <i class="fa-solid fa-location-dot"></i>
        <div class="featuredContent">
          <span>Ware Center</span>
          <span>Lancaster, PA</span>
        </div>
      </div>
      <div class="featuredWrapper">
        <i class="fa-solid fa-users"></i>
        <div class="featuredContent">
          <span>Sponsor</span>
          <span>Make the magic happen.</span>
        </div>
      </div>
      <div class="featuredWrapper">
        <i class="fa-solid fa-microphone"></i>
        <div class="featuredContent">
          <span>20+ Speakers</span>
          <span>Students & professionals!</span>
        </div>
      </div>
      <div class="featuredWrapper">
        <i class="fa-solid fa-mug-saucer"></i>
        <div class="featuredContent">
          <span>Cool Shirts & Hot Coffee</span>
          <span>Because we know why you're really here.</span>
        </div>
      </div>
    </div>
    <div class="aboutWrapper">
      <div class="aboutContent">
        <!-- <h4>ABOUT</h4> -->
        <h1>ABOUT CPOSC</h1>
        <div class="line"></div>
        <p>A Lancaster staple since its maiden voyage in 2008, the Central Pennsylvania Open Source Conference is a one-day event that strives to foster all aspects of the regional tech community, while also supporting <b>The Next Generation</b> of tech.</p>
        <a target="_blank" href="https://www.eventbrite.com/e/the-fourteenth-annual-central-pa-open-source-conference-tickets-803539687837">
          <a href="/2024/schedule"><div class="register">See Schedule</div></a>
        </a>
      </div>
      <div class="homeCarousel">
        <carousel :items-to-show="2.5" :wrap-around="true" :autoplay="5000">
          <!-- <slide v-for="slide in 10" :key="slide">
            {{ slide }}
          </slide> -->
          <slide key="1" :slide-width="slideWidth">
            <div class="aboutImage">
              <img
                alt="CPOSC Audience 2019"
                src="@/assets/2023/CPOSC_2019.jpg"
              />
            </div>
          </slide>
          <slide key="2" :slide-width="slideWidth">
            <div class="aboutImage">
              <img
                alt="CPOSC Audience 2019"
                src="@/assets/2024/PXL_20230401_142131749.MP.jpg"
              />
            </div>
          </slide>
          <slide key="3" :slide-width="slideWidth">
            <div class="aboutImage">
              <img
                alt="CPOSC Audience 2019"
                src="@/assets/2024/PXL_20230401_200622968.MP.jpg"
              />
            </div>
          </slide>
          <slide key="4" :slide-width="slideWidth">
            <div class="aboutImage">
              <img
                alt="CPOSC Audience 2019"
                src="@/assets/2024/PXL_20230401_130228023.jpg"
              />
            </div>
          </slide>
          <slide key="5" :slide-width="slideWidth">
            <div class="aboutImage">
              <img
                alt="CPOSC Audience 2019"
                src="@/assets/2024/IMG_6726.jpg"
              />
            </div>
          </slide>
          <slide key="6" :slide-width="slideWidth">
            <div class="aboutImage">
              <img
                alt="CPOSC Audience 2019"
                src="@/assets/2024/IMG_6743.jpg"
              />
            </div>
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>

      <div class="mobileCarousel">
        <div class="aboutImage">
          <img
            alt="CPOSC Audience 2019"
            src="@/assets/2023/CPOSC_2019.jpg"
          />
        </div>
        <div class="aboutImage">
          <img
            alt="CPOSC Audience 2019"
            src="@/assets/2024/PXL_20230401_142131749.MP.jpg"
          />
        </div>
        <div class="aboutImage">
          <img
            alt="CPOSC Audience 2019"
            src="@/assets/2024/PXL_20230401_200622968.MP.jpg"
          />
        </div>
        <div class="aboutImage">
          <img
            alt="CPOSC Audience 2019"
            src="@/assets/2024/PXL_20230401_130228023.jpg"
          />
        </div>
        <div class="aboutImage">
          <img
            alt="CPOSC Audience 2019"
            src="@/assets/2024/IMG_6726.jpg"
          />
        </div>
        <div class="aboutImage">
          <img
            alt="CPOSC Audience 2019"
            src="@/assets/2024/IMG_6743.jpg"
          />
        </div>
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
      slideWidth: 250
    }
  },
  methods: {
    getImgUrl(pet) {
      var images = require.context('../../../assets/2024/', false, /\.png$/)
      return images('./' + pet + ".jpg")
    }
  }
}
</script>

<style lang="scss" scoped>
// .gradientContainer {
//   position: absolute;
//   margin-top: -150px;
//   height: 150px; /* For browsers that do not support gradients */
//   width: 100%;
//   background-image: linear-gradient(to top, black , transparent);
// }

.featuredThings {
  display: flex;
  flex-direction: row;
  background-color: white;
  padding: 2rem 1rem;
  color: #1F1F1F;
  margin-top: -3rem;
  z-index: 10;
  border-radius: 10px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    border: 3px solid #9e4670;

    .featuredWrapper {
      margin-bottom: 1.5rem !important;
    }
  }

  i {
    margin-right: 0.75rem;
    font-size: 25px;
    color: #186D86;
  }

  .featuredWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 1rem 0 1rem;
  }

  .featuredContent {
    display: flex;
    flex-direction: column;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 15px;

    span:first-of-type {
      font-weight: bold;
      margin-bottom: 4px;
      color: #1F1F1F;
    }

    span:last-of-type {
      color: rgb(123, 123, 123);
      font-size: 12px;
    }
  }
}

.whatAbout {
  background-color: white;
  width: 100%;
  color: #1F1F1F;

  display: flex;
  flex-direction: column;
  align-items: center;

  .aboutWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 887px;

    @media screen and (max-width: 950px) {
      flex-direction: column;
      width: 100%;
    }

    .aboutContent {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 4rem 0;

      @media screen and (max-width: 950px) {
        align-items: center;
      }

      h1 {
        margin: 1rem 0;
        font-size: 20px;

        @media screen and (max-width: 950px) {
          text-align: center;
        }
      }

      h4 {
        font-size: 12px;
        letter-spacing: 3px;

        @media screen and (max-width: 950px) {
          text-align: center;
        }
      }

      .line {
        background-color: #BA273B;
        height: 5px;
        width: 80px;
      }

      p {
        letter-spacing: 1px;
        word-spacing: 1.5px;
        padding: 0 1rem 0 0;

        @media screen and (max-width: 950px) {
          text-align: center;
          padding: 0 2rem;
        }
      }

      a {
        text-decoration: none;
      }

      .register {
        background-color: #BA273B;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 30px;
        margin: 0;
        font-family: var(--open-regular);
        text-transform: uppercase;
        font-weight: 900;
        letter-spacing: 2px;
        font-size: 14px;
      }
    }

    .aboutImages {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }

    .aboutImage {
      margin-left: 2rem;

      @media screen and (max-width: 1000px) {
        margin-left: 1rem;
      }

      @media screen and (max-width: 700px) {
        margin-left: 6px;
      }

      @media screen and (max-width: 511px) {
        margin-left: 0;
        margin-top: 8px;
      }

      img {
        width: 350px;
        height: 250px;
        object-fit: cover;

        @media screen and (max-width: 1000px) {
          width: 300px;
          height: 200px;
        }

        @media screen and (max-width: 700px) {
          width: 250px;
          height: 175px;
        }

        @media screen and (max-width: 511px) {
          width: 100vw;
          height: 350px;
        }

        // @media screen and (max-width: 450px) {
        //   width: 100%;
        // }

        
      }
    }
  }
}

.homeCarousel {
  width: 1000px;

  @media screen and (max-width: 1000px) {
    width: 800px;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
}

.mobileCarousel {
  @media screen and (min-width: 700px) {
    display: none;
  }

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>