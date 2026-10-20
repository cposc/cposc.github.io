<template>
  <section class="section travel" id="travel" aria-labelledby="travel-title">
    <div class="container">
      <h2 id="travel-title" class="travel__title">Travel &amp; Accommodation</h2>

      <div class="travel__grid">
        <!-- Venue: the dark feature card -->
        <article class="venue">
          <svg
            class="venue__circuit"
            viewBox="0 0 400 200"
            preserveAspectRatio="xMaxYMid slice"
            aria-hidden="true"
          >
            <g fill="none" stroke-linejoin="round">
              <path
                class="trace"
                d="M0,150 H120 L160,110 H260 L290,80 H400"
              />
              <path
                class="flow"
                pathLength="100"
                d="M0,150 H120 L160,110 H260 L290,80 H400"
              />
              <path class="trace" d="M0,60 H90 L120,90 H210 V170 H400" />
              <path
                class="flow flow--slow"
                pathLength="100"
                d="M0,60 H90 L120,90 H210 V170 H400"
              />
            </g>
            <circle class="node" cx="160" cy="110" r="4" />
            <circle class="node" cx="290" cy="80" r="4" />
            <circle class="dot" cx="210" cy="170" r="5" />
          </svg>

          <div class="venue__body">
            <span class="icon icon--dark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            <h3>Venue Information</h3>
            <p>
              Located at the <b>Ware Center</b> another year, we're easily
              accessible by car and public transportation.
            </p>
            <p class="venue__address">
              <b>42 N Prince Street, Lancaster, PA 17603</b>
            </p>
            <a
              class="btn-light"
              target="_blank"
              rel="noopener"
              href="https://www.google.com/maps/dir//ware+center/@40.0387483,-76.3907012,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c624f24f15380d:0x7f49c933dd919333!2m2!1d-76.3083003!2d40.0387775?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
              aria-label="Get Directions (opens in a new tab)"
            >
              Get Directions →
            </a>
          </div>
        </article>

        <!-- Hotels -->
        <article class="info info--teal">
          <span class="icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 20V5" />
              <path d="M3 9h16a2 2 0 0 1 2 2v9" />
              <path d="M3 16h18" />
              <path d="M7 9v7" />
            </svg>
          </span>
          <h3>Hotel Options</h3>
          <p>
            While we do not offer complimentary hotel stays, there are several
            hotels for those traveling.
          </p>
          <p>The closest to us are:</p>
          <ul class="pills">
            <li>Lancaster Marriott Penn Square</li>
            <li>Holiday Inn Lancaster</li>
          </ul>
        </article>

        <!-- Parking -->
        <article class="info info--gray">
          <span class="icon icon--gray" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <path d="M9.5 17V7h3.5a3 3 0 0 1 0 6H9.5" />
            </svg>
          </span>
          <h3>Parking</h3>
          <p>
            Travel by train or car. Nearby parking garages are walking distance
            to the conference, but we are not able to offer parking
            reimbursement like previous years.
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$black: #1b1d21;
$ink: #0b0c0e;
$teal: #14b8a6;
$teal-bright: #2dd4bf;
$teal-pulse: #5eead4;
$red: #ef3340;
$gray: #4a4e55;

.travel {
  // Centered header breaks the page's left/right rhythm
  &__title {
    margin: 0 auto 0.9rem;
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

    // Short red bar, like the banner's tick marks
    & + .travel__grid {
      margin-top: 2.5rem;
    }
  }

  &__title::after {
    content: "";
    display: block;
    width: 56px;
    height: 3px;
    margin: 0.9rem auto 0;
    background: $red;
    -webkit-text-fill-color: initial;
  }

  &__grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.25rem;

    @media (min-width: 860px) {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;

      .venue {
        grid-column: 1 / -1;
      }
    }
  }
}

h3 {
  margin: 0 0 0.6rem;
  font-size: clamp(1.35rem, 3.5vw, 1.75rem);
  line-height: 1.2;
}

