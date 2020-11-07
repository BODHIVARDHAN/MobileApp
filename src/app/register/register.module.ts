import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';
import { GlobalserviceService } from '../service/globalservice.service';
import { TranslateModule } from '@ngx-translate/core';
import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TranslateModule.forChild(),
    RegisterPageRoutingModule
  ],
  declarations: [RegisterPage],
  providers: [GlobalserviceService,DatePipe]
})
export class RegisterPageModule {}
