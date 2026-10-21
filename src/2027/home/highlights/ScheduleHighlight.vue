<template>
  <section class="section schedule" id="schedule" aria-labelledby="schedule-title">
    <div class="container">
      <h2 id="schedule-title" class="schedule__title">Conference Schedule</h2>

      <div class="schedule__layout">
        <div class="schedule__panel">
          <p class="status">
            <span class="status__dot" aria-hidden="true"></span>
            Schedule details coming early 2027
          </p>

          <h3>Schedule Coming Soon</h3>
          <p class="schedule__lead">
            We're assembling an incredible lineup of speakers and sessions for
            2027. Have one of these to share?
          </p>

          <ul class="chips">
            <li>An idea</li>
            <li>A technical skill</li>
            <li>Open source knowledge</li>
          </ul>

          <a
            class="btn-primary"
            :href="submitUrl"
            target="_blank"
            rel="noopener"
            aria-label="Submit a Talk (opens in a new tab)"
          >
            Submit a Talk
          </a>
        </div>

        <figure class="schedule__media">
          <!-- Replace imageSrc in the script with your real photo, e.g. "/images/schedule.jpg" -->
          <img
            src="/src/2027/assets/IMG_7397.jpeg"
            alt="Retro room from 2026 conference with old computers and games"
            width="600"
            height="450"
            loading="lazy"
          />
        </figure>
      </div>
    </div>
  </section>
</template>

<script setup>
const submitUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSf5cxMWGZgUqb6F1veL8BfJQBUpG5gZ3ZwESmnCQmmpIIqvJg/viewform?usp=sharing&ouid=109655273550638999145";

// Themed placeholder (dark panel, Pennsylvania outline, teal circuit, red rose dot).
// Swap for a real image path when you have one.
const placeholderSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 450">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b0c0e"/><stop offset="1" stop-color="#1f2226"/>
    </linearGradient>
    <pattern id="g" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M24 0H0V24" fill="none" stroke="#fff" stroke-opacity=".05"/>
    </pattern>
  </defs>
  <rect width="600" height="450" fill="url(#bg)"/>
  <rect width="600" height="450" fill="url(#g)"/>
  <g transform="translate(300 225) scale(1.15) translate(-629.5 -137.5)">
    <path d="M410,37 L467,10 L467,37 L800,37 L849,102 L816,140 L812,168 L838,222 L816,252 L795,257 L767,265 L410,265 Z"
          fill="#25282d" stroke="#5a5f67" stroke-width="2" stroke-linejoin="round"/>
    <path d="M300,193 H449 H520 L556,158 H611 H650 L684,192 V210 H740 L772,242 H815 H950 L980,212 H1000"
          fill="none" stroke="#2dd4bf" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M611,158 V120 L635,96 H777 H900 L930,126 H960"
          fill="none" stroke="#2dd4bf" stroke-opacity=".5" stroke-width="2" stroke-linejoin="round"/>
    <circle cx="684" cy="210" r="6" fill="#ef3340"/>
    <circle cx="728" cy="233" r="8" fill="#ef3340"/>
    <circle cx="728" cy="233" r="3" fill="#0b0c0e"/>
  </g>
</svg>`;

// const imageSrc = `data:image/svg+xml;utf8,${encodeURIComponent(placeholderSvg)}`;
// const imageSrc = "/src/2027/assets/IMG_7397.jpeg";
</script>

<style lang="scss" scoped>
$black: #1b1d21;
$teal: #14b8a6;
$teal-deep: #0f766e;
$red: #ef3340;
$maroon: #7B1E2B;
$gray: #4a4e55;

.schedule {
  &__title {
    margin: 0 0 2rem;
    line-height: 1.2;
    text-wrap: balance;
    // Black-to-teal gradient title
    color: $black;
    background: linear-gradient(90deg, $black 0%, #0d9488 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    width: fit-content;
    max-width: 100%;
  }

  &__layout {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    align-items: center;

    @media (min-width: 860px) {
      grid-template-columns: 1.1fr 1fr;
      gap: 3rem;
    }
  }

  &__lead {
    margin: 0.75rem 0 1.25rem;
    color: $gray;
    line-height: 1.6;
    max-width: 52ch;
  }

  // Image first on mobile, to the right on desktop
  &__media {
    order: -1;
    position: relative;
    margin: 0;

    @media (min-width: 860px) {
      order: 0;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      border-radius: 14px;
      border: 1px solid #2a2d32;
      background: $black;
      box-shadow: 0 18px 40px -18px rgba(11, 12, 14, 0.55);
    }

    // Red corner brackets, echoing the banner
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 34px;
      height: 34px;
      border: 3px solid $maroon;
      pointer-events: none;
    }
    &::before {
      top: -8px;
      left: -8px;
      border-right: 0;
      border-bottom: 0;
      border-top-left-radius: 6px;
    }
    &::after {
      right: -8px;
      bottom: -8px;
      border-left: 0;
      border-top: 0;
      border-bottom-right-radius: 6px;
    }
  }

  &__panel {
    background: linear-gradient(135deg, #f0fdfa 0%, #ffffff 70%);
    border: 1px solid #ccfbf1;
    border-left: 4px solid $teal;
    border-radius: 10px;
    padding: clamp(1.25rem, 4vw, 2.25rem);

    h3 {
      margin: 0;
      font-size: clamp(1.5rem, 4vw, 2rem);
      line-height: 1.2;
      color: $black;
    }
  }
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0 0 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: $gray;

  &__dot {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: $red;
    flex: none;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1.5px solid $red;
      animation: ping 2.4s ease-out infinite;
    }
  }
}

@keyframes ping {
  0% {
    transform: scale(1);
    opacity: 0.9;
  }
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  list-style: none;
  margin: 0 0 1.75rem;
  padding: 0;

  li {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.9rem;
    background: #fff;
    border: 1px solid #e5e7ea;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 500;
    color: $black;

    &::before {
      content: "";
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: $teal;
    }
  }
}

.btn-primary {
  display: inline-block;
  padding: 0.85rem 1.75rem;
  background: linear-gradient(135deg, $black, $teal-deep);
  color: #fff;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  border-radius: 8px;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(20, 184, 166, 0.35);
  }

  &:focus-visible {
    outline: 3px solid $teal;
    outline-offset: 3px;
  }

  @media (max-width: 520px) {
    display: block;
  }
}

@media (prefers-reduced-motion: reduce) {
  .status__dot::after {
    animation: none;
    opacity: 0;
  }
  .btn-primary {
    transition: none;
    &:hover {
      transform: none;
    }
  }
}
</style>