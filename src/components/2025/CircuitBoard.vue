<script setup>
import { ref, onMounted } from "vue";

const currentYear = ref("");
const currentMonth = ref("");
const currentDay = ref("");
const currentMinute = ref("");
const currentHour = ref("");
const amPm = ref("");

const updateTime = () => {
  const now = new Date();
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  currentYear.value = now.getFullYear();
  currentMonth.value = monthNames[now.getMonth()];
  currentDay.value = String(now.getDate()).padStart(2, "0");
  currentMinute.value = String(now.getMinutes()).padStart(2, "0");

  let hours = now.getHours();
  amPm.value = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format, with 12 instead of 0
  currentHour.value = String(hours).padStart(2, "0");
};

const syncWithRealTime = () => {
  updateTime();
  const now = new Date();
  const secondsUntilNextMinute = 60 - now.getSeconds();

  setTimeout(() => {
    updateTime();
    setInterval(updateTime, 60000); // Update every minute
  }, secondsUntilNextMinute * 1000);
};

onMounted(syncWithRealTime);
</script>

<template>
  <div class="circuitBox">
    <div class="container">
      <div class="box box1">
        <div class="box-top">
          <div class="column month">
            <p class="label">Month</p>
            <p class="display">Apr</p>
          </div>
          <div class="column day">
            <p class="label">Day</p>
            <p class="display">26</p>
          </div>
          <div class="column year">
            <p class="label">Year</p>
            <p class="display">2025</p>
          </div>
          <div class="column ampm">
            <div class="label">Am</div>
            <div class="lit"></div>
            <div class="label">Pm</div>
            <div class="unlit"></div>
          </div>
          <div class="column hour">
            <p class="label">Hour</p>
            <p class="display">08</p>
          </div>
          <div class="column colon">
            <div class="lit time"></div>
            <div class="lit time"></div>
          </div>
          <div class="column min">
            <p class="label">Min</p>
            <p class="display">00</p>
          </div>
        </div>
        <div class="box-bottom">
          <p class="large-label">Destination Time</p>
        </div>
      </div>
      <div class="box box2">
        <div class="box-top">
          <div class="column month">
            <p class="label">Month</p>
            <p class="display">{{ currentMonth }}</p>
          </div>
          <div class="column day">
            <p class="label">Day</p>
            <p class="display">{{ currentDay }}</p>
          </div>
          <div class="column year">
            <p class="label">Year</p>
            <p class="display">{{ currentYear }}</p>
          </div>
          <div class="column ampm">
            <div class="label">Am</div>
            <div :class="amPm === 'AM' ? 'lit' : 'unlit'"></div>
            <div class="label">Pm</div>
            <div :class="amPm === 'PM' ? 'lit' : 'unlit'"></div>
          </div>
          <div class="column hour">
            <p class="label">Hour</p>
            <p class="display">{{ currentHour }}</p>
          </div>
          <div class="column colon">
            <div class="lit time"></div>
            <div class="lit time"></div>
          </div>
          <div class="column min">
            <p class="label">Min</p>
            <p class="display">{{ currentMinute }}</p>
          </div>
        </div>
        <div class="box-bottom">
          <p class="large-label">Present Time</p>
        </div>
      </div>
      <div class="box box3">
        <div class="box-top">
          <div class="column month">
            <p class="label">Month</p>
            <p class="display">Apr</p>
          </div>
          <div class="column day">
            <p class="label">Day</p>
            <p class="display">06</p>
          </div>
          <div class="column year">
            <p class="label">Year</p>
            <p class="display">2024</p>
          </div>
          <div class="column ampm">
            <div class="label">Am</div>
            <div class="unlit"></div>
            <div class="label">Pm</div>
            <div class="lit"></div>
          </div>
          <div class="column hour">
            <p class="label">Hour</p>
            <p class="display">06</p>
          </div>
          <div class="column colon">
            <div class="lit time"></div>
            <div class="lit time"></div>
          </div>
          <div class="column min">
            <p class="label">Min</p>
            <p class="display">00</p>
          </div>
        </div>
        <div class="box-bottom">
          <p class="large-label">Last Time Departed</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
