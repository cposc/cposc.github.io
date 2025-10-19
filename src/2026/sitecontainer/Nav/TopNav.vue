<template>
  <div class="header" id="homepageHeader">
    <a href="/#"><img class="logo" src="/src/2026/assets/logo.png" alt="CPOSC 2026 Logo" /></a>
    <nav class="desktop-nav">
      <ul aria-label="navigation">
        <li>
          <a href="/#about">About</a>
        </li>
        <li>
          <a href="/#sponsors">Sponsors</a>
        </li>
        <li>
          <a href="#schedule">Schedule</a>
        </li>
        <!-- <li>
          <a href="#speakers">Speakers</a>
        </li> -->
        <li>
          <a href="/#travel">Travel</a>
        </li>
        <li>
          <a href="/#volunteer">Volunteer</a>
        </li>
        <!-- <li>
          <a href="#register">Join Us</a>
        </li> -->
      </ul>
    </nav>
    <div>
      <div @click="toggleMenu()" class="hamburger" :class="{ active: isOpen }">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
  <nav class="mobile-nav" :class="{ active: isOpen }">
    <ul aria-label="navigation">
      <li>
        <a href="/#about">About</a>
      </li>
      <li>
        <a href="/#sponsors">Sponsors</a>
      </li>
      <li>
        <a href="#schedule">Schedule</a>
      </li>
      <!-- <li>
        <a href="#speakers">Speakers</a>
      </li> -->
      <li>
        <a href="/#travel">Travel</a>
      </li>
      <li>
        <a href="/#volunteer">Volunteer</a>
      </li>
      <!-- <li>
        <a href="#register">Join Us</a>
      </li> -->
    </ul>
  </nav>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: calc(100% - 32px);
  padding: 0 16px;
  background: #0e0723;
  color: #f1f1f1;
  position: absolute;
  z-index: 20;
  transition: all 0.2s;

  &.sticky {
    position: sticky;
    top: 0px;
    color: #f1f1f1;

    @media screen and (max-width: 1000px) {
      position: absolute;
    }
  }

  @media screen and (max-width: 1000px) {
    top: 0;
  }

  @media screen and (max-width: 650px) {
    justify-content: space-between;
  }

  .desktop-nav {
    @media screen and (max-width: 650px) {
      display: none;
    }

    ul {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      margin: 0;

      li {
        display: flex;
      }
    }
  }

  .logo {
    height: 35px;
    margin-right: 1rem;
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 4px;

    a {
      padding: 1.5rem 1rem;
      transition: all 0.3s;
      color: white;
      text-decoration: none;

      &:hover {
        background-color: rgba(255, 255, 255, 0.2);
      }
    }
  }
}

.hamburger,
.mobile-nav {
  @media screen and (min-width: 650px) {
    display: none !important;
  }
}

.mobile-nav {
  display: none;
  &.active {
    display: flex;
  }
}

.hamburger {
  cursor: pointer;
  padding: 12px;
  height: 30px;

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

.mobile-nav {
  position: absolute;
  top: 42px;
  z-index: 50;
  background: #0e0723;
  width: 100%;

  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    width: 100%;

    li {
      display: flex;
      padding: 1rem;
      width: calc(100% - 1rem);

      a {
        color: white;
        text-decoration: none;
        width: 100%;
        text-align: center;
      }
      &:hover {
        background: #24174c;
      }
    }
  }
}
</style>

<script setup>
import { onMounted, onUnmounted } from "vue";

onMounted(() => {
  const header = document.getElementById("homepageHeader");
  if (!header) return;

  const sticky = header.offsetTop;
  const url = window.location.href;
  let overrideSticky = false;

  const handleScroll = () => {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else if (!overrideSticky) {
      header.classList.remove("sticky");
    }
  };

  const checkForSticky = () => {
    if (url.includes("logistics") || url.includes("sponsors")) {
      overrideSticky = true;
      header.classList.add("sticky");
    }
  };

  window.addEventListener("scroll", handleScroll);
  window.navigation.addEventListener("navigate", checkForSticky());
  checkForSticky();

  // Clean up on unmount
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>
