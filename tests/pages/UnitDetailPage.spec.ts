import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";
import { createVuetify } from "vuetify";
import { describe, it, expect, beforeEach } from "vitest";
import { nextTick } from "vue";
import UnitDetailPage from "@/pages/UnitDetailPage.vue";
import UnitDetailDisplay from "@/components/unit-detail/UnitDetailDisplay.vue";

const vuetify = createVuetify();

describe("UnitDetailPage.vue", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let store: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let router: any;

  beforeEach(async () => {
    store = createStore({
      getters: {
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

    router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/unit/:id",
          component: UnitDetailPage,
        },
      ],
    });
  });

  it("renders unit details correctly when unit data is available", async () => {
    await router.push("/unit/1");
    await router.isReady();

    const wrapper = mount(UnitDetailPage, {
      global: {
        plugins: [store, router, vuetify],
      },
    });

    await nextTick();

    const unitDetailDisplay = wrapper.findComponent(UnitDetailDisplay);
    expect(unitDetailDisplay.exists()).toBe(true);

    const expectedUnitData = [
      { label: "ID", value: 1 },
      { label: "Name", value: "Test Unit" },
      { label: "Description", value: "This is a test unit." },
      { label: "Min. Required Age", value: 5 },
      { label: "Wood Cost", value: 100 },
      { label: "Food Cost", value: 50 },
      { label: "Gold Cost", value: 25 },
      { label: "Build Time", value: "30 seconds" },
      { label: "Reload Time", value: "5 seconds" },
      { label: "Hit Points", value: 100 },
      { label: "Attack", value: 10 },
      { label: "Accuracy", value: 80 },
    ];

    expect(unitDetailDisplay.props("unitData")).toEqual(expectedUnitData);
  });

  it("renders empty unit data when no unit is found", async () => {
    await router.push("/unit/999");
    await router.isReady();

    const wrapper = mount(UnitDetailPage, {
      global: {
        plugins: [store, router, vuetify],
      },
    });

    await nextTick();

    const unitDetailDisplay = wrapper.findComponent(UnitDetailDisplay);
    expect(unitDetailDisplay.exists()).toBe(true);
    expect(unitDetailDisplay.props("unitData")).toEqual([]);
  });
});
