import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgotPasswordPageRoutingModule } from './forgot-password-routing.module';
import { GlobalserviceService } from '../service/globalservice.service';
import { TranslateModule } from '@ngx-translate/core';
import { ForgotPasswordPage } from './forgot-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    ForgotPasswordPageRoutingModule
  ],
  declarations: [ForgotPasswordPage],
  providers: [GlobalserviceService]
})
export class ForgotPasswordPageModule {}
