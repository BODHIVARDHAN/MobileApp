import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';
import { GlobalserviceService } from '../service/globalservice.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LoginPage } from './login.page';
import { createTranslateLoader } from '../setting/setting.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  
    ReactiveFormsModule, 
     TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      } 
    }),
    LoginPageRoutingModule 
  ],
  declarations: [LoginPage],
    providers: [GlobalserviceService]
})
export class LoginPageModule {}
