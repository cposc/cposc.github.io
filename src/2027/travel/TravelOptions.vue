<script setup>
import TopNav from "../sitecontainer/Nav/TopNav.vue";
</script>

<template>
  <TopNav></TopNav>
  <div class="logistics">
    <section id="travel">
      <div class="container">
        <h1>CPOSC 2027</h1>
        <h2>Travel & Accommodation</h2>
        <div class="info-box">
          <p>
            <strong>Coming Soon!</strong> We're currently planning the 2027
            event and will announce venue, date, and travel information in early
            2027.
          </p>
        </div>
        <div class="grid">
          <div class="card">
            <div>
              <h3>Venue Information</h3>
              <p>
                Details about our 2027 conference venue will be announced soon.
                We're securing a great location to host our 17th annual event!
              </p>
            </div>
          </div>
          <div class="card">
            <div>
              <h3>Hotel Options</h3>
              <p>
                Once we confirm our venue and date, we'll provide a curated list
                of nearby hotels and accommodations for those traveling to
                CPOSC.
              </p>
            </div>
          </div>
          <div class="card">
            <div>
              <h3>Parking & Transportation</h3>
              <p>
                Information about parking, public transportation, and travel
                options will be available when we finalize our venue details.
              </p>
            </div>
          </div>
        </div>

        <div class="faq-section">
          <h2>Frequently Asked Questions</h2>
          <div class="faq-item">
            <h4>When will the 2027 event details be announced?</h4>
            <p>Look for announcements in early 2027!</p>
          </div>
          <div class="faq-item">
            <h4>Where is CPOSC normally held?</h4>
            <p>
              Historically, CPOSC has been held in Lancaster, PA. We're
              exploring venue options for 2027.
            </p>
          </div>
          <div class="faq-item">
            <h4>How can I stay updated?</h4>
            <p>
              Follow us on
              <a href="https://www.linkedin.com/company/central-pa-open-source-conference" target="_blank">LinkedIn</a> or
              <a href="https://mastodon.social/@cposc" target="_blank">Mastodon</a> for the latest
              announcements!
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.logistics {
  font-family: "Lexend", sans-serif;
  line-height: 1.6;
  color: #333;
  background: #ffffff;
  padding: 0rem 20px;
}

section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
}

.container {
  max-width: 100%;
}

section h1 {
  font-size: 1.5rem;
  text-align: center;
  padding: 1.5rem 0 0 0;
  margin: 0;
}

section h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  background: linear-gradient(45deg, #2d1b69, #11998e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-top: 0;
}

.info-box {
  background: linear-gradient(
    135deg,
    rgba(125, 211, 252, 0.1),
    rgba(167, 139, 250, 0.1)
  );
  border: 2px solid rgba(125, 211, 252, 0.3);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  margin-bottom: 30px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.card {
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #2d1b69, #11998e);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
  }
}

.faq-section {
  margin-top: 40px;
  padding: 30px;
  background: #f5f5f5;
  border-radius: 8px;

  h2 {
    margin-top: 0;
  }
}

.faq-item {
  background: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  border-left: 4px solid #11998e;

  h4 {
    margin-top: 0;
    color: #2d1b69;
  }

  p {
    margin-bottom: 0;
    color: #555;
  }

  a {
    color: #11998e;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }

  section h2 {
    font-size: 1.8rem;
  }
}
</style>
