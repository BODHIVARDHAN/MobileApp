import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAccountPageRoutingModule } from './my-account-routing.module';
import { GlobalserviceService } from '../service/globalservice.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MyAccountPage } from './my-account.page';
import { createTranslateLoader } from '../setting/setting.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
     TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    MyAccountPageRoutingModule
  ],
  declarations: [MyAccountPage],
  providers: [GlobalserviceService]
})
export class MyAccountPageModule {}
