import { expect } from "chai";
import { validerPaiement } from "../validerPaiement";

describe("Tests de la fonction validerPaiement", () => {
	it("Devrait accepter le paiement par carte", () => {
		expect(validerPaiement("carte")).to.equal("Paiement accepté via carte");
	});

	it("Devrait lever une erreur pour un mode invalide", () => {
		// @ts-expect-error
		expect(() => validerPaiement("bitcoin")).to.throw();
	});
});
