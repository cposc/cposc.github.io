<script setup>
import TopNav from "../sitecontainer/Nav/TopNav.vue";
import { ref, onMounted } from "vue";
import Papa from "papaparse";

const goGetTickets = () => {
  //  Opens in new tab/window
  window.open('https://www.eventbrite.com/e/central-pennsylvania-open-source-conference-cposc-2027-tickets-', '_blank');
};

const csvRows = ref([]); // <-- this will be your array of arrays

onMounted(async () => {
  try {
    // Fetch CSV from public folder - update with 2027 CSV when available
    const response = await fetch("/schedule2027.csv");
    const csvText = await response.text();

    // Parse into array of arrays (NOT objects)
    const parsed = Papa.parse(csvText, {
      header: false, // IMPORTANT: false = array of arrays
      skipEmptyLines: true,
    });

    csvRows.value = parsed.data;
    csvRows.value.shift();
  } catch (err) {
    console.error("Error loading CSV:", err);
  }
});
</script>

<template>
  <TopNav></TopNav>
  <div class="document">
    <div class="page">
      <div class="pageCont">
        <h1>Schedule</h1>
        <p>
          Check out the voices and ideas shaping this year's conference!
        </p>
        <button @click="goGetTickets">GET TICKETS</button>
        <div v-for="(row, rowIndex) in csvRows" :key="rowIndex">
          <div class="card centered" v-if="row[0]">
            <h2>{{ row[0] }} <span v-if="row[1]">- {{ row[1] }}</span></h2>
            <div class="talks">
              <div v-if="row[2]">
                <h3>Steinman Hall</h3>
                <p><b>{{ row[2] }}</b></p>
                <a v-if="row[3] && row[3].includes('Logan')" :href="'/2027/speakers#LoganFarr'" target="_blank">{{ row[3] }}</a>
                <a v-if="row[3] && !row[3].includes('Logan')" :href="'/2027/speakers#' + row[3].split(' ').join('')" target="_blank">{{ row[3] }}</a>
                <p v-if="row[4]">{{ row[4] }}</p>
              </div>
              <div v-if="row[5]">
                <h3>Binns Room</h3>
                <p><b>{{ row[5] }}</b></p>
                <a v-if="row[6]" :href="'/2027/speakers#' + row[6].split(' ').join('')" target="_blank">{{ row[6] }}</a>
                <p v-if="row[7]">{{ row[7] }}</p>
              </div>
              <div v-if="row[8]">
                <h3>Choral Room</h3>
                <p><b>{{ row[8] }}</b></p>
                <a v-if="row[9]" :href="'/2027/speakers#' + row[9].split(' ').join('')" target="_blank">{{ row[9] }}</a>
                <p v-if="row[10]">{{ row[10] }}</p>
              </div>
              <div v-if="row[11]">
                <h3>Common Area</h3>
                <p>{{ row[11] }}</p>
              </div>
              <div v-if="row[12]">
                <h3>PubForge</h3>
                <p>{{ row[12] }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1, h2 {
  font-family: "Lexend", sans-serif;
}
h3 {
  font-family: "Cal Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
}
h4,
p,
a,
em {
  font-family: "Quicksand", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

</style>
