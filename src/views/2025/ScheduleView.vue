<script setup>
import ScheduleBlock from "../../components/2025/schedule/ScheduleBlock.vue";
</script>

<template>
  <div class="pageContainer">
    <marquee direction="left">
      <img
        width="200"
        height="200"
        src="http://cposc.org/vroom_vroom.gif"
      />
    </marquee>
    <div class="scheduleContainer">
      <h1>The Schedule</h1>
      <div class="scheduleContent">
        <!-- <p style="margin: 2rem;">
          Welcome to CPOSC, and thank you for hacking all the way to the future with us. We don't have the schedule ready yet -- our engineers are searching the time continuum to get you the best talks!
        </p>
        <p>
          Do you want to be one of our conference speakers? Speaking at CPOSC lands you free access and swag. <ConferenceLink link="https://forms.gle/yCLJWq8TFPRfrEsu9" :external="true" linkContent="Submit talk ideas here" />!
        </p>
        <p>Go back in time to
          {{ " " }}
          <ConferenceLink
            link="/2024/schedule"
            :external="false"
            linkContent="last year's schedule"
          />
          .
        </p> -->
        <!-- Once schedule is out -->
        <p style="margin: 2rem;">Welcome to CPOSC, and thank you for contributing to our local technology community. Ready to hack all the way to the future with us? Below, you'll find the schedule for our event taking place on April 26th, 2024. We searched the time continuum to get you the best talks!</p>
        <p>PRINTABLE PDF SCHEDULE (coming soon)</p>
        <!-- <p>PRINTABLE PDF SCHEDULE: <a href="/CPOSCSchedule2024_color.pdf" target="_blank">COLOR</a> / <a href="/CPOSCSchedule2024_bw.pdf" target="_blank">B&W</a></p> -->
        <p><a href="https://docs.google.com/forms/d/e/1FAIpQLSeUh2udfcPPiQ1UBTzojvnZO9wijKQSzZytQSXLDLLadCa8gg/viewform?pli=1" target="_blank">**Submit a Lightning Talk**</a></p>
        <h3 v-if="shouldShowOver" style="text-align: center; margin: 2rem; padding: 0;">The event is over, and we had a blast! Stay tuned as we begin planning our 2024 event.</h3>
        <h3 className="morning">
          Morning
          <div class="collapsable morning" :class="{ active: !isOpen[0] }" @click="toggleSchedule(0)">
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
          time="9:30 AM to 10:20 AM"
          title="Session 1"
          :sessions="session1"
          v-if="isOpen[0]"
        />
        <ScheduleBlock
          time="10:30 AM to 11:20 AM"
          title="Session 2"
          :sessions="session2"
          v-if="isOpen[0]"
        />
        <ScheduleBlock
          time="11:30 AM to 12:20 PM"
          title="Session 3"
          :sessions="session3"
          v-if="isOpen[0]"
        />
        <h3 className="lunch">
          Lunch
          <div class="collapsable lunch" :class="{ active: !isOpen[1] }" @click="toggleSchedule(1)">
            <div></div>
            <div></div>
          </div>
        </h3>
        <ScheduleBlock
          time="12:30 PM to 1:30 PM"
          title="Lunch Break, Time Networking"
          description="Use this hour to take advantage of the lunch being provided to all attendees. During this time, you may also find yourself networking and connecting with peers in technology, or you can enjoy your meal in solitude."
          v-if="isOpen[1]"
        />
        <h3 className="afternoon">
          Afternoon
          <div class="collapsable afternoon" :class="{ active: !isOpen[2] }" @click="toggleSchedule(2)">
            <div></div>
            <div></div>
          </div>
        </h3>
        <ScheduleBlock
          time="1:40 PM to 2:30 PM"
          title="Session 4"
          :sessions="session4"
          v-if="isOpen[2]"
        />
        <ScheduleBlock
          time="2:40 PM to 3:30 PM"
          title="Session 5"
          :sessions="session5"
          v-if="isOpen[2]"
        />
        <ScheduleBlock
          time="3:40 PM to 4:30 PM"
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
          time="4:40 PM to 5:20 PM"
          title="Lightning Talks"
          description="Throughout the day, all attendees have had the opportunity to submit lightning talks. Join us in Steinman Hall for 30 minutes of knowledge dispersment, at lightning speed!"
          v-if="isOpen[2]"
        />
        <ScheduleBlock
          time="5:20 PM to 5:30 PM"
          title="Farewell, Closing Remarks, Giveaways"
          v-if="isOpen[2]"
        />
        <h3 className="afterparty">
          Evening
          <div class="collapsable afterparty" :class="{ active: !isOpen[3] }" @click="toggleSchedule(3)">
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
// import ConferenceLink from "../../components/2025/ConferenceLink.vue";
export default {
  data() {
    return {
      session1: [
        { speaker: ["Zach Fedor"], title: "Rage Against the Machine Learning: A Luddite's Guide to AI", desc: "Far from being simpletons or technophobes, the Luddites were skilled craftspeople who saw how new factory tech was destroying their communities and livelihoods. So they fought back with secret meetings, organized resistance, and hammers. This talk compares the Industrial and AI revolutions, exploring how Luddite principles and tactics might be adapted for the digital age, when the machine to break exists in the cloud not the factory floor." },
        { speaker: ["Jonathan Bowman"], title: "Tools (and Toys) for the Terminal", desc: "The command-line console is, fascinatingly, a technology both ancient and trending. Whether you are familiar with the command-line, scared of it, or some combination, you are welcome at this session. We will explore together some open-source tools for making your terminal both useful and fun." },
        { speaker: ["Rob Hudson"], title: "Curious George makes a job", desc: "There was once a curious not-so-little monkey, or at least 99% similar (by DNA), who could not decide what he wanted to be when he grew up. And by all reckoning, he was well past grown-up age. He liked computers, and he liked people, and he liked making them work together. But no job was just right for him. So he got the idea to hack his way to a new job for the future. This presentation is that story." }
      ],
      session2: [
        { speaker: ["TBD"], title: "TBD", desc: "TBD" },
        { speaker: ["Alex Mayer"], title: "Advanced Git", desc: "Do you use git for work or personal projects? Ever wonder if your workflow could be better? Let's go over a few features of git that can help improve your process." },
        { speaker: ["Bob Murphy"], title: "Hacker Public Radio - why you should listen, and contribute.", desc: "Hacker Public Radio is a community podcast that run 5 days a week.  It is dedicated to sharing knowledge and has been running in various forms for nearly 20 years.  Anyone that has anything that is of interest to hackers is welcome to submit a show." }
      ],
      session3: [
        { speaker: ["Jeff Barrett"], title: "Software Eng and Ops When 1 Minute Downtime is Immediate Termination", desc: "This is going to be a high-level technical overview of software engineering and operations in the space of high-frequency trading and financial exchanges. In an ecosystem of 30-70MM messages/second and 3K trades/second with sub-microsecond response latency, it is immediate unquestioned termination if you cause a minute of downtime. How you architect solutions and code will directly relate to your job security." },
        { speaker: ["Logan Farr"], title: "Secrets to a well-designed service", desc: "What sets apart a well-designed service from a run-of-the-mill service? How do we avoid architecture anti-patterns as software developers? In this talk, we'll cover the key ingredients of any service at all levels – development patterns, CI/CD, infrastructure, and even runtime in a production environment." },
        { speaker: ["Matthew Cross"], title: "Open Source Powering Game Preservation", desc: "Do you know that 87% of video games are up to being lost forever? Be it those titles lost, out of print, locked in a developer's or publisher's vault to never see the light of day again. Well luckily, there is fantastic work being done by open source developers to ensure our gaming history is not lost." }
      ],
      session4: [
        { speaker: ["Joe Latrell"], title: "Lesson Learned - Continuing a Company After a Disaster", desc: "What do you do when your company implodes and takes a major step backward? We'll look at what happened, what could have been done better, and how to move on. This is a subject few seem willing to talk about. We'll cover the stigma of setbacks and retooling your mind to move forward again." },
        { speaker: ["Andy James"], title: 'GenAI for Customer Support: Making an LLM More Capable on Niche Topics', desc: "This talk will shed light on the journey to integrate generative AI into Elastic's customer success and support operations, providing you with a behind-the-scenes look at our process. Topics include building a knowledge base, UX considerations, tuning RAG search, and observability for the features." },
        { speaker: ["Peter Stukalov"], title: "A GitOps approach with ArgoCD", desc: 'A real world GitOps example using ArgoCD with code and the ability to poke buttons in a real infrastructure.' }
      ],
      session5: [
        { speaker: ["Benjamin Sautner"], title: "Nimbits: The Open Source IoT Platform That Shaped My Career", desc: "In 2004 I was working in the process control / data acquisition field doing automation of chemical plants in Pennsylvania.  I've always enjoyed home automation and connecting devices to the internet and one day asked if I could get a licence for some of the data acquisition software we used so i could try to connect my aquarium to it. I was denied because it was expensive and proprietary. So I wrote my own just to shown them! Nimbits was born!" },
        { speaker: ["Scott Dienner"], title: "AI in the Support Stack: Real-World Applications & Critical Considerations", desc: "Explore practical AI implementations in support operations through real-world examples: automated Zendesk ticket summarization, RAG-powered knowledge base queries, and vector search for Jira issues. Learn how these solutions enhanced support efficiency while examining the gap between AI reality and perception, separating genuine potential from inflated expectations." },
        { speaker: ["Tim Freund"], title: "Automate Infrastructure with Incus and Ansible", desc: "Learn how you can quickly build, destroy, and rebuild labs and project infrastructure using Incus (LXC / KVM), OpenTofu (Terraform), and Ansible. This talk is informed by experience building and rebuilding labs for class. Participants will get access to a live container for the duration of the talk and all configuration artifacts will be available for download so you can build your own lab later." }
      ],
      session6: [
        { speaker: ["Anupam Priya"], title: "Unleashing the power, potential and productivity of teams", desc: "Through this session, I aim to revisit the fundamentals of effective teamwork, uncover common blind spots, and explore research-backed strategies for building high-performing teams. Participants will critically reflect on how to unlock the full power, potential, and productivity of teams and gain actionable insights to drive collaboration and success in an engaging environment." },
        { speaker: ["Tom Courtney"], title: "Supercharging Innovation:  AI’s Role in Ideation and Visualization", desc: "This talk shows how AI can generate 70 innovative product or service ideas using ChatGPT and 14 ideation methods, exporting them to Excel. You'll also learn how to use DeepSeek to write a Python program that reads the Excel file and automatically creates 70 AI-generated images with DALL·E -bringing all 70 ideas to life in seconds. A provided template lets you apply this process to your own business." },
        { speaker: ["TBD"], title: "Birds of a Feather", desc: "" }
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
marquee {
  position: absolute;
  top: 40px;
  height: 122px;
}

.scheduleContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;

  min-height: calc(100vh - 28.9rem);

  h1 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 40px;
    color: #1f1f1f;
    padding-top: 2rem;
    padding-bottom: 8px;
    margin: 0;
  }

  h3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    // color: #A864A2;
    font-family: var(--lato-regular);
    margin-top: 2rem;

    &.morning {
      color: #a21cda;
    }

    &.lunch {
      color: #ff2cb7;
    }

    &.afternoon {
      color: #ff7164;
    }

    &.afterparty {
      color: #ffac19;
    }

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
  height: 30px;
  width: 30px;
  border-radius: 30px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &.morning {
    background-color: #a21cda;
  }

  &.lunch {
    background-color: #ff2cb7;
  }

  &.afternoon {
    background-color: #ff7164;
  }

  &.afterparty {
    background-color: #ffac19;
  }

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