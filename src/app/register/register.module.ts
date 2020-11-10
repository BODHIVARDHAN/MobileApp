import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';
import { GlobalserviceService } from '../service/globalservice.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RegisterPage } from './register.page';
import { createTranslateLoader } from '../setting/setting.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    // TranslateModule.forChild(),
     TranslateModule.forRoot({ 
      loader: { 
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage],
  providers: [GlobalserviceService,DatePipe]
})
export class RegisterPageModule {}
