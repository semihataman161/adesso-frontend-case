import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    component: () => import(/* webpackChunkName: "home" */ "./pages/Home.vue"),
  },
  {
    path: "/units",
    component: () =>
      import(/* webpackChunkName: "units" */ "./pages/Units.vue"),
  },
  {
    path: "/unit-detail",
    component: () =>
      import(/* webpackChunkName: "unit-details" */ "./pages/UnitDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router
