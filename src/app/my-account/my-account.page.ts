import { Component, OnInit } from '@angular/core';
import { GlobalserviceService } from '../service/globalservice.service';
import { Router } from '@angular/router';
import { ActionSheetController, NavController, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.page.html',
  styleUrls: ['./my-account.page.scss'],
})
export class MyAccountPage implements OnInit {
  editProfileIcon:boolean = true;
  Editvalue:boolean = false;
  eventList = ["","","","","",""];
  form: FormGroup;
  segnemtSelectedIndex: number;
  tempImagefirst: string;
  tempImageSecond: string;
  image: any = null;
  UrlsData = [""];
  // fileTransfer: FileTransferObject;
  constructor(public router: Router,
    public globalService: GlobalserviceService,
    public navCtrl: NavController,
    public camera: Camera,
    // private transfer: FileTransfer,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController,
    public translate: TranslateService) {
    this.segnemtSelectedIndex=0;
    this.tempImagefirst="";
    this.tempImageSecond="";
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      // dateofbirth: new FormControl('', [Validators.required]),
      // gender: new FormControl('', [Validators.required]),
      // firstlanguage: new FormControl({ value: 'English', disabled: true }, [Validators.required]),
      // secondlanguage: new FormControl('', [Validators.required]),
      // thirdlanguage: new FormControl('', [Validators.required]),
      // active: new FormControl('', [Validators.required]),
      // isPremature: new FormControl('', [Validators.required]),
      // planned_date: new FormControl('', [Validators.required]),
      // isUnborn:new FormControl('', [Validators.required])
    });
     }

  ngOnInit() {
    this.globalService.changeLanguage();
  }
  ionViewDidEnter() {
    console.log("view did load");
    this.globalService.changeLanguage();
  }
  changePlan(){
    this.router.navigate(['/buy-subcription']);
  }
  uploadUrl(){
    console.log('urls...!');
    let obj = {url:''};
    console.log('---',this.UrlsData)
    // this.UrlsData = this.UrlsData.push(obj);
    console.log('---',this.UrlsData);
  }
  deleteImage(){
    this.globalService.presentAlert('Are you sure you want to delete photo');
  }
  logout(){ 
    let lang = this.getLanguage();
    localStorage.clear();
    localStorage.setItem('language',lang);
    this.navCtrl.navigateRoot('image-of-day');
  }
  Editvaluefun(value){
    console.log('Editvaluefun',value, typeof(value))
    if(value === true){
      this.Editvalue = false;
    }if(value === false){
      this.Editvalue = true;
    }
  }

  getLanguage():string{
    let lang; 
    if(localStorage.getItem('language')){
      lang = localStorage.getItem('language');
      return lang;
    }
    return "en";
  }
  gotoStting(){
    console.log('go to setting...!');
    this.router.navigate(['/setting']);
  }

  // async selectImage() {
  //   let actionSheet = await this.actionSheetCtrl.create({
  //     // title: 'Select Image Source',
  //     buttons: [
  //       {
  //         text: 'Load from Library',
  //         handler: () => {
  //           this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
  //         }
  //       },
  //       {
  //         text: 'Use Camera',
  //         handler: () => {
  //           this.takePicture(this.camera.PictureSourceType.CAMERA);
  //         }
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel'
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }
  // takePicture(sourceType) {
  //   this.fileTransfer = this.transfer.create();
  //   const options: CameraOptions = {
  //     quality: 100,
  //     sourceType: sourceType,
  //     saveToPhotoAlbum: false,
  //     correctOrientation: true,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     allowEdit: true,
  //     encodingType: this.camera.EncodingType.PNG,
  //     mediaType: this.camera.MediaType.PICTURE,
  //     targetWidth: 600,
  //     targetHeight: 600,
  //   };

  //   this.camera.getPicture(options).then((imagePath) => {
  //     this.image = imagePath;
  //     if(this.segnemtSelectedIndex==0){
  //       this.tempImagefirst=imagePath
  //     }else if(this.segnemtSelectedIndex==1){
  //       this.tempImageSecond=imagePath
  //     }
  //   }, (err) => {
  //     this.presentToast('Error while selecting image.');
  //   });
  // }
  async presentToast(text) {
    let toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
