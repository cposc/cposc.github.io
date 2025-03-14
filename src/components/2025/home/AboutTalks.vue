<template>
  <!-- <div class="gradientContainer"></div> -->
  <div class="whatAbout">
    <div
      className="aboutContents"
      data-aos="fade-right"
      data-aos-duration="5000"
      data-aos-easing="ease-in-out"
    >
      <div className="retroImage">
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
      </div>
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
      <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NTUyZTgxMzhqbGU3ZXYzbmtsM2ZtaHRmZnUgY19mMjI2NzNlMmU1ZWE5ZjczNmJhYThlMjMyMmU1MmM4MGRjMzJkY2NlYTY1Mzg1MDI0MWY0MTUyNmRjMDQ2N2RlQGc&tmsrc=c_f22673e2e5ea9f736baa8e2322e52c80dc32dccea653850241f41526dc0467de%40group.calendar.google.com">
        <div class="register">Add Event to Calendar</div>
      </a>
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
    <!-- <div -->
    <!--   class="talkContents" -->
    <!--   data-aos="fade-left" -->
    <!--   data-aos-duration="5000" -->
    <!--   data-aos-easing="ease-in-out" -->
    <!-- > -->
    <!--   <div className="retroImgSpeaker"> -->
    <!--     <div className="colorBlock"></div> -->
    <!--     <img -->
    <!--       alt="CPOSC Audience 2019" -->
    <!--       src="@/assets/2024/IMG_6743.jpg" -->
    <!--       className="sectionImg" -->
    <!--     /> -->
    <!--     <img -->
    <!--       alt="retro orange triangles" -->
    <!--       src="@/assets/2025/retro_circles.png" -->
    <!--       className="shapesOverlay" -->
    <!--     /> -->
    <!--   </div> -->
    <!--   <h1>Where we're going, we don't need roadmaps -</h1> -->
    <!--   <p> -->
    <!--     <b>But we need a schedule!</b> Whether you’ve got groundbreaking ideas -->
    <!--     or innovative projects that could use a flux capacitor to reach new -->
    <!--     heights, we want to hear from you. Your submission could be the key to -->
    <!--     unlocking the next great chapter in our tech timeline, and who knows—you -->
    <!--     might just make history. -->
    <!--   </p> -->
    <!--   <p>Be a part of our journey to a tech-filled future!</p> -->
    <!--   <a target="_blank" href="https://forms.gle/yCLJWq8TFPRfrEsu9"> -->
    <!--     <div class="register">Submit a Talk</div> -->
    <!--   </a> -->
    <!-- </div> -->
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
      slideWidth: 250,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
