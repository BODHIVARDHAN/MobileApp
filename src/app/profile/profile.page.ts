import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { ActionSheetController, NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GlobalserviceService } from '../service/globalservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(public router: Router,
    public globalService: GlobalserviceService,
    public navCtrl: NavController,
    public camera: Camera,
    // private transfer: FileTransfer,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public translate: TranslateService) { }

  ngOnInit() {
    this.globalService.changeLanguage();
  }
  ionViewDidEnter() {
    console.log("view did load");
    this.globalService.changeLanguage();
  }
  gotoStting() {
    console.log('go to setting...!');
    this.router.navigate(['/setting']);
  }

}
