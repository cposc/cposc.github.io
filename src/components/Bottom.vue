<template>
  <div class="footerWrapper">
    <div class="divider" v-if="showLine"></div>
    <img
      alt="CPOSC Logo White"
      src="@/assets/cposc-white-logo2016.png"
    />
    <div class="footerContent">
      <h4><a href="/code-of-conduct">Code of Conduct</a></h4>
      <h4>Contact</h4>
      <p><i class="fa-regular fa-envelope"></i>Email: <a href="mailto:cposc@localareanetworks.org" target="_blank">cposc@localareanetworks.org</a></p>
      <h4>Follow on Social Media</h4>
      <p><i class="fa-brands fa-facebook"></i> <a href="https://www.facebook.com/CPOSC2008" target="_blank">Facebook</a></p>
      <p><i class="fa-brands fa-twitter"></i> <a href="https://twitter.com/CPOSC" target="_blank">Twitter</a></p>
      <p>© 2022-2023 Local Area Networks and CPOSC. All rights reserved.</p>
    </div>
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
.footerWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #1F1F1F;
  width: 100%;
  color: white;
  margin-top: -1px;

  img {
    width: 200px;
    margin-top: 6rem;
  }

  .divider {
    height: 5px;
    background-color: #2b3480;
    width: 500px;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }

  .footerContent {
    width: 100%;
    padding: 1.5rem 0 0 0;

    i {
      margin-right: 0.5rem;
    }

    p {
      color: #b1b3b1;
      margin-top: 0;
      margin-bottom: 5px;
      font-size: 14px;
      padding-left: 2rem;

      &:last-of-type {
        color: white;
        margin-bottom: 0;
        margin-top: 1rem;
        padding: 1.5rem 2rem;
        background-image: linear-gradient(to right, #1F1F1F, #2b3480);
      }
    }

    a {
      color: #b1b3b1;
    }

    h4 {
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 12px;
      color: white;
      margin-bottom: 5px;
      margin-left: 2rem;
      margin-top: 16px;
    }
  }
}
</style>
