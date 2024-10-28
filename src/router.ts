import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    component: () =>
      import(/* webpackChunkName: "home" */ "./pages/HomePage.vue"),
  },
  {
    path: "/units",
    component: () =>
      import(/* webpackChunkName: "units" */ "./pages/UnitsPage.vue"),
  },
  {
    path: "/units/:id",
    component: () =>
      import(
        /* webpackChunkName: "unit-details" */ "./pages/UnitDetailPage.vue"
      ),
  },
  {
    path: "/:notFound(.*)",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "./pages/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
