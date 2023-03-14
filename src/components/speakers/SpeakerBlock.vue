<template>
  <div class="speakerBlock" data-aos="zoom-out" data-aos-duration="5000" data-aos-easing="ease-in-out">
    <div class="left" :style="{'background-color': color}">
      <img
        v-if="name === 'Alex Mayer'"
        :alt="name"
        src="@/assets/speakers/alex_mayer.jpeg"
      />
      <img
        v-if="name === 'Bob Murphy'"
        :alt="name"
        src="@/assets/speakers/bob_murphy.jpg"
      />
      <img
        v-if="name === 'Deanna Bledsoe'"
        :alt="name"
        src="@/assets/speakers/deanna_bledsoe.jpg"
      />
      <img
        v-if="name === 'Ean Dudley'"
        :alt="name"
        src="@/assets/speakers/ean_dudley.jpg"
      />
      <img
        v-if="name === 'Edward Schwartz'"
        :alt="name"
        src="@/assets/speakers/ed_schwartz.jpeg"
      />
      <img
        v-if="name === 'Francis Wertz'"
        :alt="name"
        src="@/assets/speakers/francis_wertz.png"
      />
      <img
        v-if="name === 'Jacob Whetstone'"
        :alt="name"
        src="@/assets/speakers/jacob_whetstone.jpeg"
      />
      <img
        v-if="name === 'Joe Latrell'"
        :alt="name"
        src="@/assets/speakers/joe_latrell.png"
      />
      <img
        v-if="name === 'Joel Walker'"
        :alt="name"
        src="@/assets/speakers/joel_walker.jpeg"
      />
      <img
        v-if="name === 'Jonathan Fleckenstein'"
        :alt="name"
        src="@/assets/speakers/jonathan_fleckenstein.jpeg"
      />
      <img
        v-if="name === 'Kevin Hicks'"
        :alt="name"
        src="@/assets/speakers/kevin_hicks.jpg"
      />
      <img
        v-if="name === 'Luke Demi'"
        :alt="name"
        src="@/assets/speakers/luke_demi.jpeg"
      />
      <img
        v-if="name === 'Nathaniel Evry'"
        :alt="name"
        src="@/assets/speakers/nathaniel_evry.png"
      />
      <img
        v-if="name === 'Nick Elzer'"
        :alt="name"
        src="@/assets/speakers/nick_elzer.jpeg"
      />
      <img
        v-if="name === 'Richard Everts'"
        :alt="name"
        src="@/assets/speakers/rich_everts.jpg"
      />
      <img
        v-if="name === 'Ryan Walker'"
        :alt="name"
        src="@/assets/speakers/ryan_walker.jpg"
      />
      <img
        v-if="name === 'Samantha Noggle'"
        :alt="name"
        src="@/assets/speakers/samantha_noggle.jpg"
      />
      <img
        v-if="name === 'Stephanie Schwartz'"
        :alt="name"
        src="@/assets/speakers/Stephanie-Schwartz.jpg"
      />
      <img
        v-if="name === 'Thomas Knickman'"
        :alt="name"
        src="@/assets/speakers/thomas_knickman.jpeg"
      />
      <img
        v-if="name === 'Tom Swartz'"
        :alt="name"
        src="@/assets/speakers/tom_swartz.jpeg"
      />
      <div class="blankImage" v-if="imageUrl === ''"></div>
    </div>
    <div class="right">
      <p class="name" :id="nameAnchor">{{ name }}</p>
      <p>{{ bioMinMax(bio) }} <span v-if="shouldShowReadMore(bio)" v-on:click="toggleReadMore()" style="text-decoration: underline;cursor: pointer"> Read {{ readMoreToggle ? "Less" : "More" }} </span></p>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  props: {
    imageUrl: String,
    name: String,
    nameAnchor: String,
    bio: String,
    index: Number,
    color: String,
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
      return "@/assets/speakers/francis_wertz.png";
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
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 3rem;

  @media screen and (max-width: 850px) and (min-width: 798px) {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-items: center;
  }
  
  .left {
    padding: 1rem;
    border-radius: 10px;
    margin-right: 2rem;
    
    @media screen and (max-width: 650px) {
      margin-right: 0;
    }
  }

  .right > p {
    text-align: left;
    margin-top: 0;
    padding-top: 0;

    @media screen and (max-width: 650px) {
      text-align: center;
      margin-top: 1rem;
      margin-left: 0;
    }
  }

  .name {
    color: white;
  }

  .blankImage, img {
    height: 200px;
    width: 200px;
    border-radius: 10px;
    object-fit: cover;
    background-color: grey;
  }
}
</style>