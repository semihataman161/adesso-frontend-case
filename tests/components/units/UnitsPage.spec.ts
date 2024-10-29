import { mount } from "@vue/test-utils";
import { createStore } from "vuex";
import { describe, it, expect, beforeEach, vi } from "vitest";
import UnitsPage from "@/pages/UnitsPage.vue";
import AgeFilter from "@/components/units/AgeFilter.vue";
import CostFilter from "@/components/units/CostFilter.vue";
import UnitTable from "@/components/units/UnitTable.vue";
import { createVuetify } from "vuetify";
import ResizeObserver from "resize-observer-polyfill";

const vuetify = createVuetify();
global.ResizeObserver = ResizeObserver;

describe("UnitsPage.vue", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let store: any;

  beforeEach(() => {
    store = createStore({
      state: {
        units: {
          selectedAge: "All",
          selectedCosts: [],
        },
      },
      actions: {
        "units/applyFilters": vi.fn(),
      },
    });

    store.dispatch = vi.fn();
  });

  it("renders age cost filters, and unit table", () => {
    const wrapper = mount(UnitsPage, {
      global: {
        plugins: [store, vuetify],
      },
    });

    expect(wrapper.findComponent(AgeFilter).exists()).toBe(true);
    expect(wrapper.findComponent(CostFilter).exists()).toBe(true);
    expect(wrapper.findComponent(UnitTable).exists()).toBe(true);
  });

  it("dispatches applyFilters action on age filter change", async () => {
    const wrapper = mount(UnitsPage, {
      global: {
        plugins: [store, vuetify],
      },
    });

    const ageFilter = wrapper.findComponent(AgeFilter);
    await ageFilter.vm.$emit("update:selectedAge", "18-25");

    expect(store.dispatch).toHaveBeenCalledWith("units/applyFilters", {
      selectedAge: "18-25",
      selectedCosts: [],
    });
  });

  it("dispatches applyFilters action on cost filter change", async () => {
    const wrapper = mount(UnitsPage, {
      global: {
        plugins: [store, vuetify],
      },
    });

    const costFilter = wrapper.findComponent(CostFilter);
    await costFilter.vm.$emit("update:selectedCost", [{ cost: 100 }]);

    expect(store.dispatch).toHaveBeenCalledWith("units/applyFilters", {
      selectedAge: "All",
      selectedCosts: [{ cost: 100 }],
    });
  });

  it("dispatches reset filters on component unmount", async () => {
    const wrapper = mount(UnitsPage, {
      global: {
        plugins: [store, vuetify],
      },
    });

    await wrapper.unmount();

    expect(store.dispatch).toHaveBeenCalledWith("units/applyFilters", {
      selectedAge: "All",
      selectedCosts: [],
    });
  });
});
