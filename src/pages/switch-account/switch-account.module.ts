import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwitchAccountPage } from './switch-account';

@NgModule({
  declarations: [
    SwitchAccountPage,
  ],
  imports: [
    IonicPageModule.forChild(SwitchAccountPage),
  ],
})
export class SwitchAccountPageModule {}
