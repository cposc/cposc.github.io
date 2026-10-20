<script setup>
import SpeakerBlock from "./SpeakerBlock.vue";
import TopNav from "../sitecontainer/Nav/TopNav.vue";
</script>

<template>
  <TopNav></TopNav>
  <div class="pageContainer">
    <div class="speakers">
      <h1>CPOSC SPEAKERS</h1>
      <div class="line"></div>
      <div class="pageContent">
        <p>Get to know our fantastic lineup of 2027 speakers!</p>
        <div class="speakerSection">
          <div v-for="(speaker, index) in speakers" v-bind:key="index">
            <SpeakerBlock
              :name="speaker.name"
              :nameAnchor="getNameAnchor(speaker.name.split(' ').join(''))"
              :imageUrl="speaker.imageURL"
              :bio="speaker.bio"
              :talkTitle="speaker.talkTitle"
              :talkAbstract="speaker.talkAbstract"
              :index="index"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      speakers: [
        {
          imageURL: "@/2026/assets/speakers/x.jpg",
          name: "TBA Speaker 1",
          bio: "Speaker details coming soon for 2027!",
          talkTitle: "Talk Title Coming Soon",
          talkAbstract: "Details will be announced as speakers confirm their participation.",
        },
      ],
      lastColor: "",
      innerWidth: window.innerWidth,
    };
  },
  methods: {
    getNameAnchor: function (name) {
      return name.split(" ").join("+");
    },
    myEventHandler(e) {
      this.innerWidth = window.innerWidth;
    },
  },
  mounted: function () {
    const routeHash = this.$route.hash.split("#")[1];
    const anchorElement = document.getElementById(routeHash);
    if (anchorElement) {
      const top = anchorElement.offsetTop - 40;
      window.scrollTo(0, top);
    }
  },
};
</script>

<style lang="scss" scoped>
.pageContainer {
  padding-top: 6rem;
  background-color: white;
}
.pageContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding-bottom: 2em;

  @media screen and (max-width: 960px) {
    padding-right: 0;
    padding-left: 0;
  }
}

.speakers {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;

  min-height: calc(100vh - 28.9rem);
}

.speakerSection {
  width: calc(100vw - 4rem);
  padding: 4rem;
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
}

h1 {
  font-family: "Lexend", sans-serif;
  font-size: 40px;
  color: #1f1f1f;
  padding-top: 2rem;
  padding-bottom: 8px;
  margin: 0;
}

p {
  @media screen and (max-width: 860px) {
    width: 95%;
  }
}

p > a {
  color: #1f1f1f;
  transition: color 0.25s;

  &:hover {
    color: #848699;
  }
}

h4, h3, p, a {
  z-index: 10;
  color: #1f1f1f !important;
}
</style>
