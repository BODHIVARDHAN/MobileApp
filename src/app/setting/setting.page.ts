import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  lang: string;

  constructor(public translate: TranslateService,
    public router: Router,) {
      console.log(localStorage.getItem("language"),'<====')
    if (localStorage.getItem("language") != undefined) {
      this.translate.use(localStorage.getItem("language"));
      this.lang = localStorage.getItem("language");
    } else {
      this.lang = "en";
    }
   }

  ngOnInit() {
  }
  switchLanguage() {
    localStorage.setItem('language', this.lang);
    this.translate.use(this.lang);
  }
  logout() {
    localStorage.clear();
    localStorage.setItem('language', this.lang);
    this.router.navigate(['/login']);
  }

}
