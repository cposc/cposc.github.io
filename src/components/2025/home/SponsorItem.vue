<template>
  <div class="sponsorItem" data-aos="zoom-in" data-aos-duration="5000" data-aos-easing="ease-in-out">
    <div v-bind:class="tier">

    <!-- Tier 1 -->
    <a v-if="name == 'WebstaurantStore'" href="https://www.webstaurantstore.com" target="_blank">
    <img
      v-if="name === 'WebstaurantStore'"
      :alt="name"
      class="web"
      src="@/assets/2024/sponsors/Webstaurantstore-brand-logo.png"
    />
    </a>

    <!-- Tier 2 -->
    <a v-if="name == 'Cargas'" href="https://www.cargas.com" target="_blank">
    <img
      v-if="name === 'Cargas'"
      :alt="name"
      src="@/assets/2024/sponsors/cargas.png"
    />
    </a>
    <a v-if="name == 'Elastic'" href="https://www.elastic.co" target="_blank">
    <img
      v-if="name === 'Elastic'"
      :alt="name"
      src="@/assets/2024/sponsors/elastic-logo.svg"
    />
    </a>
    <a v-if="name == 'Listrak'" href="https://www.listrak.com/" target="_blank">
    <img
      v-if="name === 'Listrak'"
      :alt="name"
      src="@/assets/2024/sponsors/Listrak-Large.png"
    />
    </a>
    <a v-if="name == 'Mind Development & Design'" href="https://www.minddevelopmentanddesign.com/" target="_blank">
    <img
      v-if="name === 'Mind Development & Design'"
      :alt="name"
      src="@/assets/2024/sponsors/mind.png"
    />
    </a>

    <!-- Tier 3 -->
    <a v-if="name == 'Harbor Compliance'" href="https://www.harborcompliance.com/" target="_blank">
    <img
      v-if="name === 'Harbor Compliance'"
      :alt="name"
      class="web"
      src="@/assets/2024/sponsors/harborcompliance.png"
    />
    </a>
    <a v-if="name == 'Industrial Resolution'" href="https://theindustrialresolution.com/" target="_blank">
    <img
      v-if="name === 'Industrial Resolution'"
      :alt="name"
      src="@/assets/2024/sponsors/indyres.png"
    />
    </a>
    <a v-if="name == 'Make 717'" href="https://www.make717.org/" target="_blank">
    <img
      v-if="name === 'Make 717'"
      :alt="name"
      src="@/assets/2024/sponsors/make717logo_color.svg"
    />
    </a>
    
    <!-- Tier 4 -->
    <a v-if="name == 'JFC Global'" href="https://jfcglobal.com/" target="_blank">
    <img
      v-if="name === 'JFC Global'"
      :alt="name"
      src="@/assets/2024/sponsors/jfc.png"
    />
    </a>
    <a v-if="name == 'TCCP'" href="https://www.tccp.org/" target="_blank">
    <img
      v-if="name === 'TCCP'"
      :alt="name"
      src="@/assets/2025/sponsors/TCCP.png"
    />
    </a>
    <img
      v-if="name === 'Swartz'"
      :alt="name"
      src="@/assets/2025/sponsors/Swartz.png"
    />
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
.sponsorItem {
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px;

  img {
    object-fit: contain;
  }

  .one img {
    height: 200px;
    width: 350px;
  }

  .two img {
    height: 150px;
    width: 200px;
  }

  .three img {
    height: 100px;
    width: 150px;
  }

  .four img {
    height: 60px;
  }
}
</style>
