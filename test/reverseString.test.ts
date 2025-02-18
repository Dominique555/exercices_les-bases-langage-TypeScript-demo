import { expect } from "chai";
import reverseString from "../reverseString";

test("should reverse a string", () => {
	expect(reverseString("hello")).to.equal("olleh");
	expect(reverseString("TypeScript")).to.equal("tpircSepyT");
});

test("should enforce string type", () => {
	// @ts-expect-error
	expect(() => reverseString(123)).to.throw();
});
