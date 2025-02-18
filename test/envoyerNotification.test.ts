import { expect } from "chai";
import { envoyerNotification, Notification } from "../envoyerNotification";

describe("Tests de la fonction envoyerNotification", () => {
	it("Devrait envoyer une notification par email", () => {
		const notif: Notification = {
			type: "email",
			destinataire: "alice@example.com",
			message: "Bonjour Alice !",
		};
		expect(envoyerNotification(notif)).to.equal(
			'Notification envoyée via email à alice@example.com : "Bonjour Alice !"'
		);
	});

	it("Devrait envoyer une notification par SMS", () => {
		const notif: Notification = {
			type: "sms",
			destinataire: "+24123456789",
			message: "Votre code est 1234",
		};
		expect(envoyerNotification(notif)).to.equal(
			'Notification envoyée via sms à +24123456789 : "Votre code est 1234"'
		);
	});

	it("Devrait envoyer une notification push", () => {
		const notif: Notification = {
			type: "push",
			destinataire: "Utilisateur123",
			message: "Vous avez un nouveau message",
		};
		expect(envoyerNotification(notif)).to.equal(
			'Notification envoyée via push à Utilisateur123 : "Vous avez un nouveau message"'
		);
	});
});
