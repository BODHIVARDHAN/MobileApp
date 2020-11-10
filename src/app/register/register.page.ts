import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalserviceService } from '../service/globalservice.service';
import { ApiService } from '../service/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LoadingController, NavController } from '@ionic/angular';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  account:FormGroup;
  User:FormGroup;
  submitAttempt:boolean = false; 
  flag:boolean = true; 
  userInfo: any;
  value: any;
  currentDate: string;
  childAge: number;

  constructor(public router: Router,
  public navCtrl:NavController,
  public loadingCtrl: LoadingController,
  public globalService: GlobalserviceService,
  public api:ApiService,
  public datepipe: DatePipe,
  public translate: TranslateService,
  formBuilder: FormBuilder) {
    this.currentDate = new Date().toISOString();
    this.currentDate = this.currentDate.substring(0, 10);
    console.log('currentDate',this.currentDate);
    
    if(this.flag == true){
      this.User = formBuilder.group({
        user: ['', Validators.compose([Validators.required])],
      });
    }
    this.account = formBuilder.group({
      first_name: ['', Validators.compose([Validators.required])],
      last_name: ['', Validators.compose([Validators.required])], 
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^.+@.+\..+$/)])],
      age: ['', Validators.compose([Validators.required])],
      p_age: ['', Validators.compose([])],
      relation:['', Validators.compose([])],
      height:['', Validators.compose([Validators.required])],
      position:['', Validators.compose([Validators.required])],
      //phone_number: ['', Validators.compose([Validators.required, Validators.minLength(8),Validators.maxLength(10)])],
      password: ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d#@$!%*?&]{8,15}$/)])],
      cpassword: ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d#@$!%*?&]{8,15}$/)])]
    });
  }

  ngOnInit() {
    this.globalService.changeLanguage();
  }
  login(){
    this.router.navigate(['/home']);
  }
  isplayer(value){
    console.log('value',value);
    if(value == 1){
      this.value = "Agent";
    }else{
      this.value = "Player";
    }
    this.flag = false;
  }
  validate(event){
    console.log('Clicked date of birth',event.detail.value);
    console.log('age...!',event.detail.value);
    let latest_date = this.datepipe.transform(event.detail.value, 'yyyy/MM/dd');
    console.log('latest_date...!',latest_date);
    this.childAge = this.getAge(latest_date);
    if(this.childAge<18){
      console.log('Minnor');
      
    }
  }
  getAge(dateString) {
    console.log('dateString',dateString);
    var today = new Date();
    console.log('today..!',today);
    var birthDate = new Date(dateString);
    console.log('birthdate',birthDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    // console.log('age: ' + getAge("1991/05/31"));
    console.log('age: ',age);
    return age;
}
  async register(inputData){ 
    console.log('register',inputData);
    return;
    this.submitAttempt = true; 
    if(this.account.valid){
      if(inputData.password === inputData.cpassword){      
        const loading = await this.loadingCtrl.create({
          message: this.translate.instant('HOME.loading'),
        });
        await loading.present();
        let obj = {
          "first_name":inputData.first_name,
          "last_name":inputData.last_name,
          "email":inputData.email, 
          "password":inputData.password,
          "age":inputData.age
        } 
        this.api.register(obj).subscribe( async data=>{
          await loading.dismiss();
          this.userInfo = data;
          if(this.userInfo.status == 'ok' && this.userInfo.status_code == '200'){
            this.globalService.presentToast(this.translate.instant('Register.registration_success'));
            localStorage.setItem("token",this.userInfo.token);
            // localStorage.setItem("userId",this.userInfo.user.id);
            // localStorage.setItem("userData",JSON.stringify(this.userInfo.user));
            // this.navCtrl.navigateRoot('home');
            this.navCtrl.pop();
          }else{
            this.globalService.presentToast(this.translate.instant('Register.registration_failed'));
          }
        },async err=>{
          console.log('error',err);
           await loading.dismiss();
          this.globalService.presentToast(this.translate.instant('Register.registration_failed'));
        })
      }else{
        this.globalService.presentToast(this.translate.instant('Register.passwordMessage'));
      } 
    } 
  } 
  goBack(){
    this.navCtrl.pop();
    // this.router.navigate(['/register']); 
  }
}
