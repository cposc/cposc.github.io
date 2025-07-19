<script setup>
import TopNav from "../sitecontainer/Nav/TopNav.vue";
</script>

<template>
  <TopNav />
  <div class="logistics">
    <h1>CPOSC Sweet 0x10 Logistics</h1>
    <section>
      <h2 id="travel">Parking</h2>
      <p>Nearby parking is available at the <b>Prince Street Garage</b> at the corner of N Prince and W Orange Street, just a half block from the venue. The Penn Square Garage is also within walking distance! In the past, parking at the Prince Street Garage was reimbursed as a benefit to having this event at the Ware Center. Unfortunately, <b>our event space no longer offers parking ticket reimbursement</b>.</p>
      <p>The Lancaster Amtrak station is just over a mile from the Ware Center, at 53 McGovern Avenue. Trains are available throughout the day from many destinations including 30th Street Station in Philadelphia.</p>
    </section>
    <section>
      <h2 id="hotels">Hotel Options</h2>
      <p>There are several hotels in Lancaster at different proximities to the venue.</p>
      <ul>
        <li><a href="https://www.marriott.com/en-us/hotels/lnsmc-lancaster-marriott-at-penn-square/overview/" target="_blank">Lancaster Marriott at Penn Square</a>: A few blocks from the Ware Center, in the center square of downtown</li>
        <li><a href="https://www.ihg.com/holidayinn/hotels/us/en/lancaster/lnsch/hoteldetail" target="_blank">Holiday Inn Lancaster</a>: A few blocks from the Ware Center, in the newly renovated Binns Park</li>
        <li><a href="https://www.lancasterartshotel.com/" target="_blank">Lancaster Arts Hotel</a>: Approximately a mile from the Ware Center, near Franklin & Marshall College</li>
        <li><a href="https://www.corkfactoryhotel.com/" target="_blank">Cork Factory Hotel</a>: Approximately a mile and a half from the Ware Center, on the east side of downtown and near Route 30</li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.logistics {
  padding-top: 5rem;
}
h1 {
  color: black;
}

// CPOSC Sweet 0x10 Travel Section Styles
// Color palette from the logo
$primary-purple: #2D1B69;
$secondary-teal: #11998E;
$light-blue: #7DD3FC;
$light-purple: #A78BFA;
$pink-accent: #FB7185;
$text-dark: #333;
$text-medium: #555;
$text-light: #666;
$white: #ffffff;
$light-gray: #f0f0f0;

// Mixins
@mixin gradient-text($colors...) {
  background: linear-gradient(45deg, $colors);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@mixin card-hover-effect {
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }
}

@mixin stellar-gradient($opacity: 0.1) {
  background: linear-gradient(135deg, 
    rgba($light-blue, $opacity), 
    rgba($light-purple, $opacity)
  );
}

// Main section styles
.section {
  padding: 80px 0;
  border-bottom: 1px solid $light-gray;
  position: relative;
  background: $white;
  
  &:last-child {
    border-bottom: none;
  }
  
  // Optional: Add subtle space-themed background
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(2px 2px at 20px 30px, rgba($light-purple, 0.1), transparent),
      radial-gradient(2px 2px at 40px 70px, rgba($light-blue, 0.1), transparent),
      radial-gradient(1px 1px at 90px 40px, rgba($pink-accent, 0.1), transparent);
    background-repeat: repeat;
    background-size: 200px 100px;
    pointer-events: none;
    opacity: 0.3;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  z-index: 1;
}

// Section heading
.section h2 {
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
  @include gradient-text($primary-purple, $secondary-teal);
  
  // Add subtle glow effect
  text-shadow: 0 0 20px rgba($secondary-teal, 0.2);
  
  // Responsive sizing
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}

// Grid layout
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 2rem;
  }
}

// Card styles
.card {
  background: $white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid $light-gray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 250px;
  position: relative;
  overflow: hidden;
  @include card-hover-effect;
  
  // Subtle gradient overlay
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @include stellar-gradient(0.03);
    pointer-events: none;
    border-radius: 15px;
  }
  
  // Card content wrapper
  > div {
    position: relative;
    z-index: 1;
    flex-grow: 1;
  }
  
  // Card heading
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
    color: $primary-purple;
    
    // Add subtle sparkle effect
    &::after {
      content: '✨';
      margin-left: 8px;
      font-size: 0.8em;
      opacity: 0.6;
    }
  }
  
  // Card text
  p {
    color: $text-light;
    margin-bottom: 1rem;
    line-height: 1.6;
    font-size: 1rem;
    
    // Bold text styling
    b {
      color: $text-dark;
      font-weight: 600;
    }
    
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  
  // Enhanced hover state
  &:hover {
    &::before {
      @include stellar-gradient(0.08);
    }
    
    h3 {
      color: $secondary-teal;
      
      &::after {
        opacity: 1;
        transform: scale(1.2);
        transition: all 0.3s ease;
      }
    }
  }
}

// Card link styles
.card-link {
  color: $secondary-teal;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 20px;
  position: relative;
  z-index: 2;
  display: inline-block;
  transition: all 0.3s ease;
  
  // Animated underline
  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, $secondary-teal, $light-blue);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: $primary-purple;
    transform: translateX(5px);
    
    &::after {
      width: 100%;
    }
  }
  
  // Arrow animation
  &:hover {
    &::before {
      content: '🚀';
      margin-right: 5px;
      animation: rocket-bounce 0.6s ease;
    }
  }
}

// Rocket animation
@keyframes rocket-bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
}

// Enhanced focus states for accessibility
.card-link:focus {
  outline: 2px solid $light-blue;
  outline-offset: 2px;
  border-radius: 4px;
}

// Responsive adjustments
@media (max-width: 768px) {
  .section {
    padding: 50px 0;
  }
  
  .card {
    padding: 25px;
    min-height: 200px;
    
    h3 {
      font-size: 1.3rem;
    }
    
    p {
      font-size: 0.95rem;
    }
  }
}

// Optional: Add subtle animation on scroll
.card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  
  &:nth-child(1) { animation-delay: 0.1s; }
  &:nth-child(2) { animation-delay: 0.2s; }
  &:nth-child(3) { animation-delay: 0.3s; }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// Special styling for travel-specific content
#travel {
  .card {
    // Add location-specific icons
    &:nth-child(1) h3::before {
      content: '🏢 ';
      margin-right: 8px;
    }
    
    &:nth-child(2) h3::before {
      content: '🏨 ';
      margin-right: 8px;
    }
    
    &:nth-child(3) h3::before {
      content: '🚗 ';
      margin-right: 8px;
    }
  }
}

// Additional enhancement: Add subtle glow on hover
.card:hover {
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.15),
    0 0 30px rgba($secondary-teal, 0.1);
}
</style>
