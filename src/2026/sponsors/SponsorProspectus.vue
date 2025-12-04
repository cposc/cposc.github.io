<script setup>
import TopNav from "../sitecontainer/Nav/TopNav.vue";
// import RegistrationCTA from "./RegistrationCTA.vue";

// // Add a download button for easy PDF generation
// document.addEventListener("DOMContentLoaded", () => {
//   const downloadBtn = document.createElement("button");
//   downloadBtn.innerHTML = "📄 Download as PDF";
//   downloadBtn.style.cssText = `
//       position: fixed;
//       top: 10px;
//       right: 20px;
//       background: linear-gradient(45deg, #2D1B69, #11998E);
//       color: white;
//       padding: 12px 20px;
//       border: none;
//       border-radius: 25px;
//       font-weight: 600;
//       cursor: pointer;
//       z-index: 1000;
//       box-shadow: 0 4px 15px rgba(0,0,0,0.2);
//       transition: transform 0.3s ease;
//   `;

//   downloadBtn.addEventListener('mouseenter', function() {
//     this.style.transform = 'translateY(-2px)';
//   });

//   downloadBtn.addEventListener('mouseleave', function() {
//     this.style.transform = 'translateY(0)';
//   });

//   downloadBtn.addEventListener('click', function() {
//     window.print();
//   });

//   document.body.appendChild(downloadBtn);
// });
</script>

