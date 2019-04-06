import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PeronelService } from './personal';

@Component({
  selector: "page-enterprise",
  template: `
    <ion-header>
      <ion-navbar [color]="isAndroid ? 'royal' : 'primary'">
        <ion-title>Microsoft Expertise</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <p
        style="margin:auto; 
        font-family:Open-sans; 
        text-align:left;
        padding:1em; font-size:20px;"
      >
        Here, this engineering solution define the need of architecture and
        urbanization of information system, developing mobile application and
        website.
      </p>
      <h3
        style="color:#009e0f;
         font-family:Baloobhai;
          text-transform: Uppercase; 
          padding-left:1em;
           padding-right:1em;"
      >
        Website build by us
      </h3>
      <ion-list
        style=" 
        padding-left:1em;
        padding-right:1em;"
      >
        <ion-item><a href="#">www.example.com</a></ion-item>
        <ion-item><a href="#">www.example.com</a></ion-item>
        <ion-item><a href="#">www.example.com</a></ion-item>
      </ion-list>
      <h3
        style="color:#009e0f;
         font-family:Baloobhai;
          text-transform: Uppercase; 
          padding-left:1em;
           padding-right:1em;"
      >
        Mobile Apps build by us
      </h3>
      <ion-list
        style=" 
        padding-left:1em;
        padding-right:1em;"
      >
        <ion-item><a href="#">www.googleplaystore.com/example</a></ion-item>
        <ion-item><a href="#">www.googleplaystore.com/example</a></ion-item>
        <ion-item><a href="#">www.googleplaystore.com/example</a></ion-item>
      </ion-list>
      <div style="text-align:center">
        <button ion-button color="Myyellow" (click)="personalService()">
          See Personel
        </button>
      </div>
    </ion-content>
  `
})
export class EnterpriseService {
  constructor(public navCtrl: NavController) {}

  personalService(){
    this.navCtrl.push(PeronelService);
  }
}