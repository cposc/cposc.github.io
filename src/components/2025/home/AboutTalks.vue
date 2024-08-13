<template>
  <!-- <div class="gradientContainer"></div> -->
  <div class="whatAbout">
    <div
      className="aboutContents"
      data-aos="fade-right"
      data-aos-duration="5000"
      data-aos-easing="ease-in-out"
    >
      <div className="colorBlock"></div>
      <img
        alt="CPOSC Audience 2019"
        src="@/assets/2024/PXL_20230401_130228023.jpg"
        className="sectionImg"
      />
      <img
        alt="retro orange triangles"
        src="@/assets/2025/retro_triangles_orange.png"
        className="shapesOverlay"
      />
      <h1>Connecting brilliant minds at 88mph.</h1>
      <p>
        Central Pennsylvania Open Source Conference has been woven into
        Lancaster's timeline since 2008. This one-day event strives to foster
        all aspects of the regional tech community, providing a platform for
        cutting-edge talks and networking opportunities. With each year, the
        conference continues to transform the local tech scene, proving that
        just like time travel, the possibilities are endless.
      </p>
      <p>Put <b>Saturday, April 26th, 2025</b> on your calendar now!</p>
      <!-- <a
        target="_blank"
        href="https://www.eventbrite.com/e/the-fourteenth-annual-central-pa-open-source-conference-tickets-803539687837"
      >
        <div class="register">Buy Tickets</div>
      </a> -->
    </div>
    <div class="featuredThings">
      <div
        class="featuredWrapper"
        data-aos="zoom-in"
        data-aos-duration="5000"
        data-aos-easing="ease-in-out"
      >
        <i class="fa-solid fa-location-dot"></i>
        <div class="featuredContent">
          <span>Ware Center</span>
          <span>Lancaster, PA</span>
        </div>
      </div>
      <div
        class="featuredWrapper"
        data-aos="zoom-in"
        data-aos-duration="5000"
        data-aos-easing="ease-in-out"
      >
        <i class="fa-solid fa-users"></i>
        <div class="featuredContent">
          <span>Sponsor</span>
          <span>Make the magic happen for 200+ time travelers.</span>
        </div>
      </div>
      <div
        class="featuredWrapper"
        data-aos="zoom-in"
        data-aos-duration="5000"
        data-aos-easing="ease-in-out"
      >
        <i class="fa-solid fa-microphone"></i>
        <div class="featuredContent">
          <span>20+ Speakers</span>
          <span>Students & professionals!</span>
        </div>
      </div>
      <div
        class="featuredWrapper"
        data-aos="zoom-in"
        data-aos-duration="5000"
        data-aos-easing="ease-in-out"
      >
        <i class="fa-solid fa-mug-saucer"></i>
        <div class="featuredContent">
          <span>Retro Coffee</span>
          <span>Because we know why you're really here.</span>
        </div>
      </div>
    </div>
    <div
      class="talkContents"
      data-aos="fade-left"
      data-aos-duration="5000"
      data-aos-easing="ease-in-out"
    >
      <div className="colorBlock"></div>
      <img
        alt="CPOSC Audience 2019"
        src="@/assets/2024/IMG_6743.jpg"
        className="sectionImg"
      />
      <img
        alt="retro orange triangles"
        src="@/assets/2025/retro_circles.png"
        className="shapesOverlay"
      />
      <h1>Where we're going, we don't need roadmaps -</h1>
      <p>
        <b>But we need a schedule!</b> Whether you’ve got groundbreaking ideas
        or innovative projects that could use a flux capacitor to reach new
        heights, we want to hear from you. Your submission could be the key to
        unlocking the next great chapter in our tech timeline, and who knows—you
        might just make history.
      </p>
      <p>Be a part of our journey to a tech-filled future!</p>
      <a target="_blank" href="https://forms.gle/yCLJWq8TFPRfrEsu9">
        <div class="register">Submit a Talk</div>
      </a>
    </div>
    <div
      class="aboutWrapper"
      data-aos="fade-left"
      data-aos-duration="5000"
      data-aos-easing="ease-in-out"
    >
      <div class="homeCarousel">
        <carousel :items-to-show="4.2" :wrap-around="true" :autoplay="5000">
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
              <img alt="CPOSC Audience 2019" src="@/assets/2024/IMG_6726.jpg" />
            </div>
          </slide>
          <slide key="6" :slide-width="slideWidth">
            <div class="aboutImage">
              <img alt="CPOSC Audience 2019" src="@/assets/2024/IMG_6743.jpg" />
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
          <img alt="CPOSC Audience 2019" src="@/assets/2023/CPOSC_2019.jpg" />
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
          <img alt="CPOSC Audience 2019" src="@/assets/2024/IMG_6726.jpg" />
        </div>
        <div class="aboutImage">
          <img alt="CPOSC Audience 2019" src="@/assets/2024/IMG_6743.jpg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      slideWidth: window.innerWidth / 4,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
// TODO: update to have proper nesting
.whatAbout {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .aboutContents {
    padding: 6rem 0rem 8rem 0rem;
    max-width: 850px;

    .colorBlock {
      position: absolute;
      background-color: #37bfea;
      height: 200px;
      width: 200px;
      margin-left: -7rem;
      margin-top: -2rem;
    }

    .sectionImg {
      width: 300px;
      height: 400px;
      object-fit: cover;
      position: absolute;

      margin-left: -5rem;
    }

    .shapesOverlay {
      z-index: 20;
      position: absolute;
      margin-left: -9rem;
      margin-top: -4rem;
      width: 150px;
    }

    h1,
    p {
      margin-left: 260px;
    }

    h1 {
      margin-top: 0;
    }
  }

  .talkContents {
    padding: 1rem 3rem 3rem 3rem;
    max-width: 850px;
    margin-top: 4rem;

    .colorBlock {
      position: absolute;
      background-color: #37bfea;
      height: 200px;
      width: 200px;
      right: -7rem;
      top: -1rem;
    }

    .sectionImg {
      width: 300px;
      height: 400px;
      object-fit: cover;
      position: absolute;

      right: -5rem;
    }

    .shapesOverlay {
      z-index: 20;
      position: absolute;
      right: -8rem;
      top: -3rem;
      width: 150px;
    }

    h1, p {
      margin-right: 200px;
    }

    .register {
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
    }
  }
}
h1 {
  font-family: "Bebas Neue", sans-serif;
  font-size: 40px;
}

p {
  font-family: "Poppins", sans-serif;
  font-size: 18px;
}

.featuredThings {
  display: flex;
  flex-direction: row;
  color: #1F1F1F;

  i {
    font-size: 30px;
  }

  .fa-location-dot {
    color: #a21cda;
  }

  .fa-users {
    color: #ff2cb7;
  }

  .fa-microphone {
    color: #ff7164;
  }

  .fa-mug-saucer {
    color: #ffac19;
  }

  .featuredWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 1rem 0 1rem;
  }

  .featuredContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    text-align: center;
    background-color: white;
    padding: 0.5rem;
    color: #1F1F1F;
    width: 200px;

    span:first-of-type {
      font-weight: bold;
      margin-bottom: 4px;
    }

    span:last-of-type {
      font-size: 16px;
    }
  }
}

.whatAbout {

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

      p {
        letter-spacing: 1px;
        word-spacing: 1.5px;
        padding: 0 1rem 0 0;

        @media screen and (max-width: 950px) {
          text-align: center;
          padding: 0 2rem;
        }
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
      }
    }
  }
}

.homeCarousel {
  width: 100vw;
  padding-top: 4rem;

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
