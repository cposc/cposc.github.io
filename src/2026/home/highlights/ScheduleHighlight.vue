<template>
  <section class="section" id="schedule">
    <div class="container">
      <h2>Conference Schedule</h2>
      <div class="grid">
        <div class="card centered">
          <div>
            <h3>Schedule</h3>
            <p>
              Check out some of the voices and ideas shaping this year's conference!
            </p>
            <div class="talks">
              <div>
                <span>Using a Computer Hands-Free: Coding by Voice Control No Longer Sucks</span><br />
                <em>Speaker: Nathan Heffley</em>
              </div>
              <div>
                <span>Hard Earned Lessons on Observability and Security</span><br />
                <em>Speaker: Brad Lhotsky</em>
              </div>
              <div>
                <span>Gettin' Ziggy Wit It</span><br />
                <em>Speaker: Jonathan Bowe</em>
              </div>
              <div>
                <span>Where AI Meets Hardware: Designing and Building a 3D Satellite Tracker</span><br />
                <em>Speaker: Tom Courtney</em>
              </div>
              <div>
                <span>Strategy & Economics of VC 101 (and Why It Matters to Fundraising Founders)</span><br />
                <em>Speaker: Dustin Betz</em>
              </div>
              <div>
                <span>Confessions of a Compulsive Distro-Hopper</span><br />
                <em>Speaker: Jonathan Bowman</em>
              </div>
              <div>
                <span>High Quality Pull Requests and Reviews</span><br />
                <em>Speaker: Alex Mayer</em>
              </div>
              <div>
                <span>Zero to Mobile App in 30 Minutes!</span><br />
                <em>Speaker: Jonathan Fleckenstein</em>
              </div>
              <div>
                <span>0x10 Years in Tech (Panel)</span><br />
                <em>Lead By: Logan Farr</em>
              </div>
              <div>
                <span>Sixteen Candles and the Human API: Refactoring 16 Years of Quick Fixes</span><br />
                <em>Speaker: Don Demcsak</em>
              </div>
              <div>
                <span>Creating and Providing Enhanced Access to .5 Million Journal Articles</span><br />
                <em>Speaker: Eric Lease Morgan</em>
              </div>
              <div>
                <span>Hacking Around Your Home with Home Assistant</span><br />
                <em>Speaker: Ed Schwartz</em>
              </div>
              <div>
                <span>An Alternative to LLMs for Making Sense of Things</span><br />
                <em>Speaker: Oliver Cox</em>
              </div>
            </div>
          </div>
          <a href="/2026/schedule" class="card-link secondary-button">View Full Schedule →</a>
          <button @click="goGetTickets">GET TICKETS</button>
          <!-- <a href="https://forms.gle/F3hDEHcLZWfmNA89A" target="_blank" class="card-link">Submit a talk proposal now →</a> -->
        </div>
      </div>
      <!-- <div class="grid">
        <div class="card">
          <div>
            <h3>Morning Sessions</h3>
            <p><strong>9:00 AM - 12:00 PM</strong></p>
            <p>
              Start your day with our stellar keynote and morning sessions.
              Coffee, networking, and knowledge that'll power up your projects.
            </p>
          </div>
          <a href="#" class="card-link">View Morning Schedule →</a>
        </div>
        <div class="card">
          <div>
            <h3>Afternoon Tracks</h3>
            <p><strong>1:00 PM - 5:00 PM</strong></p>
            <p>
              Parallel sessions across multiple tracks: Development, Community,
              and Innovation. Choose your own adventure!
            </p>
          </div>
          <a href="#" class="card-link">View Afternoon Tracks →</a>
        </div>
        <div class="card">
          <div>
            <h3>Evening Celebration</h3>
            <p><strong>5:30 PM - 8:00 PM</strong></p>
            <p>
              Network under the stars with fellow technologists. Food, drinks,
              and conversations that spark new collaborations at PubForge.
            </p>
          </div>
          <a href="#" class="card-link">Evening Details →</a>
        </div>
      </div> -->
    </div>
  </section>
</template>
<script setup>
const goGetTickets = () => {
  //  Opens in new tab/window
  window.open('https://www.eventbrite.com/e/central-pennsylvania-open-source-conference-cposc-2026-tickets-1981965338681', '_blank');
};
</script>
<style lang="scss" scoped>
button {
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: white;
  background-color: #4c349b;
  font-family: "Lexend", arial;
  font-size: 16px;
  border-radius: 8px;
  border-width: 0px;
  margin-top: 1.5rem;
  width: fit-content;
  align-self: center;;

  box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
}

h2 {
  margin: 0;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.centered {
    text-align: center;
  }

  h3 {
    margin: 0;
  }

  .talks {
    display: flex;
    flex-direction: row;
    width: 100%;
    overflow-x: auto;
    gap: 0.5rem;
    gap: 1.5rem;
    margin-bottom: 1rem;

    div {
      width: 300px;
      flex-shrink: 0;
      background: linear-gradient(135deg, rgba(125, 211, 252, 0.1), rgba(167, 139, 250, 0.1));
      border: 2px solid rgba(125, 211, 252, 0.3);
      border-radius: 15px;
      padding: 1rem 0.5rem;

      span {
        font-weight: bold;
        color: #2d1b69;
      }

      em {
        font-size: 14px;
        color: #11998e;
      }
    }
  }
}
</style>
