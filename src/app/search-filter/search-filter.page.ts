import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.page.html',
  styleUrls: ['./search-filter.page.scss'],
})
export class SearchFilterPage implements OnInit {

  filteredEvents: any;
  constructor(public modalController: ModalController,
    public translate: TranslateService,
    public navCtrl:NavController) { }

  ngOnInit() {
    console.log('Enters into model...!');
  }
  close(){
    this.modalController.dismiss();
  }

  closeModal() {

    this.modalController.dismiss(this.filteredEvents,"true");
  }
  filterProducts(){
    this.modalController.dismiss();
  }

}
