// PageNotFound.spec.js
import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import PageNotFound from "@/pages/PageNotFound.vue";
import { describe, it, expect } from "vitest";

const vuetify = createVuetify();

describe("PageNotFound.vue", () => {
  it("renders the correct message", () => {
    const wrapper = mount(PageNotFound, {
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.find(".page-not-found__message").text()).toContain(
      "Page not found!"
    );
  });

  it("contains a link to the home page", () => {
    const wrapper = mount(PageNotFound, {
      global: {
        plugins: [vuetify],
      },
    });

    const link = wrapper.find(".page-not-found__link");
    expect(link.exists()).toBe(true);
    expect(link.text()).toBe("Home");
    expect(link.attributes("to")).toBe("/home");
  });
});
