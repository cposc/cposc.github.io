<template>
  <div class="header-banner">
    <img
      class="hero-image"
      src="/src/2026/assets/hero2026.png"
      alt="Hero Image - Circuit board and clouds"
    />
    <div class="banner">
      <div class="stars">
        <div class="star star1"></div>
        <div class="star star2"></div>
        <div class="star star3"></div>
        <div class="star star4"></div>
        <div class="star star5"></div>
        <div class="star star6"></div>
        <div class="star star7"></div>
        <div class="star star8"></div>
        <div class="star star9"></div>
        <div class="star star10"></div>
        <div class="star star11"></div>
        <div class="star star12"></div>
        <div class="star star13"></div>
        <div class="star star14"></div>
        <div class="star star15"></div>
        <div class="star star16"></div>
        <div class="star star17"></div>
        <div class="star star18"></div>
        <div class="star star19"></div>
      </div>
      <!-- <div class="cloud cloud1"></div>
      <div class="cloud cloud2"></div>
      <div class="cloud cloud3"></div>
      <div class="cloud cloud4"></div>
      <div class="cloud cloud5"></div> -->
    </div>
    <div class="feature-copy">
      <h1>Connect with other brilliant minds</h1>
      <p>
        Celebrating Sweet 0x10 years, the Central Pennsylvania Open Source
        Conference (CPOSC) is kicking off another stellar year bringing local
        speakers, coffee, and the tech community together. Join us to discover
        endless possibilities and shape the future, one bit at a time.
      </p>
      <p class="date">March 28, 2026</p>
      <!-- COMMENT THIS OUT once tickets are available -->
      <p><i>Tickets will be available Spring 2026.</i></p>
      <!-- UNCOMMENT THIS once tickets are available - uncomment and update goGetTickets function with ticket URL -->
      <!-- <button @click="goGetTickets">GET TICKETS</button> -->
      <div class="gallery">
        <img
          :src="images[currentIndex].src"
          :alt="images[currentIndex].alt"
          class="gallery-img"
        />
      </div>
    </div>
    <!-- <h2>CPOSC</h2> -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = [
  { src: "/src/2026/assets/carousel/PXL_20230401_130228023.jpg", alt: "CPOSC crowd"},
  { src: "/src/2026/assets/carousel/CPOSC_2019.jpg", alt: "CPOSC crowd"},
  { src: "/src/2026/assets/carousel/IMG_6726.jpg", alt: "CPOSC crowd"},
  { src: "/src/2026/assets/carousel/IMG_6743.jpg", alt: "CPOSC crowd"},
  { src: "/src/2026/assets/carousel/PXL_20230401_142131749.MP.jpg", alt: "CPOSC crowd"},
  { src: "src/2026/assets/carousel/PXL_20230401_200622968.MP.jpg", alt: "CPOSC crowd"},
]

const currentIndex = ref(0);

let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 5000); // rotate every 5 seconds
});

onUnmounted(() => {
  clearInterval(intervalId);
});

// const goGetTickets = () => {
//   // Opens in new tab/window
//   window.open('https://www.example.com', '_blank');
// };
</script>

