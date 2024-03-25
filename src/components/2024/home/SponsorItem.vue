<template>
  <div class="sponsorItem" data-aos="zoom-in" data-aos-duration="5000" data-aos-easing="ease-in-out">
    <!-- <div v-bind:class="tier"> -->
    <img
      v-if="name === 'WebstaurantStore'"
      :alt="name"
      class="web"
      src="@/assets/2024/sponsors/Webstaurantstore-brand-logo.png"
    />

    <!-- Harbor Compliance -->
    <img
      v-if="name === 'Harbor Compliance'"
      :alt="name"
      class="web"
      src="@/assets/2024/sponsors/harborcompliance.png"
    />
    
    <img
      v-if="name === 'Listrak'"
      :alt="name"
      src="@/assets/2024/sponsors/Listrak-Large.png"
    />
    <img
      v-if="name === 'Mind Development & Design'"
      :alt="name"
      src="@/assets/2024/sponsors/mind.png"
    />
    <img
      v-if="name === 'Seisan'"
      :alt="name"
      src="@/assets/2024/sponsors/seisan.png"
    />
    <img
      v-if="name === 'Elastic'"
      :alt="name"
      src="@/assets/2024/sponsors/elastic-logo.svg"
    />
    <img
      v-if="name === 'Cargas'"
      :alt="name"
      src="@/assets/2024/sponsors/cargas.png"
    />
    <img
      v-if="name === 'Aha Labs'"
      :alt="name"
      src="@/assets/2024/sponsors/aha.png"
    />
    <img
      v-if="name === 'HUG'"
      :alt="name"
      src="@/assets/2024/sponsors/hug-logo.png"
    />
    <img
      v-if="name === 'Industrial Resolution'"
      :alt="name"
      src="@/assets/2024/sponsors/indyres.png"
    />
    <img
      v-if="name === 'JFC Global'"
      :alt="name"
      src="@/assets/2024/sponsors/jfc.png"
    />
    <img
      v-if="name === 'Boyd Technical Solutions'"
      :alt="name"
      src="@/assets/2024/sponsors/boyd.png"
    />
    <img
      v-if="name === 'Make 717'"
      :alt="name"
      src="@/assets/2024/sponsors/make717logo_color.svg"
    />
    <img
      v-if="name === 'Sharp Innovation'"
      :alt="name"
      src="@/assets/2024/sponsors/Sharp-25th-simple-stacked.png"
    />

    <!-- Tom Swartz -->
    <!-- <img
      v-if="name === 'Make 717'"
      :alt="name"
      src="@/assets/2024/sponsors/make717logo_color.svg"
    /> -->

    <!-- </div> -->
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
.sponsorItem {
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;

  img {
    height: 100px;
    width: 170px;
    object-fit: contain;
  }
}
</style>
