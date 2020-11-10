import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { GlobalserviceService } from '../service/globalservice.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.page.html',
  styleUrls: ['./my-posts.page.scss'],
})
export class MyPostsPage implements OnInit {

  constructor(public translate: TranslateService,
    public router: Router,
    public globalService: GlobalserviceService,
    public alertController: AlertController) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    console.log("view did load");
    this.globalService.changeLanguage();
  }
  editPost() {
    console.log('Edit posts...!!');
    this.router.navigate(['/create-post'],{state: {flag:true}});
  } 
  deletePost() {
    console.log('Delte posts...!!');
  }
  async presentAlert(text) {
    const alert = await this.alertController.create({
      header: 'Delete Post',
      message: 'Are you sure you want to permanently delete this post ?',
      buttons: [{
        text: 'Yes',
        handler: () => {
          console.log('goto delete posts....!!');
          this.deletePost()
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }]
    });

    await alert.present();
  }
}
