import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import TheNavigation from "@/components/nav/TheNavigation.vue";

describe("TheNavigation.vue", () => {
  it("renders the header and menu items correctly", () => {
    const wrapper = mount(TheNavigation);
    expect(wrapper.exists()).toBe(true);

    const menuItems = wrapper.findAll(".header__menu-item");
    expect(menuItems).toHaveLength(2);
    expect(menuItems[0].text()).toBe("Home");
    expect(menuItems[1].text()).toBe("Units");
  });

  it("has correct link attributes", () => {
    const wrapper = mount(TheNavigation);

    const links = wrapper.findAll(".header__link");
    expect(links[0].attributes("to")).toBe("/home");
    expect(links[1].attributes("to")).toBe("/units");
  });

  it("has the correct height and background color based on class", () => {
    const wrapper = mount(TheNavigation);
    const header = wrapper.find(".header");

    expect(header.classes()).toContain("header");
  });
});
