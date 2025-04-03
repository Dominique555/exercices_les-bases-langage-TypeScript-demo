import { clearScreenDown } from "readline";

export type Utilisateur = { id: number; nom: string; abonnement: string };

export function afficherUtilisateur(user: Utilisateur) {
   
    return `${user.nom} possède un abonnement ${user.abonnement}`;

}