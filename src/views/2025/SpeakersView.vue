<script setup>
import SpeakerBlock from "../../components/2025/SpeakerBlock.vue";
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
    <div class="speakers">
      <h1>CPOSC SPEAKERS</h1>
      <div class="line"></div>
      <div class="pageContent">
        <!-- NOTE: BEFORE CALL FOR SPEAKERS IS READY -->
        <!-- <p>While we appreciate your enthusiasm in joining our crew, Friendship CPOSC is still prepping for its next voyage. Revisit this page for updates!</p> -->
        
        <!-- NOTE: BEFORE SPEAKERS HAVE BEEN SELECTED -->
        <!-- <p>Are you looking to join us on our maiden voyage to reach the next generation of coders? We’re ready for you! You can submit your talk using <a href="https://forms.gle/9C2Rwf2iXH7MWVWD9" target="_blank">this form</a>.</p> -->
        <!-- <p>Remember, if you’re overflowing with ideas you are welcome to submit as many talk proposals as you like, though at most only one talk per speaker will be selected. If you have questions about a talk topic or the logistics of being a CPOSC speaker, don’t hesitate to <a href="mailto:cposc@localareanetworks.org" target="_blank">contact us</a> and we’d be more than happy to chat about it. Thanks for your interest in making this year's CPOSC a great day of new knowledge for our attendees!</p> -->
      
        <!-- NOTE: AFTER SPEAKERS HAVE BEEN SELECTED -->
        <!-- <p>Speakers have received talk acceptances! Stay tuned for an update as soon as we have everyone's headshots.</p> -->
        <p>Get to know our fantastic lineup of 2025 speakers!</p>
        <div v-for="(speaker, index) in speakers" v-bind:key="index">
          <div class="line"></div>
          <SpeakerBlock :name="speaker.name" :nameAnchor="getNameAnchor(speaker.name.split(' ').join(''))" :imageUrl="speaker.imageURL" :bio="speaker.bio" :talkTitle="speaker.talkTitle" :talkAbstract="speaker.talkAbstract" :index="index"/>
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
          imageURL: "@/assets/2025/speakers/JeffBarrett.jpg",
          name: "Jeff Barrett",
          bio: "",
          talkTitle: "Software Eng and Ops When 1 Minute Downtime is Immediate Termination",
          talkAbstract: "This is going to be a high-level technical overview of software engineering and operations in the space of high-frequency trading and financial exchanges. In an ecosystem of 30-70MM messages/second and 3K trades/second with sub-microsecond response latency, it is immediate unquestioned termination if you cause a minute of downtime. How you architect solutions and code will directly relate to your job security."
          //bio: "25+ years of software engineering and leadership. Currently advising, coaching, and leading folks to better outcomes in healthy work environments. Focusing on outcomes over ego."
        },
        {
          imageURL: "@/assets/2025/speakers/TomCourtney.jpg",
          name: "Tom Courtney",
          bio: "Tom Courtney is a seasoned innovator with a career leading global high-tech product development teams and organizations at companies like Apple, Xerox, and ASML. Through his work, writing, and consulting, Tom delivers actionable AI strategies that enable individuals to unlock their potential and enhance both their professional and personal pursuits.  When he's not exploring the intersection of AI and society, you might find him playing piano, 3D printing, eBike riding, or experimenting with new technologies.",
          talkTitle: "Supercharging Innovation:  AI’s Role in Ideation and Visualization",
          talkAbstract: "Struggling to generate and visualize innovative new product ideas? This talk explores how AI accelerates ideation and visualization, automatically using 14 ideation techniques to instantly produce 70 detailed new product concepts - then automatically creates 70 stunning AI-generated images in seconds using DeepSeek generated python code. But why stop at images?  We’ll take a look at how AI-powered \"TEXT TO 3D DESIGN\" tools transform these AI-generated concepts into real 3D printed models. Experience a game-changing AI workflow that turns imagination into reality."
        },
        {
          imageURL: "@/assets/2025/speakers/ScottDienner.jpg",
          name: "Scott Dienner",
          bio: "I've been a software engineer for around 12 years and a manager for around 2 years. I've been enjoying using AI to solve lots of problems, maybe too much. My day to day usually involves a lot of meetings and programming in SQL, React, and nodejs.",
          talkTitle: "AI in the Support Stack: Real-World Applications & Critical Considerations",
          talkAbstract: "Explore practical AI implementations in support operations through real-world examples: automated Zendesk ticket summarization, RAG-powered knowledge base queries, and vector search for Jira issues. Learn how these solutions enhanced support efficiency while examining the gap between AI reality and perception, separating genuine potential from inflated expectations."
        },
        {
          imageURL: "",
          name: "Logan Farr",
          bio: "",
          talkTitle: "Secrets to a Well-Designed Service",
          talkAbstract: "What sets apart a well-designed service from a run-of-the-mill service? How do we avoid architecture anti-patterns as software developers? In this talk, we'll cover the key ingredients of any service at all levels – development patterns, CI/CD, infrastructure, and even runtime in a production environment. "
        },
        {
          imageURL: "@/assets/2025/speakers/ZachFedor.jpg",
          name: "Zach Fedor",
          bio: "Co-organizer of TechLancaster and member of the local meetup scene since 2014. English major turned self-taught web developer currently building React apps at early stage startups and pondering deep philosophical questions about life, the universe, and JavaScript.",
          talkTitle: "Rage Against the Machine Learning: A Luddite's Guide to AI",
          talkAbstract: "Far from being simpletons or technophobes, the Luddites were skilled craftspeople who saw how new factory tech was destroying their communities and livelihoods. So they fought back with secret meetings, organized resistance, and hammers. This talk compares the Industrial and AI revolutions, exploring how Luddite principles and tactics might be adapted for the digital age, when the machine to break exists in the cloud not the factory floor."
        },
        {
          imageURL: "",
          name: "Tim Freund",
          bio: "Tim is a software engineer and SRE who spends his days teaching the trade to students at Thaddeus Stevens. When he isn't you can find him volunteering at Lancaster Cemetery or running the trails through Lancaster County Park. He's always on the lookout for delicious food in the area, so share your tips.",
          talkTitle: "Automate Infrastructure with Incus and Ansible",
          talkAbstract: "Learn how you can quickly build, destroy, and rebuild labs and project infrastructure using Incus (LXC / KVM), OpenTofu (Terraform), and Ansible. This talk is informed by experience building and rebuilding labs for class. Participants will get access to a live container for the duration of the talk and all configuration artifacts will be available for download so you can build your own lab later."
        },
        {
          imageURL: "",
          name: "Robert Hudson",
          bio: "Rob is a good little hominid, and always very curious. This curiosity, along with the desire to make boring and slow things interesting and quick, took him on a career journey from fry cook to Radio Shack salesman to writing teacher to proposal writer to \"technical analyst,\" a title that afforded him the flexibility to do all kinds of things. He also once pretended to be a golf instructor and dropped out of a PhD program, so things didn't always go just right. But he ended up with a nice job at a hospitality company, a family of very curious children, and hobbies, like origami, that mostly keep him out of trouble in the few free minutes he has.",
          talkTitle: "Curious George Makes a Job",
          talkAbstract: "There was once a curious not-so-little monkey, or at least 99% similar (by DNA), who could not decide what he wanted to be when he grew up. And by all reckoning, he was well past grown-up age. He liked computers, and he liked people, and he liked making them work together. But no job was just right for him. So he got the idea to hack his way to a new job for the future. This presentation is that story."
        },
        {
          imageURL: "@/assets/2025/speakers/AndyJames.jpg",
          name: "Andy James",
          bio: "Andy has over 15 years of professional software development experience, including over 5 years each at both Google and Elastic. He's a full stack engineer focused on web applications, including Elastic's Customer Support Portal which features the Support Assistant; a chat bot utilizing Retrieval Augmented Generation to provide immediate Support to customers instead of needing to wait for a support engineer to assess their issue.",
          talkTitle: "GenAI for Customer Support: Making an LLM More Capable on Niche Topics",
          talkAbstract: "This talk will shed light on the journey to integrate generative AI into Elastic's customer success and support operations, providing you with a behind-the-scenes look at our process. Topics include building a knowledge base, UX considerations, tuning RAG search, and observability for the features."
        },
        {
          imageURL: "@/assets/2025/speakers/JoeLatrell.png",
          name: "Joe Latrell",
          bio: "",
          talkTitle: "Lesson Learned - Continuing a Company After a Disaster",
          talkAbstract: "What do you do when your company implodes and takes a major step backward? We'll look at what happened, what could have been done better, and how to move on. This is a subject few seem willing to talk about. We'll cover the stigma of setbacks and retooling your mind to move forward again."
        },
        {
          imageURL: "@/assets/2025/speakers/AlexMayer.png",
          name: "Alex Mayer",
          bio: "",
          talkTitle: "Advanced Git",
          talkAbstract: "Do you use git for work or personal projects? Ever wonder if your workflow could be better? Let's go over a few features of git that can help improve your process."
        },
        {
          imageURL: "@/assets/2025/speakers/BobMurphy.png",
          name: "Bob Murphy",
          bio: "",
          talkTitle: "Hacker Public Radio - why you should listen, and contribute.",
          talkAbstract: "Hacker Public Radio is a community podcast that run 5 days a week.  It is dedicated to sharing knowledge and has been running in various forms for nearly 20 years.  Anyone that has anything that is of interest to hackers is welcome to submit a show.  https://hackerpublicradio.org/"
        },
        {
          imageURL: "@/assets/2025/speakers/BenjaminSautner.jpg",
          name: "Benjamin Sautner",
          bio: "I'm currently a Distinguished Software Engineer at Comcast where I work in our Connected Living organization focused on the Xfinity Android and iOS apps.  I've been working in the mobile app space for over 10 years and before that I worked mainly in process control and automation systems.  I come from a Java background and now I develop primarily using Kotlin Multiplatform. Ask me about my chickens!",
          talkTitle: "Nimbits: The Open Source IoT Platform That Shaped My Career",
          talkAbstract: "In 2004 I was working in the process control / data acquisition field doing automation of chemical plants in Pennsylvania.  I've always enjoyed home automation and connecting devices to the internet and one day asked if I could get a licence for some of the data acquisition software we used so I could try to connect my aquarium to it. I was denied because it was expensive and proprietary. So I wrote my own just to show them! Nimbits was born!"
        },
        {
          imageURL: "@/assets/2025/speakers/PeterStukalov.jpg",
          name: "Peter Stukalov",
          bio: "Hello, I’m Peter Stukalov, a DevOps and SRE specialist with 15 years of experience. I recently arrived in the U.S. from Russia on an H1B visa. My focus is on designing and automating cloud infrastructures, including GitOps workflows. I look forward to sharing my insights and learning from everyone at the conference.",
          talkTitle: "A GitOps approach with ArgoCD",
          talkAbstract: "A real world GitOps example using ArgoCD with code and the ability to poke buttons in a real infrastructure."
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

.speakers {
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

.line {
  background: linear-gradient(305deg, rgba(162,28,217,1) 0%, rgba(254,112,100,1) 100%);
  margin-bottom: 1em;
  width: auto;
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