// TODO: update to have proper nesting
// THIS CSS SHEET HAS RIDICULOUS RESPONSIVE STYLING
// Why? Instead of building it MOBILE-FIRST, I built it desktop-first like a nitwit
// Don't be like me. Don't reuse this code.
.whatAbout {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .aboutContents {
    display: grid;
    grid-template-columns: 350px calc(100% - 350px);
    grid-template-areas:
      "connRetro connHeader"
      "connRetro connCopy"
      "connRetro connAction"
      "connRetro connBtn";
    padding: 6rem 0rem 8rem 0rem;
    max-width: 950px;
    gap: 1rem;

    @media screen and (max-width: 1080px) {
      width: 80%;
    }

    @media screen and (max-width: 960px) {
      grid-template-areas:
        "connRetro connHeader"
        "connRetro connCopy"
        "connAction connAction"
        "connBtn .";
    }

    @media screen and (max-width: 885px) {
      grid-template-areas:
        "connHeader connHeader"
        "connAction connAction"
        "connRetro connCopy"
        "connRetro connBtn";
    }

    @media screen and (max-width: 800px) {
      grid-template-columns: 100%;
      grid-template-areas:
        "connHeader"
        "connAction"
        "connCopy"
        "connBtn"
        "connRetro";
    }

    .colorBlock {
      position: absolute;
      background-color: #37bfea;
      height: 200px;
      width: 200px;
      margin-left: 0rem;
      margin-top: -2rem;
    }

    .sectionImg {
      width: 300px;
      height: 400px;
      object-fit: cover;
      position: absolute;

      margin-left: 2rem;
    }

    .retroImage {
      grid-area: connRetro;

      @media screen and (max-width: 800px) {
        margin-top: 4rem;

        .sectionImg {
          width: 90%;
        }
      }

      @media screen and (max-width: 425px) {
        .colorBlock {
          width: 125%;
          margin-left: -3rem;
        }

        .sectionImg {
          margin-left: 0;
          width: 100%;
        }
      }

      @media screen and (max-width: 425px) {
        .sectionImg {
          height: 300px;
        }
      }
    }

    .shapesOverlay {
      z-index: 20;
      position: absolute;
      margin-left: -2rem;
      margin-top: -4rem;
      width: 150px;
    }

    h1 {
      margin: 0;
      grid-area: connHeader;
    }

    p {
      margin: 0;
    }

    p:last-of-type {
      grid-area: connAction;

      @media screen and (max-width: 960px) {
        margin-left: 2rem;
        margin-top: 2rem;
      }

      @media screen and (max-width: 902px) {
        margin-top: 0rem;
      }

      @media screen and (max-width: 885px) {
        margin-bottom: 3rem;
        margin-left: 0;
      }

      @media screen and (max-width: 800px) {
        margin-bottom: 0;
      }
    }

    a {
      grid-area: connBtn;
      font-family: "Poppins", sans-serif;
      background-color: #37bfea;
      color: #1F1F1F;
      padding: 1rem 2rem;
      border-radius: 30px;
      width: fit-content;
      text-decoration: none;
      font-weight: 600;

      @media screen and (max-width: 960px) {
        margin-left: 2rem;
      }

      @media screen and (max-width: 885px) {
        margin-left: 0;
      }
    }
  }

  .talkContents {
    display: grid;
    grid-template-columns: calc(100% - 350px) 350px;
    grid-template-areas:
      "talkHeader talkRetro"
      "talkCopy talkRetro"
      "talkAction talkRetro"
      "talkBtn talkRetro";
    padding: 6rem 0rem 8rem 0rem;
    max-width: 950px;
    row-gap: 1rem;
    column-gap: 2rem;
    margin-top: 4rem;

    @media screen and (max-width: 1080px) {
      width: 80%;
    }

    @media screen and (max-width: 885px) {
      grid-template-areas:
        "talkHeader talkHeader"
        "talkCopy talkRetro"
        "talkAction talkRetro"
        "talkBtn talkRetro";

      .retroImgSpeaker {
        top: 3rem;
      }
    }

    @media screen and (max-width: 800px) {
      grid-template-columns: 100%;
      grid-template-areas:
        "talkHeader"
        "talkAction"
        "talkCopy"
        "talkBtn"
        "talkRetro";
    }

    .colorBlock {
      position: absolute;
      background-color: #37bfea;
      height: 200px;
      width: 200px;
      right: 0rem;
      top: 4rem;

      @media screen and (max-width: 885px) {
        margin-top: 7rem;
      }

      @media screen and (max-width: 800px) {
        right: auto;
        margin-left: -2rem;
        margin-top: 24rem;
      }

      @media screen and (max-width: 747px) {
        margin-top: 27rem;
      }

      @media screen and (max-width: 701px) {
        margin-top: 28.5rem;
      }

      @media screen and (max-width: 611px) {
        margin-top: 30rem;
      }
    }

    .retroImgSpeaker {
      grid-area: talkRetro;

      @media screen and (max-width: 800px) {
        margin-top: 1rem;
      }

      @media screen and (max-width: 585px) {
        .colorBlock {
          width: 125%;
          margin-left: -3rem;
          margin-top: 30rem;
        }

        .shapesOverlay {
          margin-top: 32rem;
        }

        .sectionImg {
          margin-left: 0;
          width: 100%;
          height: 300px;
        }
      }

      @media screen and (max-width: 512px) {
        .colorBlock {
          margin-top: 32rem;
        }

        .shapesOverlay {
          margin-top: 34rem;
        }
      }

      @media screen and (max-width: 505px) {
        .colorBlock {
          margin-top: 33rem;
        }

        .shapesOverlay {
          margin-top: 35rem;
        }
      }

      @media screen and (max-width: 457px) {
        .colorBlock {
          margin-top: 36rem;
        }

        .shapesOverlay {
          margin-top: 38rem;
        }
      }

      @media screen and (max-width: 381px) {
        .colorBlock {
          margin-top: 38rem;
        }

        .shapesOverlay {
          margin-top: 40rem;
        }
      }

      @media screen and (max-width: 370px) {
        .colorBlock {
          margin-top: 42rem;
        }

        .shapesOverlay {
          margin-top: 44rem;
        }
      }

      @media screen and (max-width: 335px) {
        .colorBlock {
          margin-top: 44rem;
        }

        .shapesOverlay {
          margin-top: 46rem;
        }
      }
    }

    .sectionImg {
      width: 300px;
      height: 400px;
      object-fit: cover;
      position: absolute;

      @media screen and (max-width: 885px) {
        margin-top: 2rem;
      }

      @media screen and (max-width: 800px) {
        width: 100%;
      }
    }

    .shapesOverlay {
      z-index: 20;
      position: absolute;
      top: 1rem;
      width: 150px;
      right: -2rem;

      @media screen and (max-width: 885px) {
        margin-top: 8rem;
      }

      @media screen and (max-width: 800px) {
        right: auto;
        margin-left: -3rem;
        margin-top: 26rem;
      }

      @media screen and (max-width: 747px) {
        margin-top: 28rem;
      }

      @media screen and (max-width: 701px) {
        margin-top: 31rem;
      }

      @media screen and (max-width: 611px) {
        margin-top: 32rem;
      }
    }

    h1 {
      grid-area: talkHeader;
      margin: 0;
    }

    p:first-of-type {
      grid-area: talkCopy;
      margin: 0;
    }

    p:last-of-type {
      grid-area: talkAction;
      margin: 0;
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
      grid-area: talkBtn;
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

  @media screen and (max-width: 800px) {
    padding-top: 20rem;
  }
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

  @media screen and (max-width: 1060px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.whatAbout {
  @media screen and (max-width: 640px) {
    padding-top: 8rem;
  }

  .aboutWrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;

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

      // @media screen and (max-width: 1000px) {
      //   margin-left: 1rem;
      // }

      // @media screen and (max-width: 700px) {
      //   margin-left: 6px;
      // }

      // @media screen and (max-width: 511px) {
      //   margin-left: 0;
      //   margin-top: 8px;
      // }

      img {
        width: 110%;
        aspect-ratio: 1.25 / 1;
        object-fit: cover;
      }
    }
  }
}

.homeCarousel {
  width: 100vw;
  max-width: 1300px;
  padding-top: 4rem;

  @media screen and (max-width: 925px) {
    display: none;
  }
}

.mobileCarousel {
  @media screen and (min-width: 925px) {
    display: none;
  }

  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 5px;
  margin-left: -2rem;
  margin-top: 16rem;

  .aboutImage {
    margin: 0 !important;

    img {
      width: 100% !important;
      aspect-ratio: 1 / 1 !important;
    }
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 486px) {
    margin-top: 22rem;
  }

  @media screen and (min-width: 801px) {
    margin-top: 0rem;
  }
}
</style>
