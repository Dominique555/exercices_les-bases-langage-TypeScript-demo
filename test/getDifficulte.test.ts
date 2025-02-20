import { expect } from "chai";
import getDifficulte, { Difficulte } from "../src/getDifficulte";

describe("Tests de la fonction getDifficulte", () => {
  it("Devrait retourner le texte correct pour Difficile", () => {
    expect(getDifficulte(Difficulte.Difficile)).to.equal(
      "Le niveau sélectionné est : Difficile"
    );
  });
});
