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
      }

      h2 {
        font-family: "Poppins", sans-serif;
        font-size: 38px;
        margin-top: 0;
      }

      p {
        font-style: italic;
        color: white;
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
