import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";
import SkillView from "../views/SkillView.vue";
import ContactView from "../views/ContactView.vue";
import NotfoundView from "../views/NotfoundView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/skill",
    name: "skill",
    component: SkillView,
  },
  {
    path: "/project",
    name: "project",
    component: ProjectView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/:catchAll(.*)",
    component: NotfoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: "/portfolio/",
  routes,
});

export default router;
