import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { GlobalserviceService } from '../service/globalservice.service';
import { TranslateModule } from '@ngx-translate/core';
import { LoginPage } from './login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  
    ReactiveFormsModule,
    TranslateModule.forChild(),
    LoginPageRoutingModule 
  ],
  declarations: [LoginPage],
    providers: [GlobalserviceService]
})
export class LoginPageModule {}
