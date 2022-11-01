<template>
  <div class="promoContainer">
    <img
      alt="CPOSC Founder Presenting"
      src="@/assets/CPOSC_edited.jpg"
    />
    <div class="imageOverlay"></div>
    
    <div class="contentOverlay" data-aos="zoom-in" data-aos-duration="5000" data-aos-easing="ease-in-out">
      <div class="contentContainer">
        <h1>Central PA Open Source Conference</h1>
        <h1>2023</h1>
        <div class="line"></div>
        <p>Don't be an April Fool -- sign up for something cool! Put CPOSC on your calendar now.</p>
        <div class="datetimeGrid">
          <div class="location">Ware Center, Lancaster PA</div>
          <div class="date">Saturday, April 1st, 2023</div>
        </div>
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

  img, .imageOverlay, .contentOverlay {
    position: absolute;
    top: 0;
    left: 0;
  }

  img {
    height: 650px;
    width: 100%;
    object-fit: cover;
    filter: hue-rotate(300deg);
  }

  .imageOverlay {
    width: 100%;
    height: 650px;
    background-color: rgba(0,0,0,0.6);
  }

  .contentOverlay {
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 12rem;

    width: 100%;
    height: 650px;

    .contentContainer {
      width: 400px;
      color: white;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        font-size: 40px;
        margin: 0;
        letter-spacing: 3px;
        line-height: 43px;
        padding: 0 0 1rem 0;

        &:last-of-type {
          font-size: 60px;
          margin: 8px 0;
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
        margin: 2rem 0;
      }

      .datetimeGrid {
        display: flex;
        font-family: var(--open-regular);
        border-top: 1px solid white;
        border-bottom: 1px solid white;

        .location {
          border-right: 1px solid white;
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