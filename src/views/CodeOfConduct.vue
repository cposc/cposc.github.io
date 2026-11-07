<script setup>
import { ref } from "vue";
import TopNav from "../2027/sitecontainer/Nav/TopNav.vue"; // same import as the other pages; adjust if this file lives elsewhere

const email = "cposc@localareanetworks.org";
const mailto = `mailto:${email}?subject=${encodeURIComponent("Breach of Conduct")}`;

// mailto: does nothing without an email app, so offer a copy button too.
const copied = ref(false);
let copyTimer;
const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(email);
  } catch {
    const t = document.createElement("textarea");
    t.value = email;
    t.setAttribute("readonly", "");
    t.style.position = "fixed";
    t.style.opacity = "0";
    document.body.appendChild(t);
    t.select();
    try { document.execCommand("copy"); } catch { /* ignore */ }
    document.body.removeChild(t);
  }
  copied.value = true;
  clearTimeout(copyTimer);
  copyTimer = setTimeout(() => (copied.value = false), 2500);
};
</script>

<template>
  <TopNav></TopNav>

  <main class="coc">
    <!-- ================= Hero ================= -->
    <header class="coc-hero">
      <svg class="coc-hero__circuit" viewBox="0 0 600 400" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
        <g fill="none" stroke-linejoin="round">
          <path class="trace" d="M0,300 H180 L230,250 H380 L420,210 H600" />
          <path class="flow" pathLength="100" d="M0,300 H180 L230,250 H380 L420,210 H600" />
          <path class="trace" d="M0,120 H140 L180,160 H320 V340 H600" />
          <path class="flow flow--slow" pathLength="100" d="M0,120 H140 L180,160 H320 V340 H600" />
        </g>
        <circle class="node" cx="230" cy="250" r="5" />
        <circle class="node" cx="420" cy="210" r="5" />
        <circle class="dot" cx="320" cy="340" r="6" />
      </svg>

      <div class="coc-wrap coc-hero__body">
        <h1>Code of Conduct</h1>
        <p class="coc-hero__lead">
          CPOSC is dedicated to providing a harassment-free conference experience for everyone.
          Our Code of Conduct is as follows:
        </p>
      </div>
    </header>

    <!-- ================= Need help? ================= -->
    <section class="coc-band coc-band--help" aria-labelledby="help-title">
      <div class="coc-wrap">
        <h2 id="help-title" class="coc-title coc-title--teal">Need help or want to report something?</h2>

        <div class="coc-help">
          <article class="coc-help__item coc-help__item--blue">
            <h3>At the conference</h3>
            <p>
              Contact a member of conference staff immediately. Staff can be identified by special conference hats.
            </p>
          </article>

          <article class="coc-help__item coc-help__item--blue">
            <h3>By email</h3>
            <p>Email details of a violation to {{ email }}.</p>
            <button type="button" class="coc-btn" @click="copyEmail">
              <span class="coc-swap">
                <span :class="{ 'coc-swap--off': copied }">Copy email address</span>
                <span :class="{ 'coc-swap--off': !copied }" aria-hidden="true">Copied!</span>
              </span>
            </button>
            <a class="coc-link" :href="mailto">Open in your email app</a>
          </article>

          <article class="coc-help__item coc-help__item--maroon">
            <h3>In an emergency</h3>
            <p>If you have a serious emergency, please contact 911.</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ================= The policy ================= -->
    <section class="coc-band" aria-label="Code of Conduct">
      <div class="coc-wrap coc-wrap--narrow coc-policy">
        <section aria-labelledby="commitment-title">
          <h2 id="commitment-title" class="coc-title coc-title--maroon">Our commitment</h2>
          <p>
            We do not tolerate harassment of conference participants – regardless of gender, gender
            identity and expression, sexual orientation, disability, physical appearance, body size,
            race, age or religion – in any form. Sexual language and imagery is not appropriate for
            any conference venue, including talks. Conference participants violating these rules may
            be sanctioned or expelled from the conference without a refund at the discretion of the
            conference organizers.
          </p>
        </section>

        <section aria-labelledby="harassment-title">
          <h2 id="harassment-title" class="coc-title coc-title--maroon">What counts as harassment</h2>
          <p>
            Harassment includes verbal comments that reinforce social structures of domination
            related to gender, gender identity and expression, sexual orientation, disability,
            physical appearance, body size, race, age, religion; sexual images in public spaces;
            deliberate intimidation; stalking; following; harassing photography or recording;
            sustained disruption of talks or other events; inappropriate physical contact; and
            unwelcome sexual attention. Participants asked to stop any harassing behavior are
            expected to comply immediately.
          </p>
        </section>

        <section aria-labelledby="exhibitors-title">
          <h2 id="exhibitors-title" class="coc-title coc-title--maroon">Sponsors, vendors, and exhibitors</h2>
          <p>
            Sponsor or vendor booths, or similar activities are also subject to the anti-harassment
            policy. In particular, exhibitors should not use sexualized images, activities, or other
            material. Booth attendants should not use sexualized clothing/uniforms/costumes, or
            otherwise create a sexualized environment.
          </p>
          <p>
            Exhibitors are also expected to follow all rules and policies set forth by the venue,
            including a strict no-firearms policy.
          </p>
        </section>

        <section aria-labelledby="enforcement-title">
          <h2 id="enforcement-title" class="coc-title coc-title--maroon">If a participant doesn't follow these rules</h2>
          <p>
            If a participant fails to follow any of the above, the conference organizers may take
            any action they deem appropriate, including warning the offender or expulsion from the
            conference with no refund. If you are being harassed, notice that someone else is being
            harassed, or have any other concerns, please contact a member of conference staff
            immediately. Conference staff can be identified by special badges.
          </p>
        </section>

        <section aria-labelledby="where-title">
          <h2 id="where-title" class="coc-title coc-title--maroon">Where this applies</h2>
          <p>
            We expect participants to follow these rules at all conference venues and
            conference-related social events. Conference staff will be happy to help participants
            contact venue security or local law enforcement, provide escorts, or otherwise assist
            those experiencing harassment to feel safe for the duration of the conference. We value
            your attendance.
          </p>
        </section>

        <section aria-labelledby="reporting-title">
          <h2 id="reporting-title" class="coc-title coc-title--maroon">Reporting a violation</h2>
          <p>
            If you encounter a violation of this code of conduct during the conference, please email
            details to <a :href="mailto">{{ email }}</a>. If you have a serious emergency, please
            contact 911.
          </p>
        </section>

        <p class="coc-credit">
          This anti-harassment policy is based on the example policy from the Geek Feminism wiki,
          created by the Ada Initiative and other volunteers.
        </p>
      </div>
    </section>

    <span class="coc-sr" role="status" aria-live="polite">{{ copied ? "Email address copied" : "" }}</span>
  </main>
