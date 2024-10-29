import { describe, it, expect } from "vitest";
import {
  filterByAge,
  filterByCost,
  filterByAgeAndCost,
} from "@/utils/filterUtils";
import type { ISelectedCost } from "@/types/Unit";

describe("Filtering Functions", () => {
  const mockData = [
    { age: "20", cost: { type1: 100, type2: 200 } },
    { age: "25", cost: { type1: 150, type2: 250 } },
    { age: "30", cost: { type1: 200, type2: 300 } },
    { age: "25", cost: { type1: 300, type2: 400 } },
    { age: "40", cost: {} },
  ];

  describe("filterByAge", () => {
    it('should return all data if selectedAge is "All"', () => {
      const result = filterByAge(mockData, "All");
      expect(result).toEqual(mockData);
    });

    it("should filter data by age", () => {
      const result = filterByAge(mockData, "25");
      expect(result).toEqual([
        { age: "25", cost: { type1: 150, type2: 250 } },
        { age: "25", cost: { type1: 300, type2: 400 } },
      ]);
    });

    it("should handle errors gracefully", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = filterByAge(null as any, "25");
      expect(result).toEqual(null);
    });
  });

  describe("filterByCost", () => {
    const selectedCosts: ISelectedCost[] = [
      { isActive: true, name: "type1", value: [100, 250] },
    ];

    it("should return all data if no selected costs", () => {
      const result = filterByCost(mockData, []);
      expect(result).toEqual(mockData);
    });

    it("should filter data by cost", () => {
      const result = filterByCost(mockData, selectedCosts);
      expect(result).toEqual([
        { age: "20", cost: { type1: 100, type2: 200 } },
        { age: "25", cost: { type1: 150, type2: 250 } },
        { age: "30", cost: { type1: 200, type2: 300 } },
      ]);
    });

    it("should handle null unitCost correctly", () => {
      const result = filterByCost(mockData, selectedCosts);
      expect(result).toEqual([
        { age: "20", cost: { type1: 100, type2: 200 } },
        { age: "25", cost: { type1: 150, type2: 250 } },
        { age: "30", cost: { type1: 200, type2: 300 } },
      ]);
    });

    it("should handle errors gracefully", () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result = filterByCost(null as any, selectedCosts);
      expect(result).toEqual(null);
    });
  });

  describe("filterByAgeAndCost", () => {
    const selectedCosts: ISelectedCost[] = [
      { isActive: true, name: "type1", value: [100, 150] },
    ];

    it("should apply both age and cost filters", () => {
      const result = filterByAgeAndCost(mockData, "25", selectedCosts);
      expect(result).toEqual([{ age: "25", cost: { type1: 150, type2: 250 } }]);
    });

    it("should return original data if no age and no selectedCosts selected", () => {
      const result = filterByAgeAndCost(mockData, "All", []);
      expect(result).toEqual(mockData);
    });
  });
});
