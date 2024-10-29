import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import BaseCard from "@/components/UI/BaseCard.vue";

describe("BaseCard.vue", () => {
  it("renders the slot content correctly", () => {
    const wrapper = mount(BaseCard, {
      slots: {
        default: "This is a test content",
      },
    });

    expect(wrapper.text()).toContain("This is a test content");
  });

  it("has the correct class name", () => {
    const wrapper = mount(BaseCard);
    expect(wrapper.classes()).toContain("base-card");
  });
});
