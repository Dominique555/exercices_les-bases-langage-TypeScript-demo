/**
 * Créer un type union pour représenter les modes de paiement ("carte", "paypal", "virement") et une fonction qui valide si un paiement est possible.
 */

export enum ModePaiement {
  CARTE = "carte",
  PAYPAL = "paypal",
  VIREMENT = "virement",
}

export function validerPaiement(modePaiement: ModePaiement) {}
