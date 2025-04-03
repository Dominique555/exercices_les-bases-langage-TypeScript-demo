"use strict";
/**
 * Créer un type union pour représenter les modes de paiement ("carte", "paypal", "virement") et une fonction qui valide si un paiement est possible.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModePaiement = void 0;
exports.validerPaiement = validerPaiement;
var ModePaiement;
(function (ModePaiement) {
    ModePaiement["CARTE"] = "carte";
    ModePaiement["PAYPAL"] = "paypal";
    ModePaiement["VIREMENT"] = "virement";
})(ModePaiement || (exports.ModePaiement = ModePaiement = {}));
function validerPaiement(modePaiement) { }
