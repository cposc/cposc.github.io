<template>
  <div class="pageContainer">
    <img
      class="headerImage"
      alt="CPOSC Founder Presenting"
      src="@/assets/2024/CPOSC_Cover_2024_Galaxy.png"
    />
    <h4>404</h4>
    <h1>Page Not Found</h1>
    <div class="line"></div>
    <div class="pageContent">
      <p>Oops! We don't know what to do with this URL. Use our navigation up top to learn more about CPOSC.</p>
      <div class="notFoundAnimation">
        <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_tonsVH.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
      </div>
    </div>
    <GradientContainer />
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.headerImage {
  height: 82px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}

.pageContainer {
  background-color: white;
}

.pageContent {
  z-index: 10;
}

.notFoundAnimation {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
}

p > a {
  color: #1F1F1F;
  transition: color 0.25s;

  &:hover {
    color: #848699;
  }
}

.line {
  background-color: #A7609B;
  margin-bottom: 1rem;
}

h1 {
  color: #A7609B;
  margin-bottom: 6px;
}
</style>