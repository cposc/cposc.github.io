<script setup>
import { computed, ref } from "vue";
import TopNav from "../2027/sitecontainer/Nav/TopNav.vue"; // same import as the sponsors page; adjust if this file lives elsewhere

const email = "sponsor@localareanetworks.org";
const sponsorsPageUrl = "/sponsors"; // TODO: confirm the route

// Fill these in when you have them. Anything left empty is hidden, not shown blank.
// (An EIN and mailing address are the first things an auditor or lawyer will look for.)
const legal = {
  ein: "", // e.g. "12-3456789"
  address: "", // e.g. "PO Box 000, Lancaster, PA 17601"
  stateOfIncorporation: "", // e.g. "Pennsylvania"
};

const glance = computed(() =>
  [
    { label: "Organization", value: "Local Area Networks (LAN)" },
    { label: "Tax status", value: "501(c)(3) nonprofit organization" },
    { label: "Established", value: "2021" },
    { label: "Primary program", value: "The Central Pennsylvania Open Source Conference (CPOSC), an annual one-day technology conference in Lancaster, PA" },
    { label: "Run by", value: "A volunteer board of directors" },
    legal.ein && { label: "EIN", value: legal.ein },
    legal.stateOfIncorporation && { label: "Incorporated in", value: legal.stateOfIncorporation },
    legal.address && { label: "Mailing address", value: legal.address },
  ].filter(Boolean)
);

const pillars = [
  {
    title: "Strengthening the tech community",
    body: ["We create a welcoming space for technologists to learn, share ideas, and build real connections that support the long-term growth of tech in Central PA and Lancaster."],
  },
  {
    title: "Connecting employers & talent",
    body: [
      "CPOSC is a place where hiring managers, engineers, designers, and early-career technologists meet.",
      "We help employers find great people, and help attendees discover new opportunities.",
    ],
  },
  {
    title: "Free student access",
    body: [
      "Every student should have a path into the tech community.",
      "We offer free student tickets to remove financial barriers and help students meet mentors, employers, and peers.",
    ],
  },
  {
    title: "Economic development",
    body: ["We support a stronger regional tech economy by showcasing local innovation and creating opportunities for companies and professionals to grow."],
  },
];

const stats = [
  { num: "220+", label: "annual participants" },
  { num: "100%", label: "volunteer-run" },
  { num: "Free", label: "student tickets" },
];

const impactList = [
  { lead: "Attendee participation", text: "In recent years, CPOSC has welcomed approximately 220 participants for a full day of learning, networking, and career development." },
  { lead: "Student attendance", text: "Free student tickets expand access for early-career technologists and future leaders." },
  { lead: "Sponsor participation", text: "A broad base of regional sponsors reflects strong community support and creates more opportunities for meaningful interaction between organizations, technologists, and students." },
];

const values = [
  { title: "Access", text: "Everyone belongs here, regardless of background or experience." },
  { title: "Connection", text: "Relationships fuel career growth and community strength." },
  { title: "Inclusion", text: "We welcome diverse perspectives and lived experiences." },
  { title: "Growth", text: "We support learning, progress, and lifelong curiosity." },
  { title: "Community", text: "We build an ecosystem that helps people succeed together." },
];

const measures = [
  "Overall attendee numbers",
  "Student registrations and participation",
  "Sponsor participation and satisfaction",
  "Speaker and attendee feedback",
];

