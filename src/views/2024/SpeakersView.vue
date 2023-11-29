<script setup>
import GradientContainer from "../../components/2023/GradientContainer.vue";
// import SpeakerBlock from "../../components/2023/speakers/SpeakerBlock.vue";

</script>

<template>
  <div class="pageContainer">
    <img
      class="headerImage"
      alt="CPOSC Founder Presenting"
      src="@/assets/2024/CPOSC_Cover_2024_Galaxy.png"
    />
    <div class="speakerContent">
      <h4>SPEAKERS</h4>
      <h1>Talk to Us</h1>
      <div class="line"></div>
      <div class="pageContent">
        <!-- NOTE: BEFORE CALL FOR SPEAKERS IS READY -->
        <p>While we appreciate your enthusiasm in joining our crew, Friendship CPOSC is still prepping for its next voyage. Revisit this page for updates!</p>
        <p style="margin-bottom: 3rem;">Below are speakers from previous trips around the sun.</p>
        
        <div class="speakerCarousel">
          <carousel :items-to-show="itemsToShow" :wrap-around="true" :autoplay="5000">
            <!-- <slide v-for="slide in 10" :key="slide">
              {{ slide }}
            </slide> -->
            <slide key="1" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/alex_mayer.jpeg"
                />
              </div>
            </slide>
            <slide key="2" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/bob_murphy.jpg"
                />
              </div>
            </slide>
            <slide key="3" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/deanna_bledsoe.jpg"
                />
              </div>
            </slide>
            <slide key="4" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/ean_dudley.jpg"
                />
              </div>
            </slide>
            <slide key="5" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/ed_schwartz.jpeg"
                />
              </div>
            </slide>
            <slide key="6" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/gregember.jpg"
                />
              </div>
            </slide>
            <slide key="7" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/jacob_whetstone.jpeg"
                />
              </div>
            </slide>
            <slide key="8" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/joe_latrell.png"
                />
              </div>
            </slide>
            <slide key="9" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/joel_walker.jpeg"
                />
              </div>
            </slide>
            <slide key="10" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/jonathan_fleckenstein.jpeg"
                />
              </div>
            </slide>
            <slide key="11" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/kevin_hicks.jpg"
                />
              </div>
            </slide>
            <slide key="12" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/luke_demi.jpeg"
                />
              </div>
            </slide>
            <slide key="13" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/nathaniel_evry.png"
                />
              </div>
            </slide>
            <slide key="14" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/nick_elzer.jpeg"
                />
              </div>
            </slide>
            <slide key="15" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/rich_everts.jpg"
                />
              </div>
            </slide>
            <slide key="16" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/ryan_walker.jpg"
                />
              </div>
            </slide>
            <slide key="17" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/samantha_noggle.jpg"
                />
              </div>
            </slide>
            <slide key="18" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/Stephanie-Schwartz.jpg"
                />
              </div>
            </slide>
            <slide key="19" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/thomas_knickman.jpeg"
                />
              </div>
            </slide>
            <slide key="20" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/tom_swartz.jpeg"
                />
              </div>
            </slide>
            <slide key="21" :slide-width="slideWidth">
              <div class="aboutImage">
                <img
                  alt="CPOSC Audience 2019"
                  src="@/assets/2023/speakers/walt_mankowski.jpg"
                />
              </div>
            </slide>
            <template #addons>
              <navigation />
              <pagination />
            </template>
          </carousel>
        </div>

        <div class="mobileSpeakers">
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/alex_mayer.jpeg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/bob_murphy.jpg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/deanna_bledsoe.jpg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/ean_dudley.jpg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/ed_schwartz.jpeg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/gregember.jpg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/jacob_whetstone.jpeg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/joe_latrell.png"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/joel_walker.jpeg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/jonathan_fleckenstein.jpeg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/kevin_hicks.jpg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/luke_demi.jpeg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/nathaniel_evry.png"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/nick_elzer.jpeg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/rich_everts.jpg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/ryan_walker.jpg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/samantha_noggle.jpg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/Stephanie-Schwartz.jpg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/thomas_knickman.jpeg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/tom_swartz.jpeg"
            />
          </div>
          <div class="aboutImage">
            <img
              alt="CPOSC Audience 2019"
              src="@/assets/2023/speakers/walt_mankowski.jpg"
            />
          </div>
        </div>
        <!-- NOTE: BEFORE SPEAKERS HAVE BEEN SELECTED -->
        <!-- <p>We’re ready for you! You can submit your talk using <a href="https://forms.gle/7XxjyBCzKFUyvj8R8" target="_blank">this form</a>.</p>
        <p>Remember, if you’re overflowing with ideas you are welcome to submit as many talk proposals as you like, though at most only one talk per speaker will be selected. If you have questions about a talk topic or the logistics of being a CPOSC speaker, don’t hesitate to <a href="mailto:cposc@localareanetworks.org" target="_blank">contact us</a> and we’d be more than happy to chat about it. Thanks for your interest in making CPOSC 2023 a great day of new knowledge for our attendees!</p> -->
        
        <!-- NOTE: AFTER SPEAKERS HAVE BEEN SELECTED -->
        <!-- <p>Get to know our Speakers! We encourage all attendees to review this page as our speakers have a wide range of backgrounds and experience levels.</p>
        <div v-for="(speaker, index) in speakers" v-bind:key="index">
          <SpeakerBlock :name="speaker.name" :nameAnchor="getNameAnchor(speaker.name)" :imageUrl="speaker.imageURL" :bio="speaker.bio" :index="index" :color="imageBorderColor(index)"/>
        </div> -->
      </div>
      <!-- <GradientContainer /> -->
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      // speakers: [
      //   {
      //     imageURL: "alex_mayer.jpeg",
      //     name: "Alex Mayer",
      //     bio: "I have worked with computers for over a decade. During that time I have worked as both a Software Engineer and a Site Reliability Engineer. I use GNU/Linux and spend my time outside of work contributing to open-source projects."
      //   },
      //   {
      //     imageURL: "bob_murphy.jpg",
      //     name: "Bob Murphy",
      //     bio: "I am a Linux Systems Administrator. I've been a user of GNU/Linux for my own personal use since the late nineties. I've used many distributions over the years, starting with Slackware, up to the latest Red Hat and Ubuntu releases."
      //   },
      //   {
      //     imageURL: "deanna_bledsoe.jpg",
      //     name: "Deanna Bledsoe",
      //     bio: "Deanna started using her 20+ years of software development skills to teach kids when schools and extracurricular activities went virtual due to the COVID-19 pandemic.  She started using open-source block coding to help her daughter’s Girl Scout troop earn STEM badges.  This turned into Kai Coders, a program that teaches elementary school kids how to code. Deanna brings the 'spirit of Aloha' , a welcoming, kind, and inclusive environment, into her classrooms.  She acknowledges that not only are mistakes OK, but they are expected and admits to making and learning from many mistakes during her career as a programmer. She works with local schools to bring computer science into subjects both inside and outside of traditional STEM topics.  Examples of this include incorporating invention and coding technology into a food drive, running a coding club for 3rd-5th graders, and most recently, a collaborative LEO (Love Each Other) project incorporating music, art, and STEM teachers into a schoolwide interactive display for Mental Health Awareness month. When Deanna isn't teaching computer science to kids, she is committed to changing the way government operates as the Director of Information Technology for Delaware's Office of the State Treasurer."
      //   },
      //   {
      //     imageURL: "ean_dudley.jpg",
      //     name: "Ean Dudley",
      //     bio: " Ean Dudley is a driven and knowledgeable Cyber Security student at Penn State University. As an IT Support Specialist, Ean has honed their technical skills and is well-versed in the day-to-day operations of IT environments. With 5 years of experience in competitive cyber security environments, such as Capture the Flag and Attack Defense, Ean has a proven track record of success in the competitive environment. Ean's experience leading multiple IT and Cyber Security teams showcases their strong leadership skills, making them a valuable asset to any organization. As a SANS Tournament of Champions Qualifier, Ean demonstrates their expertise and critical thinking abilities in the field of cybersecurity. "
      //   },
      //   {
      //     imageURL: "ed_schwartz.jpeg",
      //     name: "Edward Schwartz",
      //     bio: "I am a senior researcher scientist in the Software Engineering Institute at Carnegie Mellon University.  I study a variety of topics in binary analysis, including exploitation techniques and defenses."
      //   },
      //   {
      //     imageURL: "francis_wertz.jpeg",
      //     name: "Francis Wertz",
      //     bio: "Hello, I’m Francis Wertz. I’ve lived in Lancaster for a touch over a decade now. I’m   a Project Leader working in automotive telemetry. I consider myself a developer advocate, and strive to see my teams become more productive and engaged with their careers in enterprise solutions. I enjoy developing personal projects, homelab, helping small business, home improvement and finish carpentry. I’m married and share a home with my brilliant wife Emma, along with our many pets!"
      //   },
      //   {
      //     imageURL: "gregember.jpg",
      //     name: "Gregory Ember",
      //     bio: "Greg is a Lititz-based IT consultant, systems administrator and project manager. He attended both the University of Delaware and Millersville University in their Computer Science departments before receiving his B.S. in Information Science and Technology from Penn State University. In his spare time over the past twenty years he has assisted the MAME project as 'project facilitator'. His interests include technical documentation, software preservation, digital asset management, knowledge management, data mining, intellectual property law, and the open source community. "
      //   },
      //   {
      //     imageURL: "jacob_whetstone.jpeg",
      //     name: "Jacob Whetstone",
      //     bio: "Jake is a polyglot developer by happenstance, currently focusing on web app development. He's a husband and a father of two; a fan of punk rock, spicy food and bitter drink; trying to be a good neighbor."
      //   },
      //   {
      //     imageURL: "joe_latrell.png",
      //     name: "Joe Latrell",
      //     bio: "Joe Latrell is an inventor and technology developer who has coordinated payloads for launch on the SpaceX Falcon 9, Blue Origin New Shepard, and Rocket Lab Electron. Prior to quub, Joe gained wide-ranging experience in a variety of technology roles, such as launching an early-stage suborbital rocket company, coding programs for large datasets, and developing numerous software packages for the education industry. Joe founded quub to manufacture small, cost-effective satellites designed to gather data and monitor Earth, its weather systems, and its environmental resources. His goal is to create a network of satellites that give first responders, companies, and municipalities the data they need to respond and act quickly."
      //   },
      //   {
      //     imageURL: "joel_walker.jpeg",
      //     name: "Joel Walker",
      //     bio: "Just like his college education, Joel had a hard time finishing writing this speaker bio, so he asked ChatGPT to help. Let's see what ChatGPT can do! Joel Walker is a custom software solutions entrepreneur who started his career in the “technology solutions for hire” business 15 years ago. Joel has had a diverse range of work experiences, but he believes that a good bio should start with his favorite jobs, not just the most impressive ones. His favorites include working as a climbing gym hand for Tom and Jodi at Reading Rocks, and as a snowboard instructor in Sugarbush, VT - which is his favorite place in the world. Joel is the Founder and CEO of Industrial Resolution, a custom software development company that specializes in building innovative solutions for clients across a wide range of industries, using a wide range of technologies, such as Elastic. At work, Joel is focused on driving the company's vision and strategy for growth, while also making a positive impact on the communities in which he lives and works. This ethos led him in 2016 to create Pubforge, a technology and tinkerer-friendly workspace in Lancaster, Pennsylvania that provides an environment for community leaders, entrepreneurs, and innovators to take advantage of. In addition to his work at Industrial Resolution, Joel is involved in various initiatives that support the development of technology talent and resources in his community: *He serves as the Chairman of Local Area Networks, a 501c(3) non-profit that provides technology resources and education to the Lancaster tech community. *He has previously served as the Steward and Owner of the Central PA Open Source Conference for a period of 4 years, which brings together technology professionals and enthusiasts to share knowledge and foster collaboration, before forming LAN to ensure the management of the conference persisted for years to come and for the benefit of all. *Joel launched the \"Lanc Tech Fund\", a donor-advised fund managed by the Lancaster County Community Foundation which will one day help to fund the future of accessible tech education in our area. *He co-created the Thaddeus Stevens College Computer Software Engineering Technology Associate's Degree Program with Elyse Ewing (the brains) and Chip Cargas (the money), which provides students with the skills and knowledge they need to succeed in the technology industry. *Joel is a former Director at Lancaster Chamber of Commerce, a LEAD STEM Fellow and PA STEM Ambassador, advocating for STEM education and workforce development in Pennsylvania. *He currently serves as a member of the PA State Workforce Development Boards Subcommittee of Career Pathways and Apprenticeships, where he helps develop strategies to address the skills gap in the technology industry, and on the Education Committee at ABC Keystone. Joel is also a family man. He has a boy and a girl, Huck and Scout, each of whom make him feel so proud. He was also lucky enough to find a wise and loving wife, Holly."
      //   },
      //   {
      //     imageURL: "jonathan_fleckenstein.jpeg",
      //     name: "Jonathan Fleckenstein",
      //     bio: "I've been doing web development for over 10 years. I love working with TypeScript and React and am always looking for something new to learn!"
      //   },
      //   {
      //     imageURL: "kevin_hicks.jpg",
      //     name: "Kevin Hicks",
      //     bio: "I'm a Software Architect at WebstaurantStore focusing on designing web applications that handle the logistics of processing orders and getting them to customers. I also contract on the side working on web and mobile applications for various clients. When I'm not working, I like to play board games, video games and spend time with my wife and daughter outside."
      //   },
      //   {
      //     imageURL: "luke_demi.jpg",
      //     name: "Luke Demi",
      //     bio: "Meet Luke, a software engineer who specializes in solving infrastructure scalability issues. He has been lucky to have tackled some tough challenges during high-growth periods at companies like Coinbase, Clubhouse, and DoorDash. When he's not busy scaling in the tech world, you can find him in Lancaster city with his three kids, who are likely scaling in height as well."
      //   },
      //   {
      //     imageURL: "nathaniel_evry.jpg",
      //     name: "Nathaniel Evry",
      //     bio: "Passionate technologist with a diverse set of skills and a love for innovation. I'm a creative problem-solver always eager to learn and build new things! I'm currently doing aerospace research at Quub!"
      //   },
      //   {
      //     imageURL: "nick_elzer.jpeg",
      //     name: "Nick Elzer",
      //     bio: "Nick Elzer was born and raised in Lancaster County, Pennsylvania and is currently studying manufacturing engineering technology at Millersville University. At quub, Nick works on development and prototyping for electrical and sensor integration, as well as the development of satellite schematics and PCB boards."
      //   },
      //   {
      //     imageURL: "rich_everts.jpg",
      //     name: "Richard Everts",
      //     bio: "Richard Everts is a federally funded researcher in the AI space, patented technologist, award-winning film maker, and published author. With over two decades of leadership in multiple industries, his primary research and development includes Artificial General Intelligence (AGI), consciousness, and supporting those most vulnerable in society. "
      //   },
      //   {
      //     imageURL: "ryan_walker.jpg",
      //     name: "Ryan Walker",
      //     bio: "Ryan is the Chief Technology Officer at Casetext, a startup that builds AI products to improve the practice of law.  He's worked at the intersection of software engineering, machine learning, and natural language for over a decade and has a particular interest in text search systems.  Ryan is originally from Lancaster, he did his undergraduate studies at Millersville University, and holds a PhD in mathematics from the University of Kentucky."
      //   },
      //   {
      //     imageURL: "samantha_noggle.jpg",
      //     name: "Samantha Noggle",
      //     bio: "Samantha Noggle is in her senior year at Millersville University, pursuing a bachelor's degree in Computer Science. She is extremely interested in exploring the various forms of artificial intelligence and their applications. She's previously interned at Lighthouse IP where she used machine learning techniques in her role as a software engineer."
      //   },
      //   {
      //     imageURL: "Stephanie-Schwartz.jpg",
      //     name: "Stephanie Schwartz",
      //     bio: "Stephanie Schwartz is a professor and chair of the Computer Science department at Millersville University. She received her Ph.D. and M.S. degrees in Computer Science from the University of Delaware and her B.S. in Computer Science from Shippensburg University. Her research interests include user modeling, cognitive modeling, machine learning, data mining, and artificial intelligence in general. She teaches courses ranging from beginning programming courses to upper-level electives in artificial intelligence and data mining. Before teaching, she worked as a software engineer at several companies including MapQuest (now owned by AOL), AMP (now part of Tyco), and Primavera Software (now apparently part of Oracle -- because in the tech industry, change is the only constant)."
      //   },
      //   {
      //     imageURL: "thomas_knickman.jpeg",
      //     name: "Thomas Knickman",
      //     bio: "I am a senior software engineer with 10 years of experience working on the web. I have helped architect, scale, and maintain several large scale (100+ developers) monorepos at my previous roles at SurveyMonkey and Under Armour, and now work at Vercel as a core team member and maintainer of Turborepo, an open source build system optimized for JavaScript and TypeScript, written in Go, and Rust."
      //   },
      //   {
      //     imageURL: "tom_swartz.jpeg",
      //     name: "Tom Swartz",
      //     bio: "Tom is the Associate Director of Support and a developer with Crunchy Data, providing technical assistance to hundreds of large organizations and programming software for and around PostgreSQL databases. An avid speaker, he as participated in many years of Central Pennsylvania Open Source Conferences, TechLancaster events, and other events in and around Central Pennsylvania. He is an avid enthusiast of mechanical keyboards, amateur radio, and is a passionate advocate for free and open source software. "
      //   },
      //   {
      //     imageURL: "walt_mankowski.jpg",
      //     name: "Walt Mankowski",
      //     bio: "I'm a recovering, recovering ivory tower computer scientist. I work in Penn Medicine's Radiology Department looking for better imaging biomarkers for breast and lung cancer. I also help run the Philadelphia Linux Users Group."
      //   },
      // ],
      lastColor: "",
      innerWidth: window.innerWidth
    }
  },
  methods: {
    imageBorderColor: function(index) {
      // show a random border color for each speaker
      const colors = ["#2b3480", "#720b97", "#007eac", "#424242"];
      // make sure the same color doesn't appear twice in a row
      // let colorIdx;
      // do {
      //   colorIdx = Math.floor(Math.random() * 4);
      // } while (this.lastColor === colors[colorIdx])

      // this.lastColor = colors[colorIdx];
      // return this.lastColor;
      return colors[index % 3]
    },
    getNameAnchor: function(name) {
      // return name.split(" ").join("+");
    },
    myEventHandler(e) {
      // your code for handling resize...
      this.innerWidth = window.innerWidth;
    }
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  computed: {
    itemsToShow: function() {
      if (this.innerWidth <= 600) {
        return 1;
      } else if (this.innerWidth <= 1150) {
        return 2.5;
      }
      return 4.5
    },
    slideWidth: function() {
      if (this.innerWidth <= 600) {
        return 150;
      } else if (this.innerWidth <= 1150) {
        console.log(150)
        return 150;
      }
      console.log(350)
      return 350
    }
  },
  mounted: function() {
    // scroll to speaker profile based on anchor tag
    // const routeHash = this.$route.hash.split("#")[1];
    // const anchorElement = document.getElementById(routeHash);
    // if (anchorElement) {
    //   var top = anchorElement.offsetTop - 40;
    //   window.scrollTo(0, top);
    // }
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

  .speakerContent {
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h4, p {
      color: #1F1F1F;
    }

    h1 {
      color: #BA273B;
      margin-bottom: 6px;
    }

    .line {
      background-color: #BA273B;
      margin-bottom: 1rem;
    }
  }
}

p > a {
  color: #BA273B;
  transition: color 0.25s;

  &:hover {
    color: #848699;
  }
}

p {
  @media screen and (max-width: 860px) {
    width: 95%;
  }
}

.aboutImage {
  margin-left: 2rem;

  @media screen and (max-width: 450px) {
    margin-left: 0;
  }

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;

    @media screen and (max-width: 450px) {
      width: 100%;
    }
  }
}

