import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import UnitTable from "@/components/units/UnitTable.vue";
import { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";
import { describe, it, expect, beforeEach, vi } from "vitest";
import ResizeObserver from "resize-observer-polyfill";

const vuetify = createVuetify();
global.ResizeObserver = ResizeObserver;

describe("UnitTable", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let store: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let router: any;

  beforeEach(() => {
    store = createStore({
      modules: {
        units: {
          namespaced: true,
          getters: {
            filteredTableData: () => [
              {
                id: 1,
                name: "John Doe",
                age: 30,
                cost: { amount: 100, currency: "USD" },
              },
              {
                id: 2,
                name: "Jane Smith",
                age: 25,
                cost: { amount: 200, currency: "USD" },
              },
            ],
          },
        },
      },
    });

    router = createRouter({
      history: createWebHistory(),
      routes: [],
    });

    router.push = vi.fn();
  });

  it("renders the data table with correct headers", () => {
    const wrapper = mount(UnitTable, {
      global: {
        plugins: [vuetify, store, router],
      },
    });

    const headers = wrapper.findAll("th");
    expect(headers.length).toBe(4);
    expect(headers[0].text()).toBe("id");
    expect(headers[1].text()).toBe("name");
    expect(headers[2].text()).toBe("age");
    expect(headers[3].text()).toBe("cost");
  });

  it("renders the correct number of rows", () => {
    const wrapper = mount(UnitTable, {
      global: {
        plugins: [vuetify, store, router],
      },
    });

    const rows = wrapper.findAll("tbody tr");
    expect(rows.length).toBe(2);
  });

  it("formats the cost value correctly", () => {
    const wrapper = mount(UnitTable, {
      global: {
        plugins: [vuetify, store, router],
      },
    });

    const costCells = wrapper.findAll("td:nth-child(4)");
    expect(costCells[0].text()).toBe("amount: 100, currency: USD");
    expect(costCells[1].text()).toBe("amount: 200, currency: USD");
  });

  it("navigates to the correct route on row click", async () => {
    const wrapper = mount(UnitTable, {
      global: {
        plugins: [vuetify, store, router],
      },
    });

    const firstRow = wrapper.find("tbody tr");
    await firstRow.trigger("click");

    expect(router.push).toHaveBeenCalledWith("units/1");
  });
});