const board = [
  { name: "Joel Walker", initials: "JW", href: "https://www.linkedin.com/in/joeldanielwalker/" },
  { name: "Elyse Ewing", initials: "EE", href: "https://www.linkedin.com/in/elyseewing/" },
  { name: "Ken Richard", initials: "KR", href: "https://www.linkedin.com/in/richardken/" },
  { name: "Emma Wertz", initials: "EW", href: "https://www.linkedin.com/in/emmaliwertz/" },
];

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

  <main class="lan">
    <!-- ================= Hero: the one-sentence answer ================= -->
    <header class="lan-hero">
      <svg class="lan-hero__circuit" viewBox="0 0 600 400" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
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

      <div class="lan-wrap lan-hero__body">
        <p class="lan-hero__badge">501(c)(3) nonprofit organization</p>
        <h1>Local Area Networks</h1>
        <p class="lan-hero__lead">
          Local Area Networks (LAN) is the nonprofit that organizes and operates the
          <strong>Central Pennsylvania Open Source Conference (CPOSC)</strong>, an annual
          technology conference in Lancaster, PA. CPOSC is our primary focus.
        </p>
        <div class="lan-hero__actions">
          <a class="lan-btn lan-btn--light" href="https://cposc.org" target="_blank" rel="noopener"
             aria-label="Visit cposc.org (opens in a new tab)">Visit cposc.org</a>
          <a class="lan-btn lan-btn--ghost" href="#contact">Contact us</a>
        </div>
      </div>
    </header>

    <!-- ================= At a glance ================= -->
    <section class="lan-band" aria-labelledby="glance-title">
      <div class="lan-wrap">
        <h2 id="glance-title" class="lan-title lan-title--teal">Local Area Networks at a glance</h2>

        <dl class="lan-glance">
          <div v-for="g in glance" :key="g.label" class="lan-glance__row">
            <dt>{{ g.label }}</dt>
            <dd>{{ g.value }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <!-- ================= Mission ================= -->
    <section class="lan-band lan-band--blue" aria-labelledby="mission-title">
      <div class="lan-wrap lan-wrap--narrow">
        <h2 id="mission-title" class="lan-mission__label">Our mission</h2>
        <p class="lan-mission__text">
          We support the growth of Central PA’s tech culture and economy by bringing together
          technology professionals, enthusiasts, companies, and students to learn, connect, and
          explore the ideas, relationships, and opportunities that move our region forward.
        </p>
      </div>
    </section>

    <!-- ================= Who we are + What we do ================= -->
    <section class="lan-band" aria-labelledby="what-title">
      <div class="lan-wrap">
        <div class="lan-cols">
          <div>
            <h2 id="what-title" class="lan-title lan-title--maroon">What we do</h2>
            <p>
              Local Area Networks is a 501(c)(3) nonprofit that brings together technology
              professionals from Lancaster and Central PA to connect, learn, and grow. We support a
              thriving regional tech community and create opportunities for both students and
              experienced technologists by fostering connection, education, and entrepreneurship.
            </p>
            <p>
              LAN is governed by a volunteer board of directors, and the conference it runs is
              volunteer-run.
            </p>
          </div>

          <article class="lan-flagship">
            <span class="lan-flagship__badge">Our program</span>
            <h3>CPOSC: Central Pennsylvania Open Source Conference</h3>
            <p>
              LAN operates one flagship program: a one-day event featuring talks, workshops,
              networking, career opportunities, and community building.
            </p>
            <p>
              Our focus is on high-quality content, diverse voices, and meaningful interaction
              between attendees, companies, and students.
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- ================= Why we exist ================= -->
    <section class="lan-band lan-band--tint" aria-labelledby="why-title">
      <div class="lan-wrap">
        <h2 id="why-title" class="lan-title lan-title--teal">Why we exist</h2>
        <p class="lan-lead">Four goals drive everything we do:</p>

        <div class="lan-pillars">
          <article v-for="(p, i) in pillars" :key="p.title" class="lan-pillar" :class="i % 2 ? 'lan-pillar--gray' : 'lan-pillar--blue'">
            <h3>{{ p.title }}</h3>
            <p v-for="(t, j) in p.body" :key="j">{{ t }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- ================= Impact: how funds are used ================= -->
    <section class="lan-band lan-band--blue" aria-labelledby="impact-title">
      <div class="lan-wrap">
        <h2 id="impact-title" class="lan-title lan-title--light">Impact &amp; how funds are used</h2>
        <p class="lan-impact__lead">
          CPOSC delivers large community impact at a comparatively low cost. Because the conference
          is volunteer-run and operates on a grassroots model, funds go almost entirely toward
          high-impact items: student access, venue rental, and meals that make the event welcoming
          and inclusive.
        </p>

        <ul class="lan-stats">
          <li v-for="s in stats" :key="s.label" class="lan-stat">
            <span class="lan-stat__num">{{ s.num }}</span>
            <span class="lan-stat__label">{{ s.label }}</span>
          </li>
        </ul>

        <ul class="lan-impact__list">
          <li v-for="item in impactList" :key="item.lead">
            <strong>{{ item.lead }}:</strong> {{ item.text }}
          </li>
        </ul>
      </div>
    </section>

    <!-- ================= History ================= -->
    <section class="lan-band" aria-labelledby="history-title">
      <div class="lan-wrap">
        <h2 id="history-title" class="lan-title lan-title--maroon lan-title--center">Our history</h2>

        <ol class="lan-timeline">
          <li>
            <h3>2010: The first CPOSC</h3>
            <p>
              The first Central PA Open Source Conference was held in 2010. It has been a
              cornerstone of the regional tech community for more than 16 years.
            </p>
          </li>
          <li>
            <h3>2021: LAN is established</h3>
            <p>
              Local Area Networks was established as a nonprofit to formally steward and grow the
              conference, ensuring its long-term sustainability and expanding support for technology
              professionals and students throughout Central Pennsylvania.
            </p>
          </li>
          <li class="lan-timeline__next">
            <h3>2027: CPOSC's 17th year</h3>
            <p>
              We're planning the next CPOSC for Saturday, April 3rd, 2027, at The Ware Center in
              downtown Lancaster.
            </p>
          </li>
        </ol>
      </div>
    </section>

    <!-- ================= Values + measurement ================= -->
    <section class="lan-band lan-band--tint" aria-labelledby="values-title">
      <div class="lan-wrap">
        <h2 id="values-title" class="lan-title lan-title--teal">Our values</h2>

        <ul class="lan-values">
          <li v-for="v in values" :key="v.title">
            <h3>{{ v.title }}</h3>
            <p>{{ v.text }}</p>
          </li>
        </ul>

        <div class="lan-measure">
          <h3>How we measure success</h3>
          <p>
            We use post-event surveys and participation data to understand our impact and improve
            the conference each year. We track:
          </p>
          <ul class="lan-chips">
            <li v-for="m in measures" :key="m">{{ m }}</li>
          </ul>
          <p>
            These insights help us refine the experience, strengthen the regional tech pipeline, and
            better serve future leaders in Central Pennsylvania.
          </p>
        </div>
      </div>
    </section>

    <!-- ================= Support ================= -->
    <section class="lan-band" aria-labelledby="support-title">
      <div class="lan-wrap">
        <h2 id="support-title" class="lan-title lan-title--maroon lan-title--center">Support the mission</h2>
        <p class="lan-lead lan-lead--center">
          There are several ways to help us strengthen the Central PA tech community:
        </p>

        <div class="lan-support">
          <article class="lan-support__item lan-support__item--blue">
            <h3>Sponsor CPOSC</h3>
            <p>
              Reach hundreds of technologists, hiring managers, students, and industry leaders.
              Sponsors are recognized on our website, event materials, and conference t-shirts, with
              opportunities for additional visibility throughout the event.
            </p>
            <a class="lan-link" :href="sponsorsPageUrl">See sponsorship levels</a>
          </article>
          <article class="lan-support__item lan-support__item--gray">
            <h3>Donate</h3>
            <p>
              Support free student tickets, venue costs, and meals that make the conference
              welcoming and accessible to all.
            </p>
          </article>
          <article class="lan-support__item lan-support__item--blue">
            <h3>Volunteer</h3>
            <p>
              Help shape the conference experience and connect with the community behind the
              scenes.
            </p>
          </article>
        </div>

        <p class="lan-support__note">
          If you're interested in contributing, please reach out. We'd love to work with you.
        </p>
      </div>
    </section>

    <!-- ================= Board ================= -->
    <section class="lan-band lan-band--tint" aria-labelledby="board-title">
      <div class="lan-wrap">
        <h2 id="board-title" class="lan-title lan-title--teal">Board of directors</h2>
        <p class="lan-lead">
          LAN is governed by a volunteer board of directors who are passionate about strengthening
          Central Pennsylvania's tech community.
        </p>

        <ul class="lan-board">
          <li v-for="m in board" :key="m.name">
            <a :href="m.href" target="_blank" rel="noopener noreferrer"
               :aria-label="`${m.name} on LinkedIn (opens in a new tab)`">
              <span class="lan-board__avatar" aria-hidden="true">{{ m.initials }}</span>
              <span class="lan-board__name">{{ m.name }}</span>
              <span class="lan-board__role">Board Member</span>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- ================= Contact ================= -->
    <section id="contact" class="lan-band lan-band--end" aria-labelledby="contact-title">
      <div class="lan-wrap">
        <div class="lan-cta">
          <div>
            <h2 id="contact-title">Contact Local Area Networks</h2>
            <p>Have questions about LAN, CPOSC, or how to get involved?</p>
            <p class="lan-cta__alt">
              No email app? Copy the address and paste it into any email.
              <a :href="`mailto:${email}`">Open in your email app</a>
            </p>
          </div>
          <div class="lan-cta__actions">
            <button type="button" class="lan-btn lan-btn--light" @click="copyEmail">
              <span class="lan-swap">
                <span :class="{ 'lan-swap--off': copied }">Copy {{ email }}</span>
                <span :class="{ 'lan-swap--off': !copied }" aria-hidden="true">Copied!</span>
              </span>
            </button>
            <a class="lan-btn lan-btn--ghost" href="https://cposc.org" target="_blank" rel="noopener"
               aria-label="Visit cposc.org (opens in a new tab)">cposc.org</a>
          </div>
        </div>
      </div>
    </section>

    <span class="lan-sr" role="status" aria-live="polite">{{ copied ? "Email address copied" : "" }}</span>
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

// Every class on this page is prefixed "lan-" so none of the site's global
// card/stat/grid styles can leak in.
.lan {
  color: $gray;
  line-height: 1.7;
  overflow-x: hidden;
}

.lan-wrap {
  width: 100%;
  max-width: 1000px;
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
  font-size: clamp(1.1rem, 3vw, 1.3rem);
  margin-bottom: 0.5rem;
}

p {
  margin: 0 0 1rem;
  text-align: left;
  color: inherit;
}

.lan-sr {
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
.lan-band {
  padding: clamp(2.5rem, 7vw, 4.25rem) 0;

  &--tint {
    background: #f6f7f8;
  }

  &--blue {
    color: #d4e6e9;
    background:
      linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px) 0 0 / 24px 24px,
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px) 0 0 / 24px 24px,
      linear-gradient(135deg, $blue, $blue-deep);
  }

  &--end {
    padding-top: clamp(2rem, 5vw, 3rem);
  }
}

.lan-title {
  font-size: clamp(1.7rem, 5vw, 2.3rem);
  margin-bottom: clamp(1.5rem, 4vw, 2rem);
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
  // On the blue band: solid white instead of a gradient
  &--light {
    color: #fff;
    -webkit-text-fill-color: #fff;
    background: none;
  }
}

.lan-lead {
  font-size: 1.1rem;
  max-width: 60ch;
  margin-bottom: 2rem;

  &--center {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
}

.lan .lan-lead--center {
  text-align: center;
}

/* ---------- Buttons ---------- */
.lan-swap {
  display: inline-grid;
  justify-items: center;

  > span {
    grid-area: 1 / 1;
  }

  &--off {
    visibility: hidden;
  }
}

.lan-btn {
  display: inline-block;
  padding: 0.85rem 1.5rem;
  font: inherit;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  overflow-wrap: anywhere;
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
.lan-hero {
  position: relative;
  overflow: hidden;
  color: #e8eaed;
  padding: clamp(2.75rem, 8vw, 5rem) 0 clamp(2.5rem, 7vw, 4rem);
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

  &__badge {
    display: inline-block;
    margin: 0 0 1rem;
    padding: 0.4rem 0.9rem;
    border: 1px solid rgba(45, 212, 191, 0.35);
    background: rgba(45, 212, 191, 0.1);
    border-radius: 999px;
    font-size: 0.95rem;
    font-weight: 500;
    color: #fff;
  }

  h1 {
    color: #fff;
    font-size: clamp(2.2rem, 7vw, 3.6rem);
    font-weight: 700;
    margin-bottom: 1rem;
    text-wrap: balance;
  }

  &__lead {
    font-size: clamp(1.05rem, 2.5vw, 1.25rem);
    max-width: 46ch;
    margin-bottom: 1.75rem;

    strong {
      color: #fff;
      font-weight: 600;
    }
  }

  &__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;

    @media (max-width: 520px) {
      flex-direction: column;
      align-items: stretch;
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
      animation: lan-flow 4s linear infinite;
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

@keyframes lan-flow {
  from {
    stroke-dashoffset: 100;
  }
  to {
    stroke-dashoffset: 0;
  }
}

/* ---------- At a glance ---------- */
.lan-glance {
  margin: 0;
  background: linear-gradient(135deg, $blue-tint 0%, #ffffff 70%);
  border: 1px solid $blue-line;
  border-left: 4px solid $blue;
  border-radius: 10px;
  padding: clamp(0.5rem, 2vw, 1rem) clamp(1.1rem, 4vw, 2rem);

  &__row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.15rem;
    padding: 0.9rem 0;
    border-bottom: 1px solid $blue-line;

    &:last-child {
      border-bottom: 0;
    }

    @media (min-width: 700px) {
      grid-template-columns: 11rem 1fr;
      gap: 1.5rem;
    }
  }

  dt {
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    color: $blue;
  }

  dd {
    margin: 0;
    color: $black;
  }
}

/* ---------- Mission ---------- */
.lan-mission {
  &__label {
    color: $teal-pulse;
    font-size: 1.05rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  &__text {
    font-family: "Lexend", sans-serif;
    font-size: clamp(1.3rem, 3.6vw, 1.85rem);
    font-weight: 500;
    line-height: 1.5;
    color: #fff;
    margin: 0;
    padding-left: 1.25rem;
    border-left: 4px solid $red;
  }
}

.lan .lan-mission__text {
  color: #fff;
}

/* ---------- What we do ---------- */
.lan-cols {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: start;

  @media (min-width: 860px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
}

.lan-flagship {
  position: relative;
  padding: clamp(1.5rem, 4vw, 2rem);
  border-radius: 12px;
  background: linear-gradient(135deg, $blue-tint 0%, #ffffff 70%);
  border: 1px solid $blue-line;
  border-top: 4px solid $blue;

  &__badge {
    display: inline-block;
    margin-bottom: 0.9rem;
    padding: 0.3rem 0.85rem;
    border-radius: 999px;
    background: $blue;
    color: #fff;
    font-size: 0.85rem;
    font-weight: 600;
  }

  h3 {
    color: $blue;
    font-size: clamp(1.2rem, 3.4vw, 1.5rem);
  }

  p:last-child {
    margin-bottom: 0;
  }
}

/* ---------- Pillars ---------- */
.lan-pillars {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 760px) {
    grid-template-columns: 1fr 1fr;
  }
}

.lan-pillar {
  padding: clamp(1.25rem, 4vw, 1.75rem);
  border-radius: 10px;

  p:last-child {
    margin-bottom: 0;
  }

  &--blue {
    background: linear-gradient(135deg, $blue-tint 0%, #ffffff 70%);
    border: 1px solid $blue-line;
    border-left: 4px solid $blue;
  }

  &--gray {
    background: linear-gradient(135deg, #f4f5f6 0%, #ffffff 70%);
    border: 1px solid $line;
    border-left: 4px solid $black;
  }
}

/* ---------- Impact ---------- */
.lan .lan-impact__lead {
  font-size: 1.1rem;
  max-width: 62ch;
  color: #e3f0f2;
  margin-bottom: 2rem;
}

.lan-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem 1.25rem;
  list-style: none;
  margin: 0 0 2rem;
  padding: 0;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}

.lan-stat {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-top: 1.1rem;
  border-top: 2px solid rgba(94, 234, 212, 0.35);

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
    border: 2.5px solid $blue-deep;
    box-shadow: 0 0 0 1px rgba(239, 51, 64, 0.6), 0 0 10px rgba(239, 51, 64, 0.5);
  }

  &__num {
    font-family: "Lexend", sans-serif;
    font-size: clamp(2rem, 6vw, 2.75rem);
    font-weight: 600;
    line-height: 1;
    color: #fff;
  }

  &__label {
    color: $teal-pulse;
  }
}

.lan-impact__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 1rem;
  max-width: 70ch;

  li {
    position: relative;
    padding-left: 1.5rem;
    color: #d4e6e9;

    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.7rem;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: $teal-pulse;
    }

    strong {
      color: #fff;
      font-weight: 600;
    }
  }
}

/* ---------- History ---------- */
.lan-timeline {
  display: grid;
  gap: 1.75rem;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 0 0 2rem;
  list-style: none;
  position: relative;

  // The trace
  &::before {
    content: "";
    position: absolute;
    left: 7px;
    top: 0.6rem;
    bottom: 0.6rem;
    width: 2px;
    background: rgba(20, 184, 166, 0.35);
  }

  li {
    position: relative;

    // Node on the trace
    &::before {
      content: "";
      position: absolute;
      left: calc(-2rem + 1px);
      top: 0.3rem;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: $red;
      border: 3px solid #fff;
      box-shadow: 0 0 0 1px rgba(239, 51, 64, 0.6);
    }

    p {
      margin: 0;
    }
  }

  li.lan-timeline__next::before {
    background: $teal;
    box-shadow: 0 0 0 1px rgba(20, 184, 166, 0.6), 0 0 10px rgba(20, 184, 166, 0.5);
  }
}

/* ---------- Values ---------- */
.lan-values {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  list-style: none;
  margin: 0 0 3rem;
  padding: 0;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }

  li {
    padding: 1.25rem 1.25rem 0.5rem;
    background: #fff;
    border: 1px solid $line;
    border-top: 3px solid $teal;
    border-radius: 10px;

    p {
      font-size: 0.97rem;
    }
  }
}

.lan-measure {
  max-width: 760px;

  p {
    max-width: 62ch;
  }
}

.lan-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  list-style: none;
  margin: 0 0 1.25rem;
  padding: 0;

  li {
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
    padding: 0.45rem 0.95rem;
    background: #fff;
    border: 1px solid $blue-line;
    border-radius: 999px;
    font-size: 0.95rem;
    color: $blue;

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

/* ---------- Support ---------- */
.lan-support {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }

  &__item {
    display: flex;
    flex-direction: column;
    padding: clamp(1.25rem, 4vw, 1.75rem);
    border-radius: 10px;

    p {
      flex: 1;
    }

    &--blue {
      background: linear-gradient(135deg, $blue-tint 0%, #ffffff 70%);
      border: 1px solid $blue-line;
      border-left: 4px solid $blue;
    }

    &--gray {
      background: linear-gradient(135deg, #f4f5f6 0%, #ffffff 70%);
      border: 1px solid $line;
      border-left: 4px solid $black;
    }
  }

  &__note {
    margin: 1.75rem auto 0;
    max-width: 56ch;
    text-align: center;
  }
}

.lan .lan-support__note {
  text-align: center;
}

.lan-link {
  align-self: flex-start;
  color: $blue;
  font-weight: 600;
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

/* ---------- Board ---------- */
.lan-board {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 760px) {
    grid-template-columns: repeat(2, 1fr);
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.2rem;
    text-align: center;
    text-decoration: none;
    color: $black;
    border-radius: 10px;

    &:visited,
    &:hover {
      color: $black;
    }

    &:focus-visible {
      outline: 3px solid $teal;
      outline-offset: 4px;
    }

    &:hover .lan-board__avatar {
      transform: scale(1.06);
      box-shadow: 0 0 0 3px $teal-pulse, 0 12px 26px -10px rgba(14, 59, 69, 0.6);
    }
  }

  &__avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 92px;
    height: 92px;
    margin-bottom: 0.75rem;
    border-radius: 50%;
    background: linear-gradient(135deg, $blue, $blue-deep);
    color: #fff;
    font-family: "Lexend", sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    box-shadow: 0 0 0 3px #fff, 0 0 0 4px $blue-line;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    @media (max-width: 600px) {
      width: 76px;
      height: 76px;
      font-size: 1.4rem;
    }
  }

  a &__name {
    font-family: "Lexend", sans-serif;
    font-weight: 600;
    color: $black;
  }

  a &__role {
    font-size: 0.9rem;
    color: $gray;
  }
}

/* ---------- Contact ---------- */
.lan-cta {
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
    font-size: clamp(1.4rem, 4vw, 1.9rem);
    margin-bottom: 0.4rem;
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
  .lan-hero__circuit .flow {
    animation: none;
  }
  .lan-btn,
  .lan-board__avatar {
    transition: none;
  }
  .lan-btn--light:hover,
  .lan-board a:hover .lan-board__avatar {
    transform: none;
  }
}
</style>