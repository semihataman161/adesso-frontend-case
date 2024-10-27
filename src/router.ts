import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    component: () => import(/* webpackChunkName: "home" */ "./pages/HomePage.vue"),
  },
  {
    path: "/units",
    component: () =>
      import(/* webpackChunkName: "units" */ "./pages/UnitsPage.vue"),
  },
  {
    path: "/unit-detail",
    component: () =>
      import(/* webpackChunkName: "unit-details" */ "./pages/UnitDetailPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
