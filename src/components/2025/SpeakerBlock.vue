<template>
  <div class="speakerBlock" data-aos="zoom-out" data-aos-duration="5000" data-aos-easing="ease-in-out">
  <div class="right">
      <p class="name" :id="nameAnchor">{{ name }}</p>
      <p class="talk">{{ talkTitle }}</p>
      <p class="abstract">{{ talkAbstract }}</p>
      <img
        v-if="name === 'Scott Dienner'"
        :alt="name"
        src="@/assets/2025/speakers/ScottDienner.jpg"
      />
      <img
        v-if="name === 'Andy James'"
        :alt="name"
        src="@/assets/2025/speakers/AndyJames.jpg"
      />
      <img
        v-if="name === 'Jeff Barrett'"
        :alt="name"
        src="@/assets/2025/speakers/JeffBarrett.jpg"
      />
      <img
        v-if="name === 'Tom Courtney'"
        :alt="name"
        src="@/assets/2025/speakers/TomCourtney.jpg"
      />
      <img
        v-if="name === 'Joe Latrell'"
        :alt="name"
        src="@/assets/2025/speakers/JoeLatrell.png"
      />
      <img
        v-if="name === 'Bob Murphy'"
        :alt="name"
        src="@/assets/2025/speakers/BobMurphy.png"
      />
      <img
        v-if="name === 'Benjamin Sautner'"
        :alt="name"
        src="@/assets/2025/speakers/BenjaminSautner.jpg"
      />
      <img
        v-if="name === 'Alex Mayer'"
        :alt="name"
        src="@/assets/2025/speakers/AlexMayer.png"
      />
      <img
        v-if="name === 'Zach Fedor'"
        :alt="name"
        src="@/assets/2025/speakers/ZachFedor.jpg"
      />
      <img
        v-if="name === 'Peter Stukalov'"
        :alt="name"
        src="@/assets/2025/speakers/PeterStukalov.jpg"
      />
      <div class="blankImage" v-if="imageUrl === ''"></div>
      <p class="bio">{{ bioMinMax(bio) }} <span v-if="shouldShowReadMore(bio)" v-on:click="toggleReadMore()" style="text-decoration: underline;cursor: pointer"> Read {{ readMoreToggle ? "Less" : "More" }} </span></p>
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
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 1rem;
  margin-bottom: 1rem;
  //width: 80%;
  margin-left: auto;
  margin-right: auto;
//   max-width: 450px;

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

.right {
  text-align: center;
}

  .right > p {
    text-align: center;
    margin-top: 0;
    padding-top: 0;

    @media screen and (max-width: 800px) {
      margin: 0 1rem 0 1rem;
    }
  }

  p.bio {
    margin-top: 1em;
    font-size: 0.8em;
  }

  p.talk {
    font-style: italic;
    margin-bottom: 0.25em;
  }

  p.abstract {
    font-size: 0.8em;
  }

  .name {
    font-weight: bold;
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 0.5em;
  }

  .blankImage, img {
    min-height: 200px;
    width: 200px;
    border-radius: 10px;
    object-fit: cover;
    background-color: grey;
    text-align: center;
    margin: 0 auto 0 auto;
  }
}
</style>