import { add } from "./main";
import { assert } from "chai";

describe("math", () => {
  describe("add", () => {
    it("should return the sum of two numbers", () => {
      assert.equal(add(4, 7), 11);
    });
  });
});
