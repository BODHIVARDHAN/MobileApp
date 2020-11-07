import { Component, ViewChild } from '@angular/core';
import { ToastController, AlertController, LoadingController, Platform, PopoverController } from '@ionic/angular';
import { InAppPurchase2, IAPProduct } from '@ionic-native/in-app-purchase-2/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalserviceService } from '../service/globalservice.service';
import { ApiService } from '../service/api.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  // @ViewChild(Content) content: Content;
  productId: any;
  response: any;
  response1: any;
  product: {};
  products: IAPProduct[] = [];
  imageData = "";
  rate = 5;
  condition: number = 3;
  list: any[] = new Array(5);
  responseData: any;
  likes: any;
  discription: any;
  emptyFlag = true;
  userId: any;
  value = "Player"
  segment: string = "1";
  constructor(public toastCtrl: ToastController, 
    public api:ApiService,
    route:ActivatedRoute,
    public translate: TranslateService,
    public globalService: GlobalserviceService,
    private popover: PopoverController,
    public router: Router,
    public alertController: AlertController,
    public loadingCtrl: LoadingController,
    private store: InAppPurchase2,
    private plt: Platform) {
    this.productId = "1mois";
    console.log("this.productid==", this.productId);
    console.log("tokens", localStorage.getItem('token'));
    console.log("userId", localStorage.getItem('userId'));
    console.log("userData", localStorage.getItem('userData'));
    route.params.subscribe(val => {
      this.userId = localStorage.getItem('userId')
      // this.getMyPhoto();
    });
  }

  ionViewDidLeave() {
    // this.store.off()segment: string = "1";
  }
  ionViewDidEnter() {
    console.log("view did load");
    this.segment = "1";
  }

  gotoprofile(){
    console.log('got to profile...!');
    this.router.navigate(['/profile']);
  }
  createPosts(){
    console.log('got to createPosts...!');
    this.router.navigate(['/create-post']);
  }
  myPosts(){
    console.log('got to myPosts...!');
    this.router.navigate(['/my-posts']);
  }
  gotouserDetails(){
    console.log('got to profile...!');
    this.router.navigate(['/player-details']);
  }
  gotoMyprofile(){
    console.log('got to My profile...!');
    this.router.navigate(['/my-account']);
  }
  segmentChanged(event) {
    console.log('scroll',event.detail.value);
    let value = event.detail.value;
    // if(value == 2){
    //   this.createPosts()
    // }
    // if(value == 3){
    //   this.myPosts()
    // }
    // if(value == 4){
    //   this.gotoMyprofile()
    // }
    // this.content.scrollToTop();
  }
  
}
