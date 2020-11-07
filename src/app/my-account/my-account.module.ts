import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAccountPageRoutingModule } from './my-account-routing.module';
import { GlobalserviceService } from '../service/globalservice.service';
import { TranslateModule } from '@ngx-translate/core';
import { MyAccountPage } from './my-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    MyAccountPageRoutingModule
  ],
  declarations: [MyAccountPage],
  providers: [GlobalserviceService]
})
export class MyAccountPageModule {}
