import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {
  createPost: FormGroup;;

  constructor(public translate: TranslateService,
    formBuilder: FormBuilder
    ) {

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
  }

}
