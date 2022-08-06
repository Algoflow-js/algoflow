import { describe, expect, it } from "vitest";
import { twoSum } from "../code";
import { stepify } from "../index";

describe("test", () => {
  it("should pass", () => {
    expect(stepify(twoSum)).toMatchSnapshot();
  });
});
