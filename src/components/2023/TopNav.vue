<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <div class="headerWrapper">
      <div class="headerInner">
        <div class="hamburgerLeft">
          <div @click="toggleMenu()" class="hamburger" :class="{ active: isOpen }">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="dropdownItems" :class="{ open: isOpen }">
            <RouterLink to="/2023">Home</RouterLink>
            <RouterLink to="/2023/schedule">Schedule</RouterLink>
            <RouterLink to="/2023/speakers">Speakers</RouterLink>
            <RouterLink to="/2023/logistics">Travel</RouterLink>
            <!-- <RouterLink to="/2023/volunteers">Volunteers</RouterLink> -->
            <RouterLink to="/code-of-conduct">Code of Conduct</RouterLink>
          </div>
        </div>
        <div class="headerLeft">
          <RouterLink to="/2023">Home</RouterLink>
          <RouterLink to="/2023/schedule">Schedule</RouterLink>
          <RouterLink to="/2023/speakers">Speakers</RouterLink>
          <RouterLink to="/2023/logistics">Travel</RouterLink>
          <!-- <RouterLink to="/2023/volunteers">Volunteers</RouterLink> -->
        </div>
        <!-- <a target="_blank" href="mailto:cposc@localareanetworks.org?subject=How can I help?"> -->
        <a target="_blank" href="https://cposc.org/">
          <div class="headerRight">
            <!-- <div>GET INVOLVED</div> -->
            <div>CPOSC 2024</div>
          </div>
        </a>
        <div class="hamburgerOverlay" :class="{ open: isOpen }" @click="toggleMenu()"></div>
      </div>
    </div>
  </nav>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>


<style lang="scss" scoped>
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
    max-width: 800px;
  }

  .hamburgerOverlay {
    &.open {
      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      background-color: rgba(0,0,0,0.7);
      z-index: -1;
    }

    @media screen and (min-width: 800px) {
      display: none;
    }
  }

  .hamburgerLeft {
    @media screen and (min-width: 800px) {
      display: none;
    }
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 50px;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    
    .hamburger {
      cursor: pointer;
      padding: 12px;

      div {
        width: 35px;
        height: 2px;
        background-color: white;
        margin: 6px 0;
        transition: transform 0.5s;
      }

      &.active {
        div {
          &:nth-child(1) {
            transform: rotate(45deg);
            margin-top: 10px;
          }

          &:nth-child(2) {
            display: none;
          }

          &:nth-child(3) {
            transform: rotate(135deg);
            margin-top: -8px;
          }
        }
      }
    }

    .dropdownItems {
      &.open {
        height: 300px !important;
      }

      position: absolute;
      top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      height: 0px;
      overflow: hidden;
      transition: height 0.25s;

      a {
        background-color: #1b1b1b;
        width: 100%;
        padding: 10px;
        text-align: center;
        border-bottom: 1px solid black;
        transition: background-color 0.25s;

        &:hover {
          background-color: #2c2c2c;
        }
      }
    }
  }

  .headerLeft {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 800px) {
      display: none;
    }

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

    @media screen and (max-width: 800px) {
      position: absolute;
      top: 0;
      right: 0;

      padding: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
    font-family: var(--open-regular);
  }
}
</style>
