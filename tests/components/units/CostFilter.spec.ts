import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import { describe, it, expect, beforeEach } from "vitest";
import CostFilter from "@/components/units/CostFilter.vue";
import SelectableRange from "@/components/units/SelectableRange.vue";

const vuetify = createVuetify();

describe("CostFilter.vue", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(CostFilter, {
      global: {
        plugins: [vuetify],
      },
    });
  });

  it("renders correctly", () => {
    expect(wrapper.text()).toContain("Costs");
  });

  it("emits update:selectedCost when a selectable range is changed", async () => {
    const selectableRange = wrapper.findComponent(SelectableRange);

    await selectableRange.vm.$emit("update:selectedFilterValues", {
      name: "Wood",
      isActive: true,
    });

    expect(wrapper.emitted("update:selectedCost")).toBeTruthy();
    expect(wrapper.emitted("update:selectedCost")[0]).toEqual([
      [
        {
          name: "Wood",
          isActive: true,
        },
      ],
    ]);
  });

  it("removes the cost if isActive is false", async () => {
    await wrapper
      .findComponent(SelectableRange)
      .vm.$emit("update:selectedFilterValues", {
        name: "Wood",
        isActive: true,
      });

    await wrapper
      .findComponent(SelectableRange)
      .vm.$emit("update:selectedFilterValues", {
        name: "Wood",
        isActive: false,
      });

    expect(wrapper.emitted("update:selectedCost")).toBeTruthy();
    expect(wrapper.emitted("update:selectedCost")[1]).toEqual([[]]);
  });

  it("updates an existing selected cost correctly", async () => {
    await wrapper
      .findComponent(SelectableRange)
      .vm.$emit("update:selectedFilterValues", {
        name: "Wood",
        isActive: true,
      });

    await wrapper
      .findComponent(SelectableRange)
      .vm.$emit("update:selectedFilterValues", {
        name: "Wood",
        isActive: true,
        amount: 10,
      });

    expect(wrapper.emitted("update:selectedCost")).toBeTruthy();
    expect(wrapper.emitted("update:selectedCost")[1]).toEqual([
      [
        {
          name: "Wood",
          isActive: true,
          amount: 10,
        },
      ],
    ]);
  });
});
