import {Component} from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: "page-microsoft",
  template: `
    <ion-header>
      <ion-navbar [color]="isAndroid ? 'royal' : 'primary'">
        <ion-title>Enterprise solutions</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <p
        style="margin:auto; 
        font-family:Open-sans; 
        text-align:left;
        padding:1em; font-size:20px;"
      >
        NGUETI IT SOLUTION is an enterprise that is cover with the combination
        of experts who are based in the solution of Microsoft and master the
        technology of Microsoft.
      </p>
      <h3
        style="color:#009e0f;
         font-family:Baloobhai;
          text-transform: Uppercase; 
          padding-left:1em;
           padding-right:1em;"
      >
        Which Fomation do you want ?
      </h3>
      <ion-list>
        <ion-item>
          <ion-label style="font-size: 13px;"
            >Microsoft certified professionals</ion-label
          >
          <ion-checkbox color="priamry"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label style="font-size: 13px;"
            >Microsoft certified solution developer.</ion-label
          >
          <ion-checkbox color="priamry"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label style="font-size: 13px;"
            >Microsoft certified technology specialist.</ion-label
          >
          <ion-checkbox color="priamry"></ion-checkbox>
        </ion-item>
        <ion-item>
          <ion-label style="font-size: 13px;"
            >Microsoft certified system administrator.</ion-label
          >
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
export class MicrosoftService {
  constructor(public navCtrl: NavController) {}
}