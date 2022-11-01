<template>
  <div class="highlightItem" data-aos="zoom-in" data-aos-duration="5000" data-aos-easing="ease-in-out">
    <i v-bind:class="icon"></i>
    <div>
      <h4>{{ title }}</h4>
      <p>{{ content }}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    title: String,
    content: String,
    icon: String
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

.highlightItem {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1rem;
}
</style>
