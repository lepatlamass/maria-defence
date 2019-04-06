import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EnterpriseService } from '../services/enterprise';
import { MicrosoftService } from '../services/microsoft';
import { DeliveryService } from '../services/delivery';


@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController) {}

  playEnterprise() {
    this.navCtrl.push(EnterpriseService);
  }

  playMicrosoft() {
    this.navCtrl.push(MicrosoftService);
  }

  playPreparation() {
    this.navCtrl.push(DeliveryService);
  }

  // playYoutube() {
  //   this.navCtrl.push(YoutubeVideo);
  // }
}
