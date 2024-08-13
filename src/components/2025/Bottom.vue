<template>
  <div class="footerWrapper">
    <!-- <img
      v-if="$route.name == 'home'"
      class="footerImage"
      alt="CPOSC Founder Presenting"
      src="@/assets/2024/bottom_galaxy.png"
    /> -->
    <!-- <img
      class="footerImage"
      alt="CPOSC Founder Presenting"
      src="@/assets/2024/bottom_galaxy.png"
    />
    <div class="divider"></div> -->
    <img
      class="logo"
      alt="CPOSC Logo White"
      src="@/assets/2023/cposc-white-logo2016.png"
    />
    <div class="footerContent">
      <div class="footerSection">
        <h4>Links</h4>
        <p><a href="/code-of-conduct" target="_blank">Code of Conduct</a></p>
        <p><a href="/2023" target="_blank">CPOSC 2023</a></p>
        <p><a href="/2024" target="_blank">CPOSC 2024</a></p>
      </div>
      <div class="footerSection">
        <h4>Contact</h4>
        <p><i class="fa-regular fa-envelope"></i>Email: <a href="mailto:cposc@localareanetworks.org" target="_blank">cposc@localareanetworks.org</a></p>
      </div>
      <div class="footerSection">
        <h4>Follow on Social Media</h4>
        <p><i class="fa-brands fa-facebook"></i> <a href="https://www.facebook.com/CPOSC2008" target="_blank">Facebook</a></p>
        <p><i class="fa-brands fa-twitter"></i> <a href="https://twitter.com/CPOSC" target="_blank">Twitter</a></p>
      </div>
    </div>
    <p className="copyright">© 2023-2024 Local Area Networks and CPOSC. All rights reserved.</p>
  </div>
</template>

<script>
export default {
 props: {
    showLine: Boolean
  }
}
</script>

<style lang="scss" scoped>
img.footerImage {
  position: absolute;
  // bottom: 0;
  // left: 0;
}

img.footerImage {
  height: 650px;
  width: 100%;
  object-fit: fill;
  // filter: hue-rotate(300deg);
}

.footerWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1F1F1F;
  color: white;
  width: 100%;

  img.logo {
    width: 200px;
    margin-top: 2rem;
    z-index: 10;
  }

  .footerContent {
    width: 100%;
    padding: 1.5rem 0 0 0;
    z-index: 10;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    i {
      margin-right: 0.5rem;
    }

    .footerSection {
      margin: 0rem 2rem;
    }

    p {
      color: white;
      margin-top: 0;
      margin-bottom: 5px;
      font-size: 14px;
    }

    a {
      color: white;
      text-decoration: none;
      transition: all 0.4s;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid white;
      }
    }

    h4 {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 12px;
      color: white;
      font-weight: bold;
      margin-bottom: 5px;
      margin-top: 16px;
    }
  }

  p.copyright {
    color: white;
    margin-bottom: 0;
    margin-top: 1rem;
    padding: 1.5rem 2rem;
    margin-left: 4rem;
    // background-image: linear-gradient(to right, #186D86, rgba(24, 109, 134, 0));
    width: 100%;

    @media screen and (max-width: 477px) {
      margin-top: 0;
    }
  }
}
</style>
