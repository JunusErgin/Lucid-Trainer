import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public translationService: TranslationService,
              public navCtrl: NavController) {

  }

}
