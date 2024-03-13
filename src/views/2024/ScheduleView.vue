<script setup>
import ScheduleBlock from "../../components/2024/schedule/ScheduleBlock.vue";
</script>

<template>
  <div class="pageContainer">
    <img
      class="headerImage"
      alt="CPOSC Founder Presenting"
      src="@/assets/2024/CPOSC_Cover_2024_Galaxy.png"
    />
    <div class="scheduleContainer">
      <h4>SCHEDULE</h4>
      <h1>The Schedule</h1>
      <div class="line"></div>
      <div class="scheduleContent">
        <p style="margin: 2rem;">Welcome to CPOSC, and thank you for contributing to our local technology community. Below, you'll find the schedule for our event taking place on April 6th, 2024. </p>
        <p>Individual talks, as well as entire sections of the day, are able to be collapsed and expanded again. Your browser will remember these changes in the event that you refresh this page or open a new tab.</p>
        <p>PRINTABLE PDF SCHEDULE: <a href="/CPOSCSchedule2024_color.pdf" target="_blank">COLOR</a> / <a href="/CPOSCSchedule2024_bw.pdf" target="_blank">B&W</a></p>
        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSeUh2udfcPPiQ1UBTzojvnZO9wijKQSzZytQSXLDLLadCa8gg/viewform?pli=1" target="_blank">**Submit a Lightning Talk**</a></p>
        <h3 v-if="shouldShowOver" style="text-align: center; margin: 2rem; padding: 0;">The event is over, and we had a blast! Stay tuned as we begin planning our 2024 event.</h3>
        <h3>
          Morning
          <div class="collapsable" :class="{ active: !isOpen[0] }" @click="toggleSchedule(0)">
            <div></div>
            <div></div>
          </div>
        </h3>
        <ScheduleBlock
          time="8:00 AM to 9:00 AM"
          title="Registration"
          description="Registration is available when you first walk into the Ware Center. At this time, you'll receive your CPOSC t-shirt and badge! Use your badge to re-visit this schedule at any time. Please also help yourself to breakfast in the common area."
          v-if="isOpen[0]"
        />
        <ScheduleBlock
          time="9:00 AM to 9:20 AM"
          title="Welcome to CPOSC!"
          v-if="isOpen[0]"
        />
        <ScheduleBlock
          time="9:30 AM to 10:10 AM"
          title="Session 1"
          :sessions="session1"
          v-if="isOpen[0]"
        />
        <ScheduleBlock
          time="10:20 AM to 11:00 AM"
          title="Session 2"
          :sessions="session2"
          v-if="isOpen[0]"
        />
        <ScheduleBlock
          time="11:10 AM to 11:50 AM"
          title="Session 3"
          :sessions="session3"
          v-if="isOpen[0]"
        />
        <h3>
          Lunch
          <div class="collapsable" :class="{ active: !isOpen[1] }" @click="toggleSchedule(1)">
            <div></div>
            <div></div>
          </div>
        </h3>
        <ScheduleBlock
          time="12:00 PM to 1:00 PM"
          title="Lunch Break, Time Networking"
          description="Use this hour to take advantage of the lunch being provided to all attendees. During this time, you may also find yourself networking and connecting with peers in technology, or you can enjoy your meal in solitude."
          v-if="isOpen[1]"
        />
        <h3>
          Afternoon
          <div class="collapsable" :class="{ active: !isOpen[2] }" @click="toggleSchedule(2)">
            <div></div>
            <div></div>
          </div>
        </h3>
        <ScheduleBlock
          time="1:10 PM to 1:50 PM"
          title="Session 4"
          :sessions="session4"
          v-if="isOpen[2]"
        />
        <ScheduleBlock
          time="2:00 PM to 3:00 PM"
          title="Session 5"
          :sessions="session5"
          v-if="isOpen[2]"
        />
        <ScheduleBlock
          time="3:10 PM to 3:30 PM"
          title="Sweets & Syncs"
          description="Sweets will be available in the lobby! Use this time to grab a bite and sync with other attendees."
          v-if="isOpen[2]"
        />
        <ScheduleBlock
          time="3:40 PM to 4:20 PM"
          title="Session 6"
          :sessions="session6"
          v-if="isOpen[2]"
        />
        <ScheduleBlock
          time="4:30 PM to 5:10 PM"
          title="Session 7"
          :sessions="session7"
          v-if="isOpen[2]"
        />
        <ScheduleBlock
          time="5:20 PM to 5:50 PM"
          title="Lightning Talks"
          description="Throughout the day, all attendees have had the opportunity to submit lightning talks. Join us in Steinman Hall for 30 minutes of knowledge dispersment, at lightning speed!"
          v-if="isOpen[2]"
        />
        <ScheduleBlock
          time="5:50 PM to 6:00 PM"
          title="Farewell, Closing Remarks"
          v-if="isOpen[2]"
        />
        <h3>
          Evening
          <div class="collapsable" :class="{ active: !isOpen[3] }" @click="toggleSchedule(3)">
            <div></div>
            <div></div>
          </div>
        </h3>
        <ScheduleBlock
          time="6:00 PM to late"
          title="After Party Sponsored by Industrial Resolution"
          description="The fun doesn't have to stop! Follow us to Pub Forge for an after party sponsored by Industrial Resolution."
          v-if="isOpen[3]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      session1: [
        { speaker: ["Gregory Ember"], title: "MAME - The Future of the Past (Open-Source Retro Computing and Gaming Emulation)", desc: "Among the older open-source projects, the MAME emulator project stands out as one that's been interwoven into software preservation, retro gaming, and the Internet as a whole. This overview will touch on project history, scope, impact, and give some thoughts about the future alongside a demonstration of usage - from an insider with the project for 23 years." },
        { speaker: ["Samantha Noggle", "Stephanie Schwartz"], title: "Machine Learning Techniques to Improve Users' Music Listening Experiences", desc: "Music streaming services curate music based on listeners’ preferences to maximize engagement. In this talk, we present a machine learning experiment to predict whether a user will skip a song, along with an analysis of feature importance to better understand which factors are influential in predicting user behavior." },
        { speaker: ["Bob Murphy"], title: "An Introduction to Mastodon and the Fediverse.", desc: "Want to escape the greedy, dystopian algorithms of the big social networks?  Let's talk about a network that is more centered on people and communities, because that's who runs them. The Fediverse is a collection of communities that is a bit of a throwback to a smaller, more personal time on the internet." }
      ],
      session2: [
        { speaker: ["Joe Latrell"], title: "Growing Up. A Satellite Company Evolves.", desc: "Quub (formerly Mini-Cubes) has grown up. We'll take a look at the history of the company, what it is doing now, and how this has benefitted the open source community. " },
        { speaker: ["Walt Mankowski"], title: "Remedial Math for Programmers", desc: "This talk is a whirlwind tour through the most important math concepts in computer science. We'll review exponents and logarithms, and why understanding them is so important to writing fast code; the modulus operator and what it's good for; and practical applications of trigonomety. Examples will be in Python." },
        { speaker: ["Alex Mayer"], title: "The Wonderful World of Mechanical Keyboards", desc: "Welcome to the world of mechanical keyboards! Journey with us down the rabbit hole. There are many open source projects waiting for both hardware and software enthusiasts! In this talk, we'll discuss building and programming your own mechanical keyboard." }
      ],
      session3: [
        { speaker: ["Nathaniel Evry", "Nick Elzer"], title: "SpaceHeX Beta1.0 Release - What If, For Space Hardware Development, We Put Each Egg In Its Own Basket?", desc: "A beginning to end demonstration of assembling a hyper modular space satellite, rover, drone, experimental computing and hardware platform. Talking about the design challenges of designing a system constructed almost entirely of unknowns. Official open-source release of all 3D print-ready STL files, code, schematics, BoM, and operations documentation for SpaceHeX." },
        { speaker: ["Francis Wertz"], title: "Blazor. This is the Way.", desc: "I was all in on React for years, ‘till I started building in Blazor. Let’s take a look at Microsoft’s darling web/mobile framework, demystify how it works, and explore how this platform can boost your productivity. This is the way." },
        { speaker: ["Deanna Bledsoe"], title: "Yes, 8-Year-Olds are Learning to Code!", desc: "Coding is no longer only for adults.  Programming platforms such as MIT’s Scratch and code.org use visual programming tools to jump start kids’ entry into coding.  Be prepared to be amazed at the projects that elementary school kids can make as we take a trip through the world of open-source, block-based coding." }
      ],
      session4: [
        { speaker: ["Luke Demi"], title: "An AI Wrote This Talk", desc: "This presentation will take attendees on a journey into the world of AI language models, with a focus on GPT-3 and its impact on written content. Specifically, the speaker will discuss how they used AI and prompt engineering techniques to create a recursive talk about creating a talk. Attendees will gain insight into the process of refining an initial prompt and generating slides from an outline, as well as the ethical implications of machine-written speeches and the future of work for human talk writers. Moreover, the speaker will explore whether using AI to generate content is worth it in the long run, and how it is changing the landscape of content creation. Through this engaging and thought-provoking talk, attendees will leave with a deeper understanding of how AI is shaping the way we create content, and the potential consequences of relying on it for our creative needs." },
        { speaker: ["Edward Schwartz"], title: "Introduction to Exploiting Stack Buffer Overflow Vulnerabilities", desc: "This presentation will teach you how to impress your friends by writing control-flow exploits for simple stack buffer overflow vulnerabilities.  Attendees will learn by following a 'hands on' demonstration in which we create a vulnerable C program and write an exploit for it.  Some knowledge of Python and debuggers are recommended if you want to follow along." },
        { speaker: ["Birds of a Feather"], title: "Flock, together!", desc: "Join us in the library to talk to speakers and attendees about local tech." }
      ],
      session5: [
        { speaker: ["Ryan Walker"], title: "Beyond the Keyword: Adding Vector Search to your Apps", desc: "Recent breakthroughs in natural language technology have unleashed a revolution in search. Instead of relying on painstakingly built knowledge bases (like synonym lists), many search systems can now make use of dense vector retrieval technology to provide semantic level retrieval (search by meaning rather than keyword). These technologies are rapidly becoming mainstream, making it easy for developers without any machine learning knowledge to build amazing search experiences into their applications.  In this talk, I'll outline how this new approach to search works and give some demonstraitions of how to easily incoprorate semantic level search into your projects using open source and affordable third-party options." },
        { speaker: ["Tom Swartz"], title: "Open House - Open Source Home Automation", desc: "Home-Assistant is a major open-source home automation tool, which offers local control and enhanced privacy. This talk will discuss several 'layers' of the system, including discussion about making your own home-made custom sensors." },
        { speaker: ["Kevin Hicks"], title: "Level Up Your Debugging", desc: "Move beyond console.log and print statements for debugging by learning the tools most debuggers offer to make debugging quicker and less stressful. Also learn about processes, tips, and tricks to help debug different types of issues." }
      ],
      session6: [
        { speaker: ["Ean Dudley"], title: "Navigating the Open-Source Security Landscape: Understanding the Risks and Opportunities in Today's Digital World", desc: "The open-source security landscape is constantly evolving, with new threats and vulnerabilities emerging every day. In this talk, we will explore the current state of open-source security and examine the key challenges and opportunities facing organizations that use open-source software. From the rise of supply chain attacks to the growing need for secure collaboration in open-source communities, we will examine the most pressing security concerns in the open-source world and discuss practical strategies for managing risk and ensuring the security of your systems. Whether you are a developer, an IT professional, or simply someone who wants to learn more about open-source security, this talk will provide valuable insights and practical advice to help you navigate the rapidly changing open-source security landscape." },
        { speaker: ["Jonathan Fleckenstein"], title: "The Disappearing Line Between the Frontend and Backend", desc: "Discuss pain points of current development techniques and how major frameworks are providing solutions to bridge the gap between frontend and backend development. Techniques include how to share logic, unified client side and server side routing, advancements in end to end testing and simplified deploys, and how using HTTP calls with the ergonomics of a function call can help with API calls." },
        { speaker: ["Thomas Knickman"], title: "You're Not Too Small for a Monorepo - Improving Developer Experience with Turborepo", desc: "Come on a journey with a Turborepo core team member as we take a dive into the world of monorepos. We'll discuss why large companies like Google, Facebook, and Microsoft have been using monorepos for years, how they work, and why they are finally becoming more popular and accessible for smaller teams. Then, we will focus on how Turborepo can take a lot of the pain out of developing in a monorepo, including a brief dip into its more advanced features and a peek behind the curtain at how it all works. Come for the monorepos, stay for the live coding (including the bugs) and free stickers!" }
      ],
      session7: [
        { speaker: ["Richard Everts"], title: "What is Really Happening Right Now With AI", desc: "ChatGPT and Generative AI? Optimus, self-driving cars and Boston Dynamic robots? Now neuro-morphic chips and bio-electric models?! What the heck is happening you may ask? Let's dive into the rapidly changing AI space and gaze into the crystal ball for the future of AI, for better, and quite possibly, worse. " },
        { speaker: ["Jacob Whetstone"], title: "Creating Simple Cross-Platform Games with Defold", desc: "I will go over the basics of what the Defold game engine is, and some of the cool features that are included 'out of the box' to get you from start to a working game quickly even if, like me, you are \"not a game programmer.\"" },
        { speaker: ["Joel Walker"], title: "A Decade in Retrospect: An Entrepreneur's Observations on the Evolution and Enrichment of the Lancaster PA Tech Sector", desc: "Ten years ago today, I became the owner of Industrial Resolution, a custom software development shop in Lancaster City. In this talk, I will share a decade’s worth of observations and lessons learned as I tried to grow and enrich myself, my business, and my local tech community. I will discuss the regional challenges we faced, the opportunities we pursued, the mistakes we made, and the strategies that have helped us thrive. We'll explore the role of collaboration, mentorship, and community building in fostering a vibrant tech ecosystem. Attendees can expect valuable insights on cultivating a thriving tech community in their own region and thoughts on how we can continue to build and support a strong and innovative tech ecosystem in our region. " }
      ],
      isOpen: [true, true, true, true],
      minuteTrigger: 1
    }
  },
  methods: {
    shouldShowBlock: function(endTime) {
      const blockEndsAt = moment("2024-04-06 " + endTime);
      const rightNow = moment();
      const timeDiff = blockEndsAt.diff(rightNow);

      // schedule block still in the future
      if (timeDiff > 0) {
        return true;
      }
      return true;
    },
    toggleSchedule: function(index) {
      // toggle whether part of the schedule is shown/hidden
      const dayTimes = ["morning", "lunch", "afternoon", "evening"];
      const proxyIsOpen = [...this.isOpen];
      proxyIsOpen[index] = !proxyIsOpen[index];
      this.isOpen = proxyIsOpen.map(p => p);

      localStorage.setItem(`${dayTimes[index]}`, `${this.isOpen[index]}`);
    }
  },
  mounted: function() {
    // REMEMBER user's toggle settings
    // on load, everything will be true
    // check user's localStorage to see if anything was closed
    const proxyIsOpen = [...this.isOpen];
    const morning = localStorage.getItem("morning");
    if (morning && morning === "false") {
      proxyIsOpen[0] = false;
    }
    const lunch = localStorage.getItem("lunch");
    if (lunch && lunch === "false") {
      proxyIsOpen[1] = false;
    }
    const afternoon = localStorage.getItem("afternoon");
    if (afternoon && afternoon === "false") {
      proxyIsOpen[2] = false;
    }
    const dinner = localStorage.getItem("dinner");
    if (dinner && dinner === "false") {
      proxyIsOpen[3] = false;
    }
    this.isOpen = proxyIsOpen.map(p => p);

    // every 30 seconds, trigger a calc update on whether the time of day
    let minute = 1;
    setInterval(() => {
      minute = minute + 1;
      this.minuteTrigger = minute
      // 1000 is once a second
    }, 1000);
  },
  computed: {
    shouldShowOver() {
      // prompts computed function to recalculate
      const triggerRecalc = this.minuteTrigger;
      return !this.shouldShowBlock('24:00');
    }
  }
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

.scheduleContainer {
  // background-color: black;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 200px;

  h1 {
    margin: 1rem 0;
    color: #A864A2;
  }

  h3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #A864A2;
    font-family: var(--lato-regular);
    margin-top: 2rem;

    @media screen and (max-width: 845px) {
      margin-left: 2rem;
    }
  }

  h4 {
    font-size: 12px;
    letter-spacing: 3px;
  }

  .line {
    background-color: #A864A2;
    height: 5px;
    width: 80px;
  }

  .scheduleContent {
    max-width: 800px;

    p {
      color: #bdbdbd;
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

.collapsable {
  cursor: pointer;
  background-color: rgba(56, 56, 56, 1);
  height: 30px;
  width: 30px;
  border-radius: 30px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  // padding: 12px;

  div {
    width: 15px;
    height: 2px;
    margin: 0 !important;
    background-color: white;
    margin: 6px 0;
    transition: transform 0.5s;

    &:nth-child(1) {
      margin-right: -15px !important;
    }
  }

  &.active {
    div {
      &:nth-child(1) {
        transform: rotate(90deg);
      }
    }
  }
}
</style>