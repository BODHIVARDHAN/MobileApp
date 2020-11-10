import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalserviceService } from '../service/globalservice.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {
  createPost: FormGroup;
  UrlsData: any[] = [];
  UrlsDataImages: any[] = [];
  UrlsDataVideo: any[] = [];

  constructor(public translate: TranslateService,
    public router: Router,
    route:ActivatedRoute,
    public globalService: GlobalserviceService,
    formBuilder: FormBuilder
    ) {
      // console.log('route.queryParams',route.queryParams);
      route.params.subscribe(val => {
        console.log('val...!!',val)
      });
    this.createPost = formBuilder.group({
      first_name: ['', Validators.compose([Validators.required])],
      last_name: ['', Validators.compose([Validators.required])], 
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^.+@.+\..+$/)])],
      age: ['', Validators.compose([Validators.required])],
      p_age: ['', Validators.compose([])],
      relation:['', Validators.compose([])],
      height:['', Validators.compose([Validators.required])],
      position:['', Validators.compose([Validators.required])],
      availability:['', Validators.compose([Validators.required])],
      //phone_number: ['', Validators.compose([Validators.required, Validators.minLength(8),Validators.maxLength(10)])],
      salary: ['', Validators.compose([Validators.required])],
      cpassword: ['', Validators.compose([Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d#@$!%*?&]{8,15}$/)])]
    });
   }

   ngOnInit() { 
    this.globalService.changeLanguage();
  }
  ionViewDidEnter() {
    console.log("view did load");
    this.globalService.changeLanguage();
  }

  addVideoLink(item){
    this.UrlsDataVideo.push(item);
    console.log('this.tiers',this.UrlsDataVideo);
  }
  addImageLink(item){
    this.UrlsDataImages.push(item);
    console.log('this.tiers',this.UrlsDataImages);
  }
  removeImageLink(item){
    this.UrlsDataImages.pop();
    console.log('this.tiers',this.UrlsDataImages);
  }
  removeVideoLink(item){
    this.UrlsDataVideo.pop();
    console.log('this.tiers',this.UrlsDataVideo);
  }
}
