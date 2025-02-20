export interface Notification {
  type: string;
  destinataire: string;
  message: string;
}

export function envoyerNotification(notification: Notification) {}
