<template>
  <div class="header" id="homepageHeader">
    <img
      class="logo"
      src="/src/2026/assets/logo.png"
      alt="CPOSC 2026 Logo"
    />
    <nav>
      <a href="/#about">About</a>
      <a href="/#sponsors">Sponsors</a>
      <!-- <a href="#schedule">Schedule</a> -->
      <!-- <a href="#speakers">Speakers</a> -->
      <a href="/#travel">Travel</a>
      <a href="/#volunteer">Volunteer</a>
      <!-- <a href="#register">Join Us</a> -->
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
  // background: linear-gradient(45deg, #2d1b69, #11998e);
  background: #0e0723;
  color: #f1f1f1;
  position: absolute;
  z-index: 10;
  transition: all 0.2s;

  .logo {
    height: 35px;
    margin-right: 1rem;
  }

  &.sticky {
    position: sticky;
    top: 0px;
    // padding: 10px 16px;
    color: #f1f1f1;

    a {
      padding: 1.5rem 1rem;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 4px;

    a {
      padding: 1rem;
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

  const handleScroll = () => {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

  window.addEventListener("scroll", handleScroll);

  // Clean up on unmount
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>
