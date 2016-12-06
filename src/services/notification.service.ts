import { LocalNotifications } from 'ionic-native';

export class NotificationService {

  constructor() {
  }

  public createNotification(title: string, msg: string, date: Date): void {
    LocalNotifications.schedule({
      title: title,
      text: msg,
      at: date,
      sound: 'file://beep.caf',
    });
  };


}
