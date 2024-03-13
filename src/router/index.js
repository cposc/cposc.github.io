import { createRouter, createWebHistory } from "vue-router";
import { useMenuStore } from '../store/menuStore';

import HomeView2023 from "../views/2023/HomeView.vue";
import HomeView2024 from "../views/2024/HomeView.vue";

import ScheduleView2023 from "../views/2023/ScheduleView.vue";
import ScheduleView2024 from "../views/2024/ScheduleView.vue";

import VolunteerView2023 from "../views/2023/VolunteerView.vue";
import VolunteerView2024 from "../views/2024/VolunteerView.vue";

import SpeakersView2023 from "../views/2023/SpeakersView.vue";
import SpeakersView2024 from "../views/2024/SpeakersView.vue";

import LogisticsView2023 from "../views/2023/LogisticsView.vue";
import LogisticsView2024 from "../views/2024/LogisticsView.vue";

// same pages every year
import CodeOfConduct from "../views/CodeOfConduct.vue";
import PageNotFound from "../views/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView2024,
    },
    {
      path: "/speakers",
      name: "speakers",
      component: SpeakersView2024,
    },
    {
      path: "/logistics",
      name: "logistics",
      component: LogisticsView2024,
    },
    {
      path: "/volunteers",
      name: "volunteers",
      component: VolunteerView2024,
    },
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
    {
      path: "/code-of-conduct",
      name: "code-of-conduct",
      component: CodeOfConduct,
    },
    {
      path: "/schedule",
      name: "schedule",
      component: ScheduleView2024,
    },
    { path: "/:pathMatch(.*)*", component: PageNotFound }
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/AboutView.vue"),
    // },
  ],
});


router.beforeEach(() => {
  const menuStore = useMenuStore();
  if (menuStore.isOpen) {
    menuStore.closeMenu();
  }
});

export default router;
