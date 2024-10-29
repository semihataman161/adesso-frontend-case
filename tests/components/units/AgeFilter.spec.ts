import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import { describe, it, expect, beforeEach } from "vitest";
import AgeFilter from "@/components/units/AgeFilter.vue";
import ResizeObserver from "resize-observer-polyfill";
import { nextTick } from "vue";

const vuetify = createVuetify();
global.ResizeObserver = ResizeObserver;

describe("AgeFilter", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(AgeFilter, {
      global: {
        plugins: [vuetify],
      },
    });
  });

  it("renders the age selector title", () => {
    const title = wrapper.find(".age-selector__title");
    expect(title.exists()).toBe(true);
    expect(title.text()).toBe("Ages");
  });

  it("emits the correct event when a tab is clicked", async () => {
    const secondTab = wrapper.findAll(".age-selector__tab")[1];
    await secondTab.trigger("click");

    expect(wrapper.emitted()["update:selectedAge"]).toBeTruthy();
    expect(wrapper.emitted()["update:selectedAge"][0]).toEqual(["Dark"]);
  });

  it('emits "All" when the first tab is clicked', async () => {
    const secondTab = wrapper.findAll(".age-selector__tab")[1];
    await secondTab.trigger("click");

    const firstTab = wrapper.findAll(".age-selector__tab")[0];
    await firstTab.trigger("click");

    expect(wrapper.emitted()["update:selectedAge"]).toBeTruthy();
    expect(wrapper.emitted()["update:selectedAge"][1]).toEqual(["All"]);
  });

  it("emits an empty string when an invalid id is set", async () => {
    wrapper.vm.selectedAgeId = 999;
    await nextTick();

    expect(wrapper.emitted()["update:selectedAge"]).toBeTruthy();
    expect(wrapper.emitted()["update:selectedAge"].at(-1)).toEqual([""]);
  });
});
