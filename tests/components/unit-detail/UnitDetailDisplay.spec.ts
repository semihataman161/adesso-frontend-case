import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import UnitDetailDisplay from "@/components/unit-detail/UnitDetailDisplay.vue";

describe("UnitDetailDisplay.vue", () => {
  const unitData = [
    { label: "Length", value: 100 },
    { label: "Width", value: null },
    { label: "Height", value: 200 },
  ];

  it("renders correctly with provided unitData", () => {
    const wrapper = mount(UnitDetailDisplay, {
      props: {
        unitData,
      },
    });

    const list = wrapper.find('[data-testid="unit-details-list"]');
    expect(list.exists()).toBe(true);
    expect(list.findAll('[data-testid="unit-details-item"]').length).toBe(
      unitData.length
    );

    unitData.forEach((item, index) => {
      const itemElement = list.findAll('[data-testid="unit-details-item"]')[
        index
      ];
      const label = itemElement.find('[data-testid="unit-details-value"]');

      expect(label.text()).toContain(
        item.value === null ? "-" : item.value.toString()
      );
      expect(itemElement.text()).toContain(item.label);
    });
  });

  it("renders a placeholder when unitData is empty", () => {
    const wrapper = mount(UnitDetailDisplay, {
      props: {
        unitData: [],
      },
    });

    const list = wrapper.find('[data-testid="unit-details-list"]');
    expect(list.exists()).toBe(false);
  });

  it('displays "-" for null values', () => {
    const wrapper = mount(UnitDetailDisplay, {
      props: {
        unitData: [{ label: "Test", value: null }],
      },
    });

    const item = wrapper.find('[data-testid="unit-details-item"]');
    const value = item.find('[data-testid="unit-details-value"]');

    expect(value.text()).toBe("-");
  });
});
