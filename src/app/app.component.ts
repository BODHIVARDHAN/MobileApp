import { Component, ViewChild } from '@angular/core';

import { Platform, ToastController, IonRouterOutlet, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  @ViewChild(IonRouterOutlet, {static: false}) routerOutlet: IonRouterOutlet; 
  counter: number;
  constructor(
    public translate: TranslateService,
    public navCtrl: NavController,
    public router: Router,
    public toastCtrl: ToastController, 
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar

  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      let lang = "en";
      if(localStorage.getItem('language')){
        lang = localStorage.getItem('language');
      } 
      // this.translate.setDefaultLang(lang);
      // this.translate.use(lang);
      localStorage.setItem('language',lang); 
      this.translate.use(lang);
      // this._initialiseTranslation();   
      this._initTranslate()
      if(!localStorage.getItem('token')){
        // this.navCtrl.navigateRoot('my-account');
        // this.navCtrl.navigateRoot('profile');
        // this.navCtrl.navigateRoot('user-ranking');
        // this.navCtrl.navigateRoot('player-details');
        this.navCtrl.navigateRoot('login');
      } else{
        this.navCtrl.navigateRoot('home');
      }
      // this.router.navigate(['login']);
      this.platform.backButton.subscribeWithPriority(0, () => { 
        if (this.router.url === '/home') {
          if (this.counter == 0) {
            this.counter++;
            this.presentToast("Press again to exit");
            setTimeout(() => { this.counter = 0 }, 3000)
          }
          else {
            navigator['app'].exitApp();
          } 
        }else if(this.router.url === '/cart') {
          //this.navCtrl.navigateRoot('/tabs/home');
        }else if (this.routerOutlet && this.routerOutlet.canGoBack()) {
          this.routerOutlet.pop();
        }
      });
    });
  }
  private _initTranslate() 
  {
     this.translate.setDefaultLang('en');
     if (this.translate.getBrowserLang() !== undefined) {
         this.translate.use(this.translate.getBrowserLang());
     }else {
         this.translate.use('en'); // Set your language here
     }
  }
  async presentToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }
}
