import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastController, AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {
  loader;

  constructor(public translate: TranslateService,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public alertController: AlertController) { }
  changeLanguage(){
    let lang; 
    if(localStorage.getItem('language')){
      lang = localStorage.getItem('language');
    }
    if(lang != "en"){
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
    }else{
      lang = "en"
      this.translate.setDefaultLang(lang);
      this.translate.use(lang);
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
  async presentAlert(text) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: text,
      buttons: [{
        text: 'Okay',
        handler: () => { 
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }]
    });

    await alert.present();
  }
  async showLoader() {
    this.loader = await this.loadingCtrl.create({
      message: this.translate.instant('Please wait..'),
    });
    this.loader.present();
  }

  dismissLoader() {
    this.loader.dismiss();
  }
}
