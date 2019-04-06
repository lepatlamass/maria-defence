import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from "ionic-angular";

@Component({
  selector: "page-personal",
  template: `
    <ion-header>
      <ion-navbar [color]="isAndroid ? 'royal' : 'primary'">
        <ion-title>Personel Incharge</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <h3
        style="color:#cf2a27;
         font-family:Baloobhai; text-align:center"
      >
        Personel are Available <br />
        Monday-Saturday
      </h3>
      <ion-grid>
        <ion-row>
          <ion-col col-6>
            <img
              src="assets/img/logo.jpg"
              width="150"
              height="150"
              alt="personnel"
            />
            <ion-list>
              <ion-item>
                <ion-label style="font-family:Baloobhai; font-size:13px">
                  Mr. Gabriel Foumbi</ion-label
                >
              </ion-item>
              <ion-item>
                <ion-label style=" font-size:13px">
                  Network logistics</ion-label
                >
              </ion-item>
              <ion-item>
                <ion-label style=" font-size:13px"> 09AM-5PM</ion-label>
              </ion-item>
              <button ion-button color="secondary" (click)="presentToast()">
                Request
              </button>
            </ion-list>
          </ion-col>
          <ion-col col-6>
            <img
              src="assets/img/logo.jpg"
              width="150"
              height="150"
              alt="personnel"
            />
            <ion-list>
              <ion-item>
                <ion-label style="font-family:Baloobhai; font-size:13px">
                  Mr. Gabriel Foumbi</ion-label
                >
              </ion-item>
              <ion-item>
                <ion-label style=" font-size:13px">
                  Network logistics</ion-label
                >
              </ion-item>
              <ion-item>
                <ion-label style=" font-size:13px"> 09AM-5PM</ion-label>
              </ion-item>
              <button ion-button color="secondary" (click)="presentToast()">
                Request
              </button>
            </ion-list>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col col-6>
            <img
              src="assets/img/logo.jpg"
              width="150"
              height="150"
              alt="personnel"
            />
            <ion-list>
              <ion-item>
                <ion-label style="font-family:Baloobhai; font-size:13px">
                  Mr. Gabriel Foumbi</ion-label
                >
              </ion-item>
              <ion-item>
                <ion-label style=" font-size:13px">
                  Network logistics</ion-label
                >
              </ion-item>
              <ion-item>
                <ion-label style=" font-size:13px"> 09AM-5PM</ion-label>
              </ion-item>
              <button ion-button color="secondary" (click)="presentToast()">
                Request
              </button>
            </ion-list>
          </ion-col>
          <ion-col col-6>
            <img
              src="assets/img/logo.jpg"
              width="150"
              height="150"
              alt="personnel"
            />
            <ion-list>
              <ion-item>
                <ion-label style="font-family:Baloobhai; font-size:13px">
                  Mr. Gabriel Foumbi</ion-label
                >
              </ion-item>
              <ion-item>
                <ion-label style=" font-size:13px">
                  Network logistics</ion-label
                >
              </ion-item>
              <ion-item>
                <ion-label style=" font-size:13px"> 09AM-5PM</ion-label>
              </ion-item>
              <button ion-button color="secondary" (click)="presentToast()">
                Request
              </button>
            </ion-list>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col col-6>
            <img
              src="assets/img/logo.jpg"
              width="150"
              height="150"
              alt="personnel"
            />
            <ion-list>
              <ion-item>
                <ion-label style="font-family:Baloobhai; font-size:13px">
                  Mr. Gabriel Foumbi</ion-label
                >
              </ion-item>
              <ion-item>
                <ion-label style=" font-size:13px">
                  Network logistics</ion-label
                >
              </ion-item>
              <ion-item>
                <ion-label style=" font-size:13px"> 09AM-5PM</ion-label>
              </ion-item>
              <button ion-button color="secondary" (click)="presentToast()">
                Request
              </button>
            </ion-list>
          </ion-col>
          <ion-col col-6>
            <img
              src="assets/img/logo.jpg"
              width="150"
              height="150"
              alt="personnel"
            />
            <ion-list>
              <ion-item>
                <ion-label style="font-family:Baloobhai; font-size:13px">
                  Mr. Gabriel Foumbi</ion-label
                >
              </ion-item>
              <ion-item>
                <ion-label style=" font-size:13px">
                  Network logistics</ion-label
                >
              </ion-item>
              <ion-item>
                <ion-label style=" font-size:13px"> 09AM-5PM</ion-label>
              </ion-item>
              <button ion-button color="secondary" (click)="presentToast()">
                Request
              </button>
            </ion-list>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  `
})
export class PeronelService {
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController
  ) {}
  // presentToast() {
  //   const toast = this.toastCtrl.create({
  //     message: "Request send",
  //     duration: 3000
  //   });
  //   toast.present();
  // }
}