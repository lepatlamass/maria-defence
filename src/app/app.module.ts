import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ContactPage } from '../pages/contact/contact';
import { AboutPage } from '../pages/about/about';
import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from "../pages/signup/signup";
import { EnterpriseService } from "../pages/services/enterprise";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule} from "angularfire2/auth";


import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MicrosoftService } from '../pages/services/microsoft';
import { DeliveryService } from '../pages/services/delivery';
import { PeronelService } from '../pages/services/personal';
import { FIREBASE_CONFIG } from './app.firebase.config';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    AboutPage,
    IntroPage,
    TabsPage,
    LoginPage,
    SignupPage,
    EnterpriseService,
    MicrosoftService,
    DeliveryService,
    PeronelService
  ],
  imports: [BrowserModule, 
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage,
    HomePage,
    ContactPage,
    AboutPage,
    TabsPage,
    LoginPage,
    SignupPage,
    EnterpriseService,
    MicrosoftService,
    DeliveryService,
    PeronelService
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
