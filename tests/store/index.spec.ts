import { describe, it, expect } from "vitest";
import store from "@/store/index";

describe("store/index.ts", () => {
  it("should create store with units module", () => {
    expect(store.state.units).toBeDefined();
  });
});
