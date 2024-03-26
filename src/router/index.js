import { createRouter, createWebHistory } from "vue-router";
import Start from "../App.vue";

const routes = [
  {
    path: "/",
    name: "Start",
    component: Start,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
