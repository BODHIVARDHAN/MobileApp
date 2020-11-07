import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserRankingPageRoutingModule } from './user-ranking-routing.module';
import { GlobalserviceService } from '../service/globalservice.service';
import { TranslateModule } from '@ngx-translate/core';
import { UserRankingPage } from './user-ranking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule.forChild(),
    UserRankingPageRoutingModule
  ],
  declarations: [UserRankingPage],
  providers: [GlobalserviceService]
})
export class UserRankingPageModule {}
