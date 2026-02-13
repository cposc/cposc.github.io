<script setup>
import TopNav from "../sitecontainer/Nav/TopNav.vue";
import { ref, onMounted } from "vue";
import Papa from "papaparse";

const goGetTickets = () => {
  //  Opens in new tab/window
  window.open('https://www.eventbrite.com/e/central-pennsylvania-open-source-conference-cposc-2026-tickets-1981965338681', '_blank');
};

const csvRows = ref([]); // <-- this will be your array of arrays

onMounted(async () => {
  try {
    // Fetch CSV from public folder
    const response = await fetch("/schedule2026.csv");
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
                <em v-if="row[3]">{{ row[3] }}</em>
                <p v-if="row[4]">{{ row[4] }}</p>
              </div>
              <div v-if="row[5]">
                <h3>Binns Room</h3>
                <p><b>{{ row[5] }}</b></p>
                <em v-if="row[6]">{{ row[6] }}</em>
                <p v-if="row[7]">{{ row[7] }}</p>
              </div>
              <div v-if="row[8]">
                <h3>Choral Room</h3>
                <p><b>{{ row[8] }}</b></p>
                <em v-if="row[9]">{{ row[9] }}</em>
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
button {
  cursor: pointer;
  padding: 0.5rem 1rem;
  color: white;
  background-color: #4c349b;
  font-family: "Lexend", arial;
  font-size: 16px;
  border-radius: 8px;
  border-width: 0px;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  width: fit-content;
  align-self: center;;

  box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
  -webkit-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
}
.page {
  padding-top: 7rem;

  .pageCont {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (max-width: 1000px) {
      width: 95%;
      margin: auto;
    }
  }
}
h1 {
  margin-top: 0;
}
h2 {
  font-size: 2.5rem;
  background: linear-gradient(45deg, #2D1B69, #11998E);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;

  &.centered {
    text-align: center;
  }

  h3 {
    margin: 0;
  }

  .talks {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch; // <-- stretch vertical (default value, can be omitted here)
    align-content: center;
    width: 100%;
    gap: 0.5rem;
    gap: 1.5rem;
    min-width: 400px;
    max-width: 1300px;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }

    @media screen and (max-width: 500px) {
      min-width: auto;
    }

    div {
      background: linear-gradient(135deg, rgba(125, 211, 252, 0.1), rgba(167, 139, 250, 0.1));
      border: 2px solid rgba(125, 211, 252, 0.3);
      border-radius: 15px;
      padding: 1rem 0.5rem;
      flex: 1;

      @media screen and (max-width: 1000px) {
        width: calc(100% - 1rem);
      }

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
