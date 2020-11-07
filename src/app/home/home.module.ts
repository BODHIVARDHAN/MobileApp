import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { GlobalserviceService } from '../service/globalservice.service';
import { InAppPurchase2 } from '@ionic-native/in-app-purchase-2/ngx';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  providers: [
    InAppPurchase2,GlobalserviceService
  ]
})
export class HomePageModule {}
