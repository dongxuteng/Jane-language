import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SightPage } from '../pages/sight/sight';
import { InfoPage } from '../pages/info/info';
import { MePage } from '../pages/me/me';
import { ChatPage } from '../pages/chat/chat';
import {WelcomePage} from '../pages/welcome/welcome';
import { HelpPage } from '../pages/help/help';
import { SwitchAccountPage } from '../pages/switch-account/switch-account';
import { FeedbackPage } from '../pages/feedback/feedback';
import { OpenclosePage } from '../pages/openclose/openclose';
import { SwicityPage } from '../pages/swicity/swicity';
import { OpagePage } from '../pages/opage/opage';
import { UpdatePage } from '../pages/update/update';
import { HttpClientModule } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SightPage,
    InfoPage,
    MePage,
    ChatPage,
    WelcomePage,
    HelpPage,
    SwitchAccountPage,
    FeedbackPage,
    OpenclosePage,
    SwicityPage,
    OpagePage,
    UpdatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    SightPage,
    InfoPage,
    MePage,
    ChatPage,
    WelcomePage,
    HelpPage,
    SwitchAccountPage,
    FeedbackPage,
    OpenclosePage,
    SwicityPage,
    OpagePage,
    UpdatePage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    Storage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
