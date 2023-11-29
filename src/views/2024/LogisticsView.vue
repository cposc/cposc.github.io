<script setup>
import GradientContainer from "../../components/2023/GradientContainer.vue";
</script>

<template>
  <div class="pageContainer">
    <img
      class="headerImage"
      alt="CPOSC Founder Presenting"
      src="@/assets/2024/CPOSC_Cover_2024_Galaxy.png"
    />

    <h4>LOGISTICS</h4>
    <h1>Travel to the Event</h1>
    <div class="line"></div>
    <div class="pageContent">
      <p>For 2024, we are proud to return CPOSC to <a href="https://artsmu.com/ware-center/" target="_blank">The Ware Center</a> at Millersville University.</p>
      <p></p>
      <h3 style="margin-bottom:8px; text-align: center"><a style="text-align: center" href="https://www.google.com/maps/search/?api=1&query=The+Ware+Center+-+Millersville+University" target="_blank">42 N Prince Street</a></h3>
      <h3 style="margin-top:0; text-align: center"><a style="text-align: center" href="https://www.google.com/maps/search/?api=1&query=The+Ware+Center+-+Millersville+University" target="_blank">Lancaster, PA 17603</a></h3>
      <img
        class="map"
        alt="Static Ware Center Map"
        src="@/assets/2023/static_map.png"
      />
      <h3>PARKING</h3>
      <div class="smallLine"></div>
      <p style="text-align: left">Parking will be provided at the <b>Prince Street Garage</b> at the corner of N Prince and W Orange Street, just a half block from the venue. Look for more information on how to redeem this complimentary closer to the event.</p>
      <p style="text-align: left">The Lancaster Amtrak station is just over a mile from the Ware Center, at 53 McGovern Avenue. Trains are available throughout the day from many destinations including 30th Street Station in Philadelphia.</p>
      
      <h3>HOTEL OPTIONS</h3>
      <div class="smallLine"></div>
      <p style="text-align: left">There are several hotels in Lancaster at different proximities to the venue.</p>
      <div class="focusBlock">
        <ul>
          <li><a href="https://www.marriott.com/en-us/hotels/lnsmc-lancaster-marriott-at-penn-square/overview/" target="_blank">Lancaster Marriott at Penn Square</a>: A few blocks from the Ware Center, in the center square of downtown</li>
          <li><a href="https://www.ihg.com/holidayinn/hotels/us/en/lancaster/lnsch/hoteldetail" target="_blank">Holiday Inn Lancaster</a>: A few blocks from the Ware Center, in the newly renovated Binns Park</li>
          <li><a href="https://www.lancasterartshotel.com" target="_blank">Lancaster Arts Hotel</a>: Approximately a mile from the Ware Center, near Franklin & Marshall College</li>
          <li><a href="https://www.corkfactoryhotel.com" target="_blank">Cork Factory Hotel</a>: Approximately a mile and a half from the Ware Center, on the east side of downtown and near Route 30</li>
        </ul>
      </div>
    </div>
    <GradientContainer />
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
h4, h3 {
  color: #1F1F1F;

  a {
    color: #1F1F1F !important;
  }
}

h1 {
  color: #C09D26;
  font-size: 2em;
  margin-bottom: 6px;
}

.line {
  background-color: #C09D26 !important;
  margin-bottom: 1rem;
}

.smallLine {
  background-color: #C09D26;
  height: 5px;
  width: 80px;

  @media screen and (max-width: 500px) {
    margin-left: 2rem;
  }
}

.headerImage {
  height: 82px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}

.pageContainer {
  background-color: white;
}

p > a {
  color: #1F1F1F;
  transition: color 0.25s;

  &:hover {
    color: #848699;
  }
}

p, h3 {
  color: #1F1F1F !important;
  @media screen and (max-width: 500px) {
    padding: 0 2rem;
  }
}

h3:not(:last-of-type) {
  text-align: left;
}

img.map {
  max-width: 650px;
  margin-left: 75px;
  margin-bottom: 2rem;

  @media screen and (max-width: 800px) and (min-width: 500px) {
    width: 100%;
    margin-left: 0;
    max-width: 100%;
  }

  @media screen and (max-width: 500px) {
    width: 100vw;
    margin-left: 0;
    max-width: 100%;
  }
}

.pageContent {
  @media screen and (max-width: 500px) {
    padding: 0;
  }
}

.focusBlock {
  z-index: 10;
  position: relative;
  background-color: #C09D26 !important;

  li {
    color: #1F1F1F !important;
  }

  a {
    color: #1F1F1F;
    transition: color 0.25s;
    font-weight: bold;

    &:hover {
      color: white;
    }
  }

  @media screen and (max-width: 550px) {
    ul {
      padding: 10px;
    }
  }

  @media screen and (max-width: 500px) {
    margin: 0 1rem;
  }
}
</style>