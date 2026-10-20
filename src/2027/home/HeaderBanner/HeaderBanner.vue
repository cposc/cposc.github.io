<template>
  <div class="header-banner">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" width="100%" role="img" aria-label="Animated banner: a circuit running through a map of Pennsylvania" xmlns:c2pa="http://c2pa.org/manifest"><metadata><c2pa:manifest>AAAWgmp1bWIAAAAeanVtZGMycGEAEQAQgAAAqgA4m3EDYzJwYQAAABZcanVtYgAAAEdqdW1kYzJtYQARABCAAACqADibcQN1cm46YzJwYTo4OTM2ZTk0MC1jZjEwLTQ3MjUtOGUyYi1iYjI5NmY2NDE3YWUAAAADl2p1bWIAAAApanVtZGMyYXMAEQAQgAAAqgA4m3EDYzJwYS5hc3NlcnRpb25zAAAAALxqdW1iAAAARGp1bWRjYm9yABEAEIAAAKoAOJtxE2MycGEuaW5ncmVkaWVudC52MwAAAAAYYzJzaFARBIUlAbBJduOtooYmqOwAAABwY2JvcqNpZGM6Zm9ybWF0bWltYWdlL3N2Zyt4bWxqaW5zdGFuY2VJRHgseG1wOmlpZDpkMDEzMTBjMS0zMTZiLTQwOTMtODc3NS02MjQ0ZWE5NjBkZDNscmVsYXRpb25zaGlwaHBhcmVudE9mAAAB4mp1bWIAAABBanVtZGNib3IAEQAQgAAAqgA4m3ETYzJwYS5hY3Rpb25zLnYyAAAAABhjMnNof/JZA2gMlZrOriiCFVNHLQAAAZljYm9yomdhY3Rpb25zgqJmYWN0aW9ua2MycGEub3BlbmVkanBhcmFtZXRlcnOha2luZ3JlZGllbnRzgaJjdXJseC1zZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmluZ3JlZGllbnQudjNkaGFzaFggN4vPy15x6j6sd1nKfRp8ochYr6ofrEBF45JJhVJSyEOkZmFjdGlvbngdY29tLmFudGhyb3BpYy5jbGF1ZGUucHJvdmlkZWRqcGFyYW1ldGVyc6F4H2NvbS5hbnRocm9waWMub3JpZ2luLWNvbmZpZGVuY2VndW5rbm93bmtkZXNjcmlwdGlvbnhmQ2xhdWRlIHByb3ZpZGVkIHRoaXMgZmlsZSBhdCB0aGUgcmVxdWVzdCBvZiBhIHVzZXIgYW5kIG1heSBoYXZlIGNyZWF0ZWQgb3IgbW9kaWZpZWQgdGhlIGZpbGUgY29udGVudHMubXNvZnR3YXJlQWdlbnShZG5hbWVmQ2xhdWRlcmFsbEFjdGlvbnNJbmNsdWRlZPUAAADIanVtYgAAAEBqdW1kY2JvcgARABCAAACqADibcRNjMnBhLmhhc2guZGF0YQAAAAAYYzJzaPPDM4AZCBQ1ejowTXcyVjQAAACAY2JvcqVjYWxnZnNoYTI1NmNwYWRNAAAAAAAAAAAAAAAAAGRoYXNoWCCeN3/n6dAc+3tiAI9XyL3ksClhgQy4ke8Ew+mkdHhDbGRuYW1lbmp1bWJmIG1hbmlmZXN0amV4Y2x1c2lvbnOBomVzdGFydBjkZmxlbmd0aBkeBAAAAj5qdW1iAAAAJ2p1bWRjMmNsABEAEIAAAKoAOJtxA2MycGEuY2xhaW0udjIAAAACD2Nib3KlY2FsZ2ZzaGEyNTZpc2lnbmF0dXJleE1zZWxmI2p1bWJmPS9jMnBhL3VybjpjMnBhOjg5MzZlOTQwLWNmMTAtNDcyNS04ZTJiLWJiMjk2ZjY0MTdhZS9jMnBhLnNpZ25hdHVyZWppbnN0YW5jZUlEeCx4bXA6aWlkOjY3ZTk0ZTY5LTVjNmMtNDcxZi04MjFjLWVkMjkzMzVjMWJlZXJjcmVhdGVkX2Fzc2VydGlvbnODomN1cmx4LXNlbGYjanVtYmY9YzJwYS5hc3NlcnRpb25zL2MycGEuaW5ncmVkaWVudC52M2RoYXNoWCA3i8/LXnHqPqx3Wcp9GnyhyFivqh+sQEXjkkmFUlLIQ6JjdXJseCpzZWxmI2p1bWJmPWMycGEuYXNzZXJ0aW9ucy9jMnBhLmFjdGlvbnMudjJkaGFzaFggPGQhCbjSJNCP8IugAlb8HgYWCS/EKAJ1B0DPw8MReEqiY3VybHgpc2VsZiNqdW1iZj1jMnBhLmFzc2VydGlvbnMvYzJwYS5oYXNoLmRhdGFkaGFzaFggl4RHnhci38hii/o6DcsHc4yMvxHLDymAUIuZAw16QQl0Y2xhaW1fZ2VuZXJhdG9yX2luZm+jZG5hbWVvQW50aHJvcGljIEZpbGVzZ3ZlcnNpb25lMS4wLjBrc3BlY1ZlcnNpb25lMi40LjAAABA4anVtYgAAAChqdW1kYzJjcwARABCAAACqADibcQNjMnBhLnNpZ25hdHVyZQAAABAIY2JvctKEWQISogEmGCFZAgowggIGMIIBjaADAgECAhRA5aAK7sI50L64g/oGQgU9Z1UTADAKBggqhkjOPQQDAzBJMRcwFQYDVQQKEw5BbnRocm9waWMsIFBCQzEuMCwGA1UEAxMlQW50aHJvcGljIENvbnRlbnQgQ3JlZGVudGlhbHMgUm9vdCBDQTAeFw0yNjA4MDcxODQzNTZaFw0yODA4MDYxOTQzNTZaMEQxFzAVBgNVBAoTDkFudGhyb3BpYywgUEJDMSkwJwYDVQQDEyBBbnRocm9waWMgQ2xhdWRlIENvbnRlbnQgU2lnbmluZzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABJh6CmvLUBgFFNU0vUKlOVtE6djd17L5SuwX0LemFisBM3dkd/3cyjxFA3Qo5S46fX0/ihY0VZ7mfb9KF703t5OjWDBWMA4GA1UdDwEB/wQEAwIHgDAVBgNVHSUEDjAMBgorBgEEAYPoXgIBMAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUzlHiBIFOZFsj+OPEz5o+nMHXXMIwCgYIKoZIzj0EAwMDZwAwZAIwMXMdFJ4BetLLVY7ORuE9noqbbAZOZn/aArXyTwFAZfKrPzxF2vPoJNf1+UCdg1XGAjBwX1zd9WGqYkqmL5SFqw1QySjr1zJfpJM9+1rdDwSPLMOPOjKuiXjoU/pUUeG9RwmhY3BhZFkNngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPZYQFu1PsDBWrFtu5CEM5+GcrU7PEa2YzhMMPacVcVsX3ZFwJe4wdbOOk14tTkzws5M310vf5av7rRWng4iCJLQ16w=</c2pa:manifest></metadata>
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0b0c0e"/>
      <stop offset="1" stop-color="#1b1d21"/>
    </linearGradient>
    <linearGradient id="land" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#25282d"/>
      <stop offset="1" stop-color="#15171a"/>
    </linearGradient>
    <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
      <path d="M24 0H0V24" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
    </pattern>
    <clipPath id="paClip">
      <path id="paShape" d="M410,37 L467,10 L467,37 L800,37 L849,102 L816,140 L812,168 L838,222 L816,252 L795,257 L767,265 L410,265 Z"/>
    </clipPath>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2.5" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="redglow" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="3" result="b"/>
      <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
 
  <!-- Background -->
  <rect width="1200" height="300" fill="url(#bg)"/>
  <rect width="1200" height="300" fill="url(#grid)"/>
 
  <!-- Decorative gray traces -->
  <g class="deco">
    <path d="M0,130 H180 L210,100 H330"/>
    <path d="M0,215 H120 L150,245 H300 L330,275 H420"/>
    <path d="M1200,70 H1080 L1050,40 H940"/>
    <path d="M1200,270 H1090 L1060,240 H980"/>
    <path d="M60,0 V50 L90,80 H200"/>
    <path d="M1140,300 V250 L1110,220 H1030"/>
  </g>
  <g fill="#4a4e55" fill-opacity="0.8">
    <circle cx="330" cy="100" r="3"/><circle cx="420" cy="275" r="3"/>
    <circle cx="940" cy="40" r="3"/><circle cx="980" cy="240" r="3"/>
    <circle cx="200" cy="80" r="3"/><circle cx="1030" cy="220" r="3"/>
  </g>
 
  <!-- Pennsylvania -->
  <use href="#paShape" fill="url(#land)"/>
  <g clip-path="url(#paClip)">
    <rect x="400" y="0" width="460" height="300" fill="url(#grid)"/>
    <rect class="scan" x="400" y="0" width="460" height="2" fill="#2dd4bf" fill-opacity="0.12"/>
  </g>
  <use href="#paShape" fill="none" stroke="#5a5f67" stroke-width="2" stroke-linejoin="round"/>
  <path class="sweep" pathLength="1000"
        d="M410,37 L467,10 L467,37 L800,37 L849,102 L816,140 L812,168 L838,222 L816,252 L795,257 L767,265 L410,265 Z"/>
 
  <!-- Circuit: base traces (dim) -->
  <g class="trace">
    <path d="M0,193 H449 H520 L556,158 H611 H650 L684,192 V210 H740 L772,242 H815"/>
    <path d="M0,70 H350 L390,30 H443"/>
    <path d="M611,158 V120 L635,96 H777"/>
    <path d="M777,96 H900 L930,126 H1200"/>
    <path d="M815,242 H950 L980,212 H1200"/>
    <path d="M0,262 H280 L320,222 H449 V193"/>
  </g>
 
  <!-- Circuit: animated current -->
  <g>
    <path class="flow" pathLength="200" d="M0,193 H449 H520 L556,158 H611 H650 L684,192 V210 H740 L772,242 H815"/>
    <path class="flow f2" pathLength="100" d="M0,70 H350 L390,30 H443"/>
    <path class="flow f3" pathLength="100" d="M611,158 V120 L635,96 H777"/>
    <path class="flow f4" pathLength="150" d="M777,96 H900 L930,126 H1200"/>
    <path class="flow f2" pathLength="150" d="M815,242 H950 L980,212 H1200"/>
    <path class="flow f3" pathLength="100" d="M0,262 H280 L320,222 H449 V193"/>
  </g>
 
  <!-- Junction nodes -->
  <g class="node">
    <circle cx="611" cy="158" r="5"/>
    <circle cx="777" cy="96" r="5"/>
    <circle cx="520" cy="193" r="3.5"/>
    <circle cx="740" cy="210" r="3.5"/>
    <circle cx="320" cy="222" r="3.5"/>
    <circle cx="900" cy="96" r="3.5"/>
    <circle cx="950" cy="242" r="3.5"/>
  </g>
 
  <!-- Cities: Erie, Pittsburgh, Harrisburg, Philadelphia -->
  <g>
    <circle class="ring" cx="443" cy="24" r="5"/>
    <circle class="city" cx="443" cy="24" r="4.5"/>
 
    <circle class="ring r2" cx="449" cy="193" r="5"/>
    <circle class="city" cx="449" cy="193" r="5.5"/>
 
    <circle class="ring r3" cx="684" cy="210" r="5"/>
    <circle class="city" cx="684" cy="210" r="6.5"/>
    <circle cx="684" cy="210" r="2.2" fill="#0b0c0e"/>
 
    <circle class="ring" cx="815" cy="242" r="5"/>
    <circle class="city" cx="815" cy="242" r="5.5"/>
  </g>
 
  <!-- Lancaster County: the red rose -->
  <path d="M740,210 L731,220" fill="none" stroke="#2dd4bf" stroke-opacity="0.35" stroke-width="1.4"/>
  <g transform="translate(728,233)">
    <circle class="rose-ring" r="23"/>
    <g class="bloom" filter="url(#redglow)">
      <!-- sepals -->
      <g fill="#3a3d42" stroke="#1b1d21" stroke-width="0.6">
        <path d="M0,-6 L3.5,-17 L-3.5,-17 Z"/>
        <path d="M0,-6 L3.5,-17 L-3.5,-17 Z" transform="rotate(90)"/>
        <path d="M0,-6 L3.5,-17 L-3.5,-17 Z" transform="rotate(180)"/>
        <path d="M0,-6 L3.5,-17 L-3.5,-17 Z" transform="rotate(270)"/>
      </g>
      <!-- outer petals -->
      <g fill="#a8101c" stroke="#5e0810" stroke-width="0.7">
        <ellipse cy="-9" rx="8" ry="8"/>
        <ellipse cy="-9" rx="8" ry="8" transform="rotate(72)"/>
        <ellipse cy="-9" rx="8" ry="8" transform="rotate(144)"/>
        <ellipse cy="-9" rx="8" ry="8" transform="rotate(216)"/>
        <ellipse cy="-9" rx="8" ry="8" transform="rotate(288)"/>
      </g>
      <!-- middle petals -->
      <g fill="#cf1f2d" stroke="#7a0b14" stroke-width="0.6">
        <ellipse cy="-5.5" rx="5.5" ry="5.5" transform="rotate(36)"/>
        <ellipse cy="-5.5" rx="5.5" ry="5.5" transform="rotate(108)"/>
        <ellipse cy="-5.5" rx="5.5" ry="5.5" transform="rotate(180)"/>
        <ellipse cy="-5.5" rx="5.5" ry="5.5" transform="rotate(252)"/>
        <ellipse cy="-5.5" rx="5.5" ry="5.5" transform="rotate(324)"/>
      </g>
      <!-- heart -->
      <circle r="4.2" fill="#ef3340" stroke="#8c0d17" stroke-width="0.6"/>
      <path d="M0,0 C1.5,-0.5 2.2,1.5 0,2.2 C-2.6,2.5 -3.2,-1.6 0,-3 C3.6,-4.3 5.2,0 3,3.2"
            fill="none" stroke="#ff8a93" stroke-width="0.9" stroke-linecap="round"/>
    </g>
  </g>
 
  <!-- Red accents: corner brackets and tick marks -->
  <g fill="none" stroke="#ef3340" stroke-width="2.5" stroke-linecap="square">
    <path d="M18,50 V18 H50"/>
    <path d="M1182,50 V18 H1150"/>
    <path d="M18,250 V282 H50"/>
    <path d="M1182,250 V282 H1150"/>
  </g>
  <g fill="#ef3340">
    <rect x="70" y="16" width="40" height="3"/>
    <rect x="1090" y="281" width="40" height="3"/>
  </g>
