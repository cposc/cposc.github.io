<template>
  <div class="speakerBlock">
    <div class="left">
      <img
        v-if="name === 'Deanna Bledsoe'"
        :alt="name"
        src="@/assets/speakers/deanna_bledsoe.jpg"
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
        v-if="name === 'Jonathan Fleckenstein'"
        :alt="name"
        src="@/assets/speakers/jonathan_fleckenstein.jpeg"
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
        v-if="name === 'Tom Swartz'"
        :alt="name"
        src="@/assets/speakers/tom_swartz.jpeg"
      />
      <div class="blankImage" v-if="imageUrl === ''"></div>
    </div>
    <div class="right">
      <p class="name">{{ name }}</p>
      <p>{{ bio }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageUrl: String,
    name: String,
    bio: String,
  },
  methods: {
    toImageURL: function(img) {
      console.log(`@/assets/${img}`)
      return "@/assets/speakers/francis_wertz.png";
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
    margin-right: 2rem;
    background-color: grey;

    @media screen and (max-width: 650px) {
      margin-right: 0;
    }
  }
}
</style>