import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,
              public translationService: TranslationService) {

  }

}