.speakerCarousel {
  width: 1000px;
  margin-bottom: 3rem;

  @media screen and (max-width: 1150px) and (min-width: 860px) {
    width: 800px;
    margin-left: 0;
  }

  @media screen and (max-width: 860px) {
    width: 300px;
    margin-left: 0;
  }

  @media screen and (max-width: 860px) {
    display: none !important;
  }
}

.mobileSpeakers {
  @media screen and (min-width: 860px) {
    display: none;
  }

  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  flex-wrap: wrap;

  @media screen and (max-width: 479px) {
    width: 100%;
    margin: 0;
  }

  .aboutImage {
    @media screen and (min-width: 479px) {
      margin: 8px !important;
    }

    @media screen and (max-width: 479px) {
      img {
        height: 200px;
        width: 200px;
      }
      margin: 3px !important;
    }

    @media screen and (max-width: 410px) {
      img {
        height: auto;
        width: 100%;
      }
      margin: 3px !important;
    }
  }
}

.pageContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 800px) {
    padding-right: 0;
    padding-left: 0;
  }
}

.carousel__slide {
  @media screen and (max-width: 1150px) and (min-width: 600px) {
    width: 225px !important;
  }
  
  @media screen and (max-width: 600px) {
    width: 175px !important;
    overflow: hidden;
  }

  div {
    ol {
      overflow: hidden !important;
    }
  }
}

.carousel__pagination-button::after {
  @media screen and (max-width: 860px) {
    width: 5px !important;
  }

  @media screen and (max-width: 525px) {
    width: 1px !important;
  }
}

// .carousel__track {
//   @media screen and (max-width: 860px) {
//     max-width: 80% !important;
//   }
// }

</style>