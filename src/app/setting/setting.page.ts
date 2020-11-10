import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GlobalserviceService } from '../service/globalservice.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.page.html',
  styleUrls: ['./setting.page.scss'],
})
export class SettingPage implements OnInit {
  lang: string;
  flag: { flag: string; }[];
  constructor(public translate: TranslateService,
    public globalService: GlobalserviceService,
    public navCtrl:NavController,
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
    this.getfalgs()
  }
  getfalgs(){
    this.flag = [  
      {flag: './assets/assets/blank-person.jpg'},
      {flag: './assets/assets/blank-person.jpg'},
      {flag: './assets/assets/blank-person.jpg'},
      {flag: './assets/assets/blank-person.jpg'},
      {flag: './assets/assets/blank-person.jpg'},
      {flag: './assets/assets/blank-person.jpg'}
  
  ];
  }
  ionViewWillEnter(){
      if (localStorage.getItem("language") != undefined) {
      this.translate.use(localStorage.getItem("language"));
      this.lang = localStorage.getItem("language");
    } else {
      this.lang = "en";
    }
  }
  switchLanguage() {
    
    localStorage.setItem('language', this.lang);
    this.translate.use(this.lang);
    this.globalService.changeLanguage();
    this.navCtrl.pop();
  }
  logout() {
    localStorage.clear();
    localStorage.setItem('language', this.lang);
    this.router.navigate(['/login']);
  }

}