body {
  background-color: #262626;
}

.circuitBox {
  z-index: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;

  position: absolute;
  top: -0.25rem;
}

.container {
  background-color: #565456;
  margin: 0;
  text-align: center;
  background-color: #262626;
  background-image: url("https://www.transparenttextures.com/patterns/solid.png");
  color: white;
  font-family: "Orbitron", sans-serif;
  font-size: 0.75rem; /* Use rem instead of px */
  text-transform: uppercase;
  width: fit-content;
  scale: 0.6;

  @media screen and (max-width: 1240px) {
    display: flex;
    margin-top: 3.5rem;
  }

  @media screen and (max-width: 905px) {
    scale: 0.5;
    margin-top: 3rem;
  }

  @media screen and (max-width: 800px) {
    margin-top: 2.5rem;
  }

  @media screen and (max-width: 752px) {
    scale: 0.4;
    margin-top: 2rem;
  }

  @media screen and (max-width: 640px) {
    flex-direction: column;
    margin-top: -4.25rem;
  }

  @media screen and (min-width: 320px) and (max-width: 530px) {
    scale: 0.3;
    margin-top: -5.75rem;
  }
}

.box {
  display: flex;
  flex-direction: column;
  background-color: #262626;
  background-image: url("https://www.transparenttextures.com/patterns/solid.png");
  margin: 0 1rem 1rem 1rem; /* Use rem instead of px */
  padding: 0 1rem 1rem 1rem; /* Use rem instead of px */
  box-shadow: 0 0 1.25rem black; /* Use rem instead of px */
  border-radius: 0.1875rem; /* Use rem instead of px */
}

.box1 {
  margin-top: 1rem; /* Use rem instead of px */
}

.box2 .display {
  color: #4cd338;
}

.box3 {
  margin-bottom: 1rem; /* Use rem instead of px */
}

.box3 .display {
  color: #f1ac17;
}

.box-top {
  display: flex;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.label {
  font-family: "Orbitron", sans-serif;
  background-color: #5d0e0d;
  width: fit-content;
  padding: 0.125rem 0.3125rem; /* Use rem instead of px */
}

.display {
  font-family: "Alarm Clock", sans-serif;
  color: #fe6e19;
  background-color: #0a0a0a;
  font-size: 3.5em; /* Use rem instead of px */
  width: fit-content;
  margin: 0;
  padding-top: 0.25rem; /* Use rem instead of px */
  padding-left: 0.625rem; /* Use rem instead of px */
  line-height: 2.25rem; /* Use rem instead of px */
  border-left: 0.125rem solid #575b57; /* Use rem instead of px */
  border-bottom: 0.125rem solid #646864; /* Use rem instead of px */
}

.large-label {
  font-family: "Orbitron", sans-serif;
  padding: 0.3125rem 0.625rem 0 0.625rem; /* Use rem instead of px */
  background-color: #0a0a0a;
  width: fit-content;
  margin: 0.625rem auto 0 auto; /* Use rem instead of px */
}

.ampm {
  margin-right: 0.3125rem; /* Use rem instead of px */
  margin-left: 0.3125rem; /* Use rem instead of px */
  align-self: end;
}

.colon {
  margin-right: 0.3125rem; /* Use rem instead of px */
  margin-left: 0.3125rem; /* Use rem instead of px */
  align-self: end;
}

.lit {
  height: 0.625rem; /* Use rem instead of px */
  width: 0.625rem; /* Use rem instead of px */
  background-color: yellow;
  margin-top: 0.0625rem; /* Use rem instead of px */
  margin-bottom: 0.3125rem; /* Use rem instead of px */
  border-radius: 50%;
}

.unlit {
  height: 0.625rem; /* Use rem instead of px */
  width: 0.625rem; /* Use rem instead of px */
  background-color: #262626;
  margin-top: 0.0625rem; /* Use rem instead of px */
  margin-bottom: 0.3125rem; /* Use rem instead of px */
  border-radius: 50%;
}

.time {
  margin-bottom: 0.46875rem; /* Use rem instead of px */
}
</style>
