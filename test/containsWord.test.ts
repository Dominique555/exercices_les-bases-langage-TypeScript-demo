import { expect } from "chai";
import containsWord from "../src/containsWord";

test("should find word in string", () => {
  expect(containsWord("Hello world", "world")).to.equal(true);
});

test("should return false if word is not found", () => {
  expect(containsWord("Hello world", "JavaScript")).to.equal(false);
});
