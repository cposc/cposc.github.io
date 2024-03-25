<template>
  <div class="scheduleBlock" :class="{ inactive: !shouldShow }">
    <div class="scheduleTime">{{ time }}</div>
    <div class="scheduleDetails">
      <p>{{ title }}</p>
      <h1 v-if="title === 'Welcome to CPOSC!' || title === 'Lightning Talks' || title === 'Farewell, Closing Remarks'" class="lightning aud">The Auditorium / Steinman Hall</h1>
      <p>{{ description }}</p>
      <div v-if="sessions && sessions.length > 0" class="sessionBlocks">
        <div v-for="(session, index) in sessions" v-bind:key="index" class="sessionBlock">
          <div class="collapsable" :class="{ active: !isOpen[index] }" @click="toggleSchedule(index)">
            <div></div>
            <div></div>
          </div>
          <h1 v-if="index === 0" class="aud">The Auditorium / Steinman Hall - <a :href="'/speakers#' + session.speaker[0].split(' ').join('+')" target="_blank">{{ session.speaker[0] }}</a><span v-if="session.speaker[1]"> & <a :href="'/speakers#' + session.speaker[1].split(' ').join('+')" target="_blank">{{ session.speaker[1] }}</a></span></h1>
          <h1 v-if="index === 1" class="binns">
            Binns Room - <a :href="'/speakers#' + session.speaker[0].split(' ').join('+')" target="_blank">
              {{ session.speaker[0] }}
            </a>
            <span v-if="session.speaker[1]"> & <a :href="'/speakers#' + session.speaker[1].split(' ').join('+')" target="_blank">{{ session.speaker[1] }}</a></span>
            <span v-if="session.speaker[2]"> & <a :href="'/speakers#' + session.speaker[2].split(' ').join('+')" target="_blank">{{ session.speaker[2] }}</a></span>
          </h1>
          <h1 v-if="index === 2" class="library">Library - <a :href="'/speakers#' + session?.speaker[0].split(' ').join('+')" target="_blank">{{ session?.speaker[0] }}</a><span v-if="session.speaker[1]"> & <a :href="'/speakers#' + session.speaker[1].split(' ').join('+')" target="_blank">{{ session.speaker[1] }}</a></span></h1>
          <p class="title" v-if="isOpen[index]">{{ session.title }}</p>
          <p v-if="session.desc && isOpen[index]" class="description">
            {{ abstractMinMax(session.desc) }}
            <span v-if="shouldShowReadMore(session.desc)" v-on:click="toggleReadMore()" style="text-decoration: underline;cursor: pointer"> Read {{ readMoreToggle ? "Less" : "More" }} </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  props: {
    time: String,
    endTime: String,
    title: String,
    description: String,
    sessions: Array
  },
  data() {
    return {
      isOpen: [true, true, true],
      minuteTrigger: 1,
      readMoreToggle: false,
      lengthLimit: 465
    }
  },
  methods: {
    toggleSchedule: function(index) {
      // collapse/open a part of the schedule
      const proxyIsOpen = [...this.isOpen];
      proxyIsOpen[index] = !proxyIsOpen[index];
      this.isOpen = proxyIsOpen.map(p => p);

      localStorage.setItem(`${this.time}-${index}`, `${this.isOpen[index]}`);
    },
    shouldShowReadMore: function(bio) {
      // only show "read more" if bio is long enough
      return (bio.length > this.lengthLimit) ? true: false;
    },
    toggleReadMore: function() {
      // toggle length of bio shown
      this.readMoreToggle = !this.readMoreToggle;
    },
    abstractMinMax: function(bio) {
      // determine length of bio shown to the user
      if (bio.length <= this.lengthLimit || this.readMoreToggle) {
        return bio;
      } else {
        return `${bio.substring(0, this.lengthLimit)}...`
      }
    }
  },
  mounted: function() {
    // REMEMBER what sections the user collapsed/opened
    // on load, everything will be true
    // check user's localStorage to see if anything was closed
    if (this.sessions) {
      const proxyIsOpen = [...this.isOpen];
      const speaker1 = localStorage.getItem(`${this.time}-0`);
      if (speaker1 && speaker1 === "false") {
        proxyIsOpen[0] = false;
      }
      const speaker2 = localStorage.getItem(`${this.time}-1`);
      if (speaker2 && speaker2 === "false") {
        proxyIsOpen[1] = false;
      }
      const speaker3 = localStorage.getItem(`${this.time}-2`);
      if (speaker3 && speaker3 === "false") {
        proxyIsOpen[2] = false;
      }
      this.isOpen = proxyIsOpen.map(p => p);

      // every 30 seconds, trigger a calc update on whether a session should be opaque
      let minute = 1;
      setInterval(() => {
        minute = minute + 1;
        this.minuteTrigger = minute
        // 1000 is once a second
      }, 1000 * 30);
    }
  },
  computed: {
    shouldShow() {
      // prompts computed function to recalculate
      const triggerRecalc = this.minuteTrigger;
      
      const blockEndsAt = moment("2023-04-01 " + this.endTime);
      const rightNow = moment();
      const timeDiff = blockEndsAt.diff(rightNow);

      // schedule block still in the future
      if (timeDiff > 0) {
        return true;
      }
      // return false;
      return true;
    }
  }
}
</script>

