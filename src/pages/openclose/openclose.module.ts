import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenclosePage } from './openclose';

@NgModule({
  declarations: [
    OpenclosePage,
  ],
  imports: [
    IonicPageModule.forChild(OpenclosePage),
  ],
})
export class OpenclosePageModule {}
