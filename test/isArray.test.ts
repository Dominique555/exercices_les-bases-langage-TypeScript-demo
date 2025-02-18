import { expect } from "chai";
import isArray from "../isArray";

test("should return true for arrays", () => {
	expect(isArray([1, 2, 3])).to.equal(true);
	expect(isArray([])).to.equal(true);
});

test("should return false for non-arrays", () => {
	expect(isArray("hello")).to.equal(false);
	expect(isArray(42)).to.equal(false);
});
