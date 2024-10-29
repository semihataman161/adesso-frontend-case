import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import App from "@/App.vue";
import { describe, it, expect } from "vitest";
import ResizeObserver from "resize-observer-polyfill";

const vuetify = createVuetify();
global.ResizeObserver = ResizeObserver;

describe("App.vue", () => {
  it("renders the navigation and main content", () => {
    const wrapper = mount(App, {
      global: {
        plugins: [vuetify],
      },
    });

    const navigation = wrapper.find(".layout__navigation");
    expect(navigation.exists()).toBe(true);

    const mainContent = wrapper.find(".layout__main");
    expect(mainContent.exists()).toBe(true);

    const routerView = mainContent.find("router-view");
    expect(routerView.exists()).toBe(true);
  });
});
