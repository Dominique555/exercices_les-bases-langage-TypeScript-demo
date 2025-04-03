export interface Notification {
  type: string;
  destinataire: string;
  message: string;
}

export function envoyerNotification(notification: Notification) {
  return `Notification envoyée via ${notification.type} à ${notification.destinataire} : \"${notification.message}\"`;
}
