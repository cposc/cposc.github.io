<template>
  <div class="gradientContainer"></div>
  <div class="whatAbout">
    <div class="aboutWrapper">
      <div class="aboutContent">
        <!-- <h4>ABOUT</h4> -->
        <h1>About CPOSC</h1>
        <div class="line"></div>
        <p>A Lancaster staple since it began in 2008, the Central Pennsylvania Open Source Conference is a one-day event that strives to foster all aspects of the regional tech community.</p>
        <a target="_blank" href="https://www.eventbrite.com/e/the-thirteenth-annual-central-pa-open-source-conference-tickets-529845451007">
          <div class="register">Buy Tickets</div>
        </a>
      </div>
      <div class="aboutImage">
        <img
          alt="CPOSC Audience 2019"
          src="@/assets/CPOSC_2019.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.gradientContainer {
  position: absolute;
  margin-top: -150px;
  height: 150px; /* For browsers that do not support gradients */
  width: 100%;
  background-image: linear-gradient(to top, black , transparent);
}

.whatAbout {
  background-color: black;
  width: 100%;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  .aboutWrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 750px;

    @media screen and (max-width: 850px) {
      flex-direction: column;
      width: 100%;
    }

    .aboutContent {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 6rem 0;

      @media screen and (max-width: 850px) {
        align-items: center;
      }

      h1 {
        margin: 1rem 0;

        @media screen and (max-width: 850px) {
          text-align: center;
        }
      }

      h4 {
        font-size: 12px;
        letter-spacing: 3px;

        @media screen and (max-width: 850px) {
          text-align: center;
        }
      }

      .line {
        background-color: #2b3480;
        height: 5px;
        width: 80px;
      }

      p {
        letter-spacing: 1px;
        word-spacing: 1.5px;
        padding: 0 1rem;

        @media screen and (max-width: 850px) {
          text-align: center;
          padding: 0 2rem;
        }
      }

      .register {
        background-color: #2b3480;
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

    .aboutImage {
      margin-left: 2rem;

      @media screen and (max-width: 450px) {
        margin-left: 0;
      }
  
      img {
        width: 350px;
        height: 250px;
        object-fit: cover;

        @media screen and (max-width: 450px) {
          width: 100%;
        }
      }
    }
  }
}
</style>