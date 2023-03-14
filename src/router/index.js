import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ScheduleView from "../views/ScheduleView.vue";
import VolunteerView from "../views/VolunteerView.vue";
import SpeakersView from "../views/SpeakersView.vue";
import LogisticsView from "../views/LogisticsView.vue";
import CodeOfConduct from "../views/CodeOfConduct.vue";
import PageNotFound from "../views/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/schedule",
      name: "schedule",
      component: ScheduleView,
    },
    {
      path: "/volunteers",
      name: "volunteers",
      component: VolunteerView,
    },
    {
      path: "/speakers",
      name: "speakers",
      component: SpeakersView,
    },
    {
      path: "/logistics",
      name: "logistics",
      component: LogisticsView,
    },
    {
      path: "/code-of-conduct",
      name: "code-of-conduct",
      component: CodeOfConduct,
    },
    { path: "/:pathMatch(.*)*", component: PageNotFound }
    // {
      // path: "/schedule",
      // name: "schedule",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
