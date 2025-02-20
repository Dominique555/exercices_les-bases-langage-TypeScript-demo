import { expect } from "chai";
import reverseString from "../src/reverseString";

it("should reverse a string", () => {
  expect(reverseString("hello")).to.equal("olleh");
  expect(reverseString("TypeScript")).to.equal("tpircSepyT");
});

it("should enforce string type", () => {
  // @ts-expect-error
  expect(() => reverseString(123)).to.throw();
});