<template>
  <TopNav></TopNav>
  <a href="/CPOSCProspectus2026.pdf" target="_blank"><div class="prospectus-download">📄 Download as PDF</div></a>
  <div class="document">
    <!-- Cover Page -->
  <!-- About Page -->
  <div class="page">
      <div class="page-header">
          <h2>Welcome to CPOSC</h2>
          <p>Where Open Source Innovation Meets Community Impact</p>
      </div>

      <h3>About CPOSC Sweet 0x10</h3>
      <p>The Central Pennsylvania Open Source Conference (CPOSC) is celebrating its <strong>Sweet Sixteenth year</strong> as the premier gathering for technologists, developers, and digital innovators in Central PA. Since 2008, we've been the catalyst that brings together the brightest minds in our technology constellation.</p>

      <p>This year's <strong>Sweet 0x10</strong> theme celebrates 16 years of binary brilliance—where bits meet community, bytes build connections, and every participant adds value to our shared digital ecosystem.</p>

      <div class="highlight-box">
          <h4><i class="fa fa-regular fa-star"></i> Our Mission</h4>
          <p>To create a space where the Central PA technology community converges, converses, and connects. We're not just hosting presentations—we're building the future of open source technology in our region, one connection at a time.</p>
      </div>

      <h3>Event Details</h3>
      <p><strong>Date:</strong> March 28, 2026</p>
      <p><strong>Venue:</strong> Ware Center, Lancaster, PA</p>
      <p><strong>Format:</strong> Full-day conference with multiple tracks</p>
      <p><strong>Audience:</strong> 220+ local technologists, developers, students, and industry leaders</p>

      <div class="stats-grid">
          <div class="stat-card">
              <h4>85%</h4>
              <p>Software Developers & Engineers</p>
          </div>
          <div class="stat-card">
              <h4>60%</h4>
              <p>Decision Makers & Tech Leaders</p>
          </div>
          <div class="stat-card">
              <h4>25%</h4>
              <p>Students & Early Career</p>
          </div>
          <div class="stat-card">
              <h4>15%</h4>
              <p>First-time Attendees</p>
          </div>
      </div>
  </div>

  <!-- Why Sponsor Page -->
  <div class="page">
      <div class="page-header">
          <h2>Why Your Investment Matters</h2>
          <p>The ROI of Supporting Innovation</p>
      </div>

      <h3><i class="fa-solid fa-arrows-down-to-people"></i> Reach Your Exact Audience</h3>
      <p>CPOSC attendees are the technology professionals your organization needs to connect with decision-makers, innovators, and implementers who drive technical choices in their companies.</p>

      <div class="highlight-box">
          <h4>Our Attendees Are:</h4>
          <ul style="margin: 15px 0; padding-left: 20px;">
              <li>Senior developers and architects actively evaluating new technologies</li>
              <li>CTOs and technical leaders with budget authority</li>
              <li>DevOps engineers implementing infrastructure solutions</li>
              <li>Rising talents who will be tomorrow's tech leaders</li>
          </ul>
      </div>

      <h3><i class="fa-solid fa-rocket"></i> Your Benefits Go Beyond Brand Visibility</h3>
      
      <h4>Talent Pipeline Access</h4>
      <p>Connect directly with skilled professionals in a relaxed, educational environment. Many attendees are open to new opportunities and actively networking.</p>

      <h4>Thought Leadership Platform</h4>
      <p>Position your organization as an innovation leader by supporting the region's premier open source event. Show your commitment to the tech community's growth.</p>

      <h4>Community Investment</h4>
      <p>Your sponsorship directly supports student access (we offer significant student discounts), speaker travel, and keeping the conference affordable for the entire community.</p>

      <h4>Year-Round Recognition</h4>
      <p>Sponsor recognition extends beyond the event day through our website, social media, and ongoing community engagement throughout the year.</p>

      <div class="highlight-box">
          <h4><i class="fa fa-regular fa-star"></i> Sweet 0x10 Special</h4>
          <p>This milestone year offers extra value with enhanced social media coverage, special anniversary content, and celebration activities that extend your brand reach.</p>
      </div>
  </div>

  <!-- Sponsorship Levels Page -->
  <div class="page">
      <div class="page-header">
          <h2>Sponsorship Levels</h2>
          <p>Choose Your Level of Community Impact</p>
      </div>

      <div class="sponsorship-levels">
          <div class="level platinum">
              <div class="level-header">
                  <div class="level-name"><i class="fa-solid fa-trophy"></i> Platinum Sponsor</div>
                  <div class="level-price">$5,000</div>
              </div>
              <ul class="benefits">
                  <li><i class="fa-solid fa-circle-dot"></i> Name and logo on conference t-shirt (220+ distributed)</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Logo on the website</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Premium logo placement on all conference materials</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Company info posted in high-traffic areas</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Social media spotlight campaign (pre, during, post event)</li>
                  <li><i class="fa-solid fa-circle-dot"></i> 10 complimentary conference tickets</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Networking opportunities with attendees</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Support local tech education and growth</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Inclusion in thank you communications</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Access to conference attendee statistics</li>
              </ul>
          </div>

          <div class="level gold">
              <div class="level-header">
                  <div class="level-name"><i class="fa-solid fa-medal"></i> Gold Sponsor</div>
                  <div class="level-price">$2,000</div>
              </div>
              <ul class="benefits">
                  <li><i class="fa-solid fa-circle-dot"></i> Name and logo on conference t-shirt</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Logo on the website</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Logo placement on conference materials and signage</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Company info posted in high-traffic areas</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Social media mentions throughout campaign</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Recognition during opening and closing ceremonies</li>
                  <li><i class="fa-solid fa-circle-dot"></i> 4 complimentary conference tickets</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Inclusion in thank you communications</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Access to conference attendee statistics</li>
              </ul>
          </div>

          <div class="level community">
              <div class="level-header">
                  <div class="level-name"><i class="fa-solid fa-medal"></i> Silver Sponsor</div>
                  <div class="level-price">$1,000</div>
              </div>
              <ul class="benefits">
                  <li><i class="fa-solid fa-circle-dot"></i> Large name on conference t-shirt</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Logo on the website</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Logo placement on conference materials and signage</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Social media mentions throughout campaign</li>
                  <li><i class="fa-solid fa-circle-dot"></i> 2 complimentary conference tickets</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Networking opportunities with attendees</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Support local tech education and growth</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Access to conference attendee statistics</li>
              </ul>
          </div>

          <div class="level other">
              <div class="level-header">
                  <div class="level-name"><i class="fa-solid fa-people-group"></i> Community Partner</div>
                  <div class="level-price">$500</div>
              </div>
              <ul class="benefits">
                  <li><i class="fa-solid fa-circle-dot"></i> Small name on conference t-shirt</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Logo on the website</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Social media thank you posts</li>
                  <li><i class="fa-solid fa-circle-dot"></i> 1 complimentary conference tickets</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Networking opportunities with attendees</li>
                  <li><i class="fa-solid fa-circle-dot"></i> Support local tech education and growth</li>
              </ul>
          </div>
      </div>
  </div>

  <!-- Call to Action Page -->
  <div class="page">
      <div class="page-header">
          <h2>Join Our Sweet 0x10 Celebration</h2>
          <p>Let's Make This Our Best Year Yet</p>
      </div>

      <h3>Ready to Sponsor?</h3>
      <p>We're excited to partner with organizations that share our passion for open source technology and community building. Your sponsorship doesn't just support an event—it invests in the future of Central Pennsylvania's technology ecosystem.</p>

      <div class="highlight-box">
          <h4><i class="fa-solid fa-bolt-lightning"></i> Early Bird Benefits</h4>
          <p>Sponsors who commit by <strong>January 15, 2026</strong> receive enhanced social media promotion, priority placement in all materials, and special recognition as "Founding Sweet 0x10 Sponsors."</p>
      </div>

      <h3>Important Dates</h3>
      <p><strong>January 15, 2026:</strong> Early bird sponsor deadline<br>
      <strong>March 1, 2026:</strong> Final sponsor commitment deadline<br>
      <strong>March 15, 2026:</strong> All sponsor materials due<br>
      <strong>March 28, 2026:</strong> Conference day!</p>

      <h3>Payment Options</h3>
      <p>We accept payments via check, ACH transfer, or credit card. Payment plans available for larger sponsorships. All sponsorships are tax-deductible as business expenses.</p>

      <div class="contact-section">
          <h3>Let's Start the Conversation</h3>
          <p>Ready to be part of something special? Have questions about custom packages? Want to brainstorm unique ways to engage with our community?</p>
          
          <div class="contact-info">
              <p><strong>Email:</strong> <a href="mailto:sponsor@localareanetworks.org">sponsor@localareanetworks.org</a></p>
          </div>
          
          <p style="margin-top: 30px; font-style: italic;">
              "Thank you for considering sponsorship of CPOSC Sweet 0x10. Together, we're not just hosting a conference—we're building the future of technology in Central Pennsylvania, one bit at a time."
          </p>
      </div>

      <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 2px solid #11998E;">
          <p style="font-size: 1.2rem; color: #2D1B69; font-weight: 600;">
              <i class="fa-solid fa-star"></i> CPOSC Sweet 0x10 • March 28th, 2026 • Lancaster, PA <i class="fa-solid fa-star"></i>
          </p>
          <p style="color: #666; margin-top: 10px;">
              16 years of open source excellence • Celebrating our Sweet Sixteenth!
          </p>
      </div>
  </div>
  </div>
