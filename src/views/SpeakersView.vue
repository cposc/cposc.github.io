<script setup>
import GradientContainer from "../components/GradientContainer.vue";
</script>

<template>
  <div class="pageContainer">
    <h4>SPEAKERS</h4>
    <h1>Talk to Us</h1>
    <div class="line"></div>
    <div class="pageContent">
      <p>We’re ready for you! You can submit your talk using <a href="https://forms.gle/7XxjyBCzKFUyvj8R8" target="_blank">this form</a>.</p>
      <p>Remember, if you’re overflowing with ideas you are welcome to submit as many talk proposals as you like, though at most only one talk per speaker will be selected. If you have questions about a talk topic or the logistics of being a CPOSC speaker, don’t hesitate to <a href="mailto:cposc@localareanetworks.org" target="_blank">contact us</a> and we’d be more than happy to chat about it. Thanks for your interest in making CPOSC 2023 a great day of new knowledge for our attendees!.</p>
    </div>
    <GradientContainer />
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
p > a {
  color: white;
  transition: color 0.25s;

  &:hover {
    color: #848699;
  }
}
</style>