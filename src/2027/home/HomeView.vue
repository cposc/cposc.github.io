<script setup>
import HeaderBanner from "./HeaderBanner/HeaderBanner.vue";
import TopNav from "../sitecontainer/Nav/TopNav.vue";

import AboutUs from "./AboutUs.vue";
// import SpeakerHighlight from "./highlights/SpeakersHighlight.vue";
import ScheduleHighlight from "./highlights/ScheduleHighlight.vue";
import SponsorHighlight from "./highlights/SponsorHighlight.vue";
import TravelHighlight from "./highlights/TravelHighlight.vue";
// import VolunteerHighlight from "./highlights/VolunteerHighlight.vue";
// import RegistrationCTA from "./RegistrationCTA.vue";

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards
document.querySelectorAll(".card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});
</script>

<template>
  <TopNav />
  <HeaderBanner />
  <!-- <h3>Where bits meet brilliance and bytes build community</h3> -->

  <!-- Main Content -->
  <div class="main-content">
    <AboutUs />
    <!-- <SpeakerHighlight /> -->
    <SponsorHighlight />
    <ScheduleHighlight />
    <TravelHighlight />
    <!-- <VolunteerHighlight /> -->
    <!-- <RegistrationCTA /> -->
  </div>
</template>

<style lang="scss">
* {
  font-family: "Lexend", sans-serif;
}

h2 {
  font-size: 45px;
}

h3 {
  font-size: 35px;
}

.main-content {
  line-height: 1.6;
  color: #333;
  background: linear-gradient(135deg, #2d1b69 0%, #11998e 100%);
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.cta-button {
  display: inline-block;
  background: linear-gradient(45deg, #11998e, #7dd3fc);
  color: white;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(94, 234, 212, 0.3);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(94, 234, 212, 0.4);
}

/* Alternate: black to red, for a stronger call to action */
.btn-accent {
  background: linear-gradient(135deg, #1b1d21, #c81e2d);
  color: #fff;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: box-shadow .2s, transform .2s;
}
.btn-accent:hover {
  box-shadow: 0 6px 18px rgba(239, 51, 64, .35);
  transform: translateY(-1px);
}

/* Secondary: outline only */
.btn-secondary {
  background: #fff;
  color: #1b1d21;
  border: 1.5px solid #1b1d21;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}
.btn-secondary:hover { border-color: #0d9488; color: #0d9488; }

/* Main Content */
.main-content {
  background: white;
  border-radius: 20px 20px 0 0;
  position: relative;
  z-index: 2;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.1);
}

/* Section Styles */
.section {
  padding: 40px 0;
  border-bottom: 1px solid #f0f0f0;
}

.section:first-child {
  padding-top: 1rem;
}

.section:last-child {
  border-bottom: none;
}

.section h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #1b1d21, #0d9488);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 3rem;
}

.card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #1b1d21, #14b8a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.card p {
  color: #666;
  margin-bottom: 1rem;
}

.card-link {
  color: #0f766e;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.card-link:hover {
  color: #5eead4;
}

/* About Section */
.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.about-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: center;
}

.stat {
  background: linear-gradient(135deg, #f8fafc, #f1f1f2);
  padding: 30px 20px;
  border-radius: 15px;
  border: 2px solid transparent;
  background-clip: padding-box;
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  background: linear-gradient(45deg, #1b1d21, #14b8a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  color: #666;
  font-weight: 500;
  margin-top: 10px;
}

/* Highlight boxes */
.highlight-box {
  background: linear-gradient(
    135deg,
    rgba(125, 211, 252, 0.1),
    rgba(167, 139, 250, 0.1)
  );
  border: 2px solid rgba(125, 211, 252, 0.3);
  border-radius: 15px;
  padding: 30px;
  margin: 30px 0;
  text-align: center;
}

.highlight-box h3 {
  color: #2d1b69;
  margin-bottom: 15px;
}

/* Teal tint (default highlight) */
.highlight-teal {
  background: linear-gradient(135deg, #f0fdfa 0%, #f8fffd 70%);
  border: 2px solid #0d9488;
  // border-left: 4px solid #14b8a6;
  border-radius: 10px;
  margin: 30px 0;
  text-align: center;

  .highlight-box h3 {
    color: #0d9488;
    margin-bottom: 15px;
  }
}

/* Red tint (warnings or key callouts) */
.highlight-red {
  background: linear-gradient(135deg, #fff1f2 0%, #ffffff 70%);
  border: 1px solid #ffe4e6;
  border-left: 4px solid #ef3340;
  border-radius: 10px;
  padding: 20px 24px;
}

/* Neutral gray tint (quiet emphasis) */
.highlight-gray {
  background: linear-gradient(135deg, #f4f5f6 0%, #ffffff 70%);
  border: 1px solid #e5e7ea;
  border-left: 4px solid #1b1d21;
  border-radius: 10px;
  padding: 20px 24px;
}

/* Footer */
.footer {
  background: #1b1c1c;
  color: white;
  padding: 50px 0;
  text-align: center;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer h4 {
  color: #2dd4bf;
  margin-bottom: 15px;
}

.footer a {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer a:hover {
  color: #5eead4;
}

/* Responsive */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  .about-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  .stats {
    grid-template-columns: 1fr;
    width: 100%;

    .stat {
      width: calc(100% - 40px);
    }
  }
  .section {
    padding: 50px 0;
  }
}
</style>
