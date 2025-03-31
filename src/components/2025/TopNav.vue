<script setup>
import { useMenuStore } from "../../store/menuStore";
const menuStore = useMenuStore();
</script>

<template>
  <nav>
    <div class="headerWrapper">
      <div class="headerInner">
        <div class="hamburgerLeft">
          <div @click="menuStore.toggleMenu()" class="hamburger" :class="{ active: menuStore.isOpen }">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="dropdownItems" :class="{ open: menuStore.isOpen }">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/schedule">Schedule</RouterLink>
            <!-- <RouterLink to="/logistics">Travel</RouterLink> -->
            <RouterLink to="/sponsors">Sponsor</RouterLink>
            <RouterLink to="/volunteers">Volunteer</RouterLink>
            <!-- <RouterLink to="/schedule">Schedule</RouterLink> -->
            <RouterLink to="/code-of-conduct">Code of Conduct</RouterLink>
          </div>
        </div>
        <div class="headerLeft">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/sponsors">Sponsor</RouterLink>
          <RouterLink to="/schedule">Schedule</RouterLink>
          <!-- <RouterLink to="/logistics">Travel</RouterLink> -->
          <RouterLink to="/volunteers">Volunteer</RouterLink>
          <!-- <RouterLink to="/schedule">Schedule</RouterLink> -->
          <!-- <a target="_blank" href="https://forms.gle/yCLJWq8TFPRfrEsu9">
            <div>
              <div><b>SUBMIT A TALK</b></div>
            </div>
          </a> -->
          <a target="_blank" href="https://www.eventbrite.com/e/1009939595517">
            <div>
              <div><b>GET YOUR TICKET</b></div>
            </div>
          </a>
        </div>
        
        <div class="hamburgerOverlay" :class="{ open: menuStore.isOpen }" @click="menuStore.toggleMenu()"></div>
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
  // background-color: rgba(0,0,0,0.5);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: var(--open-regular);

  .headerInner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    border-bottom: 1px solid white;
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
    height: 77px;
    width: 100%;
    background-color: rgba(0,0,0,0.5);

    @media screen and (max-width: 640px) {
      height: 68px;
    }

    .hamburger {
      cursor: pointer;
      padding: 23px;

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
        height: 350px !important;
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
        padding: 20px;
        text-align: center;
        border-bottom: 1px solid #1F1F1F;
        transition: background-color 0.25s;

        &:hover {
          background-color: #2c2c2c;
        }

        &.router-link-active { 
          font-weight: bold; 
          color: #0fc4e4;
          background-color: #3e3e3e;
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
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }

  .headerRight {
    cursor: pointer;
    color: white;
    font-size: 13px;
    letter-spacing: 2px;
    padding: 2rem 1.5rem;
    // background-color: #2b3480;

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
