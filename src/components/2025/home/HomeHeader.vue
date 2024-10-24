<template>
  <div class="promoContainer">
    <img
      class="headerImage"
      alt="CPOSC Founder Presenting"
      src="@/assets/2025/cover_photo.png"
    />
    <div
      class="contentOverlay"
      data-aos="zoom-in"
      data-aos-duration="5000"
      data-aos-easing="ease-in-out"
    >
      <div class="contentContainer">
        <h1>Hack to the Future</h1>
        <h2>Central Pennsylvania Open Sourced Conference</h2>
        <div class="conferenceDate">Saturday, April 26th, 2025</div>
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
  justify-content: flex-end;

  width: 100%;
  height: calc(100vw * 0.6);
  max-height: 763px;
  background-color: #1f1f1f;

  @media screen and (max-width: 875px) {
    padding-bottom: 1.5rem;
  }

  img.headerImage, .imageOverlay {
    position: absolute;
    top: 3rem;
    max-width: 1275px;
  }

  img.headerImage {
    width: 100%;
    object-fit: cover;
  }

  .contentOverlay {
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 6rem;
    width: 100%;

    @media screen and (max-width: 875px) {
      padding-bottom: 0rem;
    }

    @media screen and (max-width: 640px) {
      margin-bottom: -10rem;
    }

    @media screen and (max-width: 565px) {
      margin-bottom: -12rem;
    }

    @media screen and (max-width: 445px) {
      margin-bottom: -11.5rem;
    }

    @media screen and (max-width: 420px) {
      margin-bottom: -14rem;

      h1 {
        padding-bottom: 0 !important;
      }
    }
    

    .contentContainer {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: 125px;
        margin: 0;
        padding: 1rem 1rem 0 1rem;

        font-family: "Bebas Neue", sans-serif;
        font-weight: 800;
        font-style: normal;

        @media screen and (max-width: 1200px) {
          font-size: 90px;
        }

        @media screen and (max-width: 925px) {
          font-size: 70px;
        }

        @media screen and (max-width: 640px) {
          padding-bottom: 5rem;
        }

        @media screen and (max-width: 600px) {
          font-size: 60px;
        }

        @media screen and (max-width: 525px) {
          font-size: 50px;
        }

        @media screen and (max-width: 445px) {
          font-size: 40px;
          padding-bottom: 4rem;
        }

        @media screen and (max-width: 400px) {
          font-size: 35px;
          padding-bottom: 3rem;
        }

        @media screen and (max-width: 385px) {
          padding-bottom: 4rem;
        }
      }

      h2 {
        font-family: "Poppins", sans-serif;
        font-size: 38px;
        margin-top: 0;

        @media screen and (max-width: 565px) {
          max-width: 300px;
        }

        @media screen and (max-width: 480px) {
          max-width: 250px;
        }
      }

      p {
        font-style: italic;
        color: white;
      }

      @media screen and (max-width: 1260px) {
        h2 {
          font-size: 30px;
        }
      }

      @media screen and (max-width: 1030px) {
        h2 {
          font-size: 25px;
        }
      }

      @media screen and (max-width: 890px) {
        h2 {
          font-size: 20px;
        }
      }

      @media screen and (max-width: 730px) {
        h2 {
          font-size: 16px;
        }
      }
    }
  }

  .conferenceDate {
    font-family: "Poppins", sans-serif;
    background-color: #1F1F1F;
    font-weight: 800;
    font-size: 20px;
    padding: 1rem 2rem 1rem 2rem;
    color: #04cbff;
    box-sizing: border-box;

    border-radius: 30px;

    position: relative;
    border: 4px solid transparent;
    border-radius: 30px;
    background-clip: padding-box;
    padding: 1rem 2rem 1rem 2rem;

    @media screen and (max-width: 460px) {
      font-size: 16px;
    }

    @media screen and (max-width: 385px) {
      padding: 0.5rem 1rem 0.5rem 1rem;
    }

    &::after {
      position: absolute;
      top: -4px;
      bottom: -4px;
      left: -4px;
      right: -4px;
      background: linear-gradient(to right, #ff7164, #a21cda);
      content: "";
      z-index: -1;
      border-radius: 30px;
    }
  }
}
</style>
