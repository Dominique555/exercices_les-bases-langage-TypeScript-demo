import { expect } from "chai";
import toUpperCaseString from "../toUpperCaseString";

it("should convert string to uppercase", () => {
	expect(toUpperCaseString("hello")).to.equal("HELLO");
	expect(toUpperCaseString("TypeScript")).to.equal("TYPESCRIPT");
});

it("should enforce string type", () => {
	// @ts-expect-error
	expect(() => toUpperCaseString(42)).to.throw();
});
