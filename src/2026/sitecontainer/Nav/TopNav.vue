<template>
  <div class="header" id="homepageHeader">
    <img class="logo" src="/src/2026/assets/logo.png" alt="CPOSC 2026 Logo" />
    <nav>
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
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 16px;
  background: #0e0723;
  color: #f1f1f1;
  position: absolute;
  z-index: 20;
  transition: all 0.2s;

  @media screen and (max-width: 1000px) {
    top: 0;
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

  .logo {
    height: 35px;
    margin-right: 1rem;
  }

  &.sticky {
    position: sticky;
    top: 0px;
    color: #f1f1f1;

    @media screen and (max-width: 1000px) {
      position: absolute;
    }
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
