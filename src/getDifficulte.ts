/**
 * Créer  une fonction qui retourne la difficulté sous forme de texte.
 * Voici les niveaux  de difficulté (Facile, Moyen, Difficile)
 */

export enum Difficulte {
  Facile = "Facile",
  Moyen = "Moyen",
  Difficile = "Difficile",
}

export function getDifficulte(difficulte: Difficulte) {
  switch (difficulte) {
    case Difficulte.Facile:
      return `Le niveau sélectionné est : ${Difficulte.Facile}`;
      break;
    case Difficulte.Moyen:
      return `Le niveau sélectionné est : ${Difficulte.Moyen}`;
      break;
    case Difficulte.Difficile:
      return `Le niveau sélectionné est : ${Difficulte.Difficile}`;
      break;
  }

}

export default getDifficulte;
