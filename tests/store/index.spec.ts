import { describe, it, expect } from "vitest";
import { createStore } from "vuex";
import unitsModule from "@/store/modules/units";

describe("store/index.ts", () => {
  it("should create store with units module", () => {
    const store = createStore({
      modules: {
        units: unitsModule,
      },
    });
    expect(store.state.units).toBeDefined();
  });
});
