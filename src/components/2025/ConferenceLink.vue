<template>
  <div>
    <a v-if="external" :href="link" target="_blank" rel="noreferrer">{{
      linkContent
    }}</a>
    <a v-if="!external" :href="link">
      {{ linkContent }}
    </a>
  </div>
</template>

<script>
export default {
 props: {
    link: String,
    external: Boolean,
    linkContent: String,
  },
}
</script>

<style lang="scss" scoped>
</style>
