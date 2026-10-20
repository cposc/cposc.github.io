<template>
  <section class="section" id="about">
    <div class="container">
      <h1>Central PA Open Source Conference</h1>
      <div class="event-date">April 3rd, 2027</div>
      <div class="about-content">
        <div class="about-text">
          <p>
            For 17 years, the Central Pennsylvania Open Source
            Conference has been the premier gathering for technologists,
            developers, and digital dreamers. We're ready to celebrate our
            milestones and forge ahead with bold ideas.
          </p>
          <p>
            Whether you're a coding veteran or just starting your journey, CPOSC offers a space where knowledge
            flows freely, connections spark, and every bit of
            learning counts. Join us for a day where open source meets open
            minds and every participant shines bright as a member of our community.
          </p>
        </div>

        <!-- Stats: three nodes on a circuit trace -->
        <div class="metrics" ref="panel">
          <ul class="metrics__list">
            <li v-for="(s, i) in stats" :key="s.label" class="metric">
              <span class="metric__num" aria-hidden="true">{{ shown[i] }}{{ s.suffix }}</span>
              <span class="sr-only">{{ s.value }}{{ s.suffix }}</span>
              <span class="metric__label">{{ s.label }}</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- <div class="highlight-box">
        <h3>
          <i class="fa-solid fa-graduation-cap"></i> Students Attend Free!
        </h3>
        <p>
          We believe in nurturing the next generation of tech stars. Students
          are able to register for a FREE ticket because your future is our
          investment.
        </p>
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const stats = [
  { value: 17, suffix: "", label: "Years Strong" },
  { value: 220, suffix: "+", label: "Attendees" },
  { value: 15, suffix: "+", label: "Speakers" },
];

// Shows the final numbers by default (no-JS, reduced motion, server render).
const shown = ref(stats.map((s) => s.value));
const panel = ref(null);

let observer;
let raf;

// One moment of motion: numbers count up the first time the panel scrolls into view.
const countUp = () => {
  const start = performance.now();
  const duration = 1400;
  const tick = (now) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    shown.value = stats.map((s) => Math.round(s.value * eased));
    if (t < 1) raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
};

onMounted(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce || !("IntersectionObserver" in window) || !panel.value) return;

  shown.value = stats.map(() => 0);
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        countUp();
        observer.disconnect();
      }
    },
    { threshold: 0.4 }
  );
  observer.observe(panel.value);
});

onBeforeUnmount(() => {
  observer?.disconnect();
  cancelAnimationFrame(raf);
});
</script>

<style lang="scss" scoped>
$ink: #0b0c0e;
$teal: #2dd4bf;
$teal-pulse: #5eead4;
$red: #ef3340;

.highlight-box h3 {
  margin-top: 0;
}
.about-content {
  @media screen and (max-width: 1290px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }
}
h1 {
  font-family: "Lexend", sans-serif !important;
  font-size: 52px;
  margin-bottom: 2px;
}
.event-date {
  font-family: "Lexend", sans-serif !important;
  font-size: 18px;
  color: #0d9488;
  margin-bottom: 1rem;
  padding: 8px 24px;
  background-color: #e0f2f1;
  border-radius: 10px;
  border: 1px solid #0d9488;
  width: fit-content;
}

/* ---------- Stats panel ---------- */
.metrics {
  --num: clamp(2.5rem, 6vw, 3.25rem);

  position: relative;
  box-sizing: border-box; // padding + border stay inside the 100% width
  width: 100%;
  min-width: 0;
  max-width: min(440px, 100%);
  margin: 0 auto;
  padding: clamp(1.5rem, 4vw, 2rem);
  text-align: left;
  color: #e8eaed;
  border-radius: 14px;
  border: 1px solid #2a2d32;
  background:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px) 0 0 / 24px 24px,
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px) 0 0 / 24px 24px,
    linear-gradient(135deg, $ink, #1f2226);
  box-shadow: 0 18px 40px -20px rgba(11, 12, 14, 0.6);

  // Red corner bracket, like the banner
  &::before {
    content: "";
    position: absolute;
    top: 12px;
    right: 12px;
    width: 22px;
    height: 22px;
    border-top: 3px solid $red;
    border-right: 3px solid $red;
    border-top-right-radius: 6px;
  }

  &__list {
    position: relative;
    display: grid;
    gap: 1.75rem;
    margin: 0;
    padding: 0 0 0 2.25rem;
    list-style: none;

    // The trace
    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 7px;
      top: calc(var(--num) / 2);
      bottom: calc(var(--num) / 2);
      width: 2px;
      border-radius: 2px;
    }

    &::before {
      background: rgba(45, 212, 191, 0.28);
    }

    // The current running along it
    &::after {
      background: linear-gradient(180deg, transparent, $teal-pulse, transparent) 0 -100% / 100% 40% no-repeat;
      animation: run-v 3.2s linear infinite;
    }
  }
}

.metric {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  // Node on the trace
  &::before {
    content: "";
    position: absolute;
    left: calc(-2.25rem + 1px);
    top: calc(var(--num) / 2 - 7px);
    box-sizing: border-box;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: $red;
    border: 3px solid $ink;
    box-shadow: 0 0 0 1px rgba(239, 51, 64, 0.6), 0 0 12px rgba(239, 51, 64, 0.55);
  }

  &__num {
    font-family: "Lexend", sans-serif;
    font-size: var(--num);
    font-weight: 600;
    line-height: 1;
    color: #fff;
    font-variant-numeric: tabular-nums;
  }

  &__label {
    font-size: 1rem;
    color: #aeb4bb;
  }
}

@keyframes run-v {
  to {
    background-position: 0 200%;
  }
}

@keyframes run-h {
  to {
    background-position: 200% 0;
  }
}

// Tablet widths: lay the three nodes out left to right
@media (min-width: 560px) and (max-width: 1290px) {
  .metrics {
    max-width: min(640px, 100%);

    &__list {
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      padding: 2.25rem 0 0;

      &::before,
      &::after {
        left: 7px;
        right: 0;
        top: 7px;
        bottom: auto;
        width: auto;
        height: 2px;
      }

      &::after {
        background: linear-gradient(90deg, transparent, $teal-pulse, transparent) -100% 0 / 40% 100% no-repeat;
        animation-name: run-h;
      }
    }
  }

  .metric::before {
    left: 0;
    top: calc(-2.25rem + 1px);
  }
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

@media (prefers-reduced-motion: reduce) {
  .metrics__list::after {
    animation: none;
    display: none;
  }
}
</style>