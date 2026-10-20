<template>
  <div class="speaker-block">
    <div class="speaker" :id="nameAnchor">
      <img
        :alt="name"
        src="@/2026/assets/speakers/x.jpg"
      />
      <div class="speaker-info">
        <h2>{{ name }}</h2>
        <p class="talk">{{ talkTitle }}</p>
        <p class="bio">{{ bio }}</p>
        <p class="abstract">{{ talkAbstract }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    nameAnchor: String,
    imageUrl: String,
    bio: String,
    talkTitle: String,
    talkAbstract: String,
    index: Number,
  },
};
</script>

<style lang="scss" scoped>
.speaker-block {
  width: 300px;
  margin: 20px;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.speaker {
  display: flex;
  flex-direction: column;
  padding: 20px;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
  }
}

.speaker-info {
  h2 {
    font-family: "Lexend", sans-serif;
    margin: 10px 0;
    font-size: 1.3rem;
    color: #2d1b69;
  }

  p {
    font-family: "Quicksand", sans-serif;
    margin: 10px 0;
    font-size: 0.95rem;
    color: #555;

    &.talk {
      font-weight: bold;
      color: #11998e;
    }

    &.abstract {
      font-size: 0.85rem;
      font-style: italic;
      color: #777;
    }
  }
}
</style>