</template>

<style lang="scss" scoped>
$ink: #0b0c0e;
$black: #1b1d21;
$gray: #4a4e55;
$line: #e5e7ea;
$teal: #14b8a6;
$teal-deep: #0d9488;
$teal-bright: #2dd4bf;
$teal-pulse: #5eead4;
$maroon: #7b1e2b;
$red: #ef3340;
$blue: #134f5c; // prospectus dark blue
$blue-deep: #0e3b45;
$blue-tint: #e9f1f2;
$blue-line: #cddfe3;

// Every class on this page is prefixed "coc-" so none of the site's global
// card/button styles can leak in. Plain element rules (p, h1-h3) are used on
// purpose: they stay lower-specificity than the component classes below.
.coc {
  color: $gray;
  line-height: 1.7;
  overflow-x: hidden;
}

.coc-wrap {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1.25rem;
  box-sizing: border-box;

  &--narrow {
    max-width: 760px;
  }
}

h1,
h2,
h3 {
  font-family: "Lexend", sans-serif;
  margin: 0;
  line-height: 1.2;
}

h3 {
  color: $black;
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  margin-bottom: 0.5rem;
}

p {
  margin: 0 0 1rem;
  text-align: left;
  color: inherit;
}

.coc-sr {
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

/* ---------- Bands + titles ---------- */
.coc-band {
  padding: clamp(2.5rem, 7vw, 4rem) 0;

  &--help {
    background: #f6f7f8;
  }
}

.coc-title {
  font-size: clamp(1.5rem, 4.5vw, 2rem);
  margin-bottom: clamp(1.25rem, 3.5vw, 1.75rem);
  text-wrap: balance;
  width: fit-content;
  max-width: 100%;
  color: $black;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;

  &--teal {
    background-image: linear-gradient(90deg, $black 0%, $teal-deep 100%);
  }
  &--maroon {
    background-image: linear-gradient(90deg, $black 0%, $maroon 100%);
  }
}

/* ---------- Hero ---------- */
.coc-hero {
  position: relative;
  overflow: hidden;
  color: #e8eaed;
  padding: clamp(2.75rem, 8vw, 4.5rem) 0 clamp(2.5rem, 7vw, 3.5rem);
  background:
    linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px) 0 0 / 24px 24px,
    linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px) 0 0 / 24px 24px,
    linear-gradient(135deg, $ink, #1f2226);

  // On phones the nav bar sits over the top of the page, so push the content below it.
  // Set --nav-offset to your nav's height if 4.5rem isn't right.
  @media (max-width: 768px) {
    padding-top: calc(var(--nav-offset, 4.5rem) + 1.5rem);
  }

  &__body {
    position: relative;
    z-index: 1;
  }

  h1 {
    color: #fff;
    font-size: clamp(2.2rem, 7vw, 3.5rem);
    font-weight: 700;
    margin-bottom: 1rem;
    text-wrap: balance;
  }

  &__lead {
    font-size: clamp(1.05rem, 2.5vw, 1.25rem);
    max-width: 46ch;
    margin: 0;
  }

  &__circuit {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    pointer-events: none;

    @media (max-width: 700px) {
      opacity: 0.22;
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
      animation: coc-flow 4s linear infinite;
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

@keyframes coc-flow {
  from {
    stroke-dashoffset: 100;
  }
  to {
    stroke-dashoffset: 0;
  }
}

/* ---------- Need help ---------- */
.coc-help {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 860px) {
    grid-template-columns: repeat(3, 1fr);
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: clamp(1.25rem, 4vw, 1.75rem);
    border-radius: 10px;

    p {
      flex: 1;
      overflow-wrap: anywhere;
    }

    &--blue {
      background: linear-gradient(135deg, $blue-tint 0%, #ffffff 70%);
      border: 1px solid $blue-line;
      border-left: 4px solid $blue;

      h3 {
        color: $blue;
      }
    }

    &--maroon {
      background: linear-gradient(135deg, #f8ecee 0%, #ffffff 70%);
      border: 1px solid #ecd0d4;
      border-left: 4px solid $maroon;

      h3 {
        color: $maroon;
      }
    }
  }
}

.coc-swap {
  display: inline-grid;
  justify-items: center;

  > span {
    grid-area: 1 / 1;
  }

  &--off {
    visibility: hidden;
  }
}

.coc-btn {
  display: inline-block;
  padding: 0.7rem 1.25rem;
  margin-bottom: 0.75rem;
  font: inherit;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(135deg, $blue, $blue-deep);
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(20, 184, 166, 0.35);
  }

  &:focus-visible {
    outline: 3px solid $teal;
    outline-offset: 3px;
  }
}

.coc-link {
  color: $blue;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: underline;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;

  &:hover {
    color: $maroon;
  }

  &:focus-visible {
    outline: 3px solid $teal;
    outline-offset: 3px;
    border-radius: 4px;
  }
}

/* ---------- Policy ---------- */
.coc-policy {
  display: grid;
  gap: clamp(2rem, 5vw, 2.75rem);

  section > p:last-child {
    margin-bottom: 0;
  }

  p a {
    color: $blue;
    font-weight: 600;
    text-underline-offset: 3px;

    &:hover {
      color: $maroon;
    }

    &:focus-visible {
      outline: 3px solid $teal;
      outline-offset: 3px;
      border-radius: 4px;
    }
  }
}

.coc-credit {
  margin: 0;
  padding-top: 1.5rem;
  border-top: 1px solid $line;
  font-size: 0.9rem;
}

@media (prefers-reduced-motion: reduce) {
  .coc-hero__circuit .flow {
    animation: none;
  }
  .coc-btn {
    transition: none;

    &:hover {
      transform: none;
    }
  }
}
</style>