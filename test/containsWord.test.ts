import { expect } from "chai";
import containsWord from "../src/containsWord";

it("should find word in string", () => {
  expect(containsWord("Hello world", "world")).to.equal(true);
});

it("should return false if word is not found", () => {
  expect(containsWord("Hello world", "JavaScript")).to.equal(false);
});
