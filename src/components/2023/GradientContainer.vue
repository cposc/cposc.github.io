<template>
  <div class="gradientContainer"></div>
</template>

<style lang="scss" scoped>
.gradientContainer {
  bottom: 0;
  height: 100px; /* For browsers that do not support gradients */
  margin-bottom: -75px;
  width: 100%;
  background-image: linear-gradient(to top, transparent , black);
}
</style>