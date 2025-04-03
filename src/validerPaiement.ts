/**
 * Créer un type union pour représenter les modes de paiement ("carte", "paypal", "virement") et une fonction qui valide si un paiement est possible.
 */

import { error } from "console";

export enum ModePaiement {
  CARTE = "carte",
  PAYPAL = "paypal",
  VIREMENT = "virement",
}

export function validerPaiement(modePaiement: ModePaiement) {
  if (modePaiement === ModePaiement.CARTE || modePaiement === ModePaiement.PAYPAL || modePaiement === ModePaiement.VIREMENT){
    return `Paiement accepté via ${modePaiement}`;
  }else{
    throw new Error ("Erreur");
  }

}
