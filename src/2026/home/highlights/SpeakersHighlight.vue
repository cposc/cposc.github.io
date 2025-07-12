<template>
  <section class="section" id="speakers">
    <div class="container">
      <h2>Featured Speakers</h2>
      <p class="subtitle">
        Meet the luminaries lighting up our tech universe, one byte at a time.
      </p>
      <div class="grid">
        <div class="card">
          <div>
            <h3>Keynote Speaker</h3>
            <p>
              Get ready for an inspiring keynote from [name], [credentials]. As
              a seasoned industry leader, [name] will dive deep into
              cutting-edge trends in open source, cloud computing, and emerging
              technologies.
            </p>
          </div>
          <a href="#" class="card-link">Find them on LinkedIn →</a>
        </div>
        <div class="card">
          <div>
            <h3>Technical Deep Dives</h3>
            <p>
              Byte-sized wisdom from experts who've navigated the depths of
              code. Sessions covering everything from kernel development to
              containerization.
            </p>
          </div>
          <a href="#" class="card-link">Browse Speakers →</a>
        </div>
        <div class="card">
          <div>
            <h3>Community Voices</h3>
            <p>
              Attendees will share their open source journeys and the impact
              they've made in our digital constellation. Become part of the
              story - real experiences, real impact, rapid-fire inspiration.
            </p>
          </div>
          <!-- COMMENT OUT when form opens for submitting Lightning Talks -->
          <a href="#" class="card-link">See Past Lightning Talks →</a>
          <!-- UNCOMMENT when form opens for submitting Lightning Talks -->
          <!-- <a href="#" class="card-link">Submit Your Lightning Talk →</a> -->
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}
.container h2 {
  margin: 0;
}

.grid .card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    margin: 0;
  }
}
</style>
