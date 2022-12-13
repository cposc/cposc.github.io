<script setup>
import GradientContainer from "../components/GradientContainer.vue";
</script>

<template>
  <div class="pageContainer">
    <h4>SPEAKERS</h4>
    <h1>Talk to Us</h1>
    <div class="line"></div>
    <div class="pageContent">
      <p>We will be opening our CFP in January of 2023, but it’s never too early to start thinking about your talk! If you have questions about an idea, don’t hesitate to <a href="mailto:cposc@localareanetworks.org" target="_blank">contact us</a> to chat about it. Be sure to follow us on social media for updates on when the CFP begins. You can find us on <a href="https://www.facebook.com/CPOSC2008" target="_blank">Facebook</a> and <a href="https://twitter.com/CPOSC" target="_blank">Twitter</a>.</p>
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