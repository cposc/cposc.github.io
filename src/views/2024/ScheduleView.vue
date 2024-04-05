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
          time="3:00 PM to 3:40 PM"
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
        <!-- <ScheduleBlock
          time="4:30 PM to 5:10 PM"
          title="Session 7"
          :sessions="session7"
          v-if="isOpen[2]"
        /> -->
        <ScheduleBlock
          time="4:30 PM to 5:00 PM"
          title="Lightning Talks"
          description="Throughout the day, all attendees have had the opportunity to submit lightning talks. Join us in Steinman Hall for 30 minutes of knowledge dispersment, at lightning speed!"
          v-if="isOpen[2]"
        />
        <ScheduleBlock
          time="5:00 PM to 5:30 PM"
          title="Farewell, Closing Remarks, Giveaways"
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
        { speaker: ["Tom Swartz"], title: "Getting Started with Meshtastic", desc: "A beginners guide to LoRa mesh networks using Meshtastic devices" },
        { speaker: ["Alex Mayer"], title: "Local Development with Docker Compose", desc: "Docker compose is a convenient way to run an entire application stack locally and share the configuration with others. We will review how to add docker compose configuration to an existing project, add services, create volumes to persist data, and execute commands against it." },
        { speaker: ["Jonathan Bowman"], title: "Try a Little Vim", desc: "Vim is a lightweight yet powerful cross-platform programmer's editor known for being ubiquitous yet intimidating. This sessions welcomes the Vim-curious and the Vim-enthused to learn and share" }
      ],
      session2: [
        { speaker: ["Ean Dudley"], title: "Unraveling the Tale of Stuxnet and the Statistical Landscape of Cyberwarfare", desc: "Embark on a captivating journey into the world of cyberwarfare through the lens of Stuxnet, a clandestine digital weapon that reshaped the landscape of state-sponsored cyber operations. In this talk, we will weave a narrative around Stuxnet's intriguing story, exploring its technical intricacies, international implications, and the statistical dimensions that underscore the realm of cyberwarfare." },
        { speaker: ["Dr. Nazli Hardy", "Ashton Kunkle", "Neily Landman"], title: "Understanding & Using Permutations and Combinations in Everyday Life", desc: 'If a lottery ticket had 5 slots for numbers from 0-9 followed by 2 slots for English letters (A-Z), then the permutation of unique tickets would be 10 * 10 * 10 * 10 *10 * 26 * 26. It may actually be easier to earn money being a YouTuber than choosing the winning number. If 3 people sit in a row, there are 6 different ways to seat them. But, if they sit in a circle, there are 2 different ways. Perhaps that is why, conversations are easier at a circular table.' },
        { speaker: ["Cody Alan Stubbs"], title: "6 Months as a Software Engineer - Reflections for New and Senior Devs", desc: "After pivoting into software engineering, the first six months in a full-stack role have been quite challenging and fun! This talk offers new developers a chance to hear the lessons learned by a fellow fresh developer, and senior developers can gain a valuable perspective to inform how they guide and collaborate with new developers." }
      ],
      session3: [
        { speaker: ["Elizabeth K. Joseph"], title: "Will your open source project run on a mainframe? Or on a smartwatch?", desc: 'You probably developed your open source project for a single, "default" architecture like x86, but today there is considerable growth in other architectures, from ARM to Power to mainframes. The talk will present some of the tools available to open source software developers to port their projects to other architectures.' },
        { speaker: ["Jeff Barrett"], title: 'Don\'t Drift Into Management or "Leadership"', desc: "I walk through why you want to treat moving into management or leadership as a career change and outline many of the hidden challenges of management and leadership. I will be focusing on how best to handle the change to management and leadership. If cursing is not allowed, I can handle eliminating that from the talk." },
        { speaker: ["Robert Hudson"], title: "Minimal, meaningful, motion", desc: 'Need to explain something too complex for words - and too cumbersome for a diagram? Why not animate it instead? Using creatively-sourcef SVGs, open-source Inkscape, LiceCap, and a dose of JavaScript with GSAP, I\'ll show you how to create simple, effective animations that you can use to show, not tell, how things actually work.' }
      ],
      session4: [
        { speaker: ["Luke Demi"], title: "Digital Immortality: A Very Serious Attempt to Preserve My Essence with AI", desc: "Can AI deliver immortality? In this talk I'll start with the basics as I demonstrate using state of the art text, voice, and video models to create an version of myself that my family can rely on for centuries to come." },
        { speaker: ["Luke Westfall"], title: "From CAD to Code: Navigating a Dynamic Career Pivot", desc: "Embark on a journey from mechanical engineering to software development. This talk will unravel the challenges and triumphs of career pivoting, guiding attendees through the transformation from designing machinery to leading a tech team. Discover strategies to overcome fear, embrace change, and leverage your past experiences in new tech realms. Perfect for those contemplating a career shift but hesitant to take the leap." },
        { speaker: ["Frederick Yocum"], title: "An Intro to ResourceSpace", desc: "A nontechnical introduction to ResourceSpace, an open source web-based digital asset management system used by commercial, academic, and not-for-profit organizations to organize and share documents and images. The presentation will provide an overview of the fundamental principles that underpin its functionality and define its limitations." }
      ],
      session5: [
        { speaker: ["Stephanie Schwartz", "Ed Schwartz", "Nick Elzer"], title: "Code and AI: Industry Insights and Educational Implications for Software Development", desc: "How are you using generative AI for coding? How are other developers using it? But more than that, how will these tools shift the way software development happens and how we should educate future computer scientists? We don't pretend to have the answers, but we will have a panel representing various perspectives and experiences and we will encourage open discussion." },
        { speaker: ["Logan Farr"], title: "Observability: Getting insights into your applications", desc: 'We\'ve all heard of the term "Observability". But what makes something "observable"? How do we know what is the right thing to measure and where the red herrings are? In an ecosystem full of data, it\'s important to ask yourself what you really care about. In this talk, we\'ll be reviewing the what, why, when, and how to get the right information to teams in the most efficient way possible.' },
        { speaker: ["Ken Richard"], title: "Birds of a Feather", desc: '' }
      ],
      session6: [
        { speaker: ["John Mulligan"], title: "Accelerating Tabletop Game Development with Python Simulations", desc: "Learn how to use simple Python for rapid iteration and testing of tabletop roleplaying and board games. What used to require extensive playtesting and complicated math can now be done in seconds with a few lines of basic Python code. We’ll explore how to optimize game mechanics through simulation using real-world examples, including an ENNIE-nominated TTRPG. Little to no programming experience required." },
        { speaker: ["Rick Joi"], title: "How to get your ideas implemented at your organization", desc: "We all have ideas for how to make our organizations better, but it can sometimes seem impossible to get anyone to pay attention to our ideas, much less devote organizational resources to them. Learn the secrets of how to break through the invisible barriers so that your ideas have a positive impact on your organization." },
        { speaker: ["Bob Murphy"], title: "A brief introduction to tmux.", desc: "tmux is a terminal multiplexer, a tool that makes working on the command line better and easier.  It can allow you to work across connections, and to get multiple views on the computers that you are using.  I'll show what it does, how to install it on popular systems, and how to use it." }
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