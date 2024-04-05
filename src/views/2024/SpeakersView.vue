<script setup>
import GradientContainer from "../../components/2023/GradientContainer.vue";
import SpeakerBlock from "../../components/2024/SpeakerBlock.vue";

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
        <!-- <p>While we appreciate your enthusiasm in joining our crew, Friendship CPOSC is still prepping for its next voyage. Revisit this page for updates!</p> -->
        
        <!-- NOTE: BEFORE SPEAKERS HAVE BEEN SELECTED -->
        <!-- <p>Are you looking to join us on our maiden voyage to reach the next generation of coders? We’re ready for you! You can submit your talk using <a href="https://forms.gle/9C2Rwf2iXH7MWVWD9" target="_blank">this form</a>.</p> -->
        <!-- <p>Remember, if you’re overflowing with ideas you are welcome to submit as many talk proposals as you like, though at most only one talk per speaker will be selected. If you have questions about a talk topic or the logistics of being a CPOSC speaker, don’t hesitate to <a href="mailto:cposc@localareanetworks.org" target="_blank">contact us</a> and we’d be more than happy to chat about it. Thanks for your interest in making CPOSC 2024 a great day of new knowledge for our attendees!</p> -->
        
        <!-- <p>Speakers have received talk acceptances! Stay tuned for an update as soon as we have everyone's headshots.</p> -->
        
        <!-- <p style="margin-bottom: 3rem;">Below are speakers from previous trips around the sun.</p> -->

        <!-- <div class="speakerCarousel">
          <carousel :items-to-show="itemsToShow" :wrap-around="true" :autoplay="5000">
            <slide v-for="slide in 10" :key="slide">
              {{ slide }}
            </slide>
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
        </div> -->

        <!-- <div class="mobileSpeakers">
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
        </div> -->
      
        <!-- NOTE: AFTER SPEAKERS HAVE BEEN SELECTED -->
        <p>Get to know our Speakers! We encourage all attendees to review this page as our speakers have a wide range of backgrounds and experience levels.</p>
        <div v-for="(speaker, index) in speakers" v-bind:key="index">
          <SpeakerBlock :name="speaker.name" :nameAnchor="getNameAnchor(speaker.name)" :imageUrl="speaker.imageURL" :bio="speaker.bio" :index="index" :color="imageBorderColor(index)"/>
        </div>
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
      speakers: [
        {
          // imageURL: "",
          name: "Alex Mayer",
          bio: "I have worked with computers for over a decade. During that time I have worked as both a Software Engineer and a Site Reliability Engineer. I use GNU/Linux and spend my time outside of work contributing to open-source projects."
        },
        {
          // imageURL: "",
          name: "Bob Murphy",
          bio: "I'm a systems administrator, and long-time desktop Linux user, and EFF member."
        },
        {
          // imageURL: "",
          name: "Cody Alan Stubbs",
          bio: "I am a full-stack software engineer. I started off my career as a food/sensory scientist testing food products with consumers and professional tasters, but made a pivot into software engineering after building web applications for global research and business teams in my prior role. Outside of work, I enjoy tinkering with traditional food production methods and being involved with Lancaster's tech meetups."
        },
        {
          // imageURL: "",
          name: "Ean Dudley",
          bio: "Meet Ean Dudley, a Senior at Penn State University majoring in Cybersecurity with a focus on geopolitics and a minor in Political Science. Currently an IT Support Specialist at PSU and a Digital Literacy Instructor at the York Literacy Institute, [Your Name] is passionate about technology education and empowering others. As a member of ISC2 and a SANS Tournament of Champions Qualifier, Ean actively engages in the cybersecurity community. With plans to pursue a Master's in Cybersecurity in Fall 2024, Ean is a dedicated individual with a keen interest in the dynamic and ever-evolving field of cybersecurity."
        },
        {
          // imageURL: "",
          name: "Elizabeth K. Joseph",
          bio: "Elizabeth K. Joseph is a Linux systems administrator who now leads the Open Source Program Office for IBM Z where she works with the community to explore Linux and z/OS workloads on mainframes. She has previously worked on distributed systems and has written books on Ubuntu and OpenStack. A big fan of her adopted home city of Philadelphia, she is a regular speaker at open source conferences around the world."
        },
        {
          // imageURL: "",
          name: "Frederick Yocum",
          bio: "Frederick Yocum divides his time in unequal measure between freelance graphic design, fine art (his vocation), and working as a photography coordinator for the Lancaster-based nonprofit, Mennonite Central Committee. "
        },
        {
          // imageURL: "",
          name: "Jeff Barrett",
          bio: "25+ years of software engineering and leadership. Currently advising, coaching, and leading folks to better outcomes in healthy work environments. Focusing on outcomes over ego."
        },
        {
          // imageURL: "",
          name: "John Mulligan",
          bio: "John Mulligan is an independent tabletop game designer and owner of Exeunt Press. His published games blend the storytelling of roleplaying games (TTRPGs) with the mechanisms of board games, including the ENNIE-nominated Exclusion Zone Botanist. He writes Skeleton Code Machine, a publication that explores tabletop game mechanisms. John is also one of the founders of the CPOSC conference and former organizer of the Central PA Linux User Group."
        },
        {
          // imageURL: "",
          name: "Jonathan Bowman",
          bio: "Currently a software engineer at Cargas using SQL to convert data between systems, Jonathan has been a middle and high school teacher, software developer, pastor, IT director, data wrangler, and always a hobbyist developer. He loves Vim, Python, Rust, laughing at teenage offspring, and connecting with people."
        },
        {
          // imageURL: "",
          name: "Logan Farr",
          bio: "Logan has been working in software engineering for over a decade – frontend, backend, full stack, and most recently DevOps. He's passionate about technology and leadership, and loves to nerd out about infrastructure. In his free time, Logan loves traveling, reading, and playing video games."
        },
        {
          // imageURL: "",
          name: "Luke Demi",
          bio: "Luke Demi is a software engineer, father, and aspiring futurist."
        },
        {
          // imageURL: "",
          name: "Luke Westfall",
          bio: "Luke is a mechanical and a software engineer. He is a Penn State graduate holding a B.Sc. in Mechanical Engineering (2014) and a B.Sc. in Software Engineering (2022). Luke started his career doing mechanical and electrical design for custom hoists and cranes and slowly transitioned into his current role as Senior Software Engineer at Kito Americas, Inc. headquartered in Manheim, PA. In his downtime, Luke enjoys automating his home, working on his cars, and tinkering with gadgets."
        },
        {
          // imageURL: "",
          name: "Dr. Nazli Hardy",
          bio: "Dr. Nazli Hardy been a faculty member of Computer Science at Millersville University since 2004. One of her most favorite courses to teach is Discrete Math. It's not a universally well known course, but once you take it, you never forget it. It is the fundamental logic course for all Computer Science classes. Students particularly enjoy the Permutations and Combinations topics and Dr. Hardy is happy to being the topic to a broader audience. When Dr. Hardy is not in the classroom, she is spending time with her husband, Dr, Chris Hardy, and their 2 kids, Zuzu & Zaavi. In addition to her role as Associate Professor of Computer Science at MU, Dr. Hardy is the founder of Woman Empowered. She works extensively in leadership roles in women in STEM and success mindset."
        },
        {
          // imageURL: "",
          name: "Rick Joi",
          bio: "Rick Joi is the former Chief Innovation Officer at Energage, an HR technology company that runs dozens of regional Top Workplaces programs across the country. Rick has ten patents from his time there, but the core of his role was helping empower others to get their ideas implemented. His deep understanding of innovation was informed by being uniquely positioned to learn how various Top Workplaces encouraged and implemented ideas."
        },
        {
          // imageURL: "",
          name: "Robert Hudson",
          bio: "I'm a former programmer, past-life writing instructor and tutor, and lifelong learner who enjoys figuring things out and sharing that with other people. Currently working in hospitality doing all those things and loving every challenge. Also an accomplished origamist, amateur appetizer chef, and novice bubble baker."
        },
        {
          // imageURL: "",
          name: "Stephanie Schwartz",
          bio: "Stephanie Schwartz is a professor and chair of the Computer Science department at Millersville University. She received her Ph.D. and M.S. degrees in Computer Science from the University of Delaware and her B.S. in Computer Science from Shippensburg University. Her research interests include user modeling, cognitive modeling, machine learning, data mining, and artificial intelligence in general. She teaches courses ranging from beginning programming courses to upper-level electives in artificial intelligence and data mining. Before teaching, she worked as a software engineer at several companies including MapQuest (now owned by AOL), AMP (now part of Tyco), and Primavera Software (now apparently part of Oracle -- because in the tech industry, change is the only constant)."
        },
        {
          // imageURL: "",
          name: "Tom Swartz",
          bio: "Tom is the Associate Director of Support and a developer with Crunchy Data, providing technical assistance to hundreds of large organizations and programming software for and around PostgreSQL databases. An avid speaker, he as participated in many years of Central Pennsylvania Open Source Conferences, TechLancaster events, and other events in and around Central Pennsylvania. He is an avid enthusiast of mechanical keyboards, amateur radio, and is a passionate advocate for free and open source software. "
        },
      ],
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
      return name.split(" ").join("+");
    },
    myEventHandler(e) {
      // your code for handling resize...
      this.innerWidth = window.innerWidth;
    }
  },
  created() {
    // window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    // window.removeEventListener("resize", this.myEventHandler);
  },
  computed: {
    // itemsToShow: function() {
    //   if (this.innerWidth <= 600) {
    //     return 1;
    //   } else if (this.innerWidth <= 1150) {
    //     return 2.5;
    //   }
    //   return 4.5
    // },
    // slideWidth: function() {
    //   if (this.innerWidth <= 600) {
    //     return 150;
    //   } else if (this.innerWidth <= 1150) {
    //     console.log(150)
    //     return 150;
    //   }
    //   console.log(350)
    //   return 350
    // }
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
    margin-bottom: 6rem;

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

// .aboutImage {
//   margin-left: 2rem;

//   @media screen and (max-width: 450px) {
//     margin-left: 0;
//   }

//   img {
//     width: 200px;
//     height: 200px;
//     object-fit: cover;

//     @media screen and (max-width: 450px) {
//       width: 100%;
//     }
//   }
// }

// .speakerCarousel {
//   width: 1000px;
//   margin-bottom: 3rem;

//   @media screen and (max-width: 1150px) and (min-width: 860px) {
//     width: 800px;
//     margin-left: 0;
//   }

//   @media screen and (max-width: 860px) {
//     width: 300px;
//     margin-left: 0;
//   }

//   @media screen and (max-width: 860px) {
//     display: none !important;
//   }
// }

// .mobileSpeakers {
//   @media screen and (min-width: 860px) {
//     display: none;
//   }

//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   width: 90%;
//   margin-left: 5%;
//   margin-right: 5%;
//   flex-wrap: wrap;

//   @media screen and (max-width: 479px) {
//     width: 100%;
//     margin: 0;
//   }

//   .aboutImage {
//     @media screen and (min-width: 479px) {
//       margin: 8px !important;
//     }

//     @media screen and (max-width: 479px) {
//       img {
//         height: 200px;
//         width: 200px;
//       }
//       margin: 3px !important;
//     }

//     @media screen and (max-width: 410px) {
//       img {
//         height: auto;
//         width: 100%;
//       }
//       margin: 3px !important;
//     }
//   }
// }

.pageContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    padding-right: 0;
    padding-left: 0;
  }
}

// .carousel__slide {
//   @media screen and (max-width: 1150px) and (min-width: 600px) {
//     width: 225px !important;
//   }
  
//   @media screen and (max-width: 600px) {
//     width: 175px !important;
//     overflow: hidden;
//   }

//   div {
//     ol {
//       overflow: hidden !important;
//     }
//   }
// }

// .carousel__pagination-button::after {
//   @media screen and (max-width: 860px) {
//     width: 5px !important;
//   }

//   @media screen and (max-width: 525px) {
//     width: 1px !important;
//   }
// }

// .carousel__track {
//   @media screen and (max-width: 860px) {
//     max-width: 80% !important;
//   }
// }

</style>