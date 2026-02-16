<template>
  <section class="section" id="sponsors">
    <div class="container">
      <h2>Our Stellar Sponsors</h2>
      <p class="subtitle">
        The organizations that make our cosmic gathering possible
      </p>
      <div class="highlight-box">
        <p>
          Join our constellation of supporters and help power the future of open
          source in Central PA. Multiple sponsorship levels available.
        </p>
        <div>
          <div class="sponsor-row headliner">
            <a href="https://www.webstaurantstore.com/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/WebstaurantStore.png" alt="WebstaurantStore Logo" /></a>
          </div>
          <div class="sponsor-row">
            <a href="https://www.minddevelopmentanddesign.com/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/mind.png" alt="MIND Logo" /></a>
            <a href="https://cargas.com/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/cargas.png" alt="Cargas Logo" /></a>
            <a href="https://www.elastic.co/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/elastic-logo.svg" alt="Elastic Logo" /></a>
          </div>
          <div class="sponsor-row">
            <a href="https://www.brewcorelabs.com/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/FirstSponsor.png" alt="BrewCore Labs Logo" /></a>
            <a href="https://make717.org/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/Make717.svg" alt="Make717 Logo" /></a>
            <a href="https://theindustrialresolution.com/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/indyres.png" alt="Industrial Resolution Logo" /></a>
            <a href="https://landistechnologies.com/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/landis.svg" alt="Landis Technologies Logo" /></a>
          </div>
          <div class="sponsor-row">
            <a href="https://jfcglobal.com/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/jfc.png" alt="JFC Global Logo" /></a>
            <a href="https://scpaworks.org/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/SCPAWorks.png" alt="SCPA Works Logo" /></a>
            <a href="https://www.tccp.org/" target="_blank"><img class="sponsor sponsor--wide" src="/src/2026/assets/sponsors/TCCP.png" alt="TCCP Logo" /></a>
          </div>
        </div>
        <a href="/sponsors" class="card-link">View Sponsorship Opportunities →</a>
      </div>
      <div class="grid">
        <div class="card">
          <div>
            <h3>Platinum Sponsors</h3>
            <p>
              Our brightest stars providing maximum support for the conference.
              These organizations are true champions of open source.
            </p>
          </div>
          <!-- <a href="#" class="card-link">Meet Our Platinum Partners →</a> -->
        </div>
        <div class="card">
          <div>
            <h3>Gold Sponsors</h3>
            <p>
              Shining bright with significant support for our community. These
              partners believe in the power of open collaboration.
            </p>
          </div>
          <!-- <a href="#" class="card-link">View Gold Sponsors →</a> -->
        </div>
        <div class="card">
          <div>
            <h3>Silver Sponsors</h3>
            <p>Steady stars that help light the way. These organizations help make CPOSC possible through their commitment and collaboration.</p>
          </div>
          <!-- <a href="#" class="card-link">View Gold Sponsors →</a> -->
        </div>
        <div class="card">
          <div>
            <h3>Community</h3>
            <p>
              Local businesses and organizations that make Central PA's tech
              scene sparkle. The foundation of our community.
            </p>
          </div>
          <!-- <a href="#" class="card-link">See All Partners →</a> -->
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
h2,
h3 {
  margin: 0 !important;
}
.subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sponsor-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;

  .sponsor {
    max-width: 150px;
    max-height: 80px;
  }

  .sponsor--wide {
    max-width: 300px;
  }

  &.headliner .sponsor {
    max-width: 300px;
    max-height: 150px;
  }
}

.grid {
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 1150px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}
</style>
