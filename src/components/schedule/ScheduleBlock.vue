<template>
  <div class="scheduleBlock">
    <div class="scheduleTime">{{ time }}</div>
    <div class="scheduleDetails">
      <p>{{ title }}</p>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    time: String,
    title: String,
    description: String
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
  padding: 2rem 0rem;
  border-radius: 10px;
  margin-bottom: 1rem;

  .scheduleTime {
    width: 350px;
    text-align: center;
    font-family: var(--lato-regular);
    letter-spacing: 1px;
    font-size: 14px;
  }

  .scheduleDetails {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      margin-top: -2px;

      &:last-of-type {
        font-size: 14px;
      }
    }
  }
}
</style>