<template>
  <div class="pageContainer">
    <div className="volunteers">
      <h1>Get Involved</h1>
      <div class="line"></div>
      <div class="pageContent">
        <p>Join us on this 88 mph journey to success! We're looking for volunteers to help in the months leading up to the event as well as on the week/day of. If you're interested in being a part of the flux capacitor crew on the day of the conference, <a href="https://www.signupgenius.com/go/10C0945A9AC2EA5FFC52-54405832-central#/" target="_blank" rel="noopener noreferrer">hop in the DeLorean</a> and sign up for the slot(s) that most interest you.</p>
        <h3>VOLUNTEER FOCUS AREAS</h3>
        <div class="focusBlock">
          <ul>
            <li><strong>PRIOR TO: Marketing, social media, and communications</strong>
                <ul>
                    <li>Write and make posts on official social media channels.</li>
                    <li>Help by boosting.</li>
                </ul>
            </li>
            <li><strong>PRIOR TO: Speaker relations</strong>
                <ul>
                    <li>Help speakers, answer questions, staff the green room.</li>
                </ul>
            </li>
            <li><strong>PRIOR TO: Sponsor relations</strong>
                <ul>
                    <li>Find sponsors, help them with what they need.</li>
                </ul>
            </li>
            <li><strong>DAY OF: Event Setup and Teardown Crew</strong>
                <ul>
                    <li>From arranging tables to ensuring everything is in place, these roles are perfect for early risers who want to kick off the event with energy and teamwork.</li>
                </ul>
            </li>
            <li><strong>DAY OF: Registration, T-shirts, </strong>
                <ul>
                    <li>Help people navigate the registration line, hand out t-shirts and other swag, and answer questions.</li>
                </ul>
            </li>
            <li><strong>DAY OF: Food</strong>
                <ul>
                    <li>Meals are catered, but help is needed with serving them, cleaning up, and maintaining water and snack supplies.</li>
                </ul>
            </li>
            <li><strong>DAY OF: Emcees</strong>
                <ul>
                    <li>Introduce speakers, manage session time, and keep the audience engaged.</li>
                </ul>
            </li>
            <li><strong>DAY OF: A/V</strong>
                <ul>
                    <li>Setup cameras in rooms.</li>
                    <li>Keep an eye on the camera to ensure it’s not disturbed.</li>
                    <li>Start and stop recordings between sessions. No advanced skills are needed—just your enthusiasm and a willingness to help!</li>
                </ul>
            </li>
            <li><strong>AFTER: Video Editing</strong>
                <ul>
                    <li>Help turn the raw recordings of talks from the day into enduring artifacts that will be referenced for years to come!</li>
                </ul>
            </li>
          </ul>
        </div>
        <p style="z-index: 10; position: relative; text-align: left">Is there an area that you think you can help but we didn't mention?  <a href="mailto:cposc@localareanetworks.org">Let us know!</a>  We might be forgetting something, and we always welcome new ideas.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.volunteers {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;

  min-height: calc(100vh - 28.9rem);
}

h1 {
  font-family: "Bebas Neue", sans-serif;
  font-size: 40px;
  color: #1f1f1f;
  padding-top: 2rem;
  padding-bottom: 8px;
  margin: 0;
}

p > a {
  color: #1F1F1F;
  transition: color 0.25s;

  &:hover {
    color: #848699;
  }
}

.line {
  background-color: #ff2cb7;
  margin-bottom: 1rem;
}

h4, h3, p, a {
  z-index: 10;
  color: #1F1F1F !important;
}

.focusBlock {
  z-index: 10;
  border-image: linear-gradient(to right, #ff7164 0%, #ffac19 100%) 1;
  border-width: 6px;
  border-style: solid;
  padding: 5px;
  background-color: white !important;

  li {
    color: #1F1F1F;
  }

  @media screen and (max-width: 550px) {
    ul {
      padding: 10px;
    }
  }
}
</style>
