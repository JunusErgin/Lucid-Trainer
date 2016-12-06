import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';
import { TranslationService } from '../../services/translation.service';

declare var AdMob: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private admobId: any;
  checkingDream: boolean = false;
  progress: number;

  constructor(public navCtrl: NavController,
              private platform: Platform,
              public translationService: TranslationService) {
    this.platform = platform;
    console.log('Loaded services', translationService, this.platform);

    this.admobId = {
      banner: 'ca-app-pub-8247738756840583/9268330958',
      interstitial: 'ca-app-pub-8247738756840583/5499109356'
    };

    this.createBanner();
    this.updateProgress();
  }


  public checkDreamState(): void {
    this.checkingDream = true;
    let self: HomePage = this;
    setTimeout(() => {
      self.checkingDream = false;
      self.showInterstitial();
    }, 2000);
  }

  private showInterstitial() {
    this.platform.ready().then(() => {
      if (typeof AdMob !== 'undefined') {
        console.log('Show interstitial banner', AdMob);
        AdMob.prepareInterstitial({
          adId: this.admobId.interstitial,
          autoShow: true
        });
      }
    });
  }


  private createBanner() {
    this.platform.ready().then(() => {
      if (typeof AdMob !== 'undefined') {
        console.log('Create banner');
        AdMob.createBanner({
          adId: this.admobId.banner,
          autoShow: true
        });
        this.showBanner('bottom');
      }
    });
  }

  private showBanner(position: string) {
    this.platform.ready().then(() => {
      console.log('Checking AdMob', AdMob, !!AdMob);
      if (!!AdMob) {
        var positionMap = {
          "bottom": AdMob.AD_POSITION.BOTTOM_CENTER,
          "top": AdMob.AD_POSITION.TOP_CENTER
        };
        AdMob.showBanner(positionMap[position.toLowerCase()]);
      }
    });
  }

  private updateProgress(): void {
    let storageEntry: string = localStorage.getItem('progress');
    this.progress = !!storageEntry ? Math.min(+storageEntry, 99) : 0;
    this.progress++;
    localStorage.setItem('progress', this.progress + '');
  }

}
