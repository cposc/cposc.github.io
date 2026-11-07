<script setup>
import { ref } from "vue";
import TopNav from "../sitecontainer/Nav/TopNav.vue";
import SponsorCarousel from "./SponsorCarousel.vue"; // keep this file next to SponsorsPage.vue, or adjust the path

const prospectusUrl = "/CPOSC_2027_Sponsorship_Prospectus.pdf";
const email = "sponsor@localareanetworks.org";

// mailto: does nothing without an email app, so offer a copy button too.
const copied = ref(null); // which button was used, so only that one says "Copied"
let copyTimer;
const copyEmail = async (where) => {
  try {
    await navigator.clipboard.writeText(email);
  } catch {
    // Older browsers / non-secure pages
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
  copied.value = where;
  clearTimeout(copyTimer);
  copyTimer = setTimeout(() => (copied.value = null), 2500);
};

const stats = [
  { num: "17th", label: "year in 2027" },
  { num: "220+", label: "attendees each year" },
  { num: "1", label: "day of technical talks" },
  { num: "100%", label: "volunteer-run" },
];

const attendees = [
  "Senior developers and architects evaluating new technologies",
  "System and network administrators and DevOps engineers",
  "Entrepreneurs running their own businesses",
  "Students",
  "Educators teaching the next generation of technologists",
];

const why = [
  { title: "Hiring", text: "Meet skilled professionals in a relaxed setting. Many attendees are open to new opportunities." },
  { title: "Visibility", text: "Show that your organization supports open source and the tech community in this region." },
  { title: "Community support", text: "Your sponsorship helps pay for student discounts and speaker travel, and keeps the conference affordable." },
  { title: "Recognition", text: "We recognize sponsors on our website and social media throughout the year, not only on the day of the event." },
];

// The last tier is shown as the featured column.
const tiers = [
  { name: "Community Partner", price: "$500" },
  { name: "Silver", price: "$1,000" },
  { name: "Gold", price: "$2,000" },
  { name: "Platinum", price: "$5,000" },
];

// true = included, false = not included, string/number = shown as written
const benefits = [
  { label: "Conference T-shirt feature", values: ["Small name", "Large name", "Name & logo", "Most prominent name & logo"] },
  { label: "Logo on website", values: [true, true, true, true] },
  { label: "Logo on conference materials (i.e. the schedule)", values: [false, true, true, true] },
  { label: "Company info and promotional material posted in high-traffic areas", values: [false, false, true, true] },
  { label: "Special mention during open/closing remarks", values: [false, false, true, true] },
  { label: "Conference tickets included", values: [1, 2, 4, 10] },
];

// What each tier includes, for the stacked mobile cards.
const includes = (i) =>
  benefits
    .filter((b) => b.values[i] !== false)
    .map((b) => (b.values[i] === true ? b.label : `${b.label}: ${b.values[i]}`));

const details = [
  {
    title: "Door prizes and swag",
    body: [
      `In addition to the sponsor levels listed above, we can also help you distribute promotional items or swag, whether as door prizes or handed out to all interested attendees. If you'd like to contribute any of these items, please contact ${email} for details.`,
    ],
  },
  {
    title: "Company logo and description",
    body: [
      `Please submit a logo, as well as a brief description of your company OR product and any relevant links (website, careers, etc.) to ${email}.`,
      "Logos should be in a scalable format such as PDF with fonts outlined, or TIFF/JPEG raster file (300 ppi). When shown on the conference website, logos will be displayed on a white background.",
    ],
  },
  {
    title: "Payment",
    body: [
      `Payment can be made by PayPal, check, Stripe, or bank transfer. Please reach out to ${email} to discuss payments and invoicing.`,
      "CPOSC is a volunteer and community-driven event. We are currently registered with the IRS as a 501(c)(3) tax-deductible nonprofit charity. Your contributions to CPOSC are tax deductible.",
    ],
  },
  {
    title: "Attendee privacy",
    body: [
      "We respect the privacy of our attendees and have agreed to not provide lists of attendee names or email addresses to third parties. If you would like to collect email addresses from conference attendees, you are encouraged to provide some way for them to opt-in to your mailing list such as a sign-up sheet.",
    ],
  },
];
</script>

<template>
  <TopNav></TopNav>

  <main class="page">
    <!-- ================= Hero ================= -->
    <header class="hero">
      <svg class="hero__circuit" viewBox="0 0 600 400" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
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

      <div class="wrap hero__body">
        <h1>Sponsor CPOSC 2027</h1>
        <p class="hero__lead">
          A one-day technical conference for open source users, developers, and students.
        </p>

        <ul class="hero__facts">
          <li>Saturday, April 3rd, 2027</li>
          <li>The Ware Center, Downtown Lancaster, PA</li>
        </ul>

        <div class="hero__actions">
          <a class="btn btn--light" :href="prospectusUrl" target="_blank" rel="noopener"
             aria-label="Download the sponsorship prospectus (PDF, opens in a new tab)">
            Download the prospectus (PDF)
          </a>
          <button type="button" class="btn btn--ghost" @click="copyEmail('hero')">
            <span class="swap">
              <span :class="{ 'swap--off': copied === 'hero' }">Copy {{ email }}</span>
              <span :class="{ 'swap--off': copied !== 'hero' }" aria-hidden="true">Copied!</span>
            </span>
          </button>
        </div>
        <p class="hero__alt">
          Prefer email? <a :href="`mailto:${email}`">Open it in your email app</a>.
        </p>

        <ul class="hero-stats">
          <li v-for="s in stats" :key="s.label" class="hero-stat">
            <span class="hero-stat__num">{{ s.num }}</span>
            <span class="hero-stat__label">{{ s.label }}</span>
          </li>
        </ul>
      </div>
    </header>

    <!-- ================= About ================= -->
    <section class="band" aria-labelledby="about-title">
      <div class="wrap">
        <h2 id="about-title" class="title title--teal">A place to connect</h2>

        <div class="cols">
          <div>
            <h3>The mission</h3>
            <p>
              2027 is our 17th year. CPOSC gives technologists in central Pennsylvania and beyond
              a place to meet each other and get more involved in their local community.
            </p>
            <p>
              Along with the talks, attendees can network and explore shared interests in our
              retro hardware room and speaker showcase area.
            </p>
          </div>
          <div>
            <h3>What to expect</h3>
            <p>
              Sessions cover all aspects of open source, from novice to expert level. Speakers
              share what they have learned from professional and personal projects.
            </p>
            <p>CPOSC is run entirely by volunteers.</p>
          </div>
        </div>

        <h3 class="attend-title">Who attends</h3>
        <p class="attend-lead">
          We regularly have 220+ attendees each year, and we expect that number to grow. They include:
        </p>
        <ul class="chips">
          <li v-for="a in attendees" :key="a">{{ a }}</li>
        </ul>
      </div>
    </section>

    <!-- ================= Why sponsor ================= -->
    <section class="band band--tint" aria-labelledby="why-title">
      <div class="wrap">
        <h2 id="why-title" class="title title--maroon title--center">Why sponsor CPOSC</h2>
        <p class="lead lead--center">
          Sponsorship pays for the conference and gives your organization a way to reach the local tech community.
        </p>

        <div class="why">
          <article v-for="(w, i) in why" :key="w.title" class="why__item" :class="i % 2 ? 'why__item--gray' : 'why__item--teal'">
            <h3>{{ w.title }}</h3>
            <p>{{ w.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ================= Levels ================= -->
    <section class="band" aria-labelledby="levels-title">
      <div class="wrap">
        <h2 id="levels-title" class="title title--teal">Levels and benefits</h2>

        <!-- Desktop / tablet: comparison table -->
        <div class="levels-table">
          <table>
            <caption class="sr-only">Sponsorship levels and what each includes</caption>
            <thead>
              <tr>
                <td></td>
                <th v-for="(t, i) in tiers" :key="t.name" scope="col" :class="{ 'is-top': i === tiers.length - 1 }">
                  <span class="tier__name">{{ t.name }}</span>
                  <span class="tier__price">{{ t.price }}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="b in benefits" :key="b.label">
                <th scope="row">{{ b.label }}</th>
                <td v-for="(v, i) in b.values" :key="i" :class="{ 'is-top': i === tiers.length - 1 }">
                  <template v-if="v === true">
                    <svg class="check" viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
                    <span class="sr-only">Included</span>
                  </template>
                  <template v-else-if="v === false">
                    <span aria-hidden="true">–</span><span class="sr-only">Not included</span>
                  </template>
                  <template v-else>{{ v }}</template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Phones: one card per level -->
        <div class="levels-cards">
          <article v-for="(t, i) in tiers" :key="t.name" class="level" :class="{ 'level--top': i === tiers.length - 1 }">
            <header>
              <h3>{{ t.name }}</h3>
              <span class="tier__price">{{ t.price }}</span>
            </header>
            <ul>
              <li v-for="item in includes(i)" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- ================= Sponsors ================= -->
    <section class="band band--tint" aria-labelledby="sponsors-title">
      <div class="wrap">
        <h2 id="sponsors-title" class="title title--maroon title--center">Our sponsors</h2>
        <p class="lead lead--center">The organizations that make this conference possible</p>

        <SponsorCarousel />

        <p class="sponsors-note">
          These are last year's sponsors. We'll update this with our 2027 sponsors once we have them.
        </p>
      </div>
    </section>

    <!-- ================= What to know ================= -->
    <section class="band" aria-labelledby="know-title">
      <div class="wrap wrap--narrow">
        <h2 id="know-title" class="title title--teal">What to know</h2>

        <div class="know">
          <details v-for="d in details" :key="d.title" class="know__item">
            <summary>{{ d.title }}</summary>
            <div class="know__body">
              <p v-for="(p, i) in d.body" :key="i">{{ p }}</p>
            </div>
          </details>
        </div>
      </div>
    </section>

    <!-- ================= CTA ================= -->
    <section class="band band--cta" aria-labelledby="cta-title">
      <div class="wrap">
        <div class="cta">
          <div>
            <h2 id="cta-title">Sponsor CPOSC 2027</h2>
            <p>Saturday, April 3rd, 2027 · The Ware Center</p>
            <p class="cta__alt">
              No email app? Copy the address and paste it into any email.
              <a :href="`mailto:${email}`">Open in your email app</a>
            </p>
          </div>
          <div class="cta__actions">
            <button type="button" class="btn btn--light" @click="copyEmail('cta')">
              <span class="swap">
              <span :class="{ 'swap--off': copied === 'cta' }">Copy {{ email }}</span>
              <span :class="{ 'swap--off': copied !== 'cta' }" aria-hidden="true">Copied!</span>
            </span>
            </button>
            <a class="btn btn--ghost" :href="prospectusUrl" target="_blank" rel="noopener"
               aria-label="Download the sponsorship prospectus (PDF, opens in a new tab)">
              Download the prospectus
            </a>
          </div>
        </div>
      </div>
    </section>

    <span class="sr-only" role="status" aria-live="polite">{{ copied ? "Email address copied" : "" }}</span>
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
$blue: #134f5c; // prospectus dark blue
$blue-deep: #0e3b45;
$blue-tint: #e9f1f2;
$red: #ef3340;

.page {
  color: $gray;
  line-height: 1.6;
}

.wrap {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.25rem;
  box-sizing: border-box;

  &--narrow {
    max-width: 820px;
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
  font-size: clamp(1.15rem, 3vw, 1.35rem);
  margin-bottom: 0.5rem;
}

p {
  margin: 0 0 1rem;
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

/* ---------- Shared: bands, titles, buttons ---------- */
.band {
  padding: clamp(2.5rem, 7vw, 4.5rem) 0;

  &--tint {
    background: #f6f7f8;
  }
}

.title {
  font-size: clamp(1.75rem, 5vw, 2.4rem);
  margin-bottom: 1.5rem;
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
  &--center {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
}

.lead {
  font-size: 1.1rem;
  max-width: 56ch;
  margin-bottom: 2rem;

  &--center {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    text-wrap: balance;
  }
}

// Both labels share one grid cell, so the button keeps the width of the longer
// one and the layout around it doesn't shift when the label changes.
.swap {
  display: inline-grid;
  justify-items: center;

  > span {
    grid-area: 1 / 1;
  }

  &--off {
    visibility: hidden;
  }
}

.btn {
  display: inline-block;
  padding: 0.85rem 1.5rem;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  border-radius: 8px;
  overflow-wrap: anywhere;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;

  &:focus-visible {
    outline: 3px solid $teal-pulse;
    outline-offset: 3px;
  }

  &--light {
    background: $teal-bright;
    color: $ink;
    border: 0;

    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 18px rgba(45, 212, 191, 0.4);
    }
  }

  &--ghost {
    background: transparent;
    color: #fff;
    border: 1.5px solid rgba(255, 255, 255, 0.45);

    &:hover {
      border-color: $red;
    }
  }
}

/* ---------- Hero ---------- */
.hero {
  position: relative;
  overflow: hidden;
  color: #e8eaed;
  padding: clamp(2.5rem, 7vw, 4.5rem) 0 clamp(2rem, 5vw, 3rem);
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
    font-size: clamp(2.2rem, 7vw, 3.75rem);
    font-weight: 700;
    margin-bottom: 0.75rem;
    text-wrap: balance;
  }

  &__lead {
    font-size: clamp(1.05rem, 2.5vw, 1.25rem);
    max-width: 38ch;
    margin-bottom: 1.5rem;
  }

  &__facts {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    list-style: none;
    margin: 0 0 1.75rem;
    padding: 0;

    li {
      padding: 0.4rem 0.9rem;
      border: 1px solid rgba(45, 212, 191, 0.35);
      background: rgba(45, 212, 191, 0.1);
      border-radius: 999px;
      font-size: 0.95rem;
      color: #fff;
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 0.85rem;

    @media (max-width: 520px) {
      flex-direction: column;
      align-items: stretch;
    }
  }

  &__alt {
    margin: 0 0 clamp(2rem, 6vw, 3.5rem);
    font-size: 0.9rem;
    color: #aeb4bb;

    a {
      color: $teal-pulse;
      text-decoration: underline;
      text-underline-offset: 3px;

      &:hover {
        color: #fff;
      }
    }
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

.hero-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem 1.25rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.hero-stat {
  position: relative;
  background: none;
  box-shadow: none;
  border-radius: 0;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-top: 1.1rem;
  border-top: 2px solid rgba(45, 212, 191, 0.3);

  // Node on the trace
  &::before {
    content: "";
    position: absolute;
    top: -7px;
    left: 0;
    box-sizing: border-box;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: $red;
    border: 2.5px solid $ink;
    box-shadow: 0 0 0 1px rgba(239, 51, 64, 0.6), 0 0 10px rgba(239, 51, 64, 0.5);
  }

  &__num {
    font-family: "Lexend", sans-serif;
    font-size: clamp(1.75rem, 5vw, 2.5rem);
    font-weight: 600;
    line-height: 1;
    color: #fff;
  }

  &__label {
    font-size: 0.95rem;
    color: #aeb4bb;
  }
}

/* ---------- About ---------- */
.cols {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem 3rem;
  margin-bottom: 1.5rem;

  @media (min-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }

  p {
    max-width: 60ch;
  }
}

.attend-title {
  margin-top: 1rem;
}

.attend-lead {
  max-width: 60ch;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    padding: 0.45rem 0.95rem;
    background: #fff;
    border: 1px solid $line;
    border-radius: 999px;
    font-size: 0.95rem;
    color: $black;

    &::before {
      content: "";
      flex: none;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: $teal;
    }
  }
}

/* ---------- Why ---------- */
.why {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }

  &__item {
    padding: clamp(1.25rem, 4vw, 1.75rem);
    border-radius: 10px;

    p {
      margin: 0;
    }

    &--teal {
      background: linear-gradient(135deg, #f0fdfa 0%, #ffffff 70%);
      border: 1px solid #ccfbf1;
      border-left: 4px solid $teal;
    }

    &--gray {
      background: linear-gradient(135deg, #f4f5f6 0%, #ffffff 70%);
      border: 1px solid $line;
      border-left: 4px solid $black;
    }
  }
}

/* ---------- Levels: table (wide) ---------- */
.levels-table {
  display: none;

  @media (min-width: 760px) {
    display: block;
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    font-size: 0.95rem;
  }

  th,
  td {
    padding: 0.85rem 0.75rem;
    text-align: center;
    border-bottom: 1px solid $line;
    color: $black;
  }

  tbody th {
    text-align: left;
    font-weight: 500;
    width: 34%;
  }

  thead th {
    vertical-align: bottom;
    border-bottom: 2px solid $blue;
    padding-bottom: 1rem;
  }

  .tier__name {
    display: block;
    font-size: 0.95rem;
    font-weight: 600;
    color: $blue;
  }

  .tier__price {
    display: block;
    margin-top: 0.15rem;
    font-family: "Lexend", sans-serif;
    font-size: 1.45rem;
    font-weight: 600;
    color: $blue;
  }

  .check {
    width: 18px;
    height: 18px;
    color: $teal-deep;
    vertical-align: middle;
  }

  // Featured (top-level) column
  .is-top {
    background: $blue;
    color: #fff;
    border-bottom-color: rgba(255, 255, 255, 0.14);

    .tier__name {
      color: #cfe3e6;
    }
    .tier__price,
    .check {
      color: $teal-pulse; // light teal as the highlight on the blue
    }
  }

  thead .is-top {
    border-radius: 12px 12px 0 0;
    border-top: 3px solid $red;
  }

  tbody tr:last-child .is-top {
    border-radius: 0 0 12px 12px;
    border-bottom: 0;
  }
}

/* ---------- Levels: cards (phones) ---------- */
.levels-cards {
  display: grid;
  gap: 1rem;

  @media (min-width: 760px) {
    display: none;
  }
}

.level {
  padding: 1.25rem;
  border: 1px solid $line;
  border-left: 4px solid $blue;
  border-radius: 10px;
  background: #fff;

  header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }

  h3 {
    margin: 0;
  }

  .tier__price {
    font-family: "Lexend", sans-serif;
    font-size: 1.35rem;
    font-weight: 600;
    color: $blue;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    position: relative;
    padding: 0.35rem 0 0.35rem 1.4rem;
    color: $black;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.95rem;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: $teal;
    }
  }

  &--top {
    background: $blue;
    border-color: $blue-deep;
    border-left-color: $red;

    h3,
    li {
      color: #fff;
    }
    li::before {
      background: $teal-pulse;
    }
    .tier__price {
      color: $teal-pulse;
    }
  }
}

.sponsors-note {
  margin: 1.25rem auto 0;
  max-width: 56ch;
  text-align: center;
  font-size: 0.95rem;
}

/* ---------- What to know ---------- */
.know {
  display: grid;
  gap: 0.75rem;

  &__item {
    background: #f6f7f8;
    border: 1px solid $line;
    border-left: 4px solid $maroon;
    border-radius: 10px;

    summary {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      padding: 1rem 1.25rem;
      font-family: "Lexend", sans-serif;
      font-weight: 600;
      color: $black;
      cursor: pointer;
      list-style: none;

      &::-webkit-details-marker {
        display: none;
      }

      // Plus turns into minus
      &::after {
        content: "+";
        flex: none;
        font-size: 1.5rem;
        line-height: 1;
        color: $maroon;
      }

      &:focus-visible {
        outline: 3px solid $teal;
        outline-offset: 2px;
        border-radius: 8px;
      }
    }

    &[open] summary::after {
      content: "–";
    }
  }

  &__body {
    padding: 0 1.25rem 0.5rem;

    p {
      max-width: 62ch;
    }
  }
}

/* ---------- CTA ---------- */
.band--cta {
  padding-top: clamp(2rem, 5vw, 3rem);
}

.cta {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: clamp(1.75rem, 5vw, 2.5rem);
  border-radius: 14px;
  border: 1px solid $blue-deep;
  color: #d4e6e9;
  background:
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px) 0 0 / 24px 24px,
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px) 0 0 / 24px 24px,
    linear-gradient(135deg, $blue, $blue-deep);

  // Red corner bracket, like the banner
  &::before {
    content: "";
    position: absolute;
    top: 12px;
    left: 12px;
    width: 22px;
    height: 22px;
    border-top: 3px solid $red;
    border-left: 3px solid $red;
    border-top-left-radius: 6px;
  }

  h2 {
    color: #fff;
    font-size: clamp(1.5rem, 4vw, 2rem);
    margin-bottom: 0.35rem;
  }

  p {
    margin: 0;
  }

  &__alt {
    margin-top: 0.6rem;
    font-size: 0.9rem;
    max-width: 44ch;

    a {
      color: $teal-pulse;
      text-decoration: underline;
      text-underline-offset: 3px;

      &:hover {
        color: #fff;
      }
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;

    @media (max-width: 520px) {
      flex-direction: column;
      align-items: stretch;
      width: 100%;
    }
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__circuit .flow {
    animation: none;
  }
  .btn {
    transition: none;

    &--light:hover {
      transform: none;
    }
  }
}
</style>