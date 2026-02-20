<template>
  <div class="speakerBlock">
    <div class="speaker" :id="nameAnchor">
      <!-- <p class="talk">{{ talkTitle }}</p>
      <p class="abstract">{{ talkAbstract }}</p> -->
      <img
        v-if="name === 'Alex Mayer'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/AlexMayer.png"
      />
      <img
        v-if="name === 'Brad Lhotsky'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/BradLhotsky.jpeg"
      />
      <img
        v-if="name === 'Don Demcsak'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/DonDemcsak.jpg"
      />
      <img
        v-if="name === 'Dustin Betz'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/DustinBetz.png"
      />
      <img
        v-if="name === 'Ed Schwartz'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/EdSchwartz.jpeg"
      />
      <img
        v-if="name === 'Eric Lease Morgan'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/EricMorgan.jpg"
      />
      <img
        v-if="name === 'Jeff Barrett'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/JeffBarrett.jpg"
      />
      <img
        v-if="name === 'Jonathan Bowe'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/JonathanBowe.png"
      />
      <img
        v-if="name === 'Jonathan Bowman'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/JonathanBowman.png"
      />
      <img
        v-if="name === 'Logan Farr'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/LoganFarr.jpg"
      />
      <img
        v-if="name === 'R. Geoffrey Avery'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/RGeoffreyAvery.jpg"
      />
      <img
        v-if="name === 'Rich Everts'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/RichEverts.jpg"
      />
      <img
        v-if="name === 'Stephanie Schwartz'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/StephanieSchwartz.jpg"
      />
      <img
        v-if="name === 'One Small Step for an Axolotl (FTC Robotics Team 25650)'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/TeamAxolotl.png"
      />
      <img
        v-if="name === 'Tom Courtney'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/TomCourtney.jpg"
      />
      <img
        v-if="name === 'Walt Mankowski'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/WaltMankowski.jpg"
      />
      <img
        v-if="name === 'Oliver Cox'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/OliverCox.png"
      />
      <img
        v-if="name === 'Jonathan Fleckenstein'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/JonathanFleckenstein.png"
      />
      <img
        v-if="name === 'Nathan Heffley'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/NathanHeffley.png"
      />
      <img
        v-if="name === 'Erica Windisch'"
        :alt="name"
        src="@/2026/assets/speakers/blackwhite/EricaWindisch.png"
      />
      <p class="name" v-if="name ==='One Small Step for an Axolotl (FTC Robotics Team 25650)'">One Small Step for an Axolotl <br>(FTC Robotics Team 25650)</p>
      <p class="name" v-else>{{ name }}</p>
      <p class="bio">{{ bio }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    imageUrl: String,
    name: String,
    talkTitle: String,
    talkAbstract: String,
    nameAnchor: String,
    bio: String,
    index: Number,
  },
  data() {
    return {
      lastColor: "",
      readMoreToggle: false,
      lengthLimit: 600
    }
  },
  methods: {
    toImageURL: function(img) {
      return "@/assets/2023/speakers/francis_wertz.png";
    },
    shouldShowReadMore: function(bio) {
      // only show "read more" if bio is long enough
      return (bio.length > this.lengthLimit) ? true: false;
    },
    toggleReadMore: function() {
      // toggle length of bio shown
      this.readMoreToggle = !this.readMoreToggle;
    },
    bioMinMax: function(bio) {
      // determine length of bio shown to the user
      if (bio.length <= this.lengthLimit || this.readMoreToggle) {
        return bio;
      } else {
        return `${bio.substring(0, this.lengthLimit)}...`
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.speakerBlock {
  // display: flex;
  // flex-direction: row;
  // align-items: flex-start;
  // margin-top: 1rem;
  // margin-bottom: 1rem;
  // margin-left: auto;
  // margin-right: auto;

  // @media screen and (max-width: 650px) {
  //   flex-direction: column;
  //   align-items: center;
  // }
  height: 700px;
  cursor: pointer;

  @media screen and (max-width: 1025px) {
    height: fit-content;
  }

  &:hover {
    p.bio {
      opacity: 100;
    }
  }

  p.bio {
    // margin-top: 1em;
    // font-size: 0.8em;
    width: 346px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    font-size: 0.8em;
    font-style: italic;

    @media screen and (max-width: 1025px) {
      opacity: 100;
    }
  }

  .name {
    font-size: 1.25rem;
    margin-bottom: 0.5em;
    margin-top: 0;
  }

  .blankImage,
  img {
    width: 346px;
    height: 409px;
    // border-radius: 10px;
    object-fit: cover;
    background-color: grey;
    text-align: center;
    margin: 0 auto 0 auto;
  }
}
</style>
