import { expect } from "chai";
import calculator from "../add";

describe("add function", () => {
	it("should add two numbers", () => {
		expect(calculator.add(3, 5)).to.equal(8);
		expect(calculator.add(-2, 7)).to.equal(5);
	});

	it("should enforce number types", () => {
		// @ts-expect-error Vérifie que TypeScript bloque les chaînes de caractères
		expect(() => calculator("3", 5)).to.throw();
	});
});
