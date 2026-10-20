<template>
  <section class="section sponsors" id="sponsors" aria-labelledby="sponsors-title">
    <div class="container">
      <h2 id="sponsors-title" class="sponsors__title">Our Sponsors</h2>
      <p class="sponsors__subtitle">
        The organizations that make this conference possible
      </p>

      <div class="frame">
      <div class="carousel" :class="{ 'is-paused': paused }">
        <ul class="carousel__track">
          <li
            v-for="(s, i) in loop"
            :key="i"
            class="tile"
            :class="{ 'tile--dupe': i >= sponsors.length }"
            :aria-hidden="i >= sponsors.length ? 'true' : null"
          >
            <a
              :href="s.href"
              target="_blank"
              rel="noopener"
              :tabindex="i >= sponsors.length ? -1 : null"
            >
              <img :src="s.src" :alt="i >= sponsors.length ? '' : s.alt" loading="lazy" />
            </a>
          </li>
        </ul>
      </div>
      </div>

      <div class="sponsors__footer">
        <p class="sponsors__note">
          Sponsors help power the future of open source in Central PA. Join us
          in celebrating the sponsors from last year!
        </p>
        <button
          type="button"
          class="pause"
          :aria-pressed="paused"
          @click="paused = !paused"
        >
          <span class="pause__icon" :class="{ 'is-play': paused }" aria-hidden="true"></span>
          {{ paused ? "Play" : "Pause" }} scrolling
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";

const base = "/src/2026/assets/sponsors";
const paused = ref(false);

const sponsors = [
  { href: "https://www.webstaurantstore.com/", src: `${base}/WebstaurantStore.png`, alt: "WebstaurantStore Logo" },
  { href: "https://www.minddevelopmentanddesign.com/", src: `${base}/mind.png`, alt: "MIND Logo" },
  { href: "https://cargas.com/", src: `${base}/cargas.png`, alt: "Cargas Logo" },
  { href: "https://www.elastic.co/", src: `${base}/elastic-logo.svg`, alt: "Elastic Logo" },
  { href: "https://www.brewcorelabs.com/", src: `${base}/FirstSponsor.png`, alt: "BrewCore Labs Logo" },
  { href: "https://make717.org/", src: `${base}/Make717.svg`, alt: "Make717 Logo" },
  { href: "https://theindustrialresolution.com/", src: `${base}/indyres.png`, alt: "Industrial Resolution Logo" },
  { href: "https://landistechnologies.com/", src: `${base}/landis.svg`, alt: "Landis Technologies Logo" },
  { href: "https://www.siml.life/", src: `${base}/deepsiml.png`, alt: "Deep SIML Labs Logo" },
  { href: "https://jfcglobal.com/", src: `${base}/jfc.png`, alt: "JFC Global Logo" },
  { href: "https://scpaworks.org/", src: `${base}/SCPAWorks.png`, alt: "SCPA Works Logo" },
  { href: "https://www.tccp.org/", src: `${base}/TCCP.png`, alt: "TCCP Logo" },
];

// Rendered twice so the scroll loops with no visible jump.
const loop = computed(() => [...sponsors, ...sponsors]);
</script>

<style lang="scss" scoped>
$black: #1b1d21;
$teal: #14b8a6;
$red: #ef3340;
$gray: #4a4e55;

.sponsors {
  &__title {
    margin: 0 auto 0.6rem;
    text-align: center;
    line-height: 1.2;
    text-wrap: balance;
    // Black-to-red gradient title
    color: $black;
    background: linear-gradient(90deg, $black 0%, $red 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    width: fit-content;
    max-width: 100%;

    // Short red bar, matching the Travel section
    &::after {
      content: "";
      display: block;
      width: 56px;
      height: 3px;
      margin: 0.9rem auto 0;
      background: $red;
      -webkit-text-fill-color: initial;
    }
  }

  &__subtitle {
    margin: 0 auto 2rem;
    text-align: center;
    font-size: 1.1rem;
    color: $gray;
    max-width: 48ch;
    text-wrap: balance;
  }

  &__footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;
  }

  &__note {
    margin: 0;
    text-align: center;
    font-size: 0.95rem;
    line-height: 1.6;
    color: $gray;
    max-width: 56ch;
  }
}

/* ---------- Teal corner brackets, echoing the banner ---------- */
.frame {
  position: relative;
  padding: 0.75rem 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border: 3px solid $teal;
    pointer-events: none;
  }
  &::before {
    top: 0;
    left: 0;
    border-right: 0;
    border-bottom: 0;
    border-top-left-radius: 6px;
  }
  &::after {
    right: 0;
    bottom: 0;
    border-left: 0;
    border-top: 0;
    border-bottom-right-radius: 6px;
  }
}

/* ---------- Carousel ---------- */
.carousel {
  --tile-w: 190px;
  --tile-h: 88px;
  --gap: 1.25rem;

  position: relative;
  overflow: hidden;
  padding: 0.5rem 0;
  // Soft fade at both edges
  -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);

  @media (max-width: 520px) {
    --tile-w: 150px;
    --tile-h: 72px;
    --gap: 0.9rem;
  }

  &__track {
    display: flex;
    align-items: center;
    width: max-content;
    margin: 0;
    padding: 0;
    list-style: none;
    animation: scroll 45s linear infinite;
  }

  &:hover &__track,
  &:focus-within &__track,
  &.is-paused &__track {
    animation-play-state: paused;
  }
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

.tile {
  flex: none;
  width: var(--tile-w);
  height: var(--tile-h);
  margin-right: var(--gap);

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 1rem 1.25rem;
    background: #fff;
    border: 1px solid #e5e7ea;
    border-radius: 10px;
    transition: border-color 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      border-color: $teal;
      box-shadow: 0 6px 16px -8px rgba(20, 184, 166, 0.5);
    }

    &:focus-visible {
      outline: 3px solid $teal;
      outline-offset: 3px;
    }
  }

  img {
    display: block;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    object-fit: contain;
  }
}

/* ---------- Pause control ---------- */
.pause {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  background: #fff;
  border: 1px solid #d5d8dc;
  border-radius: 999px;
  font: inherit;
  font-size: 0.85rem;
  font-weight: 500;
  color: $black;
  cursor: pointer;

  &:hover {
    border-color: $red;
  }

  &:focus-visible {
    outline: 3px solid $red;
    outline-offset: 3px;
  }

  // Two bars = pause, triangle = play
  &__icon {
    width: 10px;
    height: 10px;
    border-left: 3px solid $red;
    border-right: 3px solid $red;
    box-sizing: border-box;

    &.is-play {
      border: 0;
      width: 0;
      height: 0;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 10px solid $red;
    }
  }
}

/* ---------- Reduced motion: no scrolling, show everyone in a wrapped grid ---------- */
@media (prefers-reduced-motion: reduce) {
  .carousel {
    -webkit-mask-image: none;
    mask-image: none;

    &__track {
      animation: none;
      width: auto;
      flex-wrap: wrap;
      justify-content: center;
      row-gap: var(--gap);
    }
  }

  .tile--dupe,
  .pause {
    display: none;
  }

  .tile a {
    transition: none;
  }
}
</style>