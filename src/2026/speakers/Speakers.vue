<script setup>
import SpeakerBlock from "./SpeakerBlock.vue";
import TopNav from "../sitecontainer/Nav/TopNav.vue";
</script>

<template>
  <TopNav></TopNav>
  <div class="pageContainer">
    <div class="speakers">
      <h1>CPOSC SPEAKERS</h1>
      <div class="line"></div>
      <div class="pageContent">
        <p>Get to know our fantastic lineup of 2026 speakers!</p>
        <div class="speakerSection">
          <div v-for="(speaker, index) in speakers" v-bind:key="index">
            <SpeakerBlock :name="speaker.name" :nameAnchor="getNameAnchor(speaker.name.split(' ').join(''))" :imageUrl="speaker.imageURL" :bio="speaker.bio" :talkTitle="speaker.talkTitle" :talkAbstract="speaker.talkAbstract" :index="index"/>
          </div>
        </div>
      </div>
      <!-- <GradientContainer /> -->
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      speakers: [
        {
          imageURL: "@/assets/2026/speakers/RGeoffreyAvery.jpg",
          name: "R. Geoffrey Avery",
          bio: "",
          talkTitle: "Lightning Talks",
          talkAbstract: "The Gong returns! Knowledge about anything shared with the crowd, 5 minutes at a time."
        },
        {
          imageURL: "@/assets/2026/speakers/x.jpg",
          name: "Jeff Barrett",
          bio: "Software engineer turned to software leadership several times around now. Building and leading a global DevOps team in the capital markets space. I have a history of doing unique projects in multiple domains and in just muddling around in a wide array of concepts etc.",
          talkTitle: "Outcome Over Ego in Tech",
          talkAbstract: "After 27 years in software engineering, I've watched tech lose its grip on outcomes—especially when they don't serve one's ego. That's changing. I see a renewed focus on outcomes over ego in today's tech ecosystem, alongside pressure on those outcomes from AI augmentation and shifting funding landscapes. Through this lens, we'll explore what I saw before, what I see now, and what it means for our egos in the years ahead."
        },
        {
          imageURL: "@/assets/2026/speakers/DustinBetz.PNG",
          name: "Dustin Betz",
          bio: "Dustin Betz is the director of operations at White Rose Ventures, a VC firm investing in Pennsylvania based pre-seed and seed-stage startups, across industry sectors. Dustin has over a decade of experience working with early stage companies, as a former D2C brand founder himself, as well as previously director of accelerator programming at Founder Institute HQ in Palo Alto, CA. ",
          talkTitle: "Strategy & Economics of VC 101 (and Why It Matters to Fundraising Founders)",
          talkAbstract: "Demystifying venture capital as an asset class by explanation in plain English: when is the right time for startups to raise funding, what are the instruments or vehicles used to do so at the earliest stages, and where does VC fit within the wider landscape of startup fundraising. "
        },
        {
          imageURL: "@/assets/2026/speakers/JonathanBowe.jpg",
          name: "Jonathan Bowe",
          bio: "I'm a general tech enthusiast; self declared Kubernetes expert by day, and often improving my dotfiles or working on some side project by night. I'm really excited about open source, and always willing to hear (or often share) some hot take about tech!",
          talkTitle: "Gettin' Ziggy Wit It",
          talkAbstract: "Do you, like Will Smith, enjoy being fresh, hip, and using the latest technology? Do you like statically typed language, or wish you could do more at compile time? If so, then Zig might just be for you! We'll be talking about one of the newer system-level programming languages out there, what it does differently (and similarly?) as other languages. If you're lucky, you might just walk away ready to learn Zig."
        },
        {
          imageURL: "@/assets/2026/speakers/JonathanBowman.jpg",
          name: "Jonathan Bowman",
          bio: "Jonathan is at heart an English major, and eventually became a software engineer as a natural progression of his unending obsession with where to put semicolons. He has been a middle and high school teacher, web developer, IT director, data wrangler, and always a hobbyist experimenter. All he ever needs to be happy is a web browser, a terminal, and a few friends close at hand.",
          talkTitle: "Confessions of a Compulsive Distro-Hopper",
          talkAbstract: "Once upon a time, Linux was not popular but it was attractive and intriguing. Today, Linux is everywhere yet often taken for granted. This presentation is one Linux-fan's saga of experimenting with Linux for a few decades, a story inviting all of us to grow a little more Linux-aware and Linux-playful. It is about refusing to quit. And then not being able to. Audience participation will be celebrated."
        },
        {
          imageURL: "@/assets/2026/speakers/TomCourtney.jpg",
          name: "Tom Courtney",
          bio: "Tom Courtney led global high-tech New Product Development teams at Apple, Xerox, QED Technologies, and ASML before “retiring” to explore the fun side of AI and innovation. With a master’s in Management and Engineering from MIT, he now blends technology, creativity, and a lifelong curiosity to see what’s possible next.",
          talkTitle: "Where AI Meets Hardware: Designing and Building a 3D Satellite Tracker",
          talkAbstract: "Discover how AI can bridge code and motion. I used AI to design and build a fully 3D-printed electro-mechanical satellite tracker. Selecting components, writing Arduino code, integrating servos, steppers, and Wi-Fi.  A hands-on story of AI-driven design, engineering, and creativity."
        },
        {
          imageURL: "@/assets/2026/speakers/OliverCox.png",
          name: "Oliver Cox",
          bio: "Oliver is the Founder & CEO of HSM, a company that is here to make computers tools of liberation, by building systems shaped like human thinking, which work together, and protect our rights. He is also HSM's principal programmer. Oliver writes regularly on technology, with the ACM's Interactions magazine publishing one of his articles. He lives in Lancaster, with his wife, cat and dog.",
          talkTitle: "An Alternative to LLMs for Making Sense of Things",
          talkAbstract: "LLMs come with a tantalizing prospectus, offering to organize information for you. But LLMs bring numerous corrosive issues, among them data use and the \"black box\" problem. HSM's data system, the HYPERCOSM, allows users to express and visualize their ideas in a way that's unambiguous and interoperable. It is thus a viable alternative to LLMs organizing your ideas. Learn more about the design and data structure that powers the HYPERCOSM."
        },
        {
          imageURL: "@/assets/2026/speakers/DonDemcsak.JPG",
          name: "Don Demcsak",
          bio: "Don Demcsak is a technology leader dedicated to strengthening the tech ecosystem in Central PA and beyond. He is the founder of the Digizenburg Dispatch and a Board Member of the Technology Council of Central Pennsylvania, where he champions the growth of local tech talent in an AI-driven world. By day, Don serves as an Enterprise Technologist Strategist at Dell Technologies, where he helps sales teams and enterprises continuously improve by applying Agile and Lean principles to the adoption of Data and AI solutions. A \"hands-on\" architect with a history of speaking at major events like Microsoft Ignite and PDC since 2002, Don combines deep technical expertise in Edge architectures with a passion for helping teams navigate the shifting landscape of work and technology.",
          talkTitle: "Sixteen Candles and the Human API: Refactoring 16 Years of Quick Fixes",
          talkAbstract: "\"Peopling\" is the hardest API. Like a forgotten 16th birthday, your soft skills need attention. This session treats your career like legacy code overdue for a refactor. Using comedic data visualization, we'll debug your professional life via the Career Venn Diagram, the Manager Translation Matrix, CoffeeOps networking, and the Personality Graph. Stop waiting for Jake Ryan and start optimizing your throughput in Central PA."
        },
        {
          imageURL: "@/assets/2026/speakers/RichEverts.jpg",
          name: "Rich Everts",
          bio: "Richard Everts is an AI/ML and computer vision leader with over a decade of experience building production-grade AI systems across healthcare, manufacturing, and large-scale platforms. He ran Lancaster AI for seven years, leading applied computer vision education, research, and real-world deployments, and is a patented AI inventor, federally funded researcher, and published author, including an award-winning Federalist Society publication on U.S. national security and AI strategy. He is currently Lead AI Researcher at Deep SIML Labs, where he is developing a novel bitwise, simulation-grounded architecture in Rust and analog-inspired tooling aimed at advancing embodied agents beyond traditional model-centric AI.",
          talkTitle: "How Minds Get Small: Cognitive Compression from Biology to SIML",
          talkAbstract: "Modern AI keeps getting bigger, but intelligence gets smaller. This talk explores cognitive compression and how biological systems and emerging AI architectures reduce sensory input into compact, predictive internal models. We’ll cover Meta's JEPA-style learning, why model-centric AI hits limits, and how simulation-grounded, bitwise architectures like SIML point toward embodied agents that learn by minimizing surprise, not maximizing reward."
        },
        {
          imageURL: "@/assets/2026/speakers/LoganFarr.jpg",
          name: "Logan Farr",
          bio: "Logan is a software engineering manager at HealthVerity, and has been working in software engineering for over a decade – frontend, backend, full stack, and infrastructure. He's passionate about technology and leadership, and loves to nerd out about cloud infrastructure. In his free time lately, Logan has been playing D&D with his friends and submersed in Satisfactory.",
          talkTitle: "0x10 Years in Tech",
          talkAbstract: "Join a panel of industry veterans as we discuss topics you’ll encounter at any part of being a developer; ranging from hiring to code reviews to production support. 16+ years of engineering each involves a lot of learning, a lot of mistakes, and a lot of wisdom. "
        },
        {
          imageURL: "@/assets/2026/speakers/JonathanFleckenstein.png",
          name: "Jonathan Fleckenstein",
          bio: "I work with React, TypeScript, and all things JavaScript. When I’m not on a computer I enjoy running and tackling DIY projects.",
          talkTitle: "Zero to Mobile App in 30 Minutes!",
          talkAbstract: "Walk the audience through the steps required to build a mobile app with React Native. Start with showing how to setup React Native. Show hello world example and make some changes to show near instant app updates. Add small feature that utilizes mapping and geolocation APIs. Show off other features like sensor data. Briefly cover the architecture of React Native and how it works."
        },
        {
          imageURL: "@/assets/2026/speakers/NathanHeffley.png",
          name: "Nathan Heffley",
          bio: "Nathan has over a decade of experience building awesome things for the web. He enjoys helping out with the Tech Lancaster meetup, chatting about Laravel and React, and playing board games.",
          talkTitle: "Using a Computer Hands-Free: Coding by Voice Control No Longer Sucks",
          talkAbstract: "After struggling to use a computer for programming through an entire work day, it was either time to find a new career or find a replacement for the keyboard. In hindsight, it's also a lot of fun! This talk with have plenty, whether you need help figuring out ways to reduce stress on your hands or are just curious about what it looks like to work as a developer who doesn't use their hands."
        },
        {
          imageURL: "@/assets/2026/speakers/BradLhotsky.jpeg",
          name: "Brad Lhotsky",
          bio: "Brad has a background in automation, security, and observability at highly efficient, agile companies. He helped build the security team at Booking.com from zero over 20 people. Later, at craigslist he introduced observability and Infra-as-Code principles to reduce operational overhead by over 90%, decreased pager alerts from ~10 overnight pages per day to a single overnight alert per month while increasing the velocity of deployments by an order of magnitude.",
          talkTitle: "Hard Earned Lessons on Observability and Security",
          talkAbstract: "In the age of AI, this talk will be abnormally focused on the humans the machines are meant to serve. We'll look at successful security and observability solutions and how they map to the human behind the keyboard. Learn from more than two decades of mistakes in both to build successful and celebrated security and observability programs without them."
        },
        {
          imageURL: "@/assets/2026/speakers/WaltMankowski.jpeg",
          name: "Walt Mankowski",
          bio: "I'm a computer scientist in Columbia’s Radiology Department looking for better imaging biomarkers for breast and lung cancer. Longtime open source guy, new ham radio guy.",
          talkTitle: "A Brief History of Time Syncing",
          talkAbstract: "The Internet comes with no guarantees about network bandwidth or topology. It seems like it should be impossible to accurately synchronize the time between two computers, yet this has been a solved problem since the development of the Network Time Protocol over 40 years ago. How does NTP accomplish this seemingly impossible task? What does it even mean for the time to be \"correct\" in the first place? And what can we do when NTP isn't working?"
        },
        {
          imageURL: "@/assets/2026/speakers/AlexMayer.png",
          name: "Alex Mayer",
          bio: "Alex has over a decade of experience as a Software and Site Reliability Engineer. He has been active in the local meetup scene since 2014, and is the co-organizer of the Lancaster Linux Users Group (LancLUG), an avid GNU/Linux user, and contributes to open-source projects as often as he can.",
          talkTitle: "High Quality Pull Requests and Reviews",
          talkAbstract: "If you work in development or IT, chances are you will either need to submit or review pull requests. What are some dos and don'ts to make sure everyone gets the most out of code reviews? Pull requests are a great place to spread knowledge and collaborate. They can also be a nightmare if one side is spending more energy and communication isn't flowing. Let's talk about what makes up a high quality pull request and review."
        },
        {
          imageURL: "@/assets/2026/speakers/EricMorgan.jpg",
          name: "Eric Lease Morgan",
          bio: "Eric is a recently retired librarian from the University of Notre Dame, and he practiced librarianship for more than forty-five years, but he has been consistently writing software since 1976. Between then and now he has actively written open source software and promoted open access publication since before the phrases were coined. In his spare time he can bee seen folding defective floppy disks into intricate origami flora and fauna. ",
          talkTitle: "Creating and Providing Enhanced Access to .5 Million Journal Articles",
          talkAbstract: "This presentation describes the why's and wherefore's of creating a publically accessible digital library of journal articles. It outlines how a protocol called OAI-PMH was used to harvest the articles, how the articles where indexed and searched, and finally, how data sets of the articles were created for the purposes of analysis and modeling. The whole process makes it possible to use and understand any large collection of documents."
        },
        {
          imageURL: "@/assets/2026/speakers/TeamAxolotl.jpg",
          name: "One Small Step for an Axolotl (FTC Robotics Team 25650)",
          bio: "We are FIRST Tech Challenge Robotics (FTC) Team 25650 - One Small Step for an Axolotl, ranked 24th in the world for Autonomous, Division Champions and Event Finalist of the New England Premier International Event, and Think Award Winner at both the Pennsylvania State Championship and the New England Premier. ",
          talkTitle: "Robotics for All: Inspiring the Next Generation of STEM Leaders",
          talkAbstract: "FIRST Robotics is a global, student-driven program where young people design, build, fund, and code robots in a collaborative, exciting, and fun learning environment. Team 25650, One Small Step for an Axolotl, an international-award-winning FIRST Tech Challenge (FTC) team, shares how FIRST transforms hands-on STEM experiences to inspire youth (k-12) for pathways for STEM and leadership and how you can get involved! (Includes live demo/test drive)"
        },
        {
          imageURL: "@/assets/2026/speakers/EdSchwartz.jpeg",
          name: "Ed Schwartz",
          bio: "Ed is a senior researcher at Carnegie Mellon University where he studies automated executable analysis and reverse engineering.",
          talkTitle: "Hacking Around Your Home with Home Assistant",
          talkAbstract: "Home Assistant is an open source software project that allows you to connect all of your smart devices into a single platform.  Have a device that \"isn't supported\"?  No problem!  You can create your own device integrations, or more likely, find someone else who has already done it for you.  I'll share the basics of getting started with Home Assistant in this talk, and share some of the cool hacks and automations that I use at home."
        },
        {
          imageURL: "@/assets/2026/speakers/StephanieSchwartz.jpg",
          name: "Stephanie Schwartz",
          bio: "Stephanie Schwartz is a professor (and former chair) of Computer Science at Millersville University. She received her Ph.D. and M.S. degrees in Computer Science from the University of Delaware and her B.S. in Computer Science from Shippensburg University. Her research interests include user modeling, cognitive modeling, machine learning, data mining, and artificial intelligence in general. She teaches courses ranging from beginning programming courses to upper-level electives in artificial intelligence and data mining. Before teaching, she worked as a software engineer at several companies including MapQuest (now owned by AOL), AMP (now part of Tyco), and Primavera Software (now apparently part of Oracle -- because in the tech industry, change is the only constant).",
          talkTitle: "From Hype to Habit: How Software Engineers Are Using Generative AI",
          talkAbstract: "How are engineers actually using generative AI day to day? This talk shares survey results from software developers on real-world GenAI use cases, preferred interaction modes (autocompletion, chat, and agentic tools), and how much they trust the results. I explore impacts on productivity and quality—and what these insights mean for educating future software engineers."
        },
        {
          imageURL: "@/assets/2026/speakers/EricaWindisch.png",
          name: "Erica Windisch",
          bio: "Building cloud-computing and systems automation for 25 years. Erica has been a former maintainer of Docker and OpenStack, contributing to the OCI spec, its implementations, and ecosystem security. She has lead the deployment of public cloud compute and storage infrastructure, industry-scale infrastructure and application observability products, and has battled with running untrusted multi-tenant cloud applications since before know-your-customer existed.",
          talkTitle: "the vibe of agentic infrastructure",
          talkAbstract: "The velocity of agentic software development has reshaped how work is done. AI has proven useful to many developers, but has changed the requirements tooling and processes, and most of it is closed-source. In this talk, we will explore where teams and tools are struggling with the pace of agentic development, and the future of open source agentic infrastructure."
        },
      ],
      lastColor: "",
      innerWidth: window.innerWidth
    }
  },
  methods: {
    getNameAnchor: function(name) {
      return name.split(" ").join("+");
    },
    myEventHandler(e) {
      // your code for handling resize...
      this.innerWidth = window.innerWidth;
    }
  },
  mounted: function() {
    // scroll to speaker profile based on anchor tag
    const routeHash = this.$route.hash.split("#")[1];
    const anchorElement = document.getElementById(routeHash);
    if (anchorElement) {
      var top = anchorElement.offsetTop - 40;
      window.scrollTo(0, top);
    }
  }
}
</script>

<style lang="scss" scoped>
.pageContainer {
  padding-top: 6rem;
  background-color: white;
}
.pageContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding-bottom: 2em;

  @media screen and (max-width: 960px) {
    padding-right: 0;
    padding-left: 0;
  }
}

.speakers {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;

  min-height: calc(100vh - 28.9rem);
}

.speakerSection {
  width: calc(100vw - 4rem);
  // max-width: 1200px;
  padding: 4rem;
  margin-top: 2em;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;
}

h1 {
  font-family: "Lexend", sans-serif;
  font-size: 40px;
  color: #1f1f1f;
  padding-top: 2rem;
  padding-bottom: 8px;
  margin: 0;
}

p {
  @media screen and (max-width: 860px) {
    width: 95%;
  }
}

p > a {
  color: #1F1F1F;
  transition: color 0.25s;

  &:hover {
    color: #848699;
  }
}

h4, h3, p, a {
  z-index: 10;
  color: #1F1F1F !important;
}

marquee {
  position: absolute;
  top: 40px;
  height: 122px;
}
</style>