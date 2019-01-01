import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { LoginPage } from "../pages/login/login";
import { TabsPage } from "../pages/tabs/tabs";
import { HomePage } from '../pages/home/home';
import { SightPage } from '../pages/sight/sight';
import { WelcomePage } from '../pages/welcome/welcome';

@Component({
  templateUrl: 'app.html',
  template: `<ion-nav [root]="rootPage"></ion-nav>`,
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, public storage: Storage,splashScreen: SplashScreen) {
     if(window.localStorage.getItem('username')) {
       this.rootPage = TabsPage;
     } else {
       this.rootPage = 'WelcomePage';
     }
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
