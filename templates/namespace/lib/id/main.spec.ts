import { assert } from "chai";
import { add } from "./math";

describe("math", function() {
  describe("add", function() {
    it("should return the combined amount of two numbers", function() {
      assert.equal(add(1, 1), 2);
    });
  });
});

describe("core", function() {
  describe("addition operator", function() {
    it("should return the combined amount of two numbers", function() {
      assert.equal(1 + 1, 2);
    });
  });
});