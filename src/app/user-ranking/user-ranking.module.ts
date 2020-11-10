import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserRankingPageRoutingModule } from './user-ranking-routing.module';
import { GlobalserviceService } from '../service/globalservice.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { UserRankingPage } from './user-ranking.page';
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
    UserRankingPageRoutingModule
  ],
  declarations: [UserRankingPage],
  providers: [GlobalserviceService]
})
export class UserRankingPageModule {}
