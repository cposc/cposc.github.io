<script setup>
import SponsorItem from "../../components/2025/home/SponsorItem.vue";
</script>

<template>
  <div class="pageContainer">
    <div class="sponsorships" id="sponsorship">
      <h1>CPOSC Sponsors</h1>
      <div className="btn2025" @mousedown="downloadPDF" dom="sponsorship">
        Download Printable Prospectus
      </div>
      <marquee direction="left">
        <img
          width="200"
          height="200"
          src="http://cposc.org/vroom_vroom.gif"
        />
      </marquee>
      <div className="sponsors">
        <div className="sponsorBlock what">
          <h2>What</h2>
          <p>
            The Central PA Open Source Conference (CPOSC) is a one-day event for
            open source enthusiasts. From novice to expert, attendees will
            experience open source code-alongs, case studies, and best
            practices.
          </p>
        </div>
        <div className="sponsorBlock when">
          <h2>When / Where</h2>
          <p>
            Set your coordinates for the Ware Center (in Lancaster, PA) on
            Saturday, April 26th. Last year, we had over 200 attendees - let's
            break that record!
          </p>
        </div>
        <div className="sponsorBlock who">
          <h2>Who</h2>
          <p>
            Our CPOSC audience spans enthusiastic open source users from across
            the tech spectrum:
          </p>
          <ul>
            <li><b>Developers:</b> All languages, from retro to new-age.</li>
            <li>
              <b>System and Network Admin:</b> The masterminds behind the
              systems.
            </li>
            <li><b>Entrepreneurs:</b> Driving businesses into the future.</li>
            <li><b>Students:</b> The next generation of tech talent.</li>
            <li>
              <b>Educators:</b> Guiding and inspiring the tech leaders of
              tomorrow.
            </li>
          </ul>
        </div>
        <div className="sponsorBlock why">
          <h2>Why</h2>
          <p>
            <b>Promote:</b> Showcase your company, products, and brand to a
            future-focused audience.
          </p>
          <p>
            <b>Demonstrate:</b> Highlight your commitment to innovation and
            diversity in tech.
          </p>
          <p>
            <b>Meet:</b> Connect with and recruit motivated and talented
            developers.
          </p>
          <p>
            <b>Help:</b> Build and support your local community of
            technologists.
          </p>
          <p>
            Since 2008, CPOSC has been the premier destination to gather, share
            ideas, and connect, driving us all "back to the future."
          </p>
        </div>
      </div>
      <h2>Sponsorship Levels</h2>
      <p className="prevSponsorPara">
        <i
          >Please note: These are sponsorship levels from previous years and are
          subject to change.</i
        >
      </p>
      <table>
        <tr>
          <th></th>
          <th>Time Circuit</th>
          <th>Hoverboard</th>
          <th>DeLorean</th>
          <th>Flux Capacitor</th>
        </tr>
        <tr>
          <td>Sponsorship Amount</td>
          <td>$500</td>
          <td>$1,000</td>
          <td>$2,000</td>
          <td>$5,000</td>
        </tr>
        <tr>
          <td>Conference T-Shirt Feature</td>
          <td>Small name</td>
          <td>Large name</td>
          <td>Name & Logo</td>
          <td>Name & Logo</td>
        </tr>
        <tr>
          <td>Logo on Website</td>
          <td>✓</td>
          <td>✓</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr>
          <td>Logo on Conference Material (i.e. the schedule)</td>
          <td>❌</td>
          <td>✓</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr>
          <td>
            Company Info and Promotional Material Posted in High-Traffic Areas
          </td>
          <td>❌</td>
          <td>❌</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr>
          <td>Special Mention During Open/Closing Remarks</td>
          <td>❌</td>
          <td>❌</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr>
          <td>Room Sponsorship</td>
          <td>❌</td>
          <td>❌</td>
          <td>❌</td>
          <td>✓</td>
        </tr>
        <tr>
          <td>Company-provided Promo Material Given to Attendees</td>
          <td>❌</td>
          <td>❌</td>
          <td>❌</td>
          <td>✓</td>
        </tr>
        <tr>
          <td>Number of Free, All-Access Passes</td>
          <td>1</td>
          <td>2</td>
          <td>4</td>
          <td>10</td>
        </tr>
      </table>
      <div className="smallTable">
        <h4>Time Circuit</h4>
        <p>Purchase a 'Time Circuit' for <b>$500</b> and get:</p>
        <ul>
          <li>Featured on our conference t-shirt (small name)</li>
          <li>Featured on our website (logo)</li>
          <li>Free all-access passes (1)</li>
        </ul>
        <h4>Hoverboard</h4>
        <p>
          Purchase a 'Hoverboard' for <b>$1,000</b> and cruise around the
          conference with these exclusive perks:
        </p>
        <ul>
          <li>Featured on our conference t-shirt (large name)</li>
          <li>Featured on our website (logo)</li>
          <li>Featured on conference material (e.g. the schedule)</li>
          <li>Free all-access passes (2)</li>
        </ul>
        <h4>DeLorean</h4>
        <p>
          Purchase a 'DeLorean' for <b>$2,000</b> and pick these up while
          traveling through time:
        </p>
        <ul>
          <li>Featured on our conference t-shirt (name & logo)</li>
          <li>Featured on our website (logo)</li>
          <li>Featured on conference material (e.g. the schedule)</li>
          <li>
            Company info and promo material posted in high-traffic areas (if
            provided)
          </li>
          <li>Special mention during opening/closing remarks</li>
          <li>Free all-access passes (4)</li>
        </ul>
        <h4>Flux Capacitor</h4>
        <p>
          Purchase a 'Flux Capacitor' for <b>$5,000</b> and build the vehicle to
          this conference's success! Plus these:
        </p>
        <ul>
          <li>Featured on our conference t-shirt (name & logo)</li>
          <li>Featured on our website (logo)</li>
          <li>Featured on conference material (e.g. the schedule)</li>
          <li>
            Company info and promo material posted in high-traffic areas (if
            provided)
          </li>
          <li>Special mention during opening/closing remarks</li>
          <li>Room sponsorship</li>
          <li>Company-provided promo material given to all attendees</li>
          <li>Free all-access passes (10)</li>
        </ul>
      </div>
      <div className="otherSponsorContent">
        <h2>Other Sponsorship Details</h2>
        <h3>Door Prizes</h3>
        <p>
          In addition to the sponsor levels listed above, we also award door
          prizes for attendees (i.e.books, swag, hardware, software). Any
          donations of open source related items are welcome.
        </p>
        <p>
          If you’d like to sponsor any of these items, please contact
          sponsor@localareanetworks.org for details.
        </p>
        <h3>Company Logo & Description</h3>
        <p>
          Please submit a logo, as well as a description of your company OR
          product (up to 50 words) to sponsor@localareanetworks.org.
        </p>
        <p>
          Logos should be in a scalable format such as PDF with fonts outlined,
          or TIFF/JPEG raster file (300 ppi). When shown on the conference
          website, logos will be displayed on a white background.
        </p>
        <h3>Payment</h3>
        <p>
          Payment can be made by check, Stripe, or PayPal. Please reach out to
          sponsor@localareanetworks.org to discuss payment plans and invoicing.
        </p>
        <p>
          CPOSC is a volunteer and community-driven event. We are currently
          registered with the IRS as a 501(c)(3) tax-deductible nonprofit
          charity. Your contributions to CPOSC are tax deductible.
        </p>
        <h3 id="attendee-privacy">Attendee Privacy</h3>
        <p>
          We respect the privacy of our attendees and have agreed to
          <b>not provide lists of attendee names or email addresses</b> to third
          parties. If you would like to collect email addresses from conference
          attendees, you are encouraged to provide some way for them to opt-in
          to your mailing list such as a sign-up sheet.
        </p>
        <h3>Contact Info</h3>
        <p>
          If you would like to sponsor CPOSC 2025, please send an email to
          sponsor@localareanetworks.org. One of the organizers will respond
          promptly.
        </p>
      </div>
    </div>
    <div class="sponsorships previousSponsors">
      <h2>previous sponsors</h2>
      <p>
        Sponsors are listed in alphabetic order rather than the year or amount
        these organizations previously supported.
      </p>
      <div class="sponsorsWrapper">
        <div class="sponsorSection">
          <SponsorItem
            v-for="sponsor of sponsors"
            :name="sponsor.name"
            :tier="sponsor.tier"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  components: {},
  data() {
    return {
      sponsors: [
        { name: "Aha Labs", tier: "five" },
        { name: "Boyd Technical Solutions", tier: "five" },
        { name: "Cargas", tier: "four" },
        { name: "Crunchy Data", tier: "four" },
        { name: "Elastic", tier: "three" },
        { name: "Harbor Compliance", tier: "two" },
        { name: "HUG", tier: "five" },
        { name: "Industrial Resolution", tier: "one" },
        { name: "JFC Global", tier: "five" },
        { name: "Listrak", tier: "two" },
        { name: "Make 717", tier: "five" },
        { name: "Mind Development & Design", tier: "two" },
        { name: "Quub", tier: "four" },
        { name: "Seisan", tier: "two" },
        { name: "Sharp Innovation", tier: "five" },
        { name: "WebstaurantStore", tier: "one" },
      ],
      activeBlock: 0,
      showBlock: [true, false, false, false],
      interval: undefined,
    };
  },
  methods: {
    async downloadPDF() {
      const privacy = document.getElementById("attendee-privacy");
      privacy.style.paddingTop = "8rem";
      const sponsorship = document.getElementById("sponsorship");
      var opt = {
        margin: 1,
        filename: "CPOSC2025_SponsorshipProspectus",
        html2canvas: {
          windowWidth: "1280px",
          windowHeight: "900px",
          // width: 1000,
        },
      };
      await html2pdf().from(sponsorship).set(opt).save();
      privacy.style.paddingTop = "0rem";
    },
  },
};
</script>