<style lang="scss" scoped>
.header-banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: #f1f1f1;
  text-align: center;
  width: 100%;
  height: 200px;
  transition: all 0.3s;
  background-color: #2D1B69;
  height: 650px;

  @media screen and (max-width: 1200px) {
    height: 600px;
  }

  @media screen and (max-width: 420px) {
    height: 700px;
  }

  .hero-image {
    z-index: 2;
    width: 100%;
    object-fit: cover;

    @media screen and (max-width: 1200px) {
      height: 600px;
    }

    @media screen and (max-width: 420px) {
      height: 700px;
    }
  }

  .feature-copy {
    position: absolute;
    top: 5rem;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: "Lexend", arial;
    background: linear-gradient(
      to right,
      #121a44 60%,
      rgba(49, 34, 68, 0) 100%
    );
    padding: 2rem 12rem 2rem 2rem;
    border-radius: 12px;
    width: 50%;

    @media screen and (max-width: 1200px) {
      padding-right: 6rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: linear-gradient(
        to bottom,
        #121a44 60%,
        rgba(49, 34, 68, 0) 100%
      );
      padding: 2rem 2rem 2rem 2rem;
      width: 80%;
    }

    h1 {
      font-weight: 400;
      font-style: normal;
      color: white;
      font-size: 45px;
      margin-bottom: 1rem;
      text-align: left;

      @media screen and (max-width: 1465px) {
        max-width: 80%;
      }

      @media screen and (max-width: 1200px) {
        max-width: 100%;
      }

      @media screen and (max-width: 1200px) {
        text-align: center;
      }
    }

    p {
      text-align: left;
      color: #b5b9d5;
      margin: 0;
      max-width: 650px;

      @media screen and (max-width: 1465px) {
        max-width: 80%;
      }

      @media screen and (max-width: 1200px) {
        max-width: 100%;
      }

      @media screen and (max-width: 1200px) {
        text-align: center;
      }

      &.date {
        font-size: 25px;
        margin: 1rem 0;
        font-weight: 800;

        @media screen and (max-width: 1200px) {
          text-align: center;
        }
      }
    }

    button {
      cursor: pointer;
      padding: 0.5rem 1rem;
      color: white;
      background-color: #4c349b;
      font-family: "Lexend", arial;
      font-size: 16px;
      border-radius: 8px;
      border-width: 0px;

      box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
      -webkit-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.75);
    }

    .gallery {
      align-self: flex-end;
      position: absolute;
      margin-right: -16rem;
      margin-top: 6rem;

      @media screen and (max-width: 1465px) {
        margin-top: 0;
      }

      .gallery-img {
        height: 400px;
        width: 400px;
        object-fit: cover;
        border-radius: 12px;

        @media screen and (max-width: 1640px) {
          height: 300px;
          width: 300px;
        }

        @media screen and (max-width: 1200px) {
          display: none;
        }
      }
    }
  }

  h1,
  h2 {
    z-index: 2;
    margin: 0;
    transition: all 0.3s;
    font-family: "Lexend", arial;
  }

  h2 {
    font-family: "Kdam Thmor Pro", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 35px;

    background: -webkit-linear-gradient(#9edfe4, #b0a3ee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

// CLOUDS

.banner {
  z-index: 10;
  position: absolute;
  top: 0;
  width: 100%;
  height: 650px;
  // background: linear-gradient(135deg, #2D1B69 0%, #170d37 50%, #0f0611 100%);
  overflow: hidden;
}

// .cloud {
//   z-index: 10;
//   position: absolute;
//   opacity: 0.8;
//   filter: blur(0.5px);
// }

// .cloud1 {
//   width: 120px;
//   height: 60px;
//   background: radial-gradient(ellipse at center, #a8b5ff 0%, #8b9aff 40%, #6f70c2 70%, rgba(168, 181, 255, 0.3) 100%);
//   border-radius: 60px;
//   animation: float1 20s ease-in-out infinite;
//   top: 20%;
//   left: -10%;
// }

// .cloud1::before {
//   content: '';
//   position: absolute;
//   width: 80px;
//   height: 40px;
//   background: radial-gradient(ellipse at center, #c4ccff 0%, #a8b5ff 50%, rgba(196, 204, 255, 0.4) 100%);
//   border-radius: 40px;
//   top: -15px;
//   left: 15px;
// }

// .cloud1::after {
//   content: '';
//   position: absolute;
//   width: 60px;
//   height: 30px;
//   background: radial-gradient(ellipse at center, #e0e5ff 0%, #c4ccff 50%, rgba(224, 229, 255, 0.4) 100%);
//   border-radius: 30px;
//   top: -8px;
//   right: 10px;
// }

// .cloud2 {
//   width: 100px;
//   height: 50px;
//   background: radial-gradient(ellipse at center, #d4abf5 0%, #c195e6 40%, #a581d9 70%, rgba(212, 171, 245, 0.3) 100%);
//   border-radius: 50px;
//   animation: float2 25s ease-in-out infinite;
//   top: 60%;
//   right: -8%;
// }

// .cloud2::before {
//   content: '';
//   position: absolute;
//   width: 70px;
//   height: 35px;
//   background: radial-gradient(ellipse at center, #e8c9ff 0%, #d4abf5 50%, rgba(232, 201, 255, 0.4) 100%);
//   border-radius: 35px;
//   top: -12px;
//   left: 10px;
// }

// .cloud2::after {
//   content: '';
//   position: absolute;
//   width: 50px;
//   height: 25px;
//   background: radial-gradient(ellipse at center, #f5e6ff 0%, #e8c9ff 50%, rgba(245, 230, 255, 0.4) 100%);
//   border-radius: 25px;
//   top: -6px;
//   right: 8px;
// }

// .cloud3 {
//   width: 140px;
//   height: 70px;
//   background: radial-gradient(ellipse at center, #d8c8ff 0%, #c5b3f5 40%, #b0a3ed 70%, rgba(216, 200, 255, 0.3) 100%);
//   border-radius: 70px;
//   animation: float3 30s ease-in-out infinite;
//   top: 60%;
//   left: 50%;
//   transform: translateX(-50%);
// }

// .cloud3::before {
//   content: '';
//   position: absolute;
//   width: 90px;
//   height: 45px;
//   background: radial-gradient(ellipse at center, #e8deff 0%, #d8c8ff 50%, rgba(232, 222, 255, 0.4) 100%);
//   border-radius: 45px;
//   top: -18px;
//   left: 20px;
// }

// .cloud3::after {
//   content: '';
//   position: absolute;
//   width: 70px;
//   height: 35px;
//   background: radial-gradient(ellipse at center, #f3eeff 0%, #e8deff 50%, rgba(243, 238, 255, 0.4) 100%);
//   border-radius: 35px;
//   top: -10px;
//   right: 15px;
// }

// .cloud4 {
//   width: 90px;
//   height: 45px;
//   background: radial-gradient(ellipse at center, #c9d8f7 0%, #bad1f3 40%, #aabfeb 70%, rgba(201, 216, 247, 0.3) 100%);
//   border-radius: 45px;
//   animation: float4 18s ease-in-out infinite;
//   top: 10%;
//   right: 20%;
// }

// .cloud4::before {
//   content: '';
//   position: absolute;
//   width: 60px;
//   height: 30px;
//   background: radial-gradient(ellipse at center, #dbe7fb 0%, #c9d8f7 50%, rgba(219, 231, 251, 0.4) 100%);
//   border-radius: 30px;
//   top: -10px;
//   left: 12px;
// }

// .cloud4::after {
//   content: '';
//   position: absolute;
//   width: 45px;
//   height: 22px;
//   background: radial-gradient(ellipse at center, #eff5fd 0%, #dbe7fb 50%, rgba(239, 245, 253, 0.4) 100%);
//   border-radius: 22px;
//   top: -5px;
//   right: 8px;
// }

// .cloud5 {
//   width: 110px;
//   height: 55px;
//   background: radial-gradient(ellipse at center, #b8eef2 0%, #a5e8ec 40%, #9cdde1 70%, rgba(184, 238, 242, 0.3) 100%);
//   border-radius: 55px;
//   animation: float5 22s ease-in-out infinite;
//   top: 80%;
//   left: 10%;
// }

// .cloud5::before {
//   content: '';
//   position: absolute;
//   width: 75px;
//   height: 37px;
//   background: radial-gradient(ellipse at center, #d1f4f6 0%, #b8eef2 50%, rgba(209, 244, 246, 0.4) 100%);
//   border-radius: 37px;
//   top: -15px;
//   left: 15px;
// }

// .cloud5::after {
//   content: '';
//   position: absolute;
//   width: 55px;
//   height: 27px;
//   background: radial-gradient(ellipse at center, #e8f9fa 0%, #d1f4f6 50%, rgba(232, 249, 250, 0.4) 100%);
//   border-radius: 27px;
//   top: -8px;
//   right: 12px;
// }

.stars {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.star {
  z-index: 10;
  position: absolute;
  background: #fff;
  border-radius: 50%;
  animation: twinkle 3s ease-in-out infinite alternate;
}

.star1 { width: 2px; height: 2px; top: 15%; left: 80%; animation-delay: 0s; }
.star2 { width: 3px; height: 3px; top: 25%; left: 15%; animation-delay: 1s; }
.star3 { width: 2px; height: 2px; top: 45%; left: 85%; animation-delay: 2s; }
.star4 { width: 1px; height: 1px; top: 65%; left: 70%; animation-delay: 0.5s; }
.star5 { width: 2px; height: 2px; top: 80%; left: 30%; animation-delay: 1.5s; }
.star6 { width: 3px; height: 3px; top: 35%; left: 95%; animation-delay: 2.5s; }

.star7 { width: 2px; height: 2px; top: 25%; left: 90%; animation-delay: 0s; }
.star8 { width: 3px; height: 3px; top: 15%; left: 7.5%; animation-delay: 1s; }
.star9 { width: 2px; height: 2px; top: 55%; left: 82%; animation-delay: 2s; }
.star10 { width: 1px; height: 1px; top: 75%; left: 10%; animation-delay: 0.5s; }
.star11 { width: 2px; height: 2px; top: 90%; left: 15%; animation-delay: 1.5s; }
.star12 { width: 3px; height: 3px; top: 45%; left: 5%; animation-delay: 2.5s; }
.star13 { width: 2px; height: 2px; top: 20%; left: 98%; animation-delay: 0s; }
.star14 { width: 3px; height: 3px; top: 30%; left: 10%; animation-delay: 1s; }
.star15 { width: 2px; height: 2px; top: 50%; left: 75%; animation-delay: 2s; }
.star16 { width: 1px; height: 1px; top: 70%; left: 98%; animation-delay: 0.5s; }

.star17 { width: 1px; height: 1px; top: 76%; left: 45%; animation-delay: 0.5s; }
.star18 { width: 2px; height: 2px; top: 90%; left: 50%; animation-delay: 0.5s; }
.star19 { width: 3px; height: 3px; top: 70%; left: 60%; animation-delay: 0.5s; }

@keyframes float1 {
    0%, 100% { transform: translateX(0) translateY(0); }
    25% { transform: translateX(50px) translateY(-10px); }
    50% { transform: translateX(100px) translateY(5px); }
    75% { transform: translateX(150px) translateY(-5px); }
}

@keyframes float2 {
    0%, 100% { transform: translateX(0) translateY(0); }
    20% { transform: translateX(-40px) translateY(8px); }
    40% { transform: translateX(-80px) translateY(-3px); }
    60% { transform: translateX(-120px) translateY(12px); }
    80% { transform: translateX(-160px) translateY(-8px); }
}

@keyframes float3 {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    33% { transform: translateX(-40%) translateY(-15px); }
    66% { transform: translateX(-60%) translateY(10px); }
}

@keyframes float4 {
    0%, 100% { transform: translateX(0) translateY(0); }
    30% { transform: translateX(-30px) translateY(12px); }
    60% { transform: translateX(-60px) translateY(-8px); }
}

@keyframes float5 {
    0%, 100% { transform: translateX(0) translateY(0); }
    40% { transform: translateX(70px) translateY(-12px); }
    80% { transform: translateX(140px) translateY(8px); }
}

@keyframes twinkle {
    0% { opacity: 0.3; }
    100% { opacity: 1; }
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .banner {
        height: 250px;
    }
    
    .cloud1, .cloud2, .cloud3, .cloud4, .cloud5 {
        transform: scale(0.7);
    }
}
</style>
