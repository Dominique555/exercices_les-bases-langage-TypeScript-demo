import { expect } from "chai";
import { validerPaiement, ModePaiement } from "../src/validerPaiement";

describe("Tests de la fonction validerPaiement", () => {
  it("Devrait accepter le paiement par carte", () => {
    expect(validerPaiement(ModePaiement.CARTE)).to.equal(
      "Paiement accepté via carte"
    );
  });

  it("Devrait lever une erreur pour un mode invalide", () => {
    // @ts-expect-error
    expect(() => validerPaiement("bitcoin")).to.throw();
  });
});
