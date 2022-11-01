<script setup>
import ScheduleBlock from "../components/schedule/ScheduleBlock.vue";
</script>

<template>
  <div class="scheduleContainer">
    <h4>SCHEDULE</h4>
    <h1>The Schedule</h1>
    <div class="line"></div>
    <div class="scheduleContent">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet ut mi vitae gravida. Fusce mollis arcu non libero posuere, in efficitur neque ultrices. Nulla molestie nec sapien non aliquam. Morbi aliquam lacus ex, eu feugiat urna maximus eget. Aenean rutrum convallis est et molestie. Praesent porttitor sapien dui, nec pretium libero cursus eu. Morbi fringilla dolor nulla, quis malesuada nunc rutrum ut.</p>
      <h3>Morning</h3>
      <ScheduleBlock
        time="7:00 AM to 9:00 AM"
        title="Reception and Registration"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet ut mi vitae gravida. Fusce mollis arcu non libero posuere, in efficitur"
      />
      <ScheduleBlock
        time="9:00 AM to 10:00 AM"
        title="Session 1"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet ut mi vitae gravida. Fusce mollis arcu non libero posuere, in efficitur"
      />
      <ScheduleBlock
        time="11:00 AM to 12:00 PM"
        title="Session 2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet ut mi vitae gravida. Fusce mollis arcu non libero posuere, in efficitur"
      />
      <h3>Lunch</h3>
      <ScheduleBlock
        time="12:00 PM to 2:00 PM"
        title="Lunch Break, Time Networking"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet ut mi vitae gravida. Fusce mollis arcu non libero posuere, in efficitur"
      />
      <h3>Afternoon</h3>
      <ScheduleBlock
        time="2:00 PM to 3:00 PM"
        title="Session 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet ut mi vitae gravida. Fusce mollis arcu non libero posuere, in efficitur"
      />
      <ScheduleBlock
        time="3:00 PM to 4:00 PM"
        title="Session 4"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet ut mi vitae gravida. Fusce mollis arcu non libero posuere, in efficitur"
      />
      <ScheduleBlock
        time="4:00 PM to 5:00 PM"
        title="Closing Remarks"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet ut mi vitae gravida. Fusce mollis arcu non libero posuere, in efficitur"
      />
    </div>
    <div class="gradientContainer"></div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.scheduleContainer {
  background-color: black;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;

  h1 {
    margin: 1rem 0;
    color: white;
  }

  h3 {
    color: white;
    font-family: var(--lato-regular);
    margin-top: 2rem;
  }

  h4 {
    font-size: 12px;
    letter-spacing: 3px;
  }

  .line {
    background-color: #2b3480;
    height: 5px;
    width: 80px;
  }

  .scheduleContent {
    max-width: 800px;

    p {
      color: #70706f;
      text-align: center;
    }
  }
}

.gradientContainer {
  bottom: 0;
  height: 100px; /* For browsers that do not support gradients */
  margin-bottom: -75px;
  width: 100%;
  background-image: linear-gradient(to top, transparent , black);
}
</style>