p {
  margin: 0 0 0.9rem;
  line-height: 1.6;
}

/* ---------- Venue (dark feature card) ---------- */
.venue {
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  color: #e8eaed;
  background:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px) 0 0 / 24px 24px,
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px) 0 0 / 24px 24px,
    linear-gradient(135deg, $ink, #1f2226);
  border: 1px solid #2a2d32;
  box-shadow: 0 18px 40px -20px rgba(11, 12, 14, 0.6);

  // Red corner bracket
  &::before {
    content: "";
    position: absolute;
    top: 14px;
    left: 14px;
    width: 26px;
    height: 26px;
    border-top: 3px solid $red;
    border-left: 3px solid $red;
    border-top-left-radius: 6px;
  }

  &__body {
    position: relative;
    z-index: 1;
    padding: clamp(2.25rem, 5vw, 3rem) clamp(1.25rem, 4vw, 2.5rem) clamp(1.5rem, 4vw, 2.5rem);
    max-width: 34rem;
  }

  h3 {
    color: #fff;
  }

  b {
    color: #fff;
  }

  &__address {
    font-size: 1.05rem;
    margin-bottom: 1.5rem;
  }

  &__circuit {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0.55;
    pointer-events: none;

    @media (max-width: 700px) {
      opacity: 0.25;
    }

    .trace {
      stroke: $teal-bright;
      stroke-opacity: 0.25;
      stroke-width: 1.6;
    }
    .flow {
      stroke: $teal-pulse;
      stroke-width: 2.4;
      stroke-linecap: round;
      stroke-dasharray: 14 86;
      animation: flow 4s linear infinite;
    }
    .flow--slow {
      animation-duration: 5.6s;
      animation-delay: -2s;
    }
    .node {
      fill: $ink;
      stroke: $teal-bright;
      stroke-width: 1.6;
    }
    .dot {
      fill: $red;
    }
  }
}

@keyframes flow {
  from {
    stroke-dashoffset: 100;
  }
  to {
    stroke-dashoffset: 0;
  }
}

/* ---------- Hotels + Parking ---------- */
.info {
  border-radius: 10px;
  padding: clamp(1.25rem, 4vw, 2rem);
  color: $gray;

  h3 {
    color: $black;
  }

  b {
    color: $black;
  }

  &--teal {
    background: linear-gradient(135deg, #f0fdfa 0%, #ffffff 70%);
    border: 1px solid #ccfbf1;
    border-left: 4px solid $teal;
  }

  &--gray {
    background: linear-gradient(135deg, #f4f5f6 0%, #ffffff 70%);
    border: 1px solid #e5e7ea;
    border-left: 4px solid $black;
  }
}

.pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 0.4rem 0.9rem;
    background: #fff;
    border: 1px solid #ccfbf1;
    border-radius: 999px;
    font-size: 0.9rem;
    font-weight: 500;
    color: $black;
  }
}

/* ---------- Icons ---------- */
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  margin-bottom: 1rem;
  border-radius: 10px;
  color: #0f766e;
  background: #ccfbf1;

  svg {
    width: 22px;
    height: 22px;
  }

  &--gray {
    color: $black;
    background: #e5e7ea;
  }

  &--dark {
    color: $teal-bright;
    background: rgba(45, 212, 191, 0.12);
    border: 1px solid rgba(45, 212, 191, 0.3);
  }
}

/* ---------- Button ---------- */
.btn-light {
  display: inline-block;
  padding: 0.85rem 1.75rem;
  background: $teal-bright;
  color: $ink;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  border-radius: 8px;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(45, 212, 191, 0.4);
  }

  &:focus-visible {
    outline: 3px solid $teal-pulse;
    outline-offset: 3px;
  }

  @media (max-width: 520px) {
    display: block;
  }
}

@media (prefers-reduced-motion: reduce) {
  .venue__circuit .flow {
    animation: none;
  }
  .btn-light {
    transition: none;
    &:hover {
      transform: none;
    }
  }
}
</style>