</template>

<style lang="scss" scoped>
.prospectus-download {
    position: fixed;
    top: 10px;
    right: 20px;
    background: linear-gradient(45deg, #2D1B69, #11998E);
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    z-index: 1000;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: transform 0.3s ease;
}
h1, h2, h3, h4, a, p {
  font-family: "Lexend", sans-serif;
}
.logo {
  height: 350px;
  width: 350px;
}

.document {
            max-width: 8.5in;
            margin: 0 auto;
            background: white;
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
/* Cover Page */
        .cover-page {
            height: 11in;
            background: linear-gradient(135deg, #2D1B69, #11998E);
            // background: linear-gradient(135deg, #2D1B69 0%, #11998E 50%, #7DD3FC 100%);
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            position: relative;
            overflow: hidden;
            page-break-after: always;
        }

        .cover-content {
            position: relative;
            z-index: 1;
        }

        .cover-page h1 {
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: 1rem;
            text-shadow: 0 0 30px rgba(255,255,255,0.3);
        }

        .cover-page .subtitle {
            font-size: 2rem;
            margin-bottom: 2rem;
            font-weight: 300;
            opacity: 0.9;
        }

        .cover-page .tagline {
            font-size: 1.5rem;
            margin-bottom: 3rem;
            font-style: italic;
            opacity: 0.8;
        }

        .cover-stats {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 2rem;
            margin-top: 3rem;
            width: 100%;
        }

        .stat {
            text-align: center;
        }

        .stat-number {
            font-size: 3rem;
            font-weight: 700;
            display: block;
        }

        .stat-label {
            font-size: 1rem;
            opacity: 0.9;
        }

        /* Page Styles */
        .page {
            padding: 20px 50px;
            min-height: 11in;
            page-break-after: always;
        }

        .page:last-child {
            page-break-after: auto;
        }

        .page-header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 20px;
            border-bottom: 3px solid #11998E;
        }

        .page-header h2 {
            font-size: 2.5rem;
            background: linear-gradient(45deg, #2D1B69, #11998E);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 10px;
        }

        .page-header p {
            font-size: 1.2rem;
            color: #666;
        }

        /* Content Styles */
        h3 {
            font-size: 1.8rem;
            color: #2D1B69;
            margin: 30px 0 15px 0;
        }

        h4 {
            font-size: 1.4rem;
            color: #11998E;
            margin: 25px 0 10px 0;
        }

        p {
            margin-bottom: 15px;
            font-size: 1rem;
            line-height: 1.7;
        }

        .highlight-box {
            background: linear-gradient(135deg, rgba(125, 211, 252, 0.1), rgba(167, 139, 250, 0.1));
            border: 2px solid rgba(125, 211, 252, 0.3);
            border-radius: 10px;
            padding: 25px;
            margin: 25px 0;

            li {
              list-style-type: none;
            }
        }

        .highlight-box h4 {
            margin-top: 0;
            color: #2D1B69;
        }

        /* Sponsorship Levels */
        .sponsorship-levels {
            display: grid;
            gap: 30px;
            margin: 30px 0;
        }

        .level {
            border: 3px solid;
            border-radius: 15px;
            padding: 30px;
            background: white;
        }

        .level.platinum {
            border-color: #2D1B69;
            background: linear-gradient(135deg, rgba(167, 139, 250, 0.05), rgba(125, 211, 252, 0.05));


            i {
              color: #2D1B69;
            }
        }

        .level.community {
            border-color: #11998E;
            background: linear-gradient(135deg, rgba(17, 153, 142, 0.05), rgba(125, 211, 252, 0.05));

            i {
              color: #11998E;
            }
        }

        .level.gold {
            border-color: #205c7c;
            background: linear-gradient(135deg, rgba(32, 92, 124, 0.05), rgba(32, 92, 124, 0.05));

            i {
              color: #205c7c;
            }
        }

        .level-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 2px solid currentColor;
        }

        .level-name {
            font-size: 2rem;
            font-weight: 700;
        }

        .level-price {
            font-size: 2.5rem;
            font-weight: 700;
        }

        .level.platinum .level-name,
        .level.platinum .level-price {
            color: #2D1B69;
        }

        .level.gold .level-name,
        .level.gold .level-price {
          color: #205c7c;
           
        }

        .level.community .level-name,
        .level.community .level-price {
             color: #11998E;
        }

        .benefits {
            list-style: none;
            padding: 0;
        }

        .benefits li {
            margin: 12px 0;
            position: relative;

            i {
              margin-right: 0.5rem;
            }
        }

        /* Stats Grid */
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            margin: 30px 0;
        }

        .stat-card {
            background: linear-gradient(135deg, rgba(125, 211, 252, 0.1), rgba(167, 139, 250, 0.1));
            border-radius: 15px;
            padding: 25px;
            text-align: center;
        }

        .stat-card h4 {
            font-size: 3rem;
            margin: 0 0 10px 0;
            background: linear-gradient(45deg, #2D1B69, #11998E);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .stat-card p {
            margin: 0;
            color: #666;
            font-weight: 600;
        }

        /* Contact Section */
        .contact-section {
            background: linear-gradient(135deg, #2D1B69, #11998E);
            color: white;
            border-radius: 15px;
            padding: 40px;
            text-align: center;
            margin: 40px 0;
        }

        .contact-section h3 {
            color: white;
            margin-top: 0;
        }

        .contact-info {
            font-size: 1.2rem;
            margin: 20px 0;
        }

        .contact-info a {
            color: #7DD3FC;
            text-decoration: none;
        }

        .contact-info a:hover {
            text-decoration: underline;
        }

        /* Print Styles */
        @media print {
            body {
                background: white;
            }
            
            .document {
                box-shadow: none;
                max-width: none;
            }
            
            .page {
                page-break-after: always;
            }
            
            .page:last-child {
                page-break-after: avoid;
            }
        }

        /* Responsive */
        @media (max-width: 768px) {
            .document {
                margin: 0;
            }
            
            .page {
                padding: 40px 30px;
            }
            
            .cover-page h1 {
                font-size: 2.5rem;
            }
            
            .cover-page .subtitle {
                font-size: 1.5rem;
            }
            
            .cover-stats {
                grid-template-columns: 1fr;
                gap: 1rem;
            }
            
            .stats-grid {
                grid-template-columns: 1fr;
            }
        }
</style>
