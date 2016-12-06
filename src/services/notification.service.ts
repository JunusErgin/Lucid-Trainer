import { LocalNotifications } from 'ionic-native';

export class NotificationService {

  constructor() {
  }

  public deleteAllNotifications(): void {
    LocalNotifications.clearAll();
  }

  public initSettings(title: string, body: string) {
    if (!localStorage.getItem('pushFrequency')) {
      localStorage.setItem('pushFrequency', '2');
      let alarm1: Date = new Date();
      alarm1.setMinutes(0);
      alarm1.setHours(10);
      let alarm2: Date = new Date();
      alarm2.setMinutes(0);
      alarm2.setHours(21);
      this.createNotification(title, body, alarm1);
      this.createNotification(title, body, alarm2);
    }
  }

  public createNotification(title: string, msg: string, date: Date): void {
    LocalNotifications.schedule({
      title: title,
      text: msg,
      every: 'day',
      at: date,
      sound: 'file://beep.caf',
    });
  };

}
