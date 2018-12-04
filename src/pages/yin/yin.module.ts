import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YinPage } from './yin';

@NgModule({
  declarations: [
    YinPage,
  ],
  imports: [
    IonicPageModule.forChild(YinPage),
  ],
})
export class YinPageModule {}
