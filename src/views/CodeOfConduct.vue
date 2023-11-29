<script setup>
import GradientContainer from "../components/2023/GradientContainer.vue";
</script>

<template>
  <div class="pageContainer">
    <img
      class="headerImage"
      alt="CPOSC Founder Presenting"
      src="@/assets/2024/CPOSC_Cover_2024_Galaxy.png"
    />
    <h4>CONDUCT</h4>
    <h1>Code of Conduct</h1>
    <div class="line"></div>
    <div class="pageContent">
      <p>CPOSC is dedicated to providing a harassment-free conference experience for everyone. Our Code of Conduct is as follows:</p>
      <p>We do not tolerate harassment of conference participants – regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age or religion – in any form. Sexual language and imagery is not appropriate for any conference venue, including talks. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organizers.</p>
      <p>Harassment includes verbal comments that reinforce social structures of domination related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion; sexual images in public spaces; deliberate intimidation; stalking; following; harassing photography or recording; sustained disruption of talks or other events; inappropriate physical contact; and unwelcome sexual attention. Participants asked to stop any harassing behavior are expected to comply immediately.</p>
      <p>Sponsor or vendor booths, or similar activities are also subject to the anti-harassment policy. In particular, exhibitors should not use sexualized images, activities, or other material. Booth attendants should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.</p>
      <p>Exhibitors are also expected to follow all rules and policies set forth by the venue, including a strict no-firearms policy.</p>
      <p>If a participant fails to follow any of the above, the conference organizers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund. If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference staff can be identified by special badges.</p>
      <p>We expect participants to follow these rules at all conference venues and conference-related social events. Conference staff will be happy to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.</p>
      <p>This anti-harassment policy is based on the example policy from the Geek Feminism wiki, created by the Ada Initiative and other volunteers.</p>
      <div class="line"></div>
      <p>If you encounter a violation of this code of conduct during the conference, please email details to <a href="mailto:cposc@localareanetworks.org?subject=Breach of Conduct" target="_blank">cposc@localareanetworks.org</a>. If you have a serious emergency, please contact 911.</p>
    </div>
    <GradientContainer />
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.headerImage {
  height: 82px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
}

.pageContainer {
  background-color: white;
}

p > a {
  color: #1F1F1F;
  transition: color 0.25s;

  &:hover {
    color: #848699;
  }
}

h1 {
  color: #A7609B;
  margin-bottom: 6px;
}

.line {
  background-color: #A7609B;
  margin-bottom: 1rem;
}

p {
  @media screen and (max-width: 500px) {
    padding: 0 2rem;
  }
}

// img {
//   // max-width: 800px;

//   @media screen and (max-width: 800px) and (min-width: 500px) {
//     width: 100%;
//   }

//   @media screen and (max-width: 500px) {
//     width: 100vw;
//   }
// }

.pageContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;

  .line {
    width: 300px;
    margin: 1rem 0rem;

    @media screen and (max-width: 330px) {
      width: 100%;
    }
  }

  p {
    text-align: left;
  }
  
  @media screen and (max-width: 500px) {
    padding: 0;
  }
}
</style>