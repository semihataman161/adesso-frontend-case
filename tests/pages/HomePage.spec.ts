import { mount } from "@vue/test-utils";
import { createVuetify } from "vuetify";
import { describe, it, expect } from "vitest";
import HomePage from "@/pages/HomePage.vue";
import BaseCard from "@/components/UI/BaseCard.vue";

const vuetify = createVuetify();

describe("HomePage.vue", () => {
  it("renders correctly", () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [vuetify],
      },
    });

    expect(wrapper.findComponent(BaseCard).exists()).toBe(true);
    const img = wrapper.find("img.home__image");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe("/src/assets/age-of-empires.webp");
    expect(img.attributes("alt")).toBe("Age of Empires");
  });

  it("applies hover effect on image", async () => {
    const wrapper = mount(HomePage, {
      global: {
        plugins: [vuetify],
      },
    });

    const img = wrapper.find("img.home__image");
    expect(img.classes()).not.toContain("home__image--hovered");

    await img.trigger("mouseover");
    expect(img.classes()).toContain("home__image--hovered");

    await img.trigger("mouseleave");
    expect(img.classes()).not.toContain("home__image--hovered");
  });
});
