<template>
  <div class="promoContainer">
    <img
      class="headerImage"
      alt="CPOSC Founder Presenting"
      src="@/assets/2024/CPOSC_Cover_2024_Galaxy.png"
    />
    <!-- <div class="imageOverlay"></div> -->
    
    <div class="contentOverlay" data-aos="zoom-in" data-aos-duration="5000" data-aos-easing="ease-in-out">
      <div class="contentContainer">
        <img
          class="date"
          alt="CPOSC Founder Presenting"
          src="@/assets/2024/theme_transparent.png"
        />
        <h1>Central PA Open Source Conference</h1>
        <img
          class="year"
          alt="CPOSC Founder Presenting"
          src="@/assets/2024/2024_transparent_white.png"
        />
        <p>Driving growth for The Next Generation in tech. Put CPOSC on your calendar now!</p>
        <p class="endPromo">Saturday, April 6th, 2024</p>
        <!-- <div class="datetimeGrid">
          <div class="location">Ware Center, Lancaster PA</div>
          <div class="date">Saturday, April 6th, 2024</div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.promoContainer {
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 650px;

  img.headerImage, .imageOverlay, .contentOverlay {
    position: absolute;
    top: 0;
    left: 0;
  }

  img.headerImage {
    height: 650px;
    width: 100%;
    object-fit: cover;
    // filter: hue-rotate(300deg);
  }

  // .imageOverlay {
  //   width: 100%;
  //   height: 650px;
  //   background-color: rgba(0,0,0,0.6);
  // }

  .contentOverlay {
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12rem;

    width: 100%;
    height: 650px;

    .contentContainer {
      width: 600px;
      color: white;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      @media screen and (max-width: 400px) {
        width: 100%;
      }

      img.year {
        width: 230px;
        height: 50px;
      }

      img.date {
        width: 230px;
        height: 50px;
      }

      h1 {
        font-size: 40px;
        margin: 0;
        letter-spacing: 3px;
        line-height: 43px;
        padding: 1rem;

        &:last-of-type {
          // font-size: 60px;
          // margin: 8px 0;
        }

        @media screen and (max-width: 400px) {
          padding: 0 1rem;
        }
      }

      .line {
        background-color: white;
        height: 3px;
        width: 100px;
        margin-top: 0.5rem;
      }

      p {
        font-style: italic;
        // margin: 2rem 0;

        &:not(.endPromo) {
          margin-top: 2rem;
          margin-bottom: 0;
        }

        &.endPromo {
          margin-top: 4px;
          margin-bottom: 2rem;
          font-weight: bold;
        }
        
        @media screen and (max-width: 400px) {
          padding: 0 2rem;
        }
      }

      .datetimeGrid {
        display: flex;
        font-family: var(--open-regular);
        border-top: 1px solid white;
        border-bottom: 1px solid white;

        @media screen and (max-width: 400px) {
          flex-direction: column;
          border-top: 0px;
          border-bottom: 0px;
        }

        .location {
          border-right: 1px solid white;

          @media screen and (max-width: 400px) {
            border-right: 0px;
            border-bottom: 1px solid white;
          }
        }

        .location, .date {
          padding: 0.5rem 1rem;
          font-size: 12px;
        }
      }
    }
  }
}
</style>