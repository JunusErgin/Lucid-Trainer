export class TranslationService {
  public translations: any = {};
  public userLanguage: string = 'de';

  constructor() {
    this.loadTranslations();
  }


  private loadTranslations(): void {
    this.userLanguage = this.getLanguage();
    if (this.userLanguage === 'de') {
      this.loadGermanLanguage();
    } else {
      this.loadEnglishLanguage();
    }
  }

  private getLanguage(): string {
    let language: string = 'en';
    if (!!window.navigator && !!window.navigator.language) {
      language = window.navigator.language;
      language = language.substring(0, 2);
    }
    return language;
  }

  private loadGermanLanguage(): void {
    this.translations.homeTitle = 'Home';
    this.translations.no = 'Nein';
    this.translations.homeHeadline = 'Träume ich gerade?';
    this.translations.homeText = 'Du träumst nicht, wenn Du diesen Text problemlos lesen kannst.';
    this.translations.aboutTitle = 'Anleitung';
    this.translations.aboutText = 'Diese App funktioniert wirklich.';

    this.translations.aboutText2 = 'Mit diesem Programm wird luzides Träumen trainiert. ' +
      'Kontrolliert man über 2 - 3 Wochen mehrmals täglich zu überprüfen ob man schläft, tut man das nach einer Weile auch im Schlaf.' +
      'Im Schlaf können Texte oft nur schwer gelesen werden oder ändern sich bei mehrfachem Lesen.' +
      'In diesem Moment merkst Du, dass Du schläfst. Nun kannst du alles machen.';

    this.translations.aboutText3 = 'Der Fortschrittsbalken zeigt Dir, wie wahrscheinlich du einen luziden Traum haben wirst.';

    this.translations.aboutText4 = 'Haftungsausschluss: Selbstverständlich können wir keine Verantwortung  für deine Handlungen übernehmen. Wir übernehmen keine Haftung für rechtswiedriges Verhalten, falls Du Dich doch nicht in einem Traum befinden solltest!';

    this.translations.settingsTitle = 'Einstellungen';
    this.translations.tryAgain = 'Nochmal versuchen';

    this.translations.progress = 'Fortschritt';
    this.translations.deleteProgress = 'Fortschritt löschen';
    this.translations.ok = 'OK';
    this.translations.deleteProgressTitle = 'Fortschritt gelöscht';
    this.translations.deleteProgressMsg = 'Dein Fortschritt wurde gelöscht!';

    this.translations.notificationTitle = 'Luzider Traum Trainer';
    this.translations.notificationBody = 'Es ist Zeit du kontrollieren, ob du gerade schläfst.';
    this.translations.notifications = 'Push Benachrichtigungen';
    this.translations.notificationsFrequency0 = 'Keine';
    this.translations.notificationsFrequency2 = '2 Benachrichtigungen am Tag';
    this.translations.notificationsFrequency4 = '4 Benachrichtigungen am Tag';
    this.translations.notificationsFrequency6 = '6 Benachrichtigungen am Tag';
    this.translations.notificationsFrequency8 = '8 Benachrichtigungen am Tag';

    console.log('Loaded language', this.userLanguage, this.translations);

  }


  private loadEnglishLanguage(): void {
    this.translations.homeTitle = 'Home';
    this.translations.no = 'No';
    this.translations.homeHeadline = 'Am I currently dreaming?';
    this.translations.homeText = 'You are not dreaming if you are able to read this text without any issues.';
    this.translations.aboutTitle = 'About';
    this.translations.aboutText = 'First of all, this is not an app for fun purposes. ';

    this.translations.aboutText2 = 'This App is designed to train Lucid training. ' +
      'After checking if you are sleeping in regular periods, you will start to check if you are dreaming in your dreams.' +
      'Reading text while dreaming is not possible for most of the people. ' +
      'The text will be blurred or change every time you try to read it, if you are in a dream.';

    this.translations.aboutText3 = 'The progress bar shows you how close you are to have a lucid dream.';
    this.translations.aboutText4 = 'Disclaimer: We cannot accept any responsibility or liability in case of legal infringements. So, please do not break the law if you think that you are dreaming!';

    this.translations.settingsTitle = 'Settings';
    this.translations.tryAgain = 'Try again';

    this.translations.progress = 'Progress';
    this.translations.deleteProgress = 'Delete progress';
    this.translations.ok = 'OK';
    this.translations.deleteProgressTitle = 'Progress deleted';
    this.translations.deleteProgressMsg = 'Your progress was deleted successfully!';

    this.translations.notificationTitle = 'Lucid Dream Trainer';
    this.translations.notificationBody = 'It is time to check if you are dreaming.';
    this.translations.notifications = 'Push Notifications';
    this.translations.notificationsFrequency0 = 'None';
    this.translations.notificationsFrequency2 = '2 Notifications a day';
    this.translations.notificationsFrequency4 = '4 Notifications a day';
    this.translations.notificationsFrequency6 = '6 Notifications a day';
    this.translations.notificationsFrequency8 = '8 Notifications a day';

    console.log('Loaded language', this.userLanguage, this.translations);
  }

}
