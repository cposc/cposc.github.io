<template>
  <div class="gradientContainer"></div>
  <div class="whatAbout">
    <div class="aboutWrapper">
      <div class="aboutContent">
        <h4>ABOUT</h4>
        <h1>CPOSC Event</h1>
        <div class="line"></div>
        <p>The Central PA Open Source Conference (CPOSC) is a one-day technical conference for open source users and developers.</p>
        <p>Presentations and sessions cover all aspects of open source, with talks ranging from novice to expert skill levels. The event typically features case studies, best practices, code-alongs, and more.</p>
        <div class="register">Schedule</div>
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

    .aboutContent {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 6rem 0;

      h1 {
        margin: 1rem 0;
      }

      h4 {
        font-size: 12px;
        letter-spacing: 3px;
      }

      .line {
        background-color: #2b3480;
        height: 5px;
        width: 80px;
      }

      p {
        letter-spacing: 1px;
        word-spacing: 1.5px;
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
  
      img {
        width: 350px;
        height: 250px;
        object-fit: cover;
      }
    }
  }
}
</style>