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
          <div class="container">
            <div id="slide" class="sponsor-row track" ref="track">
              <a
                :href="item.href"
                ref="items"
                target="_blank"
                v-for="item in loopSponsors"
                data-sponsor-item
                :key="`${item.alt}-${i}`"
                class="item"
              >
                <img :src="item.src" :alt="item.alt" class="logo" />
              </a>
            </div>
          </div>
          <!-- <div class="sponsor-row">
            <a href="https://www.minddevelopmentanddesign.com/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/mind.png" alt="MIND Logo" /></a>
            <a href="https://cargas.com/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/cargas.png" alt="Cargas Logo" /></a>
            <a href="https://www.elastic.co/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/elastic-logo.svg" alt="Elastic Logo" /></a>
          </div> -->
          <!-- <div class="sponsor-row">
            <a href="https://www.brewcorelabs.com/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/FirstSponsor.png" alt="BrewCore Labs Logo" /></a>
            <a href="https://make717.org/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/Make717.svg" alt="Make717 Logo" /></a>
            <a href="https://theindustrialresolution.com/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/indyres.png" alt="Industrial Resolution Logo" /></a>
            <a href="https://landistechnologies.com/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/landis.svg" alt="Landis Technologies Logo" /></a>
          </div>
          <div class="sponsor-row">
            <a href="https://jfcglobal.com/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/jfc.png" alt="JFC Global Logo" /></a>
            <a href="https://scpaworks.org/" target="_blank"><img class="sponsor" src="/src/2026/assets/sponsors/SCPAWorks.png" alt="SCPA Works Logo" /></a>
            <a href="https://www.tccp.org/" target="_blank"><img class="sponsor sponsor--wide" src="/src/2026/assets/sponsors/TCCP.png" alt="TCCP Logo" /></a>
          </div> -->
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
<script>
export default {
  data() {
    return {
      sponsors: [
        {
          href: "https://www.minddevelopmentanddesign.com/",
          src: "/src/2026/assets/sponsors/mind.png",
          alt: "MIND Logo",
        },
        {
          href: "https://cargas.com/",
          src: "/src/2026/assets/sponsors/cargas.png",
          alt: "Cargas Logo",
        },
        {
          href: "https://www.elastic.co/",
          src: "/src/2026/assets/sponsors/elastic-logo.svg",
          alt: "Elastic Logo",
        },
        {
          href: "https://www.brewcorelabs.com/",
          src: "/src/2026/assets/sponsors/FirstSponsor.png",
          alt: "BrewCore Labs Logo",
        },
        {
          href: "https://make717.org/",
          src: "/src/2026/assets/sponsors/Make717.svg",
          alt: "Make717 Logo",
        },
        {
          href: "https://theindustrialresolution.com/",
          src: "/src/2026/assets/sponsors/indyres.png",
          alt: "Industrial Resolution Logo",
        },
        {
          href: "https://landistechnologies.com/",
          src: "/src/2026/assets/sponsors/landis.svg",
          alt: "Landis Technologies Logo",
        },
        {
          href: "https://jfcglobal.com/",
          src: "/src/2026/assets/sponsors/jfc.png",
          alt: "JFC Global Logo",
        },
        {
          href: "https://scpaworks.org/",
          src: "/src/2026/assets/sponsors/SCPAWorks.png",
          alt: "SCPA Works Logo",
        },
        {
          href: "https://www.tccp.org/",
          src: "/src/2026/assets/sponsors/TCCP.png",
          alt: "TCCP Logo",
        },
      ],
      timer: null,
      isAnimating: false,
      stepFallback: 250,   // if measurement fails
      speedPx: 3,          // pixels per frame during animation
      intervalMs: 3000     // advance every 3 seconds
    };
  },
  computed: {
    // duplicate ONCE; never mutate sponsors for looping
    loopSponsors() {
      return [...this.sponsors, ...this.sponsors];
    }
  },

  mounted() {
    this.$nextTick(() => {
      this.resetToFirstCopy();
      this.timer = setInterval(this.next, this.intervalMs);
    });
  },

  beforeUnmount() {
    if (this.timer) clearInterval(this.timer);
  },

  methods: {
    next() {
      const el = this.$refs.track;
      if (!el || !this.sponsors.length) return;
      if (this.isAnimating) return;

      this.isAnimating = true;

      const step = this.getStepWidth();     // one item width (including gap)
      const half = el.scrollWidth / 2;      // width of first copy

      // normalize if we somehow start in the second copy
      if (el.scrollLeft >= half) el.scrollLeft -= half;

      let moved = 0;

      const animate = () => {
        el.scrollLeft += this.speedPx;
        moved += this.speedPx;

        // seamless wrap when we pass the first copy
        if (el.scrollLeft >= half) el.scrollLeft -= half;

        if (moved >= step) {
          this.isAnimating = false;
          return;
        }
        requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    },

    resetToFirstCopy() {
      const el = this.$refs.track;
      if (!el) return;
      el.scrollLeft = 0;
    },

    getStepWidth() {
      // measure the first rendered item width (includes margins if you bake them in)
      const items = this.$refs.items;
      const first = Array.isArray(items) ? items[0] : items;
      if (!first) return this.stepFallback;

      const rect = first.getBoundingClientRect();
      return rect.width || this.stepFallback;
    }
  }
  // methods: {
  //   next() {
  //     this.count += 1;
  //     console.log(this.count);
  //     console.log(this.sponsors.length);
  //     if (this.sponsors.length == this.count) {
  //       console.log("in the loop");
  //       // update % 10 as we add more sponsors!
  //       let newSponsors = this.sponsors.concat(this.sponsors);
  //       this.sponsors = newSponsors;
  //       console.log(this.sponsors);
  //     }
  //     this.scroll("next");
  //   },
  //   scroll(position) {
  //     let el = document.getElementById("slide");
  //     let pos = 0;
  //     let id = setInterval(frame, 5);
  //     let num = this.sponsors.length - this.frame;
  //     let width = 250;
  //     let resize = num * width;
  //     let check = position == "reset" ? resize : width;
  //     function frame() {
  //       if (pos == check) {
  //         clearInterval(id);
  //       } else {
  //         pos += 5;
  //         if (position == "next") {
  //           el.scrollLeft += 1;
  //         } else {
  //           el.scrollLeft -= 1;
  //         }
  //       }
  //     }
  //   },
  // },
  // mounted: function () {
  //   setInterval(() => {
  //     this.next();
  //   }, 3000);
  // },
  // computed: {
  //   sponsorsLoop() {
  //     return this.sponsors.map((s, idx) => ({
  //       ...s,
  //       _loopKey: `${s.id}-${idx}`, // unique even after concat
  //     }));
  //   },
  // },
};
</script>
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
  gap: 2rem;
  margin-bottom: 1rem;
  margin-top: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
  }

  .sponsor {
    max-width: 200px;
    max-height: 80px;
  }

  .sponsor--wide {
    max-width: 300px;
  }

  &.headliner {
    margin: 2rem 0;
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

// carousel of sponsor logos
#slide {
  display: flex;
  overflow: hidden;
  align-items: flex-start;
}
#slide > div {
  min-width: 250px;
  padding-right: 20px;
  box-sizing: border-box;
  overflow: hidden;
}
.track {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: hidden; /* hide scrollbar for carousel feel */
  overflow-y: hidden;
  white-space: nowrap;
}

.item {
  flex: 0 0 auto;     /* prevent shrinking */
  width: 250px;       /* your card width */
  /* if you use gap, prefer it on track; or use margin-right here */
}

.logo {
  width: 100%;
  height: auto;
  display: block;
}
</style>
