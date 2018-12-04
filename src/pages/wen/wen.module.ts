import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WenPage } from './wen';

@NgModule({
  declarations: [
    WenPage,
  ],
  imports: [
    IonicPageModule.forChild(WenPage),
  ],
})
export class WenPageModule {}
