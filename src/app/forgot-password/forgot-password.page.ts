import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalserviceService } from '../service/globalservice.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  account:FormGroup;
  submitAttempt: boolean;
  constructor(formBuilder: FormBuilder,
    public globalService: GlobalserviceService) {
    this.account = formBuilder.group({ 
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^.+@.+\..+$/)])] 
    });
   }

  ngOnInit() {
    this.globalService.changeLanguage();
  }

  submit(inputData){
    this.submitAttempt = true;
  }

}
