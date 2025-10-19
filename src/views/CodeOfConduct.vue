<template>
  <div class="pageContainer">
    <img
      class="hero-image"
      src="/src/2026/assets/hero2026.png"
      alt="Hero Image - Circuit board and clouds"
    />
    <div class="conductContainer">
      <h1>Code of Conduct</h1>
      <div class="pageContent">
        <p>CPOSC is dedicated to providing a harassment-free conference experience for everyone. Our Code of Conduct is as follows:</p>
        <p>We do not tolerate harassment of conference participants – regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age or religion – in any form. Sexual language and imagery is not appropriate for any conference venue, including talks. Conference participants violating these rules may be sanctioned or expelled from the conference without a refund at the discretion of the conference organizers.</p>
        <p>Harassment includes verbal comments that reinforce social structures of domination related to gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, religion; sexual images in public spaces; deliberate intimidation; stalking; following; harassing photography or recording; sustained disruption of talks or other events; inappropriate physical contact; and unwelcome sexual attention. Participants asked to stop any harassing behavior are expected to comply immediately.</p>
        <p>Sponsor or vendor booths, or similar activities are also subject to the anti-harassment policy. In particular, exhibitors should not use sexualized images, activities, or other material. Booth attendants should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.</p>
        <p>Exhibitors are also expected to follow all rules and policies set forth by the venue, including a strict no-firearms policy.</p>
        <p>If a participant fails to follow any of the above, the conference organizers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund. If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference staff can be identified by special badges.</p>
        <p>We expect participants to follow these rules at all conference venues and conference-related social events. Conference staff will be happy to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.</p>
        <p>This anti-harassment policy is based on the example policy from the Geek Feminism wiki, created by the Ada Initiative and other volunteers.</p>
        <p>If you encounter a violation of this code of conduct during the conference, please email details to <a href="mailto:cposc@localareanetworks.org?subject=Breach of Conduct" target="_blank">cposc@localareanetworks.org</a>. If you have a serious emergency, please contact 911.</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

img {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.pageContainer {
  margin-bottom: 2rem;
  font-family: "Lexend", arial;
  background-color: #0e0723;
  padding-top: 0rem;
}

.pageContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-bottom: 2em;

  @media screen and (max-width: 960px) {
    padding-right: 0;
    padding-left: 0;
  }
}

.conductContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;

  min-height: calc(100vh - 28.9rem);

  h1 {
    font-size: 40px;
    color: #1f1f1f;
    padding-top: 2rem;
    padding-bottom: 8px;
    margin: 0;
  }
}

p > a {
  color: #1F1F1F;
  transition: color 0.25s;

  &:hover {
    color: #848699;
  }
}

p {
  @media screen and (max-width: 500px) {
    padding: 0 2rem;
  }
}

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