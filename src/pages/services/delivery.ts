import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: "page-delivery",
  template: `
    <ion-header>
      <ion-navbar [color]="isAndroid ? 'royal' : 'primary'">
        <ion-title>Preparation and delivery</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <p
        style="margin:auto; 
        font-family:Open-sans; 
        text-align:left;
        padding:1em; font-size:20px;"
      >
        NGUETI IT SOLUTION activity is also base on the preparation and
        deliverance of good and services demanded by their customers via their
        website.
      </p>
      <h3
        style="color:#009e0f;
         font-family:Baloobhai;
          text-transform: Uppercase; 
          padding-left:1em;
           padding-right:1em;"
      >
        Which services do you want ?
      </h3>
      <ion-list>
        <ion-item>
          <ion-label style="font-size: 13px;">Installation</ion-label>
          <ion-checkbox color="priamry"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label style="font-size: 13px;">Migration</ion-label>
          <ion-checkbox color="priamry"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label style="font-size: 13px;">Evolution</ion-label>
          <ion-checkbox color="priamry"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label style="font-size: 13px;">Others</ion-label>
          <ion-checkbox color="priamry"></ion-checkbox>
        </ion-item>
      </ion-list>
      <div style="text-align:center">
        <button ion-button color="secondary">Send</button>
        <button ion-button color="Myyellow">See Personel</button>
      </div>
    </ion-content>
  `
})
export class DeliveryService {
  constructor(public navCtrl: NavController) {}
}