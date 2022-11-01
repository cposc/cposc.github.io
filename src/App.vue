<script setup>
import { RouterLink, RouterView } from "vue-router";
import Bottom from "./components/Bottom.vue";
</script>

<template>
  <nav>
    <div class="headerWrapper">
      <div class="headerInner">
        <div class="headerLeft">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/schedule">Schedule</RouterLink>
          <RouterLink to="/volunteers">Volunteers</RouterLink>
          <RouterLink to="/speakers">Speakers</RouterLink>
          <RouterLink to="/logistics">Travel</RouterLink>
          <RouterLink to="/faq">Faq</RouterLink>
        </div>
        <div class="headerRight">
          <div>REGISTER</div>
        </div>
      </div>
    </div>
  </nav>
    <RouterView />
    <Bottom :showLine="$route.name === 'home'"/>
    <!-- <div class="wrapper">


      HOW - to get involved or be in the loop about it - links to social media, etc
      HOW - can you get involved (sponsor prospectus, levels, etc

   -->
</template>

<style lang="scss" scoped>
@keyframes navColor {
  0%   {background-color: rgba(43, 52, 128, 0);}
  25%  {background-color: rgba(43, 52, 128, 25);}
  50%  {background-color: rgba(43, 52, 128, 50);}
  100% {background-color: rgba(43, 52, 128, 100);}
}

.headerWrapper {
  z-index: 50;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0,0,0,0.5);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: var(--open-regular);

  .headerInner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
  }

  .headerLeft {
    display: flex;
    flex-direction: row;
    align-items: center;

    a {
      display: block;
      font-size: 13px;
      letter-spacing: 2px;
      padding: 2rem 1.5rem;

      &:hover {
        animation-name: navColor;
        animation-duration: 4s;
        background-color: #2b3480;
      }
    }
  }

  .headerRight {
    cursor: pointer;
    color: white;
    font-size: 13px;
    letter-spacing: 2px;
    padding: 2rem 1.5rem;
    background-color: #2b3480;
  }
}

a {
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-family: var(--open-regular);
}
</style>
