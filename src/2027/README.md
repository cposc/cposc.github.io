# CPOSC 2027 Setup Guide

Welcome to the Central Pennsylvania Open Source Conference 2027 site! This README explains how the 2027 site is structured and how to maintain it.

## Quick Overview

The CPOSC website is now set up with **2027 as the current/default year**. The site maintains historical versions of previous years (2023-2026) which remain accessible at their respective year routes.

## File Structure

```
src/2027/
├── home/
│   ├── HeaderBanner/
│   │   └── HeaderBanner.vue       # Hero banner with animated stars
│   ├── highlights/
│   │   ├── ScheduleHighlight.vue
│   │   ├── SponsorHighlight.vue
│   │   ├── TravelHighlight.vue
│   │   └── VolunteerHighlight.vue
│   ├── AboutUs.vue                # About section with stats
│   └── HomeView.vue               # Main home page component
├── schedule/
│   └── Schedule.vue               # Schedule page (CSV-based)
├── speakers/
│   ├── SpeakerBlock.vue          # Individual speaker card
│   └── Speakers.vue              # Speakers listing page
├── sponsors/
│   └── SponsorProspectus.vue     # Sponsor prospectus & opportunities
├── travel/
│   └── TravelOptions.vue         # Logistics, hotels, parking, travel
└── sitecontainer/
    ├── Nav/
    │   ├── TopNav.vue            # Top navigation with logo
    │   └── BottomNav.vue         # Footer with archives links
    ├── AnnouncementBanner/
    │   └── AnnouncementBanner.vue # Top banner for announcements
    └── SiteContainer2027.vue     # Main layout wrapper for 2027
```

## Routing

2027 routes are defined in `src/router/index.js`:

- `/` → Home (2027)
- `/2027/schedule` → Schedule page
- `/2027/speakers` → Speakers page
- `/sponsors` or `/2027/sponsors` → Sponsor prospectus
- `/logistics` or `/2027/travel` → Travel & accommodation

Previous years are accessed at:
- `/2026` → 2026 event home
- `/2025` → 2025 event home
- `/2024` → 2024 event home
- `/2023` → 2023 event home

## Key Components to Update

### 1. **HeaderBanner (src/2027/home/HeaderBanner/HeaderBanner.vue)**
- Contains the hero section with animated background
- Update the text in `<h1>` and `<p>` tags
- Update button text and link in `goGetTickets()` function
- The gallery carousel pulls images from `/src/2026/assets/carousel/`

### 2. **AboutUs (src/2027/home/AboutUs.vue)**
- Update the "About CPOSC" section with year-specific information
- Update the stat numbers (Years Strong, Attendees, Speakers)

### 3. **Highlight Components (src/2027/home/highlights/)**
- `SponsorHighlight.vue` - Update sponsor section text and add sponsor logos
- `ScheduleHighlight.vue` - Update with talk titles and speaker names
- `TravelHighlight.vue` - Update venue information and travel details
- `VolunteerHighlight.vue` - Update volunteer form links

### 4. **Schedule Page (src/2027/schedule/Schedule.vue)**
- Update EventBrite ticket URL in `goGetTickets()` function
- When schedule CSV is available, create `/public/schedule2027.csv` with the event schedule

### 5. **Speakers Page (src/2027/speakers/Speakers.vue)**
- Currently shows a placeholder for "TBA Speaker 1"
- Replace with actual speaker data when available
- Speaker images should be in `/src/2026/assets/speakers/` (can use 2026 fallback or create 2027 assets)

### 6. **Sponsors Page (src/2027/sponsors/SponsorProspectus.vue)**
- Update sponsorship prospectus with year-specific details
- Add sponsor logos and links

### 7. **Travel/Logistics (src/2027/travel/TravelOptions.vue)**
- Update venue information once location is confirmed
- Update hotel options and parking information

### 8. **Navigation (src/2027/sitecontainer/Nav/)**
- `TopNav.vue` - Update logo source to `/src/2027/assets/logo.png` when available
- `BottomNav.vue` - Footer links to previous years are already configured

## Announcement Banner

The `AnnouncementBanner.vue` component can display notifications by setting the `announcementType` prop in `SiteContainer2027.vue`:

```vue
<AnnouncementBanner :announcementType="'sponsors'" />  <!-- Show sponsors call -->
<AnnouncementBanner :announcementType="'schedule'" />  <!-- Show schedule -->
<AnnouncementBanner :announcementType="'speakers'" />  <!-- Show speakers call -->
```

## Assets

- Place 2027-specific images in `src/2027/assets/`
- Currently using 2026 placeholder images for carousel
- Update references as 2027 branding is finalized

## App.vue Template Routing

The `App.vue` file routes views based on the current route name:

```javascript
// 2027 (current year) uses SiteContainer2027
if (route.name includes 'home' || 'sponsors2027' || 'schedule2027' || 'logistics2027' || 'speakers2027')
  → Use SiteContainer2027

// 2026 uses SiteContainer2026
if (route.name includes 'home2026' || 'sponsors2026' || 'schedule2026' || 'logistics2026' || 'speakers2026')
  → Use SiteContainer2026

// Previous years use legacy layouts
if (route.name includes '2025', '2024', '2023')
  → Use year-specific navigation components
```

## Maintenance Checklist for 2027

- [ ] Create `src/2027/assets/` folder with 2027 branding/logo
- [ ] Update HeaderBanner copy and images
- [ ] Update AboutUs stats
- [ ] Finalize event date and venue, update throughout
- [ ] Create EventBrite ticket link and update in HeaderBanner and Schedule pages
- [ ] Add 2027 sponsors to SponsorHighlight.vue
- [ ] Create `public/schedule2027.csv` with event schedule
- [ ] Add speaker data to Speakers.vue
- [ ] Update travel/logistics information in TravelOptions.vue
- [ ] Create sponsor prospectus PDF and reference in SponsorProspectus.vue
- [ ] Test all routes to ensure previous years still work
- [ ] Update footer links if needed

## Future Year Setup

When setting up 2028 (or future years):

1. Create `src/2028/` with the same folder structure
2. Copy components from `src/2027/` and update year references
3. Add new imports and routes to `src/router/index.js`
4. Update `App.vue` template with new year conditionals
5. Update 2027 footer to link to 2028 as the new current year
6. Test all routes to ensure backward compatibility

## Common Issues

### "Component name should always be multi-word"
- Files like `Speakers.vue` and `Schedule.vue` should ideally be `SpeakersView.vue` and `ScheduleView.vue` to follow Vue conventions

### Missing Images
- If speaker images are not found, the fallback is `/src/2026/assets/speakers/x.jpg`
- Create 2027-specific speaker image files as needed

### Routing Issues
- Always ensure year-specific imports are added to `src/router/index.js`
- Verify that `App.vue` has the route name conditions updated
- Test navigation between years to ensure nothing breaks

## Testing Routes

Quick test checklist:
- [ ] `/` loads 2027 home
- [ ] `/2027/schedule` loads schedule
- [ ] `/2027/speakers` loads speakers
- [ ] `/sponsors` loads sponsor page
- [ ] `/2026` loads 2026 home (previous year still works)
- [ ] `/2025`, `/2024`, `/2023` still work
- [ ] Footer links all work correctly

Happy maintaining! 🚀
