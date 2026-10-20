<template>
  <!-- <div
    className="scheduleBanner speakers"
    v-if="announcementType === 'speakers' && isSpeakerVisible"
  >
    UPDATE the href to be the CFP link once that's available
    <span>
      CPOSC 2027 is looking for speakers from the local tech community!
      Submit a talk, <a href="https://forms.gle/NXooPfBHm6HFH5VTA" target="_blank">here</a>.
    </span>
    <div className="close" @click="toggleElement('speakerVisibility')">X</div>
  </div> -->
  <div
    className="scheduleBanner schedule"
    v-if="announcementType === 'schedule' && isScheduleVisible"
  >
    <span>
      The CPOSC 2027 agenda is live! Explore
      <a href="/#schedule">20+ sessions</a> and start planning your experience.
    </span>
    <div className="close" @click="toggleElement('scheduleVisibility')">X</div>
  </div>
  <div
    className="scheduleBanner sponsors"
    v-if="announcementType === 'sponsors' && isSponsorVisible"
  >
    <span>
      The CPOSC 2027 conference is looking for sponsors.
      <a href="/#sponsors">Help us</a> make the magic happen! Every bit counts.
    </span>
    <div className="close" @click="toggleElement('sponsorVisibility')">X</div>
  </div>
</template>

<script>
export default {
  props: {
    announcementType: String,
  },
  data() {
    return {
      isSpeakerVisible: this.getStoredVisibility("speakerVisibility2027"),
      isScheduleVisible: this.getStoredVisibility("scheduleVisibility2027"),
      isSponsorVisible: this.getStoredVisibility("sponsorVisibility2027"),
    };
  },
  methods: {
    getStoredVisibility(visibilityType) {
      // Get from localStorage, default to true if not found
      const stored = localStorage.getItem(visibilityType);
      return stored !== null ? JSON.parse(stored) : true;
    },
    saveVisibility(visibilityType, isVisible) {
      // Save current state to localStorage
      localStorage.setItem(visibilityType, JSON.stringify(isVisible));
    },
    toggleElement(visibilityType) {
      switch (visibilityType) {
        case "speakerVisibility2027":
          this.isSpeakerVisible = !this.isSpeakerVisible;
          this.saveVisibility(visibilityType, this.isSpeakerVisible);
          break;
        case "scheduleVisibility2027":
          this.isScheduleVisible = !this.isScheduleVisible;
          this.saveVisibility(visibilityType, this.isScheduleVisible);
          break;
        case "sponsorVisibility2027":
          this.isSponsorVisible = !this.isSponsorVisible;
          this.saveVisibility(visibilityType, this.isSponsorVisible);
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.scheduleBanner {
  position: absolute;
  z-index: 15;
  top: 0;
  width: calc(100% - 3rem);
  padding: 1rem 2rem 1rem 1rem;
  font-family: "Lexend", arial;
  color: white;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;

  span,
  span a {
    display: inline;
    white-space: normal;
  }

  &.schedule {
    background-color: #666ad8;
  }

  &.speakers {
    background-color: #d89c9c;
  }

  &.sponsors {
    background-color: #7fa7d8;
  }

  .close {
    position: absolute;
    right: 20px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.5rem;
    opacity: 0.8;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
