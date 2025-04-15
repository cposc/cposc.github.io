<template>
  <div class="pageContainer">
    <div class="notfoundContainer">
      <h1>404 Page Not Found</h1>
      <div class="line"></div>
      <div class="pageContent">
        <p>Oops! We don't know what to do with this URL. Use our navigation up top to learn more about CPOSC.</p>
        <div class="notFoundAnimation">
          <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_tonsVH.json"  background="transparent"  speed="1"  style="width: 300px; height: 300px;"  loop  autoplay></lottie-player>
        </div>
      </div>
      <GradientContainer />
    </div>
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

.notfoundContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;

  min-height: calc(100vh - 28.9rem);

  h1 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 40px;
    color: #1f1f1f;
    padding-top: 2rem;
    padding-bottom: 8px;
    margin: 0;
  }
}

.pageContainer {
  margin-bottom: 2rem;
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
  background-color: #ff7164;
  margin-bottom: 1rem;
}
</style>