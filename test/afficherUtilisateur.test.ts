import { expect } from "chai";
import { afficherUtilisateur } from "../src/afficherUtilisateur";

describe("Tests de la fonction afficherUtilisateur", () => {
  it("Devrait afficher l'utilisateur premium", () => {
    expect(
      afficherUtilisateur({ id: 1, nom: "Alice", abonnement: "gold" })
    ).to.equal("Alice possède un abonnement gold");
  });
});
