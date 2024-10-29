import { describe, it, expect, beforeEach } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import HomePage from "@/pages/HomePage.vue";
import UnitsPage from "@/pages/UnitsPage.vue";
import UnitDetailPage from "@/pages/UnitDetailPage.vue";
import PageNotFound from "@/pages/PageNotFound.vue";
import router from "@/router";
import { createVuetify } from "vuetify";
import ResizeObserver from "resize-observer-polyfill";
import { createStore } from "vuex";

const vuetify = createVuetify();
global.ResizeObserver = ResizeObserver;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let store: any;

describe("Router", () => {
  beforeEach(async () => {
    store = createStore({
      getters: {
        "units/filteredTableData": () => [
          {
            id: 1,
            name: "John Doe",
            age: 30,
            cost: { amount: 100, currency: "USD" },
          },
        ],
        "units/allTableDataById": () => (id: number) => {
          return id === 1
            ? {
                id: 1,
                name: "Test Unit",
                description: "This is a test unit.",
                age: 5,
                cost: { Wood: 100, Food: 50, Gold: 25 },
                build_time: 30,
                reload_time: 5,
                hit_points: 100,
                attack: 10,
                accuracy: 80,
              }
            : null;
        },
      },
    });

    router.push("/");
    await router.isReady();
  });

  it("redirects from / to /home", async () => {
    router.push("/");
    await router.isReady();
    expect(router.currentRoute.value.path).toBe("/home");
  });

  it("renders HomePage on /home", async () => {
    router.push("/home");
    await router.isReady();

    const wrapper = mount(HomePage, {
      global: {
        plugins: [router, vuetify, store],
      },
    });

    expect(wrapper.exists()).toBe(true);
  });

  it("renders UnitsPage on /units", async () => {
    router.push("/units");
    await router.isReady();

    const wrapper = mount(UnitsPage, {
      global: {
        plugins: [router, vuetify, store],
      },
    });

    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it("renders UnitDetailPage on /units/:id", async () => {
    const unitId = 1;
    router.push(`/units/${unitId}`);
    await router.isReady();

    const wrapper = mount(UnitDetailPage, {
      global: {
        plugins: [router, vuetify, store],
      },
      props: {
        id: unitId,
      },
    });

    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });

  it("renders PageNotFound on invalid route", async () => {
    router.push("/invalid-route");
    await router.isReady();

    const wrapper = mount(PageNotFound, {
      global: {
        plugins: [router, vuetify, store],
      },
    });

    await flushPromises();
    expect(wrapper.exists()).toBe(true);
  });
});
