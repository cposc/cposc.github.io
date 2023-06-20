<template>
  <div class="opaqueBackground" v-if="shouldShowTickets()">
    <a target="_blank" href="https://www.eventbrite.com/e/the-thirteenth-annual-central-pa-open-source-conference-tickets-529845451007">
      <div class="ticketContainer">
        <h2>Tickets Available!</h2>
        <div class="divider"></div>
        <p>Click to view our ticket options.</p>
      </div>
    </a>
  </div>
  <div class="opaqueBackground" v-if="shouldShowLightning()">
    <a target="_blank" href="https://www.eventbrite.com/e/the-thirteenth-annual-central-pa-open-source-conference-tickets-529845451007">
      <div class="ticketContainer">
        <h2>Lightning Talks!</h2>
        <div class="divider"></div>
        <p>Click to submit a talk.</p>
      </div>
    </a>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  components: {},
  data() {
    return {}
  },
  methods: {
    shouldShowTickets: function() {
      const eventDate = moment("04/06/2024", "MM/DD/YYYY");
      const today = moment();
      const daysDiff = eventDate.diff(today, "days");
      
      // hide "Tickets Available" on the day of the event
      if (daysDiff > 0 && !this.isInappropriatePage) {
        // return true;
      }
      return false;
    },
    shouldShowLightning: function() {
      const eventDate = moment("04/06/2024", "MM/DD/YYYY");
      const today = moment();
      const daysDiff = eventDate.diff(today, "days");
      
      // show "Lightning Talks" on the day of the event
      if (daysDiff < 0 && !this.isInappropriatePage) {
        // return true;
      }
      return false;
    }
  },
  computed: {
    isInappropriatePage() {
      // ticket bubble should not appear on Code of Conduct
      const route = this.$route;
      if (route) {
        const name = route.name;
        if (name && name.includes("code-of-conduct")) {
          return true
        }
      }
      return false;
    }
  }
}
</script>

<style lang="scss" scoped>
.opaqueBackground {
  position: fixed;
  top: 200px;
  right: 15px;
  z-index: 200;
  cursor: pointer;

  background-color: rgba(0, 126, 172, 50%);
  border-radius: 300px;
  padding: 8px;
  transform: scale(1);
  animation: pulse 2s infinite;

  a {
    text-decoration: none !important;
  }

  @media screen and (max-width: 675px) {
    right: 10px;
    top: 80px;
  }
}

.ticketContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;

  background-color: rgba(0, 126, 172, 100%);
  border-radius: 300px;
  height: 100px;
  width: 100px;
  font-family: var(--open-regular);

  h2 {
    padding-bottom: 0;
    margin-bottom: 0;
    font-size: 18px;
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  .divider {
    padding: 1px;
    margin: 5px 0 2px 0;
    width: 80px;
    background-color: white;
  }

  p {
    font-size: 12px;
    margin-top: 5px;
    color: white;
    text-decoration: none;
  }
}

@keyframes pulse {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}
</style>