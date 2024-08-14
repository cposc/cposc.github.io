<script setup>
import SponsorItem from "../../components/2025/home/SponsorItem.vue";
</script>

<template>
  <div class="pageContainer">
    <div class="sponsorships">
        <h1>Sponsors</h1>
		<div className="btn2025">Download Printable Prospectus</div>
		<marquee direction="left">
			<img width="200" height="200" src="http://localhost:5173/vroom_vroom.gif" />
			<!-- </video> -->
			<!-- <lottie-player src="https://lottie.host/f81a950a-24c1-4a41-8fad-bc12317eec9a/k0r4aItdt3.json"  background="transparent"  speed="1"  style="width: 200px; height: 200px;"  loop  autoplay></lottie-player> -->
		</marquee>
		<div className="sponsorRow">
			<div className="sponsorColumn">
				<div :className="'sponsorBlock what ' + (showBlock[0] ? 'show' : 'hide')">
					<h2>What</h2>
					<p>The Central PA Open Source Conference (CPOSC) is a one-day event for open source enthusiasts. From novice to expert, attendees can experience code-alongs, case studies, and best practices, all while exploring the future of open source.</p>
				</div>
				<div :className="'sponsorBlock when ' + (showBlock[1] ? 'show' : 'hide')">
					<h2>When / Where</h2>
					<p>Set your coordinates for the Ware Center in Lancaster, Pennsylvania, on Saturday, April 26th, for this year’s CPOSC. Last year, we had over 200 attendees, and we're gearing up for even more this time!</p>
				</div>
			</div>
			<div :className="'sponsorBlock who ' + (showBlock[2] ? 'show' : 'hide')">
				<h2>Who</h2>
				<p>Our CPOSC audience spans enthusiastic open source users from across the tech spectrum:</p>
				<ul>
					<li><b>Developers:</b> All languages, from retro to new-age.</li>
					<li><b>System and Network Administrators:</b> The masterminds behind the systems.</li>
					<li><b>Entrepreneurs:</b> Driving businesses into the future.</li>
					<li><b>Students:</b> The next generation of tech talent.</li>
					<li><b>Educators:</b> Guiding and inspiring the tech leaders of tomorrow.</li>
				</ul>
			</div>
			<div :className="'sponsorBlock why ' + (showBlock[3] ? 'show' : 'hide')">
				<h2>Why</h2>
				<p><b>Promote:</b> Showcase your company, products, and brand to a future-focused audience.</p>
				<p><b>Demonstrate:</b> Highlight your commitment to innovation and diversity in tech.</p>
				<p><b>Meet:</b> Connect with motivated and talented developers for potential recruitment.</p>
				<p><b>Help:</b> Build and support your local community of technologists.</p>
				<p>Since 2008, CPOSC has been the premier destination for open source technologists to gather, share ideas, and connect, driving us all "back to the future."</p>
			</div>
		</div>
		<h2>Sponsorship Levels</h2>
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
				<td>Company Info and Promotional Material Posted in High-Traffic Areas</td>
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
				<td>5</td>
				<td>10</td>
			</tr>
		</table>
		<div class="previousSponsors">
			<h2>previous sponsors</h2>
			<p>Sponsors are listed in alphabetic order rather than the year or amount these organizations previously supported.</p>
			<div class="sponsorsWrapper">
				<div class="sponsorSection">
				<SponsorItem v-for="sponsor of sponsors"
					:name="sponsor.name"
					:tier="sponsor.tier"
				/>
				</div>
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
  mounted: function() {
    this.interval = setInterval(() => {
		this.showBlock[this.activeBlock] = false;

		if (this.activeBlock === (this.showBlock.length - 1)) {
			this.activeBlock = 0;
		} else {
			this.activeBlock += 1;
		}

		this.showBlock[this.activeBlock] = true;
	}, 5000);
  },
  unmounted: function() {
	clearInterval(this.interval);
  }
};
</script>

<style lang="scss" scoped>
.sponsorships {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 100%;
  padding-top: 2rem;

  h1 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 40px;
    color: #1F1F1F;
	padding-top: 2rem;
	margin: 0;
  }

  h2 {
    font-family: "Bebas Neue", sans-serif;
    font-size: 30px;
    color: #1F1F1F;
  }

  p, li {
    font-family: "Poppins", sans-serif;
    font-size: 18px;
    color: #1F1F1F;
  }

  th {
	font-weight: 600;
  }

  td, th {
	font-family: "Poppins", sans-serif;
    font-size: 14px;
	padding: 5px 1rem;

	&:not(:first-of-type) {
		text-align: center;
	}
  }

  table {
	border-collapse: collapse;
	margin-bottom: 4rem;
}
table, th, td {
  border: 1px solid;
}

  p, ul {
	margin: 0 0 8px 0;
  }

  .sponsorRow {
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	width: calc(100% - 2rem);
	justify-content: space-between;
	padding: 0 1rem;
	margin-bottom: 4rem;

	.sponsorColumn {
		display: flex;
		flex-direction: row;

		@media screen and (max-width: 1400px) {
			flex-direction: column;
		}
	}

	.sponsorBlock {
		display: flex;
		flex-direction: column;
		align-items: center;
		flex-grow: 1;
		max-width: 1000px;
		padding: 1rem 2rem;
		margin: 0 0.5rem 1rem 0.5rem;

		&.hide {
			@media screen and (max-width: 1100px) {
				display: none;
			}
		}

		h2 {
			border-bottom: 3px solid #1f1F1F;
		}

		&.what {
			width: 15%;
			min-width: 200px;
			background-color: #a21cda;

			@media screen and (max-width: 1400px) {
				width: auto;
			}
		}

		&.when {
			width: 15%;
			min-width: 200px;
			background-color: #ff2cb7;

			@media screen and (max-width: 1400px) {
				width: auto;
			}
		}

		&.who {
			width: 30%;
			min-width: 300px;
			background-color: #ff7164;
		}

		&.why {
			width: 30%;
			min-width: 300px;
			background-color: #ffac19;
		}
	}
  }

  .previousSponsors {
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	max-width: 1700px;
	padding-bottom: 8rem;

	.sponsorSection {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}
  }

  marquee {
	height: 122px;
  }
}
</style>
