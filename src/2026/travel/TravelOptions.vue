<script setup>
import TopNav from "../sitecontainer/Nav/TopNav.vue";
</script>

<template>
  <TopNav></TopNav>
  <div class="logistics">
    <section id="travel">
      <div class="container">
        <h1>CPOSC Sweet 0x10</h1>
        <h2>Travel & Accommodation</h2>
        <div class="grid">
          <div class="card">
            <div>
              <h3>Venue Information</h3>
              <p>
                Located at the <b>Ware Center</b> another year, we're easily
                accessible by car and public transportation.
              </p>
              <p><b>42 N Prince Street, Lancaster, PA 17603</b></p>
            </div>
            <a
              target="_blank"
              href="https://www.google.com/maps/dir//ware+center/@40.0387483,-76.3907012,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c624f24f15380d:0x7f49c933dd919333!2m2!1d-76.3083003!2d40.0387775?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
              class="card-link"
            >
              Get Directions →
            </a>
          </div>
          <div class="card" id="parking">
            <div>
              <h3>Parking</h3>
              <p>
                Nearby parking is available at the
                <b>Prince Street Garage</b> at the corner of N Prince and W
                Orange Street, just a half block from the venue. The Penn Square
                Garage is also within walking distance! In the past, parking at
                the Prince Street Garage was reimbursed as a benefit to having
                this event at the Ware Center. Unfortunately,
                <b>
                  our event space no longer offers parking ticket reimbursement
                </b>
                .
              </p>
              <p>
                The Lancaster Amtrak station is just over a mile from the Ware
                Center, at 53 McGovern Avenue. Trains are available throughout
                the day from many destinations including 30th Street Station in
                Philadelphia.
              </p>
            </div>
          </div>
          <div class="card" id="hotels">
            <div>
              <h3>Hotel Options</h3>
              <p>
                There are several hotels in Lancaster at different proximities
                to the venue.
              </p>
              <ul>
                <li>
                  <a
                    class="card-link"
                    href="https://www.marriott.com/en-us/hotels/lnsmc-lancaster-marriott-at-penn-square/overview/"
                    target="_blank"
                  >
                    Lancaster Marriott at Penn Square</a
                  >: A few blocks from the Ware Center, in the center square of
                  downtown
                </li>
                <li>
                  <a
                    class="card-link"
                    href="https://www.ihg.com/holidayinn/hotels/us/en/lancaster/lnsch/hoteldetail"
                    target="_blank"
                  >
                    Holiday Inn Lancaster</a
                  >: A few blocks from the Ware Center, in the newly renovated
                  Binns Park
                </li>
                <li>
                  <a
                    class="card-link"
                    href="https://www.lancasterartshotel.com/"
                    target="_blank"
                  >
                    Lancaster Arts Hotel</a
                  >: Approximately a mile from the Ware Center, near Franklin &
                  Marshall College
                </li>
                <li>
                  <a
                    class="card-link"
                    href="https://www.corkfactoryhotel.com/"
                    target="_blank"
                  >
                    Cork Factory Hotel</a
                  >: Approximately a mile and a half from the Ware Center, on
                  the east side of downtown and near Route 30
                </li>
              </ul>
              <p>
                The closest to us are Lancaster Marriott Penn Square and Holiday
                Inn Lancaster.
              </p>
            </div>
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

/* Main section styles */
section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 0;
}

.container {
  max-width: 100%;
}

/* Section heading */
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

/* Vertical layout - simple and clean */
.grid {
  display: block;
  margin-top: 2rem;
}

/* Simple content blocks */
.card {
  padding: 0;
  background: none;
  box-shadow: none;
  border: none;
  border-radius: 0;
  margin-bottom: 40px;
}

.card:last-child {
  margin-bottom: 0;
}

/* Black headings with simple underline */
.card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
  background: linear-gradient(45deg, #2d1b69, #11998e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #f0f0f0;
}

/* Content wrapper */
.card > div {
  margin-bottom: 1.5rem;
}

/* Simple paragraph styling */
.card p {
  color: #555;
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.6;
}

.card p:last-of-type {
  margin-bottom: 0;
}

/* Bold text styling */
.card p b {
  color: #333;
  font-weight: 600;
}

/* Simple link styling */
.card-link {
  color: #2d1b69;
  text-decoration: none;
  font-weight: 800;
  font-size: 1rem;
  transition: color 0.3s ease;
}

.card-link:hover {
  color: #11998e;
  text-decoration: underline;
}

.card-link:focus {
  outline: 2px solid #7dd3fc;
  outline-offset: 2px;
  border-radius: 2px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  body {
    padding: 30px 15px;
  }

  .section {
    padding: 20px 0;
  }

  .section h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .card {
    margin-bottom: 30px;
  }

  .card h3 {
    font-size: 1.3rem;
  }
}
</style>
