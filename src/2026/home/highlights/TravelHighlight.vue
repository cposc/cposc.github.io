<template>
  <section class="section" id="travel">
    <div class="container">
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
        <div class="card">
          <div>
            <h3>Hotel Options</h3>
            <p>
              While we do not offer complimentary hotel stays, there are several
              hotels for those traveling.
            </p>
            <p>
              The closest to us are Lancaster Marriott Penn Square and Holiday
              Inn Lancaster.
            </p>
          </div>
          <a href="/logistics#hotels" class="card-link">View Hotel Options →</a>
        </div>
        <div class="card">
          <div>
            <h3>Parking</h3>
            <p>
              Travel by train or car. Nearby parking garages are walking
              distance to the conference, but we are not able to offer parking
              reimbursement like previous years.
            </p>
          </div>
          <a href="/logistics#travel" class="card-link">Explore Travel Options →</a>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
h2,
h3 {
  margin: 0;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
