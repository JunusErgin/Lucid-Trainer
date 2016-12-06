import { Component } from '@angular/core';

import { NavController, AlertController } from 'ionic-angular';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class ContactPage {

  constructor(public alertCtrl: AlertController,
              public navCtrl: NavController,
              public translationService: TranslationService) {
  }

  public deleteProgress(): void {
    localStorage.removeItem('progress');
    this.showAlert();
  }

  private showAlert() {
    let alert = this.alertCtrl.create({
      title: this.translationService.translations.deleteProgressTitle,
      subTitle: this.translationService.translations.deleteProgressMsg,
      buttons: [this.translationService.translations.ok]
    });
    alert.present();
  }

}