</svg>
    <!-- <div class="feature-copy">
      <h1>Connect with other brilliant minds</h1>
      <p>
        The Central Pennsylvania Open Source Conference (CPOSC) celebrates 17
        years of bringing together technologists, developers, and digital
        innovators. We're excited for our upcoming 2027 event with new themes,
        inspiring speakers, and incredible networking opportunities!
      </p>
      <p class="date">Coming Spring 2027</p>
      <button @click="goGetTickets">STAY TUNED FOR UPDATES</button>
    </div> -->
  </div>
</template>

<script setup>
// const goGetTickets = () => {
//   // Opens in new tab/window
//   window.open("https://www.linkedin.com/company/central-pa-open-source-conference", "_blank");
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
  transition: all 0.3s;

  @media screen and (max-width: 650px) {
    margin-top: 54px;
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
    z-index: 12;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: "Lexend", arial;
    background: linear-gradient(to right, #121a44 60%, rgba(49, 34, 68, 0) 100%);
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

    @media screen and (max-width: 1000px) {
      margin-top: 4rem;
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
      border-width: 0;
      box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.75);
      -webkit-box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0 0 10px -2px rgba(0, 0, 0, 0.75);
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

// SVG

.trace { fill: none; stroke: #2dd4bf; stroke-opacity: 0.22; stroke-width: 1.6; stroke-linejoin: round; }
    .deco  { fill: none; stroke: #4a4e55; stroke-opacity: 0.55; stroke-width: 1.2; stroke-linejoin: round; }
    .flow  { fill: none; stroke: #5eead4; stroke-width: 2.6; stroke-linecap: round; stroke-linejoin: round;
             stroke-dasharray: 18 82; filter: url(#glow); animation: flow 3.6s linear infinite; }
    .f2 { animation-duration: 4.6s; animation-delay: -1.2s; }
    .f3 { animation-duration: 5.4s; animation-delay: -2.6s; }
    .f4 { animation-duration: 3.2s; animation-delay: -0.6s; }
    @keyframes flow { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
 
    .node  { fill: #0b0c0e; stroke: #2dd4bf; stroke-width: 1.8; }
    .city  { fill: #ef3340; filter: url(#redglow); }
    .ring  { fill: none; stroke: #ef3340; stroke-width: 1.4; transform-box: fill-box; transform-origin: center;
             animation: pulse 2.8s ease-out infinite; }
    .r2 { animation-delay: -0.9s; }
    .r3 { animation-delay: -1.8s; }
    @keyframes pulse { 0% { transform: scale(0.6); opacity: 0.9; } 100% { transform: scale(3.2); opacity: 0; } }
 
    .sweep { fill: none; stroke: #ef3340; stroke-width: 2.2; stroke-linecap: round; stroke-dasharray: 70 930;
             filter: url(#redglow); animation: sweep 9s linear infinite; }
    @keyframes sweep { from { stroke-dashoffset: 1000; } to { stroke-dashoffset: 0; } }
 
    .scan { animation: scan 7s linear infinite; }
    @keyframes scan { from { transform: translateY(-20px); } to { transform: translateY(300px); } }
 
    .rose-ring { fill: none; stroke: #2dd4bf; stroke-opacity: 0.55; stroke-width: 1.2; stroke-dasharray: 3 5;
                 transform-box: fill-box; transform-origin: center; animation: spin 22s linear infinite; }
    @keyframes spin { to { transform: rotate(360deg); } }
    .bloom { transform-box: fill-box; transform-origin: center; animation: bloom 4.5s ease-in-out infinite; }
    @keyframes bloom { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.07); } }
 
    @media (prefers-reduced-motion: reduce) {
      .flow, .ring, .sweep, .scan, .rose-ring, .bloom { animation: none; }
      .flow { stroke-dasharray: 18 82; }
    }
</style>
