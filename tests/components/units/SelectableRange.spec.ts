import { mount } from "@vue/test-utils";
import { describe, it, expect, beforeEach } from "vitest";
import SelectableRange from "@/components/units/SelectableRange.vue";
import { nextTick } from "vue";
import { createVuetify } from "vuetify";

const vuetify = createVuetify();

describe("SelectableRange", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(SelectableRange, {
      props: {
        name: "Test Range",
      },
      global: {
        plugins: [vuetify],
      },
    });
  });

  it("renders the checkbox with the correct label", () => {
    const checkbox = wrapper.find('input[type="checkbox"]');
    expect(checkbox.exists()).toBe(true);
    expect(checkbox.attributes("aria-label")).toBe("Test Range");
  });

  it('emits "update:selectedFilterValues" with correct payload when checkbox is checked', async () => {
    const checkbox = wrapper.find('input[type="checkbox"]');
    await checkbox.setValue(true);

    await nextTick();

    expect(wrapper.emitted("update:selectedFilterValues")).toBeTruthy();
    expect(wrapper.emitted("update:selectedFilterValues")[0][0]).toEqual({
      isActive: true,
      name: "Test Range",
      value: [0, 200],
    });
  });

  it("updates the range values correctly", async () => {
    const rangeSlider = wrapper.findComponent({ name: "v-range-slider" });
    await rangeSlider.setValue([50, 150]);
    await nextTick();

    expect(wrapper.emitted("update:selectedFilterValues")).toBeTruthy();
    expect(wrapper.emitted("update:selectedFilterValues")[0][0]).toEqual({
      isActive: false,
      name: "Test Range",
      value: [50, 150],
    });
  });

  it("displays the correct formatted range values", async () => {
    const rangeSlider = wrapper.findComponent({ name: "v-range-slider" });
    await rangeSlider.setValue([50, 150]);
    await wrapper.find('input[type="checkbox"]').setValue(true);

    await nextTick();

    const formattedValue = wrapper.find("p");
    expect(formattedValue.text()).toBe("50-150");
  });

  it('displays "-" when the range is not active', async () => {
    const formattedValue = wrapper.find("p");
    expect(formattedValue.text()).toBe("-");
  });
});
