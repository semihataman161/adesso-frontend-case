import { describe, it, expect } from "vitest";
import state from "@/store/modules/units/state";

describe("store/modules/state.ts", () => {
  it("should initialize state correctly", () => {
    expect(state).toHaveProperty("allTableData");
    expect(state).toHaveProperty("filteredTableData");
    expect(state).toHaveProperty("selectedAge", "All");
    expect(state).toHaveProperty("selectedCosts", []);
  });
});
