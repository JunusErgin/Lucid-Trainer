export class TranslationService {
  public translations: any = {};
  public userLanguage: string = 'en';

  constructor() {
    this.loadTranslations();
  }


  private loadTranslations(): void {
    if (this.userLanguage === 'de') {
      this.loadGermanLanguage();
    } else {
      this.loadEnglishLanguage();
    }
  }

  private loadGermanLanguage(): void {

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

    this.translations.settingsTitle = 'Settings';
    this.translations.tryAgain = 'Try again';


    this.translations.progress = 'Progress';
    this.translations.deleteProgress = 'Delete progress';
    this.translations.ok = 'OK';
    this.translations.deleteProgressTitle = 'Progress deleted';
    this.translations.deleteProgressMsg = 'Your progress was deleted successfully!';

    this.translations.notificationTitle = 'Lucid Dream Trainer';
    this.translations.notificationBody = 'It is time to check if you are dreaming.';

    console.log('Loaded language', this.userLanguage, this.translations);
  }

}
