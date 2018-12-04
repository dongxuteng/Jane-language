import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfoPage } from './info';
import { ChatPage } from '../chat/chat';
@NgModule({
  declarations: [
    InfoPage,
    ChatPage
  ],
  imports: [
    IonicPageModule.forChild(InfoPage),
  ],
})
export class InfoPageModule {}
