import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  public languages: string[] = ['en', 'es', 'de', 'it', 'ru'];

  constructor(public translate: TranslateService, private cookieService: CookieService) {
    let browserLang;
    this.translate.addLangs(this.languages);
    if (this.cookieService.check('lang')) {
      browserLang = this.cookieService.get('lang');
    }
    else {
      this.setLanguage('en');
      browserLang = translate.getBrowserLang();
      
      
    }

    translate.use(browserLang.match(/en|es|de|it|ru/) ? browserLang : 'en');
    this.translate.get("HELLO").subscribe(
      ((data:string)=>{console.log("ttxxtt"+data)
  console.log("vat "+data);
    }))
  }

  public setLanguage(lang) {
    this.translate.use(lang);
    this.cookieService.set('lang', lang);
    this.meth("Bonjour")
  }
  meth(header:any):any{
    this.translate.get(header).subscribe(
     ((data:string)=>{console.log("tttt"+data)
 console.log("vat "+data);
 })
   )
 }

}