<style lang="scss" scoped>
.scheduleBlock {
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  background-color: rgba(31,31,31,0.1);
  color: black;
  padding: 2rem;
  border-radius: 20px;
  margin-bottom: 1rem;

  @media screen and (max-width: 615px) {
    flex-direction: column;
  }

  .scheduleTime {
    width: 30%;
    text-align: center;
    font-family: var(--lato-regular);
    letter-spacing: 1px;
    font-size: 14px;

    @media screen and (max-width: 615px) {
      width: 100%;
      text-align: left;
      margin-bottom: 1rem;
    }
  }

  .scheduleDetails {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;

    @media screen and (max-width: 615px) {
      width: 100%;
    }

    p {
      margin-top: -2px;

      &:last-of-type {
        font-size: 14px;
      }
    }
  }

  .sessionBlocks {
    display: flex;
    flex-direction: column;

    .sessionBlock {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background-color: rgba(41, 41, 41, 0.15);
      padding: 1rem 2rem;
      border-radius: 1rem;
      margin-bottom: 8px;

      .title {
        font-family: 'Sono', sans-serif;
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 18px !important;
        margin-bottom: 0;
        padding-bottom: 8px;
      }

      .description {
        font-family: 'Sono', sans-serif;
        margin-top: 0;
        padding-top: 0;
      }
    }
  }

  h1 {
    font-size: 18px;
    letter-spacing: 2px;
    width: fit-content;
    padding: 5px 12px;
    color: white;
    margin-bottom: 1.5rem;

    a {
      color: black;
    }
  }

  h1.binns {
    background-color: #C09D26;
  }

  h1.aud {
    background-color: #186D86;
  }

  h1.library {
    background-color: #A864A2;
  }

  .lightning {
    margin-top: 0;
  }
}

.inactive {
  opacity: 40%;
}

.collapsable {
  position: absolute;
  // right: 0;
  margin-left: 435px;
  cursor: pointer;
  background-color: rgba(56, 56, 56, 1);
  height: 30px;
  width: 30px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 12px;

  @media screen and (max-width: 795px) {
    margin-left: auto;
    right: 50px;
  }

  div {
    width: 15px;
    height: 2px;
    margin: 0 !important;
    background-color: white;
    margin: 6px 0;
    transition: transform 0.5s;

    &:nth-child(1) {
      margin-right: -15px !important;
    }
  }

  &.active {
    div {
      &:nth-child(1) {
        transform: rotate(90deg);
      }
    }
  }
}
</style>