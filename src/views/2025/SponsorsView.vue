<script setup>
import SponsorItem from "../../components/2025/home/SponsorItem.vue";
</script>

<template>
  <div class="pageContainer">
    <div class="sponsorships">
        <h1>Sponsors</h1>
        <h2>What</h2>
		<p>The Central PA Open Source Conference (CPOSC) is a one-day event for open source enthusiasts. From novice to expert, attendees can experience code-alongs, case studies, and best practices, all while exploring the future of open source.</p>
        <h2>When / Where</h2>
		<p>Set your coordinates for the Ware Center in Lancaster, Pennsylvania, on Saturday, April 26th, for this year’s CPOSC. Last year, we had over 200 attendees, and we're gearing up for even more this time!</p>
		<h2>Why</h2>
		<p><b>Promote:</b> Showcase your company, products, and brand to a future-focused audience.</p>
		<p><b>Demonstrate:</b> Highlight your commitment to innovation and diversity in tech.</p>
		<p><b>Meet:</b> Connect with motivated and talented developers for potential recruitment.</p>
		<p><b>Help:</b> Build and support your local community of technologists.</p>
		<p>Since 2008, CPOSC has been the premier destination for open source technologists to gather, share ideas, and connect, driving us all "back to the future."</p>
		<h2>Who</h2>
		<p>Our CPOSC audience spans enthusiastic open source users from across the tech spectrum:</p>
		<ul>
			<li><b>Developers:</b> All languages, from retro to new-age.</li>
			<li><b>System and Network Administrators:</b> The masterminds behind the systems.</li>
			<li><b>Entrepreneurs:</b> Driving businesses into the future.</li>
			<li><b>Students:</b> The next generation of tech talent.</li>
			<li><b>Educators:</b> Guiding and inspiring the tech leaders of tomorrow.</li>
		</ul>
		<h2>Tiers</h2>
        <h2>previous sponsors</h2>
      <div class="sponsorsWrapper">
        <div class="sponsorSection">
          <SponsorItem v-for="sponsor of sponsors"
            :name=sponsor.name
            :tier=sponsor.tier
          />
        </div>
        <div class="sponsorSection">
          <SponsorItem v-for="sponsor of sponsors.slice(2, 4)"
            :name=sponsor.name
            :tier=sponsor.tier
          />
        </div>
        <div class="sponsorSection">
          <SponsorItem v-for="sponsor of sponsors.slice(4, 7)"
            :name=sponsor.name
            :tier=sponsor.tier
          />
        </div>
        <div class="sponsorSection">
          <SponsorItem v-for="sponsor of sponsors.slice(7, 12)"
            :name=sponsor.name
            :tier=sponsor.tier
          />
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      sponsors: [
        { name: "WebstaurantStore", tier: "one" },
        { name: "Harbor Compliance", tier: "two" },
        { name: "Listrak", tier: "two" },
        { name: "Mind Development & Design", tier: "two" },
        { name: "Seisan", tier: "two" },
        { name: "Elastic", tier: "three" },
        { name: "Cargas", tier: "four" },
        { name: "Aha Labs", tier: "five" },
        { name: "HUG", tier: "five" },
        { name: "JFC Global", tier: "five" },
        { name: "Boyd Technical Solutions", tier: "five" },
        { name: "Make 717", tier: "five" },
        { name: "Sharp Innovation", tier: "five" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.sponsorships {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;

  h1 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 40px;
    color: #1F1F1F;
  }

  h2 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 30px;
    color: #1F1F1F;
  }

  p {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    color: #1F1F1F;
  }
}
</style>
