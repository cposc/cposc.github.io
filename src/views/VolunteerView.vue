<script setup>
import GradientContainer from "../components/2023/GradientContainer.vue";
</script>

<template>
  <div class="pageContainer">
    <h4>VOLUNTEERS</h4>
    <h1>Get Involved</h1>
    <div class="line"></div>
    <div class="pageContent">
      <p>There are many ways to get involved with CPOSC. We are looking for volunteers to help in the months leading up to the event as well as on the week/day of. If you are interested in joining a group of volunteers making this the best conference it can be, please <a href="mailto:cposc@localareanetworks.org" target="_blank">reach out</a>. All are welcome!</p>
      <h3>Some of the volunteer focus areas include:</h3>
      <div class="focusBlock">
        <ul>
          <li>Marketing, social media, and communications</li>
          <li>Speakers</li>
          <li>Sponsorships</li>
          <li>Streaming and hybrid event opportunities</li>
          <li>Venue and food logistics</li>
          <li>Attendee happiness</li>
        </ul>
      </div>
      <p>If you’re not able to get involved in the lead up to the event, there is always an opportunity for extra hands on the days before and day of the conference too!</p>
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
  @media screen and (max-width: 550px) {
    ul {
      padding: 10px;
    }
  }
}
</style>