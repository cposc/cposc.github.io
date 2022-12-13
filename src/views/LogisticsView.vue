<script setup>
import GradientContainer from "../components/GradientContainer.vue";
</script>

<template>
  <div class="pageContainer">
    <h4>LOGISTICS</h4>
    <h1>Travel to the Event</h1>
    <div class="line"></div>
    <div class="pageContent">
      <p>For 2023, we are proud to return CPOSC to <a href="https://artsmu.com/ware-center/" target="_blank">The Ware Center</a> at Millersville University.</p>
      <p></p>
      <p style="margin-bottom:0;">42 N Prince Street</p>
      <p style="margin-top:0;">Lancaster, PA 17603</p>
      <img
        alt="Static Ware Center Map"
        src="@/assets/static_map.png"
      />
      <p>Parking will be provided at the Prince Street Garage at the corner of N Prince and W Orange Street, just a half block from the venue. Look for more information on how to redeem this complimentary closer to the event.</p>
      <p>The Lancaster Amtrak station is just over a mile from the Ware Center, at 53 McGovern Avenue. Trains are available throughout the day from many destinations including 30th Street Station in Philadelphia.</p>
      <p style="margin-top: 3rem;">There are several hotels in Lancaster at different proximities to the venue.</p>
      <h3>Hotel Options:</h3>
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
p > a {
  color: white;
  transition: color 0.25s;

  &:hover {
    color: #848699;
  }
}

.focusBlock {
  a {
    color: #848699;
    transition: color 0.25s;

    &:hover {
      color: white;
    }
  }
}
</style>