<style lang="scss" scoped>
.pageContainer {
  margin-bottom: 2rem;
}

h1 {
  font-family: "Bebas Neue", sans-serif;
  font-size: 40px;
  color: #1f1f1f;
  padding-top: 2rem;
  padding-bottom: 8px;
  margin: 0;
}

h2 {
  font-family: "Bebas Neue", sans-serif;
  font-size: 30px;
  color: #1f1f1f;
}

h3 {
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  color: #1f1f1f;
}

p,
li {
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #1f1f1f;
}

.sponsorships {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;

  .btn2025 {
    z-index: 5;
    cursor: pointer;
    background-color: #37bfea;
    padding: 1rem 2rem;
    width: fit-content;
    border-radius: 30px;
    text-align: center;

    font-family: "Poppins", sans-serif;
    color: #1f1f1f;
    font-weight: 600;
  }

  th {
    font-weight: 600;
  }

  td,
  th {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    padding: 5px 1rem;

    &:not(:first-of-type) {
      text-align: center;
    }
  }

  table {
    border-collapse: collapse;
    margin-bottom: 2rem;

    @media screen and (max-width: 1100px) {
      display: none;
    }
  }
  table,
  th,
  td {
    border: 1px solid;
  }

  p,
  ul {
    margin: 0 0 8px 0;
  }

  .sponsors {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 80%;
    max-width: 1300px;
    margin: auto;
    gap: 1rem;
    grid-template-areas:
      "what who why"
      "when who why";
    margin-bottom: 4rem;
    padding-top: 1rem;

    @media screen and (max-width: 1540px) {
      width: 90%;
    }

    @media screen and (max-width: 1320px) {
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        "what what"
        "who why"
        "when when";
    }

    @media screen and (max-width: 815px) {
      grid-template-columns: 1fr;
      grid-template-areas:
        "what"
        "why"
        "who"
        "when";
    }
  }

  .sponsorBlock {
    display: flex;
    flex-direction: column;
    padding: 1.5rem 2rem;
    border: 4px solid black;

    h2 {
      border-bottom: 4px solid black;
      margin-bottom: 8px;
      margin-top: 0;
    }

    &.what {
      grid-area: what;
      border-color: #a21cda;

      h2 {
        border-color: #a21cda;
      }
    }

    &.when {
      grid-area: when;
      border-color: #ff2cb7;

      h2 {
        border-color: #ff2cb7;
      }
    }

    &.who {
      grid-area: who;
      border-color: #ff7164;

      ul {
        padding-left: 1rem;
      }

      h2 {
        border-color: #ff7164;
      }
    }

    &.why {
      grid-area: why;
      border-color: #ffac19;

      h2 {
        border-color: #ffac19;
      }
    }
  }

  marquee {
    position: absolute;
    top: 40px;
    height: 122px;
  }
}

.smallTable {
  display: none;
  background-color: white;
  width: calc(100% - 6rem);
  padding: 3rem;

  h4 {
    font-size: 22px;
  }

  li {
    font-family: "Poppins", sans-serif;
  }

  @media screen and (max-width: 1100px) {
    display: block;
  }
}

.prevSponsorPara {
  max-width: 1700px;
  padding: 0 2rem;
  text-align: center;
}

.previousSponsors {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 8rem;

  .sponsorsWrapper {
    max-width: 1300px;
  }

  .sponsorSection {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  p {
    padding: 0 2rem;
    max-width: 830px;
  }
}

.otherSponsorContent {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 4rem 4rem 4rem;
  width: calc(100% - 8rem);

  h2 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h3 {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  p {
    text-align: center;
    margin: 0.5rem 0 0 0;
    padding: 0;
    max-width: 1000px;
    font-size: 12px;
  }
}

.extraPrivacyPadding {
  padding-top: 6rem;
}
</style>
