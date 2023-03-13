<script setup>
import GradientContainer from "../components/GradientContainer.vue";
import SpeakerBlock from "../components/speakers/SpeakerBlock.vue";
</script>

<template>
  <div class="pageContainer">
    <h4>SPEAKERS</h4>
    <h1>Talk to Us</h1>
    <div class="line"></div>
    <div class="pageContent">
      <!-- <p>We’re ready for you! You can submit your talk using <a href="https://forms.gle/7XxjyBCzKFUyvj8R8" target="_blank">this form</a>.</p>
      <p>Remember, if you’re overflowing with ideas you are welcome to submit as many talk proposals as you like, though at most only one talk per speaker will be selected. If you have questions about a talk topic or the logistics of being a CPOSC speaker, don’t hesitate to <a href="mailto:cposc@localareanetworks.org" target="_blank">contact us</a> and we’d be more than happy to chat about it. Thanks for your interest in making CPOSC 2023 a great day of new knowledge for our attendees!.</p> -->
      <div v-for="(speaker, index) in speakers" v-bind:key="index">
        <SpeakerBlock :name="speaker.name" :imageUrl="speaker.imageURL" :bio="speaker.bio" />
      </div>
    </div>
    <GradientContainer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      speakers: [
        {
          imageURL: "",
          name: "Alex Mayer",
          bio: ""
        },
        {
          imageURL: "",
          name: "Bob Murphy",
          bio: ""
        },
        {
          imageURL: "deanna_bledsoe.jpg",
          name: "Deanna Bledsoe",
          bio: "Deanna started using her 20+ years of software development skills to teach kids when schools and extracurricular activities went virtual due to the COVID-19 pandemic.  She started using open-source block coding to help her daughter’s Girl Scout troop earn STEM badges.  This turned into Kai Coders, a program that teaches elementary school kids how to code. Deanna brings the 'spirit of Aloha' , a welcoming, kind, and inclusive environment, into her classrooms.  She acknowledges that not only are mistakes OK, but they are expected and admits to making and learning from many mistakes during her career as a programmer. She works with local schools to bring computer science into subjects both inside and outside of traditional STEM topics.  Examples of this include incorporating invention and coding technology into a food drive, running a coding club for 3rd-5th graders, and most recently, a collaborative LEO (Love Each Other) project incorporating music, art, and STEM teachers into a schoolwide interactive display for Mental Health Awareness month. When Deanna isn't teaching computer science to kids, she is committed to changing the way government operates as the Director of Information Technology for Delaware's Office of the State Treasurer."
        },
        {
          imageURL: "",
          name: "Ean Dudley",
          bio: ""
        },
        {
          imageURL: "",
          name: "Edward Schwartz",
          bio: ""
        },
        {
          imageURL: "francis_wertz.jpeg",
          name: "Francis Wertz",
          bio: "Hello I’m Francis Wertz. I’ve lived in Lancaster for a touch over a decade now. I’m   a Project Leader working in automotive telemetry. I consider myself a developer advocate, and strive to see my teams become more productive and engaged with their careers in enterprise solutions. I enjoy developing personal projects, homelab, helping small business, home improvement and finish carpentry. I’m married and share a home with my brilliant wife Emma, along with our many pets!"
        },
        {
          imageURL: "jacob_whetstone.jpeg",
          name: "Jacob Whetstone",
          bio: "Jake is polyglot developer by happenstance, currently focusing on web app development. He's a husband and a father of two; a fan of punk rock, spicy food and bitter drink; trying to be a good neighbor."
        },
        {
          imageURL: "joe_latrell.png",
          name: "Joe Latrell",
          bio: "Joe Latrell is an inventor and technology developer who has coordinated payloads for launch on the SpaceX Falcon 9, Blue Origin New Shepard, and Rocket Lab Electron. Prior to quub, Joe gained wide-ranging experience in a variety of technology roles, such as launching an early-stage suborbital rocket company, coding programs for large datasets, and developing numerous software packages for the education industry. Joe founded quub to manufacture small, cost-effective satellites designed to gather data and monitor Earth, its weather systems, and its environmental resources. His goal is to create a network of satellites that give first responders, companies, and municipalities the data they need to respond and act quickly."
        },
        {
          imageURL: "",
          name: "Joel Walker",
          bio: ""
        },
        {
          imageURL: "jonathan_fleckenstein.jpeg",
          name: "Jonathan Fleckenstein",
          bio: "I've been doing web development for over 10 years. I love working with TypeScript and React and am always looking for something new to learn!"
        },
        {
          imageURL: "luke_demi.jpg",
          name: "Luke Demi",
          bio: "Meet Luke, a software engineer who specializes in solving infrastructure scalability issues. He has been lucky to have tackled some tough challenges during high-growth periods at companies like Coinbase, Clubhouse, and DoorDash. When he's not busy scaling in the tech world, you can find him in Lancaster city with his three kids, who are likely scaling in height as well."
        },
        {
          imageURL: "nathaniel_evry.jpg",
          name: "Nathaniel Evry",
          bio: "Passionate technologist with a diverse set of skills and a love for innovation. I'm a creative problem-solver always eager to learn and build new things! I'm currently doing aerospace research at Quub!"
        },
        {
          imageURL: "samantha_noggle.jpg",
          name: "Samantha Noggle",
          bio: ""
        },
        {
          imageURL: "tom_swartz.jpeg",
          name: "Tom Swartz",
          bio: "Tom is the Associate Director of Support and a developer with Crunchy Data, providing techincal assistance to hundreds of large organizations and programming software for and around PostgreSQL databases. An avid speaker, he as participated in many years of Central Pennsylvania Open Source Conferences, TechLancaster events, and other events in and around Central Pennsylvania. He is an avid enthusiast of mechanical keyboards, amateur radio, and is a passionate advocate for free and open source software. "
        },
        {
          imageURL: "",
          name: "Walt Mankowski",
          bio: ""
        },
        {
          imageURL: "",
          name: "Gregory Ember",
          bio: ""
        },
        {
          imageURL: "",
          name: "Kevin Hicks",
          bio: ""
        },
        {
          imageURL: "",
          name: "Richard Everts",
          bio: ""
        },
        {
          imageURL: "",
          name: "Ryan Walker",
          bio: ""
        },
        {
          imageURL: "",
          name: "Thomas Knickman",
          bio: ""
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
p > a {
  color: white;
  transition: color 0.25s;

  &:hover {
    color: #848699;
  }
}
</style>