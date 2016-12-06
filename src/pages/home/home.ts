import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  checkingDream:boolean = false;

  constructor(public navCtrl: NavController,
              public translationService: TranslationService) {
    console.log('Loaded translation Service', translationService);
  }

  public checkDreamState(): void {
    this.checkingDream = true;
    setTimeout(() => {
      this.checkingDream = false;
    }, 2000);
  }

}
