import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public translationService: TranslationService) {
    console.log('Loaded translation Service', translationService);
  }

}
