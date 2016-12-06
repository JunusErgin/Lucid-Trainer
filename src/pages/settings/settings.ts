import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { TranslationService } from '../../services/translation.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class ContactPage {
  frequency: number;

  constructor(public alertCtrl: AlertController,
              public navCtrl: NavController,
              private notificationService: NotificationService,
              public translationService: TranslationService) {
    this.loadFrequency();
  }

  public deleteProgress(): void {
    localStorage.removeItem('progress');
    this.showAlert();

  }

  public setNotificationFrequency(frequency: number): void {
    localStorage.setItem('pushFrequency', frequency + '');
    this.frequency = frequency;
    this.setNotifications(frequency);
  }

  /**
   * Load frequency of notifications
   */
  private loadFrequency(): void {
    this.frequency = +localStorage.getItem('pushFrequency');
  }

  private showAlert() {
    let alert = this.alertCtrl.create({
      title: this.translationService.translations.deleteProgressTitle,
      subTitle: this.translationService.translations.deleteProgressMsg,
      buttons: [this.translationService.translations.ok]
    });
    alert.present();
  }

  private setNotifications(frequency: number): void {
    this.notificationService.deleteAllNotifications();

    let alarmTimes: Array<Date> = new Array(8);
    for (let i = 0; i < alarmTimes.length; i++) {
      alarmTimes[i] = new Date();
      alarmTimes[i].setMinutes(0);
    }
    alarmTimes[0].setHours(10);
    alarmTimes[1].setHours(20);
    alarmTimes[2].setHours(13);
    alarmTimes[3].setHours(17);
    alarmTimes[4].setHours(22);
    alarmTimes[5].setHours(15);
    alarmTimes[6].setHours(8);
    alarmTimes[7].setHours(19);

    for (let i = 0; i < frequency; i++) {
      this.setDefaultNotification(alarmTimes[i]);
    }
  }

  private setDefaultNotification(alarmTime: Date): void {
    this.notificationService.createNotification(
      this.translationService.translations.notificationTitle,
      this.translationService.translations.notificationBody,
      alarmTime);
  }


}
