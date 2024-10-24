<template>
  <div class="pageContainer">
    <div className="volunteers">
      <h1>Get Involved</h1>
      <div class="line"></div>
      <div class="pageContent">
        <p>Join us on this 88 mph journey to success! We're looking for volunteers to help in the months leading up to the event as well as on the week/day of. If you're interested in being a part of this flux capacitor crew, <a href="mailto:cposc@localareanetworks.org" target="_blank">hop in the DeLorean</a> while we speed to April.</p>
        <p>If you don't have an email client set up on your machine, please email <b>cposc@localareanetworks.org</b> instead of clicking the link above.</p>
        <h3>VOLUNTEER FOCUS AREAS</h3>
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
        <p style="z-index: 10; position: relative; text-align: left">There are always opportunities before and/or during the event!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.volunteers {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;

  min-height: calc(100vh - 28.9rem);
}

h1 {
  font-family: "Bebas Neue", sans-serif;
  font-size: 40px;
  color: #1f1f1f;
  padding-top: 2rem;
  padding-bottom: 8px;
  margin: 0;
}

p > a {
  color: #1F1F1F;
  transition: color 0.25s;

  &:hover {
    color: #848699;
  }
}

.line {
  background-color: #ff2cb7;
  margin-bottom: 1rem;
}

h4, h3, p, a {
  z-index: 10;
  color: #1F1F1F !important;
}

.focusBlock {
  z-index: 10;
  border-image: linear-gradient(to right, #ff7164 0%, #ffac19 100%) 1;
  border-width: 6px;
  border-style: solid;
  padding: 5px;
  background-color: white !important;

  li {
    color: #1F1F1F;
  }

  @media screen and (max-width: 550px) {
    ul {
      padding: 10px;
    }
  }
}
</style>