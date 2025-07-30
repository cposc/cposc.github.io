<template>
  <div
    className="scheduleBanner speakers"
    v-if="announcementType === 'speakers' && isSpeakerVisible"
  >
    <!-- UPDATE the href to be the CFP link once that's available -->
    <span>
      CPOSC Sweet 0x10 is looking for speakers from the local tech community!
      Submit a talk, <a href="https://forms.gle/NXooPfBHm6HFH5VTA" target="_blank">here</a>.
    </span>
    <div className="close" @click="toggleElement('speakerVisibility')">X</div>
  </div>
  <div
    className="scheduleBanner schedule"
    v-if="announcementType === 'schedule' && isScheduleVisible"
  >
    <span>
      The CPOSC Sweet 0x10 agenda is live! Explore
      <a href="/#schedule">20+ sessions</a> and start planning your experience.
    </span>
    <div className="close" @click="toggleElement('scheduleVisibility')">X</div>
  </div>
  <div
    className="scheduleBanner sponsors"
    v-if="announcementType === 'sponsors' && isSponsorVisible"
  >
    <span>
      The CPOSC Sweet 0x10 conference is looking for sponsors.
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
      isSpeakerVisible: this.getStoredVisibility("speakerVisibility"),
      isScheduleVisible: this.getStoredVisibility("scheduleVisibility"),
      isSponsorVisible: this.getStoredVisibility("sponsorVisibility"),
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
        case "speakerVisibility":
          this.isSpeakerVisible = !this.isSpeakerVisible;
          this.saveVisibility(visibilityType, this.isSpeakerVisible);
          break;
        case "scheduleVisibility":
          this.isScheduleVisible = !this.isScheduleVisible;
          this.saveVisibility(visibilityType, this.isScheduleVisible);
          break;
        case "sponsorVisibility":
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
  width: 100%;
  padding: 1rem;
  font-family: "Lexend", arial;
  color: white;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;

  &.schedule {
    background-color: #666ad8;
  }

  &.speakers {
    background-color: #b286f6;
  }

  &.sponsors {
    background-color: #11998e;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    display: block;
    padding: 0 0.25rem;
    color: white;
    transition: all 0.2s;
    font-weight: 400;

    &:hover {
      font-weight: 800;
    }
  }

  .close {
    cursor: pointer;
    position: absolute;
    right: 8rem;
  }
}
</style>
