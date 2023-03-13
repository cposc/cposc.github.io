<template>
  <div class="scheduleBlock">
    <div class="scheduleTime">{{ time }}</div>
    <div class="scheduleDetails">
      <p>{{ title }}</p>
      <h1 v-if="title === 'Lightning Talks' || title === 'Desserts & Debriefs'" class="lightning binns">Binns Room</h1>
      <h1 v-if="title === 'Welcome to CPOSC!' || title === 'Lightning Talks Round #2' || title === 'Farewell, Closing Remarks'" class="lightning aud">The Auditorium / Steinman Hall</h1>
      <p>{{ description }}</p>
      <div v-if="sessions && sessions.length > 0" class="sessionBlocks">
        <div v-for="(session, index) in sessions" v-bind:key="index" class="sessionBlock">
          <h1 v-if="index === 0" class="aud">The Auditorium / Steinman Hall - {{ session.speaker }}</h1>
          <h1 v-if="index === 1" class="binns">Binns Room - {{ session.speaker }}</h1>
          <h1 v-if="index === 2" class="library">Library - {{ session.speaker }}</h1>
          <p class="title">{{ session.title }}</p>
          <p v-if="session.desc" class="description">{{ session.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    time: String,
    title: String,
    description: String,
    sessions: Array,
  }
}
</script>

<style lang="scss" scoped>
.scheduleBlock {
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  background-color: rgba(31,31,31,0.5);
  color: white;
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
      background-color: rgba(41, 41, 41, 0.5);
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
  }

  h1.binns {
    background-color: rgb(0, 126, 172);
  }

  h1.aud {
    background-color: #2b3480;
  }

  h1.library {
    background-color: rgb(114, 11, 151);
  }

  .lightning {
    margin-top: 0;
  }
}
</style>