import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GlobalserviceService } from '../service/globalservice.service';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.page.html',
  styleUrls: ['./player-details.page.scss'],
})
export class PlayerDetailsPage implements OnInit {

  constructor(public translate: TranslateService,
    public globalService: GlobalserviceService,) { }

  ngOnInit() {
    this.globalService.changeLanguage();
  }

}
