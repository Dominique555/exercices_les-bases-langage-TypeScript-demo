import { expect } from "chai";
import isEven from "../src/isEven";

it("should return true for even numbers", () => {
  expect(isEven(4)).to.equal(true);
  expect(isEven(10)).to.equal(true);
});

it("should return false for odd numbers", () => {
  expect(isEven(7)).to.equal(false);
  expect(isEven(13)).to.equal(false);
});

it("should enforce number type", () => {
  // @ts-expect-error
  expect(() => isEven("8")).to.throw();
});
