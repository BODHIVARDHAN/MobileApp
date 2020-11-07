import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalserviceService } from '../service/globalservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { ApiService } from '../service/api.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  account:FormGroup;
  submitAttempt: boolean;
  userInfo: any;
  failedFlag = false;
  errormessage: any;

  constructor(public router: Router,
    public loadingCtrl: LoadingController,
    public globalService: GlobalserviceService,
    public api:ApiService,
    public translate: TranslateService,
    formBuilder: FormBuilder) {
      this.account = formBuilder.group({ 
        email: ['', Validators.compose([Validators.required, Validators.pattern(/^.+@.+\..+$/)])], 
        password: ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d#@$!%*?&]{8,15}$/)])] 
      });
    }

  ngOnInit() {
    this.globalService.changeLanguage();
  }
  // login(){
  //   // this.router.navigate(['/image-of-day']);
  //   this.router.navigate(['/home']);
  // }
  login(){
    this.router.navigate(['/home'],{state: {flag:true}});
    // this.router.navigate(['/home']);
  }
  goToRegister(){
    this.router.navigate(['/register']);
  }
  // async login(inputData) {
  //   // this.router.navigate(['/home']);
  //   this.submitAttempt = true;  
  //   if(this.account.valid){
  //     console.log("inputData",inputData); 
  //     const loading = await this.loadingCtrl.create({
  //       message: this.translate.instant('HOME.loading'),
  //     });
  //     await loading.present();
  //     let loginData = {};
  //     loginData['email'] = inputData.email;
  //     loginData['password'] = inputData.password;
  //     console.log("loginData",loginData);
  //     this.api.login(loginData).subscribe( async data=>{
  //       await loading.dismiss();
  //       this.userInfo = data;
  //       console.log("data",this.userInfo);
  //       if(this.userInfo.status == "ok" && this.userInfo.status_code == "200"){
  //         localStorage.setItem("token",this.userInfo.token);
  //         localStorage.setItem("userId",this.userInfo.data.id);
  //         localStorage.setItem("userData",JSON.stringify(this.userInfo.data));
  //         this.globalService.presentToast(this.translate.instant('Login.login_success'));
  //         // this.navCtrl.navigateRoot('/tabs'); 
  //         this.router.navigate(['/home']);
  //       }else{ 
  //         this.failedFlag = true;
  //         this.errormessage = this.translate.instant('Login.'+ this.userInfo.message);
  //         // this.globalService.presentToast(this.translate.instant('Login.'+ this.userInfo.message));
  //       }
  //     },err=>{
  //       console.log('error',err);
  //       loading.dismiss(); 
  //       this.globalService.presentToast(this.translate.instant('Login.login_failed'));
  //     })
  //   }
  // }
}
