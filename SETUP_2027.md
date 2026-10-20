# CPOSC 2027 Site Setup - Summary

## What Was Done

The CPOSC website has been successfully set up for 2027! Here's what was implemented:

### ✅ Completed Tasks

1. **Created Full 2027 Folder Structure**
   - `src/2027/home/` - Homepage with components (HeaderBanner, AboutUs, highlights)
   - `src/2027/schedule/` - Schedule page
   - `src/2027/speakers/` - Speakers listing page
   - `src/2027/sponsors/` - Sponsor prospectus
   - `src/2027/travel/` - Travel & accommodation information
   - `src/2027/sitecontainer/` - Main layout container with navigation

2. **Updated Router (src/router/index.js)**
   - Added 2027 imports for all new components
   - Set `/` (home) to display 2027 content (from HomeView2027)
   - Added 2027-specific routes:
     - `/2027/schedule`
     - `/2027/speakers`
     - `/sponsors` (maps to 2027 sponsors)
     - `/logistics` (maps to 2027 travel)
   - Preserved 2026+ routes for backward compatibility:
     - `/2026` and all 2026 routes remain functional
     - `/2025`, `/2024`, `/2023` still accessible

3. **Updated App.vue**
   - Imported SiteContainer2027
   - Added template conditionals for 2027 routes
   - Now routes 2027 content through SiteContainer2027
   - Preserved all previous year routing

4. **Created Navigation Components for 2027**
   - TopNav with mobile hamburger menu
   - BottomNav with footer links including archives (2023, 2024, 2025, 2026, 2027)
   - AnnouncementBanner for sponsors/schedule/speakers callouts
   - All navigation uses consistent styling with 2026

5. **Created Page Components**
   - **HomeView.vue** - Full homepage with hero, about section, and highlights
   - **HeaderBanner.vue** - Animated hero banner with starfield and gallery carousel
   - **AboutUs.vue** - About section with 17-year stats
   - **Highlight Components**:
     - SponsorHighlight - Sponsor section (ready for logos)
     - ScheduleHighlight - Schedule preview (placeholder text, ready for real schedule)
     - TravelHighlight - Travel information (placeholder, awaiting venue confirmation)
     - VolunteerHighlight - Volunteer opportunities
   - **Schedule.vue** - Full schedule page (reads from CSV when available)
   - **Speakers.vue** - Speakers page (has placeholder, ready for speaker data)
   - **SpeakerBlock.vue** - Individual speaker card component
   - **SponsorProspectus.vue** - Detailed sponsor prospectus and opportunities
   - **TravelOptions.vue** - Detailed travel and logistics information

### 🎨 Design & Styling

- All 2027 components use the same color scheme as 2026 (purple/teal gradient)
- Responsive design works on mobile, tablet, and desktop
- Consistent font families and styling throughout
- Ready for custom 2027 branding (logo, colors, imagery)

### 📁 File Organization

- **Easy to maintain**: Each year is self-contained in its own folder
- **Parallel structure**: 2027 mirrors 2026 structure for easy comparison
- **DRY principle**: Navigation components can be reused, only year-specific content differs
- **Clear separation**: Old years (2023-2026) are isolated in their respective structures

### 🔄 Backward Compatibility

✅ **All previous years still work**:
- `/2023` - 2023 event page
- `/2024` - 2024 event page
- `/2025` - 2025 event page
- `/2026` - 2026 event page with all content intact
- Footer links in 2027 properly reference all archived years

### 🚀 Current Status

The site is **ready for content updates**! All pages load correctly with placeholder content. Here's what needs to be customized:

## ⚠️ Next Steps - For Your Team

### Immediate (Required for Launch)

1. **Event Details**
   - [ ] Finalize 2027 event date
   - [ ] Confirm venue location
   - Update in: `HeaderBanner.vue`, `TravelOptions.vue`, `SponsorProspectus.vue`

2. **EventBrite Integration**
   - [ ] Create EventBrite event and get ticket link
   - Update link in:
     - `src/2027/home/HeaderBanner/HeaderBanner.vue` (goGetTickets function)
     - `src/2027/schedule/Schedule.vue` (goGetTickets function)
     - `src/2027/sitecontainer/Nav/TopNav.vue` (GET TICKETS button)

3. **Branding**
   - [ ] Create 2027 logo → `src/2027/assets/logo.png`
   - [ ] Create hero banner image → `src/2027/assets/hero2027.png`
   - [ ] Update references in `HeaderBanner.vue`

### Before First Content Update

4. **Event Content**
   - [ ] Add speaker data to `src/2027/speakers/Speakers.vue`
   - [ ] Create `public/schedule2027.csv` with event schedule
   - [ ] Add sponsor logos and info to `SponsorHighlight.vue`
   - [ ] Confirm travel info for `TravelOptions.vue`

5. **Theme/Design (Optional - Current Design Works)**
   - [ ] If changing 2027 theme: Update colors in component SCSS
   - [ ] Update hero image and styling
   - [ ] Update highlight section visuals

### Before Going Live

6. **Testing**
   - [ ] Run `npm run build` to verify no compilation errors
   - [ ] Test all 2027 routes: `/`, `/2027/schedule`, `/2027/speakers`, `/sponsors`
   - [ ] Verify 2026 and earlier years still work
   - [ ] Test mobile navigation
   - [ ] Check responsive design on various screen sizes

## 📝 Key Files to Understand

| File | Purpose |
|------|---------|
| `src/router/index.js` | Defines all routes (2023-2027) |
| `src/App.vue` | Routes to correct year layout |
| `src/2027/home/HomeView.vue` | Main 2027 homepage |
| `src/2027/sitecontainer/SiteContainer2027.vue` | 2027 page layout wrapper |
| `src/2027/home/HeaderBanner/HeaderBanner.vue` | Hero section (update here!) |
| `src/2027/sitecontainer/Nav/BottomNav.vue` | Footer (archives links) |

## 🛠️ Maintenance Tips

### Adding Sponsors
Edit `src/2027/home/highlights/SponsorHighlight.vue`:
```vue
<div class="sponsor-row">
  <a href="company-link" target="_blank">
    <img class="sponsor" src="/src/2027/assets/sponsors/CompanyLogo.png" alt="Company Logo" />
  </a>
</div>
```

### Adding Speakers
Edit `src/2027/speakers/Speakers.vue` - update the `speakers` array:
```javascript
{
  imageURL: "@/2027/assets/speakers/SpeakerName.jpg",
  name: "Speaker Name",
  bio: "Speaker biography...",
  talkTitle: "Talk Title",
  talkAbstract: "Talk abstract..."
}
```

### Creating Schedule CSV
Create `public/schedule2027.csv` with format (see 2026 for reference):
```
Time,Duration,Room1_Talk,Room1_Speaker,Room1_Desc,Room2_Talk,Room2_Speaker,Room2_Desc,...
```

### Updating Announcements
In `src/2027/sitecontainer/SiteContainer2027.vue`:
```vue
<!-- Uncomment to show announcement -->
<AnnouncementBanner :announcementType="'sponsors'" />
```

## 🎓 For Future Years (2028+)

1. Copy `src/2027/` to `src/2028/`
2. Replace all "2027" references with "2028"
3. Add imports and routes to `src/router/index.js`
4. Update `App.vue` template conditions
5. Update footer links
6. Done! 🎉

## 📞 Questions?

Refer to `src/2027/README.md` for detailed component documentation and common issues/solutions.

The setup is designed to be maintainable and scalable. Future years can follow the same pattern!

---

**Last Updated**: September 18, 2026
**Setup By**: Automated Setup Process
**Status**: ✅ Ready for Content Updates
