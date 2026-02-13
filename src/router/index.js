import { createRouter, createWebHistory } from "vue-router";
import { useMenuStore } from "../store/menuStore";

import HomeView2026 from "../2026/home/HomeView.vue";
import LogisticsView2026 from "../2026/travel/TravelOptions.vue";
import SponsorsView2026 from "../2026/sponsors/SponsorProspectus.vue";
import ScheduleView2026 from "../2026/schedule/Schedule.vue";

import HomeView2025 from "../views/2025/HomeView.vue";
import ScheduleView2025 from "../views/2025/ScheduleView.vue";
import VolunteerView2025 from "../views/2025/VolunteerView.vue";
import SpeakersView2025 from "../views/2025/SpeakersView.vue";
import LogisticsView2025 from "../views/2025/LogisticsView.vue";
import SponsorView2025 from "../views/2025/SponsorsView.vue";

import HomeView2024 from "../views/2024/HomeView.vue";
import ScheduleView2024 from "../views/2024/ScheduleView.vue";
import VolunteerView2024 from "../views/2024/VolunteerView.vue";
import SpeakersView2024 from "../views/2024/SpeakersView.vue";
import LogisticsView2024 from "../views/2024/LogisticsView.vue";

import HomeView2023 from "../views/2023/HomeView.vue";
import ScheduleView2023 from "../views/2023/ScheduleView.vue";
import VolunteerView2023 from "../views/2023/VolunteerView.vue";
import SpeakersView2023 from "../views/2023/SpeakersView.vue";
import LogisticsView2023 from "../views/2023/LogisticsView.vue";

// same pages every year
import AboutNonprofit from "../views/AboutNonprofit.vue";
import CodeOfConduct from "../views/CodeOfConduct.vue";
import PageNotFound from "../views/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView2026,
    },
    {
      path: "/logistics",
      name: "logistics2026",
      component: LogisticsView2026,
    },
    {
      path: "/sponsors",
      name: "sponsors2026",
      component: SponsorsView2026,
    },
    {
      path: "/2026/schedule",
      name: "schedule2026",
      component: ScheduleView2026,
    },
    {
      path: "/code-of-conduct",
      name: "code-of-conduct",
      component: CodeOfConduct,
    },
    {
      path: "/about-nonprofit",
      name: "about-nonprofit",
      component: AboutNonprofit,
    },
    // 2026 pages
    // 2025 conference pages
    {
      path: "/2025",
      name: "home2025",
      component: HomeView2025,
    },
    {
      path: "/2025/speakers",
      name: "speakers2025",
      component: SpeakersView2025,
    },
    // {
    //   path: "/2025/logistics",
    //   name: "logistics2025",
    //   component: LogisticsView2025,
    // },
    {
      path: "/2025/schedule",
      name: "schedule2025",
      component: ScheduleView2025,
    },
    // {
    //   path: "/2025/volunteers",
    //   name: "volunteers2025",
    //   component: VolunteerView2025,
    // },
    {
      path: "/2025/sponsors",
      name: "sponsors2025",
      component: SponsorView2025,
    },
    // 2024 conference pages
    {
      path: "/2024",
      name: "home2024",
      component: HomeView2024,
    },
    {
      path: "/2024/speakers",
      name: "speakers2024",
      component: SpeakersView2024,
    },
    {
      path: "/2024/logistics",
      name: "logistics2024",
      component: LogisticsView2024,
    },
    {
      path: "/2024/schedule",
      name: "schedule2024",
      component: ScheduleView2024,
    },
    {
      path: "/2024/volunteers",
      name: "volunteers2024",
      component: VolunteerView2024,
    },
    // 2023 conference pages
    {
      path: "/2023",
      name: "2023",
      component: HomeView2023,
    },
    {
      path: "/2023/schedule",
      name: "schedule2023",
      component: ScheduleView2023,
    },
    {
      path: "/2023/volunteers",
      name: "volunteers2023",
      component: VolunteerView2023,
    },
    {
      path: "/2023/speakers",
      name: "speakers2023",
      component: SpeakersView2023,
    },
    {
      path: "/2023/logistics",
      name: "logistics2023",
      component: LogisticsView2023,
    },
    { path: "/:pathMatch(.*)*", component: PageNotFound },
  ],
});

router.beforeEach(() => {
  const menuStore = useMenuStore();
  if (menuStore.isOpen) {
    menuStore.closeMenu();
  }
});

export default router;
