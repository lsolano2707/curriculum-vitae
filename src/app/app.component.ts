import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  langs: string[] = [];
  currentLanguage = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use(this.currentLanguage);
    this.translate.addLangs(['en', 'es']);
    this.langs = this.translate.getLangs();
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
