<template>
  <div class="sponsorItem" data-aos="zoom-in" data-aos-duration="5000" data-aos-easing="ease-in-out">
    <div v-bind:class="tier">
      <img
        v-if="name === 'Crunchy Data'"
        :alt="name"
        src="@/assets/sponsors/crunchy.png"
      />
      <img
        v-if="name === 'Boyd Technical Solutions'"
        :alt="name"
        src="@/assets/sponsors/boyd.png"
      />
      <img
        v-if="name === 'Cargas'"
        :alt="name"
        src="@/assets/sponsors/cargas.png"
      />
      <img
        v-if="name === 'HUG'"
        :alt="name"
        src="@/assets/sponsors/hug-logo.png"
      />
      <img
        v-if="name === 'Industrial Resolution'"
        :alt="name"
        src="@/assets/sponsors/indyres.png"
      />
      <img
        v-if="name === 'JFC Global'"
        :alt="name"
        src="@/assets/sponsors/jfc.png"
      />
      <img
        v-if="name === 'Listrak'"
        :alt="name"
        src="@/assets/sponsors/Listrak-Large.png"
      />
      <img
        v-if="name === 'Quub'"
        :alt="name"
        src="@/assets/sponsors/quublogo.svg"
      />
      <img
        v-if="name === 'Mind Development & Design'"
        :alt="name"
        src="@/assets/sponsors/mind.png"
      />
      <img
        v-if="name === 'Seisan'"
        :alt="name"
        src="@/assets/sponsors/seisan.png"
      />
      <img
        v-if="name === 'WebstaurantStore'"
        :alt="name"
        class="web"
        src="@/assets/sponsors/webstaurant-logo-w-icon.svg"
      />
      <img
        v-if="name === 'Elastic'"
        :alt="name"
        src="@/assets/sponsors/elastic-logo.svg"
      />
      <!-- <h4>{{ name }}</h4> -->
    </div>
  </div>
</template>

<script>

export default {
  props: {
    name: String,
    tier: String,
    key: String
  }
}
</script>

<style lang="scss" scoped>
h4 {
  text-transform: uppercase;
  color: white;
  font-weight: 900;
  letter-spacing: 2px;
  font-size: 12px;
  margin-bottom: 5px;
  text-align: center;
}

p {
  font-size: 12px;
  color: #b1b3b1;
  margin-top: 0;
  max-width: 150px;
}

i {
  color: #2b3480;
  font-weight: 900;
  font-size: 50px;
  margin-right: 1rem;
  margin-bottom: 15px;
}

.sponsorItem {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0rem 0.5rem;

  @media screen and (max-width: 850px) {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 433px) {
    margin-bottom: 0.5rem !important;
  }

  img {
    object-fit: contain;
  }

  .one > img {
    // transform: scale(1.75)
    width: 275px;

    &.web {
      width: 400px !important;

      @media screen and (max-width: 433px) {
        width: 265px !important;
      }
    }

    @media screen and (max-width: 433px) {
      width: 190px;
    }
  }

  .two > img {
    width: 190px;

    @media screen and (max-width: 433px) {
      width: 140px;
    }
  }

  .three > img {
    width: 140px;

    @media screen and (max-width: 433px) {
      width: 75px;
    }
  }

  .four > img {
    width: 75px;
  }
}
</style>
