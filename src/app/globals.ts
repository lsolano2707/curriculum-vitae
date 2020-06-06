import { Injectable } from '@angular/core';

@Injectable()
export class Globals {

  language = 'en';
  languageEnglishId = 'en';
  languageSpanishId = 'es';

  languages = [
    {
      id: 'en',
      description: 'English'
    },
    {
      id: 'es',
      description: 'Spanish'
    }
  ];

}
