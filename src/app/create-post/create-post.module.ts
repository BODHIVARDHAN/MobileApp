import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePostPageRoutingModule } from './create-post-routing.module';

import { CreatePostPage } from './create-post.page';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../setting/setting.module';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
     loader: {
       provide: TranslateLoader,
       useFactory: createTranslateLoader,
       deps: [HttpClient]
     }
   }),

    CreatePostPageRoutingModule
  ],
  declarations: [CreatePostPage]
})
export class CreatePostPageModule {}
