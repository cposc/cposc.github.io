<script setup>
import ScheduleBlock from "../components/schedule/ScheduleBlock.vue";
</script>

<template>
  <div class="scheduleContainer">
    <h4>SCHEDULE</h4>
    <h1>The Schedule</h1>
    <div class="line"></div>
    <div class="scheduleContent">
      <p style="margin: 2rem;">Welcome to CPOSC and thank you for contributing to our local tech community. Below, you'll find our schedule for our event taking place on April 1st, 2023. As the day progresses, the schedule will adjust to only show you what's upcoming. Who needs to know what already happened? Been there, done that.</p>
      <h3 v-if="!shouldShowBlock('24:00')" style="text-align: center; margin: 2rem; padding: 0;">The event is over, and we had a blast! Stay tuned as we begin planning our 2024 event.</h3>
      <h3 v-if="shouldShowBlock('11:50')">Morning</h3>
      <ScheduleBlock
        time="8:00 AM to 9:00 AM"
        title="Registration"
        description="Registration is available when you first walk into the Ware Center. At this time, you'll receive your CPOSC t-shirt and badge! Use your badge to re-visit this schedule at any time. Please also help yourself to breakfast in the common area."
        v-if="shouldShowBlock('9:00')"
      />
      <ScheduleBlock
        time="9:00 AM to 9:15 AM"
        title="Welcome to CPOSC!"
        v-if="shouldShowBlock('9:15')"
      />
      <ScheduleBlock
        time="9:30 AM to 10:10 AM"
        title="Session 1"
        :sessions="session1"
        v-if="shouldShowBlock('10:10')"
      />
      <ScheduleBlock
        time="10:20 AM to 11:00 AM"
        title="Session 2"
        :sessions="session2"
        v-if="shouldShowBlock('11:00')"
      />
      <ScheduleBlock
        time="11:10 AM to 11:50 AM"
        title="Session 3"
        :sessions="session3"
        v-if="shouldShowBlock('11:50')"
      />
      <h3 v-if="shouldShowBlock('13:00')">Lunch</h3>
      <ScheduleBlock
        time="12:00 PM to 1:00 PM"
        title="Lunch Break, Time Networking"
        description="Use this hour to take advantage of the lunch being provided to all attendees. During this time, you may also find yourself networking and connecting with peers in technology, or you can enjoy your meal in solitude. Lightning Talks begin at 12:20PM."
        v-if="shouldShowBlock('13:00')"
      />
      <ScheduleBlock
        time="12:20 PM to 1:00 PM"
        title="Lightning Talks"
        description="These are very short talks that had been submitted throughout the morning. Join us for 40 minutes of knowledge dispersment, at lightning speed!"
        v-if="shouldShowBlock('13:00')"
      />
      <h3 v-if="shouldShowBlock('15:50')">Afternoon</h3>
      <ScheduleBlock
        time="1:10 PM to 2:10 PM"
        title="Session 4"
        :sessions="session4"
        v-if="shouldShowBlock('14:10')"
      />
      <ScheduleBlock
        time="2:20 PM to 3:00 PM"
        title="Session 5"
        :sessions="session5"
        v-if="shouldShowBlock('15:00')"
      />
      <ScheduleBlock
        time="3:10 PM to 3:50 PM"
        title="Session 6"
        :sessions="session6"
        v-if="shouldShowBlock('15:50')"
      />
      <ScheduleBlock
        time="4:00 PM to 4:40 PM"
        title="Session 7"
        :sessions="session7"
        v-if="shouldShowBlock('16:40')"
      />
      <ScheduleBlock
        time="4:50 PM to 5:20 PM"
        title="Lightning Talks Round #2"
        description="If 40 minutes just wasn't enough time for all of our submitted lightning talks, this time will be used to allow for any overflow. Also at this time is 'Desserts & Debriefs' in the Binns Room."
        v-if="shouldShowBlock('17:20')"
      />
      <ScheduleBlock
        time="4:50 PM to 5:20 PM"
        title="Desserts & Debriefs"
        description="Debrief on CPOSC - how it went and how it's going - while enjoying some dessert!"
        v-if="shouldShowBlock('17:20')"
      />
      <ScheduleBlock
        time="5:20 PM to 5:30 PM"
        title="Farewell, Closing Remarks"
        v-if="shouldShowBlock('17:30')"
      />
      <h3 v-if="shouldShowBlock('24:00')">Evening</h3>
      <ScheduleBlock
        time="6:00 PM to late"
        title="After Party Sponsored by Industrial Resolution"
        description="The fun doesn't have to stop! Follow us to Pub Forge for an after party sponsored by Industrial Resolution."
        v-if="shouldShowBlock('24:00')"
      />
    </div>
    <div class="gradientContainer"></div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      session1: [
        { speaker: "Gregory Ember", title: "MAME - The Future of the Past (Open-Source Retro Computing and Gaming Emulation)", desc: "Among the older open-source projects, the MAME emulator project stands out as one that's been interwoven into software preservation and retro gaming and the Internet as a whole. This overview will touch on project history, scope, impact, and give some thoughts about the future and a demonstration of usage - from an insider with the project for 23 years." },
        { speaker: "Samantha Noggle", title: "Machine Learning Techniques to Improve Users' Music Listening Experiences", desc: "Music streaming services curate music based on listeners’ preferences to maximize engagement. In this talk, we present a machine learning experiment to predict whether a user will skip a song, along with an analysis of feature importance to better understand which factors are influential in predicting user behavior." },
        { speaker: "Bob Murphy", title: "An Introduction to Mastodon and the Fediverse.", desc: "Want to escape the greedy, dystopian algorithms of the big social networks?  Let's talk about a network that is more centered on people and communities, because that's who runs them. The Fediverse is a collection of communities that is a bit of a throwback to a smaller, more personal time on the internet." }
      ],
      session2: [
        { speaker: "Joe Latrell", title: "Growing Up. A Satellite Company Evolves.", desc: "Quub (formerly Mini-Cubes) has grown up. We'll take a look at the history of the company, what it is doing now, and how this has benefitted to open source community. " },
        { speaker: "Walt Mankowski", title: "Remedial Math for Programmers", desc: "This talk is a whirlwind tour through the most important math concepts in computer science. We'll review exponents and logarithms, and why understanding them is so important to writing fast code; the modulus operator and what it's good for; and practical applications of trigonomety. Examples will be in Python." },
        { speaker: "Alex Mayer", title: "The Wonderful World of Mechanical Keyboards", desc: "Welcome to the world of mechanical keyboards! Journey with use down the rabbit hole. There are many open source projects waiting for both hardware and software enthusiasts! In this talk, we'll discuss building and programming your own mechanical keyboard." }
      ],
      session3: [
        { speaker: "Nathaniel Evry", title: "SpaceHeX Beta1.0 Release - What if, for space hardware development, we put each egg in its own basket?", desc: "A beginning to end demonstration of assembling a hyper modular space satellite, rover, drone, experimental computing and hardware platform. Talking about the design challenges of designing a system constructed almost entirely of unknowns. Official open source release of all 3D print ready STL files, code, schematics, BoM, and operations documentation for SpaceHeX." },
        { speaker: "Francis Wertz", title: "Blazor. This is the Way.", desc: "I was all in on React for years, ‘till I started building in Blazor. Let’s take a look at Microsoft’s darling web/mobile framework and demystify how it works and explore how this platform can boost your productivity. This is the way." },
        { speaker: "Deanna Bledsoe", title: "Yes, 8-Year-Olds are Learning to Code!", desc: "Coding is no longer only for adults.  Programming platforms such as MIT’s Scratch and code.org use visual programming tools to jump start kids’ entry into coding.  Be prepared to be amazed at the projects that elementary school kids can make as we take a trip through the world of open-source, block-based coding." }
      ],
      session4: [
        { speaker: "Luke Demi", title: "An AI Wrote This Talk", desc: "Get ready for a wild ride as we dive into the technical depths of how AI language models like GPT-3 are revolutionizing the world of written content. That's right, you're in for a treat because not only will we be discussing the technical ins and outs of these models, but the entire talk you're about to hear has been written by AI. But don't worry, we'll also be exploring the ethical implications of having machines write our speeches, and the future of work for human talk writers." },
        { speaker: "Edward Schwartz", title: "Introduction to Exploiting Stack Buffer Overflow Vulnerabilities", desc: "This presentation will teach you how to impress your friends by writing control-flow exploits for simple stack buffer overflow vulnerabilities.  Attendees will learn by following a 'hands on' demonstration in which we create a vulnerable C program and write an exploit for it.  Some knowledge of Python and debuggers are recommended if you want to follow along." },
        { title: "Birds of a Feather", desc: "Flock, together! Join us in the library to talk to local technologists about local tech." }
      ],
      session5: [
        { speaker: "Ryan Walker", title: "Beyond the keyword: adding vector search to your apps", desc: "Recent breakthroughs in natural language technology have unleashed a revolution in search. Instead of relying on painstakingly built knowledge bases (like synonym lists), many search systems can now make use of dense vector retrieval technology to provide semantic level retrieval (search by meaning rather than keyword). These technologies are rapidly becoming mainstream making it easy for developers without any machine learning knowledge to build amazing search experiences into their applications.  In this talk, I'll outline how this new approach to search works and give some demonstraitions of how to easily incoprorate semantic level search into your projects using open source and affordable third party options." },
        { speaker: "Tom Swartz", title: "Open House - Open Source Home Automation", desc: "Home-Assistant is a major open-source home automation tool, which offers local control and enhanced privacy. This talk will discuss several 'layers' of the system, including discussion about making your own home-made custom sensors." },
        { speaker: "Kevin Hicks", title: "Level Up Your Debugging", desc: "Move beyond console.log and print statements for debugging by learning the tools most debuggers offer to make debugging quicker and less stressful. Also learn about processes, tips, and tricks to help debug different types of issues." }
      ],
      session6: [
        { speaker: "Ean Dudley", title: "Navigating the Open-Source Security Landscape: Understanding the Risks and Opportunities in Today's Digital World", desc: "The open-source security landscape is constantly evolving, with new threats and vulnerabilities emerging every day. In this talk, we will explore the current state of open-source security and examine the key challenges and opportunities facing organizations that use open-source software. From the rise of supply chain attacks to the growing need for secure collaboration in open-source communities, we will examine the most pressing security concerns in the open-source world and discuss practical strategies for managing risk and ensuring the security of your systems. Whether you are a developer, an IT professional, or simply someone who wants to learn more about open-source security, this talk will provide valuable insights and practical advice to help you navigate the rapidly changing open-source security landscape." },
        { speaker: "Jonathan Fleckenstein", title: "The Disappearing Line Between the Frontend and Backend", desc: "Discuss pain points of current development techniques and how major frameworks are providing solutions to bridge the gap between frontend and backend development. Techniques include how to share logic, unified client side and server side routing, advancements in end to end testing and simplified deploys, and how using HTTP calls with the ergonomics of a function call can help with API calls." },
        { speaker: "Thomas Knickman", title: "You're not too small for a monorepo - Improving developer experience with Turborepo", desc: "Come on a journey with a Turborepo core team member as we take a dive into the world of monorepos. We'll discuss why large companies like Google, Facebook, and Microsoft have been using monorepos for years, how they work, and why they are finally becoming more popular and accessible for smaller teams. Then, we will focus on how Turborepo can take a lot of the pain out of developing in a monorepo, including a brief dip into its more advanced features and a peek behind the curtain at how it all works. Come for the monorepos, stay for the live coding (including the bugs) and free stickers!" }
      ],
      session7: [
        { speaker: "Richard Everts", title: "What is really happening right now with AI", desc: "ChatGPT and Generative AI? Optimus, self-driving cars and Boston Dynamic robots? Now neuro-morphic chips and bio-electric models?! What the heck is happening you may ask? Let's dive into the rapidly changing AI space and gaze into the crystal ball for the future of AI, for better, and quite possibly, worse. " },
        { speaker: "Jacob Whetstone", title: "Creating Simple Cross-Platform Games with Defold", desc: "I will go over the basics of what the Defold game engine is, and some of the cool features that are included 'out of the box' to get you from start to a working game quickly even if, like me, you are 'not a game programmer.'" },
        { speaker: "Joel Walker", title: "A Decade in Retrospect: an entrepreneur's observations on the evolution and enrichment of the Lancaster PA tech sector", desc: "Ten years ago today, I became the owner of Industrial Resolution, a custom software development shop in Lancaster City. In this talk, I will share a decade’s worth of observations and lessons learned as I tried to grow and enrich myself, my business, and my local tech community. I will discuss the regional challenges we faced, the opportunities we pursued, the mistakes we made, and the strategies that have helped us thrive. We'll explore the role of collaboration, mentorship, and community building in fostering a vibrant tech ecosystem. Attendees can expect valuable insights on cultivating a thriving tech community in their own region and thoughts on how we can continue to build and support a strong and innovative tech ecosystem in our region. " }
      ]
    }
  },
  methods: {
    shouldShowBlock: function(endTime) {
      const blockEndsAt = moment("2023-04-01 " + endTime);
      const rightNow = moment();
      const timeDiff = blockEndsAt.diff(rightNow);

      // schedule block still in the future
      if (timeDiff > 0) {
        return true;
      }
      return true;
    }
  }
}
</script>

<style lang="scss" scoped>
.scheduleContainer {
  background-color: black;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;

  h1 {
    margin: 1rem 0;
    color: white;
  }

  h3 {
    color: white;
    font-family: var(--lato-regular);
    margin-top: 2rem;

    @media screen and (max-width: 615px) {
      margin-left: 2rem;
    }
  }

  h4 {
    font-size: 12px;
    letter-spacing: 3px;
  }

  .line {
    background-color: #2b3480;
    height: 5px;
    width: 80px;
  }

  .scheduleContent {
    max-width: 800px;

    p {
      color: #70706f;
      text-align: center;
    }
  }
}

.gradientContainer {
  bottom: 0;
  height: 100px; /* For browsers that do not support gradients */
  margin-bottom: -75px;
  width: 100%;
  background-image: linear-gradient(to top, transparent , black);
}
</style>