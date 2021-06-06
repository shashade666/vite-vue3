import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("/@/views/Home.vue"),
  },
  {
    path: "/setting",
    name: "Setting",
    component: () => import("../components/Setting.vue"),
  },
];

export default createRouter({
  history: createWebHistory("/start-vue3/"),
  routes,
});